import { Navbar } from "@/components/layout/navbar";
import { FooterSection } from "@/components/layout/sections/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Adszoo",
  description:
    "Your message has been received. The Adszoo team will contact you shortly.",
};

export default function ThankYouPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-black">
        <section className="py-32">
          <div className="max-w-3xl mx-auto text-center px-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
              Thank You!
            </h1>

            <p className="mt-6 text-gray-600 text-lg">
              Your message has been successfully sent. Our team will review your
              request and get back to you within 24 hours.
            </p>

            <div className="mt-10">
              <Link
                href="/"
                className="bg-black text-white px-6 py-3 rounded-lg"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}
