import Banner from "@/components/Banner";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex flex-col px-24 sm:px-6">
			<Banner />

			<section className="w-full h-[40rem] bg-blueaccent-1 rounded-md flex justify-center items-center mb-24 gap-20 text-white drop-shadow-lg md:flex-col md:h-[50rem]">
				<div>
					<h1 className="text-6xl sm:text-5xl">
						Vine <br /> Leader <br /> Conference
					</h1>
					<p>Nov. 16 - 19</p>
				</div>
				<div className="w-[30%] h-fit md:w-[62%] sm:w-[82%]">
					<p className="text-3xl mb-6">Empowering Church Leaders</p>
					<p className="italic">
						therefore pray earnestly to the Lord of the harvest to send out
						laborers into his harvest.
					</p>
					<p className="font-bold">Matthew 9:38</p>

					<Link
						className="bg-orange-400 my-6 inline-block py-2 px-5 rounded relative"
						href="https://guestli.st/754095"
					>
						Register
					</Link>
				</div>
			</section>

			<section className="h-[20rem] md:h-auto">
				<h3 className="text-3xl">Coming soon</h3>
				<div className="flex items-center justify-around my-12 gap-5 md:items-baseline sm:flex-col">
					<div className="w-[30%] p-3 bg-foreground text-background rounded drop-shadow-sm sm:w-full">
						<h4 className="text-2xl">Podcasts</h4>
						<p>Leadership podcasts</p>
					</div>
					<div className="w-[30%] p-3 bg-foreground text-background rounded drop-shadow-sm sm:w-full">
						<h4 className="text-2xl">Classes</h4>
						<p>Classes on leadership</p>
					</div>
					<div className="w-[30%] p-3 bg-foreground text-background rounded drop-shadow-sm sm:w-full">
						<h4 className="text-2xl">Resources</h4>
						<p>Resources for leaders</p>
					</div>
				</div>
			</section>
		</main>
	);
}
