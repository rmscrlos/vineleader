import { ThemeToggle } from "@/app/ThemeToggle";
import SignInButton from "../SignInButton";
import { getAuthSession } from "@/lib/nextauth";
import UserAccountNav from "@/components/UserAccountNav";
import VineLeaderLogo from "@/components/VineLeaderLogo";
import Navbar from "@/components/Navbar";
import MobileNav from "@/components/MobileNav";

const Header = async () => {
	const session = await getAuthSession();
	return (
		<div className="h-32 bg-background px-24 flex justify-between items-center md:px-16 sm:px-6">
			<div>
				<VineLeaderLogo />
			</div>

			<div className="flex justify-center items-center gap-4">
				<div className="mx-6 lg:hidden">
					<Navbar />
				</div>
				<div className="flex justify-center items-center gap-3 lg:hidden">
					<ThemeToggle />
					{session?.user ? (
						<UserAccountNav user={session.user} />
					) : (
						<SignInButton text="Sign In" />
					)}
				</div>
				<div className="minLg:hidden">
					<MobileNav user={session?.user} />
				</div>
			</div>
		</div>
	);
};

export default Header;
