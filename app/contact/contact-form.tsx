"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Need = "service" | "product";

const INDUSTRIES = [
  "Manufacturing / Industrial",
  "Construction & building materials",
  "Hardware & trading",
  "Real estate & builders",
  "Healthcare & clinics",
  "Restaurants & food",
  "Retail & e-commerce",
  "Education & coaching",
  "Professional services",
  "Other",
];

const SERVICES = [
  "Website development",
  "SEO / Google Maps / AI search",
  "Social media marketing",
  "Google or Meta ads",
  "Custom software or app",
  "Not sure yet: need advice",
];

const PRODUCTS = [
  "Unizo: billing & inventory software",
  "Smart Queue: restaurant queue system",
  "NFC Google review cards",
  "PropertyGenie: real estate listings",
];

const BUDGETS = [
  "Below ₹15,000",
  "₹15,000 – ₹30,000",
  "₹30,000 – ₹75,000",
  "₹75,000 – ₹1.5 lakh",
  "Above ₹1.5 lakh",
  "Not sure yet",
];

const CHALLENGES: Record<Need, string[]> = {
  service: [
    "Not getting enough enquiries",
    "Website looks outdated or doesn't convert",
    "Not showing up on Google / Google Maps",
    "Spending on ads but few leads",
    "Need a new website or app built",
  ],
  product: [
    "Billing, stock or credit is manual",
    "Weekend waiting crowd at the restaurant",
    "Need more Google reviews",
    "Sharing property listings & capturing leads",
  ],
};

const field =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-[15px] outline-none transition focus:border-[#ff6321] focus:ring-2 focus:ring-[#ff6321]/20";
const label = "mb-1.5 block text-sm font-medium text-gray-800";

export default function ContactForm() {
  const router = useRouter();
  const [need, setNeed] = useState<Need>("service");
  const [challenge, setChallenge] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const interest = String(fd.get("interest") || "");
    const other = String(fd.get("challengeOther") || "").trim();
    const payload = {
      name: fd.get("name"),
      company: fd.get("company"),
      phone: fd.get("phone"),
      website: fd.get("website"),
      industry: fd.get("industry"),
      interest,
      kind: need,
      budget: need === "service" ? fd.get("budget") : undefined,
      challenge: challenge === "Something else" ? `Other: ${other}` : challenge,
      hp: fd.get("hp"),
      page: "/contact",
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
          (window as any).gtag?.("event", "generate_lead", { interest, page: "/contact", lead_type: need });
        } catch {}
        router.push(`/thank-you?interest=${encodeURIComponent(interest)}`);
        return;
      }
      setError(data.error || "Something went wrong. Please WhatsApp or call us instead.");
    } catch {
      setError("Network error. Please WhatsApp or call us instead.");
    }
    setLoading(false);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" aria-label="Contact Adszoo">
      <input type="text" name="hp" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={label}>Your name *</label>
          <input id="cf-name" name="name" required minLength={2} autoComplete="name" placeholder="Full name" className={field} />
        </div>
        <div>
          <label htmlFor="cf-company" className={label}>Business name *</label>
          <input id="cf-company" name="company" required autoComplete="organization" placeholder="Company / shop / clinic" className={field} />
        </div>
        <div>
          <label htmlFor="cf-phone" className={label}>Phone / WhatsApp *</label>
          <input id="cf-phone" name="phone" type="tel" inputMode="tel" required autoComplete="tel" placeholder="+91 98xxx xxxxx" className={field} />
        </div>
        <div>
          <label htmlFor="cf-website" className={label}>
            Website <span className="font-normal text-gray-500">(optional)</span>
          </label>
          <input id="cf-website" name="website" type="text" inputMode="url" autoComplete="url" placeholder="yourbusiness.com" className={field} />
        </div>
      </div>

      <div>
        <label htmlFor="cf-industry" className={label}>Industry *</label>
        <select id="cf-industry" name="industry" required defaultValue="" className={field}>
          <option value="" disabled>Select your industry</option>
          {INDUSTRIES.map((i) => (
            <option key={i}>{i}</option>
          ))}
        </select>
      </div>

      <fieldset>
        <legend className={label}>What are you looking for? *</legend>
        <div className="grid grid-cols-2 gap-2 rounded-2xl bg-gray-100 p-1">
          {(["service", "product"] as Need[]).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => {
                setNeed(n);
                setChallenge("");
              }}
              aria-pressed={need === n}
              className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                need === n ? "bg-white text-black shadow-sm" : "text-gray-600 hover:text-black"
              }`}
            >
              {n === "service" ? "A service" : "A product"}
            </button>
          ))}
        </div>
      </fieldset>

      <div className={need === "service" ? "grid gap-5 sm:grid-cols-2" : ""}>
        <div>
          <label htmlFor="cf-interest" className={label}>{need === "service" ? "Service needed *" : "Product *"}</label>
          <select id="cf-interest" key={need} name="interest" required defaultValue="" className={field}>
            <option value="" disabled>{need === "service" ? "Select a service" : "Select a product"}</option>
            {(need === "service" ? SERVICES : PRODUCTS).map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
        {need === "service" && (
          <div>
            <label htmlFor="cf-budget" className={label}>Monthly marketing budget *</label>
            <select id="cf-budget" name="budget" required defaultValue="" className={field}>
              <option value="" disabled>Select a range</option>
              {BUDGETS.map((b) => (
                <option key={b}>{b}</option>
              ))}
            </select>
          </div>
        )}
      </div>

      <fieldset>
        <legend className={label}>Main business challenge *</legend>
        <div className="flex flex-wrap gap-2">
          {[...CHALLENGES[need], "Something else"].map((c) => (
            <label
              key={c}
              className={`cursor-pointer rounded-full border px-4 py-2 text-sm transition has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[#ff6321]/40 ${
                challenge === c ? "border-[#ff6321] bg-[#fff6ed] font-semibold text-black" : "border-gray-200 text-gray-700 hover:border-gray-400"
              }`}
            >
              <input
                type="radio"
                name="challenge"
                value={c}
                required
                checked={challenge === c}
                onChange={() => setChallenge(c)}
                className="sr-only"
              />
              {c}
            </label>
          ))}
        </div>
        {challenge === "Something else" && (
          <input
            name="challengeOther"
            required
            maxLength={200}
            placeholder="In one line, what's holding your business back?"
            className={`${field} mt-3`}
            aria-label="Describe your challenge"
          />
        )}
      </fieldset>

      {error && <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-[#ff6321] px-6 py-4 text-base font-semibold text-black transition hover:bg-[#ff7a45] disabled:opacity-60"
      >
        {loading ? "Sending…" : need === "service" ? "Get my free growth plan" : "Request demo & quote"}
      </button>
      <p className="text-center text-xs text-gray-500">
        We reply within a few working hours, usually on WhatsApp. Your details are never shared.
      </p>
    </form>
  );
}
