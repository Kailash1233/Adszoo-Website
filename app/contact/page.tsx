import { Navbar } from "@/components/layout/navbar";
import { FooterSection } from "@/components/layout/sections/footer";
import type { Metadata } from "next";

import ContactForm from "./contact-form";

export const metadata: Metadata = {
  title: "Contact Adszoo | Start Your Project",
  description:
    "Contact Adszoo to discuss your marketing strategy, website design, or lead generation system. Let's build something that drives real results.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-black">
        <section className="bg-gradient-to-b from-gray-50 to-white py-28">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
              Start Your Project
            </h1>

            <p className="mt-6 text-gray-600 text-lg tracking-tight">
              Tell us about your business and what you want to build.
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
            <ContactForm />

            <div>
              <h2 className="text-2xl font-semibold tracking-tighter">
                Contact Information
              </h2>

              <p className="mt-6 text-gray-600 tracking-tight">
                Prefer direct communication? Reach out through the details below
                and we will respond as soon as possible.
              </p>

              <div className="mt-10 space-y-6">
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">info@adszoo.in</p>
                </div>

                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-600">+91 63690 50929</p>
                </div>

                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-600">Chennai, India</p>
                </div>

                <div className="mt-12 border rounded-xl p-6">
                  <h3 className="font-semibold">What Happens Next?</h3>

                  <ul className="mt-4 text-gray-600 space-y-2 text-sm">
                    <li>• We review your project details</li>
                    <li>• Our team reaches out within 24 hours</li>
                    <li>• We discuss strategy and next steps</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}
