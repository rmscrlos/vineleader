/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontFamily: {
			geo: ["Georgia", "Times New Roman", "Times", "serif"],
		},
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				blueaccent: {
					1: "hsl(var(--color-accent-1) / <alpha-value>)",
					2: "hsl(var(--color-accent-2) / <alpha-value>)",
				},
				vividOrange: "#FF6633",
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--color-background) / <alpha-value>)",
				foreground: "hsl(var(--color-foreground) / <alpha-value>)",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: 0 },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: 0 },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
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

			minxxl: "1536px",
			// => @media (min-width: 1536px) { ... }

			minLg: "1024px",
			// => @media (min-width: 1024px) { ... }

			minMd: "768px",
			// => @media (min-width: 768px) { ... }

			minSm: "640px",
			// => @media (min-width: 640px) { ... }
		},
	},
	plugins: [require("tailwindcss-animate")],
};
