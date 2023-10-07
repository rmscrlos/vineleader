import { Construction } from "lucide-react";
import React from "react";

type Props = {};

const Podcasts = (props: Props) => {
	return (
		<div className="h-[30rem] w-full flex justify-center items-center flex-col">
			<Construction className="h-[10rem] w-[10rem] text-gray-300 m-12" />
			<h1 className="text-2xl text-center">
				Podcast Page <br />
				Under Construction..
			</h1>
		</div>
	);
};

export default Podcasts;
