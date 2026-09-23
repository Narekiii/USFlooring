import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs, { breadcrumbJsonLd } from "../ui/breadcrumbs";
import { JsonLd } from "../ui/json-ld";

const items = [{ label: "Home", href: "/" }, { label: "Products & Services", href: "/products" }, { label: "Laminate Flooring" }];

export const metadata: Metadata = {
  title: "Laminate Flooring in Burbank, CA | US Flooring",
  description: "Laminate flooring sales and installation in Burbank and Los Angeles. Wide-plank and standard options in many finishes. Family-owned. Free estimate.",
  alternates: { canonical: "https://www.usflooring.la/laminate-flooring-burbank" },
  openGraph: { title: "Laminate Flooring in Burbank | US Flooring & Molding", description: "Durable, cost-effective laminate flooring from a family-owned Burbank flooring store. Professional installation with a 1-year labor guarantee.", url: "https://www.usflooring.la/laminate-flooring-burbank" },
};

const faqs = [
  { q: "What is laminate flooring made of?", a: "Laminate is a multi-layer synthetic product. It typically includes a wear layer, a photographic print layer that mimics wood or stone, a high-density fiberboard (HDF) core, and a backing layer. It is not real wood, but modern laminate reproduces the look convincingly." },
  { q: "Is laminate flooring waterproof?", a: "Standard laminate is water-resistant but not waterproof. If water sits on the surface for extended periods or penetrates the seams, the HDF core can swell. Waterproof laminate products with sealed edges exist and are suitable for kitchens; however, luxury vinyl is generally the better choice for full bathrooms or consistently wet environments." },
  { q: "Can laminate be refinished?", a: "No. Unlike hardwood, laminate cannot be sanded or refinished. Scratched or damaged sections need to be replaced." },
  { q: "How does laminate compare in price to hardwood?", a: "Laminate is typically less expensive than hardwood for both the material and installation. The total cost difference depends on the quality of laminate selected, the room size, and the existing subfloor condition. We provide detailed quotes so you can compare accurately." },
  { q: "Is laminate suitable for homes with pets?", a: "Laminate with a higher AC (abrasion class) rating holds up better under pet claws. That said, luxury vinyl is generally more resistant to moisture from pet accidents and tends to be easier to clean in homes with animals." },
  { q: "What subfloor conditions does laminate need?", a: "Laminate requires a flat, dry, and structurally sound subfloor. High or low spots can cause clicking, peaking, or premature wear. We assess and address subfloor conditions during the installation process." },
];

const benefits = [
  { title: "Scratch Resistant", desc: "Higher AC-rated laminate holds up well against furniture legs, pet claws, and everyday foot traffic — often better than softer wood species." },
  { title: "Realistic Wood Look", desc: "Modern laminate photography layers reproduce the texture and grain of real wood closely enough that it reads as hardwood in most rooms." },
  { title: "Cost-Effective", desc: "Laminate typically costs less per square foot than solid hardwood, making it a practical choice for larger projects or tighter budgets." },
  { title: "Easy Maintenance", desc: "Sweep or vacuum regularly and damp-mop with a laminate-safe cleaner. No refinishing, no waxing, no special treatments." },
  { title: "Fast Installation", desc: "Most laminate uses click-lock systems that go down quickly, which can reduce installation time and disruption to your household." },
  { title: "Wide Selection", desc: "Available in plank widths from standard to wide-plank, in light, medium, and dark tones, with textures ranging from smooth to hand-scraped." },
] as const;

const related = [
  { label: "Hardwood Flooring", href: "/hardwood-flooring-burbank" },
  { label: "Luxury Vinyl Flooring", href: "/luxury-vinyl-flooring-burbank" },
  { label: "Professional Installation", href: "/flooring-installation-burbank" },
  { label: "Moldings & Trim", href: "/molding-baseboard-installation-burbank" },
];

