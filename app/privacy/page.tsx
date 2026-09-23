import type { Metadata } from "next";
import Breadcrumbs, { breadcrumbJsonLd } from "../ui/breadcrumbs";
import { JsonLd } from "../ui/json-ld";
import { BUSINESS, SITE_URL } from "../lib/business";

const items = [{ label: "Home", href: "/" }, { label: "Privacy Policy" }];

export const metadata: Metadata = {
  title: "Privacy Policy | US Flooring Burbank",
  description: "How US Flooring & Molding Inc. collects, uses, and protects information submitted through our website.",
  alternates: { canonical: `${SITE_URL}/privacy` },
};

export default function PrivacyPage() {
  return (
    <div className="pb-[72px] lg:pb-0">
      <JsonLd data={breadcrumbJsonLd(items)} />
      <Breadcrumbs items={items} />
      <section className="bg-ivory">
        <div className="max-w-[820px] mx-auto px-6 py-16">
          <p className="font-sans text-[11px] font-bold text-walnut uppercase tracking-widest mb-4">Privacy</p>
          <h1 className="font-serif text-[36px] lg:text-[48px] font-bold text-charcoal leading-tight mb-8">Privacy Policy</h1>

          <div className="flex flex-col gap-8 font-sans text-[15px] text-charcoal/75 leading-relaxed">
            <p>This policy explains what information {BUSINESS.legalName} collects through this website, how it is used, and how to contact us about it. It applies to www.usflooring.la.</p>

            <div>
              <h2 className="font-serif text-[22px] font-bold text-charcoal mb-3">Information We Collect</h2>
              <p className="mb-3">When you submit our estimate request form, we collect the information you provide, which may include:</p>
              <ul className="list-disc pl-5 flex flex-col gap-1.5">
                <li>Full name</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>Project city</li>
                <li>Flooring interest, approximate square footage, and project timeline</li>
                <li>Any project details you write in the message field</li>
              </ul>
              <p className="mt-3">We do not use cookies or third-party analytics tracking on this website, and we do not collect information beyond what you submit through the form.</p>
            </div>

            <div>
              <h2 className="font-serif text-[22px] font-bold text-charcoal mb-3">How We Use It</h2>
              <p>We use the information you submit solely to respond to your estimate request, discuss your flooring project, and follow up about scheduling or service. We do not sell your information to third parties.</p>
            </div>

            <div>
              <h2 className="font-serif text-[22px] font-bold text-charcoal mb-3">Form Processing Provider</h2>
              <p>Estimate requests submitted on this site are delivered to us using Web3Forms, a third-party form processing service. Submitted data passes through their systems in order to reach our inbox. We do not control Web3Forms&apos; own data handling beyond that delivery process.</p>
            </div>

            <div>
              <h2 className="font-serif text-[22px] font-bold text-charcoal mb-3">Retention</h2>
              <p>We retain submitted information for as long as reasonably necessary to respond to your inquiry and for ordinary business record-keeping. If you would like us to delete information you&apos;ve submitted, contact us using the details below and we will honor that request.</p>
            </div>

            <div>
              <h2 className="font-serif text-[22px] font-bold text-charcoal mb-3">California Residents</h2>
              <p>If you are a California resident, you may request details about the information we hold about you or ask us to delete it. Contact us using the information below to make either request.</p>
            </div>

            <div>
              <h2 className="font-serif text-[22px] font-bold text-charcoal mb-3">Contact Us</h2>
              <p>{BUSINESS.name}<br />{BUSINESS.address.street}, {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}<br /><a href={`tel:${BUSINESS.phone}`} className="text-walnut font-bold">{BUSINESS.phoneDisplay}</a><br /><a href={`mailto:${BUSINESS.email}`} className="text-walnut font-bold">{BUSINESS.email}</a></p>
            </div>

            <p className="text-[13px] text-charcoal/45 border-t border-border pt-6 mt-2">This page is a general privacy notice and is not a substitute for legal advice. We recommend having it reviewed by a qualified attorney to confirm it fully addresses your specific data practices and legal obligations.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
