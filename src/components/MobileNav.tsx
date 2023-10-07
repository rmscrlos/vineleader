"use client";
import React, { useState } from "react";
import { AlignRight, XSquare } from "lucide-react";
import Link from "next/link";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

import VineLeaderLogo from "@/components/VineLeaderLogo";
import { Button } from "./ui/button";

const mainNavItems = [
	{ name: "Home", href: "/" },
	{ name: "Events", href: "/" },
	{ name: "Podcasts", href: "/" },
	{ name: "Resources", href: "/" },
];

const MobileNav = () => {
	const { user } = useUser();

	const [isMobileNaveOpen, setIsMobileNavOpen] = useState(false);
	const handleToggle = () => setIsMobileNavOpen(!isMobileNaveOpen);
	const toggleOff = () => setIsMobileNavOpen(false);

	return (
		<div>
			<div onClick={handleToggle}>
				<AlignRight />
			</div>

			<div
				onClick={handleToggle}
				className={`lg:${
					isMobileNaveOpen ? "flex" : "hidden"
				} absolute top-0 left-0 w-full h-full bg-black/[.2]`}
			/>

			<div
				className={`fixed top-0 bg-background h-screen z-10 duration-200 ${
					isMobileNaveOpen ? "right-0" : "-right-[999px]"
				} lg:w-1/2 md:w-2/4 sm:w-full `}
			>
				<div className="flex-col w-full item-center justify-center pt-3">
					<div className="flex justify-between items-center pr-5 pl-5">
						<VineLeaderLogo className="w-full" />

						<button
							className="flex items-center w-full justify-end"
							onClick={() => toggleOff()}
						>
							<XSquare className="text-3xl self-end" />
						</button>
					</div>
					<div className="flex flex-col border-b-2 m-12">
						{mainNavItems.map((link) => (
							<Link
								className="mr-10 font-semibold text-darkGray mb-5"
								key={link.name}
								href={link.href}
								onClick={() => toggleOff()}
							>
								{link.name}
							</Link>
						))}
					</div>

					<div className="flex gap-2 justify-end mr-12">
						{user ? (
							<UserButton afterSignOutUrl="/" />
						) : (
							<Button>
								<SignInButton />
							</Button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MobileNav;
