import Header from "@/components/header/Header";
import "./globals.css";
import type { Metadata } from "next";
import ThemeProvider from "./ThemeProvider";
import { Poppins, Geo } from "next/font/google";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
	title: "HOME | Vineleader",
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

const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	display: "swap",
});

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
			<body className={cn(poppins.className, "bg-background text-foreground")}>
				<ThemeProvider>
					<Header />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
