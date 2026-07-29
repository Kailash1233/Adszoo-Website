import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import {
  Globe,
  Search,
  Bot,
  PenTool,
  TrendingUp,
  Target,
  Rocket,
  Users,
  Lightbulb,
  Building2,
  Stethoscope,
  MapPin,
  ShoppingCart,
} from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import { FooterSection } from "@/components/layout/sections/footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import { industries } from "@/lib/industries-data";

export const metadata: Metadata = {
  title: "Industries We Serve | Website, SEO & AI Visibility — Adszoo",
  description:
    "Adszoo builds websites, SEO, and AI search visibility strategies tailored to real estate, dental, interior design, healthcare, and ecommerce businesses.",
  alternates: {
    canonical: "https://www.adszoo.in/industries",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Industries We Serve | Adszoo",
    description:
      "Marketing, websites, and AI search visibility built specifically for your industry — not generic templates.",
    url: "https://www.adszoo.in/industries",
    siteName: "Adszoo",
    type: "website",
  },
};

// One representative icon per industry card, matching the primary service
// listed first for that industry in industries-data.ts
const industryIconMap: Record<string, LucideIcon> = {
  "marketing-for-real-estate": Building2,
  "marketing-for-dentists": Stethoscope,
  "marketing-for-interior-designers": PenTool,
  "marketing-for-hospitals": Stethoscope,
  "marketing-for-ecommerce": ShoppingCart,
};

export default function IndustriesPage() {
  return (
    <>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-FDVY1D5V41"} />
      <Navbar />

      <main className="bg-white text-black">
        {/* Hero */}
        <section className="border-b">
          <div className="container mx-auto max-w-7xl px-4 py-24 lg:py-32">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex rounded-full bg-[#ff6321]/10 px-4 py-2 text-sm font-semibold text-[#ff6321]">
                Industries
              </span>

              <h1 className="mt-8 text-4xl font-black leading-tight tracking-tight md:text-6xl">
                Built for how your industry
                <span className="text-[#ff6321]"> actually gets searched.</span>
              </h1>

              <p className="mt-8 text-lg leading-8 text-neutral-600">
                Generic marketing sells generic results. We build websites, SEO,
                and AI search visibility strategies around how real customers in
                your industry search, compare, and decide.
              </p>
            </div>
          </div>
        </section>

        {/* Industry Cards */}
        <section className="py-24">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry) => {
                const Icon = industryIconMap[industry.slug] ?? Globe;

                return (
                  <Link
                    key={industry.slug}
                    href={`/industries/${industry.slug}`}
                    className="group flex flex-col rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ff6321]/10">
                      <Icon className="h-6 w-6 text-[#ff6321]" />
                    </div>

                    <h3 className="mt-6 text-xl font-bold leading-snug">
                      {industry.industryName} Marketing
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-6 text-neutral-600">
                      {industry.heroSubtitle}
                    </p>

                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#ff6321] group-hover:underline">
                      Explore {industry.industryName} Marketing
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </Link>
                );
              })}

              {/* CTA card for industries not explicitly listed */}
              <div className="flex flex-col justify-between rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 p-8">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/5">
                    <Lightbulb className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold leading-snug">
                    Don&apos;t see your industry?
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">
                    We build custom strategies for businesses outside these five
                    categories too. Let&apos;s talk about what your customers
                    are actually searching for.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-black hover:underline"
                >
                  Get in touch
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why industry-specific matters */}
        <section className="bg-neutral-50 py-24">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <span className="font-semibold uppercase tracking-widest text-[#ff6321]">
                  Why It Matters
                </span>
                <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                  A hospital and an ecommerce store don&apos;t get found the
                  same way.
                </h2>
              </div>

              <div className="space-y-6 text-lg leading-8 text-neutral-600">
                <p>
                  A patient searching for symptom relief, a homeowner comparing
                  interior designers, and a shopper comparing products are all
                  running completely different searches, with completely
                  different intent and urgency.
                </p>
                <p>
                  Generic marketing templates ignore that difference. We build
                  content, SEO structure, and AI search visibility specific to
                  how your exact customer actually searches, compares, and
                  decides to buy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}
