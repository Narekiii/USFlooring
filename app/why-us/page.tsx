import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs, { breadcrumbJsonLd } from "../ui/breadcrumbs";
import { JsonLd, businessJsonLd } from "../ui/json-ld";
import { BUSINESS } from "../lib/business";
import { TrackedLink, ViewTracker } from "./tracked-cta";
import ComparisonTable, { type ComparisonRow } from "./comparison-table";
import WhyUsFaqAccordion from "./faq-accordion";

const items = [{ label: "Home", href: "/" }, { label: "Why Us" }];

export const metadata: Metadata = {
  title: "Why Choose US Flooring? | Flooring Supply & Installation in Burbank",
  description: "Why Los Angeles customers choose US Flooring: trusted brands, a local Burbank warehouse, honest guidance and professional flooring installation.",
  alternates: { canonical: "https://www.usflooring.la/why-us" },
  openGraph: { title: "Why Choose US Flooring? | Flooring Supply & Installation in Burbank", description: "Why Los Angeles customers choose US Flooring: trusted brands, a local Burbank warehouse, honest guidance and professional flooring installation.", url: "https://www.usflooring.la/why-us" },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const reasonCards = [
  {
    n: "01",
    heading: "Over 20 Years of Flooring Experience in Los Angeles",
    body: "More than two decades in business reflects our reliability and trustworthiness. We stand fully behind every service we provide. Rather than just making a quick sale, we are dedicated to building long-lasting relationships and partnerships with our valued customers.",
    stat: "20+",
    statLabel: "Years",
    tone: "cream",
  },
  {
    n: "02",
    heading: "Partnering Exclusively with Top-Quality Brands",
    body: "Many companies maximize their profits by selling generic or unproven brands that lack proper quality. We choose to sell only recognized, reputable brands with a proven track record of excellence.",
    label: "Recognized. Reputable. Proven.",
    tone: "white",
  },
  {
    n: "03",
    heading: "Because We Install It, We Only Supply the Best",
    body: "Companies that don't offer installation often don't care what they sell—they push whatever brand yields the highest profit for them, rather than what is best for the customer. Because we handle the installation ourselves, we only source high-quality, reliable materials.",
    statement: "We Install What We Sell.",
    tone: "navy",
  },
  {
    n: "04",
    heading: "Local Warehouse in Burbank",
    body: "Having our own warehouse right here in Burbank means we can fulfill customer orders and supply materials with the fastest turnaround time possible, whenever they need them.",
    label: "Burbank, California",
    tone: "cream",
  },
  {
    n: "05",
    heading: "Accountable to Our Customers Over Profit, with Free Expert Guidance",
    body: "We provide completely honest, free guidance to help you make the right choice. Your best interest always comes before our profit.",
    label: "Honest Guidance. Zero Pressure.",
    tone: "white",
  },
] as const;

const processStages = [
  { n: "01", title: "Understand the project" },
  { n: "02", title: "Recommend suitable materials" },
  { n: "03", title: "Confirm availability and scope" },
  { n: "04", title: "Prepare and install" },
  { n: "05", title: "Complete transitions and molding" },
] as const;

const wholesalerPoints = ["Large material selection", "Competitive product pricing", "Customer arranges installation", "Site conditions may not be reviewed", "Product and labor responsibilities may be separate", "Customer coordinates multiple parties"];
const installerPoints = ["Primarily provides installation labor", "Customer may supply the flooring", "Product selection is usually completed beforehand", "Material concerns may return to the supplier", "Moldings and transitions may need separate coordination", "Scope depends on the individual installer"];
const usFlooringPoints = ["More than 20 years of flooring experience", "Recognized flooring and molding brands", "Material recommendations informed by installation", "Local Burbank warehouse", "Professional installation", "Flooring, transitions and molding", "Free expert guidance", "One local point of accountability"];

const tableRows: ComparisonRow[] = [
  { label: "Material recommendation", wholesaler: "Primarily based on available products", installer: "Material often selected by the customer", usFlooring: "Guidance based on project needs and installation experience" },
  { label: "Material supply", wholesaler: "Yes", installer: "Usually supplied by customer", usFlooring: "Yes, through a local Burbank warehouse" },
  { label: "Installation", wholesaler: "Usually arranged separately", installer: "Yes", usFlooring: "Yes" },
  { label: "Product and installation coordination", wholesaler: "Customer-managed", installer: "Depends on supplied material", usFlooring: "Coordinated through one company" },
  { label: "Molding and transitions", wholesaler: "Purchased as products", installer: "May require separate coordination", usFlooring: "Planned as part of the complete flooring scope" },
  { label: "Local accountability", wholesaler: "Primarily product-related", installer: "Primarily labor-related", usFlooring: "Material, installation and finishing coordination" },
  { label: "Customer guidance", wholesaler: "Product information", installer: "Installation information", usFlooring: "Material, project and installation guidance" },
];

const materialOnlyPoints = ["Which product is available?", "Which product has the highest margin?", "How quickly can it be sold?", "Who will install it afterward?"];
const completeProjectPoints = ["Is the product suitable for the property?", "What preparation does it require?", "How should it be installed?", "Which transitions and molding are needed?", "What will the finished result look like?", "Who remains accountable?"];

const trustedMaterials = [
  { title: "Laminate Flooring", body: "Durable, design-focused flooring options selected for appearance, performance and practical everyday use." },
  { title: "Hardwood Flooring", body: "Natural and engineered hardwood options selected for lasting character, construction quality and professional installation." },
  { title: "Molding and Finishing Details", body: "Baseboards, transitions and molding that complete the flooring system with clean, coordinated details." },
];

const guidanceChecklist = ["Property type", "Room conditions", "Moisture exposure", "Household traffic", "Children and pets", "Maintenance expectations", "Design preferences", "Installation requirements", "Project budget", "Long-term plans"];

const audiences = [
  { title: "Homeowners", body: "Material selection, project guidance, supply and professional installation through one local team." },
  { title: "Contractors and Remodelers", body: "Local flooring supply, estimates, installation coordination, molding and reliable project support." },
  { title: "Interior Designers", body: "Product sourcing, samples, finish coordination and installation support that respects the design intent." },
  { title: "Property Managers", body: "Flooring supply, repairs, replacements, unit-turnover installation and repeatable product options." },
];

const askQuestions = ["Does the company install the products it sells?", "Who is responsible if the material and installation are incompatible?", "Is the flooring suitable for the property conditions?", "Is subfloor preparation included?", "Are transitions and molding included?", "What is excluded from the estimate?", "Are the product's installation instructions being followed?", "Who coordinates material availability and installation scheduling?", "Is there a local point of contact?", "What support is provided after installation?"];

const faqs = [
  { q: "Why should I choose US Flooring instead of a flooring wholesaler?", a: "A wholesaler primarily focuses on selling flooring products. US Flooring combines material selection, local supply, installation and finishing coordination through one accountable company." },
  { q: "Why not buy the flooring and hire an installer separately?", a: "You can, but you will be responsible for coordinating the supplier and installer. Working with one company can make product compatibility, responsibilities, scheduling and communication clearer." },
  { q: "Does US Flooring install the products it sells?", a: "Yes. Our recommendations are informed by how the products perform during preparation, installation and daily use." },
  { q: "Does US Flooring offer free guidance?", a: "Yes. We help customers compare suitable flooring options and understand their benefits, limitations and installation requirements before making a decision." },
  { q: "Where is US Flooring located?", a: "US Flooring & Molding Inc. has a local warehouse and business location in Burbank, California." },
  { q: "What areas does US Flooring serve?", a: "We serve Burbank, Glendale, North Hollywood and surrounding Los Angeles communities." },
  { q: "Does US Flooring work with contractors and property professionals?", a: "Yes. We work with homeowners, contractors, remodelers, interior designers and property managers." },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flooring Material Supply and Installation",
  provider: { "@type": "LocalBusiness", name: "US Flooring & Molding Inc.", url: "https://www.usflooring.la/" },
  areaServed: [{ "@type": "City", name: "Burbank" }, { "@type": "City", name: "Glendale" }, { "@type": "City", name: "North Hollywood" }],
  description: "US Flooring & Molding Inc. supplies flooring materials and provides professional installation, connecting material selection, local Burbank warehouse availability, installation and finishing under one accountable local team.",
};

const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const jsonLd = [{ "@context": "https://schema.org", ...businessJsonLd() }, breadcrumbJsonLd(items), serviceJsonLd, faqJsonLd];

// ─── Small helpers ──────────────────────────────────────────────────────────

function RedCheck() {
  return <span className="text-red font-bold shrink-0 mt-0.5" aria-hidden="true">✓</span>;
}

function PinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M12 21s7-7.2 7-12a7 7 0 0 0-14 0c0 4.8 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function ProcessIcon({ n }: { n: string }) {
  const icons: Record<string, ReactNode> = {
    "01": <path d="M4 12h16M4 6h16M4 18h10" />,
    "02": <path d="M4 6h16M4 12h10M4 18h16M16 10l2 2 4-4" />,
    "03": <path d="M4 12h16M16 6l4 6-4 6" />,
    "04": <path d="M4 20V10l8-6 8 6v10M9 20v-6h6v6" />,
    "05": <path d="M4 6h16v4H4zM4 14h10v4H4z" />,
  };
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {icons[n]}
    </svg>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default function WhyUsPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Breadcrumbs items={items} />

      {/* SECTION 1 — Hero */}
      <section className="bg-ivory">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-20 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="font-sans text-[13px] font-bold text-walnut uppercase tracking-widest mb-4">Why US Flooring?</p>
            <h1 className="font-serif text-[38px] lg:text-[60px] font-bold text-charcoal leading-[1.1] mb-6">Material Matters. Installation Matters. Accountability Matters.</h1>
            <p className="font-sans text-[16px] lg:text-[18px] text-charcoal/65 leading-[1.6] mb-4 max-w-[56ch]">US Flooring &amp; Molding Inc. brings trusted materials, experienced guidance, local availability and professional installation together under one accountable team.</p>
            <p className="font-sans text-[16px] lg:text-[18px] text-charcoal/65 leading-[1.6] mb-8 max-w-[56ch]">We do more than sell flooring. We help customers choose suitable materials, coordinate the complete scope and achieve a finished result they can trust.</p>
            <div className="flex flex-wrap gap-4 mb-6">
              <TrackedLink href="/contact" event="why_us_estimate_click" className="button">Request a Free Estimate</TrackedLink>
              <TrackedLink href={`tel:${BUSINESS.phone}`} event="why_us_phone_click" className="button button-secondary">Call {BUSINESS.phoneDisplay}</TrackedLink>
            </div>
            <p className="font-sans text-[13px] font-bold text-walnut uppercase tracking-wide">Two Decades of Craftsmanship You Can Trust</p>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/3.1] rounded-2xl overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1787625349019-2ad6b4cadc87?w=1000&h=780&fit=crop&auto=format" alt="Professionally installed natural-oak flooring with clean white molding and a precise doorway transition, in a warm contemporary interior." fill priority sizes="(max-width: 1024px) 100vw, 542px" className="object-cover" />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 sm:right-auto sm:w-[300px] bg-charcoal rounded-xl p-6 shadow-lg">
              <p className="font-serif text-[19px] font-bold text-ivory leading-snug mb-2">We Install What We Sell.</p>
              <p className="font-sans text-[13px] text-ivory/65 leading-relaxed">Materials selected with real-world installation performance in mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Five reasons */}
      <section className="bg-subtle border-t border-border">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-20 py-16 lg:py-32">
          <p className="font-sans text-[13px] font-bold text-walnut uppercase tracking-widest mb-4">The US Flooring Difference</p>
          <h2 className="font-serif text-[30px] lg:text-[42px] font-bold text-charcoal leading-tight mb-5 max-w-[780px]">Five Reasons Customers Choose US Flooring</h2>
          <p className="font-sans text-[16px] lg:text-[18px] text-charcoal/65 leading-[1.6] mb-12 max-w-[760px]">Our business is built around experience, reliable materials, professional installation, local availability and honest customer guidance.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasonCards.map((card) => {
              const isDominant = card.tone === "navy";
              const bg = card.tone === "navy" ? "bg-charcoal" : card.tone === "white" ? "bg-light" : "bg-ivory";
              const textColor = card.tone === "navy" ? "text-ivory" : "text-charcoal";
              const bodyColor = card.tone === "navy" ? "text-ivory/70" : "text-charcoal/65";
              return (
                <div key={card.n} className={`${bg} ${isDominant ? "md:col-span-2 lg:row-span-1" : ""} rounded-2xl p-8 lg:p-10 border ${card.tone === "navy" ? "border-transparent" : "border-border"} relative overflow-hidden ${card.tone === "navy" ? "border-t-4 border-t-red" : ""}`}>
                  <div className="flex items-start justify-between mb-5">
                    <span className={`font-serif text-[15px] font-bold ${card.tone === "navy" ? "text-gold" : "text-gold"}`}>{card.n}</span>
                    {card.tone === "navy" && <span className="font-sans text-[11px] font-bold text-red uppercase tracking-widest">US Flooring &amp; Molding</span>}
                  </div>
                  <h3 className={`font-serif text-[22px] lg:text-[26px] font-bold ${textColor} leading-snug mb-4 ${isDominant ? "lg:max-w-[70%]" : ""}`}>{card.heading}</h3>
                  <p className={`font-sans text-[15px] lg:text-[16px] ${bodyColor} leading-[1.6] mb-6 ${isDominant ? "lg:max-w-[70%]" : ""}`}>&ldquo;{card.body}&rdquo;</p>
                  {"stat" in card && (
                    <div className="flex items-baseline gap-2 mt-auto">
                      <span className="font-serif text-[40px] font-bold text-walnut leading-none">{card.stat}</span>
                      <span className="font-sans text-[13px] font-bold text-charcoal/50 uppercase tracking-wide">{card.statLabel}</span>
                    </div>
                  )}
                  {"statement" in card && <p className="font-serif text-[24px] lg:text-[28px] font-bold text-ivory leading-tight">{card.statement}</p>}
                  {"label" in card && (
                    <span className={`inline-block font-sans text-[11px] font-bold uppercase tracking-widest ${card.tone === "cream" ? "text-walnut" : "text-red"} border-t ${card.tone === "cream" ? "border-gold/40" : "border-red/25"} pt-4`}>{card.label}</span>
                  )}
                  {card.n === "04" && (
                    <span className="inline-flex items-center gap-1.5 text-gold mt-2" aria-hidden="true">
                      <PinIcon />
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3 — Why our business model matters */}
      <section className="bg-ivory border-t border-border">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-20 py-16 lg:py-24">
          <p className="font-sans text-[13px] font-bold text-walnut uppercase tracking-widest mb-4">One Team, One Complete Result</p>
          <h2 className="font-serif text-[30px] lg:text-[42px] font-bold text-charcoal leading-tight mb-6 max-w-[760px]">Supply and Installation Should Work Together.</h2>
          <p className="font-sans text-[16px] lg:text-[18px] text-charcoal/65 leading-[1.6] mb-4 max-w-[74ch]">The flooring material, property conditions, preparation, installation method, transitions and molding all affect the final result. When these responsibilities are divided between unrelated companies, the customer may have to manage questions, scheduling and accountability between multiple parties.</p>
          <p className="font-sans text-[16px] lg:text-[18px] text-charcoal/65 leading-[1.6] mb-14 max-w-[74ch]">At US Flooring, material selection and installation are connected. Because we install the products we supply, our material decisions are informed by real-world performance—not only display-board appearance.</p>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-10 lg:gap-y-0 relative">
            {processStages.map((s, i) => (
              <li key={s.n} className="relative pl-9 lg:pl-0">
                <span className="lg:hidden absolute left-0 top-0 bottom-[-2.5rem] w-px bg-border" aria-hidden="true" />
                <span className="lg:hidden absolute left-[-5px] top-0 w-[11px] h-[11px] rounded-full bg-red" aria-hidden="true" />
                <div className="text-walnut mb-4">
                  <ProcessIcon n={s.n} />
                </div>
                <div className="font-serif text-[13px] font-bold text-charcoal/35 mb-2">{s.n}</div>
                <h3 className="font-sans text-[15px] font-bold text-charcoal leading-snug">{s.title}</h3>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SECTION 4 — US Flooring vs. other options */}
      <ViewTracker event="why_us_comparison_view">
        <section className="bg-subtle border-t border-border">
          <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-20 py-16 lg:py-24">
            <p className="font-sans text-[13px] font-bold text-walnut uppercase tracking-widest mb-4">Compare Your Options</p>
            <h2 className="font-serif text-[30px] lg:text-[42px] font-bold text-charcoal leading-tight mb-12 max-w-[780px]">What Kind of Flooring Support Does Your Project Need?</h2>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1.2fr] gap-6 items-stretch">
              <div className="bg-light border border-border rounded-2xl p-8 flex flex-col">
                <span className="inline-block self-start font-sans text-[11px] font-bold text-charcoal/60 uppercase tracking-widest bg-stone/10 rounded-full px-3 py-1 mb-5">Material-Focused</span>
                <h3 className="font-serif text-[21px] font-bold text-charcoal mb-3 leading-snug">Flooring Wholesaler</h3>
                <p className="font-sans text-[14px] text-charcoal/60 leading-relaxed mb-5">A wholesaler may be appropriate when the buyer already knows the exact product, quantity and installation system required.</p>
                <ul className="flex flex-col gap-2 mb-6 flex-1">
                  {wholesalerPoints.map((p) => <li key={p} className="font-sans text-[13px] text-charcoal/60 flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-stone shrink-0 mt-2" aria-hidden="true" />{p}</li>)}
                </ul>
                <p className="font-sans text-[13px] font-semibold text-charcoal/70 border-t border-border pt-4">They primarily sell the flooring material.</p>
              </div>

              <div className="bg-light border border-gold/40 rounded-2xl p-8 flex flex-col">
                <span className="inline-block self-start font-sans text-[11px] font-bold text-walnut uppercase tracking-widest bg-gold/15 rounded-full px-3 py-1 mb-5">Labor-Focused</span>
                <h3 className="font-serif text-[21px] font-bold text-charcoal mb-3 leading-snug">Independent Installer</h3>
                <p className="font-sans text-[14px] text-charcoal/60 leading-relaxed mb-5">An independent installer may be appropriate when the customer has already selected, purchased and verified the material.</p>
                <ul className="flex flex-col gap-2 mb-6 flex-1">
                  {installerPoints.map((p) => <li key={p} className="font-sans text-[13px] text-charcoal/60 flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-gold shrink-0 mt-2" aria-hidden="true" />{p}</li>)}
                </ul>
                <p className="font-sans text-[13px] font-semibold text-charcoal/70 border-t border-gold/30 pt-4">They primarily install the material provided.</p>
              </div>

              <div className="bg-charcoal rounded-2xl p-8 lg:p-10 flex flex-col border-t-4 border-t-red">
                <span className="inline-block self-start font-sans text-[11px] font-bold text-red uppercase tracking-widest bg-ivory rounded-full px-3 py-1 mb-5">Complete Project Support</span>
                <h3 className="font-serif text-[23px] font-bold text-ivory mb-3 leading-snug">US Flooring &amp; Molding Inc.</h3>
                <p className="font-sans text-[14px] text-ivory/65 leading-relaxed mb-5">US Flooring is designed for customers who want material quality, local supply, professional installation and project guidance coordinated through one accountable company.</p>
                <ul className="flex flex-col gap-2 mb-6 flex-1">
                  {usFlooringPoints.map((p) => <li key={p} className="font-sans text-[13px] text-ivory/75 flex items-start gap-2"><RedCheck />{p}</li>)}
                </ul>
                <p className="font-sans text-[13px] font-semibold text-ivory border-t border-ivory/15 pt-4">We supply the material, install the flooring and remain accountable for the complete result.</p>
              </div>
            </div>
          </div>
        </section>
      </ViewTracker>

      {/* SECTION 5 — Detailed comparison table */}
      <section className="bg-ivory border-t border-border">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-20 py-16 lg:py-24">
          <h2 className="font-serif text-[26px] lg:text-[36px] font-bold text-charcoal leading-tight mb-10 max-w-[760px]">A Closer Look at What Changes When One Team Manages the Scope</h2>
          <ComparisonTable rows={tableRows} />
          <p className="font-sans text-[12px] text-charcoal/45 leading-relaxed mt-6 max-w-[760px]">Services vary between individual companies. This comparison describes common business models and helps customers understand which questions to ask before selecting a flooring provider.</p>
        </div>
      </section>

      {/* SECTION 6 — We install what we sell */}
      <section className="bg-charcoal">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-20 py-16 lg:py-24">
          <h2 className="font-serif text-[32px] lg:text-[46px] font-bold text-ivory leading-tight mb-6 max-w-[820px]">We Install What We Sell.</h2>
          <p className="font-sans text-[16px] lg:text-[18px] text-ivory/65 leading-[1.6] mb-14 max-w-[74ch]">Selling flooring is different from being responsible for how it performs after installation. Because our team handles installation, we consider product consistency, installation requirements, substrate conditions, transitions, molding and long-term use before making a recommendation.</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-ivory/15 p-8">
              <h3 className="font-sans text-[13px] font-bold text-ivory/50 uppercase tracking-widest mb-6">Material-Only Thinking</h3>
              <ul className="flex flex-col gap-3.5">
                {materialOnlyPoints.map((p) => <li key={p} className="font-sans text-[15px] text-ivory/55 leading-snug">{p}</li>)}
              </ul>
            </div>
            <div className="rounded-2xl bg-ivory border-t-4 border-t-red p-8">
              <h3 className="font-sans text-[13px] font-bold text-walnut uppercase tracking-widest mb-6">Complete-Project Thinking</h3>
              <ul className="flex flex-col gap-3.5">
                {completeProjectPoints.map((p) => <li key={p} className="flex items-start gap-3 font-sans text-[15px] text-charcoal/75 leading-snug"><RedCheck />{p}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — Trusted materials */}
      <section className="bg-ivory border-t border-border">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-20 py-16 lg:py-24">
          <p className="font-sans text-[13px] font-bold text-walnut uppercase tracking-widest mb-4">Materials We Can Stand Behind</p>
          <h2 className="font-serif text-[30px] lg:text-[42px] font-bold text-charcoal leading-tight mb-6 max-w-[760px]">Recognized Brands. Proven Performance.</h2>
          <p className="font-sans text-[16px] lg:text-[18px] text-charcoal/65 leading-[1.6] mb-12 max-w-[74ch]">We choose flooring and molding partners based on product quality, consistency, installation performance and suitability for our customers&apos; projects.</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {trustedMaterials.map((m) => (
              <div key={m.title} className="bg-subtle border border-border rounded-2xl p-8">
                <h3 className="font-serif text-[19px] font-bold text-charcoal mb-3 leading-snug">{m.title}</h3>
                <p className="font-sans text-[14px] text-charcoal/60 leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — Local Burbank advantage */}
      <section className="bg-subtle border-t border-border">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-20 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="font-serif text-[28px] lg:text-[38px] font-bold text-charcoal leading-tight mb-6">Local Inventory. Local Support. Faster Coordination.</h2>
            <p className="font-sans text-[15px] lg:text-[16px] text-charcoal/65 leading-relaxed mb-4">Our Burbank warehouse gives customers, contractors, designers and property professionals convenient local access to flooring materials, samples and project support.</p>
            <p className="font-sans text-[15px] lg:text-[16px] text-charcoal/65 leading-relaxed mb-8">Being local helps us coordinate product availability, ordering, pickup, delivery and installation without relying entirely on distant suppliers.</p>
            <div className="flex flex-wrap gap-4">
              <TrackedLink href={`tel:${BUSINESS.phone}`} event="why_us_phone_click" className="button">Call {BUSINESS.phoneDisplay}</TrackedLink>
              <TrackedLink href={BUSINESS.googleMapsUrl} event="why_us_directions_click" external className="button button-secondary">Get Directions</TrackedLink>
              <Link href="/contact" className="button button-secondary">Request an Estimate</Link>
            </div>
          </div>
          <div className="bg-charcoal rounded-2xl p-10 lg:p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-ivory/10 text-gold mb-6">
              <PinIcon />
            </div>
            <p className="font-serif text-[24px] font-bold text-ivory mb-2">Burbank, California</p>
            <p className="font-sans text-[14px] text-ivory/60 leading-relaxed max-w-[32ch] mx-auto">{BUSINESS.address.street}, {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}</p>
            <p className="font-sans text-[12px] text-ivory/40 uppercase tracking-widest mt-6">Serving Burbank, Glendale &amp; North Hollywood</p>
          </div>
        </div>
      </section>

      {/* SECTION 9 — Honest guidance */}
      <section className="bg-ivory border-t border-border">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-20 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <p className="font-sans text-[13px] font-bold text-walnut uppercase tracking-widest mb-4">Guidance Before the Sale</p>
            <h2 className="font-serif text-[28px] lg:text-[38px] font-bold text-charcoal leading-tight mb-6">The Best Product Is the One That Fits Your Project.</h2>
            <p className="font-sans text-[15px] lg:text-[16px] text-charcoal/65 leading-relaxed mb-8 max-w-[56ch]">Every flooring material has advantages, limitations and specific installation requirements. We help customers understand those tradeoffs before making a decision.</p>
            <blockquote className="border-l-4 border-red pl-5 mb-8">
              <p className="font-serif text-[20px] font-bold text-charcoal leading-snug">&ldquo;Your best interest always comes before our profit.&rdquo;</p>
            </blockquote>
            <TrackedLink href="/contact" event="why_us_guidance_click" className="button">Get Free Expert Guidance</TrackedLink>
          </div>
          <div className="bg-subtle border border-border rounded-2xl p-8">
            <h3 className="font-sans text-[13px] font-bold text-walnut uppercase tracking-widest mb-6">What We Help You Weigh</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {guidanceChecklist.map((c) => <li key={c} className="flex items-start gap-3 font-sans text-[14px] text-charcoal/70 leading-snug"><RedCheck />{c}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 10 — Who we work with */}
      <section className="bg-subtle border-t border-border">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-20 py-16 lg:py-24">
          <h2 className="font-serif text-[28px] lg:text-[40px] font-bold text-charcoal leading-tight mb-12 max-w-[720px]">Flooring Support for Homeowners and Professionals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {audiences.map((a) => (
              <div key={a.title} className="bg-light border border-border rounded-2xl p-6">
                <h3 className="font-sans text-[15px] font-bold text-charcoal mb-3 leading-snug">{a.title}</h3>
                <p className="font-sans text-[13px] text-charcoal/60 leading-relaxed">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11 — Questions to ask */}
      <section className="bg-ivory border-t border-border">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-20 py-16 lg:py-24">
          <h2 className="font-serif text-[26px] lg:text-[36px] font-bold text-charcoal leading-tight mb-10 max-w-[760px]">Questions to Ask Before Choosing a Flooring Company</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 mb-10">
            {askQuestions.map((q) => <li key={q} className="font-sans text-[15px] text-charcoal/70 leading-snug border-b border-border pb-4">{q}</li>)}
          </ul>
          <p className="font-sans text-[15px] lg:text-[16px] text-charcoal/65 leading-relaxed max-w-[70ch]">A flooring decision should be based on more than color and price. Product quality, preparation, installation and accountability all affect the final result.</p>
        </div>
      </section>

      {/* SECTION 12 — FAQ */}
      <section className="bg-subtle border-t border-border">
        <div className="max-w-[820px] mx-auto px-5 sm:px-8 py-16 lg:py-24">
          <h2 className="font-serif text-[26px] lg:text-[36px] font-bold text-charcoal leading-tight mb-8">Frequently Asked Questions</h2>
          <WhyUsFaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* SECTION 13 — Final CTA */}
      <section className="bg-charcoal">
        <div className="max-w-[900px] mx-auto px-5 sm:px-8 py-16 lg:py-24 text-center">
          <h2 className="font-serif text-[28px] lg:text-[42px] font-bold text-ivory leading-tight mb-6">Choose the Material—and the Team Behind It—with Confidence.</h2>
          <p className="font-sans text-base text-ivory/60 leading-relaxed mb-8 max-w-[60ch] mx-auto">Tell us about your property, design goals, project conditions and budget. We will help you compare suitable materials and develop a complete flooring solution.</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <TrackedLink href="/contact" event="why_us_estimate_click" className="button">Request a Free Estimate</TrackedLink>
            <TrackedLink href={`tel:${BUSINESS.phone}`} event="why_us_phone_click" className="button button-outline-light">Call {BUSINESS.phoneDisplay}</TrackedLink>
          </div>
          <p className="font-sans text-[13px] text-ivory/45 mb-2">Serving Burbank, Glendale, North Hollywood and surrounding Los Angeles communities.</p>
          <p className="font-sans text-[13px] font-bold text-gold uppercase tracking-widest">Two Decades of Craftsmanship You Can Trust</p>
        </div>
      </section>

      {/* SECTION — Internal links */}
      <section className="bg-ivory border-t border-border">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-20 py-12">
          <nav aria-label="Related pages" className="flex flex-wrap gap-x-8 gap-y-3">
            <Link href="/" className="font-sans text-[13px] text-charcoal/60 hover:text-red underline underline-offset-4">US Flooring &amp; Molding Home</Link>
            <Link href="/about" className="font-sans text-[13px] text-charcoal/60 hover:text-red underline underline-offset-4">About Our Family Business</Link>
            <Link href="/products" className="font-sans text-[13px] text-charcoal/60 hover:text-red underline underline-offset-4">Products &amp; Services</Link>
            <Link href="/buyers-guide" className="font-sans text-[13px] text-charcoal/60 hover:text-red underline underline-offset-4">Read the Buyer&apos;s Guide</Link>
            <Link href="/gallery" className="font-sans text-[13px] text-charcoal/60 hover:text-red underline underline-offset-4">View Our Project Gallery</Link>
            <Link href="/reviews" className="font-sans text-[13px] text-charcoal/60 hover:text-red underline underline-offset-4">Customer Reviews</Link>
            <Link href="/contact" className="font-sans text-[13px] text-charcoal/60 hover:text-red underline underline-offset-4">Contact &amp; Free Estimate</Link>
          </nav>
        </div>
      </section>
    </>
  );
}
