import { Navbar } from "@/components/layout/navbar";
import { FooterSection } from "@/components/layout/sections/footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/services/sales-funnel-building" },
  title: "Sales Funnel Building Services | Adszoo",
  description:
    "Adszoo builds high converting sales funnels that attract prospects, nurture leads, and convert them into customers through optimized funnel strategies.",
};

export default function SalesFunnelBuilding() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-black">
        {/* HERO */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-28">
          <div className="max-w-6xl mx-auto text-center px-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Sales Funnel Building
            </h1>

            <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
              A strong sales funnel guides potential customers from discovery to
              purchase. At Adszoo we design optimized funnels that attract
              prospects, capture leads, and convert them into paying customers.
            </p>

            <div className="flex justify-center gap-4 mt-10">
              <Link
                href="/contact"
                className="bg-black text-white px-6 py-3 rounded-lg"
              >
                Build My Funnel
              </Link>

              <Link
                href="/services/lead-generation-systems"
                className="border border-black px-6 py-3 rounded-lg"
              >
                Lead Generation Systems
              </Link>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center">
              Why Many Businesses Struggle With Sales Funnels
            </h2>

            <p className="text-gray-600 text-center mt-4 max-w-2xl mx-auto">
              Many businesses rely on random marketing tactics instead of a
              structured funnel that guides prospects toward conversion.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                "No structured customer journey",
                "Traffic without conversion flow",
                "Poor lead nurturing strategy",
                "Weak landing pages",
                "No retargeting campaigns",
                "Lack of funnel analytics",
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

        {/* WHAT IS A SALES FUNNEL */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-5xl mx-auto text-center px-6">
            <h2 className="text-3xl font-semibold">What Is a Sales Funnel</h2>

            <p className="mt-6 text-gray-600">
              A sales funnel is a marketing system that guides potential
              customers through different stages of the buying journey.
            </p>

            <p className="mt-4 text-gray-600">
              It starts with attracting visitors, capturing leads, nurturing
              them with valuable information, and ultimately converting them
              into customers.
            </p>
          </div>
        </section>

        {/* FUNNEL PROCESS */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center">
              Our Funnel Building Process
            </h2>

            <div className="grid md:grid-cols-4 gap-8 mt-14">
              {[
                {
                  title: "Audience Research",
                  desc: "Identify the target audience and customer journey.",
                },
                {
                  title: "Funnel Strategy",
                  desc: "Design funnel stages to guide prospects toward conversion.",
                },
                {
                  title: "Page Creation",
                  desc: "Build landing pages and lead capture systems.",
                },
                {
                  title: "Optimization",
                  desc: "Improve funnel performance through testing and analytics.",
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
              What Our Funnel Service Includes
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mt-14">
              {[
                "Funnel strategy development",
                "Landing page creation",
                "Lead capture forms",
                "Email automation setup",
                "Retargeting integration",
                "Conversion tracking and analytics",
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
          <div className="max-w-5xl mx-auto text-center px-6">
            <h2 className="text-3xl font-semibold">
              Industries We Build Funnels For
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
        <section className="bg-black text-white py-28">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-3xl font-semibold">
              Build a Funnel That Converts Visitors Into Customers
            </h2>

            <p className="mt-4 text-gray-300">
              Adszoo helps businesses create optimized sales funnels that
              generate consistent leads and revenue growth.
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
