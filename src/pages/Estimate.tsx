import { useState } from 'react';

type Form = {
  firstName: string; lastName: string; phone: string; email: string;
  address: string; propertyType: string; service: string; sqft: string;
  material: string; timeline: string; contactMethod: string; notes: string;
};
const init: Form = {
  firstName: '', lastName: '', phone: '', email: '', address: '',
  propertyType: '', service: '', sqft: '', material: '', timeline: '',
  contactMethod: 'phone', notes: '',
};

const inputCls = 'w-full border border-divider bg-warm-white px-4 py-3 rounded-[2px] font-sans text-[14px] text-brown placeholder:text-brown/30 focus:outline-none focus:border-oak transition-colors';
const labelCls = 'font-sans text-[11px] font-semibold text-brown/45 uppercase tracking-wide block mb-2';
const selectCls = inputCls;

export default function Estimate() {
  const [form, setForm] = useState<Form>(init);
  const [done, setDone] = useState(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  return (
    <div className="pb-[72px] lg:pb-0">
      <section className="pt-32 pb-[72px] bg-charcoal">
        <div className="max-w-[1180px] mx-auto px-6">
          <p className="font-sans text-[11px] font-semibold text-light-oak uppercase tracking-wider mb-4">Get started</p>
          <h1 className="font-serif text-[36px] lg:text-[52px] font-semibold text-warm-white leading-[1.08] mb-4">Request a Free Estimate</h1>
          <p className="font-sans text-base text-warm-white/50 max-w-[52ch]">
            Tell us about your project and we'll follow up within one business day with a professional estimate. No pressure, no obligation.
          </p>
        </div>
      </section>

      <section className="bg-warm-white py-[88px]">
        <div className="max-w-[860px] mx-auto px-6">
          {done ? (
            <div className="bg-cream border border-divider rounded-[3px] p-12 text-center">
              <div className="w-12 h-12 rounded-full bg-charcoal/10 flex items-center justify-center mx-auto mb-6">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2B1D16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
              <h2 className="font-serif text-[28px] font-semibold text-walnut mb-3">Thank you, {form.firstName}.</h2>
              <p className="font-sans text-[15px] text-brown/60 leading-relaxed mb-8 max-w-[44ch] mx-auto">
                Your estimate request has been received. We'll follow up within one business day via your preferred contact method.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <a href="tel:+18185150009" className="bg-charcoal text-warm-white px-7 py-3.5 rounded-[2px] font-sans font-semibold text-[14px] hover:bg-espresso transition-colors">Call (818) 515-0009</a>
                <button onClick={() => { setDone(false); setForm(init); }} className="border border-divider text-brown/45 px-7 py-3.5 rounded-[2px] font-sans text-[14px] hover:border-walnut hover:text-walnut transition-colors">Submit Another Request</button>
              </div>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="bg-cream border border-divider rounded-[3px] p-8 flex flex-col gap-8">

              {/* Contact Info */}
              <div>
                <h2 className="font-sans text-[13px] font-semibold text-walnut uppercase tracking-wider mb-5 pb-3 border-b border-divider">Contact Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>First Name *</label>
                    <input type="text" name="firstName" required value={form.firstName} onChange={onChange} placeholder="First name" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Last Name *</label>
                    <input type="text" name="lastName" required value={form.lastName} onChange={onChange} placeholder="Last name" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Phone *</label>
                    <input type="tel" name="phone" required value={form.phone} onChange={onChange} placeholder="(818) 000-0000" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Email</label>
                    <input type="email" name="email" value={form.email} onChange={onChange} placeholder="your@email.com" className={inputCls} />
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelCls}>Project Address</label>
                    <input type="text" name="address" value={form.address} onChange={onChange} placeholder="1234 Main St, Burbank, CA" className={inputCls} />
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div>
                <h2 className="font-sans text-[13px] font-semibold text-walnut uppercase tracking-wider mb-5 pb-3 border-b border-divider">Project Details</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Property Type</label>
                    <select name="propertyType" value={form.propertyType} onChange={onChange} className={selectCls}>
                      <option value="">Select one</option>
                      <option>Residential Home</option>
                      <option>Condo / Apartment</option>
                      <option>Rental Property</option>
                      <option>Commercial Space</option>
                      <option>Office</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>Service Needed</label>
                    <select name="service" value={form.service} onChange={onChange} className={selectCls}>
                      <option value="">Select one</option>
                      <option>Hardwood Flooring</option>
                      <option>Engineered Wood</option>
                      <option>Luxury Vinyl Plank</option>
                      <option>Laminate Flooring</option>
                      <option>Tile Flooring</option>
                      <option>Carpet</option>
                      <option>Baseboards / Molding</option>
                      <option>Crown Molding</option>
                      <option>Floor Removal & Preparation</option>
                      <option>Full Installation</option>
                      <option>Not Sure Yet</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>Approx. Square Footage</label>
                    <input type="text" name="sqft" value={form.sqft} onChange={onChange} placeholder="e.g. 400 sq ft" className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Preferred Material</label>
                    <select name="material" value={form.material} onChange={onChange} className={selectCls}>
                      <option value="">Select one</option>
                      <option>Solid Hardwood</option>
                      <option>Engineered Hardwood</option>
                      <option>Luxury Vinyl Plank</option>
                      <option>Laminate</option>
                      <option>Tile</option>
                      <option>Carpet</option>
                      <option>Not Sure</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelCls}>Desired Timeline</label>
                    <select name="timeline" value={form.timeline} onChange={onChange} className={selectCls}>
                      <option value="">Select one</option>
                      <option>As soon as possible</option>
                      <option>Within 1 month</option>
                      <option>1–3 months</option>
                      <option>3–6 months</option>
                      <option>Planning / not yet decided</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div>
                <h2 className="font-sans text-[13px] font-semibold text-walnut uppercase tracking-wider mb-5 pb-3 border-b border-divider">Project Description</h2>
                <div>
                  <label className={labelCls}>Tell Us About Your Project</label>
                  <textarea name="notes" value={form.notes} onChange={onChange} rows={5} placeholder="Describe your project — room sizes, current flooring, specific questions, or anything else that would help us prepare an accurate estimate..." className={inputCls + ' resize-none'} />
                </div>
              </div>

              {/* Contact Method */}
              <div>
                <label className={labelCls}>Preferred Contact Method</label>
                <div className="flex gap-6 flex-wrap">
                  {[{ v: 'phone', l: 'Phone call' }, { v: 'text', l: 'Text message' }, { v: 'email', l: 'Email' }].map((o) => (
                    <label key={o.v} className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="contactMethod" value={o.v} checked={form.contactMethod === o.v} onChange={onChange} className="accent-oak" />
                      <span className="font-sans text-[13px] text-brown/65">{o.l}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <div>
                <button type="submit" className="w-full bg-charcoal text-warm-white py-4 rounded-[2px] font-sans font-semibold text-[15px] hover:bg-espresso transition-colors">
                  Request My Free Estimate
                </button>
                <p className="font-sans text-[12px] text-brown/30 text-center mt-3">We follow up within one business day. No spam, no pressure.</p>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Contact strip */}
      <section className="bg-cream border-t border-divider py-[56px]">
        <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            { label: 'Phone', val: '(818) 515-0009', href: 'tel:+18185150009' },
            { label: 'Email', val: 'hello@USFlooring.LA', href: 'mailto:hello@USFlooring.LA' },
            { label: 'Showroom', val: '1508 W Burbank Blvd, Burbank', href: undefined },
          ].map((c) => (
            <div key={c.label}>
              <p className="font-sans text-[11px] font-semibold text-oak uppercase tracking-wider mb-2">{c.label}</p>
              {c.href ? (
                <a href={c.href} className="font-sans text-[14px] text-walnut hover:text-nat-walnut transition-colors font-medium">{c.val}</a>
              ) : (
                <p className="font-sans text-[14px] text-brown/55">{c.val}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
