/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				accent: {
					1: "hsl(var(--color-accent-1) / <alpha-value>)",
					2: "hsl(var(--color-accent-2) / <alpha-value>)",
				},
				bkg: "hsl(var(--color-bkg) / <alpha-value>)",
				content: "hsl(var(--color-content) / <alpha-value>)",
				vividOrange: "#FF6633",
			},
		},
		screens: {
			xxl: { max: "1535px" },
			// => @media (max-width: 1535px) { ... }

			xl: { max: "1279px" },
			// => @media (max-width: 1279px) { ... }

			lg: { max: "1023px" },
			// => @media (max-width: 1023px) { ... }

			md: { max: "768px" },
			// => @media (max-width: 767px) { ... }

			sm: { max: "639px" },
			// => @media (max-width: 639px) { ... }

			minMd: "768px",
			// => @media (min-width: 768px) { ... }

			minSm: "640px",
			// => @media (min-width: 640px) { ... }
		},
	},
	plugins: [],
};
