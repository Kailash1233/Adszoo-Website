import { CaseStudyPreview } from "@/components/CaseStudySection";
import { Navbar } from "@/components/layout/navbar";
import { FooterSection } from "@/components/layout/sections/footer";
import { TestimonialSection } from "@/components/layout/sections/testimonial";
import Link from "next/link";

const serviceName = "Website Design Company Chennai";

const whatsappLink = `https://wa.me/916369050929?text=Hi%20I%20am%20interested%20in%20${encodeURIComponent(
  serviceName
)}`;

export default function WebsiteDesignChennai() {
  return (
    <main className="bg-white text-black tracking-tighter">
      <Navbar />

      {/* HERO */}
      <section className="py-28 text-center border-b">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6 leading-tight tracking-tighter">
            Website Design Company in Chennai
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We design high-converting, SEO-optimized websites for businesses in
            Chennai. From Tambaram to OMR, we help brands generate leads,
            increase visibility, and grow online with conversion-focused design.
          </p>

          <Link
            href={whatsappLink}
            className="inline-block mt-8 bg-black text-white px-8 py-3 rounded-full font-semibold"
          >
            Get Free Website Consultation
          </Link>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <h2 className="text-3xl font-bold">
            Best Website Design Services in Chennai
          </h2>

          <p>
            Looking for a professional website design company in Chennai? We
            specialize in building websites that are not just visually appealing
            but also optimized for performance, SEO, and conversions.
          </p>

          <p>
            Whether you are a startup, small business, or enterprise, our
            websites are designed to turn visitors into leads and customers.
          </p>
        </div>
      </section>

      {/* LOCATION CLUSTER */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Website Design Services Across Chennai
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/website-design-tambaram"
              className="border p-6 rounded-lg"
            >
              Website Design in Tambaram →
            </Link>

            <Link
              href="/website-design-velachery"
              className="border p-6 rounded-lg"
            >
              Website Design in Velachery →
            </Link>

            <Link href="/website-design-omr" className="border p-6 rounded-lg">
              Website Design in OMR →
            </Link>

            <Link
              href="/website-design-porur"
              className="border p-6 rounded-lg"
            >
              Website Design in Porur →
            </Link>

            <Link
              href="/website-design-anna-nagar"
              className="border p-6 rounded-lg"
            >
              Website Design in Anna Nagar →
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <h2 className="text-3xl font-bold">Our Website Design Services</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Business website design</li>
            <li>Landing page design</li>
            <li>Lead generation websites</li>
            <li>Custom web development</li>
            <li>SEO optimized websites</li>
            <li>Mobile responsive design</li>
          </ul>

          <h2 className="text-3xl font-bold">
            Conversion Focused Website Design
          </h2>

          <p>
            We don’t just design websites. We build conversion systems. Every
            page is structured to guide visitors toward a specific action such
            as filling a form, booking a call, or making a purchase.
          </p>
        </div>
      </section>

      <CaseStudyPreview />

      {/* SEO */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <h2 className="text-3xl font-bold">
            SEO Friendly Website Design in Chennai
          </h2>

          <p>
            Our websites are built with SEO best practices to help you rank on
            Google for keywords like:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Website design Chennai</li>
            <li>Web design company Chennai</li>
            <li>Website designers near me</li>
            <li>Affordable Website design Chennai</li>
          </ul>

          <p>
            We focus on speed, structure, and content optimization to improve
            rankings.
          </p>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <h2 className="text-3xl font-bold">Industries We Serve</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Real Estate</li>
            <li>Healthcare</li>
            <li>Ecommerce</li>
            <li>Education</li>
            <li>Interior Design</li>
            <li>Local Businesses</li>
          </ul>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <h2 className="text-3xl font-bold">
            Why Choose Our Website Design Company in Chennai
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Conversion focused design approach</li>
            <li>SEO optimized development</li>
            <li>Local Chennai market expertise</li>
            <li>Fast delivery and support</li>
          </ul>
        </div>
      </section>

      <TestimonialSection />

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-4 tracking-tighter">
          <h2 className="text-3xl font-bold text-center text-primary">
            Frequently Asked Questions
          </h2>

          <div>
            <h3 className="font-semibold">
              How much does website design cost in Chennai?
            </h3>
            <p className="text-gray-600">
              Pricing depends on features, pages, and requirements.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">How long does it take?</h3>
            <p className="text-gray-600">
              Most websites take 1-2 weeks to complete.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Build a Website That Generates Leads
        </h2>

        <Link
          href={whatsappLink}
          className="px-10 py-4 bg-white text-black rounded-lg"
        >
          Get Started
        </Link>
      </section>

      <FooterSection />
    </main>
  );
}
