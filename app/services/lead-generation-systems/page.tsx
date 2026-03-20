import { Navbar } from "@/components/layout/navbar";
import { FooterSection } from "@/components/layout/sections/footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lead Generation Systems | Adszoo",
  description:
    "Adszoo builds lead generation systems that help businesses consistently attract, capture, and convert qualified leads through websites, funnels, and advertising campaigns.",
};

export default function LeadGenerationSystems() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-black">
        {/* HERO */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-24">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Lead Generation Systems
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Generating leads consistently requires more than just running ads
              or having a website. A lead generation system combines strategy,
              technology, and conversion optimization to attract and capture
              qualified prospects for your business.
            </p>

            <div className="mt-10 flex justify-center gap-4">
              <Link
                href="/contact"
                className="bg-black text-white px-6 py-3 rounded-lg"
              >
                Build My Lead System
              </Link>

              <Link
                href="/services"
                className="border border-black px-6 py-3 rounded-lg"
              >
                View Services
              </Link>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center">
              Why Many Businesses Struggle With Lead Generation
            </h2>

            <p className="text-gray-600 text-center mt-4 max-w-2xl mx-auto">
              Businesses often rely on inconsistent marketing tactics instead of
              building a structured lead generation system.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                "No clear customer acquisition strategy",
                "Traffic without lead capture mechanisms",
                "Weak landing pages",
                "Poor follow-up systems",
                "Lack of marketing automation",
                "Unoptimized conversion funnels",
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

        {/* WHAT IS */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold">
              What Is a Lead Generation System
            </h2>

            <p className="mt-6 text-gray-600">
              A lead generation system is a structured marketing framework that
              attracts potential customers, captures their information, and
              nurtures them until they are ready to make a purchase.
            </p>

            <p className="mt-4 text-gray-600">
              Instead of relying on random marketing activities, a lead
              generation system creates a predictable process for generating
              qualified leads and growing revenue.
            </p>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center">
              Our Lead Generation Process
            </h2>

            <div className="grid md:grid-cols-4 gap-8 mt-14">
              {[
                {
                  title: "Audience Research",
                  desc: "Understanding your target customers and market.",
                },
                {
                  title: "Lead Funnel Design",
                  desc: "Creating landing pages and conversion flows.",
                },
                {
                  title: "Traffic Generation",
                  desc: "Driving qualified traffic through ads and SEO.",
                },
                {
                  title: "Lead Nurturing",
                  desc: "Using automation and follow-ups to convert leads.",
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
                "Lead capture landing pages",
                "Conversion optimized website flows",
                "CRM and lead tracking setup",
                "Marketing automation workflows",
                "Ad campaign integration",
                "Performance analytics and reporting",
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
              Industries We Build Lead Systems For
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mt-10">
              {[
                "Real Estate",
                "Healthcare",
                "Education",
                "SaaS",
                "Ecommerce",
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
        <section className="bg-black text-white py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold">
              Build a Predictable Lead Generation System
            </h2>

            <p className="mt-4 text-gray-300">
              Adszoo helps businesses build scalable systems that generate
              consistent leads and revenue growth.
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
