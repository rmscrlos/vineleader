import LandingPageHero from "@/components/LandingPageHero";
import SlotLandingComponent from "@/components/SlotLandingComponent";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex flex-col px-24 sm:px-6">
			<LandingPageHero />

			<section className="mb-[10rem]">
				<div className="flex justify-center items-center gap-20 mb-20 md:flex-col md:gap-10">
					<SlotLandingComponent>
						<h1 className="text-6xl z-10 md:text-5xl">
							Vine <br /> Leader <br /> Summit
						</h1>
						<p>Nov. 16 - 19</p>
					</SlotLandingComponent>
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
					<SlotLandingComponent classNames="minMd:hidden">
						<h1 className="text-xl z-10">
							Leaders become great not because of their power, but because of
							their ability to empower others.
						</h1>
						<p>John C. Maxwell</p>
					</SlotLandingComponent>

					<div className="w-[30%] h-fit z-10 md:w-[92%]">
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
					<SlotLandingComponent classNames="md:hidden">
						<h1 className="text-xl z-10">
							Leaders become great not because of their power, but because of
							their ability to empower others.
						</h1>
						<p>John C. Maxwell</p>
					</SlotLandingComponent>
				</div>
			</section>
		</main>
	);
}
