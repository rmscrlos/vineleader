import { currentUser, UserButton, SignInButton } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/api";

import VineLeaderLogo from "@/components/VineLeaderLogo";
import Navbar from "@/components/Navbar";
import MobileNav from "@/components/MobileNav";
import { Button } from "../ui/button";

const Header = async () => {
	const user: User | null = await currentUser();
	return (
		<div className="h-32 bg-background px-24 flex justify-between items-center mb-10 md:px-16 sm:px-6">
			<div>
				<VineLeaderLogo />
			</div>

			<div className="flex justify-center items-center gap-4">
				<div className="mx-6 lg:hidden">
					<Navbar />
				</div>
				<div className="flex justify-center items-center gap-3 lg:hidden">
					{user ? (
						<UserButton afterSignOutUrl="/" />
					) : (
						<Button>
							<SignInButton />
						</Button>
					)}
				</div>
				<div className="minLg:hidden">
					<MobileNav />
				</div>
			</div>
		</div>
	);
};

export default Header;
