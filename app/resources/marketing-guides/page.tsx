import { Navbar } from "@/components/layout/navbar";
import { FooterSection } from "@/components/layout/sections/footer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Marketing Guides — SEO, Ads, Websites & Lead Generation | Adszoo",
  description: "Free marketing guides from Adszoo on SEO, AEO/GEO, Google & Meta Ads, conversion-focused websites and lead generation for Indian businesses.",
  alternates: { canonical: "/resources/marketing-guides" },
  openGraph: { url: "/resources/marketing-guides", title: "Marketing Guides — SEO, Ads, Websites & Lead Generation | Adszoo", description: "Free marketing guides from Adszoo on SEO, AEO/GEO, Google & Meta Ads, conversion-focused websites and lead generation for Indian businesses." },
};



export default function ServicePage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* HERO */}
      <section className="py-28 text-center bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Websites That Turn Visitors Into Leads
          </h1>

          <p className="text-xl text-slate-600 mb-8">
            If your website is getting traffic but not generating inquiries,
            you&apos;re losing potential customers every day. We design websites
            focused on conversions, not just aesthetics.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-lg"
          >
            Get Free Website Audit
            <ArrowRight size={18} />
          </Link>

          <p className="text-sm text-slate-500 mt-4">
            No guesswork. Only conversion-driven execution.
          </p>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            Why Most Websites Fail to Convert
          </h2>

          <p className="text-slate-600 mb-6">
            Most websites don’t fail because of traffic. They fail because users
            don’t know what to do, don’t trust what they see, or face too much
            friction.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8 text-slate-600">
            {[
              "No clear call-to-action",
              "Confusing layout and navigation",
              "Weak messaging and positioning",
              "No trust signals or proof",
              "Slow loading pages",
              "Poor mobile experience",
            ].map((item, i) => (
              <div key={i} className="border rounded-lg p-4">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FRAMEWORK */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Our Conversion Framework</h2>

          <p className="text-slate-600 mb-10">
            We don’t design randomly. Every section is built to guide visitors
            toward a specific action.
          </p>

          <div className="space-y-6 text-slate-600">
            <div className="border p-6 rounded-lg">
              <h3 className="font-semibold mb-2">1. Clear Positioning</h3>
              <p>
                Make users instantly understand what you offer and why it
                matters.
              </p>
            </div>

            <div className="border p-6 rounded-lg">
              <h3 className="font-semibold mb-2">2. Conversion Structure</h3>
              <p>Guide visitors step-by-step toward taking action.</p>
            </div>

            <div className="border p-6 rounded-lg">
              <h3 className="font-semibold mb-2">3. Lead Capture System</h3>
              <p>Forms, CTAs, and flows designed to generate inquiries.</p>
            </div>

            <div className="border p-6 rounded-lg">
              <h3 className="font-semibold mb-2">4. Tracking & Optimization</h3>
              <p>Measure performance and continuously improve conversions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What You Get</h2>

          <div className="grid md:grid-cols-3 gap-6 text-slate-600">
            {[
              "Conversion optimized layouts",
              "SEO-friendly structure",
              "Mobile-first responsive design",
              "Lead capture systems",
              "Landing page integrations",
              "Analytics & tracking setup",
            ].map((item, i) => (
              <div key={i} className="border p-6 rounded-lg">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD CAPTURE */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 text-center border rounded-xl p-10">
          <h2 className="text-2xl font-bold mb-4">Get a Free Website Audit</h2>

          <p className="text-slate-600 mb-6">
            We’ll show you exactly what’s stopping your website from generating
            leads.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter your website URL"
              className="border px-4 py-3 rounded-lg w-full"
            />
            <button className="bg-black text-white px-6 py-3 rounded-lg">
              Get Audit
            </button>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Stop Losing Leads From Your Website
          </h2>

          <p className="text-slate-300 mb-8">
            Every day your website doesn’t convert, you’re leaving money on the
            table.
          </p>

          <Link
            href="/contact"
            className="px-10 py-4 bg-white text-black rounded-lg font-semibold"
          >
            Book Strategy Call
          </Link>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}
