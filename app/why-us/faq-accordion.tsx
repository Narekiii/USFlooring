"use client";

import { useState } from "react";
import { trackEvent } from "../lib/analytics";

export default function WhyUsFaqAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggle = (i: number) => {
    const next = openFaq === i ? null : i;
    setOpenFaq(next);
    if (next !== null) trackEvent("why_us_faq_open", { question: faqs[i].q });
  };
  return (
    <div className="flex flex-col divide-y divide-sand">
      {faqs.map((faq, i) => (
        <div key={faq.q}>
          <button type="button" onClick={() => toggle(i)} aria-expanded={openFaq === i} className="w-full text-left py-5 flex items-start justify-between gap-4 group focus-visible:outline">
            <h3 className="font-sans text-[16px] lg:text-[17px] font-semibold text-charcoal leading-snug group-hover:text-walnut transition-colors">{faq.q}</h3>
            <span className="shrink-0 font-sans text-[20px] text-charcoal/30 mt-0.5" aria-hidden="true">{openFaq === i ? "−" : "+"}</span>
          </button>
          {openFaq === i && <p className="font-sans text-[15px] lg:text-[16px] text-charcoal/65 leading-relaxed pb-5 max-w-[70ch]">{faq.a}</p>}
        </div>
      ))}
    </div>
  );
}
