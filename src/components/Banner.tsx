import React from "react";

const Banner = () => {
	return (
		<div className="flex flex-col justify-center items-center h-96 rounded mb-32 md:mt-8 sm:mt-24">
			<h1 className="lg:text-6xl text-8xl m-4 w-[50%] text-center md:w-full sm:text-left sm:text-6xl">
				vine leader conference
			</h1>
			<p className="lg:w-[80%] text-3xl w-2/5 text-content/[0.6] md:w-full sm:text-xl">
				Empowerment and inspiration for leaders who want to grow their full
				potential and impact.
			</p>
			<p className="lg:w-[80%] w-2/5 m-4 text-xl md:w-full">Nov. 16 - 18</p>
			<a href="#" className="bg-vividOrange py-3 px-6 text-white rounded">
				Register
			</a>
		</div>
	);
};

export default Banner;
