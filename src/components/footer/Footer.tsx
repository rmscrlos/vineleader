import React from "react";
import VineLeaderLogo from "../VineLeaderLogo";
import Link from "next/link";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<div className="bg-foreground h-[20rem] text-background flex justify-around items-baseline  py-[5rem] w-auto md:flex-col md:h-auto md:gap-[5rem] md:justify-center md:items-center md:text-center">
			<div className="h-[100%] flex flex-col justify-between">
				<h1 className="font-geo text-3xl">vine leader</h1>
				<p className="font-light text-sm">
					Copyright &copy; {currentYear} Vine Leader
				</p>
			</div>
			<div>
				<h2 className="tracking-widest mb-2">MENU</h2>
				<div className="flex flex-col justify-between gap-1 font-sm font-thin">
					<Link href="/">Home</Link>
					<Link href="/resources">Resources</Link>
					<Link href="/events">Events</Link>
				</div>
			</div>
			<div>
				<h2 className="tracking-widest mb-2">OTHER</h2>
				<div className="flex flex-col justify-between gap-1 font-sm font-thin">
					<Link href="https://www.vineswfl.church">Vine Church SWFL</Link>
				</div>
			</div>
			<div>
				<h2 className="tracking-widest mb-2">CONTACT US</h2>

				<div className="flex flex-col justify-between gap-1 font-sm font-thin">
					<p>
						7806 College Parkway <br />
						Fort Myers, FL 33907 <br />
					</p>
					<p>Mail: info@vineleader.com</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
