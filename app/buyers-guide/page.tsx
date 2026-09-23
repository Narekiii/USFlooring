import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs, { breadcrumbJsonLd } from "../ui/breadcrumbs";
import { JsonLd } from "../ui/json-ld";

export const metadata: Metadata = {
  title: "Flooring Buyer's Guide | Hardwood, Laminate & Vinyl",
  description: "Compare hardwood, engineered wood, laminate, and vinyl flooring based on durability, waterproofing, refinishability, price tier, and resale value. Serving Burbank and Los Angeles.",
  alternates: { canonical: "https://www.usflooring.la/buyers-guide" },
  openGraph: { title: "Flooring Buyer's Guide | US Flooring & Molding", description: "An educational comparison of hardwood, engineered wood, laminate, and vinyl flooring — from a flooring company with 20+ years serving Los Angeles.", url: "https://www.usflooring.la/buyers-guide", type: "article" },
};

const items = [{ label: "Home", href: "/" }, { label: "Buyer's Guide" }];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Flooring Buyer's Guide — Hardwood, Engineered Wood, Laminate & Vinyl",
  description: "Compare hardwood, engineered wood, laminate, and vinyl flooring by durability, waterproofing, refinishability, price, and resale value.",
  url: "https://www.usflooring.la/buyers-guide",
  publisher: { "@type": "Organization", name: "US Flooring & Molding Inc.", url: "https://www.usflooring.la/" },
};

// ─── SVG illustrations ───────────────────────────────────────────────────────

function SolidHardwoodIllustration() {
  return (
    <svg viewBox="0 0 160 96" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full max-w-[160px]">
      <rect x="8" y="16" width="144" height="56" stroke="#6B4423" strokeWidth="1.5" />
      <path d="M18 28 Q48 25 80 28 Q112 31 140 28" stroke="#6B4423" strokeWidth="0.8" />
      <path d="M18 36 Q48 33 80 36 Q112 39 140 36" stroke="#6B4423" strokeWidth="0.8" />
      <path d="M18 44 Q55 41 80 44 Q108 47 140 44" stroke="#6B4423" strokeWidth="0.8" />
      <path d="M18 52 Q50 49 80 52 Q110 55 140 52" stroke="#6B4423" strokeWidth="0.8" />
      <path d="M18 60 Q45 57 80 60 Q115 63 140 60" stroke="#6B4423" strokeWidth="0.8" />
      <text x="80" y="86" fill="#6B4423" fontSize="8" textAnchor="middle" fontFamily="Manrope, system-ui" fontWeight="500" letterSpacing="0.8">SOLID WOOD — ONE PIECE</text>
    </svg>
  );
}

