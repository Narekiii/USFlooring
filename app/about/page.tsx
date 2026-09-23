import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs, { breadcrumbJsonLd } from "../ui/breadcrumbs";
import { JsonLd } from "../ui/json-ld";

export const metadata: Metadata = {
  title: "About US Flooring & Molding | Burbank Flooring Experts",
  description: "Learn about US Flooring & Molding Inc., a family-owned Burbank flooring store and installation company backed by more than 20 years of flooring experience.",
  alternates: { canonical: "https://www.usflooring.la/about" },
  openGraph: { title: "About US Flooring & Molding Inc.", description: "Meet the family and flooring professionals behind US Flooring & Molding Inc. in Burbank, California.", url: "https://www.usflooring.la/about" },
};

const items = [{ label: "Home", href: "/" }, { label: "About" }];

function StarIcon() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="#C89B5A" stroke="none" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>;
}

function USFMark({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect width="36" height="36" fill="#6B4A2D" />
      <rect x="7" y="10" width="22" height="2.5" fill="#F5F1EA" />
      <rect x="7" y="16.75" width="22" height="2.5" fill="#F5F1EA" />
      <rect x="7" y="23.5" width="22" height="2" fill="#C89B5A" />
    </svg>
  );
}

const values = [
  { title: "Honest Guidance", desc: "We tell you what will actually work for your space — not just what's easiest for us to sell. That means sometimes talking you out of an option that doesn't fit." },
  { title: "Family Accountability", desc: "Our name is on every project. When something needs attention after we leave, we answer the phone and we come back. That is what family businesses do." },
  { title: "Skilled Craft", desc: "Prep is where installs are won or lost. We don't rush subfloor work because the clock is running. We do it right so the floor holds for decades." },
  { title: "Local Knowledge", desc: "Twenty years in Burbank means we understand how homes here are built, how they settle, and what conditions your floor will actually live in." },
] as const;

const guarantee = [
  "Every install covered for 1 full year from completion",
  "Real people answer when you call — not a call center",
  "If something is wrong, we come back and fix it",
  "No runaround, no fine-print exceptions",
];

const stats = [
  { stat: "20+", label: "Years in Burbank" },
  { stat: "5.0★", label: "Google Rating" },
  { stat: "100%", label: "Family-Owned" },
  { stat: "1-Year", label: "Labor Guarantee" },
] as const;

