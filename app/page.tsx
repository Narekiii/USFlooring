import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS, SITE_URL } from "./lib/business";
import { JsonLd, businessJsonLd } from "./ui/json-ld";

const trustItems = ["5.0★ Google Rating", "Free Estimates", "1-Year Labor Guarantee", "20+ Years in Burbank", "Hardwood · Laminate · Vinyl · Moldings"];

const howCards = [
  ["Real Guidance", "We tell you what actually fits your space and budget, not just what's in stock."],
  ["Quality Materials", "Hardwood, laminate, vinyl, and moldings chosen for how they hold up — not just how they photograph."],
  ["Clean, Skilled Installs", "Crews who treat prep and detail like it matters, because it does."],
  ["Fair, Honest Pricing", "No inflated quotes. No bait-and-switch. Your real cost before you commit."],
  ["Free Estimates", "Know your real cost before you commit to anything."],
  ["1-Year Labor Guarantee", "We stand behind the work after we leave. Real people to call if something's not right."],
] as const;

const serviceCards = [
  ["Hardwood Flooring", "Timeless, durable, and built to outlast trends.", "https://images.unsplash.com/photo-1608752503578-52f35965e3d9?w=800&h=560&fit=crop&auto=format", "/hardwood-flooring-burbank"],
  ["Laminate Flooring", "Real style at a real-world price point.", "https://images.unsplash.com/photo-1787625349019-2ad6b4cadc87?w=800&h=560&fit=crop&auto=format", "/laminate-flooring-burbank"],
  ["Luxury Vinyl Flooring", "Waterproof toughness for kitchens, baths, and busy households.", "https://images.unsplash.com/photo-1695191388218-f6259600223f?w=800&h=560&fit=crop&auto=format", "/luxury-vinyl-flooring-burbank"],
  ["Moldings & Trim", "The finishing detail that makes a floor look finished, not just installed.", "https://images.unsplash.com/photo-1655457397686-4dd23e78a918?w=800&h=560&fit=crop&auto=format", "/molding-baseboard-installation-burbank"],
  ["Professional Installation", "Precision crews who respect your home and your timeline.", "https://images.unsplash.com/photo-1622936063167-e32e9f955438?w=800&h=560&fit=crop&auto=format", "/flooring-installation-burbank"],
  ["Showroom Consultation", "Touch it, see it in real light, ask us anything — no pressure.", "https://images.unsplash.com/photo-1643903032976-8c0d0556a8ea?w=800&h=560&fit=crop&auto=format", "/products"],
] as const;

const comparison = [
  ["Generic advice from whoever's on shift", "Guidance from people who've done this for decades"],
  ["Installation outsourced, no accountability", "Our name is on every install"],
  ["You're a transaction", "You're a neighbor"],
  ["One-size-fits-all recommendations", "Advice built around your space"],
  ["Good luck if something goes wrong", "1-year labor guarantee, real people to call"],
] as const;

const testimonials = [
  ["Bob S.", "Santa Monica, CA", "Visited nearly a dozen flooring companies over four months before choosing US Flooring. Fair pricing, respect for customers, quality that beat Lowe's and Home Depot outright. Would use them again without hesitation."],
  ["Alin S.", "Burbank, CA · Interior Designer", "Vick goes above and beyond on every project — responsive, on time, and installs that came out impeccable. As a designer, I need vendors I can count on, and this team delivers every single time."],
  ["Ana O.", "Los Angeles, CA", "Got the exact laminate I wanted, fast, at the best price I found anywhere. The install crew delivered. Simple, clean, zero runaround from start to finish."],
] as const;

const pullQuotes = ["\u201cGreat variety and excellent customer service.\u201d", "\u201cProfessional and qualified experts.\u201d", "\u201cHigh quality, great price.\u201d", "\u201cExactly what I needed, no runaround.\u201d"];
const areas = ["Burbank", "Glendale", "North Hollywood", "Toluca Lake", "Studio City", "Sun Valley", "San Fernando Valley"];
const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=1508+W+Burbank+Blvd+Burbank+CA+91506";
const yelpUrl = "https://www.yelp.com/biz/us-flooring-and-molding-burbank";

