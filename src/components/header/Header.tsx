import ThemeToggle from "@/app/ThemeToggle";
import SignInButton from "../SignInButton";
import { getAuthSession } from "@/lib/nextauth";
import UserAccountNav from "../UserAccountNav";
import VineLeaderLogo from "../VineLeaderLogo";

const Header = async () => {
	const session = await getAuthSession();
	return (
		<div className="h-24 px-24 flex justify-between items-center md:px-16 sm:px-6">
			<div>
				<VineLeaderLogo />
			</div>

			<div className="flex justify-center items-center gap-4">
				{/* Fix later */}
				{/* <ThemeToggle /> */}
				{session?.user ? (
					<UserAccountNav user={session.user} />
				) : (
					<SignInButton text="Sign In" />
				)}
			</div>
		</div>
	);
};

export default Header;
