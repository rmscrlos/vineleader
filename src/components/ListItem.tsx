import Link from "next/link";
import React from "react";

type Props = {
	href: string;
	title: string;
	children: React.ReactNode;
};

const ListItem = ({ href, title, children }: Props) => {
	return (
		<Link href={href}>
			<h1 className="font-semibold">{title}</h1>
			<p className="text-foreground/[0.6]">{children}</p>
		</Link>
	);
};

export default ListItem;
