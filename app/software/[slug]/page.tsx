import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { FooterSection } from "@/components/layout/sections/footer";
import EnquiryForm from "@/components/EnquiryForm";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import FaqBlock from "@/components/seo/FaqBlock";
import ProductVisual from "@/components/products/ProductVisual";
import { solutionPages, getSolutionPage } from "@/lib/solution-pages";
import { getProduct } from "@/lib/products-data";
import { CONTACT, SITE_URL, absUrl, jsonLd, waLink } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

const PRODUCT_SLUG = {
  unizo: "unizo-gst-billing-inventory-software",
  "smart-queue": "smart-queue-restaurant-queue-management-system",
} as const;
const INTEREST = {
  unizo: "Unizo — Billing & Inventory Software",
  "smart-queue": "Smart Queue — Restaurant Queue System",
} as const;

export function generateStaticParams() {
  return solutionPages.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getSolutionPage(slug);
  if (!s) return { title: "Not found" };
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    keywords: s.keywords,
    alternates: { canonical: `/software/${s.slug}` },
    openGraph: { url: `/software/${s.slug}`, title: s.metaTitle, description: s.metaDescription, type: "website" },
  };
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const s = getSolutionPage(slug);
  if (!s) notFound();
  const productSlug = PRODUCT_SLUG[s.product];
  const product = getProduct(productSlug)!;
  const siblings = solutionPages.filter((x) => x.product === s.product && x.slug !== s.slug);

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${product.name} by Adszoo`,
    applicationCategory: "BusinessApplication",
    operatingSystem: s.product === "unizo" ? "Windows, Web (Cloud)" : "Web (any phone, tablet or smart TV)",
    description: s.quickAnswer,
    url: absUrl(`/software/${s.slug}`),
    keywords: s.keywords.join(", "),
    publisher: { "@id": `${SITE_URL}/#organization` },
    isPartOf: { "@type": "WebPage", url: absUrl(`/products/${productSlug}`) },
  };

  return (
    <>
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
      <main className="bg-white text-black tracking-tight">
        <section className="bg-gradient-to-b from-[#fff6ed] to-white">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:py-20 lg:grid-cols-2">
            <div>
              <Breadcrumbs
                items={[
                  { name: "Products", href: "/products" },
                  { name: product.name, href: `/products/${productSlug}` },
                  { name: s.eyebrow.replace(/^.*?(for|·)\s*/i, "") || s.eyebrow, href: `/software/${s.slug}` },
                ]}
              />
              <span className="mt-6 inline-flex rounded-full bg-[#ff6321]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#c2410c]">
                {s.eyebrow}
              </span>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tighter md:text-5xl">{s.h1}</h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-700">
                <strong>Quick answer:</strong> {s.quickAnswer}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#enquire" className="rounded-full bg-[#ff6321] px-7 py-3.5 text-center font-semibold text-black hover:bg-[#ff7a45]">
                  Book a free demo
                </a>
                <a
                  href={waLink(`Hi Adszoo, I'd like a demo of ${product.name} (${s.h1}).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#25D366] px-7 py-3.5 text-center font-semibold text-black"
                >
                  WhatsApp {CONTACT.productPhone}
                </a>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Or call <a className="font-semibold text-black underline" href={CONTACT.productPhoneHref}>{CONTACT.productPhone}</a> · Demo in Tamil or English
              </p>
            </div>
            <ProductVisual slug={productSlug} items={s.visual?.items} customer={s.visual?.customer} />
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">The problem</h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">{s.intro}</p>
              <ul className="mt-6 space-y-3">
                {s.pains.map((p) => (
                  <li key={p} className="flex gap-3 text-gray-700">
                    <span className="text-red-600">✕</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            {s.example ? (
              <div className="rounded-3xl border border-gray-200 p-6 md:p-8">
                <h2 className="text-xl font-bold">{s.example.title}</h2>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50 text-left">
                        {s.example.rows[0].map((h) => (
                          <th key={h} className="px-3 py-2 font-semibold">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {s.example.rows.slice(1).map((r) => (
                        <tr key={r[0]} className="border-t">
                          {r.map((c, i) => (
                            <td key={i} className="px-3 py-2">{c}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm text-gray-600">{s.example.note}</p>
              </div>
            ) : (
              <div className="rounded-3xl bg-gray-950 p-8 text-white">
                <h2 className="text-2xl font-bold">What changes</h2>
                <ul className="mt-5 space-y-3 text-gray-200">
                  {product.outcomes.map((o) => (
                    <li key={o} className="flex gap-3">
                      <span className="text-green-400">✓</span>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-3xl font-bold tracking-tight">How {product.name} helps</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {s.howItHelps.map((h) => (
                <div key={h.title} className="rounded-2xl border border-gray-200 bg-white p-6">
                  <h3 className="text-lg font-semibold">{h.title}</h3>
                  <p className="mt-2 text-gray-600">{h.description}</p>
                </div>
              ))}
            </div>
            <Link href={`/products/${productSlug}`} className="mt-8 inline-block font-semibold text-[#c2410c] underline">
              See every {product.name} feature →
            </Link>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">{product.pricingModel.title}</h2>
              <p className="mt-4 text-lg text-gray-600">{product.pricingModel.description}</p>
              <ul className="mt-6 space-y-2">
                {product.pricingModel.points.map((p) => (
                  <li key={p}>✓ {p}</li>
                ))}
              </ul>
              {siblings.length > 0 && (
                <>
                  <h3 className="mt-10 font-semibold">{product.name} for other businesses</h3>
                  <ul className="mt-3 space-y-2">
                    {siblings.map((x) => (
                      <li key={x.slug}>
                        <Link href={`/software/${x.slug}`} className="hover:text-[#c2410c]">→ {x.h1}</Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            <EnquiryForm kind="product" defaultInterest={INTEREST[s.product]} />
          </div>
        </section>

        <FaqBlock faqs={[...s.faqs, ...product.faqs.slice(0, 2)]} />
      </main>
      <FooterSection />
    </>
  );
}
