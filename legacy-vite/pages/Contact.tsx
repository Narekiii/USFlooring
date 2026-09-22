import { useState, useRef } from 'react';
import SEO from '@/components/SEO';
import Breadcrumb, { breadcrumbJsonLd } from '@/components/Breadcrumb';
import { BUSINESS } from '@/lib/business';

type FormData = {
  fullName: string;
  phone: string;
  email: string;
  projectAddress: string;
  serviceNeeded: string;
  squareFootage: string;
  timeline: string;
  projectDetails: string;
  consent: boolean;
  _honey: string;
};

const init: FormData = {
  fullName: '',
  phone: '',
  email: '',
  projectAddress: '',
  serviceNeeded: '',
  squareFootage: '',
  timeline: '',
  projectDetails: '',
  consent: false,
  _honey: '',
};

const serviceOptions = [
  'Flooring Purchase',
  'Flooring Installation',
  'Laminate Flooring',
  'Hardwood Flooring',
  'Vinyl Flooring',
  'Baseboard or Molding',
  'Flooring Repair',
  'Other',
];

const timelineOptions = [
  'As Soon as Possible',
  'Within 2 Weeks',
  'Within 1 Month',
  'Within 2–3 Months',
  'Just Researching',
];

const contactCrumbs = [{ label: 'Home', href: '/' }, { label: 'Free Estimate' }];

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
  '@id': 'https://www.usflooring.la/#business',
  name: BUSINESS.name,
  url: BUSINESS.website,
  telephone: BUSINESS.phone,
  // TODO: add geo coordinates after verification
  // TODO: add openingHoursSpecification after owner confirms hours
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.city,
    addressRegion: BUSINESS.address.state,
    postalCode: BUSINESS.address.zip,
    addressCountry: 'US',
  },
};

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

