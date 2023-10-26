import React from "react";

import { cn } from "@/lib/utils";

type Props = {
	title: string;
	subTitle?: string;
	classNames?: string;
};

const Banner = ({ title, subTitle, classNames }: Props) => {
	return (
		<div
			className={cn(
				"shadow-xl h-[40rem] w-[80%] flex f items-center mb-[5rem] p-[5rem] lg:h-[30rem] md:h-[20rem] md:mb-[1rem] bg-blueaccent-1/[.3] rounded-lg",
				classNames
			)}
		>
			<div>
				<h1 className="text-9xl font-medium w-[20%]">{title}</h1>
				{subTitle && <p className="text-3xl font-medium">{subTitle}</p>}
			</div>
		</div>
	);
};

export default Banner;
