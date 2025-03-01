import type { Config } from "tailwindcss"

const config: Config = {
    darkMode: ["class"],
    content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
    	extend: {
    		backgroundImage: {
    			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		}
    	}
    },
	plugins: [
		function ({ addUtilities }: any) {
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
				".border-dark": {
					border: "1px solid #282828",
				},
				".border-light": {
					border: "1px solid #69696951",
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
        require("tailwindcss-animate")
    ],
}
export default config
