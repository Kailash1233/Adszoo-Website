import { ArrowRight } from "lucide-react";
import Link from "next/link";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Google Ads Agency in Chennai | PPC Management — Adszoo",
  description: "Google Ads management in Chennai — search, Performance Max and local campaigns built on high-intent keywords, landing pages and conversion tracking.",
  alternates: { canonical: "/locations/google-ads-agency-chennai" },
  openGraph: { url: "/locations/google-ads-agency-chennai", title: "Google Ads Agency in Chennai | PPC Management — Adszoo", description: "Google Ads management in Chennai — search, Performance Max and local campaigns built on high-intent keywords, landing pages and conversion tracking." },
};



export default function GoogleAdsServicePage() {
  return (
    <main className="bg-white">
      {/* HERO */}

      <section className="py-28 text-center bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">
            Conversion Focused Website Design
          </h1>

          <p className="text-xl text-slate-600 mb-8">
            We build websites designed to convert visitors into leads and paying
            customers using data-driven design and proven conversion frameworks.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-600 text-white rounded-lg"
          >
            Book Intro Call
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* CONTENT */}

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            Why Most Websites Don&apos;t Convert
          </h2>

          <p className="text-slate-600 mb-6">
            Many businesses invest in beautiful websites but fail to generate
            leads because the site lacks conversion strategy, clear messaging,
            and optimized user journeys.
          </p>

          <p className="text-slate-600 mb-6">
            At Adszoo, we design websites as revenue systems. Every page is
            designed with a purpose: attract traffic, guide visitors, and
            convert them into customers.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">
            Our Website Conversion Framework
          </h2>

          <ul className="space-y-4 text-slate-600">
            <li>• Clear value proposition above the fold</li>
            <li>• Conversion driven page structure</li>
            <li>• Lead capture systems</li>
            <li>• SEO optimized content</li>
            <li>• Analytics and performance tracking</li>
          </ul>
        </div>
      </section>

      {/* CTA */}

      <section className="py-20 bg-slate-900 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Turn Your Website Into a Lead Engine
        </h2>

        <Link
          href="/contact"
          className="px-10 py-4 bg-cyan-500 rounded-lg font-semibold"
        >
          Book Strategy Call
        </Link>
      </section>
    </main>
  );
}
