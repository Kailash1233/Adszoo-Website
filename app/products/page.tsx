import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { FooterSection } from "@/components/layout/sections/footer";
import EnquiryForm from "@/components/EnquiryForm";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import FaqBlock from "@/components/seo/FaqBlock";
import { products } from "@/lib/products-data";
import { CONTACT, SITE_URL, absUrl, jsonLd, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Business Software Products for Indian SMEs — Billing, Real Estate & Restaurant Queue | Adszoo",
  description:
    "Ready-to-deploy software built by Adszoo, Chennai: Unizo GST billing & inventory software, PropertyGenie for real estate brokers, and Smart Queue restaurant waitlist system. One-time fee + support.",
  keywords: [
    "business software Chennai",
    "software products for small business India",
    "GST billing software Tamil Nadu",
    "restaurant queue management system",
    "real estate broker software",
  ],
  alternates: { canonical: "/products" },
  openGraph: {
    url: "/products",
    title: "Adszoo Software Products — Unizo, PropertyGenie & Smart Queue",
    description:
      "Practical software for Indian businesses: billing & inventory, property listings & leads, and restaurant queue management.",
  },
};

const faqs = [
  {
    question: "What software products does Adszoo offer?",
    answer:
      "Adszoo offers three ready-to-deploy products: Unizo (GST billing, stock and accounts software for construction material and trading businesses), PropertyGenie (listing pages, brochures and lead capture for real estate brokers) and Smart Queue (a QR-based restaurant waitlist and table management system).",
  },
  {
    question: "How are Adszoo products priced?",
    answer:
      "Most Adszoo products are sold with a one-time setup or licence fee plus an optional support and maintenance retainer, instead of expensive monthly per-user subscriptions. PropertyGenie also has a free plan and pay-per-listing packs.",
  },
  {
    question: "Can Adszoo customise a product for my business?",
    answer:
      "Yes. All products are built in-house by the Adszoo team in Chennai, so we can add modules, change workflows, integrate with your existing billing or POS, and white-label the product with your brand.",
  },
  {
    question: "Do you offer demos and on-site installation?",
    answer:
      "Yes. We offer free live demos over WhatsApp video or Google Meet, on-site installation and training in Chennai, and remote setup anywhere in Tamil Nadu and India.",
  },
];

export default function ProductsPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Adszoo software products",
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: absUrl(`/products/${p.slug}`),
      name: p.name,
    })),
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  return (
    <>
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(itemList) }} />
      <main className="bg-white text-black tracking-tight">
        <section className="bg-gradient-to-b from-[#fff6ed] to-white">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <Breadcrumbs items={[{ name: "Products", href: "/products" }]} />
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tighter md:text-6xl">
              Software that runs real businesses —
              <span className="text-[#ff6321]"> built by Adszoo</span>
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-gray-600">
              Beyond websites and marketing, we build software for the everyday problems of Indian businesses — billing at a busy material shop, sharing property listings that actually convert, and managing a restaurant&apos;s weekend waiting crowd. Every product is affordable, supported locally from Chennai, and can be customised for you.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#enquire" className="rounded-full bg-[#ff6321] px-7 py-3.5 text-center font-semibold text-white">
                Request a demo
              </a>
              <a
                href={waLink("Hi Adszoo, I'd like to know more about your software products.")}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#25D366] px-7 py-3.5 text-center font-semibold text-white"
              >
                WhatsApp {CONTACT.productPhone}
              </a>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-3">
            {products.map((p) => (
              <article key={p.slug} className="flex flex-col rounded-3xl border border-gray-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl">
                <span className="w-fit rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ background: p.accent === "#F5B800" ? "#b98a00" : p.accent }}>
                  {p.status}
                </span>
                <h2 className="mt-5 text-3xl font-extrabold tracking-tight">{p.name}</h2>
                <p className="mt-2 font-semibold text-gray-800">{p.tagline}</p>
                <p className="mt-4 flex-1 text-gray-600">{p.shortDescription}</p>
                <ul className="mt-6 space-y-2 text-sm text-gray-700">
                  {p.idealFor.slice(0, 3).map((i) => (
                    <li key={i}>✓ {i}</li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col gap-2">
                  <Link href={`/products/${p.slug}`} className="rounded-full bg-black px-6 py-3 text-center font-semibold text-white">
                    Explore {p.name}
                  </Link>
                  <a
                    href={waLink(`Hi Adszoo, I'd like a demo of ${p.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-gray-300 px-6 py-3 text-center font-semibold"
                  >
                    Get a demo on WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-gray-950 py-20 text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-3">
            {[
              ["One-time fee, not endless rent", "Pay once for setup and licence. Add a support plan only if you want it."],
              ["Local support from Chennai", "Installation, training in Tamil or English, and a WhatsApp support line that actually replies."],
              ["Built in-house, customisable", "We wrote every line, so we can adapt the product to how your business works."],
            ].map(([t, d]) => (
              <div key={t}>
                <h2 className="text-xl font-bold text-[#fdba74]">{t}</h2>
                <p className="mt-3 text-gray-300">{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Not sure which product fits?</h2>
              <p className="mt-4 text-lg text-gray-600">
                Tell us what&apos;s slowing your business down. If none of our products fit, our{" "}
                <Link href="/services/custom-software-development" className="font-semibold text-[#ff6321] underline">
                  custom software development team
                </Link>{" "}
                can build exactly what you need — web apps, mobile apps, dashboards and integrations.
              </p>
            </div>
            <EnquiryForm kind="product" />
          </div>
        </section>

        <FaqBlock faqs={faqs} title="Questions about Adszoo products" />
      </main>
      <FooterSection />
    </>
  );
}