function isValidPhone(v: string) {
  return v.replace(/\D/g, '').length >= 10;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>(init);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const submittingRef = useRef(false);

  const set =
    (k: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const val = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
      setForm((f) => ({ ...f, [k]: val }));
      if (fieldErrors[k]) setFieldErrors((prev) => ({ ...prev, [k]: undefined }));
    };

  function validate(): boolean {
    const errs: Partial<Record<keyof FormData, string>> = {};
    if (!form.fullName.trim()) errs.fullName = 'Full name is required.';
    if (!form.phone.trim()) {
      errs.phone = 'Phone number is required.';
    } else if (!isValidPhone(form.phone)) {
      errs.phone = 'Enter a valid phone number (at least 10 digits).';
    }
    if (!form.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!isValidEmail(form.email)) {
      errs.email = 'Enter a valid email address.';
    }
    if (!form.projectAddress.trim()) errs.projectAddress = 'Project address or ZIP is required.';
    if (!form.serviceNeeded) errs.serviceNeeded = 'Please select a service.';
    if (!form.projectDetails.trim()) errs.projectDetails = 'Please describe your project.';
    if (!form.consent) errs.consent = 'You must agree to be contacted.';
    setFieldErrors(errs);
    return Object.keys(errs).length === 0;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form._honey) return;
    if (submittingRef.current) return;
    if (!validate()) return;

    submittingRef.current = true;
    setStatus('submitting');

    try {
      const payload = {
        access_key: '3f19eb6d-1c9e-4e4a-bda0-bacdc9bcf02d',
        subject: 'New Free Estimate Request — US Flooring Website',
        from_name: 'US Flooring Website',
        replyto: form.email.trim(),
        name: form.fullName.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        project_address: form.projectAddress.trim(),
        service_needed: form.serviceNeeded,
        square_footage: form.squareFootage.trim() || 'Not provided',
        timeline: form.timeline || 'Not provided',
        project_details: form.projectDetails.trim(),
      };

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
        setForm(init);
        setFieldErrors({});
        (window as any).gtag?.('event', 'estimate_form_submit', { status: 'success' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      submittingRef.current = false;
    }
  };

  const labelCls = 'font-sans text-[12px] font-bold text-charcoal/60 uppercase tracking-wide block mb-1.5';
  const inputCls =
    'w-full bg-ivory border border-border rounded-[2px] px-4 py-3 font-sans text-[14px] text-charcoal placeholder:text-charcoal/25 focus:outline-none focus:border-navy transition-colors';
  const inputErrCls = inputCls.replace('border-border', 'border-red-400');
  const selectCls = inputCls + ' appearance-none';
  const selectErrCls = inputErrCls + ' appearance-none';
  const errMsg = 'font-sans text-[12px] text-red-600 mt-1';

  const inp = (k: keyof FormData) => (fieldErrors[k] ? inputErrCls : inputCls);
  const sel = (k: keyof FormData) => (fieldErrors[k] ? selectErrCls : selectCls);

  return (
    <div className="pb-[72px] lg:pb-0">
      <SEO
        title="Contact US Flooring & Molding | Burbank Showroom"
        description={`Visit the US Flooring & Molding showroom at ${BUSINESS.address.full}. Call ${BUSINESS.phoneDisplay} or request a free estimate online.`}
        canonical="https://www.usflooring.la/contact"
        ogTitle="Request a Free Flooring Estimate | US Flooring"
        ogDescription="Discuss your flooring project with the US Flooring & Molding team in Burbank, California."
        ogUrl="https://www.usflooring.la/contact"
        jsonLd={[contactJsonLd, breadcrumbJsonLd(contactCrumbs)]}
      />
      <Breadcrumb crumbs={contactCrumbs} />

      {/* Header */}
      <section className="pt-8 pb-12 bg-subtle">
        <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="font-sans text-[11px] font-semibold text-walnut uppercase tracking-widest mb-4">Get in Touch</p>
            <h1 className="font-serif text-[40px] lg:text-[56px] font-semibold text-charcoal leading-[1.06] mb-3">
              Visit Our Burbank Flooring Showroom
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
                className="flex items-center gap-3 bg-red text-white px-5 py-4 rounded-[2px] hover:bg-red-dark transition-colors group"
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
                className="flex items-center gap-3 bg-ivory border border-border px-5 py-4 rounded-[2px] hover:border-walnut/40 transition-colors"
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
            <address className="not-italic bg-ivory border border-border rounded-[3px] p-6 flex flex-col gap-3">
              <div className="flex gap-4">
                <span className="font-sans text-[11px] font-bold text-charcoal/35 uppercase tracking-wide w-14 shrink-0 pt-0.5">Address</span>
                <a
                  href="https://maps.app.goo.gl/jX5UrM4rbZP5CSq5A"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open US Flooring & Molding Inc. in Google Maps"
                  className="font-sans text-[14px] text-charcoal/65 hover:text-walnut transition-colors"
                >
                  {BUSINESS.address.full}
                </a>
              </div>
              {[
                { label: 'Phone', value: BUSINESS.phoneDisplay },
                { label: 'Email', value: BUSINESS.email },
                { label: 'Hours', value: BUSINESS.hours ?? 'TODO — verify with owner' },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <span className="font-sans text-[11px] font-bold text-charcoal/35 uppercase tracking-wide w-14 shrink-0 pt-0.5">{item.label}</span>
                  <span className={`font-sans text-[14px] ${item.value?.startsWith('TODO') ? 'text-walnut/60 italic' : 'text-charcoal/65'}`}>{item.value}</span>
                </div>
              ))}
            </address>

            {/* Social media */}
            <div className="mt-6">
              <p className="font-sans text-[11px] font-semibold text-charcoal/35 uppercase tracking-widest mb-4">Follow Us</p>
              {/* TODO: add Instagram, Facebook, YouTube when URLs are verified with owner */}
              <div className="flex items-center gap-3 flex-wrap">
                {/* LinkedIn — confirmed by owner */}
                <a
                  href={BUSINESS.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="US Flooring & Molding on LinkedIn"
                  className="w-10 h-10 flex items-center justify-center rounded-[3px] bg-ivory border border-border text-charcoal/50 hover:text-charcoal hover:border-charcoal/40 transition-colors"
                  onClick={() => (window as any).gtag?.('event', 'social_click', { platform: 'linkedin' })}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                {/* Yelp */}
                <a
                  href={BUSINESS.yelpUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="US Flooring on Yelp"
                  className="w-10 h-10 flex items-center justify-center rounded-[3px] bg-ivory border border-border text-charcoal/50 hover:text-[#d32323] hover:border-[#d32323]/30 transition-colors"
                  onClick={() => (window as any).gtag?.('event', 'outbound_yelp_click', { link_location: 'contact_page', destination_url: BUSINESS.yelpUrl })}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true">
                    <path d="M20.16 12.596c.411-.36.416-.849.015-1.166l-3.584-2.765c-.398-.311-.861-.134-.99.381l-.73 2.91c-.127.507.205.88.74.826l4.103-.44a1.3 1.3 0 0 0 .447-.204l-.001-.001v-.001zm-7.693 6.547.73 2.911c.13.515.594.694.99.381l3.584-2.765c.401-.318.396-.806-.015-1.166a1.3 1.3 0 0 0-.447-.205l-4.103-.44c-.535-.055-.868.319-.74.826zm-3.135 1.53c.35.392.827.347 1.06-.1l1.261-2.407c.234-.447.032-.895-.449-1.008l-4.012-.94c-.482-.113-.812.218-.697.718l.957 4.021c.118.5.535.73.88.341zm-3.18-7.573a1.27 1.27 0 0 0-.327.418L3.91 16.48c-.232.464.002.9.521.964l4.103.497c.52.063.854-.32.744-.847l-.845-3.884c-.11-.528-.609-.758-1.004-.416l-.042.036zM10.6 3.27c-.232-.464-.716-.528-1.05-.14L6.457 6.658c-.336.39-.262.868.162 1.065l3.667 1.71c.423.197.826-.042.899-.55l.589-4.027c.074-.51-.172-.917-.404-1.381L10.6 3.27z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="flex flex-col gap-3">
            <div className="relative w-full min-h-[320px] md:min-h-[400px] overflow-hidden rounded-[3px] bg-subtle/30 border border-border">
              <iframe
                src="https://www.google.com/maps?q=US+Flooring+%26+Molding+Inc.%2C+1508+W+Burbank+Blvd%2C+Burbank%2C+CA+91506&z=16&output=embed"
                title="Google Maps location of US Flooring & Molding Inc. in Burbank"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://maps.app.goo.gl/jX5UrM4rbZP5CSq5A"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get directions to US Flooring & Molding Inc. in Google Maps"
              className="inline-flex items-center gap-2 self-start border-[1.5px] border-charcoal text-charcoal px-5 py-3 rounded-[2px] font-sans text-[13px] font-bold hover:bg-subtle/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-walnut transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
              </svg>
              Get Directions
            </a>
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

          {/* Success state */}
          {status === 'success' ? (
            <div
              role="status"
              aria-live="polite"
              className="bg-subtle border border-border rounded-[3px] p-10 text-center"
            >
              <div className="font-serif text-[28px] font-semibold text-walnut mb-3">Request Received</div>
              <p className="font-sans text-base text-charcoal/60 leading-relaxed">
                Thank you! Your estimate request has been received. A member of the US Flooring team will contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate aria-label="Free estimate request form">
              {/* Honeypot — hidden from real users */}
              <div style={{ display: 'none' }} aria-hidden="true">
                <label>
                  Leave this blank
                  <input tabIndex={-1} autoComplete="off" name="_honey" value={form._honey} onChange={set('_honey')} />
                </label>
              </div>

              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className={labelCls}>Full Name *</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  required
                  value={form.fullName}
                  onChange={set('fullName')}
                  className={inp('fullName')}
                  placeholder="Jane Smith"
                  aria-describedby={fieldErrors.fullName ? 'err-fullName' : undefined}
                  aria-invalid={!!fieldErrors.fullName}
                />
                {fieldErrors.fullName && <p id="err-fullName" className={errMsg} role="alert">{fieldErrors.fullName}</p>}
              </div>

              {/* Phone + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className={labelCls}>Phone Number *</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={form.phone}
                    onChange={set('phone')}
                    className={inp('phone')}
                    placeholder="(818) 555-0100"
                    aria-describedby={fieldErrors.phone ? 'err-phone' : undefined}
                    aria-invalid={!!fieldErrors.phone}
                  />
                  {fieldErrors.phone && <p id="err-phone" className={errMsg} role="alert">{fieldErrors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="email" className={labelCls}>Email Address *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={set('email')}
                    className={inp('email')}
                    placeholder="jane@email.com"
                    aria-describedby={fieldErrors.email ? 'err-email' : undefined}
                    aria-invalid={!!fieldErrors.email}
                  />
                  {fieldErrors.email && <p id="err-email" className={errMsg} role="alert">{fieldErrors.email}</p>}
                </div>
              </div>

              {/* Project Address */}
              <div>
                <label htmlFor="projectAddress" className={labelCls}>Project Address or ZIP Code *</label>
                <input
                  id="projectAddress"
                  name="projectAddress"
                  type="text"
                  autoComplete="street-address"
                  required
                  value={form.projectAddress}
                  onChange={set('projectAddress')}
                  className={inp('projectAddress')}
                  placeholder="123 Main St, Burbank CA  or  91506"
                  aria-describedby={fieldErrors.projectAddress ? 'err-projectAddress' : undefined}
                  aria-invalid={!!fieldErrors.projectAddress}
                />
                {fieldErrors.projectAddress && <p id="err-projectAddress" className={errMsg} role="alert">{fieldErrors.projectAddress}</p>}
              </div>

              {/* Service + Square Footage */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="serviceNeeded" className={labelCls}>Service Needed *</label>
                  <div className="relative">
                    <select
                      id="serviceNeeded"
                      name="serviceNeeded"
                      required
                      value={form.serviceNeeded}
                      onChange={set('serviceNeeded')}
                      className={sel('serviceNeeded')}
                      aria-describedby={fieldErrors.serviceNeeded ? 'err-serviceNeeded' : undefined}
                      aria-invalid={!!fieldErrors.serviceNeeded}
                    >
                      <option value="">Select a service…</option>
                      {serviceOptions.map((o) => <option key={o}>{o}</option>)}
                    </select>
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-charcoal/30 text-[10px]" aria-hidden="true">▼</span>
                  </div>
                  {fieldErrors.serviceNeeded && <p id="err-serviceNeeded" className={errMsg} role="alert">{fieldErrors.serviceNeeded}</p>}
                </div>
                <div>
                  <label htmlFor="squareFootage" className={labelCls}>Approximate Square Footage <span className="normal-case font-normal">(optional)</span></label>
                  <input
                    id="squareFootage"
                    name="squareFootage"
                    type="text"
                    inputMode="numeric"
                    value={form.squareFootage}
                    onChange={set('squareFootage')}
                    className={inputCls}
                    placeholder="e.g. 800"
                  />
                </div>
              </div>

              {/* Timeline */}
              <div>
                <label htmlFor="timeline" className={labelCls}>Desired Project Timeline <span className="normal-case font-normal">(optional)</span></label>
                <div className="relative">
                  <select
                    id="timeline"
                    name="timeline"
                    value={form.timeline}
                    onChange={set('timeline')}
                    className={selectCls}
                  >
                    <option value="">Select a timeline…</option>
                    {timelineOptions.map((o) => <option key={o}>{o}</option>)}
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-charcoal/30 text-[10px]" aria-hidden="true">▼</span>
                </div>
              </div>

              {/* Project Details */}
              <div>
                <label htmlFor="projectDetails" className={labelCls}>Project Details *</label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  required
                  value={form.projectDetails}
                  onChange={set('projectDetails')}
                  rows={5}
                  className={`${inp('projectDetails')} resize-none`}
                  placeholder="Tell us about your space, existing flooring, any special considerations…"
                  aria-describedby={fieldErrors.projectDetails ? 'err-projectDetails' : undefined}
                  aria-invalid={!!fieldErrors.projectDetails}
                />
                {fieldErrors.projectDetails && <p id="err-projectDetails" className={errMsg} role="alert">{fieldErrors.projectDetails}</p>}
              </div>

              {/* Consent */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={form.consent}
                    onChange={set('consent')}
                    className="mt-0.5 accent-red w-4 h-4 shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-walnut"
                    aria-describedby={fieldErrors.consent ? 'err-consent' : undefined}
                    aria-invalid={!!fieldErrors.consent}
                  />
                  <span className="font-sans text-[13px] text-charcoal/65 leading-snug group-hover:text-charcoal/80 transition-colors">
                    I agree that US Flooring &amp; Molding Inc. may contact me regarding my estimate request. *
                  </span>
                </label>
                {fieldErrors.consent && <p id="err-consent" className={`${errMsg} mt-1.5 ml-7`} role="alert">{fieldErrors.consent}</p>}
              </div>

              {/* Error banner */}
              {status === 'error' && (
                <div
                  role="alert"
                  aria-live="assertive"
                  className="bg-red-50 border border-red-200 rounded-[2px] px-5 py-4"
                >
                  <p className="font-sans text-[14px] text-red-700 mb-1">
                    We couldn't send your request. Please try again or call us directly at:
                  </p>
                  <a
                    href={`tel:${BUSINESS.phone}`}
                    className="font-sans text-[14px] font-bold text-red-700 hover:text-red-800 underline underline-offset-2"
                  >
                    {BUSINESS.phoneDisplay}
                  </a>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="bg-red text-white py-4 rounded-[2px] font-sans text-[15px] font-bold hover:bg-red-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-walnut transition-colors mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Sending Request…' : 'Submit Estimate Request'}
              </button>
              <p className="font-sans text-[12px] text-charcoal/30 text-center">
                We respond within one business day. No spam, no pressure.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Schedule appointment strip */}
      <section className="bg-charcoal py-12">
        <div className="max-w-[1180px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-sans text-[13px] font-bold text-ivory mb-1">Schedule a Showroom Appointment</p>
            <p className="font-sans text-[13px] text-ivory/50">{BUSINESS.address.street} · {BUSINESS.hours}</p>
          </div>
          <div className="flex gap-3">
            <a href={`tel:${BUSINESS.phone}`} className="bg-red text-white px-6 py-3 rounded-[2px] font-sans text-[14px] font-bold hover:bg-red-dark transition-colors">
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
