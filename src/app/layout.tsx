import Header from "@/components/header/Header";
import "./globals.css";
import type { Metadata } from "next";
import ThemeProvider from "./ThemeProvider";

export const metadata: Metadata = {
	title: "Vine Leader",
	description: "Maximize Your Leadership",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	icons: {
		shortcut: "./favicon.ico",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="bg-bkg text-content">
				<ThemeProvider>
					<Header />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
