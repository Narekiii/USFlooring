import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Breadcrumb, { breadcrumbJsonLd } from '@/components/Breadcrumb';

const allPhotos = [
  { src: 'https://images.unsplash.com/photo-1773098587044-0c830e398428?w=800&h=600&fit=crop&auto=format', alt: 'Hardwood floor in a warm living room', cats: ['hardwood', 'residential'] },
  { src: 'https://images.unsplash.com/photo-1608752503578-52f35965e3d9?w=800&h=600&fit=crop&auto=format', alt: 'Rich oak hardwood installation', cats: ['hardwood', 'residential'] },
  { src: 'https://images.unsplash.com/photo-1787625349019-2ad6b4cadc87?w=800&h=600&fit=crop&auto=format', alt: 'Wide-plank laminate in a modern home', cats: ['laminate', 'residential'] },
  { src: 'https://images.unsplash.com/photo-1695191388218-f6259600223f?w=800&h=600&fit=crop&auto=format', alt: 'Luxury vinyl in a kitchen', cats: ['vinyl', 'residential'] },
  { src: 'https://images.unsplash.com/photo-1655457397686-4dd23e78a918?w=800&h=600&fit=crop&auto=format', alt: 'Crisp white baseboard molding', cats: ['moldings'] },
  { src: 'https://images.unsplash.com/photo-1622936063167-e32e9f955438?w=800&h=600&fit=crop&auto=format', alt: 'Professional flooring installation in progress', cats: ['installation'] },
  { src: 'https://images.unsplash.com/photo-1643903032976-8c0d0556a8ea?w=800&h=600&fit=crop&auto=format', alt: 'Flooring showroom display', cats: ['installation'] },
  { src: 'https://images.unsplash.com/photo-1627898778748-6e3e0673d5a0?w=800&h=600&fit=crop&auto=format', alt: 'Herringbone hardwood pattern', cats: ['hardwood', 'residential'] },
  { src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop&auto=format', alt: 'Clean vinyl bathroom floor', cats: ['vinyl', 'residential'] },
  { src: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop&auto=format', alt: 'Hardwood stairs and landing', cats: ['hardwood', 'residential'] },
  { src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop&auto=format', alt: 'Bright living room with light floors', cats: ['laminate', 'residential'] },
  { src: 'https://images.unsplash.com/photo-1716969006776-e3cf57cf6e4c?w=800&h=600&fit=crop&auto=format', alt: 'Dark walnut hardwood in a dining area', cats: ['hardwood', 'residential'] },
];

const categories = ['all', 'hardwood', 'laminate', 'vinyl', 'moldings', 'installation'];

const galleryCrumbs = [{ label: 'Home', href: '/' }, { label: 'Gallery' }];

export default function Gallery() {
  const [active, setActive] = useState('all');
  const [modal, setModal] = useState<number | null>(null);
  const shown = active === 'all' ? allPhotos : allPhotos.filter((p) => p.cats.includes(active));

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModal(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <div className="pb-[72px] lg:pb-0">
      <SEO
        title="Flooring Installation Projects in Los Angeles | US Flooring"
        description="View hardwood, laminate, luxury vinyl, molding, and flooring installation work from US Flooring & Molding Inc. in Burbank and greater Los Angeles."
        canonical="https://www.usflooring.la/gallery"
        ogTitle="Flooring Project Gallery | US Flooring & Molding"
        ogDescription="Explore flooring and molding projects from US Flooring & Molding Inc. serving Burbank and greater Los Angeles."
        ogUrl="https://www.usflooring.la/gallery"
        jsonLd={breadcrumbJsonLd(galleryCrumbs)}
      />
      <Breadcrumb crumbs={galleryCrumbs} />

      {/* Header */}
      <section className="pt-8 pb-12 bg-subtle">
        <div className="max-w-[1180px] mx-auto px-6">
          <p className="font-sans text-[11px] font-semibold text-walnut uppercase tracking-widest mb-4">Gallery</p>
          <h1 className="font-serif text-[40px] lg:text-[56px] font-semibold text-charcoal leading-[1.06] mb-4">
            Flooring Installation Projects in Burbank and Los Angeles
          </h1>
          <p className="font-sans text-base text-charcoal/55 leading-relaxed max-w-[560px]">
            Explore flooring styles, materials, patterns, and installation inspiration. Contact our team to discuss which options are suitable for your property.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-ivory border-b border-border sticky top-16 z-30">
        <div className="max-w-[1180px] mx-auto px-6 py-4 flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-sans text-[12px] font-bold uppercase tracking-wide px-4 py-2 rounded-[2px] transition-colors capitalize ${
                active === cat
                  ? 'bg-charcoal text-ivory'
                  : 'bg-subtle/40 text-charcoal/55 hover:bg-subtle hover:text-charcoal'
              }`}
            >
              {cat === 'all' ? 'All Projects' : cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="bg-ivory">
        <div className="max-w-[1180px] mx-auto px-6 py-12">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {shown.map((photo, i) => (
              <button
                key={photo.src}
                onClick={() => setModal(allPhotos.indexOf(photo))}
                className="break-inside-avoid w-full rounded-[3px] overflow-hidden group block"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading={i < 4 ? 'eager' : 'lazy'}
                />
              </button>
            ))}
          </div>
          {shown.length === 0 && (
            <div className="py-20 text-center font-sans text-charcoal/30 text-[15px]">No photos in this category yet.</div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {modal !== null && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/90 flex items-center justify-center p-4"
          onClick={() => setModal(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={allPhotos[modal].src.replace(/w=800&h=600/, 'w=1200&h=900')}
              alt={allPhotos[modal].alt}
              className="w-full h-auto rounded-[2px]"
            />
            <button
              onClick={() => setModal(null)}
              className="absolute top-3 right-3 w-9 h-9 bg-charcoal/70 text-ivory rounded-full flex items-center justify-center font-sans text-lg hover:bg-charcoal transition-colors"
              aria-label="Close"
            >
              ×
            </button>
            {modal > 0 && (
              <button
                onClick={() => setModal(modal - 1)}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-charcoal/70 text-ivory rounded-full flex items-center justify-center hover:bg-charcoal transition-colors"
                aria-label="Previous"
              >←</button>
            )}
            {modal < allPhotos.length - 1 && (
              <button
                onClick={() => setModal(modal + 1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-charcoal/70 text-ivory rounded-full flex items-center justify-center hover:bg-charcoal transition-colors"
                aria-label="Next"
              >→</button>
            )}
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="bg-subtle py-16 border-t border-border">
        <div className="max-w-[680px] mx-auto px-6 text-center">
          <h2 className="font-serif text-[28px] lg:text-[36px] font-semibold text-charcoal mb-4">Ready to Start Your Project?</h2>
          <p className="font-sans text-base text-charcoal/55 leading-relaxed mb-7">
            Visit our Burbank showroom to see samples in person, or request a free estimate and we'll come to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact" className="bg-red text-white px-7 py-4 rounded-[2px] font-sans text-[15px] font-bold hover:bg-red-dark transition-colors">
              Request Free Estimate
            </Link>
            <a href="tel:+18185150009" className="border-[1.5px] border-charcoal text-charcoal px-7 py-4 rounded-[2px] font-sans text-[15px] font-bold hover:bg-subtle/60 transition-colors">
              Call (818) 515-0009
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
