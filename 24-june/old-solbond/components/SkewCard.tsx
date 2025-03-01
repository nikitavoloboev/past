"use"

import { useEffect } from "react"

export default function SkewCard(props: {
	imageUrl: string
	index: number
	hovered: boolean
}) {
	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			const cardElement = event.currentTarget as HTMLElement
			const rect = cardElement.getBoundingClientRect()
			const centerX = rect.width / 2
			const centerY = rect.height / 2
			const x = event.offsetX - centerX
			const y = event.offsetY - centerY

			const tiltX = (y / centerY) * 20
			const tiltY = (x / centerX) * 20

			cardElement.style.transform = `perspective(1000px) rotateX(${-tiltX}deg) rotateY(${tiltY}deg)`
		}

		const handleMouseLeave = (event: MouseEvent) => {
			const cardElement = event.currentTarget as HTMLElement
			cardElement.style.transform = "none"
		}
		const cardElement = document.querySelector(`#card${props.index}`)

		if (!cardElement) {
			return
		}

		setTimeout(() => {
			cardElement.addEventListener(
				"mousemove",
				handleMouseMove as EventListener,
			)
			cardElement.addEventListener(
				"mouseleave",
				handleMouseLeave as EventListener,
			)
		}, 0)

		return () => {
			cardElement.removeEventListener(
				"mousemove",
				handleMouseMove as EventListener,
			)
			cardElement.removeEventListener(
				"mouseleave",
				handleMouseLeave as EventListener,
			)
		}
	}, [props.index])

	return (
		<div className="relative hover:scale-[1.12] h-full w-full transition-transform">
			<div
				id={`card${props.index}`}
				className={`card h-full w-full drop-shadow-xl bg-[#27292e] border rounded-lg flex-center transition-all text-black ${props.hovered ? "shadow-custom-pink border-fuchsia-500" : ""}`}
				style={{ transition: "all 0.2s ease-out" }}
			>
				<img src={props.imageUrl} alt="" />
			</div>
		</div>
	)
}
