import { Navbar } from "@/components/layout/navbar";
import { FooterSection } from "@/components/layout/sections/footer";
import Link from "next/link";

export default function WebsiteConversionGuide() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* HERO */}
      <section className="py-28 bg-slate-50 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">
            Website Conversion Guide: Turn Visitors Into Customers
          </h1>

          <p className="text-lg text-slate-600">
            A practical guide to improving website conversions using proven
            strategies, better UX, and data-driven optimization.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 space-y-8 text-slate-700">
          <h2 className="text-2xl font-semibold">
            What is Website Conversion?
          </h2>
          <p>
            Website conversion is the process of turning visitors into leads or
            customers. This includes actions like form submissions, calls, or
            purchases.
          </p>

          <h2 className="text-2xl font-semibold">
            Key Elements That Impact Conversion
          </h2>
          <ul className="list-disc pl-6">
            <li>Clear value proposition</li>
            <li>Strong call-to-action</li>
            <li>Trust signals</li>
            <li>Fast loading speed</li>
            <li>Mobile-friendly design</li>
          </ul>

          <h2 className="text-2xl font-semibold">Common Conversion Mistakes</h2>
          <p>
            Most websites fail due to poor structure, weak messaging, and lack
            of clear user journey.
          </p>

          <div className="border p-6 rounded-xl bg-slate-50">
            <p className="font-medium">Want help fixing your website?</p>
            <Link href="/contact" className="text-blue-600 underline">
              Get a free audit →
            </Link>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
