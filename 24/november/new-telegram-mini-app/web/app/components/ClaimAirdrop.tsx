// import { treaty } from "@elysiajs/eden"
import { AirdropToClaim } from "@ronin/drophunt"
import { useQuery } from "@tanstack/react-query"
import { Address } from "@ton/core"
import { useTonAddress } from "@tonconnect/ui-react"
// import { App } from "api/src/api"
import { formatDistanceToNow } from "date-fns"
// import useBlockchainActions from "~/lib/airdrop/useActions"
// const app = treaty<App>("https://drophunt-production-0380.up.railway.app")

export function ClaimAirdrop() {
  // const { claimAirdrop } = useBlockchainActions()
  const address = useTonAddress()

  const { data, error, isLoading } = useQuery({
    queryKey: ["fetchAirdropData", address],
    queryFn: () =>
      fetch(
        "https://drophunt-production-0380.up.railway.app/check-if-wallet-has-airdrops-to-claim",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            walletAddress: address,
          }),
        },
      ).then((res) => {
        if (!res.ok) {
          throw new Error("Error fetching airdrop data")
        }
        return res.json()
      }),
    enabled: !!address,
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading airdrop data</div>
  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto p-6 rounded-lg shadow-md">
      <div className="space-y-4">
        {data?.map((airdrop: AirdropToClaim) => (
          <div key={airdrop.id}>
            <p
              className={`
							relative overflow-hidden px-6 py-3 rounded-full
							bg-gradient-to-r from-purple-500 to-pink-500
							text-white font-bold text-lg
							transform transition-all duration-300 ease-in-out cursor-pointer
						`}
              onClick={async () => {
                const entries = await app["get-entries-for-airdrop"].post({
                  airdropAddress: airdrop.airdropAddress,
                })
                console.log(entries, "entries!!")
                // @ts-ignore
                const parsedEntries = entries?.data.map((entry) => ({
                  address: Address.parse(entry.walletAddress),
                  amount: BigInt(entry.tokenAmount),
                }))
                console.log(parsedEntries, "parsedEntries")
                console.log(airdrop.airdropAddress, "testing..")
                await claimAirdrop({
                  airdropAddress: Address.parse(airdrop.airdropAddress),
                  entries: parsedEntries,
                })
                await fetch(
                  "http://localhost:8787/set-airdrop-wallet-for-claim-as-claimed",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      airdropAddress: airdrop.airdropAddress,
                      walletAddress: address,
                      // @ts-ignore
                      entries: entries.map((entry) => ({
                        address: entry.walletAddress,
                        amount: entry.tokenAmount.toString(),
                      })),
                    }),
                  },
                )
              }}
            >
              Claim before:{" "}
              <strong>{formatDistanceToNow(new Date(airdrop.endDate))}</strong>{" "}
              passes
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
