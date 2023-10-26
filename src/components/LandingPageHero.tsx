import React from "react";
import TypewriterTitle from "./TypewriterTitle";
import Link from "next/link";
import { Button } from "./ui/button";

const buttons = [
	{ title: "Podcasts", path: "/podcasts" },
	{ title: "Resources", path: "resources" },
];

const LandingPageHero = () => {
	return (
		<div className="relative h-[36rem] flex justify-center items-center mb-[5rem] lg:h-[30rem] md:h-[20rem] md:mb-[1rem]">
			<div className="absolute top-[2rem] left-[24rem] w-72 h-72 rounded-full bg-blueaccent-1 opacity-20 blur-3xl md:left-[12rem] md:top-[0] md:w-40 md:h-40 md:blur-2xl" />
			<div className="absolute bottom-[5rem] right-[24rem] w-72 h-72 rounded-full bg-green-300 opacity-20 blur-3xl md:right-[12rem] md:bottom-[8rem] md:w-40 md:h-40 md:blur-2xl" />
			<div className="flex flex-col justify-center items-center gap-4 sm:w-[100%] z-[1]">
				<h1 className="text-8xl text-center lg:text-7xl sm:text-[2.9rem]">
					Maximize <br /> Your Leadership
				</h1>
				<div className="text-3xl md:text-xl">
					<TypewriterTitle />
				</div>
				<div className="mt-[6rem] w-full flex justify-center items-center">
					{buttons.map(({ title, path }, index) => (
						<Link
							className="mx-4 bg-foreground text-white my-6 inline-block py-2 px-5 rounded relative"
							href={path}
							key={`${title}-${index}`}
						>
							{title}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default LandingPageHero;
