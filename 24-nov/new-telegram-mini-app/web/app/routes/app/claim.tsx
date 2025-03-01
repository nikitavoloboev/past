import { useQuery } from "@tanstack/react-query"
import { createFileRoute } from "@tanstack/react-router"
import { Address } from "@ton/core"
import { useTonAddress } from "@tonconnect/ui-react"
import { formatDistanceToNow } from "date-fns"
import {
  $getAirdropsAvailableForClaim,
  $getEntriesForAirdrop,
  $setAirdropWalletForClaimAsClaimed,
} from "~/actions"
import Footer from "~/components/Footer"
import useBlockchainActions, { fromNanoDigits } from "~/lib/airdrop/useActions"

function RouteComponent() {
  const address = useTonAddress()
  const { claimAirdrop, isUserClaimedAirdrop } = useBlockchainActions()
  const { data: airdrops } = useQuery({
    queryKey: ["claim-airdrop", address],
    queryFn: async () => {
      const res = await $getAirdropsAvailableForClaim({ address })
      return res
    },
    enabled: !!address,
  })
  return (
    <>
      <div className="h-screen">
        <div className="flex flex-col items-center justify-center text-[16px] text-white/60"></div>
        {!address && (
          <div className="text-center p-8 text-lg text-white/80 font-medium">
            Connect your wallet to see if you can claim something
          </div>
        )}
        {address && airdrops?.length === 0 && (
          <div className="text-center p-8 text-lg text-white/80 font-medium">
            No airdrops available for claim
          </div>
        )}
        {airdrops?.map((airdrop) => (
          <div
            key={airdrop.id}
            className="p-2 bg-gradient-to-r space-x-2 from-purple-500 to-pink-500 rounded-lg flex flex-row items-center"
          >
            <img
              className="w-7 h-7 rounded-full"
              src={airdrop.image}
              alt={airdrop.jettonName}
            />
            <p
              className={`
                relative overflow-hidden
                text-white font-bold text-lg
                transform transition-all duration-300 ease-in-out cursor-pointer
              `}
              onClick={async () => {
                try {
                  const entries = await $getEntriesForAirdrop({
                    airdropAddress: airdrop.airdropAddress,
                  })
                  console.log(entries, "entries")
                  // @ts-ignore
                  const parsedEntries = entries.map((entry) => ({
                    address: Address.parse(entry.walletAddress),
                    amount: BigInt(entry.tokenAmount),
                  }))
                  if (
                    await isUserClaimedAirdrop(
                      Address.parse(airdrop.airdropAddress),
                      parsedEntries,
                    )
                  ) {
                    console.warn("Already claimed")
                    await $setAirdropWalletForClaimAsClaimed({
                      airdropAddress: airdrop.airdropAddress.toString(),
                      walletAddress: address,
                      // @ts-ignore
                      entries: entries?.map((entry) => ({
                        address: entry.walletAddress,
                        amount: entry.tokenAmount,
                      })),
                    })
                    //TODO: hide airdrop from interface
                    return
                  }

                  console.log(parsedEntries, "parsedEntries")
                  console.log(airdrop.airdropAddress, "testing..")
                  await claimAirdrop({
                    airdropAddress: Address.parse(airdrop.airdropAddress),
                    entries: parsedEntries,
                  })
                  //TODO: show loader
                  await new Promise((e) => setTimeout(e, 50_000))

                  // ..
                  const res = await $setAirdropWalletForClaimAsClaimed({
                    airdropAddress: airdrop.airdropAddress.toString(),
                    walletAddress: address,
                    // @ts-ignore
                    entries: entries?.map((entry) => ({
                      address: entry.walletAddress,
                      amount: entry.tokenAmount,
                    })),
                  })
                  //TODO: hide loader
                  //TODO: hide airdrop from interface
                } catch (err) {
                  console.log(err, "err")
                }
              }}
            >
              Claim{" "}
              {fromNanoDigits(BigInt(airdrop.userAmount), +airdrop.digits)}{" "}
              {airdrop.jettonName} before {/* @ts-ignore */}
              {formatDistanceToNow(new Date(airdrop.endDate))}
            </p>
          </div>
        ))}
        <div className="w-screen absolute bottom-0">
          <Footer />
        </div>
      </div>
    </>
  )
}

export const Route = createFileRoute("/app/claim")({
  component: RouteComponent,
})
