import type { Metadata } from "next";
import "../src/index.css";
import Nav from "../src/components/next/Nav";
import Footer from "../src/components/next/Footer";
import { BUSINESS, businessJsonLd } from "../src/lib/next-site";

export const metadata: Metadata = { metadataBase: new URL(BUSINESS.website), title: { default: "US Flooring & Molding Inc. | Burbank Flooring Experts", template: "%s | US Flooring" }, description: "Hardwood, laminate, luxury vinyl, molding, and professional flooring installation in Burbank and greater Los Angeles.", alternates: { canonical: "/" }, robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } }, openGraph: { type: "website", siteName: BUSINESS.name, url: BUSINESS.website, images: ["/og-image.jpg"] }, twitter: { card: "summary_large_image" } };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }} /><a href="#main-content" className="skip-link">Skip to main content</a><Nav /><main id="main-content">{children}</main><Footer /></body></html>;
}
