import { Navbar } from "@/components/layout/navbar";
import { FooterSection } from "@/components/layout/sections/footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Conversion Rate Optimization Services | Increase Website Conversions | Adszoo",
  description:
    "Increase conversions without increasing traffic. Adszoo helps businesses identify conversion leaks, optimize user experience, and turn visitors into leads and customers.",
};

export default function ConversionRateOptimization() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-black">
        {/* HERO */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Turn More Visitors Into Customers Without Increasing Traffic
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              If your website is getting traffic but not generating leads,
              you&apos;re losing potential revenue every day. We identify
              what&apos;s broken and fix it using data, testing, and conversion
              strategy.
            </p>

            <div className="mt-10 flex justify-center gap-4">
              <Link
                href="/contact"
                className="bg-black text-white px-6 py-3 rounded-lg"
              >
                Get Free CRO Audit
              </Link>

              <Link
                href="/services"
                className="border border-black px-6 py-3 rounded-lg"
              >
                View Services
              </Link>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              No guesswork. Only data-driven improvements.
            </p>
          </div>
        </section>

        {/* PROOF */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-semibold">
              Small Changes. Big Impact.
            </h2>

            <p className="text-gray-600 mt-3">
              Conversion optimization isn’t about redesigning everything. It’s
              about fixing what’s stopping users from taking action.
            </p>

            <div className="mt-10 border rounded-xl p-8">
              <p className="text-3xl font-bold">+32% Conversion Increase</p>
              <p className="text-gray-600 mt-2">
                Landing page restructure + CTA optimization
              </p>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center">
              Why Your Website Isn’t Converting
            </h2>

            <p className="text-gray-600 text-center mt-4 max-w-2xl mx-auto">
              Most websites don’t fail because of traffic. They fail because
              users don’t know what to do or don’t trust what they see.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                "Visitors leave without taking action",
                "Weak or unclear call-to-actions",
                "Confusing layout and user flow",
                "Forms create friction",
                "No trust signals or credibility",
                "Poor mobile experience",
              ].map((item, i) => (
                <div key={i} className="bg-white border p-6 rounded-xl">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center">
              Our CRO Process
            </h2>

            <div className="grid md:grid-cols-4 gap-8 mt-14">
              {[
                {
                  title: "Find Conversion Leaks",
                  desc: "Identify where users drop off and why they don’t convert.",
                },
                {
                  title: "Fix High-Impact Areas",
                  desc: "Improve messaging, layout, CTAs and user flow.",
                },
                {
                  title: "Test What Works",
                  desc: "Run experiments instead of guessing.",
                },
                {
                  title: "Scale What Converts",
                  desc: "Double down on what drives results.",
                },
              ].map((step, i) => (
                <div key={i} className="border rounded-xl p-6 text-center">
                  <div className="text-xl font-bold mb-3">{i + 1}</div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT WE OPTIMIZE */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center">
              What We Optimize
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                "Landing pages",
                "Call-to-action buttons",
                "Website messaging",
                "Forms and funnels",
                "User journey flow",
                "Page speed and UX",
              ].map((item, i) => (
                <div key={i} className="bg-white border p-6 rounded-xl">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LEAD CAPTURE */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6 text-center border rounded-xl p-10">
            <h2 className="text-2xl font-semibold">Get a Free CRO Audit</h2>

            <p className="text-gray-600 mt-3">
              We’ll show you exactly what’s stopping your website from
              converting.
            </p>

            <form className="mt-8 flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Your Website URL"
                className="border px-4 py-3 rounded-lg w-full"
              />
              <button className="bg-black text-white px-6 py-3 rounded-lg">
                Get Audit
              </button>
            </form>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center">
              What You Gain
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                "Increase conversions without more traffic",
                "Reduce wasted ad spend",
                "Turn visitors into qualified leads",
                "Improve funnel performance",
                "Make data-driven decisions",
                "Build a predictable growth system",
              ].map((item, i) => (
                <div key={i} className="bg-white border p-6 rounded-xl">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-black text-white py-24">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold">
              Stop Losing Leads From Your Website
            </h2>

            <p className="mt-4 text-gray-300">
              Every day your website doesn’t convert, you’re losing potential
              customers.
            </p>

            <Link
              href="/contact"
              className="inline-block mt-8 bg-white text-black px-6 py-3 rounded-lg"
            >
              Optimize My Website
            </Link>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}
