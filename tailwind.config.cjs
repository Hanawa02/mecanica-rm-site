/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			white: "#FFFFFF",
			black: "#000000",
			primaryExtraLight: "#1E47C2",
			primaryLight: "#193A9F",
			primary: "#132D7A",			
			primaryMid: "#0E2058",
			primaryDark: "#081335",

			secondaryExtraLight: "#FBC39D",
			secondaryLight: "#F9AA76",
			secondary: "#F8914D",
			secondaryMid: "#F56E14",
			secondaryDark: "#C45308",
		},
		extend: {
			
		},
	},
	plugins: [],
}
