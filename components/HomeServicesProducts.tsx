import Link from "next/link";
import { products } from "@/lib/products-data";

const core = [
  {
    title: "Conversion-Focused Website Development",
    text: "Fast, SEO-ready websites and e-commerce stores built around one goal — more calls, WhatsApp chats and enquiries.",
    href: "/services/conversion-focused-websites",
    cta: "Website development",
  },
  {
    title: "Custom Software, Web & Mobile Apps",
    text: "Billing & inventory systems, portals, dashboards, SaaS and mobile apps — designed, built and supported in-house.",
    href: "/services/custom-software-development",
    cta: "Software development",
  },
  {
    title: "SEO · AEO · GEO for B2B Manufacturers",
    text: "Spec-led product pages, technical SEO and AI-search optimisation that turn procurement searches into RFQs.",
    href: "/services/seo-for-manufacturers",
    cta: "SEO for manufacturers",
  },
  {
    title: "Social Media Marketing — Organic + Ads",
    text: "Reels, content and Meta/LinkedIn ad campaigns measured in leads and cost per lead, not likes.",
    href: "/services/social-media-marketing",
    cta: "Social media marketing",
  },
];

/** Homepage block: core services + products, with crawlable internal links. */
export default function HomeServicesProducts() {
  return (
    <section id="what-we-do" className="bg-white py-16 md:py-24 tracking-tight">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-2 font-medium text-[#ff6321]">What we do</p>
        <h2 className="max-w-4xl text-4xl font-extrabold tracking-tighter md:text-6xl">
          Websites, software &amp; marketing that turn traffic into enquiries
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-gray-600">
          From a Chromepet, Chennai team that builds and markets — we design the website, write the software,
          and bring the right buyers to it with SEO, AEO, GEO and social media.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {core.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group rounded-3xl border border-gray-200 p-8 transition hover:-translate-y-1 hover:border-[#ff6321] hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold group-hover:text-[#ff6321]">{c.title}</h3>
              <p className="mt-3 text-gray-600">{c.text}</p>
              <span className="mt-6 inline-block font-semibold text-[#ff6321]">Explore {c.cta} →</span>
            </Link>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-gray-950 p-8 text-white md:p-12">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="font-medium text-[#fdba74]">Adszoo Products</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">
                Ready-to-deploy software for Indian businesses
              </h2>
            </div>
            <Link href="/products" className="w-fit rounded-full bg-[#ff6321] px-6 py-3 font-semibold text-white">
              View all products
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {products.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="rounded-2xl border border-white/10 p-6 transition hover:border-[#ff6321]"
              >
                <h3 className="text-xl font-bold">{p.name}</h3>
                <p className="mt-2 text-sm text-gray-300">{p.tagline}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-[#fdba74]">Book a demo →</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
