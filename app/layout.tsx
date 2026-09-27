import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { BUSINESS, SITE_URL } from "./lib/business";
import Navigation from "./ui/navigation";
import Footer from "./ui/footer";
import GoogleAnalytics from "./ui/google-analytics";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap", variable: "--font-manrope" });

export const metadata: Metadata = { metadataBase: new URL(SITE_URL), title: "US Flooring & Molding | Burbank Flooring Store", description: "Family-owned flooring store and installation company serving Burbank and greater Los Angeles.", openGraph: { type: "website", siteName: BUSINESS.name, locale: "en_US", images: [{ url: "/og-image.jpg", width: 1200, height: 630 }] }, twitter: { card: "summary_large_image", images: ["/og-image.jpg"] } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className={manrope.variable}><body><a className="skip-link" href="#main-content">Skip to main content</a><Navigation /><main id="main-content">{children}</main><Footer /><GoogleAnalytics /></body></html>; }
