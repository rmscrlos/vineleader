"use client";
import React from "react";
import { MouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
	children: React.ReactElement | any;
	classNames?: string;
};

const SlotLandingComponent = ({ children, classNames }: Props) => {
	let mouseX = useMotionValue(0);
	let mouseY = useMotionValue(0);

	function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
		let { left, top } = currentTarget.getBoundingClientRect();

		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	}
	return (
		<div
			className={cn(
				classNames,
				"relative group bg-blueaccent-1/[.3] w-[40%] h-[20rem] rounded-md flex flex-col justify-center px-8 shadow-xl md:w-[92%]"
			)}
			onMouseMove={handleMouseMove}
		>
			<motion.div
				className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
				style={{
					background: useMotionTemplate`
									radial-gradient(
									650px circle at ${mouseX}px ${mouseY}px,
									#fffffff2,
									transparent 80%
									)
								`,
				}}
			/>
			{children}
		</div>
	);
};

export default SlotLandingComponent;
