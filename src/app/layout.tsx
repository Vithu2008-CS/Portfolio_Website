import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_SITE_TITLE ?? "Vithurshan Thangavel | Software Engineer Portfolio",
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ??
    "Full-Stack Software Engineer specializing in React, Node.js, and UI/UX Design. BSc (Hons) Computer Science undergraduate at Eastern University Sri Lanka.",
  keywords: [
    "Vithurshan Thangavel",
    "Software Engineer",
    "Full-Stack Developer",
    "React",
    "Node.js",
    "Portfolio",
    "Sri Lanka",
  ],
  authors: [{ name: process.env.NEXT_PUBLIC_NAME ?? "Vithurshan Thangavel" }],
  openGraph: {
    title: process.env.NEXT_PUBLIC_SITE_TITLE ?? "Vithurshan Thangavel | Software Engineer",
    description:
      process.env.NEXT_PUBLIC_SITE_DESCRIPTION ??
      "Full-Stack Software Engineer specializing in React, Node.js, and UI/UX Design.",
    type: "website",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
