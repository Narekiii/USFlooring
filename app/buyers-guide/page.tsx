import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs, { breadcrumbJsonLd } from "../ui/breadcrumbs";

export const metadata: Metadata = {
  title: "Flooring Buyer’s Guide | Hardwood, Laminate & Vinyl",
  description: "Compare hardwood, engineered wood, laminate, and vinyl flooring by durability, waterproofing, maintenance, price, and resale value.",
  alternates: { canonical: "https://www.usflooring.la/buyers-guide" },
  openGraph: {
    title: "Flooring Buyer’s Guide | US Flooring & Molding",
    description: "An educational comparison of hardwood, engineered wood, laminate, and vinyl flooring.",
    url: "https://www.usflooring.la/buyers-guide",
    type: "article",
  },
};

const items = [{ label: "Home", href: "/" }, { label: "Buyer’s Guide" }];
const materials = [
  { name: "Solid Hardwood", best: "Dry, climate-stable rooms", description: "One piece of solid wood with full-depth grain. It can be sanded and refinished multiple times." },
  { name: "Engineered Wood", best: "Radiant heat and concrete slabs", description: "A real hardwood veneer over a cross-layered core, offering more dimensional stability than solid wood." },
  { name: "Laminate", best: "Budget-conscious, high-traffic rooms", description: "A photographic wood layer sealed over a dense fiberboard core. Modern products offer convincing detail." },
  { name: "Vinyl (LVP / LVT)", best: "Kitchens, bathrooms, and basements", description: "Layered PVC construction with a waterproof core and forgiving performance in moisture-prone rooms." },
];
const comparison = [
  ["Waterproof", "Not waterproof", "Water-resistant", "Not waterproof unless rated", "Fully waterproof"],
  ["Refinishable", "Yes, 4–6×", "Limited, up to 3×", "No", "No"],
  ["Durability", "Very high", "High", "Moderate", "Moderate"],
  ["Typical price tier", "High", "Mid–high", "Low", "Low–mid"],
];
const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Flooring Buyer’s Guide — Hardwood, Engineered Wood, Laminate & Vinyl",
  description: "Compare common flooring materials by durability, waterproofing, maintenance, price, and resale value.",
  url: "https://www.usflooring.la/buyers-guide",
  publisher: { "@type": "Organization", name: "US Flooring & Molding Inc.", url: "https://www.usflooring.la/" },
};

export default function BuyersGuidePage() {
  return (
    <main className="pb-20">
      <Breadcrumbs items={items} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbJsonLd(items), articleJsonLd]) }} />
      <section className="section container grid gap-10 lg:grid-cols-2"><div><p className="eyebrow">Buyer’s Guide</p><h1>Find the Right Flooring for Your Property</h1><p className="lead">Compare hardwood, engineered wood, laminate, and vinyl based on appearance, durability, moisture exposure, maintenance, installation requirements, and budget.</p><div className="flex flex-wrap gap-3"><Link href="/contact" className="button">Request a Free Estimate</Link><Link href="/contact" className="button button-outline">Visit Our Showroom</Link></div></div><div className="card flex items-center justify-center text-center"><p className="text-6xl" aria-hidden="true">▱</p><p className="sr-only">Illustration comparing four flooring materials</p></div></section>
      <section className="section bg-subtle"><div className="container"><p className="eyebrow">Material Overview</p><h2>Four Materials, Four Different Answers</h2><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{materials.map((material) => <article key={material.name} className="card"><h3>{material.name}</h3><p>{material.description}</p><p><strong>Best for:</strong> {material.best}</p></article>)}</div></div></section>
      <section className="section container"><p className="eyebrow">Side-by-Side</p><h2>How the Materials Compare</h2><div className="overflow-x-auto"><table><thead><tr><th>Feature</th><th>Hardwood</th><th>Engineered Wood</th><th>Laminate</th><th>Vinyl</th></tr></thead><tbody>{comparison.map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th key={cell}>{cell}</th> : <td key={cell}>{cell}</td>)}</tr>)}</tbody></table></div></section>
      <section className="section bg-charcoal text-ivory"><div className="container text-center"><h2>Still Not Sure Which Flooring Is Right for You?</h2><p>Visit our Burbank showroom or schedule a consultation. We’ll help compare options for your property, lifestyle, and budget.</p><Link href="/contact" className="button">Schedule a Consultation</Link></div></section>
    </main>
  );
}
