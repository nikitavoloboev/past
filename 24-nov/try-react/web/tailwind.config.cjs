/** @type {import('tailwindcss').Config} */
const { colors } = require("./theme/colors")

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: [
          '"SF Pro Display"',
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
        ],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        shine: "shine 1.5s infinite linear",
      },
      keyframes: {
        shine: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
}
