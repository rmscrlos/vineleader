"use client";
import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterTitle = () => {
	return (
		<Typewriter
			options={{
				loop: true,
			}}
			onInit={(typewriter) => {
				typewriter
					.typeString("Lead with <span style='color: #1f8aff'>Purpose.</span>")
					.start()
					.pauseFor(1000)
					.deleteAll()
					.typeString("Inspire <span style='color: #1f8aff'>Growth.</span>")
					.start()
					.pauseFor(1000)
					.deleteAll()
					.typeString("Maximize <span style='color: #1f8aff'>Impact.</span>")
					.start()
					.pauseFor(1000)
					.deleteAll();
			}}
		/>
	);
};

export default TypewriterTitle;
