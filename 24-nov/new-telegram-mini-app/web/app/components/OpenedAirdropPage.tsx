import { useState } from "react"
import { useQuery, useSuspenseQuery } from "@tanstack/react-query"
// import { App } from "api/src/api"
import { BsChevronDoubleUp } from "react-icons/bs"
import { useProxy } from "valtio/utils"
import Sheet from "./Sheet"
import { useTonWallet } from "@tonconnect/ui-react"
import { globalState } from "~/routes/__root"
import { Airdrop } from "@ronin/drophunt"
import AirdropCounter from "./AirdropCounter"
import Icons from "./Icon"
import TopUpBalanceModal from "./TopUpBalanceModal"

// const app = treaty<App>("https://drophunt-production-0380.up.railway.app")

export default function OpenedAirdropPage(props: {
  airdrop: Airdrop | null
  telegramId?: number
  onClose: () => void
}) {
  const global = useProxy(globalState)
  const { data, error, isLoading } = useSuspenseQuery<any>({
    queryKey: ["/"],
    queryFn: async (): Promise<any> => {
      const res = await fetch("/api/data")
      return res.json()
    },
  })

  const [balanceModalOpen, setBalanceModalOpen] = useState(false)
  const wallet = useTonWallet()

  return (
    <Sheet isOpen={global.openedAirdrop !== null} onClose={props.onClose}>
      {global.openedAirdrop !== null && data && (
        <>
          <div className="flex flex-col overflow-auto justify-between items-center w-full pb-20 gap-[22px]">
            <div className="h-full bg-[#2E2E2E] w-full rounded-t-[20px]">
              <div className="flex gap-3 items-center px-4 p-3">
                {global.openedAirdrop?.image?.src && (
                  <img
                    src={global.openedAirdrop.image.src}
                    className="w-[50px] h-[50px] bg-[#3a3a3a] rounded-full"
                  />
                )}
                <div className="flex flex-col flex-grow">
                  <div
                    className="flex justify-between items-center w-full"
                    style={{
                      fontFamily: "Dela Gothic One",
                    }}
                  >
                    <div className="text-[22px] font-bold">
                      {global.openedAirdrop.name}
                    </div>
                  </div>
                  <div className="flex gap-2 pt-2 items-center">
                    <div
                      onClick={() => {
                        console.log(global.openedAirdrop, "opened airdrop")
                      }}
                      className={`px-3 p-1 rounded-full ${
                        global.openedAirdrop.active &&
                        new Date(global.openedAirdrop.activeUntil) > new Date()
                          ? "bg-[#189A4C]"
                          : "bg-red-600"
                      }`}
                    >
                      {global.openedAirdrop.active &&
                      new Date(global.openedAirdrop.activeUntil) > new Date()
                        ? "Active"
                        : "Expired"}
                    </div>
                    <div className="border rounded-full border-[#3A3A3A] px-3 p-1">
                      {global.openedAirdrop.blockchain}
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="w-full overflow-auto">
								<div className="bg-[#232323]  w-full p-4"> */}
              <div className="text-sm text-white/70 overflow-auto p-4 font-light">
                <p
                  className="font-bold text-[20px] mb-3"
                  style={{
                    fontFamily: "Dela Gothic One",
                  }}
                >
                  Description
                </p>
                {global.openedAirdrop.description}
              </div>
            </div>
            <div className="bg-[#191919]  w-full p-2">
              <p
                className="font-bold text-[20px] mb-2"
                style={{
                  fontFamily: "Dela Gothic One",
                }}
              >
                Conditions
              </p>
              {global.openedAirdrop.conditions
                .split("\n")
                .filter((condition) => condition.trim() !== "")
                .map((condition, index) => (
                  <div
                    key={index}
                    className="flex items-center w-full gap-2 text-white/60 text-[12px]"
                  >
                    <div className="w-[8px] h-[8px] bg-[#189A4C] rounded-full"></div>
                    {condition}
                  </div>
                ))}
            </div>
            {/* </div>
						</div> */}
            {/* TODO: crushing */}
            {wallet &&
              // TODO: can revert if anything
              // global.isAdmin &&
              global.featureFlags.burningToken &&
              global.openedAirdrop?.active &&
              new Date(global.openedAirdrop.activeUntil) >= new Date() && (
                <>
                  {!balanceModalOpen ? (
                    <div className="w-full flex justify-center z-[1000] my-1">
                      <button
                        className="px-7 flex flex-row items-center bg-transparent border border-white/20 text-[#23C463] py-3 rounded-full text-lg font-bold"
                        onClick={() => {
                          // TODO: rename it to burn tokens modal
                          setBalanceModalOpen(true)
                          // TODO: potentially hide the button or
                          // if (global.pepeTokens && global.pepeTokens > 0) {
                          // }
                        }}
                      >
                        Raise to the Top
                        <BsChevronDoubleUp className="ml-2" />
                      </button>
                    </div>
                  ) : (
                    <TopUpBalanceModal
                      autoFocus={true}
                      onClose={() => setBalanceModalOpen(false)}
                    />
                  )}
                </>
              )}
            <div className="text-[20px] tracking-tighter relative font-bold overflow-hidden bg-[#191919] rounded-[20px] flex items-center justify-center w-full py-10">
              {Array.from({ length: 15 }).map((_, index) => (
                <div
                  key={index}
                  className="absolute w-[18px] h-[18px]"
                  style={{
                    top: `${Math.floor(index / 5) * 25 + 9}%`,
                    left: `${(index % 5) * 20 + 7}%`,
                    transform: `translateX(${
                      (index + 1) * (Math.random() * 2) * (Math.random() * 2)
                    }px) `,
                  }}
                >
                  <Icons name="Pepe" />
                </div>
              ))}

              <div className="z-20 absolute inset-0 flex items-center justify-center">
                {global.openedAirdrop.activeUntil && (
                  <AirdropCounter
                    activeUntil={global.openedAirdrop.activeUntil}
                  />
                )}
              </div>
            </div>
            {global.openedAirdrop.actionUrl && (
              <button
                className={`rounded-full w-[90%] p-4 text-[18px] bg-[#23C463] ${
                  new Date(global.openedAirdrop.activeUntil) > new Date() &&
                  global.openedAirdrop.active
                    ? "opacity-100"
                    : "opacity-20"
                }`}
                style={{
                  fontFamily: "Dela Gothic One",
                }}
                onClick={async () => {
                  if (
                    !global.openedAirdrop?.active ||
                    new Date(global.openedAirdrop.activeUntil) <= new Date()
                  ) {
                    return
                  }

                  if (props.telegramId) {
                    // const res = await
                    // app["airdrop-joined"].post({
                    //   telegramId: props.telegramId.toString(),
                    //   airdropId: global.openedAirdrop.id,
                    // })
                  }
                }}
                disabled={
                  !global.openedAirdrop.active ||
                  new Date(global.openedAirdrop.activeUntil) <= new Date()
                }
              >
                Join
              </button>
            )}
            {/* </div> */}
            {/* {!global.walletConnected && (
							<div>Connect wallet to participate in Airdrop</div>
						)} */}
          </div>
        </>
      )}
    </Sheet>
  )
}
