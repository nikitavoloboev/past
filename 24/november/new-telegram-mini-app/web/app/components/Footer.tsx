import { icons } from "./joinCommunity"

export default function Footer() {
  return (
    <>
      <div className="w-full h-[20%] px-5 py-8 flex flex-col gap-[18px] bg-[#191919]">
        <div className="flex flex-col space-y-4">
          <h1 className="text-[18px] text-white headerFont">
            Join our community
          </h1>
          <div className="flex flex-row space-x-5 justify-between items-center">
            <div className="gap-4 space-x-4">
              <button
                onClick={() => {
                  // TODO: how to do in new sdk? trying with window.open..
                  // utils.openTelegramLink("https://t.me/drophunt")
                  window.open("https://t.me/drophunt", "_blank")
                }}
              >
                <icons.TelegramSvg />
              </button>
              <button
                onClick={() => {
                  // utils.openTelegramLink("https://t.me/pepetonchat")
                  // TODO: check if ok?
                  window.open("https://t.me/pepetonchat", "_blank")
                }}
              >
                <icons.BotSvg />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
