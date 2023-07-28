"use client";
import React, { useState, useEffect } from "react";
import { ThemeProvider as Provider } from "next-themes";

function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	if (!mounted) return <>{children}</>;

	return <Provider>{children}</Provider>;
}

export default ThemeProvider;
