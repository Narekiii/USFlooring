import { useEffect } from 'react';
import { BUSINESS } from '@/lib/business';

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogImage?: string;
  jsonLd?: object | object[];
  robots?: string;
}

function setMeta(property: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function setJsonLd(id: string, data: object | object[]) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.id = id;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

function removeJsonLd(id: string) {
  document.getElementById(id)?.remove();
}

export default function SEO({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogUrl,
  ogImage = BUSINESS.ogImage,
  jsonLd,
  robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
}: SEOProps) {
  useEffect(() => {
    document.title = title;
    setMeta('description', description);
    setMeta('robots', robots);
    setLink('canonical', canonical);

    setMeta('og:type', 'website', 'property');
    setMeta('og:url', ogUrl ?? canonical, 'property');
    setMeta('og:title', ogTitle ?? title, 'property');
    setMeta('og:description', ogDescription ?? description, 'property');
    setMeta('og:image', ogImage, 'property');
    setMeta('og:image:secure_url', ogImage, 'property');
    setMeta('og:image:type', 'image/jpeg', 'property');
    setMeta('og:image:width', '1200', 'property');
    setMeta('og:image:height', '630', 'property');
    setMeta('og:image:alt', 'US Flooring & Molding Inc. flooring, molding, and installation services in Burbank, California', 'property');

    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', ogTitle ?? title);
    setMeta('twitter:description', ogDescription ?? description);
    setMeta('twitter:image', ogImage);

    if (jsonLd) {
      setJsonLd('page-jsonld', jsonLd);
    } else {
      removeJsonLd('page-jsonld');
    }
  }, [title, description, canonical, ogTitle, ogDescription, ogUrl, ogImage, jsonLd, robots]);

  return null;
}
