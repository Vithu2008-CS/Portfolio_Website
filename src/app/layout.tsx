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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const siteName = process.env.NEXT_PUBLIC_NAME ?? "Vithurshan Thangavel";
const siteTitle =
  process.env.NEXT_PUBLIC_SITE_TITLE ??
  "Vithurshan Thangavel — Full-Stack Developer";
const siteDescription =
  process.env.NEXT_PUBLIC_SITE_DESCRIPTION ??
  "Final-year Computer Science student from Sri Lanka. I build full-stack web applications — most recently an e-commerce platform with QR inventory and driver logistics. Open to junior engineering roles.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "Vithurshan Thangavel",
    "Full-Stack Developer",
    "Software Engineer",
    "React",
    "Node.js",
    "Laravel",
    "Portfolio",
    "Sri Lanka",
    "Junior Developer",
  ],
  authors: [{ name: siteName }],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    url: siteUrl,
    siteName: siteName,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${siteName} — Full-Stack Developer Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [`${siteUrl}/og-image.png`],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vithurshan Thangavel",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "Vithurshanthangavel@gmail.com",
  jobTitle: "Full-Stack Developer",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Eastern University Sri Lanka",
  },
  sameAs: [
    process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "https://www.linkedin.com/in/vithurshan20",
    process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/Vithu2008-CS",
  ],
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
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
