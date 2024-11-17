import { Airdrop } from "@ronin/drophunt"
import AirdropCounter from "./AirdropCounter"

export default function AirdropComponent(props: {
  airdrop: Airdrop
  onClick: () => void
}) {
  return (
    <div
      onClick={props.onClick}
      className="w-full cursor-pointer flex flex-col gap-3 bg-[#191919] p-5 rounded-[20px]"
    >
      <div className="flex gap-4 w-full">
        {props.airdrop.image.src && (
          <div className="min-w-[50px] w-[50px] h-[50px] rounded-full bg-[#2e2e2e] overflow-hidden flex items-center justify-center">
            <img
              className="object-cover w-full h-full rounded-full"
              src={props.airdrop.image.src}
              alt={props.airdrop.name}
            />
          </div>
        )}
        <div className="w-full flex flex-col gap-1">
          <div className="font-bold text-[21px] headerFont">
            {props.airdrop.name}
          </div>
          <p className="text-white/60 font-light text-[12px] line-clamp-2">
            {props.airdrop.description}
          </p>
        </div>
      </div>
      <div className="flex space-x-2 items-center text-[12px] justify-between">
        <div className="flex gap-2">
          {props.airdrop.activeUntil ? (
            <AirdropCounter
              activeUntil={props.airdrop.activeUntil}
              renderExpired={() => (
                <button className="bg-red-600 tracking-wider rounded-full px-3 p-1">
                  Expired
                </button>
              )}
              renderActive={() => (
                <button className="bg-[#189A4C] tracking-wider rounded-full px-3 p-1">
                  Active
                </button>
              )}
            />
          ) : (
            <button className="bg-[#189A4C] rounded-full px-3 p-1">
              Active
            </button>
          )}
          {props.airdrop.blockchain && (
            <div className="border border-[#3A3A3A] rounded-full px-3 p-1">
              {props.airdrop.blockchain}
            </div>
          )}
        </div>
        {props.airdrop.burnedTokens > 0 && (
          <p className="text-sm text-gray-300">
            {props.airdrop.burnedTokens} Tokens 🔥{" "}
          </p>
        )}
        {/* @ts-ignore */}
        {props.airdrop?.actionCount && (
          <div>
            {/* @ts-ignore */}
            <p className="text-white/60">{props.airdrop.actionCount} joined</p>
          </div>
        )}
      </div>
    </div>
  )
}