function EngineeredWoodIllustration() {
  return (
    <svg viewBox="0 0 160 96" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full max-w-[160px]">
      <rect x="8" y="10" width="144" height="62" stroke="#6B4423" strokeWidth="1.5" />
      <line x1="8" y1="22" x2="152" y2="22" stroke="#6B4423" strokeWidth="0.8" />
      <line x1="8" y1="34" x2="152" y2="34" stroke="#6B4423" strokeWidth="0.8" />
      <line x1="8" y1="46" x2="152" y2="46" stroke="#6B4423" strokeWidth="0.8" />
      <line x1="8" y1="58" x2="152" y2="58" stroke="#6B4423" strokeWidth="0.8" />
      <path d="M18 16 Q48 13 80 16 Q112 19 140 16" stroke="#6B4423" strokeWidth="0.7" />
      <line x1="28" y1="22" x2="28" y2="34" stroke="#6B4423" strokeWidth="0.5" />
      <line x1="44" y1="22" x2="44" y2="34" stroke="#6B4423" strokeWidth="0.5" />
      <line x1="60" y1="22" x2="60" y2="34" stroke="#6B4423" strokeWidth="0.5" />
      <line x1="76" y1="22" x2="76" y2="34" stroke="#6B4423" strokeWidth="0.5" />
      <line x1="92" y1="22" x2="92" y2="34" stroke="#6B4423" strokeWidth="0.5" />
      <line x1="108" y1="22" x2="108" y2="34" stroke="#6B4423" strokeWidth="0.5" />
      <line x1="124" y1="22" x2="124" y2="34" stroke="#6B4423" strokeWidth="0.5" />
      <line x1="140" y1="22" x2="140" y2="34" stroke="#6B4423" strokeWidth="0.5" />
      <path d="M18 40 Q80 37 140 40" stroke="#6B4423" strokeWidth="0.5" />
      <line x1="28" y1="46" x2="28" y2="58" stroke="#6B4423" strokeWidth="0.5" />
      <line x1="44" y1="46" x2="44" y2="58" stroke="#6B4423" strokeWidth="0.5" />
      <line x1="60" y1="46" x2="60" y2="58" stroke="#6B4423" strokeWidth="0.5" />
      <line x1="76" y1="46" x2="76" y2="58" stroke="#6B4423" strokeWidth="0.5" />
      <line x1="92" y1="46" x2="92" y2="58" stroke="#6B4423" strokeWidth="0.5" />
      <line x1="108" y1="46" x2="108" y2="58" stroke="#6B4423" strokeWidth="0.5" />
      <line x1="124" y1="46" x2="124" y2="58" stroke="#6B4423" strokeWidth="0.5" />
      <line x1="140" y1="46" x2="140" y2="58" stroke="#6B4423" strokeWidth="0.5" />
      <path d="M18 62 Q80 60 140 62" stroke="#6B4423" strokeWidth="0.5" />
      <text x="80" y="86" fill="#6B4423" fontSize="8" textAnchor="middle" fontFamily="Manrope, system-ui" fontWeight="500" letterSpacing="0.8">CROSS-LAYERED CORE</text>
    </svg>
  );
}

function LaminateIllustration() {
  return (
    <svg viewBox="0 0 160 96" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full max-w-[160px]">
      <rect x="8" y="10" width="144" height="62" stroke="#6B4423" strokeWidth="1.5" />
      <line x1="8" y1="18" x2="152" y2="18" stroke="#6B4423" strokeWidth="0.8" />
      <line x1="8" y1="24" x2="152" y2="24" stroke="#6B4423" strokeWidth="0.8" />
      <line x1="20" y1="24" x2="8" y2="36" stroke="#6B4423" strokeWidth="0.4" />
      <line x1="36" y1="24" x2="8" y2="52" stroke="#6B4423" strokeWidth="0.4" />
      <line x1="52" y1="24" x2="8" y2="68" stroke="#6B4423" strokeWidth="0.4" />
      <line x1="68" y1="24" x2="20" y2="72" stroke="#6B4423" strokeWidth="0.4" />
      <line x1="84" y1="24" x2="36" y2="72" stroke="#6B4423" strokeWidth="0.4" />
      <line x1="100" y1="24" x2="52" y2="72" stroke="#6B4423" strokeWidth="0.4" />
      <line x1="116" y1="24" x2="68" y2="72" stroke="#6B4423" strokeWidth="0.4" />
      <line x1="132" y1="24" x2="84" y2="72" stroke="#6B4423" strokeWidth="0.4" />
      <line x1="148" y1="24" x2="100" y2="72" stroke="#6B4423" strokeWidth="0.4" />
      <line x1="152" y1="32" x2="116" y2="72" stroke="#6B4423" strokeWidth="0.4" />
      <line x1="152" y1="48" x2="132" y2="72" stroke="#6B4423" strokeWidth="0.4" />
      <line x1="152" y1="64" x2="148" y2="72" stroke="#6B4423" strokeWidth="0.4" />
      <line x1="8" y1="64" x2="152" y2="64" stroke="#6B4423" strokeWidth="0.8" />
      <text x="13" y="15" fill="#6B4423" fontSize="6" fontFamily="Manrope, system-ui" fontWeight="500">WEAR</text>
      <text x="13" y="22" fill="#6B4423" fontSize="6" fontFamily="Manrope, system-ui" fontWeight="500">DÉCOR</text>
      <text x="13" y="50" fill="#6B4423" fontSize="6" fontFamily="Manrope, system-ui" fontWeight="500">HDF CORE</text>
      <text x="13" y="70" fill="#6B4423" fontSize="6" fontFamily="Manrope, system-ui" fontWeight="500">BACKING</text>
      <text x="80" y="86" fill="#6B4423" fontSize="8" textAnchor="middle" fontFamily="Manrope, system-ui" fontWeight="500" letterSpacing="0.8">4-LAYER CONSTRUCTION</text>
    </svg>
  );
}

