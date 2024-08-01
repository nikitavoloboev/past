"use client"

import { useState } from "react"

export default function UserProfileRoute() {
	const [images, setImages] = useState(["1", "2", "3", "4"])
	const [imageFilter, setImageFilter] = useState("Products")
	return (
		<>
			<div className=" w-screen h-screen text-white pt-[80px] flex gap-2 px-2 pb-2 overflow-hidden">
				<div className="w-[40%] backdrop-blur-sm border-2 bg-black/10 rounded-lg border-slate-400/10 h-full p-4">
					<div className="flex items-end gap-4">
						<div className="w-[140px] h-[140px] bg-neutral-700 rounded-lg"></div>
						<div className="">
							<div
								className="text-[32px] tracking-wider"
								style={{ fontFamily: "Bebas Neue" }}
							>
								Kisuyo
							</div>
							<div
								className="text-white/40 text-[12px]"
								style={{ fontFamily: "Orbitron" }}
							>
								Joined: 24/07/2024
							</div>
						</div>
					</div>
				</div>
				<div className="w-[60%] flex flex-col gap-2 h-full">
					<div className="flex gap-8 font-bold px-4 p-2 text-[20px]">
						<button
							onClick={() => {
								setImageFilter("Products")
							}}
							className={`transition-all ${imageFilter === "Products" ? "text-purple-400" : ""}`}
						>
							Products
						</button>
						<button
							onClick={() => {
								setImageFilter("Files")
							}}
							className={`transition-all ${imageFilter === "Files" ? "text-purple-400" : ""}`}
						>
							Files
						</button>
					</div>

					<div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-2">
						{images.map((image, index) => (
							<div key={index} className="w-full h-[26vw] bg-neutral-700">
								{/* <img
							src={image}
							alt={`Image ${index}`}
							className="object-cover w-full h-full"
						/> */}
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	)
}
