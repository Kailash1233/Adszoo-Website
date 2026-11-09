import { Navbar } from "@/components/layout/navbar";
import { FooterSection } from "@/components/layout/sections/footer";
import Link from "next/link";
import type { Metadata } from "next";
import { CONTACT, waLink } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/thank-you" },
  title: "Thank You | Adszoo",
  description:
    "Your message has been received. The Adszoo team will contact you shortly.",
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-black tracking-tight">
        <section className="py-32">
          <div className="max-w-3xl mx-auto text-center px-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
              Thank you — we&apos;ve got your request!
            </h1>

            <p className="mt-6 text-gray-600 text-lg">
              Our team will review your details and reach out within a few working
              hours (usually on WhatsApp). Need it faster? Message us now.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={waLink("Hi Adszoo, I just submitted an enquiry on your website.")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold"
              >
                WhatsApp {CONTACT.productPhone}
              </a>
              <Link href="/case-study" className="border border-black px-6 py-3 rounded-full font-semibold">
                See our work
              </Link>
              <Link href="/blogs" className="border border-gray-300 px-6 py-3 rounded-full font-semibold">
                Read our guides
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}
