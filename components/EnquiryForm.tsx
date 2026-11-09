"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { CONTACT, waLink } from "@/lib/site";

const PRODUCTS = ["Unizo — Billing & Inventory Software", "PropertyGenie — Real Estate Listing Software", "Smart Queue — Restaurant Queue System"];
const SERVICES = [
  "Conversion-Focused Website Development",
  "Custom Software / Web App Development",
  "Mobile App Development",
  "SEO / AEO / GEO",
  "SEO & Lead Generation for Manufacturers",
  "Social Media Marketing (Organic + Ads)",
  "Google Ads / Meta Ads",
];

interface Props {
  kind?: "product" | "service";
  defaultInterest?: string;
  title?: string;
  subtitle?: string;
  compact?: boolean;
}

export default function EnquiryForm({
  kind = "product",
  defaultInterest,
  title,
  subtitle,
  compact,
}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const options = kind === "product" ? [...PRODUCTS, ...SERVICES] : [...SERVICES, ...PRODUCTS];
  const whatsappNumber = kind === "product" ? CONTACT.productWhatsApp : CONTACT.generalWhatsApp;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const interest = String(fd.get("interest") || defaultInterest || "");
    const payload = {
      name: fd.get("name"),
      phone: fd.get("phone"),
      email: fd.get("email"),
      company: fd.get("company"),
      city: fd.get("city"),
      message: fd.get("message"),
      website: fd.get("website"),
      interest,
      kind: SERVICES.includes(interest) ? "service" : "product",
      page: pathname,
    };
    try {
      const res = await fetch("/api/product-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        try {
          (window as any).gtag?.("event", "generate_lead", { interest, page: pathname });
        } catch {}
        router.push(`/thank-you?interest=${encodeURIComponent(interest)}`);
        return;
      }
      setError(data.error || "Something went wrong. Please WhatsApp us instead.");
    } catch {
      setError("Network error. Please WhatsApp or call us instead.");
    }
    setLoading(false);
  }

  const input =
    "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[15px] outline-none transition focus:border-[#ff6321] focus:ring-2 focus:ring-[#ff6321]/20";

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-8" id="enquire">
      <h2 className="text-2xl font-bold tracking-tight">
        {title || (kind === "product" ? "Request a free demo & pricing" : "Get a free strategy call")}
      </h2>
      <p className="mt-2 text-sm text-gray-600">
        {subtitle || "Share a few details — we reply within a few working hours, usually on WhatsApp."}
      </p>

      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        {/* honeypot */}
        <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

        <div className={compact ? "space-y-4" : "grid gap-4 sm:grid-cols-2"}>
          <label className="block">
            <span className="mb-1 block text-sm font-medium">Your name *</span>
            <input name="name" required minLength={2} className={input} placeholder="Full name" autoComplete="name" />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-medium">Phone / WhatsApp *</span>
            <input name="phone" required type="tel" inputMode="tel" className={input} placeholder="+91 98xxxxxxx" autoComplete="tel" />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-medium">Business name</span>
            <input name="company" className={input} placeholder="Company / shop / restaurant" autoComplete="organization" />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-medium">City</span>
            <input name="city" className={input} placeholder="e.g. Chennai" autoComplete="address-level2" />
          </label>
        </div>

        <label className="block">
          <span className="mb-1 block text-sm font-medium">Email</span>
          <input name="email" type="email" className={input} placeholder="you@company.com" autoComplete="email" />
        </label>

        <label className="block">
          <span className="mb-1 block text-sm font-medium">Interested in *</span>
          <select name="interest" required defaultValue={defaultInterest || ""} className={input}>
            <option value="" disabled>
              Select a product or service
            </option>
            {defaultInterest && !options.includes(defaultInterest) && <option>{defaultInterest}</option>}
            {options.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-1 block text-sm font-medium">What do you need?</span>
          <textarea name="message" rows={3} className={input} placeholder="Branches, number of users, timeline, current software…" />
        </label>

        {error && <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-[#ff6321] px-6 py-3.5 font-semibold text-white transition hover:bg-[#e85716] disabled:opacity-60"
        >
          {loading ? "Sending…" : kind === "product" ? "Request demo & pricing" : "Request free consultation"}
        </button>

        <div className="flex flex-col gap-2 pt-1 text-sm sm:flex-row">
          <a
            href={waLink(`Hi Adszoo, I'm interested in ${defaultInterest || "your products/services"}.`, whatsappNumber)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-full border border-[#25D366] px-4 py-2.5 text-center font-semibold text-[#128C7E] hover:bg-[#25D366]/10"
          >
            WhatsApp us
          </a>
          <a
            href={kind === "product" ? CONTACT.productPhoneHref : CONTACT.phoneHref}
            className="flex-1 rounded-full border border-gray-300 px-4 py-2.5 text-center font-semibold hover:bg-gray-50"
          >
            Call {kind === "product" ? CONTACT.productPhone : CONTACT.phone}
          </a>
        </div>
        <p className="text-xs text-gray-500">We never share your details. No spam — one call or WhatsApp to understand your needs.</p>
      </form>
    </div>
  );
}
