import { Navbar } from "@/components/layout/navbar";
import { FooterSection } from "@/components/layout/sections/footer";
import Link from "next/link";

export default function WebsiteDesignChennai() {
  return (
    <main className="bg-white text-black">
      <Navbar />

      {/* HERO */}
      <section className="py-28 text-center border-b">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">
            Website Design Company in Chennai
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            We design modern, high-converting websites for businesses in
            Chennai. From strategy to execution, we build websites that generate
            leads and revenue.
          </p>

          <Link
            href="/contact"
            className="px-8 py-4 bg-black text-white rounded-lg"
          >
            Get Free Website Consultation
          </Link>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <h2 className="text-3xl font-bold">
            Website Design Services in Chennai
          </h2>

          <p>
            A professional website is essential for any business looking to grow
            online. We create websites that are not only visually appealing but
            also optimized for performance and conversions.
          </p>

          <h2 className="text-3xl font-bold">
            Why Your Business Needs a Website
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Build credibility</li>
            <li>Generate leads</li>
            <li>Showcase services</li>
            <li>Improve online presence</li>
          </ul>

          <h2 className="text-3xl font-bold">Our Website Design Process</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Research and planning</li>
            <li>Design and UI/UX</li>
            <li>Development</li>
            <li>Testing and optimization</li>
          </ul>

          <h2 className="text-3xl font-bold">Features of Our Websites</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Mobile responsive design</li>
            <li>SEO optimized structure</li>
            <li>Fast loading speed</li>
            <li>Conversion focused layout</li>
          </ul>

          <h2 className="text-3xl font-bold">Industries We Serve</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Real Estate</li>
            <li>Healthcare</li>
            <li>Ecommerce</li>
            <li>Education</li>
          </ul>

          <h2 className="text-3xl font-bold">Why Choose Us</h2>

          <p>
            We focus on building websites that not only look good but also
            deliver measurable business results.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Build a Website That Converts
        </h2>

        <Link
          href="/contact"
          className="px-10 py-4 bg-white text-black rounded-lg"
        >
          Get Started
        </Link>
      </section>

      <FooterSection />
    </main>
  );
}
