// File: components/LeadPopup.tsx

"use client";

import { FacebookIcon, Instagram, Linkedin } from "lucide-react";
import React, { useEffect, useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  website: string;
  services: string[];
  budget: string;
  message: string;
};

const defaultState: FormState = {
  name: "",
  email: "",
  phone: "",
  website: "",
  services: [],
  budget: "",
  message: "",
};

type ErrorMap = Partial<Record<keyof FormState | "message", string>>;

export default function LeadPopup() {
  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState(false); // NEW - controls CSS animation
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>(defaultState);

  const [errors, setErrors] = useState<ErrorMap>({});

  useEffect(() => {
    const t = setTimeout(() => {
      setOpen(true);
      // wait for the element to mount, then trigger animation for smooth transition
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimate(true);
        });
      });
    }, 9000); // keep your 9000 ms delay
    return () => clearTimeout(t);
  }, []);

  // helper to close with exit animation
  const closeWithAnimation = () => {
    // start exit animation
    setAnimate(false);
    // wait for the animation to finish, then unmount
    const ANIM_DURATION = 500; // must match duration in classes (ms)
    setTimeout(() => {
      setOpen(false);
    }, ANIM_DURATION);
  };

  const toggleService = (s: string) => {
    setForm((f) => ({
      ...f,
      services: f.services.includes(s)
        ? f.services.filter((x) => x !== s)
        : [...f.services, s],
    }));
  };

  const validate = (): boolean => {
    const e: ErrorMap = {};

    if (!form.name.trim()) e.name = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email";
    if (!/^[0-9]{7,15}$/.test(form.phone.replace(/[^0-9]/g, "")))
      e.phone = "Enter a valid phone number";

    // services error is a string message (not an array) — allowed by ErrorMap now
    if (!form.services.length) e.services = "Pick at least one service";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  // Replace your current handleSubmit with this
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setErrors({});
    try {
      // Replace YOUR_FORM_ID with your actual Formspree ID (e.g. mgebkzqp)
      const FORMSPREE_ENDPOINT = "https://formspree.io/f/myznbjkn";

      const payload = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        website: form.website,
        services: form.services.join(", "), // send as comma-separated string
        budget: form.budget,
        message: form.message,
        _subject: "New lead — Adszoo popup", // optional
      };

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSuccess("Thanks — we'll reach out within 24 hours.");
        setForm(defaultState);
        setTimeout(() => setOpen(false), 1400);
      } else {
        // Formspree returns json with error details when not ok
        const data = await res.json().catch(() => null);
        const message =
          data?.error ||
          data?.errors?.map((x: any) => x.message).join(", ") ||
          "Failed to submit. Try again.";
        setErrors({ message });
      }
    } catch (err) {
      setErrors({ message: "Network error. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
      {/* backdrop */}
      <div
        onClick={closeWithAnimation}
        className={`absolute inset-0 backdrop-blur-sm transition-opacity duration-500 ${
          animate ? "bg-black/50 opacity-100" : "bg-black/0 opacity-0"
        }`}
        aria-hidden
      />

      <div
        role="dialog"
        aria-modal="true"
        className={`
            relative m-4 w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100
            transform transition-all duration-500 ease-[cubic-bezier(.16,.84,.44,1)]
            ${
              animate
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-6 md:translate-y-8 scale-95"
            }
          `}
        // prevent clicking inside from closing accidentally
        onClick={(e) => e.stopPropagation()}
        style={{ willChange: "transform, opacity" }}
      >
        <div className="flex gap-4 p-6 md:p-8">
          {/* Left visual */}
          <div className="hidden md:flex md:w-1/3 flex-col justify-between bg-gradient-to-b from-emerald-600 to-green-500 text-white p-6 rounded-xl">
            <div>
              <h3 className="text-lg font-semibold">Bring your brand online</h3>
              <p className="mt-2 text-sm opacity-90">
                High-converting websites + Ads that scale. Let us handle the
                digital while you run the business.
              </p>
            </div>
            <div className="mt-4">
              <div className="font-medium mb-2">Connect with us</div>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/company/adszoo/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
                >
                  <Linkedin size={20} />
                </a>

                <a
                  href="https://www.instagram.com/adszoo_/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
                >
                  <Instagram size={20} />
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61565406179842"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
                >
                  <FacebookIcon size={20} />
                </a>
              </div>
            </div>
          </div>
          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full md:w-2/3" noValidate>
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl md:text-2xl font-bold">
                  Ready to take your brand online?
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Fill this quick form and we&apos;ll propose a growth plan.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
              <label className="block">
                <input
                  name="name"
                  className="w-full rounded-lg border px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="Full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                {errors.name && (
                  <div className="text-xs text-red-500 mt-1">{errors.name}</div>
                )}
              </label>

              <label className="block">
                <input
                  name="email"
                  className="w-full rounded-lg border px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="Email address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  type="email"
                />
                {errors.email && (
                  <div className="text-xs text-red-500 mt-1">
                    {errors.email}
                  </div>
                )}
              </label>

              <label className="block">
                <input
                  name="phone"
                  className="w-full rounded-lg border px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="Phone (with country code)"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
                {errors.phone && (
                  <div className="text-xs text-red-500 mt-1">
                    {errors.phone}
                  </div>
                )}
              </label>

              <label className="block">
                <input
                  name="website"
                  className="w-full rounded-lg border px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="Website (optional)"
                  value={form.website}
                  onChange={(e) =>
                    setForm({ ...form, website: e.target.value })
                  }
                />
              </label>
            </div>

            <div className="mt-4">
              <div className="text-sm font-medium">What do you need?</div>
              <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                {["Website", "Performance Ads", "Lead Gen", "Branding"].map(
                  (s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => toggleService(s)}
                      className={`text-left rounded-lg px-3 py-2 border ${
                        form.services.includes(s)
                          ? "bg-indigo-50 border-indigo-400"
                          : "bg-white"
                      } hover:shadow-sm`}
                    >
                      {s}
                    </button>
                  )
                )}
              </div>
              {errors.services && (
                <div className="col-span-2 text-xs text-red-500">
                  {errors.services}
                </div>
              )}
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
              <label className="block">
                <select
                  name="budget"
                  className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                >
                  <option value="">Estimated budget</option>
                  <option value="<10k">Less than ₹10k</option>
                  <option value="10k-50k">₹10k - ₹50k</option>
                  <option value="50k-2L">₹50k - ₹2L</option>
                  <option value=">2L">More than ₹2L</option>
                </select>
              </label>

              <label className="block">
                <input
                  name="message"
                  className="w-full rounded-lg border px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  placeholder="Quick message (optional)"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />
              </label>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center rounded-full px-6 py-2 text-sm font-semibold shadow hover:shadow-md transition disabled:opacity-60 bg-gradient-to-r from-emerald-600 to-green-500 text-white"
              >
                {submitting ? "Sending..." : "Get my proposal"}
              </button>

              <div className="text-sm text-gray-500">
                No spam — we respect your privacy.
              </div>
            </div>

            {errors.message && (
              <div className="mt-3 text-sm text-red-500">{errors.message}</div>
            )}
            {success && (
              <div className="mt-3 text-sm text-green-600">{success}</div>
            )}

            <div className="mt-4 text-xs text-gray-400">
              By submitting you agree to be contacted by Adszoo about your
              enquiry.
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// ------------------------------------------------------------
// File: app/api/leads/route.ts (Next.js App Router API)
// Place this file at: /app/api/leads/route.ts

/*
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // TODO: Hook this up to your CRM, Google Sheets, Airtable, or send an email.
    // Example: send a request to Zapier / Make / your backend
    console.log('New lead', body);
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Could not process' }, { status: 500 });
  }
}
*/

// ------------------------------------------------------------
// Integration notes (drop-ins for your Next.js + Tailwind project):

/*
1) Save `components/LeadPopup.tsx` and import it in your root layout (eg. app/layout.tsx) or the homepage.

   Example (app/layout.tsx):

   import LeadPopup from '@/components/LeadPopup';
   
   export default function RootLayout({ children }: { children: React.ReactNode }) {
     return (
       <html lang="en">
         <body>
           {children}
           <LeadPopup />
         </body>
       </html>
     )
   }

2) API: Add the `app/api/leads/route.ts` file and connect it with your CRM or Zapier. The example simply logs.

3) Tailwind: This component relies on Tailwind v3+ and expects your site to already have Tailwind configured. The design follows Adszoo's aesthetic—clean layout, blue-indigo gradient CTA, rounded cards, and trust microcopy.

4) Accessibility: Focus states, ARIA roles, and proper labels are included. The form is intentionally short to reduce friction.

5) Tracking & analytics: Add a dataLayer or send an event when the form is submitted for conversion tracking.

6) Customization: Change copy, logos, and the left visual area to match your brand images and client logos.
*/