function VinylIllustration() {
  return (
    <svg viewBox="0 0 160 96" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full max-w-[160px]">
      <rect x="8" y="10" width="144" height="62" stroke="#073B7A" strokeWidth="1.5" />
      <line x1="8" y1="20" x2="152" y2="20" stroke="#073B7A" strokeWidth="0.8" />
      <line x1="8" y1="28" x2="152" y2="28" stroke="#073B7A" strokeWidth="0.8" />
      <circle cx="28" cy="40" r="1.2" fill="#073B7A" /><circle cx="44" cy="40" r="1.2" fill="#073B7A" /><circle cx="60" cy="40" r="1.2" fill="#073B7A" /><circle cx="76" cy="40" r="1.2" fill="#073B7A" />
      <circle cx="92" cy="40" r="1.2" fill="#073B7A" /><circle cx="108" cy="40" r="1.2" fill="#073B7A" /><circle cx="124" cy="40" r="1.2" fill="#073B7A" /><circle cx="140" cy="40" r="1.2" fill="#073B7A" />
      <circle cx="28" cy="50" r="1.2" fill="#073B7A" /><circle cx="44" cy="50" r="1.2" fill="#073B7A" /><circle cx="60" cy="50" r="1.2" fill="#073B7A" /><circle cx="76" cy="50" r="1.2" fill="#073B7A" />
      <circle cx="92" cy="50" r="1.2" fill="#073B7A" /><circle cx="108" cy="50" r="1.2" fill="#073B7A" /><circle cx="124" cy="50" r="1.2" fill="#073B7A" /><circle cx="140" cy="50" r="1.2" fill="#073B7A" />
      <line x1="8" y1="60" x2="152" y2="60" stroke="#073B7A" strokeWidth="0.8" />
      <text x="13" y="17" fill="#073B7A" fontSize="6" fontFamily="Manrope, system-ui" fontWeight="500">WEAR</text>
      <text x="13" y="25" fill="#073B7A" fontSize="6" fontFamily="Manrope, system-ui" fontWeight="500">PRINT</text>
      <text x="13" y="47" fill="#073B7A" fontSize="6" fontFamily="Manrope, system-ui" fontWeight="500">SPC CORE</text>
      <text x="13" y="68" fill="#073B7A" fontSize="6" fontFamily="Manrope, system-ui" fontWeight="500">UNDERLAYMENT</text>
      <text x="80" y="86" fill="#073B7A" fontSize="8" textAnchor="middle" fontFamily="Manrope, system-ui" fontWeight="500" letterSpacing="0.8">FULLY WATERPROOF CORE</text>
    </svg>
  );
}

