import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Maryam Shehu — UI/UX Designer", description: "Selected product design work by Maryam Shehu, a UI/UX designer based in Abuja, Nigeria.", icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" } };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
