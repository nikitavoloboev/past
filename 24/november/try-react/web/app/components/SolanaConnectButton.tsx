import { useWallet } from "@solana/wallet-adapter-react"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import "@solana/wallet-adapter-react-ui/styles.css"

export const SolanaConnectButton = () => {
  const { connecting } = useWallet()

  return (
    <div className="">
      <WalletMultiButton className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 " />
      {connecting && <div>Connecting...</div>}
    </div>
  )
}