function HeroIllustration() {
  return (
    <svg viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full opacity-70">
      <rect x="8" y="24" width="66" height="112" stroke="#6B4423" strokeWidth="1.2" />
      <path d="M18 42 Q25 39 41 42 Q55 45 68 42" stroke="#6B4423" strokeWidth="0.6" />
      <path d="M18 56 Q30 53 41 56 Q55 59 68 56" stroke="#6B4423" strokeWidth="0.6" />
      <path d="M18 70 Q28 67 41 70 Q57 73 68 70" stroke="#6B4423" strokeWidth="0.6" />
      <path d="M18 84 Q32 81 41 84 Q53 87 68 84" stroke="#6B4423" strokeWidth="0.6" />
      <path d="M18 98 Q26 95 41 98 Q55 101 68 98" stroke="#6B4423" strokeWidth="0.6" />
      <text x="41" y="147" fill="#6B4423" fontSize="7" textAnchor="middle" fontFamily="Manrope, system-ui" fontWeight="500">HARDWOOD</text>

      <rect x="86" y="24" width="66" height="112" stroke="#6B4423" strokeWidth="1.2" />
      <line x1="86" y1="46" x2="152" y2="46" stroke="#6B4423" strokeWidth="0.6" />
      <line x1="86" y1="64" x2="152" y2="64" stroke="#6B4423" strokeWidth="0.6" />
      <line x1="86" y1="82" x2="152" y2="82" stroke="#6B4423" strokeWidth="0.6" />
      <line x1="86" y1="118" x2="152" y2="118" stroke="#6B4423" strokeWidth="0.6" />
      <line x1="96" y1="46" x2="96" y2="64" stroke="#6B4423" strokeWidth="0.4" />
      <line x1="108" y1="46" x2="108" y2="64" stroke="#6B4423" strokeWidth="0.4" />
      <line x1="120" y1="46" x2="120" y2="64" stroke="#6B4423" strokeWidth="0.4" />
      <line x1="132" y1="46" x2="132" y2="64" stroke="#6B4423" strokeWidth="0.4" />
      <line x1="144" y1="46" x2="144" y2="64" stroke="#6B4423" strokeWidth="0.4" />
      <line x1="96" y1="82" x2="96" y2="118" stroke="#6B4423" strokeWidth="0.4" />
      <line x1="108" y1="82" x2="108" y2="118" stroke="#6B4423" strokeWidth="0.4" />
      <line x1="120" y1="82" x2="120" y2="118" stroke="#6B4423" strokeWidth="0.4" />
      <line x1="132" y1="82" x2="132" y2="118" stroke="#6B4423" strokeWidth="0.4" />
      <line x1="144" y1="82" x2="144" y2="118" stroke="#6B4423" strokeWidth="0.4" />
      <text x="119" y="147" fill="#6B4423" fontSize="7" textAnchor="middle" fontFamily="Manrope, system-ui" fontWeight="500">ENGINEERED</text>

      <rect x="164" y="24" width="66" height="112" stroke="#6B4423" strokeWidth="1.2" />
      <line x1="164" y1="38" x2="230" y2="38" stroke="#6B4423" strokeWidth="0.6" />
      <line x1="164" y1="48" x2="230" y2="48" stroke="#6B4423" strokeWidth="0.6" />
      <line x1="164" y1="124" x2="230" y2="124" stroke="#6B4423" strokeWidth="0.6" />
      <line x1="174" y1="48" x2="164" y2="58" stroke="#6B4423" strokeWidth="0.35" />
      <line x1="188" y1="48" x2="164" y2="72" stroke="#6B4423" strokeWidth="0.35" />
      <line x1="202" y1="48" x2="164" y2="86" stroke="#6B4423" strokeWidth="0.35" />
      <line x1="216" y1="48" x2="164" y2="100" stroke="#6B4423" strokeWidth="0.35" />
      <line x1="230" y1="48" x2="164" y2="114" stroke="#6B4423" strokeWidth="0.35" />
      <line x1="230" y1="60" x2="182" y2="124" stroke="#6B4423" strokeWidth="0.35" />
      <line x1="230" y1="76" x2="198" y2="124" stroke="#6B4423" strokeWidth="0.35" />
      <line x1="230" y1="92" x2="214" y2="124" stroke="#6B4423" strokeWidth="0.35" />
      <text x="197" y="147" fill="#6B4423" fontSize="7" textAnchor="middle" fontFamily="Manrope, system-ui" fontWeight="500">LAMINATE</text>

      <rect x="242" y="24" width="66" height="112" stroke="#073B7A" strokeWidth="1.2" />
      <line x1="242" y1="42" x2="308" y2="42" stroke="#073B7A" strokeWidth="0.6" />
      <line x1="242" y1="52" x2="308" y2="52" stroke="#073B7A" strokeWidth="0.6" />
      <line x1="242" y1="112" x2="308" y2="112" stroke="#073B7A" strokeWidth="0.6" />
      <circle cx="255" cy="78" r="1.1" fill="#073B7A" /><circle cx="268" cy="78" r="1.1" fill="#073B7A" /><circle cx="281" cy="78" r="1.1" fill="#073B7A" /><circle cx="294" cy="78" r="1.1" fill="#073B7A" />
      <circle cx="255" cy="92" r="1.1" fill="#073B7A" /><circle cx="268" cy="92" r="1.1" fill="#073B7A" /><circle cx="281" cy="92" r="1.1" fill="#073B7A" /><circle cx="294" cy="92" r="1.1" fill="#073B7A" />
      <text x="275" y="147" fill="#073B7A" fontSize="7" textAnchor="middle" fontFamily="Manrope, system-ui" fontWeight="500">VINYL / LVP</text>
    </svg>
  );
}

