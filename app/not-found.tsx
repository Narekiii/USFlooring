import Link from "next/link";

const primaryServices = [
  ["Hardwood Flooring", "/hardwood-flooring-burbank"],
  ["Laminate Flooring", "/laminate-flooring-burbank"],
  ["Luxury Vinyl Flooring", "/luxury-vinyl-flooring-burbank"],
  ["Flooring Installation", "/flooring-installation-burbank"],
  ["Molding & Baseboard Installation", "/molding-baseboard-installation-burbank"],
] as const;

export default function NotFound() {
  return (
    <main className="section container" aria-labelledby="not-found-title">
      <meta name="robots" content="noindex" />
      <div className="mx-auto max-w-3xl py-16 text-center">
        <p className="eyebrow">404</p>
        <h1 id="not-found-title">Page Not Found</h1>
        <p className="lead mx-auto max-w-2xl">
          We couldn&apos;t find the page you were looking for. Explore our flooring products and services, or contact us for help with your project.
        </p>

        <nav aria-label="Helpful links" className="mt-10 text-left">
          <div className="grid gap-5 sm:grid-cols-2">
            <Link href="/" className="button justify-center">
              Visit the Homepage
            </Link>
            <Link href="/products" className="button button-secondary justify-center">
              Browse Products
            </Link>
          </div>

          <section className="mt-12" aria-labelledby="services-title">
            <h2 id="services-title" className="text-2xl">
              Primary Flooring Services
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {primaryServices.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-link">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-10">
            <Link href="/contact" className="text-link">
              Contact US Flooring &amp; Molding
            </Link>
          </div>
        </nav>
      </div>
    </main>
  );
}
