import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import { BUSINESS, SITE_URL } from "./lib/business";
import Navigation from "./ui/navigation";
import Footer from "./ui/footer";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "US Flooring & Molding | Burbank Flooring Store", template: "%s | US Flooring & Molding" },
  description: "US Flooring & Molding is a family-owned Burbank flooring store and installation company serving greater Los Angeles.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "website", siteName: BUSINESS.name, locale: "en_US", url: SITE_URL, images: [{ url: "/og-image.jpg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/og-image.jpg"] },
};

const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": ["LocalBusiness", "HomeAndConstructionBusiness"], "@id": `${SITE_URL}/#business`, name: BUSINESS.name, legalName: BUSINESS.legalName, url: SITE_URL, telephone: BUSINESS.phone, address: { "@type": "PostalAddress", streetAddress: BUSINESS.address.street, addressLocality: BUSINESS.address.city, addressRegion: BUSINESS.address.state, postalCode: BUSINESS.address.zip, addressCountry: "US" }, sameAs: [BUSINESS.googleMapsUrl, BUSINESS.yelpUrl, BUSINESS.linkedInUrl] }, { "@type": "WebSite", url: SITE_URL, name: BUSINESS.name }] };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><a className="skip-link" href="#main-content">Skip to main content</a><Navigation /><main id="main-content">{children}</main><Footer /></body></html>;
}
