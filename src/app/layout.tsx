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
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="./favicon.ico" sizes="any" />
			</head>
			<body className="bg-background text-foreground">
				<ThemeProvider>
					<Header />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
