import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "./contact-form";
import Breadcrumbs, { breadcrumbJsonLd } from "../ui/breadcrumbs";
import { JsonLd, businessJsonLd } from "../ui/json-ld";
import { BUSINESS, SITE_URL, services } from "../lib/business";

const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=1508+W+Burbank+Blvd+Burbank+CA+91506";
const mapUrl = "https://www.google.com/maps?q=US+Flooring+%26+Molding+Inc.%2C+1508+W+Burbank+Blvd%2C+Burbank%2C+CA+91506&z=16&output=embed";
const crumbs = [{ label: "Home", href: "/" }, { label: "Contact" }];

export const metadata: Metadata = {
  title: "Contact US Flooring & Molding | Burbank Showroom",
  description:
    "Visit US Flooring & Molding in Burbank or request a flooring estimate. Explore hardwood, laminate, luxury vinyl, molding and installation services.",
  alternates: { canonical: `${SITE_URL}/contact` },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Contact US Flooring & Molding | Burbank Showroom",
    description:
      "Visit US Flooring & Molding in Burbank or request a flooring estimate. Explore hardwood, laminate, luxury vinyl, molding and installation services.",
    url: `${SITE_URL}/contact`,
    images: [{ url: "/og-image.jpg", alt: "US Flooring & Molding" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact US Flooring & Molding | Burbank Showroom",
    description: "Visit our Burbank showroom or request a flooring estimate.",
    images: ["/og-image.jpg"],
  },
};

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SITE_URL}/contact#contact-page`,
  url: `${SITE_URL}/contact`,
  name: "Contact US Flooring & Molding",
  mainEntity: { "@id": `${SITE_URL}/#business` },
  about: { "@id": `${SITE_URL}/#business` },
};

export default function ContactPage() {
  return (
    <main className="pb-20">
      <JsonLd data={[contactPageJsonLd, breadcrumbJsonLd(crumbs), businessJsonLd()]} />
      <Breadcrumbs items={crumbs} />
      <section className="section bg-subtle">
        <div className="container grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="eyebrow">Get in touch</p>
            <h1>Visit Our Burbank Flooring Showroom</h1>
            <p className="lead">Let&apos;s talk about your floor. Call us, stop by, or request an estimate online.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="button" href={`tel:${BUSINESS.phone}`}>Call {BUSINESS.phoneDisplay}</a>
              <a className="button button-secondary" href={directionsUrl} target="_blank" rel="noopener noreferrer">Get Directions</a>
            </div>
            <address className="mt-8 not-italic rounded border border-border bg-ivory p-6">
              <p className="font-semibold">{BUSINESS.name}</p>
              <p className="mt-2">{BUSINESS.address.street}<br />{BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}</p>
              <p className="mt-3"><a className="text-link" href={`tel:${BUSINESS.phone}`}>{BUSINESS.phoneDisplay}</a></p>
              <p className="mt-3"><a className="text-link" href={directionsUrl} target="_blank" rel="noopener noreferrer">Plan a route to our showroom</a></p>
            </address>
          </div>
          <div>
            <div className="overflow-hidden rounded border border-border bg-ivory">
              <iframe src={mapUrl} title="Map showing US Flooring & Molding in Burbank" className="h-[360px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
            <p className="mt-4 text-sm text-charcoal/70"><strong>Directions:</strong> We are at {`${BUSINESS.address.street}, ${BUSINESS.address.city}, ${BUSINESS.address.state} ${BUSINESS.address.zip}`}. <a className="text-link" href={directionsUrl} target="_blank" rel="noopener noreferrer">Open directions in Google Maps</a>.</p>
          </div>
        </div>
      </section>
      <section className="section container">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow">Free estimate</p>
          <h2>Tell Us About Your Project</h2>
          <p className="mt-4 text-charcoal/70">Share a few details and our team will follow up about your flooring needs.</p>
          <ContactForm />
          <p className="mt-5 text-center text-xs text-charcoal/60">Privacy disclosure: We use the information you submit only to respond to your request and discuss your project. We do not sell your information.</p>
        </div>
      </section>
      <section className="section bg-subtle">
        <div className="container">
          <h2>Explore Our Flooring Services</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(([name, href, description]) => <Link key={href} href={href} className="rounded border border-border bg-ivory p-5 hover:border-walnut"><h3>{name}</h3><p className="mt-2 text-sm text-charcoal/70">{description}</p></Link>)}
          </div>
        </div>
      </section>
    </main>
  );
}
