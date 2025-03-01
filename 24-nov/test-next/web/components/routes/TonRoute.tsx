"use client"
// import { TonConnectButton, useTonWallet } from "@tonconnect/ui-react"

export default function TonRoute(props: {}) {
	return (
		<>
			<div className="w-screen mx-auto flex flex-col p-3 items-center justify-center">
				<div className="flex items-center flex-col gap-2 top-2 ml-auto">{/* <TonConnectButton /> */}</div>
				<div className="flex flex-col gap-3 items-center mt-4 justify-center">
					{/* TODO: shows only if Jetton coins is > 0*/}
					{/* {wallet && jettonTokens && (
					<div>Balance of Jetton coins: {jettonTokens}</div>
				)} */}
					{/* {wallet && jettonTokens && jettonTokens > 0 && (
					<input
						placeholder="Enter tokens to burn"
						className="text-black"
						type="text"
					/>
				)} */}
				</div>
			</div>
		</>
	)
}