export default function AboutPage() {
  return (
    <div className="pb-[72px] lg:pb-0">
      <JsonLd data={breadcrumbJsonLd(items)} />
      <Breadcrumbs items={items} />

      {/* Hero */}
      <section className="pt-8 pb-16 bg-subtle">
        <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-sans text-[11px] font-semibold text-walnut uppercase tracking-widest mb-4">About Us</p>
            <h1 className="font-serif text-[40px] lg:text-[58px] font-semibold text-charcoal leading-[1.06] mb-6">Meet the Family Behind US Flooring &amp; Molding</h1>
            <p className="font-sans text-base lg:text-[18px] text-charcoal/60 leading-relaxed mb-6">US Flooring &amp; Molding Inc. is a family-owned flooring contractor and showroom based in Burbank, California. We've been serving homeowners, interior designers, and contractors across the greater Los Angeles area since 2005.</p>
            <p className="font-sans text-base text-charcoal/60 leading-relaxed">We're not a franchise. We're not a big-box satellite. Every floor we sell and every install we run carries our family name — and that means something to us.</p>
          </div>
          <div className="relative overflow-hidden rounded-[3px] aspect-[4/3] bg-subtle/30">
            <Image src="https://images.unsplash.com/photo-1712171984461-9a18baa57c42?w=720&h=560&fit=crop&auto=format" alt="Expert flooring craftsman at work" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-charcoal">
        <div className="max-w-[1180px] mx-auto px-6 py-[96px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-sans text-[11px] font-semibold text-gold/60 uppercase tracking-widest mb-5">The story</p>
            <h2 className="font-serif text-[32px] lg:text-[48px] font-semibold text-ivory leading-[1.1] mb-8">It Started with a Trowel and a Father Who Demanded Excellence</h2>
            <div className="flex flex-col gap-5">
              <p className="font-sans text-[16px] text-ivory/70 leading-relaxed">Vick was seventeen years old when his father first handed him a trowel. It wasn't ceremonial — it was work. Measure, mix, spread, check, redo if it isn't right. His father had been in the trade for decades, and he had a single standard: do it like it's going in your own house.</p>
              <p className="font-sans text-base text-ivory/60 leading-relaxed">That apprenticeship lasted years. Vick learned flooring the old way — by doing it, by making mistakes, and by fixing them while his father watched. He learned how subfloors fail and how to prevent it. He learned which materials hold up under Southern California conditions and which ones don't. He learned how to listen to a homeowner describe their space and actually understand what they need.</p>
              <p className="font-sans text-base text-ivory/60 leading-relaxed">When he started US Flooring &amp; Molding, he brought all of that with him. And the promise his father made him — do it right or don't do it — became the promise we make to every customer.</p>
            </div>
          </div>
          <div className="bg-ivory/10 border border-ivory/20 rounded-[3px] p-8 lg:mt-16">
            <div className="w-8 h-[3px] bg-gold mb-6" />
            <blockquote className="font-serif text-[22px] text-ivory leading-snug mb-6">&quot;Do it like it&apos;s going in your own house.&quot;</blockquote>
            <p className="font-sans text-[13px] text-ivory/40">The standard passed down from Vick&apos;s father. Still the standard we hold today.</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-ivory">
        <div className="max-w-[1180px] mx-auto px-6 py-[96px]">
          <p className="font-sans text-[11px] font-semibold text-walnut uppercase tracking-widest mb-4">What we stand for</p>
          <h2 className="font-serif text-[32px] lg:text-[48px] font-semibold text-charcoal mb-12 leading-[1.1] max-w-[480px]">The Values We Work By Every Day</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div key={v.title} className="bg-subtle border border-border rounded-[3px] p-8">
                <div className="w-6 h-[2.5px] mb-5" style={{ backgroundColor: i % 2 === 0 ? "#6B4A2D" : "#C89B5A" }} />
                <h3 className="font-sans text-[16px] font-bold text-charcoal mb-3">{v.title}</h3>
                <p className="font-sans text-[14px] text-charcoal/55 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="bg-subtle">
        <div className="max-w-[1180px] mx-auto px-6 py-[72px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-sans text-[11px] font-semibold text-walnut uppercase tracking-widest mb-4">Our promise</p>
            <h2 className="font-serif text-[32px] lg:text-[44px] font-semibold text-charcoal mb-4 leading-tight">1-Year Labor Guarantee</h2>
            <p className="font-sans text-base text-charcoal/60 leading-relaxed">We stand behind everything we install. If something is wrong with the workmanship within a year of completion, we come back and make it right — no fine print, no runaround.</p>
          </div>
          <div className="bg-ivory border border-border rounded-[3px] p-8">
            <ul className="flex flex-col gap-4">
              {guarantee.map((g) => (
                <li key={g} className="flex items-start gap-4 font-sans text-[14px] text-charcoal/65">
                  <span className="text-gold shrink-0 mt-0.5"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C89B5A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg></span>
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-charcoal">
        <div className="max-w-[1180px] mx-auto px-6 py-[72px]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-serif text-[40px] lg:text-[52px] font-semibold text-ivory mb-2">{s.stat}</div>
                <div className="font-sans text-[12px] font-semibold text-ivory/30 uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showroom + Reviews */}
      <section className="bg-ivory">
        <div className="max-w-[1180px] mx-auto px-6 py-[72px] grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="font-sans text-[11px] font-semibold text-walnut uppercase tracking-widest mb-4">Find us</p>
            <h2 className="font-serif text-[28px] font-semibold text-charcoal mb-4">Visit the Showroom</h2>
            <div className="font-sans text-[14px] text-charcoal/55 leading-relaxed mb-6">
              <p className="mb-1">1508 W Burbank Blvd</p>
              <p className="mb-1">Burbank, CA 91506</p>
              <p className="mb-4">Mon – Sat · 9am – 6pm</p>
              <a href="tel:+18185150009" className="font-bold text-walnut hover:text-walnut transition-colors">(818) 515-0009</a>
            </div>
            <div className="flex gap-3">
              <Link href="/contact" className="bg-red text-white px-6 py-3 rounded-[2px] font-sans text-[14px] font-bold hover:bg-red-dark transition-colors">Request Estimate</Link>
              <a href="https://www.google.com/maps/dir/?api=1&destination=1508+W+Burbank+Blvd+Burbank+CA+91506" target="_blank" rel="noopener noreferrer" className="border-[1.5px] border-border text-charcoal/55 px-6 py-3 rounded-[2px] font-sans text-[14px] font-bold hover:border-walnut/40 transition-colors">Directions →</a>
            </div>
          </div>
          <div className="bg-subtle border border-border rounded-[3px] p-8">
            <div className="flex gap-0.5 mb-4">{[...Array(5)].map((_, i) => <StarIcon key={i} />)}</div>
            <blockquote className="font-serif text-[20px] font-medium italic text-charcoal mb-4 leading-snug">&quot;Fair pricing, respect for customers, quality that beat Lowe&apos;s and Home Depot outright.&quot;</blockquote>
            <p className="font-sans text-[13px] text-charcoal/40">— Bob S., Santa Monica, CA</p>
            <div className="mt-6 pt-6 border-t border-border">
              <Link href="/reviews" className="font-sans text-[14px] font-bold text-walnut hover:text-charcoal transition-colors inline-flex items-center gap-1.5 group">Read all reviews <span className="group-hover:translate-x-1 transition-transform">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand mark footer */}
      <section className="bg-subtle border-t border-border py-12">
        <div className="max-w-[1180px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <USFMark size={44} />
            <div>
              <p className="font-sans text-[15px] font-bold text-charcoal">US Flooring &amp; Molding Inc.</p>
              <p className="font-sans text-[12px] text-charcoal/40">Family Flooring. Honest People. Floors Built to Last.</p>
            </div>
          </div>
          <Link href="/contact" className="bg-red text-white px-7 py-3.5 rounded-[2px] font-sans text-[14px] font-bold hover:bg-red-dark transition-colors">Get Your Free Estimate</Link>
        </div>
      </section>
    </div>
  );
}
