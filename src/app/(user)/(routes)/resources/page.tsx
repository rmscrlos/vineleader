import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

type Props = {};

const Resources = (props: Props) => {
	return (
		<div className="flex flex-col gap-10 px-24 text-foreground sm:px-6 md:px-12">
			<div className="text-foreground p-4 flex-[1]">
				<h1 className="text-3xl mb-4 font-medium">Resources</h1>
				<p className="font-medium text-xl text-gray-400">
					Leading the Way <br /> Your Source for Leadership Resources{" "}
				</p>
			</div>
			<div className="flex justify-between items-center border-b-2 pb-4">
				<div className="w-[33%] relative md:w-[50%] sm:w-[100%]">
					<Input
						type="text"
						placeholder="Search through resources..."
						className="h-11"
					/>
					<Search className="absolute right-3 top-[.6rem] text-gray-400" />
				</div>
				<p className="text-gray-500 text-sm self-end sm:hidden">
					Showing 0 items
				</p>
			</div>
			{/* Items */}
			<div className="text-xl h-[20rem] flex justify-center items-center text-gray-400">
				No Items yet...
			</div>
		</div>
	);
};

export default Resources;
