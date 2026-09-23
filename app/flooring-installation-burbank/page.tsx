import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs, { breadcrumbJsonLd } from "../ui/breadcrumbs";
import { JsonLd } from "../ui/json-ld";

const items = [{ label: "Home", href: "/" }, { label: "Products & Services", href: "/products" }, { label: "Flooring Installation" }];

export const metadata: Metadata = {
  title: "Flooring Installation in Burbank, CA | US Flooring",
  description: "Professional flooring installation in Burbank and Los Angeles. Hardwood, laminate, and vinyl installed by our own crew. 1-year labor guarantee. Free estimates.",
  alternates: { canonical: "https://www.usflooring.la/flooring-installation-burbank" },
  openGraph: { title: "Flooring Installation in Burbank | US Flooring & Molding", description: "Professional flooring installation by US Flooring & Molding Inc. in Burbank, California. Our own crew, 1-year labor guarantee.", url: "https://www.usflooring.la/flooring-installation-burbank" },
};

const faqs = [
  { q: "Does US Flooring & Molding use its own installation crew?", a: "Yes. We do not subcontract installation. Our own team handles the work from start to finish, which is how we maintain consistent quality and accountability on every project." },
  { q: "What does the 1-year labor guarantee cover?", a: "Our labor guarantee covers installation workmanship defects for one year from project completion. If something is wrong with how the floor was installed — not manufacturer material defects or normal wear — we come back and correct it." },
  { q: "Do you remove existing flooring before installing?", a: "Removal of existing flooring is not included in our standard installation service. We recommend arranging demolition and haul-away separately before our crew arrives. We are happy to advise on what needs to be cleared during the estimate." },
  { q: "What subfloor preparation do you perform?", a: "We inspect the subfloor for moisture, structural issues, flatness, and squeaks before installation begins. Proper subfloor preparation is one of the most important factors in a durable flooring installation and is not something we skip." },
  { q: "Do I need to clear the room before installation?", a: "Yes. Please have furniture removed from the work area before our crew arrives. We do not provide furniture moving as part of the installation service. If you have questions about what needs to be cleared, we are happy to walk you through it during the estimate." },
  { q: "How long does installation typically take?", a: "A single room may take one day. A full home with multiple rooms and flooring types may take several days. Timeline depends on square footage, flooring type, subfloor condition, and any additional prep work. We provide a realistic schedule during the estimate process." },
];

const benefits = [
  { title: "Subfloor Inspection & Preparation", desc: "We inspect for moisture, flatness, squeaks, and structural issues before any flooring goes down. Poor subfloor preparation is the leading cause of installation failure, and we address it properly." },
  { title: "Material Delivery & Staging", desc: "We coordinate material delivery and staging so the right product is on-site and ready before the crew begins. Some materials require acclimation time that we factor into the schedule." },
  { title: "Installation", desc: "Hardwood, laminate, luxury vinyl plank — our crew is experienced with all flooring types we sell. Installation methods vary by material and subfloor type." },
  { title: "Molding & Transition Installation", desc: "Baseboards, shoe molding, T-moldings, stair nose, and end caps are installed as part of the project to complete the finish." },
  { title: "Cleanup & Final Walkthrough", desc: "We clean up the work area and do a complete walkthrough with you before we consider the project finished." },
] as const;

const related = [
  { label: "Hardwood Flooring", href: "/hardwood-flooring-burbank" },
  { label: "Laminate Flooring", href: "/laminate-flooring-burbank" },
  { label: "Luxury Vinyl Flooring", href: "/luxury-vinyl-flooring-burbank" },
  { label: "Moldings & Trim", href: "/molding-baseboard-installation-burbank" },
];

