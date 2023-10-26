import React from "react";

import { cn } from "@/lib/utils";

type Props = {
	children: React.ReactElement | any;
	classNames?: string;
};

const Main = ({ children, classNames }: Props) => {
	return (
		<main className={cn("flex flex-col px-24 sm:px-6", classNames)}>
			{children}
		</main>
	);
};

export default Main;
