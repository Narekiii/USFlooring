import { useState, useRef } from 'react';
import SEO from '@/components/SEO';
import Breadcrumb, { breadcrumbJsonLd } from '@/components/Breadcrumb';
import { BUSINESS } from '@/lib/business';

type FormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  projectType: string;
  flooringType: string;
  message: string;
  preferredContactMethod: string;
  _honey: string;
};

const init: FormData = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  projectType: '',
  flooringType: '',
  message: '',
  preferredContactMethod: 'phone',
  _honey: '',
};

const projectTypes = ['New Installation', 'Replacement / Renovation', 'Repair', 'Refinishing', 'Commercial Project', 'Other'];
const flooringTypes = ['Hardwood', 'Laminate', 'Luxury Vinyl (LVP/LVT)', 'Moldings & Trim', 'Not sure yet'];

const contactCrumbs = [{ label: 'Home', href: '/' }, { label: 'Free Estimate' }];

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
  '@id': 'https://www.usflooring.la/#business',
  name: BUSINESS.name,
  url: BUSINESS.website,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.city,
    addressRegion: BUSINESS.address.state,
    postalCode: BUSINESS.address.zip,
    addressCountry: 'US',
  },
};

export default function Contact() {
  const [form, setForm] = useState<FormData>(init);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const set = (k: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const emailRequired = form.preferredContactMethod === 'email';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form._honey) return;
    if (status === 'submitting') return;

    setStatus('submitting');
    try {
      const body = new FormData();
      body.append('firstName', form.firstName);
      body.append('lastName', form.lastName);
      body.append('phone', form.phone);
      body.append('email', form.email);
      body.append('projectType', form.projectType);
      body.append('flooringType', form.flooringType);
      body.append('message', form.message);
      body.append('preferredContactMethod', form.preferredContactMethod);
      body.append('_subject', `Estimate Request from ${form.firstName} ${form.lastName}`);
      body.append('_captcha', 'false');
      body.append('_template', 'table');

      const res = await fetch('https://formsubmit.co/hello@USFlooring.LA', {
        method: 'POST',
        body,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const labelCls = 'font-sans text-[12px] font-bold text-charcoal/60 uppercase tracking-wide block mb-1.5';
  const inputCls = 'w-full bg-ivory border border-sand rounded-[2px] px-4 py-3 font-sans text-[14px] text-charcoal placeholder:text-charcoal/25 focus:outline-none focus:border-walnut transition-colors';
  const selectCls = inputCls + ' appearance-none';

  return (
    <div className="pb-[72px] lg:pb-0">
      <SEO
        title="Free Flooring Estimate in Burbank | US Flooring"
        description={`Request a free flooring estimate from US Flooring & Molding Inc. Call ${BUSINESS.phoneDisplay} or visit the showroom at ${BUSINESS.address.full}.`}
        canonical="https://www.usflooring.la/contact"
        ogTitle="Request a Free Flooring Estimate | US Flooring"
        ogDescription="Discuss your flooring project with the US Flooring & Molding team in Burbank, California."
        ogUrl="https://www.usflooring.la/contact"
        jsonLd={[contactJsonLd, breadcrumbJsonLd(contactCrumbs)]}
      />
      <Breadcrumb crumbs={contactCrumbs} />

      {/* Header */}
      <section className="pt-8 pb-12 bg-[#F0E9DC]">
        <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="font-sans text-[11px] font-semibold text-walnut uppercase tracking-widest mb-4">Get in Touch</p>
            <h1 className="font-serif text-[40px] lg:text-[56px] font-semibold text-charcoal leading-[1.06] mb-3">
              Get a Free Flooring Estimate in Burbank
            </h1>
            <p className="font-sans text-base text-walnut font-semibold mb-5">
              Let's Talk About Your Floor
            </p>
            <p className="font-sans text-base text-charcoal/60 leading-relaxed mb-8">
              Call us, stop by, or fill out the form. You'll get a real answer from a real person — not a script, not a call center.
            </p>
            {/* Quick CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="flex items-center gap-3 bg-walnut text-ivory px-5 py-4 rounded-[2px] hover:bg-walnut-dark transition-colors group"
                onClick={() => (window as any).gtag?.('event', 'phone_click')}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div>
                  <div className="font-sans text-[13px] font-bold">Call Now</div>
                  <div className="font-sans text-[12px] text-ivory/70">{BUSINESS.phoneDisplay}</div>
                </div>
              </a>
              <a
                href={BUSINESS.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-ivory border border-sand px-5 py-4 rounded-[2px] hover:border-walnut/40 transition-colors"
                onClick={() => (window as any).gtag?.('event', 'directions_click')}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B4A2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <div className="font-sans text-[13px] font-bold text-charcoal">Get Directions</div>
                  <div className="font-sans text-[12px] text-charcoal/40">{BUSINESS.address.street}</div>
                </div>
              </a>
            </div>
            {/* Info */}
            <address className="not-italic bg-ivory border border-sand rounded-[3px] p-6 flex flex-col gap-3">
              {[
                { label: 'Address', value: BUSINESS.address.full },
                { label: 'Phone', value: BUSINESS.phoneDisplay },
                { label: 'Fax', value: BUSINESS.fax },
                { label: 'Email', value: BUSINESS.email },
                { label: 'Hours', value: BUSINESS.hours },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <span className="font-sans text-[11px] font-bold text-charcoal/35 uppercase tracking-wide w-14 shrink-0 pt-0.5">{item.label}</span>
                  <span className="font-sans text-[14px] text-charcoal/65">{item.value}</span>
                </div>
              ))}
            </address>
          </div>

          {/* Map */}
          <div className="relative overflow-hidden rounded-[3px] bg-sand/30 border border-sand" style={{ paddingBottom: '75%' }}>
            <iframe
              title="US Flooring & Molding Location — 1508 W Burbank Blvd, Burbank, CA"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-118.3235%2C34.1770%2C-118.3035%2C34.1870&layer=mapnik&marker=34.1820%2C-118.3135"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-ivory">
        <div className="max-w-[780px] mx-auto px-6 py-16">
          <p className="font-sans text-[11px] font-semibold text-walnut uppercase tracking-widest mb-4">Free Estimate</p>
          <h2 className="font-serif text-[32px] lg:text-[44px] font-semibold text-charcoal mb-8 leading-tight">
            Request Your Free Estimate
          </h2>

          {status === 'success' ? (
            <div className="bg-[#F0E9DC] border border-sand rounded-[3px] p-10 text-center">
              <div className="font-serif text-[28px] font-semibold text-walnut mb-3">Request Received</div>
              <p className="font-sans text-base text-charcoal/60 leading-relaxed">
                Thank you. Your estimate request was received successfully. A member of the US Flooring &amp; Molding team will contact you within one business day. For immediate assistance, call {BUSINESS.phoneDisplay}.
              </p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
              {/* Honeypot — hidden from real users, traps bots */}
              <div style={{ display: 'none' }} aria-hidden="true">
                <label>Leave this blank
                  <input tabIndex={-1} autoComplete="off" value={form._honey} onChange={set('_honey')} />
                </label>
              </div>

              {/* Name row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className={labelCls}>First Name *</label>
                  <input id="firstName" required name="firstName" value={form.firstName} onChange={set('firstName')} className={inputCls} placeholder="Jane" />
                </div>
                <div>
                  <label htmlFor="lastName" className={labelCls}>Last Name *</label>
                  <input id="lastName" required name="lastName" value={form.lastName} onChange={set('lastName')} className={inputCls} placeholder="Smith" />
                </div>
              </div>

              {/* Contact row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className={labelCls}>Phone *</label>
                  <input id="phone" required type="tel" name="phone" value={form.phone} onChange={set('phone')} className={inputCls} placeholder="(818) 555-0100" />
                </div>
                <div>
                  <label htmlFor="email" className={labelCls}>Email {emailRequired ? '*' : ''}</label>
                  <input id="email" type="email" name="email" required={emailRequired} value={form.email} onChange={set('email')} className={inputCls} placeholder="jane@email.com" />
                </div>
              </div>

              {/* Project row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="projectType" className={labelCls}>Project Type *</label>
                  <div className="relative">
                    <select id="projectType" required name="projectType" value={form.projectType} onChange={set('projectType')} className={selectCls}>
                      <option value="">Select…</option>
                      {projectTypes.map((t) => <option key={t}>{t}</option>)}
                    </select>
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-charcoal/30 text-[10px]" aria-hidden="true">▼</span>
                  </div>
                </div>
                <div>
                  <label htmlFor="flooringType" className={labelCls}>Preferred Flooring Type</label>
                  <div className="relative">
                    <select id="flooringType" name="flooringType" value={form.flooringType} onChange={set('flooringType')} className={selectCls}>
                      <option value="">Select…</option>
                      {flooringTypes.map((t) => <option key={t}>{t}</option>)}
                    </select>
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-charcoal/30 text-[10px]" aria-hidden="true">▼</span>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className={labelCls}>Tell Us About Your Project</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={set('message')}
                  rows={5}
                  className={inputCls + ' resize-none'}
                  placeholder="Square footage, timeline, special considerations…"
                />
              </div>

              {/* Preferred contact method */}
              <fieldset>
                <legend className={labelCls}>Preferred Contact Method *</legend>
                <div className="flex gap-6 mt-1">
                  {['phone', 'email', 'text'].map((method) => (
                    <label key={method} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="preferredContactMethod"
                        value={method}
                        checked={form.preferredContactMethod === method}
                        onChange={set('preferredContactMethod')}
                        className="accent-walnut"
                      />
                      <span className="font-sans text-[14px] text-charcoal/65 capitalize">{method}</span>
                    </label>
                  ))}
                </div>
                {form.preferredContactMethod === 'text' && (
                  <p className="font-sans text-[12px] text-charcoal/45 mt-2">
                    By selecting Text, you consent to receiving a single text message reply to your estimate request. Standard messaging rates may apply. We do not send marketing texts.
                  </p>
                )}
              </fieldset>

              {status === 'error' && (
                <div role="alert" className="bg-red-50 border border-red-200 rounded-[2px] px-5 py-4 font-sans text-[14px] text-red-700">
                  We couldn't send your request. Please try again or call us at {BUSINESS.phoneDisplay}.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="bg-walnut text-ivory py-4 rounded-[2px] font-sans text-[15px] font-bold hover:bg-walnut-dark transition-colors mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                onClick={() => status === 'idle' && (window as any).gtag?.('event', 'estimate_cta_click')}
              >
                {status === 'submitting' ? 'Sending…' : 'Submit Estimate Request'}
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
            <p className="font-sans text-[13px] text-ivory/50">{BUSINESS.address.street} · {BUSINESS.hours}</p>
          </div>
          <div className="flex gap-3">
            <a href={`tel:${BUSINESS.phone}`} className="bg-walnut text-ivory px-6 py-3 rounded-[2px] font-sans text-[14px] font-bold hover:bg-walnut-dark transition-colors">
              Call to Schedule
            </a>
            <a href={`mailto:${BUSINESS.email}`} className="border-[1.5px] border-ivory/30 text-ivory/60 px-6 py-3 rounded-[2px] font-sans text-[14px] font-bold hover:border-ivory/60 hover:text-ivory transition-colors">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
