import { cn } from "@/lib/utils";
import Link from "next/link";

const VineLeaderLogo = ({
	className,
}: React.HTMLAttributes<HTMLDivElement>) => {
	return (
		<Link href="/">
			<span className={cn(className, "text-3xl font-geo")}>
				vine <span className="text-blueaccent-1 font-[600]">leader</span>
			</span>
		</Link>
	);
};

export default VineLeaderLogo;
