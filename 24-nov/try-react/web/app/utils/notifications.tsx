import toast from "react-hot-toast"

type NotifyType = "success" | "error" | "info"

interface NotifyParams {
  type: NotifyType
  message: string
  txid?: string
}

export const notify = ({ type, message, txid }: NotifyParams) => {
  switch (type) {
    case "success":
      toast.success(
        <div>
          {message}
          {txid && (
            <a
              href={`https://solscan.io/tx/${txid}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 ml-2"
            >
              View transaction
            </a>
          )}
        </div>,
      )
      break
    case "error":
      toast.error(message)
      break
    default:
      toast(message)
  }
}
