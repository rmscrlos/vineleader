"use client";
import React from "react";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import ListItem from "./ListItem";

type Props = {};

const Navbar = (props: Props) => {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<Link href="/" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Home
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href="/" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Events
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>

				<NavigationMenuItem>
					<NavigationMenuTrigger>Podcasts</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-3 p-6 md:w-[400px] minMd:w-[450px] lg:grid-cols-[.75fr_1fr]">
							<li className="row-span-3">
								<NavigationMenuLink asChild>
									<a
										className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
										href="/"
									>
										<div className="h-6 w-6" />
										<div className="mb-2 mt-4 text-lg font-medium">
											Latest Podcast
										</div>
										<p className="text-sm leading-tight text-muted-foreground">
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Ea, esse?
										</p>
									</a>
								</NavigationMenuLink>
							</li>
							<ListItem href="/" title="Latest Series">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							</ListItem>
							<Link
								className="bg-blueaccent-1 text-white self-baseline px-5 py-3 rounded w-fit dark:bg-white dark:text-background"
								href="/"
							>
								MORE
							</Link>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>

				<NavigationMenuItem>
					<NavigationMenuTrigger>Resources</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-3 p-6 md:w-[400px] minMd:w-[450px] lg:grid-cols-[.75fr_1fr]">
							<li className="row-span-3">
								<NavigationMenuLink asChild>
									<a
										className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
										href="/"
									>
										<div className="h-6 w-6" />
										<div className="mb-2 mt-4 text-lg font-medium">
											Resource 1
										</div>
										<p className="text-sm leading-tight text-muted-foreground">
											Lorem, ipsum dolor sit amet consectetur adipisicing elit.
											Corporis, similique.
										</p>
									</a>
								</NavigationMenuLink>
							</li>
							<ListItem href="/" title="Resource 2">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Voluptates, harum!.
							</ListItem>
							<Link
								className="bg-blueaccent-1 text-white self-baseline px-5 py-3 rounded w-fit dark:bg-white dark:text-background"
								href="/"
							>
								MORE
							</Link>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
};

export default Navbar;
