import Image from "next/image";
import React from "react";

const Banner = () => {
	return (
		<div className="h-[36rem] flex justify-center items-center gap-10 mb-32 lg:h-[30rem] sm:flex-col sm:h-[20rem]">
			<div className="relative w-[50%] h-full sm:w-[100%] sm:h-0">
				<div className="w-[250px] h-[250px] bg-blueaccent-1 rounded-full absolute right-[15rem] top-[4rem] lg:w-[200px] lg:h-[200px] lg:right-[8rem] md:right-[5rem] sm:top-[2rem] sm:w-[150px] sm:h-[150px] sm:left-[3rem] sm:bg-blueaccent-1/[.3]" />
				<div className="w-[150px] h-[150px] bg-blueaccent-2 rounded-full absolute right-16 top-64 lg:w-[100px] lg:h-[100px] md:right-[2rem] sm:right-[3rem] sm:top-[9rem] sm:bg-blueaccent-2/[.2]" />
				<div className="w-[75px] h-[75px] bg-blueaccent-3 rounded-full absolute right-[15rem] top-[25rem] lg:w-[50px] lg:h-[50px] lg:top-[23rem] lg:right-[12rem] md:right-[10rem] sm:top-[15rem] sm:right-[14rem] sm:bg-blueaccent-3/[.3]" />
			</div>
			<div className="flex flex-col w-[50%] gap-4 sm:w-[100%] z-[1]">
				<h1 className="text-6xl lg:text-5xl md:text-4xl">
					Maximize Your Leadership
				</h1>
				<p className="text-2xl w-[75%] text-foreground/[.5] lg:w-[100%] md:text-xl">
					Empowerment and inspiration for leaders who want to grow their full
					potential and impact.
				</p>
			</div>
		</div>
	);
};

export default Banner;
