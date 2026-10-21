import type { Metadata } from "next";
import { JsonLd, businessJsonLd } from "../ui/json-ld";
import Breadcrumbs, { breadcrumbJsonLd } from "../ui/breadcrumbs";
import { SITE_URL } from "../lib/business";
import GalleryClient from "./gallery-client";

export const metadata: Metadata = {
  title: "Flooring Project Gallery | US Flooring Burbank",
  description:
    "View hardwood, laminate, luxury vinyl, molding and flooring installation projects by US Flooring & Molding in Burbank and greater Los Angeles.",
  alternates: { canonical: `${SITE_URL}/gallery` },
  openGraph: {
    title: "Flooring Project Gallery | Burbank & Los Angeles",
    description:
      "View hardwood, laminate, luxury vinyl, molding and flooring installation projects by US Flooring & Molding in Burbank and greater Los Angeles.",
    url: `${SITE_URL}/gallery`,
    images: [{ url: "/og-image.jpg", alt: "US Flooring & Molding" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flooring Project Gallery | Burbank & Los Angeles",
    description:
      "View hardwood, laminate, luxury vinyl, molding and flooring installation projects by US Flooring & Molding in Burbank and greater Los Angeles.",
    images: ["/og-image.jpg"],
  },
};

const crumbs = [{ label: "Home", href: "/" }, { label: "Gallery" }];

const photos = [
  {
    src: "/hardwood-floor-install-wide.jpg",
    largeSrc: "/hardwood-floor-install-wide.jpg",
    alt: "Oak hardwood flooring installation in a bright room",
    caption: "Premium oak hardwood going in — straight runs with the underlayment still taped down.",
    categories: ["hardwood", "installation"],
  },
  {
    src: "/subfloor-prep.jpg",
    largeSrc: "/subfloor-prep.jpg",
    alt: "Crew member grinding and prepping a concrete subfloor",
    caption: "Subfloor prep is where a lasting floor starts — grinding the slab flat and dust-free before material goes down.",
    categories: ["installation"],
  },
  {
    src: "/material-staging-room.jpg",
    largeSrc: "/material-staging-room.jpg",
    alt: "Flooring materials and tools staged in a room before installation",
    caption: "Material staged and ready — flooring product cut to size before the crew lays it.",
    categories: ["installation"],
  },
  {
    src: "/hardwood-install-tools.jpg",
    largeSrc: "/hardwood-install-tools.jpg",
    alt: "Hardwood flooring installation with saws and trim staged",
    caption: "Mid-install: premium oak hardwood down, trim and baseboards being cut to fit.",
    categories: ["hardwood", "moldings", "installation"],
  },
  {
    src: "/material-delivery.jpg",
    largeSrc: "/material-delivery.jpg",
    alt: "Forklift unloading molding and trim material from a delivery truck",
    caption: "A fresh delivery of molding and trim material being unloaded at our Burbank location.",
    categories: ["moldings", "installation"],
  },
  {
    src: "/commercial-project-exterior.jpg",
    largeSrc: "/commercial-project-exterior.jpg",
    alt: "US Flooring van parked outside a multi-story building under construction",
    caption: "On site at one of our larger commercial projects across Los Angeles.",
    categories: ["installation"],
  },
  {
    src: "/vinyl-living-room-finished.jpg",
    largeSrc: "/vinyl-living-room-finished.jpg",
    alt: "Finished wood-look vinyl flooring in an open living and dining area",
    caption: "A finished wood-look vinyl floor ties together an open living and dining space.",
    categories: ["vinyl", "laminate", "residential"],
  },
  {
    src: "/vinyl-hallway-finished.jpg",
    largeSrc: "/vinyl-hallway-finished.jpg",
    alt: "Finished vinyl plank flooring in a hallway",
    caption: "Wood-look vinyl plank flooring carried through a hallway for a clean, continuous look.",
    categories: ["vinyl", "laminate", "residential"],
  },
  {
    src: "/staircase-renovation.jpg",
    largeSrc: "/staircase-renovation.jpg",
    alt: "Staircase mid-renovation with materials and tools staged",
    caption: "A staircase mid-renovation, staged with trim and tools before the next phase of the install.",
    categories: ["installation", "moldings"],
  },
  {
    src: "/floor-removal-crew.jpg",
    largeSrc: "/floor-removal-crew.jpg",
    alt: "Crew removing old flooring with a floor stripping machine",
    caption: "Our crew stripping out the old floor — the unglamorous work that happens before the new one goes in.",
    categories: ["installation"],
  },
] as const;

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE_URL}/gallery#collection`,
  url: `${SITE_URL}/gallery`,
  name: "Flooring Project Gallery | Burbank & Los Angeles",
  description:
    "View hardwood, laminate, luxury vinyl, molding and flooring installation projects by US Flooring & Molding.",
  about: { "@id": `${SITE_URL}/#business` },
  image: photos.map((photo) => ({
    "@type": "ImageObject",
    contentUrl: photo.src,
    caption: photo.caption,
  })),
};

export default function GalleryPage() {
  return (
    <main className="pb-20">
      <JsonLd data={[collectionJsonLd, breadcrumbJsonLd(crumbs), businessJsonLd()]} />
      <Breadcrumbs items={crumbs} />
      <section className="section bg-subtle">
        <div className="container">
          <p className="eyebrow">Gallery</p>
          <h1>Flooring Installation Projects in Burbank and Los Angeles</h1>
          <p className="lead max-w-2xl">
            A sample of the hardwood, laminate, luxury vinyl, and molding work we&apos;ve installed for homeowners across Burbank and the greater Los Angeles area. Every project starts with a free in-home or showroom consultation, so you can see and feel a material before committing to it.
          </p>
        </div>
      </section>
      <GalleryClient photos={photos} />
      <section className="section bg-subtle">
        <div className="container text-center">
          <h2>Ready to Start Your Project?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-charcoal/70">
            Visit our Burbank showroom to see samples in person, or request a free estimate and we&apos;ll come to you.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="/contact" className="button">Request Free Estimate</a>
            <a href="tel:+18185150009" className="button">Call (818) 515-0009</a>
          </div>
        </div>
      </section>
    </main>
  );
}
