import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "./contact-form";
import Breadcrumbs, { breadcrumbJsonLd } from "../ui/breadcrumbs";
import { JsonLd, businessJsonLd } from "../ui/json-ld";
import { BUSINESS, SITE_URL, services } from "../lib/business";

const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=1508+W+Burbank+Blvd+Burbank+CA+91506";
const mapUrl = "https://www.google.com/maps?q=US+Flooring+%26+Molding+Inc.%2C+1508+W+Burbank+Blvd%2C+Burbank%2C+CA+91506&z=16&output=embed";
const items = [{ label: "Home", href: "/" }, { label: "Contact" }];

export const metadata: Metadata = {
  title: "Contact US Flooring & Molding | Burbank Showroom",
  description: `Visit the US Flooring & Molding showroom at ${BUSINESS.address.street}, ${BUSINESS.address.city}, ${BUSINESS.address.state} ${BUSINESS.address.zip}. Call ${BUSINESS.phoneDisplay} or request a free estimate online.`,
  alternates: { canonical: `${SITE_URL}/contact` },
  robots: { index: true, follow: true },
  openGraph: { title: "Request a Free Flooring Estimate | US Flooring", description: "Discuss your flooring project with the US Flooring & Molding team in Burbank, California.", url: `${SITE_URL}/contact`, images: [{ url: "/og-image.jpg", alt: "US Flooring & Molding" }], type: "website" },
  twitter: { card: "summary_large_image", title: "Contact US Flooring & Molding | Burbank Showroom", description: "Visit our Burbank showroom or request a flooring estimate.", images: ["/og-image.jpg"] },
};

const contactPageJsonLd = { "@context": "https://schema.org", "@type": "ContactPage", "@id": `${SITE_URL}/contact#contact-page`, url: `${SITE_URL}/contact`, name: "Contact US Flooring & Molding", mainEntity: { "@id": `${SITE_URL}/#business` }, about: { "@id": `${SITE_URL}/#business` } };

