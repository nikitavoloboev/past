import { useQuery } from "@tanstack/react-query"
import { createFileRoute } from "@tanstack/react-router"
import { useTonAddress } from "@tonconnect/ui-react"
import { $appEarn } from "~/actions"
import Footer from "~/components/Footer"
import NeubrutalismButton from "~/components/WtfButton"
import { init, openTelegramLink, shareURL } from "@telegram-apps/sdk-react"

function RouteComponent() {
  const address = useTonAddress()
  const { data } = useQuery({
    queryKey: ["/app/earn", address],
    queryFn: async () => {
      if (!address) return await $appEarn({})
      return await $appEarn({ address })
    },
  })
  if (!data) return null
  return (
    <div className="flex w-[95%] mx-auto h-full flex-col gap-[12px]">
      {address && data.userRank && (
        <>
          <div className="flex h-[65px] bg-neutral-600 rounded-lg w-full gap-[20px] items-center justify-between pl-4">
            {data.userRank.position && (
              <div className="border-r flex items-center justify-center border-slate-400/20 h-full pr-[20px] p-4">
                {data.userRank.position}
              </div>
            )}
            <div className="flex flex-col gap-1 overflow-hidden w-full px-2 p-4">
              <div className="opacity-80">Your Address</div>
              <div className="overflow-ellipsis w-[120px] text-white text-[20px]">
                {address.slice(0, 5) + "..." + address.slice(-5)}
              </div>
            </div>
            <div className="flex flex-col items-end p-4 gap-1">
              <div className="opacity-80">Points</div>
              <div className="text-white text-[20px]">
                {data.userRank.points}
              </div>
            </div>
          </div>
        </>
      )}
      <div className="flex flex-row justify-between w-full py-3">
        <div
          className="font-bold text-[18px]"
          style={{ fontFamily: "Dela Gothic One" }}
        >
          Leaders
        </div>
        <NeubrutalismButton
          name="Share"
          onClick={() => {
            // TODO: not sure how to do with new sdk, asked
            // const telegramId = initData?.user?.id
            // shareURL("https://t.me/DrophuntAppBot/DropHunt?startapp=${telegramId}")
          }}
        />
      </div>

      {/* @ts-ignore */}
      {data.usersWithTopPoints.map((leader, index) => (
        <div
          key={leader.walletAddress}
          className="flex h-[65px] bg-neutral-800 rounded-lg w-full gap-[20px] items-center justify-between"
        >
          <div className="border-r flex items-center justify-center border-slate-400/20 h-full pr-[20px] p-4">
            {index + 1}
          </div>
          <div className="flex flex-col gap-1 overflow-hidden w-full px-2 p-4">
            <div className="opacity-80">Address</div>
            <div className="overflow-ellipsis w-[90%] text-white text-[20px]">
              {leader.walletAddress &&
                leader.walletAddress.slice(0, 5) +
                  "..." +
                  leader.walletAddress.slice(-5)}
            </div>
          </div>
          <div className="flex flex-col items-end p-4 gap-1">
            <div className="opacity-65">Points</div>
            <div className="text-white text-[20px]">{leader.points}</div>
          </div>
        </div>
      ))}
      <div className="w-screen">
        <Footer />
      </div>
    </div>
  )
}

export const Route = createFileRoute("/app/earn")({
  component: RouteComponent,
})