export const metadata: Metadata = {
  title: "Flooring Store & Installation in Burbank | US Flooring",
  description: "Shop hardwood, laminate and luxury vinyl flooring in Burbank. Professional flooring and molding installation across Los Angeles. Free estimates.",
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: { title: "Flooring Store & Installation in Burbank | US Flooring", description: "Hardwood, laminate, luxury vinyl, molding and professional flooring installation from a local Burbank showroom.", url: `${SITE_URL}/`, images: [{ url: "/og-image.jpg", alt: "US Flooring & Molding" }], type: "website" },
  twitter: { card: "summary_large_image", title: "Flooring Store & Installation in Burbank | US Flooring", description: "Hardwood, laminate, luxury vinyl, molding and professional flooring installation from a local Burbank showroom.", images: ["/og-image.jpg"] },
};

function Arrow() { return <span aria-hidden="true">→</span>; }
function Star({ size = 14 }: { size?: number }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="var(--gold)" stroke="none" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>; }
function Check() { return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>; }
function XMark() { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>; }

export default function Home() {
  const homepageJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { ...businessJsonLd(), image: BUSINESS.ogImage, logo: { "@type": "ImageObject", url: BUSINESS.logoUrl }, description: "Family-owned flooring store and installation company serving Burbank and greater Los Angeles with hardwood, laminate, luxury vinyl, molding, and professional installation services.", areaServed: [{ "@type": "City", name: "Burbank" }, { "@type": "City", name: "Glendale" }, { "@type": "City", name: "North Hollywood" }, { "@type": "City", name: "Toluca Lake" }, { "@type": "City", name: "Studio City" }, { "@type": "City", name: "Sun Valley" }, { "@type": "AdministrativeArea", name: "San Fernando Valley" }] },
      { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: SITE_URL, name: BUSINESS.name },
    ],
  };
  return <main className="pb-20">
    <JsonLd data={homepageJsonLd} />

    {/* Hero */}
    <section className="grid min-h-[92vh] grid-cols-1 pt-16 lg:grid-cols-2">
      <div className="relative order-2 min-h-[56vw] overflow-hidden lg:order-2 lg:min-h-[600px]">
        <Image src="/ChatGPT_Image_Sep_3__2026__04_50_48_PM.png" alt="US Flooring & Molding showroom and installation" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
      </div>
      <div className="order-1 flex flex-col justify-center bg-ivory px-6 py-12 lg:pl-[max(24px,calc((100vw-1180px)/2+24px))] lg:pr-16 lg:py-20">
        <h1 className="mb-3 max-w-[520px] font-serif text-[36px] font-bold leading-[1.06] text-charcoal lg:text-[58px]">Flooring, Molding and Professional Installation in Burbank</h1>
        <p className="mb-5 text-base font-semibold text-walnut lg:text-[18px]">Two Decades of Craftsmanship You Can Trust</p>
        <p className="mb-8 max-w-[480px] text-base leading-relaxed text-charcoal/65 lg:text-[17px]">We're the local flooring team Burbank homeowners call when they want it done right — real guidance, real craftsmanship, and a family name behind every install.</p>
        <div className="mb-6 flex flex-col gap-3 sm:flex-row"><Link href="/contact" className="button justify-center">Get Your Free Estimate</Link><a href={`tel:${BUSINESS.phone}`} className="button justify-center">Call {BUSINESS.phoneDisplay}</a></div>
        <p className="text-xs font-semibold tracking-wide text-charcoal/50">★ Verified Google Reviews · 20+ Years in Burbank · 1-Year Labor Guarantee</p>
      </div>
    </section>

    {/* GEO answer block */}
    <section className="border-b border-border/60 bg-ivory"><div className="container py-5"><p className="text-sm leading-relaxed text-charcoal/65">US Flooring &amp; Molding Inc. is a family-owned flooring store and installation company located at {BUSINESS.address.street}, {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}. We help homeowners, designers, contractors, and property professionals across Burbank and greater Los Angeles choose hardwood, laminate, luxury vinyl, molding, baseboards, and professional installation.</p></div></section>

    {/* Trust bar */}
    <section className="border-y border-border bg-light"><div className="container flex flex-wrap items-center justify-center gap-x-7 gap-y-2 py-5">{trustItems.map((item, i) => <span key={item} className="flex items-center gap-3 whitespace-nowrap text-xs font-semibold uppercase tracking-wide text-charcoal/65">{i > 0 && <span className="h-3 w-px bg-charcoal/20" aria-hidden="true" />}{item}</span>)}</div></section>

    {/* Why */}
    <section className="bg-ivory"><div className="container grid items-center gap-16 py-24 lg:grid-cols-2"><div><p className="eyebrow">Why we exist</p><h2>Flooring Shouldn&apos;t Feel Like a Gamble</h2><p className="mt-6 text-base leading-relaxed text-charcoal/70 lg:text-[17px]">New flooring means dozens of decisions — material, color, durability, budget, who&apos;s actually going to install it. Get it wrong and you&apos;re stuck looking at it for the next fifteen years. That&apos;s exactly the stress we built this business to remove.</p><p className="mt-4 text-base leading-relaxed text-charcoal/70 lg:text-[17px]">We&apos;re not here to sell you the most expensive option on the floor. We&apos;re here to tell you the truth about what will actually work in your home — and then do the work ourselves, right.</p><Link href="/contact" className="mt-8 inline-flex gap-2 font-bold text-walnut">Let&apos;s Talk About Your Floor <Arrow /></Link></div><blockquote className="rounded border border-border bg-subtle/30 p-10"><div className="mb-6 h-[3px] w-8 bg-gold" /><p className="font-serif text-[22px] italic leading-snug text-charcoal lg:text-[26px]">&quot;Your floor isn&apos;t just a surface. It&apos;s the first thing your family feels underfoot every single day. We help you get it right.&quot;</p></blockquote></div></section>

    {/* How */}
    <section className="bg-subtle"><div className="container py-24"><p className="eyebrow">How we do it</p><div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><h2 className="max-w-[520px]">Three Generations of Getting This Right</h2><Link href="/about" className="font-bold text-walnut">See Why Burbank Trusts Us <Arrow /></Link></div><div className="mb-12 max-w-[680px] border-l-[3px] border-walnut bg-ivory p-8"><p className="leading-relaxed text-charcoal/70">Vick learned this trade from his father, starting at seventeen — sanding, measuring, installing, listening to how customers actually talk about their homes. That apprenticeship became a promise: every project gets the same care as if it were going in our own house.</p></div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{howCards.map(([title, desc], i) => <article key={title} className="rounded border border-border bg-ivory p-7"><div className={`mb-4 h-[3px] w-6 ${i % 3 === 0 ? "bg-walnut" : i % 3 === 1 ? "bg-gold" : "bg-charcoal/40"}`} /><h3>{title}</h3><p className="mt-2 text-sm leading-relaxed text-charcoal/60">{desc}</p></article>)}</div></div></section>

    {/* What */}
    <section className="bg-ivory"><div className="container py-24"><p className="eyebrow">What we offer</p><div className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><h2 className="max-w-[480px]">Everything You Need, Under One Roof</h2><Link href="/products" className="font-bold text-walnut">Visit Our Burbank Showroom <Arrow /></Link></div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{serviceCards.map(([name, desc, image, href]) => <Link key={name} href={href} className="group overflow-hidden rounded border border-border bg-ivory transition-colors hover:border-walnut/50"><div className="relative aspect-[16/9] overflow-hidden bg-subtle"><Image src={image} alt={name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" /></div><div className="p-6"><h3>{name}</h3><p className="mt-1.5 text-sm leading-relaxed text-charcoal/60">{desc}</p></div></Link>)}</div></div></section>

    {/* Big-box difference */}
    <section className="bg-subtle"><div className="container py-24"><p className="eyebrow">The difference</p><h2 className="max-w-[600px]">Why Homeowners Choose Us Over the Big-Box Aisle</h2><p className="mb-12 mt-5 max-w-[560px] leading-relaxed text-charcoal/65">Big-box stores can sell you a box of flooring. What they can&apos;t sell you is someone who picks up the phone when there&apos;s a question, shows up when they say they will, and stands behind the install a year later. That&apos;s the difference a family business makes.</p><div className="grid overflow-hidden rounded lg:grid-cols-2"><div className="bg-charcoal p-10 lg:p-12"><p className="mb-7 text-xs font-bold uppercase tracking-widest text-ivory/30">Big-Box Store</p><div className="flex flex-col gap-5">{comparison.map(([bad]) => <div key={bad} className="flex items-start gap-3"><span className="mt-0.5 shrink-0 text-ivory/25"><XMark /></span><p className="text-sm leading-relaxed text-ivory/35">{bad}</p></div>)}</div></div><div className="bg-charcoal p-10 lg:border-l lg:border-ivory/10 lg:p-12"><p className="mb-7 text-xs font-bold uppercase tracking-widest text-gold/70">US Flooring &amp; Molding</p><div className="mb-10 flex flex-col gap-5">{comparison.map(([, good]) => <div key={good} className="flex items-start gap-3"><span className="mt-0.5 shrink-0"><Check /></span><p className="text-sm leading-relaxed text-ivory/90">{good}</p></div>)}</div><Link href="/contact" className="inline-block rounded bg-ivory px-7 py-3.5 text-sm font-bold text-charcoal">Get the Personal Treatment — Request an Estimate <Arrow /></Link></div></div></div></section>

    {/* Testimonials */}
    <section className="bg-ivory"><div className="container py-24"><p className="eyebrow">Reviews</p><div className="mb-12 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end"><h2>Don&apos;t Take Our Word for It</h2><Link href="/reviews" className="font-bold text-walnut">Read More Reviews <Arrow /></Link></div><div className="mb-10 grid gap-5 md:grid-cols-3">{testimonials.map(([name, city, quote]) => <article key={name} className="flex flex-col rounded border border-border bg-subtle p-7"><div className="mb-4 flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} />)}</div><blockquote className="my-2 flex-1 text-sm italic leading-relaxed text-charcoal/70">&quot;{quote}&quot;</blockquote><footer className="mt-6 flex items-center gap-3 border-t border-border pt-5"><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-charcoal"><span className="text-xs font-bold text-ivory">{name[0]}</span></div><div><p className="text-sm font-bold text-charcoal">{name}</p><p className="text-xs text-charcoal/40">{city}</p></div></footer></article>)}</div><div className="mb-8 grid grid-cols-2 gap-3 lg:grid-cols-4">{pullQuotes.map((q) => <div key={q} className="rounded bg-charcoal px-5 py-4"><p className="text-sm italic leading-relaxed text-ivory/65">{q}</p></div>)}</div><a href={yelpUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-walnut">Read more customer reviews on Yelp <Arrow /></a></div></section>

    {/* About teaser */}
    <section className="bg-charcoal"><div className="container grid items-center gap-16 py-24 lg:grid-cols-2"><div><p className="eyebrow text-gold/60">About us</p><h2 className="text-ivory">Meet the Family Behind the Floors</h2><p className="mt-6 text-base leading-relaxed text-ivory/60">Vick was seventeen the first time his father handed him a trowel. What started as an apprenticeship became a life&apos;s work — and eventually, this business. Every plank we sell and every install we run still carries that same standard: do it like it&apos;s going in your own home.</p><Link href="/about" className="mt-8 inline-flex gap-2 font-bold text-ivory">Visit the Showroom, Meet the Team <Arrow /></Link></div><div className="relative aspect-[4/3] overflow-hidden rounded bg-charcoal/50"><Image src="https://images.unsplash.com/photo-1712171984461-9a18baa57c42?w=900&h=700&fit=crop&auto=format" alt="Expert flooring craftsman at work" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover opacity-80" /></div></div></section>

    {/* Local presence */}
    <section className="bg-subtle"><div className="container grid items-center gap-12 py-20 lg:grid-cols-2"><div><p className="eyebrow">Local presence</p><h2 className="text-[28px] lg:text-[36px]">Proudly Serving Burbank and the Surrounding Valley</h2><p className="mt-4 leading-relaxed text-charcoal/65">Based on West Burbank Blvd, we work with homeowners, designers, and contractors across Burbank and the greater Los Angeles area — including Glendale, North Hollywood, Toluca Lake, Studio City, Sun Valley, and the San Fernando Valley.</p></div><div className="flex flex-wrap gap-2">{areas.map((area) => <span key={area} className="rounded-full border border-border bg-ivory px-4 py-2 text-sm text-charcoal/65">{area}</span>)}</div></div></section>

    {/* Final CTA */}
    <section className="bg-charcoal"><div className="container py-24 text-center"><div className="mb-6 flex justify-center gap-0.5" aria-hidden="true">{[...Array(5)].map((_, i) => <Star key={i} />)}</div><h2 className="text-ivory">Ready for a Floor You Won&apos;t Second-Guess?</h2><p className="mx-auto mt-5 max-w-[680px] text-base leading-relaxed text-ivory/65">Call us, stop by the showroom, or fill out the form — either way, you&apos;ll get a real answer from a real person, not a script.</p><p className="my-8 text-sm text-ivory/50">{BUSINESS.name} · {BUSINESS.address.street}, {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}<br />{BUSINESS.phoneDisplay}</p><div className="flex flex-col justify-center gap-3 sm:flex-row"><a href={`tel:${BUSINESS.phone}`} className="button">Call Now</a><Link href="/contact" className="button button-light">Request a Free Estimate</Link><a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="button button-outline-light">Get Directions</a></div></div></section>
  </main>;
}
