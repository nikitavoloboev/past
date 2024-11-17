import { AirdropToClaim } from "@ronin/drophunt"
import { createServerFn } from "@tanstack/start"
import { Address } from "@ton/core"
import { batch, count, create, get, set } from "ronin"
import { isProduction } from "./lib/utils"
import {
  Airdrop,
  AirdropEntry,
  generateEntriesDictionary,
} from "./lib/airdrop/wrappers/Airdrop"
import { tonClient } from "./lib/ton-sender"
import { AirdropHelper } from "./lib/airdrop/wrappers/AirdropHelper"

export const $appAirdrops = createServerFn("GET", async () => {
  const [airdrops, ads, global, userCount] = await batch(() => [
    get.airdrops.orderedBy.ascending(["orderNumber"]),
    get.ads(),
    get.global(),
    count.users(),
  ])
  return {
    airdrops,
    ads,
    global,
    userCount,
  }
})

export const $appEarn = createServerFn(
  "POST",
  async (data: { address?: string }) => {
    const { address } = data
    const usersWithTopPoints = await get.users({
      with: {
        points: { greaterThan: 0 },
        walletAddress: { notBeing: null },
      },
      orderedBy: { descending: ["points"] },
      limitedTo: 10,
    })
    if (!address) return { usersWithTopPoints }
    const user = await get.user.with({
      walletAddress: address,
    })
    if (!user) return { usersWithTopPoints }

    // find the index of the current user
    const userPosition = usersWithTopPoints.findIndex((u) => u.id === user.id)

    // add 1 to the index to get the position (1-based instead of 0-based)
    const userRank = userPosition + 1

    return {
      usersWithTopPoints,
      userRank: {
        position: userRank,
        points: user.points,
      },
    }
  },
)

export const $getAirdropById = createServerFn(
  "POST",
  async (data: { airdropId: string }) => {
    const { airdropId } = data
    return await get.airdrop.with({
      id: airdropId,
    })
  },
)

export const $getAirdropsAvailableForClaim = createServerFn(
  "POST",
  async (data: { address: string }) => {
    const { address } = data
    const currentDate = new Date()
    const properAddress = Address.parse(address).toString()
    const airdropWalletsForClaim = await get.airdropWalletsForClaim.with({
      walletAddress: properAddress,
      claimed: false,
    })
    let airdropsForClaim: (AirdropToClaim & { userAmount: string })[] = []
    await Promise.all(
      airdropWalletsForClaim.map(async (airdrop) => {
        const airdropToClaim = await get.airdropToClaim.with({
          id: airdrop.airdropToClaim,
        })
        if (!airdropToClaim) return
        airdropsForClaim.push({
          ...airdropToClaim,
          userAmount: airdrop.tokenAmount,
        })
      }),
    )
    return airdropsForClaim.filter(
      (airdrop) =>
        airdrop.devnet === !isProduction &&
        new Date(airdrop.endDate) > currentDate,
    )
  },
)

export const $getEntriesForAirdrop = createServerFn(
  "POST",
  async (data: { airdropAddress: string }) => {
    const { airdropAddress } = data
    const entries = await get.airdropWalletsForClaim.with({
      airdropToClaim: {
        airdropAddress,
      },
    })
    // Sort entries by indexNumber in ascending order
    return entries.sort((a, b) => a.indexNumber - b.indexNumber)
  },
)

export const $setAirdropWalletForClaimAsClaimed = createServerFn(
  "POST",
  async (data: {
    airdropAddress: string
    walletAddress: string
    entries: {
      address: string
      amount: string
    }[]
  }) => {
    try {
      const { airdropAddress, walletAddress, entries } = data
      if (
        await isUserClaimedAirdrop(
          Address.parse(walletAddress),
          Address.parse(airdropAddress),
          entries.map((entry) => ({
            address: Address.parse(entry.address),
            amount: BigInt(entry.amount),
          })),
        )
      ) {
        const airdrop = await get.airdropToClaim.with({
          airdropAddress,
        })
        if (!airdrop) throw new Error("Airdrop not found")
        console.warn("Wallet address", walletAddress, "already claimed")
        await set.airdropWalletsForClaim({
          with: {
            airdropToClaim: airdrop.id,
            walletAddress: Address.parse(walletAddress).toString(),
          },
          to: {
            claimed: true,
          },
        })
      }
      return { error: false }
    } catch (err) {
      console.log(err, "err")
      return { error: true }
    }
  },
)

async function isUserClaimedAirdrop(
  owner: Address,
  airdropAddress: Address,
  airdropWallets: AirdropEntry[],
): Promise<boolean> {
  const dict = generateEntriesDictionary(airdropWallets)
  const index = airdropWallets.findIndex((e) => e.address.equals(owner!))
  if (index === -1) throw new Error("You are not in the airdrop list")
  const airdrop = tonClient.open(Airdrop.createFromAddress(airdropAddress))
  const { helperCode } = await airdrop.getContractData()
  const proof = dict.generateMerkleProof([BigInt(index)])
  const helper = tonClient.open(
    AirdropHelper.createFromConfig(
      {
        airdrop: airdropAddress,
        index: BigInt(index),
        proofHash: proof.hash(),
      },
      helperCode,
    ),
  )

  return await helper.getClaimed()
}

export const $createAirdropWalletToClaim = createServerFn(
  "POST",
  async (data: {
    airdropAddress: string
    startDate: number // unix
    endDate: number // unix
    jettonAddress: string
    mainnet: boolean
    airdropWalletsForClaim: {
      walletAddress: string
      tokenAmount: string
      index: number
    }[]
    metadata: {
      decimals: number
      image: string
      title: string
    }

    creatorAddress: string
  }) => {
    const {
      airdropAddress,
      startDate,
      endDate,
      airdropWalletsForClaim,
      jettonAddress,
      mainnet,
      creatorAddress,
    } = data
    const airdropToClaim = await create.airdropToClaim.with({
      airdropAddress,
      jettonAddress,
      startDate: new Date(startDate * 1000),
      endDate: new Date(endDate * 1000),
      devnet: !mainnet,
      fundsDrained: false,
      image: data.metadata.image,
      digits: data.metadata.decimals.toString(),
      jettonName: data.metadata.title,
      ownerAddress: creatorAddress,
    })
    if (!airdropToClaim) throw new Error("Failed to create airdrop to claim")
    await Promise.all(
      airdropWalletsForClaim.map(async (entry) => {
        console.log(entry, "adding entry")
        const { walletAddress, tokenAmount, index } = entry
        await create.airdropWalletForClaim.with({
          airdropToClaim: airdropToClaim.id,
          walletAddress,
          tokenAmount,
          indexNumber: index,
          claimed: false,
        })
      }),
    )
    console.log(airdropToClaim)
  },
)
