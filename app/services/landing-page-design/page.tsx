import { Navbar } from "@/components/layout/navbar";
import { FooterSection } from "@/components/layout/sections/footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/services/landing-page-design" },
  title: "Landing Page Design Services | Adszoo",
  description:
    "High converting landing page design services by Adszoo. We design landing pages optimized for ads, lead generation, and sales conversions.",
};

export default function LandingPageDesign() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-black">
        {/* HERO */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-28">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Landing Page Design That Converts
            </h1>

            <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
              A well designed landing page can significantly improve the
              performance of your marketing campaigns. At Adszoo we design
              landing pages specifically built to convert visitors into
              qualified leads and customers.
            </p>

            <div className="flex justify-center gap-4 mt-10">
              <Link
                href="/contact"
                className="bg-black text-white px-6 py-3 rounded-lg"
              >
                Build My Landing Page
              </Link>

              <Link
                href="/services/google-ads-management"
                className="border border-black px-6 py-3 rounded-lg"
              >
                Run Google Ads
              </Link>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center">
              Why Most Landing Pages Fail
            </h2>

            <p className="text-gray-600 text-center mt-4 max-w-2xl mx-auto">
              Many businesses invest in landing pages but fail to generate
              conversions. The problem is usually not traffic but poor
              conversion design.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                "Unclear value proposition",
                "Weak call-to-actions",
                "Too much information on the page",
                "Poor mobile experience",
                "Slow loading speed",
                "Lack of trust signals",
              ].map((item, i) => (
                <div
                  key={i}
                  className="border rounded-xl p-6 hover:shadow-md transition"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT IS LANDING PAGE */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-5xl mx-auto text-center px-6">
            <h2 className="text-3xl font-semibold">
              What Is a Conversion Focused Landing Page
            </h2>

            <p className="mt-6 text-gray-600">
              A landing page is a dedicated web page designed to convert
              visitors into leads or customers. Unlike traditional websites,
              landing pages focus on a single goal such as capturing leads,
              generating inquiries, or driving sales.
            </p>

            <p className="mt-4 text-gray-600">
              When optimized correctly, landing pages can dramatically increase
              the ROI of your advertising campaigns.
            </p>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center">
              Our Landing Page Process
            </h2>

            <div className="grid md:grid-cols-4 gap-8 mt-14">
              {[
                {
                  title: "Audience Research",
                  desc: "Understand the target audience and search intent.",
                },
                {
                  title: "Conversion Layout",
                  desc: "Design page structure that guides users to action.",
                },
                {
                  title: "Persuasive Copy",
                  desc: "Craft messaging that communicates value clearly.",
                },
                {
                  title: "Optimization",
                  desc: "Improve performance and loading speed.",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="border rounded-xl p-6 text-center hover:shadow-md transition"
                >
                  <div className="text-xl font-bold mb-3">{i + 1}</div>

                  <h3 className="font-semibold">{step.title}</h3>

                  <p className="text-gray-600 text-sm mt-2">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT YOU GET */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center">What You Get</h2>

            <div className="grid md:grid-cols-3 gap-8 mt-14">
              {[
                "Conversion optimized design",
                "Mobile responsive layout",
                "Lead capture forms",
                "Fast loading performance",
                "Analytics and tracking setup",
                "Ad campaign compatibility",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white border rounded-xl p-6 hover:shadow-md"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold">
              Industries We Build Landing Pages For
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mt-10">
              {[
                "Real Estate",
                "Healthcare",
                "Education",
                "Ecommerce",
                "SaaS",
                "Local Businesses",
              ].map((item, i) => (
                <span key={i} className="border px-5 py-2 rounded-full text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black text-white py-28">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-3xl font-semibold">
              Launch a High Converting Landing Page
            </h2>

            <p className="mt-4 text-gray-300">
              Adszoo helps businesses design landing pages that generate
              qualified leads and improve marketing ROI.
            </p>

            <Link
              href="/contact"
              className="inline-block mt-8 bg-white text-black px-6 py-3 rounded-lg"
            >
              Get Started
            </Link>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}
