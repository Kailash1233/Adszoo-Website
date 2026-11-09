import { Navbar } from "@/components/layout/navbar";
import { FooterSection } from "@/components/layout/sections/footer";
import Link from "next/link";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Lead Generation Guide for Businesses in India | Adszoo",
  description: "A practical lead generation guide: channels, landing pages, tracking and follow-up systems that turn traffic into qualified enquiries.",
  alternates: { canonical: "/resources/lead-generation-guide" },
  openGraph: { url: "/resources/lead-generation-guide", title: "Lead Generation Guide for Businesses in India | Adszoo", description: "A practical lead generation guide: channels, landing pages, tracking and follow-up systems that turn traffic into qualified enquiries." },
};



export default function LeadGenerationGuide() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* HERO */}
      <section className="py-28 bg-slate-50 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Lead Generation Guide for Businesses
        </h1>

        <p className="text-lg text-slate-600">
          Learn how to generate consistent leads using websites, funnels, and
          marketing strategies.
        </p>
      </section>

      {/* CONTENT */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 space-y-8 text-slate-700">
          <h2 className="text-2xl font-semibold">What is Lead Generation?</h2>
          <p>
            Lead generation is the process of attracting and converting
            potential customers into people interested in your business.
          </p>

          <h2 className="text-2xl font-semibold">
            Best Lead Generation Channels
          </h2>
          <ul className="list-disc pl-6">
            <li>Website forms</li>
            <li>Landing pages</li>
            <li>Paid ads</li>
            <li>SEO content</li>
            <li>Email marketing</li>
          </ul>

          <h2 className="text-2xl font-semibold">
            How to Improve Lead Quality
          </h2>
          <p>
            Focus on targeting the right audience, improving messaging, and
            optimizing your conversion funnel.
          </p>

          <div className="border p-6 rounded-xl bg-slate-50">
            <p className="font-medium">Want more qualified leads?</p>
            <Link href="/contact" className="text-blue-600 underline">
              Discuss your ideas
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
