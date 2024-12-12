import { Airdrop } from "@ronin/drophunt"
import { useSuspenseQuery } from "@tanstack/react-query"
import { createFileRoute, useNavigate } from "@tanstack/react-router"
import { useMemo } from "react"
import { useProxy } from "valtio/utils"
import { $appAirdrops } from "~/actions"
import AirdropComponent from "~/components/AirdropComponent"
import { ErrorShow } from "~/components/ErrorShow"
import Icons from "~/components/Icon"
import { onClickWithoutBubblingToTheParentOnClicks } from "~/lib/utils"
import { globalState } from "../route"
import Footer from "~/components/Footer"

function RouteComponent() {
  const { queryOptions } = Route.useRouteContext()
  const { data } = useSuspenseQuery(queryOptions)
  const global = useProxy(globalState)
  const navigate = useNavigate()

  const filteredAirdrops = useMemo(() => {
    if (!data || global.activeFilters.length === 0) {
      //@ts-ignore
      return data?.airdrops?.sort((a, b) => {
        const aExpired = new Date(a.activeUntil) < new Date()
        const bExpired = new Date(b.activeUntil) < new Date()

        // If one is expired and the other isn't, put the expired one at the bottom
        if (aExpired && !bExpired) return 1
        if (!aExpired && bExpired) return -1

        // If both are active or both are expired, sort by burnedTokens
        return (b.burnedTokens || 0) - (a.burnedTokens || 0)
      })
    }

    return (
      data.airdrops
        // @ts-ignore
        .filter((airdrop: Airdrop) =>
          global.activeFilters.includes(airdrop.blockchain),
        )
        .sort((a: Airdrop, b: Airdrop) => {
          // Check if either airdrop is expired
          const aExpired = new Date(a.activeUntil) < new Date()
          const bExpired = new Date(b.activeUntil) < new Date()

          // If one is expired and the other isn't, put the expired one at the bottom
          if (aExpired && !bExpired) return 1
          if (!aExpired && bExpired) return -1

          // If both are active or both are expired, sort by burnedTokens
          return (b.burnedTokens || 0) - (a.burnedTokens || 0)
        })
    )
  }, [data, global.activeFilters])

  return (
    <>
      {data && (
        <div className="flex flex-col mb-5 w-[95%] mx-auto gap-[12px]">
          <div className="font-bold text-[18px] w-screen items-center flex flex-row justify-between">
            <p
              style={{
                fontFamily: "Dela Gothic One",
              }}
              className="py-3"
            >
              Airdrops
            </p>
          </div>

          <div className="flex flex-row justify-between items-center">
            <div className="flex items-center justify-between">
              <>
                {global.openFilterMenu ? (
                  <div
                    onClick={() => {
                      global.openFilterMenu = false
                    }}
                    className="fixed top-0 left-0 w-screen h-screen bg-black/80"
                  ></div>
                ) : null}
                <div
                  onClick={() => {
                    global.openFilterMenu = !global.openFilterMenu
                  }}
                  className="flex gap-2 items-center justify-center border rounded-full border-[#3A3A3A] py-[10px] px-[14px] relative"
                >
                  {global.activeFilters.length === 0 && (
                    <div className="bg-[#189A4C] rounded-full h-[16px] w-[16px]"></div>
                  )}
                  {global.activeFilters.length > 0 &&
                    global.activeFilters.map((filter, index) => {
                      return (
                        <img
                          key={index}
                          style={{
                            width: "15px",
                            height: "15px",
                          }}
                          src={
                            global.blockchainLogos[
                              filter as keyof typeof global.blockchainLogos
                            ]
                          }
                        />
                      )
                    })}

                  {global.activeFilters.length === 0
                    ? "All"
                    : global.activeFilters[0]}
                  {global.activeFilters.length > 1 && ", ..."}
                  <Icons name="ArrowDown" size={[20, 20]} />
                  {global.openFilterMenu ? (
                    <div
                      onClick={(e) => {
                        onClickWithoutBubblingToTheParentOnClicks(e)
                      }}
                      className="absolute top-[120%] left-0 flex flex-col gap-4 bg-[#191919] rounded-[12px] min-w-[240px] pb-[10px] px-[10px] pt-[10px]"
                    >
                      <div className="flex flex-col gap-1">
                        <div
                          onClick={() => {
                            global.activeFilters = []
                          }}
                          className="w-full flex items-center justify-between hover:bg-neutral-800 rounded-md px-4 p-2"
                        >
                          All
                          <div
                            className={`w-[16px] h-[16px] flex items-center justify-center rounded-[1px] ${
                              global.activeFilters.length === 0
                                ? "bg-green-500"
                                : "bg-white"
                            }`}
                          ></div>
                        </div>
                        {global.availableFilterOptions.map(
                          (filterOption, index) => {
                            return (
                              <div key={index} className="flex items-center">
                                <img
                                  src={
                                    global.blockchainLogos[
                                      filterOption as keyof typeof global.blockchainLogos
                                    ]
                                  }
                                  style={{
                                    width: "15px",
                                    height: "15px",
                                  }}
                                />
                                <div
                                  onClick={() => {
                                    if (
                                      global.activeFilters.includes(
                                        filterOption,
                                      )
                                    ) {
                                      global.activeFilters =
                                        global.activeFilters.filter(
                                          (f) => f !== filterOption,
                                        )
                                    } else {
                                      global.activeFilters = [
                                        ...global.activeFilters,
                                        filterOption,
                                      ]
                                    }
                                    // Обновляем состояние, чтобы вызвать перерендер
                                    global.openFilterMenu =
                                      global.openFilterMenu
                                  }}
                                  className="w-full flex items-center justify-between hover:bg-neutral-800 rounded-md px-4 p-2"
                                >
                                  {filterOption}
                                  <div
                                    className={`w-[16px] h-[16px] flex items-center justify-center rounded-[1px] ${
                                      global.activeFilters.includes(
                                        filterOption,
                                      )
                                        ? "bg-green-500"
                                        : "bg-white"
                                    }`}
                                  ></div>
                                </div>
                              </div>
                            )
                          },
                        )}
                      </div>
                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => {
                            global.activeFilters = ["All"]
                          }}
                          className="border border-[#3A3A3A] rounded-full px-5 p-[6px]"
                        >
                          Reset
                        </button>
                        <button
                          className="bg-[#189a4c] rounded-full px-6 p-[6px]"
                          onClick={() => {
                            global.openFilterMenu = false
                          }}
                        >
                          Confirm
                        </button>
                      </div>
                    </div>
                  ) : null}
                </div>
              </>

              <div className="">
                {/* Pepe Users: <span className="font-light text-white/60"></span> */}
              </div>
            </div>
            <div className="flex flex-row space-x-1 pr-2 text-white/80">
              <Icons name="Users" />
              <p className="font-normal">
                Users:{" "}
                <span className="text-white/50">
                  {data.userCount.toLocaleString()}
                </span>
              </p>
            </div>
          </div>
          <div
            className={`flex flex-col gap-[10px] ${
              global.openFilterMenu ? "min-h-[250px]" : ""
            }`}
          >
            {filteredAirdrops?.map((airdrop: Airdrop) => (
              <AirdropComponent
                key={airdrop.id}
                airdrop={airdrop}
                onClick={() => {
                  navigate({
                    to: "/app/airdrops/$airdropId",
                    params: { airdropId: airdrop.id },
                  })
                }}
              />
            ))}
          </div>
        </div>
      )}
      <Footer />
    </>
  )
}

export const Route = createFileRoute("/app/airdrops/")({
  component: RouteComponent,
  context: () => ({
    queryOptions: {
      queryKey: ["appAirdrops"],
      queryFn: () => $appAirdrops(),
    },
  }),
  loader: ({ context: { queryClient, queryOptions } }) => {
    return queryClient.ensureQueryData(queryOptions)
  },
  errorComponent: ErrorShow,
})