const jsonLd = [
  breadcrumbJsonLd(items),
  { "@context": "https://schema.org", "@type": "Service", name: "Professional Flooring Installation", provider: { "@type": "LocalBusiness", name: "US Flooring & Molding Inc.", url: "https://www.usflooring.la/" }, areaServed: { "@type": "City", name: "Burbank" }, description: "Professional flooring installation in Burbank and greater Los Angeles. Hardwood, laminate, luxury vinyl, and molding installation with a 1-year labor guarantee." },
  { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
];

export default function FlooringInstallationPage() {
  return (
    <div className="pb-[72px] lg:pb-0">
      <JsonLd data={jsonLd} />
      <Breadcrumbs items={items} />

      <section className="pt-8 pb-16 bg-subtle">
        <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-sans text-[11px] font-bold text-walnut uppercase tracking-widest mb-4">Flooring Installation · Burbank, CA</p>
            <h1 className="font-serif text-[40px] lg:text-[54px] font-bold text-charcoal leading-[1.06] mb-5">Professional Flooring Installation in Burbank</h1>
            <p className="font-sans text-base lg:text-[17px] text-charcoal/60 leading-relaxed mb-8">Our own crew handles every install — not a subcontractor you&apos;ve never met. Subfloor prep, installation, cleanup, and a 1-year labor guarantee on all workmanship.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="bg-red text-white px-7 py-4 rounded-[2px] font-sans text-[15px] font-bold hover:bg-red-dark transition-colors text-center">Get a Free Estimate</Link>
              <a href="tel:+18185150009" className="border-[1.5px] border-charcoal text-charcoal px-7 py-4 rounded-[2px] font-sans text-[15px] font-bold hover:bg-subtle/60 transition-colors text-center">Call (818) 515-0009</a>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[3px] aspect-[4/3] bg-subtle/30">
            <Image src="https://images.unsplash.com/photo-1622936063167-e32e9f955438?w=720&h=540&fit=crop&auto=format" alt="Professional flooring installation in progress" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="max-w-[1180px] mx-auto px-6 py-16">
          <h2 className="font-serif text-[28px] lg:text-[38px] font-bold text-charcoal leading-tight mb-10">What Our Installation Includes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">{benefits.map((b) => <div key={b.title} className="bg-subtle border border-border rounded-[3px] p-7"><h3 className="font-sans text-[15px] font-bold text-charcoal mb-3">{b.title}</h3><p className="font-sans text-[13px] text-charcoal/55 leading-relaxed">{b.desc}</p></div>)}</div>
        </div>
      </section>

      <section className="bg-subtle border-t border-border">
        <div className="max-w-[860px] mx-auto px-6 py-16">
          <h2 className="font-serif text-[28px] lg:text-[38px] font-bold text-charcoal leading-tight mb-10">Installation FAQ</h2>
          <div className="flex flex-col divide-y divide-sand">{faqs.map((faq, i) => <div key={i} className="py-5"><h3 className="font-sans text-[15px] font-bold text-charcoal mb-2">{faq.q}</h3><p className="font-sans text-[14px] text-charcoal/60 leading-relaxed">{faq.a}</p></div>)}</div>
        </div>
      </section>

      <section className="bg-ivory border-t border-border">
        <div className="max-w-[1180px] mx-auto px-6 py-12">
          <h2 className="font-sans text-[13px] font-bold text-charcoal/40 uppercase tracking-widest mb-6">Flooring We Install</h2>
          <div className="flex flex-wrap gap-3">{related.map((l) => <Link key={l.href} href={l.href} className="border border-border bg-subtle text-charcoal/60 font-sans text-[13px] px-4 py-2 rounded-[2px] hover:border-walnut/40 hover:text-walnut transition-colors">{l.label}</Link>)}</div>
        </div>
      </section>

      <section className="bg-charcoal py-16">
        <div className="max-w-[680px] mx-auto px-6 text-center">
          <h2 className="font-serif text-[28px] lg:text-[38px] font-bold text-ivory mb-4">Get a Free Installation Estimate</h2>
          <p className="font-sans text-base text-ivory/50 leading-relaxed mb-8">Call us or fill out the estimate form. We come to you, assess the space, and give you a real quote before any commitment.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="bg-red text-white px-7 py-4 rounded-[2px] font-sans text-[15px] font-bold hover:bg-red-dark transition-colors">Request Free Estimate</Link>
            <a href="tel:+18185150009" className="border-[1.5px] border-ivory/30 text-ivory/70 px-7 py-4 rounded-[2px] font-sans text-[15px] font-bold hover:border-ivory/60 hover:text-ivory transition-colors">Call (818) 515-0009</a>
          </div>
        </div>
      </section>
    </div>
  );
}
