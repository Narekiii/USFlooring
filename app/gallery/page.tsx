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
    src: "https://images.unsplash.com/photo-1773098587044-0c830e398428?w=800&h=600&fit=crop&auto=format",
    largeSrc: "https://images.unsplash.com/photo-1773098587044-0c830e398428?w=1200&h=900&fit=crop&auto=format",
    alt: "Hardwood floor in a warm living room",
    caption: "A rich, warm-toned hardwood floor brings natural texture and depth to a sunlit living room.",
    categories: ["hardwood", "residential"],
  },
  {
    src: "https://images.unsplash.com/photo-1608752503578-52f35965e3d9?w=800&h=600&fit=crop&auto=format",
    largeSrc: "https://images.unsplash.com/photo-1608752503578-52f35965e3d9?w=1200&h=900&fit=crop&auto=format",
    alt: "Rich oak hardwood installation",
    caption: "Classic oak hardwood planks installed edge-to-edge for a clean, timeless look.",
    categories: ["hardwood", "residential"],
  },
  {
    src: "https://images.unsplash.com/photo-1787625349019-2ad6b4cadc87?w=800&h=600&fit=crop&auto=format",
    largeSrc: "https://images.unsplash.com/photo-1787625349019-2ad6b4cadc87?w=1200&h=900&fit=crop&auto=format",
    alt: "Wide-plank laminate in a modern home",
    caption: "Wide-plank laminate flooring pairs a modern aesthetic with everyday durability.",
    categories: ["laminate", "residential"],
  },
  {
    src: "https://images.unsplash.com/photo-1695191388218-f6259600223f?w=800&h=600&fit=crop&auto=format",
    largeSrc: "https://images.unsplash.com/photo-1695191388218-f6259600223f?w=1200&h=900&fit=crop&auto=format",
    alt: "Luxury vinyl in a kitchen",
    caption: "Waterproof luxury vinyl plank flooring built to handle the daily wear of a busy kitchen.",
    categories: ["vinyl", "residential"],
  },
  {
    src: "https://images.unsplash.com/photo-1655457397686-4dd23e78a918?w=800&h=600&fit=crop&auto=format",
    largeSrc: "https://images.unsplash.com/photo-1655457397686-4dd23e78a918?w=1200&h=900&fit=crop&auto=format",
    alt: "Crisp white baseboard molding",
    caption: "Crisp white baseboard molding finishes the transition between wall and floor cleanly.",
    categories: ["moldings"],
  },
  {
    src: "https://images.unsplash.com/photo-1622936063167-e32e9f955438?w=800&h=600&fit=crop&auto=format",
    largeSrc: "https://images.unsplash.com/photo-1622936063167-e32e9f955438?w=1200&h=900&fit=crop&auto=format",
    alt: "Professional flooring installation in progress",
    caption: "Our installation crew at work — precision in the details you won't see once the floor is finished.",
    categories: ["installation"],
  },
  {
    src: "https://images.unsplash.com/photo-1643903032976-8c0d0556a8ea?w=800&h=600&fit=crop&auto=format",
    largeSrc: "https://images.unsplash.com/photo-1643903032976-8c0d0556a8ea?w=1200&h=900&fit=crop&auto=format",
    alt: "Flooring showroom display",
    caption: "A look at the range of samples available to compare in person at our Burbank showroom.",
    categories: ["installation"],
  },
  {
    src: "https://images.unsplash.com/photo-1627898778748-6e3e0673d5a0?w=800&h=600&fit=crop&auto=format",
    largeSrc: "https://images.unsplash.com/photo-1627898778748-6e3e0673d5a0?w=1200&h=900&fit=crop&auto=format",
    alt: "Herringbone hardwood pattern",
    caption: "A herringbone hardwood pattern adds visual interest without straying from a classic material.",
    categories: ["hardwood", "residential"],
  },
  {
    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop&auto=format",
    largeSrc: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&h=900&fit=crop&auto=format",
    alt: "Clean vinyl bathroom floor",
    caption: "Fully waterproof vinyl flooring, a practical choice for bathrooms and other moisture-prone rooms.",
    categories: ["vinyl", "residential"],
  },
  {
    src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop&auto=format",
    largeSrc: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&h=900&fit=crop&auto=format",
    alt: "Hardwood stairs and landing",
    caption: "Hardwood carried up the stairs and across the landing for one continuous, cohesive floor.",
    categories: ["hardwood", "residential"],
  },
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&auto=format",
    largeSrc: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop&auto=format",
    alt: "Bright living room with light floors",
    caption: "Light-toned laminate flooring keeps an open living room feeling bright throughout the day.",
    categories: ["laminate", "residential"],
  },
  {
    src: "https://images.unsplash.com/photo-1716969006776-e3cf57cf6e4c?w=800&h=600&fit=crop&auto=format",
    largeSrc: "https://images.unsplash.com/photo-1716969006776-e3cf57cf6e4c?w=1200&h=900&fit=crop&auto=format",
    alt: "Dark walnut hardwood in a dining area",
    caption: "Dark walnut hardwood grounds a dining area with a warmer, more formal feel.",
    categories: ["hardwood", "residential"],
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
