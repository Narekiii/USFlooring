"use client";

import Link from "next/link";
import { useEffect, useRef, type ReactNode } from "react";
import { trackEvent } from "../lib/analytics";

/**
 * A link that fires a GA4 event on click, then behaves like a normal link.
 * Internal routes use next/link; tel:, mailto: and external URLs use a plain <a>.
 */
export function TrackedLink({ href, event, className, children, external }: { href: string; event: string; className?: string; children: ReactNode; external?: boolean }) {
  const handleClick = () => trackEvent(event);
  const isExternalish = external || href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http");
  if (isExternalish) {
    return (
      <a href={href} className={className} onClick={handleClick} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}

/** Fires a GA4 event once, the first time its wrapped content scrolls into view. */
export function ViewTracker({ event, children, className }: { event: string; children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const fired = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !fired.current) {
          fired.current = true;
          trackEvent(event);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [event]);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
