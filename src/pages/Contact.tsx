import { useState } from 'react';

type FormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  projectType: string;
  flooringType: string;
  message: string;
  contact: string;
};

const init: FormData = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  projectType: '',
  flooringType: '',
  message: '',
  contact: 'phone',
};

const projectTypes = ['New Installation', 'Replacement / Renovation', 'Repair', 'Refinishing', 'Commercial Project', 'Other'];
const flooringTypes = ['Hardwood', 'Laminate', 'Luxury Vinyl (LVP/LVT)', 'Moldings & Trim', 'Not sure yet'];

export default function Contact() {
  const [form, setForm] = useState<FormData>(init);
  const [sent, setSent] = useState(false);

  const set = (k: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const labelCls = 'font-sans text-[12px] font-bold text-charcoal/60 uppercase tracking-wide block mb-1.5';
  const inputCls = 'w-full bg-ivory border border-sand rounded-[2px] px-4 py-3 font-sans text-[14px] text-charcoal placeholder:text-charcoal/25 focus:outline-none focus:border-walnut transition-colors';
  const selectCls = inputCls + ' appearance-none';

  return (
    <div className="pb-[72px] lg:pb-0">
      {/* Header */}
      <section className="pt-32 pb-12 bg-[#F0E9DC]">
        <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="font-sans text-[11px] font-bold text-walnut uppercase tracking-widest mb-4">Get in Touch</p>
            <h1 className="font-serif text-[40px] lg:text-[56px] font-bold text-charcoal leading-[1.06] mb-5">
              Let's Talk About Your Floor
            </h1>
            <p className="font-sans text-base text-charcoal/60 leading-relaxed mb-8">
              Call us, stop by, or fill out the form. You'll get a real answer from a real person — not a script, not a call center.
            </p>
            {/* Quick CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <a href="tel:+18185150009" className="flex items-center gap-3 bg-walnut text-ivory px-5 py-4 rounded-[2px] hover:bg-walnut-dark transition-colors group">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div>
                  <div className="font-sans text-[13px] font-bold">Call Now</div>
                  <div className="font-sans text-[12px] text-ivory/70">(818) 515-0009</div>
                </div>
              </a>
              <a href="https://www.google.com/maps/dir/?api=1&destination=1508+W+Burbank+Blvd+Burbank+CA+91506" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-ivory border border-sand px-5 py-4 rounded-[2px] hover:border-walnut/40 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B4A2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <div className="font-sans text-[13px] font-bold text-charcoal">Get Directions</div>
                  <div className="font-sans text-[12px] text-charcoal/40">1508 W Burbank Blvd</div>
                </div>
              </a>
            </div>
            {/* Info */}
            <div className="bg-ivory border border-sand rounded-[3px] p-6 flex flex-col gap-3">
              {[
                { label: 'Address', value: '1508 W Burbank Blvd, Burbank, CA 91506' },
                { label: 'Phone', value: '(818) 515-0009' },
                { label: 'Fax', value: '(818) 840-8222' },
                { label: 'Email', value: 'hello@USFlooring.LA' },
                { label: 'Hours', value: 'Mon – Sat · 9am – 6pm' },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <span className="font-sans text-[11px] font-bold text-charcoal/35 uppercase tracking-wide w-14 shrink-0 pt-0.5">{item.label}</span>
                  <span className="font-sans text-[14px] text-charcoal/65">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-[3px] aspect-[4/3] bg-sand/30 border border-sand">
            <iframe
              title="US Flooring & Molding Location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-118.3235%2C34.1770%2C-118.3035%2C34.1870&layer=mapnik&marker=34.1820%2C-118.3135"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-ivory">
        <div className="max-w-[780px] mx-auto px-6 py-16">
          <p className="font-sans text-[11px] font-bold text-walnut uppercase tracking-widest mb-4">Free Estimate</p>
          <h2 className="font-serif text-[32px] lg:text-[44px] font-bold text-charcoal mb-8 leading-tight">
            Request Your Free Estimate
          </h2>

          {sent ? (
            <div className="bg-[#F0E9DC] border border-sand rounded-[3px] p-10 text-center">
              <div className="font-serif text-[28px] font-bold text-walnut mb-3">Thank you!</div>
              <p className="font-sans text-base text-charcoal/60 leading-relaxed">
                We've received your request and we'll be in touch within one business day. If you need to reach us sooner, call (818) 515-0009.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Name row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>First Name *</label>
                  <input required value={form.firstName} onChange={set('firstName')} className={inputCls} placeholder="Jane" />
                </div>
                <div>
                  <label className={labelCls}>Last Name *</label>
                  <input required value={form.lastName} onChange={set('lastName')} className={inputCls} placeholder="Smith" />
                </div>
              </div>
              {/* Contact row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Phone *</label>
                  <input required type="tel" value={form.phone} onChange={set('phone')} className={inputCls} placeholder="(818) 555-0100" />
                </div>
                <div>
                  <label className={labelCls}>Email</label>
                  <input type="email" value={form.email} onChange={set('email')} className={inputCls} placeholder="jane@email.com" />
                </div>
              </div>
              {/* Project row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Project Type</label>
                  <div className="relative">
                    <select value={form.projectType} onChange={set('projectType')} className={selectCls}>
                      <option value="">Select…</option>
                      {projectTypes.map((t) => <option key={t}>{t}</option>)}
                    </select>
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-charcoal/30 text-[10px]">▼</span>
                  </div>
                </div>
                <div>
                  <label className={labelCls}>Preferred Flooring Type</label>
                  <div className="relative">
                    <select value={form.flooringType} onChange={set('flooringType')} className={selectCls}>
                      <option value="">Select…</option>
                      {flooringTypes.map((t) => <option key={t}>{t}</option>)}
                    </select>
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-charcoal/30 text-[10px]">▼</span>
                  </div>
                </div>
              </div>
              {/* Message */}
              <div>
                <label className={labelCls}>Tell Us About Your Project</label>
                <textarea
                  value={form.message}
                  onChange={set('message')}
                  rows={5}
                  className={inputCls + ' resize-none'}
                  placeholder="Square footage, timeline, special considerations…"
                />
              </div>
              {/* Preferred contact */}
              <div>
                <p className={labelCls}>Preferred Contact Method</p>
                <div className="flex gap-6">
                  {['phone', 'email', 'text'].map((method) => (
                    <label key={method} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="contact"
                        value={method}
                        checked={form.contact === method}
                        onChange={set('contact')}
                        className="accent-terracotta"
                      />
                      <span className="font-sans text-[14px] text-charcoal/65 capitalize">{method}</span>
                    </label>
                  ))}
                </div>
              </div>
              <button
                type="submit"
                className="bg-walnut text-ivory py-4 rounded-[2px] font-sans text-[15px] font-bold hover:bg-walnut-dark transition-colors mt-2"
              >
                Submit Estimate Request
              </button>
              <p className="font-sans text-[12px] text-charcoal/30 text-center">
                We respond within one business day. No spam, no pressure.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Schedule appointment strip */}
      <section className="bg-walnut py-12">
        <div className="max-w-[1180px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-sans text-[13px] font-bold text-ivory mb-1">Schedule a Showroom Appointment</p>
            <p className="font-sans text-[13px] text-ivory/50">1508 W Burbank Blvd · Mon – Sat, 9am – 6pm</p>
          </div>
          <div className="flex gap-3">
            <a href="tel:+18185150009" className="bg-walnut text-ivory px-6 py-3 rounded-[2px] font-sans text-[14px] font-bold hover:bg-walnut-dark transition-colors">
              Call to Schedule
            </a>
            <a href="mailto:hello@USFlooring.LA" className="border-[1.5px] border-ivory/30 text-ivory/60 px-6 py-3 rounded-[2px] font-sans text-[14px] font-bold hover:border-ivory/60 hover:text-ivory transition-colors">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
