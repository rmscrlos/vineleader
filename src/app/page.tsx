import Banner from "@/components/Banner";

export default function Home() {
	return (
		<main className="flex h-auto flex-col px-24 sm:px-6">
			<Banner />

			<div>
				<h3 className="text-3xl">Coming soon</h3>
				<div className="flex items-center justify-around my-12 gap-5 md:items-baseline sm:flex-col">
					<div className="w-[30%] p-3 bg-content text-bkg rounded drop-shadow-sm sm:w-full">
						<h4 className="text-2xl">Podcasts</h4>
						<p>Leadership podcasts</p>
					</div>
					<div className="w-[30%] p-3 bg-content text-bkg rounded drop-shadow-sm sm:w-full">
						<h4 className="text-2xl">Classes</h4>
						<p>Classes on leadership</p>
					</div>
					<div className="w-[30%] p-3 bg-content text-bkg rounded drop-shadow-sm sm:w-full">
						<h4 className="text-2xl">Resources</h4>
						<p>Resources for leaders</p>
					</div>
				</div>
			</div>
		</main>
	);
}
