import type { Metadata } from "next";
import "./globals.css";
import { BUSINESS, SITE_URL } from "./lib/business";
import Navigation from "./ui/navigation";
import Footer from "./ui/footer";

export const metadata: Metadata = { metadataBase: new URL(SITE_URL), title: "US Flooring & Molding | Burbank Flooring Store", description: "Family-owned flooring store and installation company serving Burbank and greater Los Angeles.", openGraph: { type: "website", siteName: BUSINESS.name, locale: "en_US", images: [{ url: "/og-image.jpg", width: 1200, height: 630 }] }, twitter: { card: "summary_large_image", images: ["/og-image.jpg"] } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to main content</a><Navigation /><main id="main-content">{children}</main><Footer /></body></html>; }
