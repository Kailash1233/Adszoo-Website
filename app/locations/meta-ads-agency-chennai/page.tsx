import { Navbar } from "@/components/layout/navbar";
import { FooterSection } from "@/components/layout/sections/footer";
import Link from "next/link";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Meta Ads Agency in Chennai | Facebook & Instagram Ads — Adszoo",
  description: "Chennai Meta Ads agency running Facebook & Instagram lead, WhatsApp and sales campaigns with proper tracking and creative testing.",
  alternates: { canonical: "/locations/meta-ads-agency-chennai" },
  openGraph: { url: "/locations/meta-ads-agency-chennai", title: "Meta Ads Agency in Chennai | Facebook & Instagram Ads — Adszoo", description: "Chennai Meta Ads agency running Facebook & Instagram lead, WhatsApp and sales campaigns with proper tracking and creative testing." },
};



export default function MetaAdsChennai() {
  return (
    <main className="bg-white text-black">
      <Navbar />

      {/* HERO */}
      <section className="py-28 text-center border-b">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">
            Meta Ads Agency in Chennai
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            Generate high-quality leads and sales using data-driven Meta Ads
            strategies. We help Chennai-based businesses scale with Facebook and
            Instagram ads.
          </p>

          <Link
            href="/contact"
            className="px-8 py-4 bg-black text-white rounded-lg"
          >
            Get Free Ads Audit
          </Link>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <h2 className="text-3xl font-bold">Meta Ads Services in Chennai</h2>

          <p>
            Meta Ads, including Facebook and Instagram advertising, is one of
            the most effective ways to generate leads and drive sales. As a
            performance-focused Meta Ads agency in Chennai, we help businesses
            create, manage, and scale profitable ad campaigns.
          </p>

          <p>
            Whether you are a local business, real estate company, healthcare
            provider, or ecommerce brand, our strategies are designed to
            maximize ROI and reduce wasted spend.
          </p>

          <h2 className="text-3xl font-bold">
            Why Choose a Meta Ads Agency in Chennai?
          </h2>

          <p>
            Local expertise matters. Understanding the Chennai audience,
            demographics, and behavior helps create better-performing campaigns.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Target Chennai-specific audiences</li>
            <li>Localized ad creatives</li>
            <li>Better conversion rates</li>
            <li>Lower cost per lead</li>
          </ul>

          <h2 className="text-3xl font-bold">Our Meta Ads Services</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Ad account setup</li>
            <li>Audience research</li>
            <li>Creative strategy</li>
            <li>Campaign optimization</li>
            <li>Conversion tracking</li>
          </ul>

          <h2 className="text-3xl font-bold">Industries We Work With</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Real Estate</li>
            <li>Healthcare</li>
            <li>Ecommerce</li>
            <li>Education</li>
            <li>Local Businesses</li>
          </ul>

          <h2 className="text-3xl font-bold">Benefits of Meta Ads</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Fast lead generation</li>
            <li>Highly targeted audience</li>
            <li>Scalable campaigns</li>
            <li>Measurable results</li>
          </ul>

          <h2 className="text-3xl font-bold">How We Optimize Campaigns</h2>

          <p>
            We continuously analyze performance metrics, test creatives, and
            refine targeting to improve ROI.
          </p>

          <p>
            Our focus is not just running ads, but building a system that
            generates consistent leads and sales.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Start Generating Leads with Meta Ads
        </h2>

        <Link
          href="/contact"
          className="px-10 py-4 bg-white text-black rounded-lg"
        >
          Book Strategy Call
        </Link>
      </section>

      <FooterSection />
    </main>
  );
}