function CheckMark() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
      <path d="M3 8.5L6.5 12 13 5" stroke="#073B7A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── Data ────────────────────────────────────────────────────────────────────

const cards = [
  { label: "NATURAL WOOD", title: "Solid Hardwood", desc: "One piece of solid wood, milled from the log. Full-depth grain, and the only option you can sand and refinish multiple times over its life.", bestFor: "Dry, climate-stable rooms", facts: ["Refinishable 4–6×", "Durability: Very High", "Price: High"], Illustration: SolidHardwoodIllustration },
  { label: "LAYERED HARDWOOD", title: "Engineered Wood", desc: "A real hardwood veneer bonded over a cross-layered core. More dimensionally stable than solid wood, and safe over radiant heat and concrete slabs.", bestFor: "Radiant heat & below-grade rooms", facts: ["Refinishable up to 3×", "Durability: High", "Price: Mid–High"], Illustration: EngineeredWoodIllustration },
  { label: "PRINTED WOOD DETAIL", title: "Laminate", desc: "A high-resolution photographic layer of wood grain, sealed under a hard-wearing surface and fused to a dense fiberboard core.", bestFor: "Budget-conscious, high-traffic rooms", facts: ["Refinishable: No", "Durability: Moderate", "Price: Low"], Illustration: LaminateIllustration },
  { label: "FULLY WATERPROOF", title: "Vinyl (LVP / LVT)", desc: "Layered PVC construction, fully waterproof from surface to backing. The most forgiving option for moisture-prone rooms.", bestFor: "Kitchens, bathrooms, basements", facts: ["Refinishable: No", "Durability: Moderate", "Price: Low–Mid"], Illustration: VinylIllustration },
] as const;

type CellType = "positive" | "warning" | "neutral";
interface Cell { text: string; type: CellType }
interface TableRow { label: string; cells: Cell[] }

const tableRows: TableRow[] = [
  { label: "Waterproof", cells: [{ text: "Not waterproof", type: "warning" }, { text: "Water-resistant", type: "neutral" }, { text: "Not waterproof unless rated", type: "warning" }, { text: "Fully waterproof", type: "positive" }] },
  { label: "Refinishable", cells: [{ text: "Yes, 4–6×", type: "positive" }, { text: "Limited, up to 3×", type: "neutral" }, { text: "No", type: "neutral" }, { text: "No", type: "neutral" }] },
  { label: "Durability", cells: [{ text: "Very High", type: "positive" }, { text: "High", type: "positive" }, { text: "Moderate", type: "neutral" }, { text: "Moderate", type: "neutral" }] },
  { label: "Radiant floor heat", cells: [{ text: "Not recommended", type: "warning" }, { text: "Yes", type: "positive" }, { text: "Most brands", type: "positive" }, { text: "Yes", type: "positive" }] },
  { label: "Typical price tier", cells: [{ text: "High", type: "neutral" }, { text: "Mid–High", type: "neutral" }, { text: "Low", type: "neutral" }, { text: "Low–Mid", type: "neutral" }] },
  { label: "Best for resale value", cells: [{ text: "Highest", type: "positive" }, { text: "High", type: "positive" }, { text: "Lower", type: "neutral" }, { text: "Lower–Moderate", type: "neutral" }] },
];