export default function ContactPage() {
  return (
    <div className="pb-[72px] lg:pb-0">
      <JsonLd data={[contactPageJsonLd, breadcrumbJsonLd(items), businessJsonLd()]} />
      <Breadcrumbs items={items} />

      {/* Header */}
      <section className="pt-8 pb-12 bg-subtle">
        <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="font-sans text-[11px] font-bold text-walnut uppercase tracking-widest mb-4">Get in Touch</p>
            <h1 className="font-serif text-[40px] lg:text-[56px] font-bold text-charcoal leading-[1.06] mb-3">Visit Our Burbank Flooring Showroom</h1>
            <p className="font-sans text-base text-walnut font-semibold mb-5">Let&apos;s Talk About Your Floor</p>
            <p className="font-sans text-base text-charcoal/60 leading-relaxed mb-8">Call us, stop by, or fill out the form. You&apos;ll get a real answer from a real person — not a script, not a call center.</p>

            {/* Quick CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <a href={`tel:${BUSINESS.phone}`} className="flex items-center gap-3 bg-red text-white px-5 py-4 rounded-[2px] hover:bg-red-dark transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                <div><div className="font-sans text-[13px] font-bold">Call Now</div><div className="font-sans text-[12px] text-ivory/70">{BUSINESS.phoneDisplay}</div></div>
              </a>
              <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-ivory border border-border px-5 py-4 rounded-[2px] hover:border-walnut/40 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B4A2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                <div><div className="font-sans text-[13px] font-bold text-charcoal">Get Directions</div><div className="font-sans text-[12px] text-charcoal/40">{BUSINESS.address.street}</div></div>
              </a>
            </div>

            {/* Info */}
            <address className="not-italic bg-ivory border border-border rounded-[3px] p-6 flex flex-col gap-3">
              <div className="flex gap-4">
                <span className="font-sans text-[11px] font-bold text-charcoal/35 uppercase tracking-wide w-14 shrink-0 pt-0.5">Address</span>
                <a href={BUSINESS.googleMapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Open US Flooring & Molding Inc. in Google Maps" className="font-sans text-[14px] text-charcoal/65 hover:text-walnut transition-colors">{BUSINESS.address.street}, {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}</a>
              </div>
              <div className="flex gap-4"><span className="font-sans text-[11px] font-bold text-charcoal/35 uppercase tracking-wide w-14 shrink-0 pt-0.5">Phone</span><a href={`tel:${BUSINESS.phone}`} className="font-sans text-[14px] text-charcoal/65 hover:text-walnut transition-colors">{BUSINESS.phoneDisplay}</a></div>
              <div className="flex gap-4"><span className="font-sans text-[11px] font-bold text-charcoal/35 uppercase tracking-wide w-14 shrink-0 pt-0.5">Email</span><a href={`mailto:${BUSINESS.email}`} className="font-sans text-[14px] text-charcoal/65 hover:text-walnut transition-colors">{BUSINESS.email}</a></div>
            </address>

            {/* Social */}
            <div className="mt-6">
              <p className="font-sans text-[11px] font-bold text-charcoal/35 uppercase tracking-widest mb-4">Follow Us</p>
              <div className="flex items-center gap-3 flex-wrap">
                <a href={BUSINESS.linkedInUrl} target="_blank" rel="noopener noreferrer" aria-label="US Flooring & Molding on LinkedIn" className="w-10 h-10 flex items-center justify-center rounded-[3px] bg-ivory border border-border text-charcoal/50 hover:text-charcoal hover:border-charcoal/40 transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                </a>
                <a href={BUSINESS.yelpUrl} target="_blank" rel="noopener noreferrer" aria-label="US Flooring on Yelp" className="w-10 h-10 flex items-center justify-center rounded-[3px] bg-ivory border border-border text-charcoal/50 hover:text-[#d32323] hover:border-[#d32323]/30 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true"><path d="M20.16 12.596c.411-.36.416-.849.015-1.166l-3.584-2.765c-.398-.311-.861-.134-.99.381l-.73 2.91c-.127.507.205.88.74.826l4.103-.44a1.3 1.3 0 0 0 .447-.204l-.001-.001v-.001zm-7.693 6.547.73 2.911c.13.515.594.694.99.381l3.584-2.765c.401-.318.396-.806-.015-1.166a1.3 1.3 0 0 0-.447-.205l-4.103-.44c-.535-.055-.868.319-.74.826zm-3.135 1.53c.35.392.827.347 1.06-.1l1.261-2.407c.234-.447.032-.895-.449-1.008l-4.012-.94c-.482-.113-.812.218-.697.718l.957 4.021c.118.5.535.73.88.341zm-3.18-7.573a1.27 1.27 0 0 0-.327.418L3.91 16.48c-.232.464.002.9.521.964l4.103.497c.52.063.854-.32.744-.847l-.845-3.884c-.11-.528-.609-.758-1.004-.416l-.042.036zM10.6 3.27c-.232-.464-.716-.528-1.05-.14L6.457 6.658c-.336.39-.262.868.162 1.065l3.667 1.71c.423.197.826-.042.899-.55l.589-4.027c.074-.51-.172-.917-.404-1.381L10.6 3.27z" /></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="flex flex-col gap-3">
            <div className="relative w-full min-h-[320px] md:min-h-[400px] overflow-hidden rounded-[3px] bg-subtle/30 border border-border">
              <iframe src={mapUrl} title="Google Maps location of US Flooring & Molding Inc. in Burbank" className="absolute inset-0 w-full h-full" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
            <a href={BUSINESS.googleMapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Get directions to US Flooring & Molding Inc. in Google Maps" className="inline-flex items-center gap-2 self-start border-[1.5px] border-charcoal text-charcoal px-5 py-3 rounded-[2px] font-sans text-[13px] font-bold hover:bg-subtle/60 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-ivory">
        <div className="max-w-[780px] mx-auto px-6 py-16">
          <p className="font-sans text-[11px] font-bold text-walnut uppercase tracking-widest mb-4">Free Estimate</p>
          <h2 className="font-serif text-[32px] lg:text-[44px] font-bold text-charcoal mb-8 leading-tight">Request Your Free Estimate</h2>
          <ContactForm />
          <p className="mt-5 text-center text-xs text-charcoal/60">Privacy disclosure: We use the information you submit only to respond to your request and discuss your project. We do not sell your information.</p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-subtle border-t border-border">
        <div className="max-w-[1180px] mx-auto px-6 py-16">
          <h2 className="font-serif text-[28px] lg:text-[36px] font-bold text-charcoal mb-8">Explore Our Flooring Services</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(([name, href, description]) => <Link key={href} href={href} className="rounded border border-border bg-ivory p-5 hover:border-walnut transition-colors"><h3 className="font-sans text-[15px] font-bold text-charcoal">{name}</h3><p className="mt-2 text-sm text-charcoal/70">{description}</p></Link>)}
          </div>
        </div>
      </section>

      {/* Schedule strip */}
      <section className="bg-charcoal py-12">
        <div className="max-w-[1180px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-sans text-[13px] font-bold text-ivory mb-1">Schedule a Showroom Appointment</p>
            <p className="font-sans text-[13px] text-ivory/50">{BUSINESS.address.street}, {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}</p>
          </div>
          <div className="flex gap-3">
            <a href={`tel:${BUSINESS.phone}`} className="bg-red text-white px-6 py-3 rounded-[2px] font-sans text-[14px] font-bold hover:bg-red-dark transition-colors">Call to Schedule</a>
            <a href={`mailto:${BUSINESS.email}`} className="border-[1.5px] border-ivory/30 text-ivory/60 px-6 py-3 rounded-[2px] font-sans text-[14px] font-bold hover:border-ivory/60 hover:text-ivory transition-colors">Email Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}
