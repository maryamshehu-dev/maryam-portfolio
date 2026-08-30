import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Maryam Shehu Muhammad — UI/UX Designer", description: "Nine product design explorations by Maryam Shehu Muhammad, a UI/UX designer and brand builder based in Abuja, Nigeria.", icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" } };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
