import { cn } from "@/lib/utils";

const VineLeaderLogo = ({
	className,
}: React.HTMLAttributes<HTMLDivElement>) => {
	return (
		<span className={cn(className, "text-3xl font-geo")}>
			vine <span className="text-blueaccent-1 font-[600]">leader</span>
		</span>
	);
};

export default VineLeaderLogo;
