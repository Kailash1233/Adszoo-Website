import { Navbar } from "@/components/layout/navbar";
import { FooterSection } from "@/components/layout/sections/footer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meta Ads Management | Facebook & Instagram Ads | Adszoo",
  description:
    "Adszoo provides Meta Ads management services to help businesses generate leads and grow sales through Facebook and Instagram advertising.",
};

export default function MetaAdsManagement() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-black">
        {/* HERO */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-28">
          <div className="max-w-6xl mx-auto text-center px-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Meta Ads Management
            </h1>

            <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
              Reach your ideal customers through Facebook and Instagram ads.
              Adszoo helps businesses generate leads and sales using highly
              targeted Meta advertising campaigns that are designed for
              measurable growth.
            </p>

            <div className="flex justify-center gap-4 mt-10">
              <Link
                href="/contact"
                className="bg-black text-white px-6 py-3 rounded-lg"
              >
                Launch Meta Ads
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
              Why Many Facebook & Instagram Ads Fail
            </h2>

            <p className="text-gray-600 text-center mt-4 max-w-2xl mx-auto">
              Businesses often launch Meta ads without a clear strategy. Without
              proper targeting, creatives, and conversion optimization,
              campaigns can quickly waste budget.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                "Poor audience targeting",
                "Weak ad creatives",
                "Unoptimized landing pages",
                "No conversion tracking",
                "Incorrect campaign structure",
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

        {/* WHAT IS META ADS */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-5xl mx-auto text-center px-6">
            <h2 className="text-3xl font-semibold">What Are Meta Ads</h2>

            <p className="mt-6 text-gray-600">
              Meta Ads allow businesses to advertise on Facebook and Instagram
              using advanced targeting capabilities. Businesses can reach users
              based on demographics, interests, behaviors, and purchasing
              intent.
            </p>

            <p className="mt-4 text-gray-600">
              With the right strategy, Meta advertising can generate consistent
              leads, brand awareness, and sales for businesses across multiple
              industries.
            </p>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center">
              Our Meta Ads Process
            </h2>

            <div className="grid md:grid-cols-4 gap-8 mt-14">
              {[
                {
                  title: "Audience Research",
                  desc: "Identify the most profitable audiences to target.",
                },
                {
                  title: "Creative Strategy",
                  desc: "Design ad creatives that capture attention.",
                },
                {
                  title: "Campaign Setup",
                  desc: "Build campaigns optimized for conversions.",
                },
                {
                  title: "Optimization",
                  desc: "Continuously improve campaign performance.",
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
              Our Meta Ads Services
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mt-14">
              {[
                "Audience targeting strategy",
                "Ad creative development",
                "Campaign setup and structure",
                "Conversion tracking setup",
                "Retargeting campaigns",
                "Performance optimization",
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
              Industries We Run Meta Ads For
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
              Scale Your Business With Meta Ads
            </h2>

            <p className="mt-4 text-gray-300">
              Let Adszoo manage your Facebook and Instagram ad campaigns and
              help you generate consistent leads and customers.
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
