import { createFileRoute, Outlet, redirect } from "@tanstack/react-router"
import { TonConnectButton } from "@tonconnect/ui-react"

// TODO: add auth
// TODO: add the top bar like in ton repo with the diff options
// for now just making the airdrop for claim
function LayoutComponent() {
  return (
    <>
      <div className=" absolute top-4 right-4">
        <TonConnectButton />
      </div>
      <Outlet />
    </>
  )
}

export const Route = createFileRoute("/admin")({
  component: LayoutComponent,
})
