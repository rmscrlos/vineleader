import React from "react";
import TypewriterTitle from "./TypewriterTitle";
import Link from "next/link";
import { Button } from "./ui/button";

const buttons = [
	{ title: "Podcasts", path: "podcasts" },
	{ title: "Resources", path: "resources" },
];

const Hero = () => {
	return (
		<div className="relative h-[36rem] flex justify-center items-center mb-[5rem] lg:h-[30rem] md:h-[20rem] md:mb-[1rem]">
			<div className="absolute top-[2rem] left-[24rem] w-72 h-72 rounded-full bg-blueaccent-1 opacity-20 blur-3xl md:left-[15rem]" />
			<div className="absolute bottom-[5rem] right-[24rem] w-72 h-72 rounded-full bg-green-300 opacity-20 blur-3xl md:right-[15rem]" />
			<div className="flex flex-col justify-center items-center gap-4 sm:w-[100%] z-[1]">
				<h1 className="text-8xl text-center lg:text-7xl sm:text-5xl">
					Maximize <br /> Your Leadership
				</h1>
				<div className="text-3xl">
					<TypewriterTitle />
				</div>
				<div className="mt-[6rem] w-full flex justify-center items-center">
					{buttons.map(({ title, path }, index) => (
						<Link className="mx-4" href={path} key={`${title}-${index}`}>
							<Button variant="default">{title}</Button>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Hero;
