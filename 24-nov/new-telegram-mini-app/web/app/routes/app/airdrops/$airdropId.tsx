import { useQuery } from "@tanstack/react-query"
import { createFileRoute, useNavigate } from "@tanstack/react-router"
import { useTonAddress } from "@tonconnect/ui-react"
import { useState } from "react"
import { $getAirdropById } from "~/actions"
import AirdropCounter from "~/components/AirdropCounter"
import Icons from "~/components/Icon"
import Sheet from "~/components/Sheet"

function RouteComponent() {
  const { airdropId } = Route.useParams()
  const address = useTonAddress()
  const [balanceModalOpen, setBalanceModalOpen] = useState(false)
  const { data: airdrop } = useQuery({
    queryKey: ["/app/airdrops/$airdropId"],
    queryFn: async () => {
      if (!airdropId) return
      const airdrop = await $getAirdropById({ airdropId })
      return airdrop
    },
    enabled: !!airdropId,
  })
  const navigate = useNavigate()
  return (
    <>
      <Sheet
        isOpen={true}
        onClose={() => {
          navigate({ to: "/app/airdrops" })
        }}
      >
        {airdrop && (
          <div className="flex relative flex-col  pb-4 justify-between h-full items-center w-full ">
            <div className="flex flex-col gap-[22px] items-center">
              <div className=" bg-[#2E2E2E] w-full rounded-t-[20px]">
                <div className="flex gap-3 items-center px-4 p-3">
                  {airdrop?.image?.src && (
                    <img
                      src={airdrop.image.src}
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
                        {airdrop.name}
                      </div>
                    </div>
                    <div className="flex gap-2 pt-2 items-center">
                      <div
                        onClick={() => {
                          console.log(airdrop, "opened airdrop")
                        }}
                      ></div>
                      <div
                        onClick={() => {
                          console.log(airdrop, "opened airdrop")
                        }}
                        className={`px-3 p-1 rounded-full ${
                          airdrop.active &&
                          new Date(airdrop.activeUntil) > new Date()
                            ? "bg-[#189A4C]"
                            : "bg-red-600"
                        }`}
                      >
                        {airdrop.active &&
                        new Date(airdrop.activeUntil) > new Date()
                          ? "Active"
                          : "Expired"}
                      </div>
                      <div className="border rounded-full border-[#3A3A3A] px-3 p-1">
                        {airdrop.blockchain}
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
                  {airdrop.description}
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
                {airdrop.conditions
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
              {/* TODO: hiding for now as there is issues */}
              {/* {address && (
                <>
                  {!balanceModalOpen ? (
                    <div className="w-full flex justify-center z-[1000] my-1">
                      <button
                        className="px-7 flex flex-row items-center bg-transparent border border-white/20 text-[#23C463] py-3 rounded-full text-lg font-bold"
                        onClick={() => {
                          setBalanceModalOpen(true)
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
              )} */}

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
                  {airdrop.activeUntil && (
                    // @ts-ignore
                    <AirdropCounter activeUntil={airdrop.activeUntil} />
                  )}
                </div>
              </div>
            </div>
            {airdrop.actionUrl && (
              <button
                className={`rounded-full mt-4 w-[90%] p-4 text-[18px] bg-[#23C463]

                    `}
                style={{
                  fontFamily: "Dela Gothic One",
                }}
                onClick={async () => {}}
              >
                Join
              </button>
            )}
          </div>
        )}
      </Sheet>
    </>
  )
}

export const Route = createFileRoute("/app/airdrops/$airdropId")({
  component: RouteComponent,
})
