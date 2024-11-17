import { useProxy } from "valtio/utils"

import { globalState } from "~/routes/__root"
import Footer from "./Footer"

import { ClaimAirdrop } from "./ClaimAirdrop"
import TextRotate from "./TextRotate"

export default function ClaimPage() {
  const global = useProxy(globalState)
  return (
    <div className="w-screen">
      <div className="h-screen  w-[95%] mx-auto">
        <div className="flex flex-col relative items-center justify-center text-[16px] text-white/60">
          {global.featureFlags.claimingAirdrops ? (
            <ClaimAirdrop />
          ) : (
            <>
              <TextRotate />
            </>
          )}
        </div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  )
}
