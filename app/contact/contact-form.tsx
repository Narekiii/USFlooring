"use client";

import { FormEvent, useState } from "react";

const interests = ["Hardwood Flooring", "Laminate Flooring", "Luxury Vinyl Flooring", "Molding & Baseboards", "Flooring Installation", "Other"];
const timelines = ["As soon as possible", "Within 2 weeks", "Within 1 month", "Within 2–3 months", "Just researching"];

type FormState = { name: string; phone: string; email: string; city: string; interest: string; squareFootage: string; timeline: string; message: string };
const initial: FormState = { name: "", phone: "", email: "", city: "", interest: "", squareFootage: "", timeline: "", message: "" };

function validate(form: FormState) {
  const errors: Partial<Record<keyof FormState, string>> = {};
  if (!form.name.trim()) errors.name = "Enter your full name.";
  if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 10) errors.phone = "Enter a phone number with at least 10 digits.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errors.email = "Enter a valid email address.";
  if (!form.city.trim()) errors.city = "Enter your project city.";
  if (!form.interest) errors.interest = "Choose a flooring interest.";
  if (!form.message.trim()) errors.message = "Tell us about your project.";
  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const update = (field: keyof FormState, value: string) => setForm((current) => ({ ...current, [field]: value }));

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (!response.ok) throw new Error("Request failed");
      setForm(initial);
      setErrors({});
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputClass = "mt-2 w-full rounded border border-border bg-ivory px-4 py-3 text-charcoal focus:border-walnut focus:outline-none focus:ring-2 focus:ring-walnut/30";
  const field = (name: keyof FormState, label: string, type = "text", required = true, autocomplete?: string) => <div><label htmlFor={name} className="font-semibold">{label}{required && <span aria-hidden="true"> *</span>}</label><input id={name} name={name} type={type} required={required} autoComplete={autocomplete} value={form[name]} onChange={(event) => update(name, event.target.value)} className={inputClass} aria-invalid={Boolean(errors[name])} aria-describedby={errors[name] ? `${name}-error` : undefined} />{errors[name] && <p id={`${name}-error`} className="mt-1 text-sm text-red-700">{errors[name]}</p>}</div>;

  return <form onSubmit={submit} noValidate className="mt-8 grid gap-5" aria-label="Flooring estimate request form">
    <div className="grid gap-5 sm:grid-cols-2">{field("name", "Full name", "text", true, "name")}{field("phone", "Phone", "tel", true, "tel")}</div>
    <div className="grid gap-5 sm:grid-cols-2">{field("email", "Email", "email", true, "email")}{field("city", "Project city", "text", true, "address-level2")}</div>
    <div><label htmlFor="interest" className="font-semibold">Flooring interest <span aria-hidden="true">*</span></label><select id="interest" name="interest" required value={form.interest} onChange={(event) => update("interest", event.target.value)} className={inputClass} aria-invalid={Boolean(errors.interest)}><option value="">Select an option</option>{interests.map((item) => <option key={item}>{item}</option>)}</select>{errors.interest && <p className="mt-1 text-sm text-red-700">{errors.interest}</p>}</div>
    <div className="grid gap-5 sm:grid-cols-2">{field("squareFootage", "Approximate square footage", "text", false)}<div><label htmlFor="timeline" className="font-semibold">Project timeline</label><select id="timeline" name="timeline" value={form.timeline} onChange={(event) => update("timeline", event.target.value)} className={inputClass}><option value="">Select an option</option>{timelines.map((item) => <option key={item}>{item}</option>)}</select></div></div>
    <div><label htmlFor="message" className="font-semibold">Message <span aria-hidden="true">*</span></label><textarea id="message" name="message" required rows={5} value={form.message} onChange={(event) => update("message", event.target.value)} className={`${inputClass} resize-y`} aria-invalid={Boolean(errors.message)} />{errors.message && <p className="mt-1 text-sm text-red-700">{errors.message}</p>}</div>
    <div aria-live="polite" role={status === "error" ? "alert" : "status"}>{status === "success" && <p className="rounded border border-green-700/30 bg-green-50 p-4 text-green-900">Thanks — your request was sent. We will be in touch.</p>}{status === "error" && <p className="rounded border border-red-700/30 bg-red-50 p-4 text-red-900">We could not send your request. Please try again or call (818) 515-0009.</p>}</div>
    <button type="submit" disabled={status === "submitting"} className="button w-full justify-center disabled:cursor-wait disabled:opacity-60">{status === "submitting" ? "Sending request…" : "Submit estimate request"}</button>
  </form>;
}
