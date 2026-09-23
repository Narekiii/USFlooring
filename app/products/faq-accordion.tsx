"use client";

import { useState } from "react";

export default function FaqAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <div className="flex flex-col divide-y divide-sand">
      {faqs.map((faq, i) => (
        <div key={i}>
          <button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i} className="w-full text-left py-5 flex items-start justify-between gap-4 group">
            <h3 className="font-sans text-[15px] font-semibold text-charcoal leading-snug group-hover:text-walnut transition-colors">{faq.q}</h3>
            <span className="shrink-0 font-sans text-[18px] text-charcoal/30 mt-0.5" aria-hidden="true">{openFaq === i ? "\u2212" : "+"}</span>
          </button>
          {openFaq === i && <p className="font-sans text-[14px] text-charcoal/60 leading-relaxed pb-5">{faq.a}</p>}
        </div>
      ))}
    </div>
  );
}
