import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { FooterSection } from "@/components/layout/sections/footer";
import EnquiryForm from "@/components/EnquiryForm";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import FaqBlock from "@/components/seo/FaqBlock";
import { products } from "@/lib/products-data";

export const metadata: Metadata = {
  title: "Digital Marketing, Website & Software Development Services in Chennai | Adszoo",
  description:
    "Website development, custom software & mobile apps, SEO/AEO/GEO for manufacturers, social media marketing, Google & Meta Ads — all services from Adszoo, Chennai.",
  alternates: { canonical: "/services" },
  openGraph: {
    url: "/services",
    title: "Adszoo Services — Websites, Software, SEO & Social Media",
    description:
      "Conversion-focused websites, custom software, SEO/AEO/GEO and social media marketing that generate enquiries.",
  },
};

const pillars = [
  {
    title: "Website Development",
    blurb:
      "Fast, SEO-ready websites engineered to convert visitors into calls, WhatsApp chats and RFQs — not just look good.",
    links: [
      { label: "Conversion-focused websites", href: "/services/conversion-focused-websites" },
      { label: "E-commerce website development", href: "/services/ecommerce-website-development" },
      { label: "Landing page design", href: "/services/landing-page-design" },
      { label: "Conversion rate optimisation", href: "/services/conversion-rate-optimization" },
      { label: "Website design in Chennai", href: "/services/website-design-chennai" },
    ],
  },
  {
    title: "Software Development",
    blurb:
      "Custom web apps, mobile apps, billing & inventory systems, portals and SaaS — built and supported in-house.",
    links: [
      { label: "Custom software & web apps", href: "/services/custom-software-development" },
      { label: "Mobile app development", href: "/services/mobile-app-development" },
      { label: "Web systems (website + automation)", href: "/websystems" },
      { label: "Our software products", href: "/products" },
    ],
  },
  {
    title: "SEO · AEO · GEO",
    blurb:
      "Rank on Google, get cited by ChatGPT & AI Overviews, and win high-intent B2B enquiries — our strongest specialisation.",
    links: [
      { label: "SEO & lead generation for manufacturers", href: "/services/seo-for-manufacturers" },
      { label: "SEO, AEO & GEO services", href: "/seo-aeo-geo-services" },
      { label: "Lead generation systems", href: "/services/lead-generation-systems" },
      { label: "Sales funnel building", href: "/services/sales-funnel-building" },
    ],
  },
  {
    title: "Social Media Marketing",
    blurb:
      "Organic content, reels and paid campaigns on Instagram, Facebook, LinkedIn and Google — measured in leads.",
    links: [
      { label: "Social media marketing (organic + ads)", href: "/services/social-media-marketing" },
      { label: "Meta Ads management", href: "/services/meta-ads-management" },
      { label: "Google Ads management", href: "/services/google-ads-management" },
    ],
  },
];

const faqs = [
  {
    question: "What services does Adszoo offer?",
    answer:
      "Adszoo offers conversion-focused website development, e-commerce, custom software and mobile app development, SEO/AEO/GEO (with a specialisation in B2B manufacturers), social media marketing, and Google & Meta Ads management, plus ready-made software products like Unizo, PropertyGenie and Smart Queue.",
  },
  {
    question: "Where is Adszoo located?",
    answer:
      "Adszoo is based in Chromepet, Chennai, Tamil Nadu, and works with businesses across Chennai, Tamil Nadu, India and overseas clients remotely.",
  },
  {
    question: "Do you work with manufacturers outside Chennai?",
    answer:
      "Yes. Most of our B2B SEO and website work is remote. We work with manufacturers, traders and exporters across Tamil Nadu and India, and visit on-site when needed.",
  },
  {
    question: "How do I get started?",
    answer:
      "Book a free consultation via the form, WhatsApp or a phone call. We'll review your current website and marketing and propose a practical plan with clear deliverables and pricing.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-black tracking-tight">
        <section className="bg-gradient-to-b from-[#fff6ed] to-white">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <Breadcrumbs items={[{ name: "Services", href: "/services" }]} />
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tighter md:text-6xl">
              Websites, software &amp; marketing that bring in <span className="text-[#ff6321]">enquiries</span>
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-gray-600">
              Adszoo is a Chennai digital marketing and software company. We build conversion-focused websites and custom software, then drive the right traffic to them with SEO, AEO, GEO and social media — with a particular focus on generating B2B leads for manufacturers.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-3xl border border-gray-200 p-8">
                <h2 className="text-2xl font-bold">{p.title}</h2>
                <p className="mt-3 text-gray-600">{p.blurb}</p>
                <ul className="mt-6 space-y-2">
                  {p.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="font-medium hover:text-[#ff6321]">
                        → {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-950 py-16 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-3xl font-bold">Ready-made software products</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {products.map((p) => (
                <Link key={p.slug} href={`/products/${p.slug}`} className="rounded-2xl border border-white/10 p-6 hover:border-[#ff6321]">
                  <h3 className="text-xl font-bold">{p.name}</h3>
                  <p className="mt-2 text-sm text-gray-300">{p.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">Not sure where to start?</h2>
              <p className="mt-4 text-lg text-gray-600">
                Most businesses need two things: a website that converts and a steady stream of the right visitors. Tell us your goal and we&apos;ll recommend the shortest path to more enquiries.
              </p>
            </div>
            <EnquiryForm kind="service" />
          </div>
        </section>

        <FaqBlock faqs={faqs} />
      </main>
      <FooterSection />
    </>
  );
}
