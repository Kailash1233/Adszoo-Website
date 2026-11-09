import { CaseStudyPreview } from "@/components/CaseStudySection";
import { Navbar } from "@/components/layout/navbar";
import { FooterSection } from "@/components/layout/sections/footer";
import { TestimonialSection } from "@/components/layout/sections/testimonial";
import Link from "next/link";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Website Design Company in Velachery, Chennai | Adszoo",
  description: "Website design in Velachery, Chennai for businesses that want more enquiries — conversion-focused design, local SEO and WhatsApp integration.",
  alternates: { canonical: "/services/website-design-velachery" },
  openGraph: { url: "/services/website-design-velachery", title: "Website Design Company in Velachery, Chennai | Adszoo", description: "Website design in Velachery, Chennai for businesses that want more enquiries — conversion-focused design, local SEO and WhatsApp integration." },
};



const serviceName = "Website Design Company in Velachery, Chennai";

const whatsappLink = `https://wa.me/916369050929?text=Hi%20I%20am%20interested%20in%20${encodeURIComponent(
  serviceName
)}`;

export default function WebsiteDesignVelachery() {
  return (
    <main className="bg-white text-black tracking-tighter">
      <Navbar />

      {/* HERO */}
      <section className="py-24 text-center border-b ">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Website Design Services in Velachery
          </h1>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            Looking for a professional website design company in Velachery? We
            build high-converting, SEO-optimized websites that help businesses
            generate leads, increase online visibility, and grow faster in
            Chennai and nearby areas.
          </p>

          <Link
            href={whatsappLink}
            className="inline-block mt-8 bg-black text-white px-8 py-3 rounded-lg font-semibold"
          >
            Get Free Website Consultation
          </Link>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <h2 className="text-3xl font-bold">
            Website Design Company in Velachery, Chennai
          </h2>

          <p>
            A strong online presence starts with a well-designed website. If you
            are a business owner in Velachery, having a professional website is
            no longer optional. Customers search online before making decisions,
            and your website becomes your first impression.
          </p>

          <p>
            As a leading website design company in Velachery, we specialize in
            building websites that are not only visually appealing but also
            optimized for performance, SEO, and conversions.
          </p>

          <p>
            Whether you are a startup, local business, service provider, or
            ecommerce brand, we create websites tailored to your goals.
          </p>

          <h2 className="text-3xl font-bold">
            Why Businesses in Velachery Need a Website
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Increase local visibility in Velachery and Chennai</li>
            <li>Generate consistent leads online</li>
            <li>Build trust and credibility</li>
            <li>Showcase your services and portfolio</li>
            <li>Compete with other local businesses</li>
          </ul>

          <h2 className="text-3xl font-bold">
            Our Website Design Services in Velachery
          </h2>

          <p>
            We provide complete website design and development services in Anna
            Nagar, focusing on performance, SEO, and lead generation.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Business website design</li>
            <li>Landing page design</li>
            <li>Lead generation websites</li>
            <li>Custom web development</li>
            <li>SEO-friendly website structure</li>
            <li>Mobile responsive design</li>
          </ul>

          <h2 className="text-3xl font-bold">
            Conversion Focused Website Design
          </h2>

          <p>
            Most websites look good but fail to convert visitors into customers.
            We design websites with a clear strategy to guide users toward
            action.
          </p>

          <p>
            From call-to-action placement to page structure, every element is
            designed to increase conversions and generate leads.
          </p>

          <h2 className="text-3xl font-bold">
            SEO Optimized Websites for Velachery Businesses
          </h2>

          <p>
            We build websites optimized for search engines so your business can
            rank for keywords like “website design Velachery”, “web designer
            near me”, and “website development company Chennai”.
          </p>

          <p>Our SEO approach includes:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Keyword-optimized content</li>
            <li>Fast loading speed</li>
            <li>Mobile-first design</li>
            <li>Clean code structure</li>
            <li>On-page SEO best practices</li>
          </ul>

          <CaseStudyPreview />

          <h2 className="text-3xl font-bold">
            Industries We Serve in Velachery
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Real Estate</li>
            <li>Healthcare</li>
            <li>Education</li>
            <li>Ecommerce</li>
            <li>Interior Design</li>
            <li>Local Service Businesses</li>
          </ul>

          <h2 className="text-3xl font-bold">
            Why Choose Us as Your Website Design Company
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Conversion-focused approach</li>
            <li>Local expertise in Velachery market</li>
            <li>SEO-driven development</li>
            <li>Fast delivery timelines</li>
            <li>Ongoing support and optimization</li>
          </ul>

          <h2 className="text-3xl font-bold">Areas We Serve Near Velachery</h2>

          <p>
            Apart from Velachery, we also provide website design services in
            nearby locations such as Chromepet, Selaiyur, Perungalathur,
            Mudichur, and Pallavaram.
          </p>
        </div>
      </section>

      <TestimonialSection />

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-center">
            Frequently Asked Questions
          </h2>

          <div>
            <h3 className="font-semibold">
              How much does website design cost in Velachery?
            </h3>
            <p className="text-gray-600">
              The cost depends on your requirements, features, and complexity.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              How long does it take to build a website?
            </h3>
            <p className="text-gray-600">
              Most websites are completed within 1-2 weeks.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Do you provide SEO services?</h3>
            <p className="text-gray-600">
              Yes, we build SEO-optimized websites and offer ongoing SEO
              services.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Build a Website That Generates Leads
        </h2>

        <p className="text-gray-300 mb-8">
          Let’s create a high-converting website for your business in Anna
          Nagar.
        </p>

        <Link
          href={whatsappLink}
          className="px-10 py-4 bg-white text-black rounded-lg font-semibold"
        >
          Get Started
        </Link>
      </section>

      <FooterSection />
    </main>
  );
}
