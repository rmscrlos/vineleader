"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function ThemeToggle() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme }: any = useTheme();

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	if (theme === "dark") {
		return (
			<div className="cursor-pointer" onClick={() => setTheme("light")}>
				<MdLightMode className="text-yellow-500" size={24} />
			</div>
		);
	}

	return (
		<div className="cursor-pointer" onClick={() => setTheme("dark")}>
			<MdDarkMode size={24} />
		</div>
	);
}

export default ThemeToggle;
