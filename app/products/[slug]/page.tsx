import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { FooterSection } from "@/components/layout/sections/footer";
import EnquiryForm from "@/components/EnquiryForm";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import FaqBlock from "@/components/seo/FaqBlock";
import ProductVisual from "@/components/products/ProductVisual";
import { products, getProduct } from "@/lib/products-data";
import { blogPosts } from "@/lib/blog-posts";
import { caseStudies } from "@/lib/case-studies-data";
import { CONTACT, SITE_URL, absUrl, jsonLd, waLink } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return { title: "Product not found" };
  const url = `/products/${p.slug}`;
  return {
    title: p.metaTitle,
    description: p.metaDescription,
    keywords: p.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: p.metaTitle,
      description: p.metaDescription,
      images: p.screenshots?.[0] ? [{ url: p.screenshots[0].src }] : [{ url: "/Logo1.png" }],
    },
    twitter: { card: "summary_large_image", title: p.metaTitle, description: p.metaDescription },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  const interest =
    p.name === "Unizo"
      ? "Unizo — Billing & Inventory Software"
      : p.name === "PropertyGenie"
      ? "PropertyGenie — Real Estate Listing Software"
      : "Smart Queue — Restaurant Queue System";

  const blogs = p.relatedBlogs
    .map((s) => blogPosts.find((b) => b.slug === s))
    .filter(Boolean) as typeof blogPosts;
  const studies = p.relatedCaseStudies
    .map((s) => caseStudies.find((c) => c.slug === s))
    .filter(Boolean) as typeof caseStudies;
  const others = products.filter((o) => o.slug !== p.slug);

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${p.name} by Adszoo`,
    description: p.heroDescription,
    applicationCategory: p.category,
    operatingSystem: p.name === "Unizo" ? "Windows, Web (Cloud)" : "Web, Android, iOS (browser)",
    url: absUrl(`/products/${p.slug}`),
    image: p.screenshots?.map((s) => absUrl(s.src)) ?? absUrl("/Logo1.png"),
    featureList: p.features.map((f) => f.title).join(", "),
    keywords: p.keywords.join(", "),
    publisher: { "@id": `${SITE_URL}/#organization` },
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: p.locations.map((l) => ({ "@type": "Place", name: l })),
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: absUrl(`/products/${p.slug}#enquire`),
      description: p.pricingModel.description,
      seller: { "@id": `${SITE_URL}/#organization` },
    },
  };

  return (
    <>
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(softwareSchema) }} />

      <main className="bg-white text-black tracking-tight">
        {/* HERO */}
        <section className="bg-gradient-to-b from-[#fff6ed] to-white">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-2">
            <div>
              <Breadcrumbs items={[{ name: "Products", href: "/products" }, { name: p.name, href: `/products/${p.slug}` }]} />
              <span className="mt-6 inline-flex rounded-full bg-[#ff6321]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#e85716]">
                {p.status} · Built by Adszoo
              </span>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tighter md:text-6xl">
                {p.name}
                <span className="mt-3 block text-2xl font-bold leading-snug tracking-tight text-gray-700 md:text-3xl">{p.tagline}</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">{p.heroDescription}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#enquire" className="rounded-full bg-[#ff6321] px-7 py-3.5 text-center font-semibold text-white hover:bg-[#e85716]">
                  Book a free demo
                </a>
                <a
                  href={waLink(`Hi Adszoo, I'd like a demo and pricing for ${p.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#25D366] px-7 py-3.5 text-center font-semibold text-white hover:opacity-90"
                >
                  WhatsApp {CONTACT.productPhone}
                </a>
                {p.liveUrl && (
                  <a href={p.liveUrl} target="_blank" rel="noopener" className="rounded-full border border-black px-7 py-3.5 text-center font-semibold">
                    Try it live
                  </a>
                )}
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Or call <a className="font-semibold text-black underline" href={CONTACT.productPhoneHref}>{CONTACT.productPhone}</a> · Demo in Tamil or English
              </p>
            </div>
            <ProductVisual slug={p.slug} />
          </div>
        </section>

        {/* QUICK ANSWER (AEO) */}
        <section className="border-y bg-white">
          <div className="mx-auto max-w-4xl px-6 py-10">
            <p className="text-lg leading-relaxed">
              <strong>In short:</strong> {p.definition} It is built and supported by Adszoo, a software and digital marketing company in Chennai, and is available across{" "}
              {p.locations.slice(0, -1).join(", ")} and {p.locations[p.locations.length - 1]}.
            </p>
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section className="py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{p.problem.title}</h2>
              <ul className="mt-8 space-y-4">
                {p.problem.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-gray-700">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs text-red-600">✕</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-gray-950 p-8 text-white md:p-10">
              <h2 className="text-2xl font-bold">Who {p.name} is built for</h2>
              <ul className="mt-6 space-y-3">
                {p.idealFor.map((i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-[#ff6321]">●</span>
                    {i}
                  </li>
                ))}
              </ul>
              <h3 className="mt-10 text-lg font-semibold text-[#fdba74]">What changes after {p.name}</h3>
              <ul className="mt-4 space-y-3 text-gray-200">
                {p.outcomes.map((o) => (
                  <li key={o} className="flex gap-3">
                    <span className="text-green-400">✓</span>
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="max-w-3xl text-3xl font-bold tracking-tight md:text-4xl">
              {p.name} features that matter on a busy day
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {p.features.map((f) => (
                <div key={f.title} className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:shadow-lg">
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 leading-relaxed text-gray-600">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SCREENSHOTS */}
        {p.screenshots && p.screenshots.length > 0 && (
          <section className="py-20">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">See {p.name} in action</h2>
              <p className="mt-3 text-gray-600">Screens from a live demo configured for a popular mess in Erode.</p>
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {p.screenshots.filter((s) => !s.portrait).map((s) => (
                  <figure key={s.src} className="overflow-hidden rounded-2xl border bg-white">
                    <Image src={s.src} alt={s.alt} width={1400} height={875} className="h-auto w-full" loading="lazy" />
                    <figcaption className="p-4 text-sm text-gray-600">{s.caption}</figcaption>
                  </figure>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4 md:mx-auto md:max-w-3xl">
                {p.screenshots.filter((s) => s.portrait).map((s) => (
                  <figure key={s.src} className="overflow-hidden rounded-2xl border bg-white">
                    <Image src={s.src} alt={s.alt} width={585} height={1266} className="h-auto w-full" loading="lazy" />
                    <figcaption className="p-3 text-xs text-gray-600">{s.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* HOW IT WORKS */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">How it works</h2>
            <ol className="mt-12 grid gap-6 md:grid-cols-4">
              {p.howItWorks.map((s, i) => (
                <li key={s.step} className="rounded-2xl border border-gray-200 p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ff6321] font-bold text-white">{i + 1}</span>
                  <h3 className="mt-4 text-lg font-semibold">{s.step}</h3>
                  <p className="mt-2 text-gray-600">{s.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* DEPLOYMENT + PRICING */}
        <section className="bg-[#fff6ed] py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Deployment options</h2>
              <div className="mt-8 space-y-4">
                {p.deployment.map((d) => (
                  <div key={d.title} className="rounded-2xl border border-[#ffedd5] bg-white p-6">
                    <h3 className="text-lg font-semibold">{d.title}</h3>
                    <p className="mt-2 text-gray-600">{d.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-black p-8 text-white md:p-10">
              <h2 className="text-3xl font-bold tracking-tight">{p.pricingModel.title}</h2>
              <p className="mt-4 text-gray-300">{p.pricingModel.description}</p>
              <ul className="mt-6 space-y-3">
                {p.pricingModel.points.map((pt) => (
                  <li key={pt} className="flex gap-3">
                    <span className="text-[#ff6321]">✓</span>
                    {pt}
                  </li>
                ))}
              </ul>
              <a
                href={waLink(`Hi Adszoo, please share ${p.name} pricing for my business.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-full bg-[#ff6321] px-7 py-3.5 font-semibold text-white hover:bg-[#e85716]"
              >
                Get pricing on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ENQUIRY */}
        <section className="py-20">
          <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">See {p.name} working for a business like yours</h2>
              <p className="mt-4 text-lg text-gray-600">
                Tell us about your business and we&apos;ll set up a live demo with sample data that looks like yours. No obligation, no hard sell.
              </p>
              <div className="mt-8 space-y-4 text-gray-700">
                <p><strong>Call:</strong> <a className="underline" href={CONTACT.productPhoneHref}>{CONTACT.productPhone}</a></p>
                <p><strong>WhatsApp:</strong> <a className="underline" href={waLink(`Hi, I'm interested in ${p.name}.`)} target="_blank" rel="noopener noreferrer">{CONTACT.productPhone}</a></p>
                <p><strong>Email:</strong> <a className="underline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></p>
                <p><strong>Office:</strong> {CONTACT.address.full}</p>
              </div>
              <p className="mt-8 text-sm text-gray-500">
                Serving {p.locations.join(" · ")}.
              </p>
            </div>
            <EnquiryForm kind="product" defaultInterest={interest} />
          </div>
        </section>

        <FaqBlock faqs={p.faqs} title={`${p.name} — frequently asked questions`} />

        {/* INTERNAL LINKS */}
        <section className="border-t py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3">
            {blogs.length > 0 && (
              <div>
                <h2 className="text-xl font-bold">Guides for you</h2>
                <ul className="mt-4 space-y-3">
                  {blogs.map((b) => (
                    <li key={b.slug}>
                      <Link href={`/blogs/${b.slug}`} className="font-medium text-gray-800 hover:text-[#ff6321]">
                        {b.title} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {studies.length > 0 && (
              <div>
                <h2 className="text-xl font-bold">Related client work</h2>
                <ul className="mt-4 space-y-3">
                  {studies.map((c) => (
                    <li key={c.slug}>
                      <Link href={`/case-study/${c.slug}`} className="font-medium text-gray-800 hover:text-[#ff6321]">
                        {c.title} — {c.shortDescription} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div>
              <h2 className="text-xl font-bold">Other Adszoo products</h2>
              <ul className="mt-4 space-y-3">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link href={`/products/${o.slug}`} className="font-medium text-gray-800 hover:text-[#ff6321]">
                      {o.name} — {o.tagline} →
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/services/custom-software-development" className="font-medium text-gray-800 hover:text-[#ff6321]">
                    Need something custom? Custom software development →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
