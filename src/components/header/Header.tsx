import ThemeToggle from "@/app/ThemeToggle";

const Header = () => {
	return (
		<div className="h-24 px-24 flex justify-between items-center md:px-16 sm:px-6">
			<div>
				<span className="text-3xl">
					<span className="text-accent-1">vine</span> leader
				</span>
			</div>

			<div>
				<ThemeToggle />
			</div>
		</div>
	);
};

export default Header;
