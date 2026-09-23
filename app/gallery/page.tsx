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
    categories: ["hardwood", "residential"],
  },
  {
    src: "https://images.unsplash.com/photo-1608752503578-52f35965e3d9?w=800&h=600&fit=crop&auto=format",
    largeSrc: "https://images.unsplash.com/photo-1608752503578-52f35965e3d9?w=1200&h=900&fit=crop&auto=format",
    alt: "Rich oak hardwood installation",
    categories: ["hardwood", "residential"],
  },
  {
    src: "https://images.unsplash.com/photo-1787625349019-2ad6b4cadc87?w=800&h=600&fit=crop&auto=format",
    largeSrc: "https://images.unsplash.com/photo-1787625349019-2ad6b4cadc87?w=1200&h=900&fit=crop&auto=format",
    alt: "Wide-plank laminate in a modern home",
    categories: ["laminate", "residential"],
  },
  {
    src: "https://images.unsplash.com/photo-1695191388218-f6259600223f?w=800&h=600&fit=crop&auto=format",
    largeSrc: "https://images.unsplash.com/photo-1695191388218-f6259600223f?w=1200&h=900&fit=crop&auto=format",
    alt: "Luxury vinyl in a kitchen",
    categories: ["vinyl", "residential"],
  },
  {
    src: "https://images.unsplash.com/photo-1655457397686-4dd23e78a918?w=800&h=600&fit=crop&auto=format",
    largeSrc: "https://images.unsplash.com/photo-1655457397686-4dd23e78a918?w=1200&h=900&fit=crop&auto=format",
    alt: "Crisp white baseboard molding",
    categories: ["moldings"],
  },
  {
    src: "https://images.unsplash.com/photo-1622936063167-e32e9f955438?w=800&h=600&fit=crop&auto=format",
    largeSrc: "https://images.unsplash.com/photo-1622936063167-e32e9f955438?w=1200&h=900&fit=crop&auto=format",
    alt: "Professional flooring installation in progress",
    categories: ["installation"],
  },
  {
    src: "https://images.unsplash.com/photo-1643903032976-8c0d0556a8ea?w=800&h=600&fit=crop&auto=format",
    largeSrc: "https://images.unsplash.com/photo-1643903032976-8c0d0556a8ea?w=1200&h=900&fit=crop&auto=format",
    alt: "Flooring showroom display",
    categories: ["installation"],
  },
  {
    src: "https://images.unsplash.com/photo-1627898778748-6e3e0673d5a0?w=800&h=600&fit=crop&auto=format",
    largeSrc: "https://images.unsplash.com/photo-1627898778748-6e3e0673d5a0?w=1200&h=900&fit=crop&auto=format",
    alt: "Herringbone hardwood pattern",
    categories: ["hardwood", "residential"],
  },
  {
    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop&auto=format",
    largeSrc: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&h=900&fit=crop&auto=format",
    alt: "Clean vinyl bathroom floor",
    categories: ["vinyl", "residential"],
  },
  {
    src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop&auto=format",
    largeSrc: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&h=900&fit=crop&auto=format",
    alt: "Hardwood stairs and landing",
    categories: ["hardwood", "residential"],
  },
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&auto=format",
    largeSrc: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=900&fit=crop&auto=format",
    alt: "Bright living room with light floors",
    categories: ["laminate", "residential"],
  },
  {
    src: "https://images.unsplash.com/photo-1716969006776-e3cf57cf6e4c?w=800&h=600&fit=crop&auto=format",
    largeSrc: "https://images.unsplash.com/photo-1716969006776-e3cf57cf6e4c?w=1200&h=900&fit=crop&auto=format",
    alt: "Dark walnut hardwood in a dining area",
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
    caption: photo.alt,
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
            Explore flooring styles, materials, patterns, and installation inspiration. Contact our team to discuss which options are suitable for your property.
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
