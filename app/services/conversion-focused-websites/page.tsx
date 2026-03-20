import { Navbar } from "@/components/layout/navbar";
import { FooterSection } from "@/components/layout/sections/footer";
import Image from "next/image";
import Link from "next/link";

export default function ConversionFocusedWebsites() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-black">
        {/* HERO */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT */}
            <div>
              <p className="text-sm text-gray-500 mb-3">
                Conversion Focused Website Design Agency
              </p>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Websites That Don’t Just Look Good.
                <br /> They Generate Leads.
              </h1>

              <p className="mt-6 text-gray-600 text-lg">
                Most websites fail because they are built for aesthetics, not
                action. We design high-converting websites engineered to turn
                visitors into qualified leads, calls, and revenue.
              </p>

              <div className="mt-8 flex gap-4">
                <Link
                  href="/contact"
                  className="bg-black text-white px-6 py-3 rounded-lg"
                >
                  Get Free Audit
                </Link>

                <Link
                  href="/services"
                  className="border border-black px-6 py-3 rounded-lg"
                >
                  View Services
                </Link>
              </div>

              <p className="mt-4 text-sm text-gray-500">
                Only conversion-driven execution.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative w-full h-[400px]">
              <Image
                src="/Dashboard.png"
                alt="Conversion focused website dashboard"
                fill
                className="object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* TRUST LOGOS */}
        {/* <section className="py-12 border-t border-b">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-gray-500 mb-6">Trusted by growing brands</p>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 opacity-70">
              {["clay", "zapier", "invideo", "corgi", "sync", "kernel"].map(
                (item, i) => (
                  <div key={i} className="text-sm font-medium">
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </section> */}

        {/* PROBLEM */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold">
              Why Your Website Isn’t Generating Leads
            </h2>

            <p className="mt-4 text-gray-600">
              You don’t have a traffic problem. You have a conversion problem.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                "Visitors don’t know what to do next",
                "No clear call-to-action strategy",
                "Confusing layout kills attention",
                "Messaging doesn’t connect",
                "No trust signals or proof",
                "No structured user journey",
              ].map((item, i) => (
                <div key={i} className="border p-6 rounded-xl">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS (MATCHING REFERENCE STRUCTURE) */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center">
              How We Build Conversion Systems
            </h2>

            {/* STEP 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
              <Image
                src="/1.png"
                alt="Research and strategy"
                width={500}
                height={350}
                className="rounded-xl"
              />

              <div>
                <p className="text-sm text-gray-500">STEP 1</p>
                <h3 className="text-xl font-semibold mt-2">
                  Deep Research & Positioning
                </h3>
                <p className="text-gray-600 mt-3">
                  We analyze your audience, competitors, and behavior patterns
                  to identify what actually drives conversions.
                </p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
              <div>
                <p className="text-sm text-gray-500">STEP 2</p>
                <h3 className="text-xl font-semibold mt-2">
                  Conversion Architecture
                </h3>
                <p className="text-gray-600 mt-3">
                  Every section is strategically designed to guide users toward
                  a specific action.
                </p>
              </div>

              <Image
                src="/2.png"
                alt="Content strategy"
                width={500}
                height={350}
                className="rounded-xl"
              />
            </div>

            {/* STEP 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
              <Image
                src="/4.png"
                alt="Analytics and growth"
                width={500}
                height={350}
                className="rounded-xl"
              />

              <div>
                <p className="text-sm text-gray-500">STEP 3</p>
                <h3 className="text-xl font-semibold mt-2">
                  Optimization & Tracking
                </h3>
                <p className="text-gray-600 mt-3">
                  We track behavior, clicks, and conversions to continuously
                  improve performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LEAD CAPTURE (YOU WERE MISSING THIS) */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6 text-center border rounded-xl p-10 shadow-sm">
            <h2 className="text-2xl font-semibold">
              Get a Free Website Conversion Audit
            </h2>

            <p className="text-gray-600 mt-3">
              We’ll break down exactly why your site isn’t converting and how to
              fix it.
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

        {/* DELIVERABLES */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl text-center font-semibold">
              What You Actually Get
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                "Conversion optimized layouts",
                "SEO structured pages",
                "High-speed performance",
                "Lead funnels & forms",
                "Tracking & analytics setup",
                "Mobile-first UX",
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 border rounded-xl">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-black text-white py-24 text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-semibold">
              Stop Losing Leads to a Bad Website
            </h2>

            <p className="mt-4 text-gray-300">
              If your website isn’t converting, it’s costing you money every
              day.
            </p>

            <Link
              href="/contact"
              className="inline-block mt-8 bg-white text-black px-6 py-3 rounded-lg"
            >
              Start Your Project
            </Link>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}
