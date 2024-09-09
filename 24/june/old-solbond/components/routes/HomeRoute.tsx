"use client"

import { motion } from "framer-motion"
import { proxy } from "valtio"
import { useProxy } from "valtio/utils"
import SkewCard from "../SkewCard"
import { useRouter } from "next/navigation"
import HowItWorksModel from "../HowItWorksModel"

export const HomeRouteState = proxy({
	hoveredIndex: null as number | null,
	showHowItWorks: true,
	posts: [
		{
			name: "Heb Nefer 1",
			date: "2024",
			imageUrl: "",
		},
		{
			name: "Heb Nefer 2",
			date: "2024",
			imageUrl: "",
		},
		{
			name: "Heb Nefer 3",
			date: "2024",
			imageUrl: "",
		},
		{
			name: "Heb Nefer 4",
			date: "2024",
			imageUrl: "",
		},
		{
			name: "Heb Nefer 5",
			date: "2024",
			imageUrl: "",
		},
	],
})
interface Props {
	authenticated: boolean
}
export default function HomeRoute(props: Props) {
	const local = useProxy(HomeRouteState)

	const router = useRouter()

	return (
		<div className="text-white px-[40px] mb-20">
			{local.showHowItWorks && <HowItWorksModel />}
			<div
				id="LandingPage"
				className="grid grid-cols-4 py-[20px] mt-20 min-h-[500px]"
			>
				<div className="col-span-1 bg-neutral-700 rounded-md"></div>
				<div className="col-span-2 flex justify-center items-center">
					<div className="relative w-[300px] h-[60px] overflow-hidden flex-center p-[3px] rounded-lg z-0">
						<motion.div
							animate={{ rotate: ["0deg", "360deg"] }}
							transition={{ duration: 3, easing: "linear", repeat: Infinity }}
							className="absolute  bottom-[-200%] left-0 h-[300px] w-[300px] rounded-lg z-10 "
							style={{
								background:
									"conic-gradient(from 0deg, purple, violet, transparent)",
							}}
						></motion.div>
						<button
							onClick={() => {
								if (props.authenticated) {
									router.push("/new")
								} else {
									// TODO: clerk auth..
								}
							}}
							className="w-full font-semibold text-[18px] tracking-wider text-fuchsia-600 hover:text-fuchsia-500 hover:text-[20px] transition-all hover:text-shadow-pink-glow h-full flex-center bg-neutral-900 z-20 rounded-lg"
						>
							{props.authenticated ? "Sell" : "Explore"}
						</button>
					</div>
				</div>
				<div className="col-span-1 bg-neutral-700 rounded-md"></div>
			</div>
			<div id="PopularPosts" className="flex flex-col gap-[40px] py-50">
				<p className="flex-center text-[28px] tracking-wider">
					TOP TRENDING POSTS
				</p>
				<div className="flex gap-2">
					{local.posts.map((post, index) => {
						if (index <= 3) {
							return (
								<div
									key={index}
									style={{ zIndex: index === local.hoveredIndex ? 10 : 0 }}
									className="flex flex-col bg-neutral-800 rounded-lg flex-grow"
								>
									<div
										onMouseOver={() => {
											local.hoveredIndex = index
										}}
										onMouseLeave={() => {
											local.hoveredIndex = null
										}}
										className="h-[340px] w-full"
									>
										<SkewCard
											imageUrl=""
											index={index}
											hovered={index === local.hoveredIndex}
										/>
									</div>
									<div className="p-4 px-5">
										<div className="text-[24px] tracking-wider font-bold">
											{post.name}
										</div>
										<div
											style={{ fontFamily: "Orbitron" }}
											className="text-white/40 text-[12px] font-light"
										>
											{post.date}
										</div>
									</div>
								</div>
							)
						}
					})}
				</div>
			</div>
		</div>
	)
}
