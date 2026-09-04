import { Link } from 'react-router-dom';

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  crumbs: Crumb[];
}

export default function Breadcrumb({ crumbs }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="max-w-[1180px] mx-auto px-6 pt-24 pb-2">
      <ol className="flex items-center flex-wrap gap-1.5 font-sans text-[12px] text-charcoal/40">
        {crumbs.map((c, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden="true" className="text-charcoal/25">›</span>}
            {c.href ? (
              <Link to={c.href} className="hover:text-walnut transition-colors">
                {c.label}
              </Link>
            ) : (
              <span className="text-charcoal/65" aria-current="page">{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function breadcrumbJsonLd(crumbs: Crumb[], baseUrl = 'https://www.usflooring.la') {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      item: c.href ? `${baseUrl}${c.href}` : undefined,
    })),
  };
}