const callouts = [
  { heading: "Why engineered wood resists warping", body: "Wood moves far more across the grain than along it. In solid hardwood, every board moves the same direction, so that movement adds up across the floor. Engineered wood layers its core with each grain running perpendicular to the one below — the same logic as plywood — so each layer restrains the next and the finished floor moves dramatically less." },
  { heading: "SPC vs. WPC vinyl cores", body: "SPC (stone plastic composite) is a dense, rigid core — firmer underfoot and highly resistant to furniture dents. WPC (wood plastic composite) uses a foamed core — softer, quieter, and warmer underfoot, but less resistant to concentrated weight like chair legs or heels." },
  { heading: "Installation at a glance", body: "Hardwood is nailed or stapled to a wood subfloor. Engineered wood can be nailed, glued, or floated depending on the subfloor. Laminate almost always floats as a single interlocking layer. Vinyl can float, be glued down, or — in peel-and-stick form — self-adhere directly to the subfloor." },
  { heading: "Maintenance and lifespan", body: "Hardwood and engineered wood need regular sweeping and occasional refinishing to stay ahead of wear. Laminate and vinyl need only sweeping and damp mopping, with no refinishing possible — when the surface wears through, the plank is replaced rather than restored." },
];

function TableCell({ cell, isAlt }: { cell: Cell; isAlt: boolean }) {
  const bg = isAlt ? "bg-[#F3EDE3]" : "bg-[#FFFDFA]";
  return (
    <td className={`${bg} px-4 py-4 text-[13px] leading-snug border-b border-[#DDD4C6] align-top`}>
      {cell.type === "positive" && cell.text !== "No" ? (
        <span className="flex items-start gap-1.5"><CheckMark /><span className="text-charcoal">{cell.text}</span></span>
      ) : cell.type === "warning" ? (
        <span className="text-red font-medium">{cell.text}</span>
      ) : (
        <span className="text-charcoal/70">{cell.text}</span>
      )}
    </td>
  );
}

