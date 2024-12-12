import React from "react"

export interface BaseIconProps {
	width?: string
	height?: string
	fill?: string
	border?: string
}

export const icons = {
	ArrowRight: () => (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M14.25 12L8.75 7.75V16.25L14.25 12Z"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			></path>
		</svg>
	),
	FancyArrow: () => (
		<svg
			className="svg-icon"
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			width="18"
			height="18"
			stroke="white"
			fill="white"
			x="0"
			y="0"
			viewBox="0 0 32 32"
		>
			<g>
				<path d="M26.68 3.867H8.175a1 1 0 0 0 0 2h16.544L4.2 26.387A1 1 0 1 0 5.613 27.8l20.52-20.52v16.545a1 1 0 0 0 2 0V5.321a1.456 1.456 0 0 0-1.453-1.454z"></path>
			</g>
		</svg>
	),
	ArrowDown: () => (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M12 15.25L16.25 9.75H7.75L12 15.25Z"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			></path>
		</svg>
	),
} as const satisfies Record<string, (props: BaseIconProps) => React.JSX.Element>

export interface IconProps extends BaseIconProps {
	name: keyof typeof icons
}
export default function Icon(props: IconProps): React.JSX.Element {
	return <>{icons[props.name]()}</>
}