const jsonLd = [
  breadcrumbJsonLd(items),
  { "@context": "https://schema.org", "@type": "Service", name: "Laminate Flooring Sales and Installation", provider: { "@type": "LocalBusiness", name: "US Flooring & Molding Inc.", url: "https://www.usflooring.la/" }, areaServed: { "@type": "City", name: "Burbank" }, description: "Laminate flooring sales and professional installation in Burbank and greater Los Angeles." },
  { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
];

export default function LaminateFlooringPage() {
  return (
    <div className="pb-[72px] lg:pb-0">
      <JsonLd data={jsonLd} />
      <Breadcrumbs items={items} />

      <section className="pt-8 pb-16 bg-subtle">
        <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-sans text-[11px] font-bold text-walnut uppercase tracking-widest mb-4">Laminate Flooring · Burbank, CA</p>
            <h1 className="font-serif text-[40px] lg:text-[54px] font-bold text-charcoal leading-[1.06] mb-5">Laminate Flooring Sales and Installation in Burbank</h1>
            <p className="font-sans text-base lg:text-[17px] text-charcoal/60 leading-relaxed mb-8">The look of wood at a price that keeps the rest of your budget intact. Durable, scratch-resistant, and available in dozens of realistic finishes.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="bg-red text-white px-7 py-4 rounded-[2px] font-sans text-[15px] font-bold hover:bg-red-dark transition-colors text-center">Get a Free Estimate</Link>
              <a href="tel:+18185150009" className="border-[1.5px] border-charcoal text-charcoal px-7 py-4 rounded-[2px] font-sans text-[15px] font-bold hover:bg-subtle/60 transition-colors text-center">Call (818) 515-0009</a>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[3px] aspect-[4/3] bg-subtle/30">
            <Image src="https://images.unsplash.com/photo-1787625349019-2ad6b4cadc87?w=720&h=540&fit=crop&auto=format" alt="Laminate flooring in a modern interior" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="max-w-[1180px] mx-auto px-6 py-16">
          <h2 className="font-serif text-[28px] lg:text-[38px] font-bold text-charcoal leading-tight mb-10">Benefits of Laminate Flooring</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">{benefits.map((b) => <div key={b.title} className="bg-subtle border border-border rounded-[3px] p-7"><h3 className="font-sans text-[15px] font-bold text-charcoal mb-3">{b.title}</h3><p className="font-sans text-[13px] text-charcoal/55 leading-relaxed">{b.desc}</p></div>)}</div>
        </div>
      </section>

      <section className="bg-subtle border-t border-border">
        <div className="max-w-[860px] mx-auto px-6 py-16">
          <h2 className="font-serif text-[28px] lg:text-[38px] font-bold text-charcoal leading-tight mb-10">Laminate Flooring FAQ</h2>
          <div className="flex flex-col divide-y divide-sand">{faqs.map((faq, i) => <div key={i} className="py-5"><h3 className="font-sans text-[15px] font-bold text-charcoal mb-2">{faq.q}</h3><p className="font-sans text-[14px] text-charcoal/60 leading-relaxed">{faq.a}</p></div>)}</div>
        </div>
      </section>

      <section className="bg-ivory border-t border-border">
        <div className="max-w-[1180px] mx-auto px-6 py-12">
          <h2 className="font-sans text-[13px] font-bold text-charcoal/40 uppercase tracking-widest mb-6">Related Services</h2>
          <div className="flex flex-wrap gap-3">{related.map((l) => <Link key={l.href} href={l.href} className="border border-border bg-subtle text-charcoal/60 font-sans text-[13px] px-4 py-2 rounded-[2px] hover:border-walnut/40 hover:text-walnut transition-colors">{l.label}</Link>)}</div>
        </div>
      </section>

      <section className="bg-charcoal py-16">
        <div className="max-w-[680px] mx-auto px-6 text-center">
          <h2 className="font-serif text-[28px] lg:text-[38px] font-bold text-ivory mb-4">See Laminate Samples in the Showroom</h2>
          <p className="font-sans text-base text-ivory/50 leading-relaxed mb-8">Visit us at 1508 W Burbank Blvd to compare finishes side by side in natural light. Free estimates, no pressure.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="bg-red text-white px-7 py-4 rounded-[2px] font-sans text-[15px] font-bold hover:bg-red-dark transition-colors">Request Free Estimate</Link>
            <a href="tel:+18185150009" className="border-[1.5px] border-ivory/30 text-ivory/70 px-7 py-4 rounded-[2px] font-sans text-[15px] font-bold hover:border-ivory/60 hover:text-ivory transition-colors">Call (818) 515-0009</a>
          </div>
        </div>
      </section>
    </div>
  );
}
