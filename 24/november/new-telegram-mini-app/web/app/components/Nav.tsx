import { useLocation, useNavigate } from "@tanstack/react-router"
import { TonConnectButton, useTonWallet } from "@tonconnect/ui-react"
import { useProxy } from "valtio/utils"
import { globalState } from "~/routes/app/route"

export default function Nav() {
  const global = useProxy(globalState)
  const wallet = useTonWallet()
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location, "loc")

  return (
    <div
      className={`flex items-center mx-4 my-5 ${
        wallet ? "justify-between" : "justify-between"
      }`}
    >
      <div
        style={{
          fontFamily: "Dela Gothic One",
        }}
        className="flex bg-[#191919] text-[12px] rounded-full h-[33px] items-center font-light"
      >
        <div
          onClick={() => {
            if (location.pathname !== "/app/airdrops") {
              navigate({
                to: "/app/airdrops",
              })
            }
          }}
          style={
            location.pathname === "/app/airdrops" ? { fontWeight: 600 } : {}
          }
          className={`p-2 h-full flex cursor-pointer items-center justify-center rounded-full ${
            location.pathname === "/app/airdrops" ? "bg-[#2E2E2E]" : ""
          }`}
        >
          Airdrops
        </div>
        <div
          onClick={() => {
            if (location.pathname !== "/app/claim") {
              navigate({
                to: "/app/claim",
              })
            }
          }}
          style={location.pathname === "/app/claim" ? { fontWeight: 600 } : {}}
          className={`p-2 px-4 h-full flex cursor-pointer items-center justify-center rounded-full ${
            location.pathname === "/app/claim" ? "bg-[#2E2E2E]" : ""
          }`}
        >
          Claim
        </div>
        <div
          onClick={() => {
            if (location.pathname !== "/app/earn") {
              navigate({
                to: "/app/earn",
              })
            }
          }}
          style={location.pathname === "/app/earn" ? { fontWeight: 600 } : {}}
          className={`p-2 px-4 h-full cursor-pointer flex items-center justify-center rounded-full ${
            location.pathname === "/app/earn" ? "bg-[#2E2E2E]" : ""
          }`}
        >
          Earn
        </div>
      </div>

      <TonConnectButton style={{}} className="ton-connect-button" />
    </div>
  )
}
