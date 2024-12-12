import { useWallet } from "@solana/wallet-adapter-react"
import { createFileRoute } from "@tanstack/react-router"
import { SolanaConnectButton } from "~/components/SolanaConnectButton"

function RouteComponent() {
  const { publicKey } = useWallet()
  console.log(publicKey?.toString(), "public key")
  return (
    <>
      <div className="min-h-screen w-full pb-4 overflow-hidden text-white font-sans relative [&.modal-open]:pointer-events-none">
        <SolanaConnectButton />
      </div>
    </>
  )
}

export const Route = createFileRoute("/solana/")({
  component: RouteComponent,
})
