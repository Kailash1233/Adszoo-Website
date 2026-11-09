import { Navbar } from "@/components/layout/navbar";
import { FooterSection } from "@/components/layout/sections/footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/services/google-ads-management" },
  title: "Google Ads Management Services | Adszoo",
  description:
    "Professional Google Ads management services by Adszoo. Generate leads and increase sales with optimized PPC campaigns.",
};

export default function GoogleAdsManagement() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-black">
        {/* HERO */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-28">
          <div className="max-w-6xl mx-auto text-center px-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Google Ads Management
            </h1>

            <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
              Google Ads is one of the fastest ways to generate qualified leads
              and customers. At Adszoo we design and manage high performance PPC
              campaigns that help businesses scale revenue and acquire customers
              consistently.
            </p>

            <div className="mt-10 flex justify-center gap-4">
              <Link
                href="/contact"
                className="bg-black text-white px-6 py-3 rounded-lg"
              >
                Start Google Ads
              </Link>

              <Link
                href="/services/landing-page-design"
                className="border border-black px-6 py-3 rounded-lg"
              >
                Improve Landing Pages
              </Link>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center">
              Why Most Google Ads Campaigns Fail
            </h2>

            <p className="text-gray-600 text-center mt-4 max-w-2xl mx-auto">
              Many businesses launch Google Ads but fail to see results. Without
              the right strategy and optimization, ad budgets can be wasted
              quickly.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                "Poor keyword targeting",
                "Weak ad copy",
                "Unoptimized landing pages",
                "Incorrect bidding strategies",
                "No conversion tracking",
                "Lack of campaign optimization",
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

        {/* WHAT IS GOOGLE ADS */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-5xl mx-auto text-center px-6">
            <h2 className="text-3xl font-semibold">What Is Google Ads</h2>

            <p className="mt-6 text-gray-600">
              Google Ads is a pay-per-click advertising platform that allows
              businesses to appear at the top of search results when potential
              customers search for products or services online.
            </p>

            <p className="mt-4 text-gray-600">
              Unlike traditional marketing, Google Ads targets users who are
              actively searching for solutions. This makes it one of the most
              effective channels for generating high-intent leads and sales.
            </p>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center">
              Our Google Ads Process
            </h2>

            <div className="grid md:grid-cols-4 gap-8 mt-14">
              {[
                {
                  title: "Keyword Research",
                  desc: "Identify high intent keywords that drive conversions.",
                },
                {
                  title: "Campaign Setup",
                  desc: "Build optimized campaigns with strong ad structure.",
                },
                {
                  title: "Ad Optimization",
                  desc: "Improve ad copy, targeting and bidding strategies.",
                },
                {
                  title: "Performance Scaling",
                  desc: "Continuously optimize campaigns to improve ROI.",
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

        {/* SERVICES */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center">
              What Our Google Ads Service Includes
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mt-14">
              {[
                "Keyword research and targeting",
                "Campaign structure and setup",
                "Ad copywriting and testing",
                "Landing page optimization",
                "Conversion tracking setup",
                "Continuous campaign optimization",
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
              Industries We Run Google Ads For
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mt-10">
              {[
                "Real Estate",
                "Healthcare",
                "Education",
                "Ecommerce",
                "Local Businesses",
                "SaaS",
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
              Start Generating Leads With Google Ads
            </h2>

            <p className="mt-4 text-gray-300">
              Let Adszoo manage your Google Ads campaigns and help you generate
              consistent leads and customers.
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
