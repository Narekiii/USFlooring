"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Photo = {
  src: string;
  largeSrc: string;
  alt: string;
  caption: string;
  categories: readonly string[];
};

const categories = ["all", "hardwood", "laminate", "vinyl", "moldings", "installation"] as const;

export default function GalleryClient({ photos }: { photos: readonly Photo[] }) {
  const [active, setActive] = useState<(typeof categories)[number]>("all");
  const [selected, setSelected] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const shown = active === "all" ? photos : photos.filter((photo) => photo.categories.includes(active));

  useEffect(() => {
    if (selected === null) return;
    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
      if (event.key === "ArrowLeft" && selected > 0) setSelected(selected - 1);
      if (event.key === "ArrowRight" && selected < photos.length - 1) setSelected(selected + 1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [photos.length, selected]);

  return (
    <>
      <section className="border-b border-border bg-ivory" aria-label="Gallery filters">
        <div className="container flex flex-wrap gap-2 py-4">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={active === category}
              className={`rounded px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors ${active === category ? "bg-charcoal text-ivory" : "bg-subtle text-charcoal/70 hover:bg-border"}`}
            >
              {category === "all" ? "All Projects" : category}
            </button>
          ))}
        </div>
      </section>
      <section className="section container" aria-label="Flooring project gallery">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((photo) => {
            const index = photos.indexOf(photo);
            return (
              <button
                key={photo.src}
                type="button"
                onClick={() => setSelected(index)}
                className="group overflow-hidden rounded border border-border bg-subtle text-left focus:outline-none focus:ring-2 focus:ring-walnut focus:ring-offset-2"
                aria-label={`View larger image: ${photo.alt}`}
              >
                <Image src={photo.src} alt={photo.alt} width={800} height={600} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" priority={index < 3} />
                <p className="px-4 py-3 text-sm leading-snug text-charcoal/70">{photo.caption}</p>
              </button>
            );
          })}
        </div>
        {shown.length === 0 && <p className="py-16 text-center text-charcoal/60">No photos in this category yet.</p>}
      </section>
      {selected !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/90 p-4" role="dialog" aria-modal="true" aria-label="Gallery image viewer" onClick={() => setSelected(null)}>
          <div className="relative w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <Image src={photos[selected].largeSrc} alt={photos[selected].alt} width={1200} height={900} sizes="100vw" className="h-auto w-full rounded object-contain" priority />
            <p className="mt-3 text-center text-sm text-ivory/80">{photos[selected].caption}</p>
            <button ref={closeButtonRef} type="button" onClick={() => setSelected(null)} className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-charcoal/80 text-2xl text-ivory hover:bg-charcoal focus:outline-none focus:ring-2 focus:ring-ivory" aria-label="Close image viewer">×</button>
            {selected > 0 && <button type="button" onClick={() => setSelected(selected - 1)} className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-charcoal/80 text-xl text-ivory hover:bg-charcoal focus:outline-none focus:ring-2 focus:ring-ivory" aria-label="Previous image">←</button>}
            {selected < photos.length - 1 && <button type="button" onClick={() => setSelected(selected + 1)} className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-charcoal/80 text-xl text-ivory hover:bg-charcoal focus:outline-none focus:ring-2 focus:ring-ivory" aria-label="Next image">→</button>}
          </div>
        </div>
      )}
    </>
  );
}
