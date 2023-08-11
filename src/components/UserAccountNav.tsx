"use client";
import React from "react";
import { User } from "next-auth";
import {
	DropdownMenu,
	DropdownMenuItem,
	DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import {
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";
import UserAvatar from "./UserAvatar";

type Props = {
	user: Pick<User, "name" | "email" | "image">;
};

const UserAccountNav = ({ user }: Props) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<UserAvatar user={user} />
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className="bg-white rounded drop-shadow-md my-1"
				align="end"
			>
				<div className="flex flex-col items-center justify-start gap-2 p-2">
					<div className="flex flex-col space-y-1 leading-none">
						{user.name && <p className="font-medium">{user.name}</p>}
						{user.email && (
							<p className="w-[200px] truncate text-sm text-zinc-700">
								{user.email}
							</p>
						)}
					</div>
				</div>

				<DropdownMenuSeparator />

				<DropdownMenuItem
					onClick={(e) => {
						e.preventDefault();
						signOut().catch(console.error);
					}}
					className="text-red-600 cursor-pointer"
				>
					Sign Out
					<LogOut className="m-1 h-[.9rem] m1-2" />
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default UserAccountNav;
