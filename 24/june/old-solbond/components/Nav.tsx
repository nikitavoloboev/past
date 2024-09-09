"use client"

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { useEffect, useState } from "react"
import { IoIosSearch } from "react-icons/io"

export default function Nav() {
	let timeoutId: NodeJS.Timeout | null = null
	const [showSettings, setShowSettings] = useState(false)

	useEffect(() => {
		return () => {
			if (timeoutId) clearTimeout(timeoutId)
		}
	}, [])

	const handleMouseLeaveWithDelay = (
		setHoverFunction: (value: boolean) => void,
		hoverDiv: boolean,
	) => {
		timeoutId = setTimeout(() => {
			if (!hoverDiv) {
				setHoverFunction(false)
			}
		}, 200)
	}

	return (
		<div className=" z-[1000] fixed top-0 h-[80px] w-screen p-2 justify-end flex flex-col drop-shadow-md">
			<div className=" px-4 pl-5 rounded-lg h-full border border-slate-400/20  bg-[#252525] w-full flex-between">
				<button className="flex items-center text-[26px] tracking-wider text-white text-left">
					SolBond
				</button>
				{/* TODO: add it back */}
				{/* <div
					onClick={() => {
						setShowSettings(!showSettings)
					}}
					className="relative cursor-pointer text-white"
				>
					settings
					<AnimatePresence>
						{showSettings && (
							<motion.div
								animate={{ scale: [0.9, 1.02, 1], opacity: [0, 1] }}
								exit={{ opacity: [1, 0] }}
								transition={{ duration: 0.2, easings: "ease-out" }}
								className="absolute top-[140%] left-0  bg-neutral-800 p-1 flex flex-col gap-1 rounded-md border border-slate-400/10"
							>
								<button className="px-4 p-1 hover:bg-neutral-700 w-full text-start rounded-md">
									Settings
								</button>
								<button className="px-4 p-1 hover:bg-neutral-700 w-full text-start rounded-md">
									Faq
								</button>
								<button className="px-4 p-1 text-red-500 hover:bg-neutral-700 w-full text-start rounded-md">
									Sign out
								</button>
							</motion.div>
						)}
					</AnimatePresence>
				</div> */}

				<div className="flex items-center h-full gap-3 py-3">
					<div className="relative h-full">
						<IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white/100" />
						<input
							className="bg-inherit text-sm w-[400px] transition duration-300 ease-in-out hover:border-white focus:border-white/40 focus:ring-transparent tracking-wider py-1 pl-8 pr-5 rounded-md border-[1px] border-white/20 text-white h-full outline-none focus:ring-none"
							placeholder="Search products"
							type="text"
						/>
					</div>
					{/* <button className="tracking-wider bg-inherit text-sm text-[#ff4372] border-[1px] border-[#ff4372] hover:shadow-custom-pink py-1 my-3 px-6 rounded-md">
						Start Selling
					</button> */}
					<SignedOut>
						<button className="tracking-wider text-sm text-fuchsia-400 border-[1px] h-full font-bold border-fuchsia-400 transition-all hover:shadow-custom-pink px-6 rounded-md">
							<SignInButton />
						</button>
					</SignedOut>
					<SignedIn>
						<UserButton />
					</SignedIn>
				</div>
			</div>
			{/* <div className="flex h-[40%] bg-[#252525] items-center gap-3 text-white p-2 px-3 tracking-wider">
				<div className="flex flex-col relative">
					<button
						className="flex  items-center"
						onMouseEnter={() => {
							setHoverTrade(true)
							setHoverCommunity(false)
						}}
						onMouseLeave={() =>
							handleMouseLeaveWithDelay(setHoverTrade, hoverTradeDiv)
						}
					>
						<p className="text-sm">TRADE</p>
						<div
							className={` transition-all ${hoverTrade ? "rotate-0" : "-rotate-90"}`}
						>
							<Icons name="ArrowDown" />
						</div>
					</button>
					<AnimatePresence>
						{hoverTrade ? (
							<motion.div
								animate={{ scale: [0.9, 1.02, 1], opacity: [0, 1] }}
								exit={{ opacity: [1, 0] }}
								transition={{ duration: 0.3, easings: "ease-out" }}
								className="absolute top-10 text-sm left-0 h-25 cursor-pointer border-2 border-slate-400/20 bg-white/10 backdrop-blur-sm  p-4 w-[120px] flex items-center justify-center rounded-lg flex flex-col space-y-1 z-50"
								onMouseEnter={() => setHoverTradeDiv(true)}
								onMouseLeave={() => setHoverTradeDiv(false)}
							>
								TRADE ME
							</motion.div>
						) : null}
					</AnimatePresence>
				</div>
				<div className="flex flex-col relative">
					<button
						className="flex items-center text-[14px]"
						onMouseEnter={() => {
							setHoverCommunity(true)
							setHoverTrade(false)
						}}
						onMouseLeave={() =>
							handleMouseLeaveWithDelay(setHoverCommunity, hoverCommunityDiv)
						}
					>
						COMMUNITY
						<div
							className={` transition-all ${hoverCommunity ? "rotate-0" : "-rotate-90"}`}
						>
							{" "}
							<Icons name="ArrowDown" />
						</div>
					</button>
					<AnimatePresence>
						{hoverCommunity ? (
							<motion.div
								animate={{ scale: [0.9, 1.02, 1], opacity: [0, 1] }}
								exit={{ opacity: [1, 0] }}
								transition={{ duration: 0.3, easings: "ease-out" }}
								className="absolute top-10 left-0 border-2 border-slate-400/10 w-40 h-25 p-4 text-[14px] bg-white/10 backdrop-blur-sm rounded-lg flex flex-col space-y-1 z-50"
								onMouseEnter={() => setHoverCommunityDiv(true)}
								onMouseLeave={() => setHoverCommunityDiv(false)}
							>
								<a
									href="/"
									target="_blank"
									className=" flex gap-2 items-center hover:text-[#8ac8ff]"
								>
									<IoLogoGithub size={20} />
									GITHUB
								</a>
								<a
									href="/"
									target="_blank"
									className=" flex gap-2 items-center hover:text-[#8ac8ff]"
								>
									<FaDiscord size={20} />
									DISCORD
								</a>
							</motion.div>
						) : null}
					</AnimatePresence>
				</div>
			</div> */}
		</div>
	)
}
