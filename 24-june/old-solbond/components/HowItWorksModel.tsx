import { useProxy } from "valtio/utils"
import { HomeRouteState } from "./routes/HomeRoute"
import { handleAttachmentClick } from "@/utils"

export default function HowItWorksModel() {
	const local = useProxy(HomeRouteState)
	return (
		<div
			className="fixed z-[100] top-0 left-0 w-screen h-screen flex-center"
			onClick={() => {
				local.showHowItWorks = false
			}}
		>
			<div
				onClick={handleAttachmentClick}
				className="bg-neutral-800 p-[20px] pt-[34px] px-[32px] flex-col flex-between rounded-lg md:h-[70%] md:w-[50%] w-full h-full "
			>
				<div className="flex flex-col gap-[16px]">
					<div>
						<div className="text-[42px] font-bold">How it works</div>
						<div className="text-white/50 text-[18px] font-light">
							If you have any questions or difficulties, simply text our
							support:
							<span>@</span>
						</div>
					</div>
					<div className="flex items-center gap-[30px]">
						<div className="rounded-full h-[54px] min-w-[54px] flex-center border">
							1
						</div>
						<div>
							<div className="font-bold text-[22px]">
								Buy Tokens: Choose any amount of Tokens you want to buy
							</div>
							<div className="text-white/50 text-[18px]"></div>
						</div>
					</div>
					<div className="flex items-center gap-[30px]">
						<div className="rounded-full h-[54px] min-w-[54px] flex-center border">
							2
						</div>
						<div>
							<div className="font-bold text-[22px]">Proceed to payment</div>
							<div className="text-white/50 text-[18px]">
								We offer payment by card or crypto
							</div>
						</div>
					</div>
					<div className="flex items-center gap-[30px]">
						<div className="rounded-full h-[54px] min-w-[54px] flex-center border">
							3
						</div>
						<div>
							<div className="font-bold text-[22px]">
								Now you can shop for products!
							</div>
							<div className="text-white/50 text-[18px]"></div>
						</div>
					</div>
				</div>
				<div className="bg-fuchsia-400 w-full p-3 flex-center text-white rounded-lg">
					Buy tokens
				</div>
			</div>
		</div>
	)
}
