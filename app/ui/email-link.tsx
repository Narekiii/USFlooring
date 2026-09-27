"use client";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { BUSINESS } from "../lib/business";

const [USER, DOMAIN] = BUSINESS.email.split("@");

/**
 * Renders the business email as a real mailto: link, but keeps the raw
 * address out of the server-rendered page source — the href and visible
 * address are only assembled client-side after mount. This is what the
 * "plaintext email in page code" audit flag is about: harvester bots that
 * just fetch HTML never see a working address, while real visitors and
 * JS-rendering crawlers (Google, etc.) get a fully working link.
 * Pass `children` for custom link text (e.g. "Email Us"); omit it to show
 * the address itself.
 */
export default function EmailLink({ className, children }: { className?: string; children?: ReactNode }) {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  return (
    <a
      href={ready ? `mailto:${USER}@${DOMAIN}` : undefined}
      className={className}
      onClick={(e) => { if (!ready) e.preventDefault(); }}
    >
      {children ?? (ready ? `${USER}@${DOMAIN}` : `${USER} [at] ${DOMAIN}`)}
    </a>
  );
}