export default function BuyersGuidePage() {
  return (
    <div className="pb-[72px] lg:pb-0">
      <JsonLd data={[breadcrumbJsonLd(items), articleJsonLd]} />
      <Breadcrumbs items={items} />

      {/* Hero */}
      <section className="bg-ivory pt-8 pb-20">
        <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="font-sans text-[10px] font-bold text-walnut uppercase tracking-widest mb-5">Buyer&rsquo;s Guide</p>
            <h1 className="font-serif text-[38px] lg:text-[56px] font-bold text-charcoal leading-[1.06] mb-5">Find the Right Flooring for Your Property</h1>
            <p className="font-sans text-base lg:text-[17px] text-[#111D27] leading-relaxed max-w-[56ch] mb-8">Compare hardwood, engineered wood, laminate, and vinyl based on appearance, durability, moisture exposure, maintenance, lifestyle, installation requirements, and budget.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="inline-block bg-red text-white px-7 py-4 rounded-[2px] font-sans text-[15px] font-bold hover:bg-red-dark transition-colors text-center">Request a Free Estimate</Link>
              <Link href="/contact" className="inline-block border-[1.5px] border-charcoal text-charcoal px-7 py-4 rounded-[2px] font-sans text-[15px] font-bold hover:bg-charcoal/5 transition-colors text-center">Visit Our Showroom</Link>
            </div>
          </div>
          <div className="flex items-center justify-center py-4 lg:py-0"><div className="w-full max-w-[360px]"><HeroIllustration /></div></div>
        </div>
      </section>

      {/* Comparison cards */}
      <section className="bg-subtle border-t border-border py-20">
        <div className="max-w-[1180px] mx-auto px-6">
          <p className="font-sans text-[10px] font-bold text-walnut uppercase tracking-widest mb-4">Material Overview</p>
          <h2 className="font-serif text-[30px] lg:text-[40px] font-bold text-charcoal leading-tight mb-12">Four Materials, Four Different Answers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {cards.map(({ label, title, desc, bestFor, facts, Illustration }) => (
              <article key={title} className="bg-[#FFFDFA] border border-[#DDD4C6] rounded-[3px] p-6 flex flex-col">
                <p className="font-sans text-[9px] font-bold text-walnut uppercase tracking-widest mb-5">{label}</p>
                <div className="mb-6 flex items-center justify-center h-[100px]"><Illustration /></div>
                <h3 className="font-serif text-[20px] font-bold text-charcoal mb-3 leading-tight">{title}</h3>
                <p className="font-sans text-[13px] text-[#111D27] leading-relaxed mb-5 flex-1">{desc}</p>
                <div className="mb-5"><span className="inline-block font-sans text-[11px] font-semibold text-[#6B4423] border border-[#C89B62] px-2.5 py-1 rounded-[2px]">Best for: {bestFor}</span></div>
                <ul className="flex flex-col gap-1.5 border-t border-[#DDD4C6] pt-4">
                  {facts.map((f) => <li key={f} className="font-sans text-[12px] text-charcoal/55 flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#C89B62] shrink-0" aria-hidden="true" />{f}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-ivory border-t border-border py-20">
        <div className="max-w-[1180px] mx-auto px-6">
          <p className="font-sans text-[10px] font-bold text-walnut uppercase tracking-widest mb-4">Side-by-Side</p>
          <h2 className="font-serif text-[30px] lg:text-[40px] font-bold text-charcoal leading-tight mb-10">How the Materials Compare</h2>
          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full min-w-[600px] border-collapse text-left">
              <thead>
                <tr className="bg-charcoal">
                  <th className="px-4 py-4 font-sans text-[12px] font-semibold text-ivory/70 uppercase tracking-wide border-b border-charcoal w-[22%]">Feature</th>
                  {["Hardwood", "Engineered Wood", "Laminate", "Vinyl (LVP/LVT)"].map((col) => <th key={col} className="px-4 py-4 font-sans text-[13px] font-bold text-[#FFFDFA] border-b border-charcoal">{col}</th>)}
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, ri) => {
                  const isAlt = ri % 2 === 1;
                  const rowBg = isAlt ? "bg-[#F3EDE3]" : "bg-[#FFFDFA]";
                  return (
                    <tr key={row.label}>
                      <td className={`${rowBg} px-4 py-4 font-sans text-[13px] font-semibold text-charcoal border-b border-[#DDD4C6]`}>{row.label}</td>
                      {row.cells.map((cell, ci) => <TableCell key={ci} cell={cell} isAlt={isAlt} />)}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Educational callouts */}
      <section className="bg-subtle border-t border-border py-20">
        <div className="max-w-[1180px] mx-auto px-6">
          <p className="font-sans text-[10px] font-bold text-walnut uppercase tracking-widest mb-4">Technical Context</p>
          <h2 className="font-serif text-[30px] lg:text-[40px] font-bold text-charcoal leading-tight mb-10">What the Specs Actually Mean</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {callouts.map(({ heading, body }) => (
              <div key={heading} className="bg-[#F1E4D2] border-l-[3px] border-[#C89B62] px-7 py-6 rounded-r-[2px]">
                <h3 className="font-serif text-[18px] font-bold text-charcoal mb-3 leading-snug">{heading}</h3>
                <p className="font-sans text-[14px] text-[#111D27] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-charcoal py-24">
        <div className="max-w-[720px] mx-auto px-6 text-center">
          <h2 className="font-serif text-[28px] lg:text-[44px] font-bold text-ivory leading-tight mb-5">Still Not Sure Which Flooring Is Right for You?</h2>
          <p className="font-sans text-base text-[#E4DED4] leading-relaxed mb-9">Visit our Burbank showroom or schedule a project consultation. We&rsquo;ll help you compare suitable options based on your property, lifestyle, and budget.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="inline-block bg-red text-white px-7 py-4 rounded-[2px] font-sans text-[15px] font-bold hover:bg-red-dark transition-colors text-center">Schedule a Consultation</Link>
            <a href="tel:+18185150009" className="inline-block bg-red text-white px-7 py-4 rounded-[2px] font-sans text-[15px] font-bold hover:bg-red-dark transition-colors text-center">Call Now — (818) 515-0009</a>
          </div>
        </div>
      </section>
    </div>
  );
}
