"use client";

import { useState } from "react";

export type ComparisonRow = { label: string; wholesaler: string; installer: string; usFlooring: string };

/** Desktop: a plain table. Mobile: an accordion, one row per panel — avoids a cramped 4-column table on a narrow screen. */
export default function ComparisonTable({ rows }: { rows: ComparisonRow[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <div className="hidden md:block overflow-x-auto -mx-6 px-6">
        <table className="w-full min-w-[680px] border-collapse text-left">
          <thead>
            <tr className="bg-charcoal">
              <th className="px-4 py-4 font-sans text-[12px] font-semibold text-ivory/70 uppercase tracking-wide border-b border-charcoal w-[26%]">Project consideration</th>
              <th className="px-4 py-4 font-sans text-[13px] font-bold text-ivory/90 border-b border-charcoal">Material wholesaler</th>
              <th className="px-4 py-4 font-sans text-[13px] font-bold text-ivory/90 border-b border-charcoal">Independent installer</th>
              <th className="px-4 py-4 font-sans text-[13px] font-bold text-ivory border-b border-charcoal bg-navy">US Flooring</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => {
              const isAlt = ri % 2 === 1;
              const rowBg = isAlt ? "bg-subtle" : "bg-light";
              return (
                <tr key={row.label}>
                  <td className={`${rowBg} px-4 py-4 font-sans text-[13px] font-semibold text-charcoal border-b border-border`}>{row.label}</td>
                  <td className={`${rowBg} px-4 py-4 font-sans text-[13px] text-charcoal/60 border-b border-border align-top`}>{row.wholesaler}</td>
                  <td className={`${rowBg} px-4 py-4 font-sans text-[13px] text-charcoal/60 border-b border-border align-top`}>{row.installer}</td>
                  <td className={`${isAlt ? "bg-gold/15" : "bg-gold/10"} px-4 py-4 font-sans text-[13px] font-semibold text-charcoal border-b border-border align-top`}>{row.usFlooring}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="md:hidden flex flex-col divide-y divide-sand border-t border-b border-sand">
        {rows.map((row, i) => (
          <div key={row.label}>
            <button type="button" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} className="w-full text-left py-4 flex items-center justify-between gap-4 focus-visible:outline">
              <span className="font-sans text-[15px] font-semibold text-charcoal">{row.label}</span>
              <span className="shrink-0 font-sans text-[18px] text-charcoal/30" aria-hidden="true">{open === i ? "−" : "+"}</span>
            </button>
            {open === i && (
              <dl className="pb-5 grid gap-3">
                <div>
                  <dt className="font-sans text-[11px] font-bold text-charcoal/45 uppercase tracking-wide mb-0.5">Material wholesaler</dt>
                  <dd className="font-sans text-[14px] text-charcoal/70">{row.wholesaler}</dd>
                </div>
                <div>
                  <dt className="font-sans text-[11px] font-bold text-charcoal/45 uppercase tracking-wide mb-0.5">Independent installer</dt>
                  <dd className="font-sans text-[14px] text-charcoal/70">{row.installer}</dd>
                </div>
                <div className="bg-gold/10 rounded-lg px-3 py-2 -mx-1">
                  <dt className="font-sans text-[11px] font-bold text-walnut uppercase tracking-wide mb-0.5">US Flooring</dt>
                  <dd className="font-sans text-[14px] font-semibold text-charcoal">{row.usFlooring}</dd>
                </div>
              </dl>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
