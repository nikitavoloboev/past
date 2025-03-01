import { Address, beginCell, fromNano, toNano } from "@ton/core"
import { useTonAddress, useTonConnectUI } from "@tonconnect/ui-react"
import { LoaderCircle } from "lucide-react"
import { useEffect, useMemo, useRef, useState } from "react"
import { useProxy } from "valtio/utils"
import { JettonDefaultWallet } from "~/lib/ton-child"
import { SampleJetton } from "~/lib/ton-master"
import { getProviderSender, tonClient } from "~/lib/ton-sender"
import { globalState } from "~/routes/app/route"

interface TopUpBalanceModalProps {
  onClose: () => void
  autoFocus?: boolean
}
const TopUpBalanceModal: React.FC<TopUpBalanceModalProps> = ({
  onClose,
  autoFocus,
}) => {
  const global = useProxy(globalState)
  const inputRef = useRef<HTMLInputElement>(null)
  const [inputValue, setInputValue] = useState("")
  const connectedWalletAddress = useTonAddress()
  const [tonConnectUI] = useTonConnectUI()
  const [pepeTokensBalanceBeforeTx, setPepeTokensBalanceBeforeTx] = useState<
    null | number
  >(null)

  const [isLoading, setIsLoading] = useState(false)
  // TODO: change it to actual burner address
  // const burnerAddress = "UQDFWohYfDOqtleuY4n4FP7TffqBMC3gwfNELCUKZUC7R1vU" // telegram wallet space
  const burnerAddress = "UQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJKZ"

  const sender = useMemo(() => getProviderSender(tonConnectUI), [tonConnectUI])

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus()
    }
  }, [autoFocus])

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, "")
    const parts = value.split(".")
    if (parts.length > 2) {
      // More than one decimal point, keep only the first two parts
      parts.length = 2
    }
    if (parts[1] && parts[1].length > 2) {
      // Limit to two decimal places
      parts[1] = parts[1].slice(0, 2)
    }
    const newValue = parts.join(".")
    console.log(toNano(inputValue), "yo")
    setInputValue(newValue)
  }

  const useMyJetton = async () => {
    const jetonMaster = tonClient.open(
      SampleJetton.fromAddress(
        Address.parse(import.meta.env.VITE_MASTER_ADDRESS),
      ),
    )

    // console.log(connectedWalletAddress, "connected wallet address")
    // console.log(import.meta.env.VITE_MASTER_ADDRESS, "master address")
    // console.log(jetonMaster, "jeton master")

    const jettonWalletAddress = await jetonMaster.getGetWalletAddress(
      Address.parse(connectedWalletAddress),
    )

    const jettonChild = tonClient.open(
      await JettonDefaultWallet.fromAddress(jettonWalletAddress),
    )

    const balanceBeforeTx = (await jettonChild.getGetWalletData()).balance

    setPepeTokensBalanceBeforeTx(Number(fromNano(balanceBeforeTx)))
  }

  useEffect(() => {
    useMyJetton()
  }, [])

  return (
    <div className="fixed inset-0 bg-black/80 text-white flex flex-col items-center z-50 pt-10">
      <div className="bg-black border border-white/30 p-6 rounded-2xl w-80 relative">
        <button onClick={onClose} className="absolute text-xl top-4 right-4">
          ✕
        </button>
        {pepeTokensBalanceBeforeTx && pepeTokensBalanceBeforeTx > 0 ? (
          <>
            <h1
              style={{
                fontFamily: "Dela Gothic One",
              }}
              className="text-2xl mb-1"
            >
              Balance:
            </h1>
            <h2
              style={{
                fontFamily: "Dela Gothic One",
              }}
              className="text-xl font-normal opacity-70 mb-6"
            >
              🐸 {pepeTokensBalanceBeforeTx.toFixed(2)}
            </h2>
            <div className="relative flex flex-col px-3">
              <span className="absolute left-3 top-1/3 text-lg transform -translate-y-1/2 ml-1">
                🐸
              </span>
              <input
                type="text"
                inputMode="decimal"
                ref={inputRef}
                value={inputValue}
                onChange={inputChange}
                placeholder="100"
                className={`${
                  inputValue !== "" &&
                  (Number(inputValue) > pepeTokensBalanceBeforeTx ||
                    Number(inputValue) <= 5)
                    ? "text-red-500"
                    : ""
                }  w-full p-3 pl-7 placeholder:opacity-75 bg-neutral-900 border-none rounded-md text-lg mb-6 focus:outline-none focus:ring-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
              />
            </div>
          </>
        ) : (
          <div>
            {pepeTokensBalanceBeforeTx === null ? (
              <div className="flex justify-center items-center h-40">
                <LoaderCircle className="animate-spin" />
              </div>
            ) : (
              <h1 className="text-xl font-semibold text-center mb-6">
                {/* TODO: link to where to buy them? ask jedi */}
                No 🐸 coins to burn
              </h1>
            )}
          </div>
        )}

        {/* TODO: add logic here */}
        <div className="flex justify-center">
          {pepeTokensBalanceBeforeTx && pepeTokensBalanceBeforeTx > 0 ? (
            <button
              className={`w-full py-4 rounded-full text-lg items-center justify-center flex font-semibold transition-colors bg-[#23C463] duration-300 ${
                inputValue !== "" &&
                Number(inputValue) > 5 &&
                Number(inputValue) <= pepeTokensBalanceBeforeTx
                  ? "active:bg-[#1fa755]"
                  : "opacity-20 cursor-not-allowed"
              }`}
              disabled={
                inputValue === "" ||
                Number(inputValue) <= 5 ||
                Number(inputValue) > pepeTokensBalanceBeforeTx
              }
              onClick={async () => {
                if (!connectedWalletAddress) return
                if (!global.openedAirdrop) return
                setIsLoading(true)
                try {
                  const pendingTransaction = {
                    amountSent: fromNano(inputValue),
                    airdropId: global.openedAirdrop.id,
                  }
                  localStorage.setItem(
                    "pendingTransaction",
                    JSON.stringify(pendingTransaction),
                  )

                  const jettonMaster = tonClient.open(
                    await SampleJetton.fromAddress(
                      Address.parse(import.meta.env.VITE_MASTER_ADDRESS),
                    ),
                  )

                  const jettonWalletAddress =
                    await jettonMaster.getGetWalletAddress(
                      Address.parse(connectedWalletAddress),
                    )

                  const jettonChild = tonClient.open(
                    await JettonDefaultWallet.fromAddress(jettonWalletAddress),
                  )

                  await jettonChild.send(
                    sender,
                    {
                      value: toNano(0.2),
                      bounce: true,
                    },
                    {
                      $$type: "TokenTransfer",
                      amount: toNano(inputValue),
                      queryId: BigInt(0),
                      destination: Address.parse(burnerAddress),
                      response_destination: Address.parse(
                        connectedWalletAddress,
                      ),
                      forward_ton_amount: toNano("0.01"),
                      forward_payload: beginCell()
                        .storeStringTail(global.openedAirdrop.id)
                        .endCell(),
                      custom_payload: null,
                    },
                  )

                  // TODO: does not run on success of jettonChild.send | for some reason, super dumb.............

                  setIsLoading(false)
                  onClose()
                } catch (error) {
                  console.error("Error sending transaction:", error)
                }
              }}
            >
              {isLoading ? <LoaderCircle className="animate-spin" /> : "Action"}
            </button>
          ) : pepeTokensBalanceBeforeTx === null ? (
            <div className="flex justify-center items-center w-full py-4">
              {/* <LoaderCircle className="animate-spin" /> */}
            </div>
          ) : (
            <button
              onClick={() => {
                // TODO: ok?
                window.open(
                  "https://dedust.io/swap/TON/EQCXzO7HhoK5fDQuCONE43l8-Qsreq5zq89ZVNhEna24eK-h",
                  "_blank",
                )
              }}
              className="w-full py-4 rounded-full text-lg font-semibold transition-colors bg-[#23C463] duration-300"
            >
              Buy
            </button>
          )}
        </div>
      </div>
      {/* TODO: no longer needed? delete */}
      {/* {!isLoading && (
				<p
					style={{
						fontFamily: "Dela Gothic One",
					}}
					className="text-white text-sm font-medium absolute bottom-20 left-0 right-0 text-center px-10 bg-black border border-slate-400/20"
				>
					Please make sure you go to Tonkeeper or other wallet through
					notification only. And wait until transaction is confirmed.
				</p>
			)} */}
    </div>
  )
}

export default TopUpBalanceModal
