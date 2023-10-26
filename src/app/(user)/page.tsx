import Hero from "@/components/Hero";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex flex-col px-24 sm:px-6">
			<Hero />

			<section className="py-20">
				<div className="flex justify-center items-center gap-20 mb-20 md:flex-col md:gap-10">
					<div className="bg-blueaccent-1/[.3] w-[40%] h-[20rem] rounded-md flex flex-col justify-center px-8 md:w-[92%]">
						<h1 className="text-6xl md:text-5xl">
							Vine <br /> Leader <br /> Summit
						</h1>
						<p>Nov. 16 - 19</p>
					</div>
					<div className="w-[30%] h-fit md:w-[92%]">
						<p className="text-3xl mb-6 text-blueaccent">
							Empowering Church Leaders
						</p>
						<p className="italic text-gray-500">
							therefore pray earnestly to the Lord of the harvest to send out
							laborers into his harvest.
						</p>
						<p className="font-bold">Matthew 9:38</p>

						<Link
							className="bg-foreground text-white my-6 inline-block py-2 px-5 rounded relative"
							href="https://guestli.st/754095"
						>
							Register
						</Link>
					</div>
				</div>
				<div className="flex justify-center items-center gap-20 md:flex-col md:gap-10">
					{/* display on top of content in mobile */}
					<div className="bg-blueaccent-1/[.3] w-[40%] h-[20rem] rounded-md flex flex-col justify-center px-8 text-right md:w-[92%] minMd:hidden">
						<h1 className="text-xl">
							Leaders become great not because of their power, but because of
							their ability to empower others.
						</h1>
						<p>John C. Maxwell9</p>
					</div>
					<div className="w-[30%] h-fit md:w-[92%]">
						<p className="text-3xl mb-6 text-blueaccent">Resources</p>
						<p className="italic text-gray-500">
							Discover a wealth of leadership resources for ministry on our
							dedicated resources page. Your path to inspiration and guidance
							begins here!
						</p>

						<Link
							className="bg-foreground text-white my-6 inline-block py-2 px-5 rounded relative"
							href="/resources"
						>
							Explore
						</Link>
					</div>
					<div className="bg-blueaccent-1/[.3] w-[40%] h-[20rem] rounded-md flex flex-col justify-center px-8 text-right md:w-[92%] md:hidden">
						<h1 className="text-xl">
							Leaders become great not because of their power, but because of
							their ability to empower others.
						</h1>
						<p>John C. Maxwell9</p>
					</div>
				</div>
			</section>
		</main>
	);
}
