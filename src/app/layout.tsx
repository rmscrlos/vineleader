import { ClerkProvider } from "@clerk/nextjs";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

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
		<ClerkProvider>
			<html lang="en">
				<head>
					<link rel="icon" href="./favicon.ico" sizes="any" />
				</head>
				<body>
					<Header />
					{children}
					<Footer />
				</body>
			</html>
		</ClerkProvider>
	);
}
