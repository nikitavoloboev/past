import type { Config } from "tailwindcss"

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			textShadow: {
				"blue-glow": "0 0 20px #8ac8ff",
				"pink-glow": "0 0 20px rgba(192 38 211)",
			},
			boxShadow: {
				"custom-blue": "0px 2px 10px 0 rgba(138, 200, 255, 1)",
				"custom-pink": "0px 0px 15px 0 rgba(192 38 211)",
			},
		},
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("tailwindcss-textshadow"),
		function ({ addUtilities }) {
			const newUtilities = {
				".flex-center": {
					display: "flex",
					"align-items": "center",
					"justify-content": "center",
				},
				".shadow": {
					filter: "drop-shadow(2px 8px 4px #05050570)",
				},

				".flex-between": {
					display: "flex",
					"align-items": "center",
					"justify-content": "space-between",
				},

				".flex-col": {
					display: "flex",
					"flex-direction": "column",
				},

				".flex-row": {
					display: "flex",
					"flex-direction": "row",
				},
				".button-hover": {
					color: "#F28C28",
					"border-radius": "4px",
					"transition-property": "all",
					"transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
					"transition-duration": "150ms",
					background: "rgb(38 38 38)",
					cursor: "pointer",
				},
			}
			addUtilities(newUtilities, ["responsive", "hover"])
		},
	],
}
export default config
