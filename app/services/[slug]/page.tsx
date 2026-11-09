import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { FooterSection } from "@/components/layout/sections/footer";
import EnquiryForm from "@/components/EnquiryForm";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import FaqBlock from "@/components/seo/FaqBlock";
import { servicePages, getServicePage } from "@/lib/services-data";
import { caseStudies } from "@/lib/case-studies-data";
import { blogPosts } from "@/lib/blog-posts";
import { CONTACT, SITE_URL, absUrl, jsonLd, waLink } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return servicePages.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getServicePage(slug);
  if (!s) return { title: "Not found" };
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    keywords: s.keywords,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { url: `/services/${s.slug}`, title: s.metaTitle, description: s.metaDescription, type: "website" },
    twitter: { card: "summary_large_image", title: s.metaTitle, description: s.metaDescription },
  };
}

export default async function ServiceTemplatePage({ params }: Props) {
  const { slug } = await params;
  const s = getServicePage(slug);
  if (!s) notFound();

  const studies = s.caseStudies.map((c) => caseStudies.find((x) => x.slug === c)).filter(Boolean) as typeof caseStudies;
  const blogs = s.blogs.map((b) => blogPosts.find((x) => x.slug === b)).filter(Boolean) as typeof blogPosts;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    serviceType: s.name,
    description: s.quickAnswer,
    url: absUrl(`/services/${s.slug}`),
    provider: { "@id": `${SITE_URL}/#localbusiness` },
    areaServed: [
      { "@type": "City", name: "Chennai" },
      { "@type": "State", name: "Tamil Nadu" },
      { "@type": "Country", name: "India" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${s.name} deliverables`,
      itemListElement: s.deliverables.map((d) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: d },
      })),
    },
  };

  return (
    <>
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(serviceSchema) }} />
      <main className="bg-white text-black tracking-tight">
        {/* HERO */}
        <section className="bg-gradient-to-b from-[#fff6ed] to-white">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <Breadcrumbs items={[{ name: "Services", href: "/services" }, { name: s.name, href: `/services/${s.slug}` }]} />
            <span className="mt-6 inline-flex rounded-full bg-[#ff6321]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#e85716]">
              {s.eyebrow}
            </span>
            <h1 className="mt-5 max-w-5xl text-4xl font-extrabold leading-[1.08] tracking-tighter md:text-6xl">{s.h1}</h1>
            <p className="mt-6 max-w-4xl text-lg leading-relaxed text-gray-700">
              <strong>Quick answer:</strong> {s.quickAnswer}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#enquire" className="rounded-full bg-[#ff6321] px-7 py-3.5 text-center font-semibold text-white hover:bg-[#e85716]">
                Get a free audit / consultation
              </a>
              <a
                href={waLink(`Hi Adszoo, I'm interested in ${s.name}.`, CONTACT.generalWhatsApp)}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#25D366] px-7 py-3.5 text-center font-semibold text-white"
              >
                Chat on WhatsApp
              </a>
              <a href={CONTACT.phoneHref} className="rounded-full border border-black px-7 py-3.5 text-center font-semibold">
                Call {CONTACT.phone}
              </a>
            </div>
          </div>
        </section>

        {/* INTRO + PROBLEMS */}
        <section className="py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Why it matters</h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-700">{s.intro}</p>
              <h3 className="mt-10 text-xl font-semibold">Who this is for</h3>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {s.whoFor.map((w) => (
                  <li key={w} className="rounded-xl bg-gray-50 px-4 py-3 text-sm text-gray-800">✓ {w}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-gray-950 p-8 text-white md:p-10">
              <h2 className="text-2xl font-bold">{s.problems.title}</h2>
              <ul className="mt-6 space-y-4">
                {s.problems.points.map((p) => (
                  <li key={p} className="flex gap-3 text-gray-200">
                    <span className="text-[#ff6321]">✕</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* APPROACH */}
        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">How Adszoo does it</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {s.approach.map((a) => (
                <div key={a.title} className="rounded-2xl border border-gray-200 bg-white p-6">
                  <h3 className="text-lg font-semibold">{a.title}</h3>
                  <p className="mt-2 leading-relaxed text-gray-600">{a.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DELIVERABLES + PROCESS */}
        <section className="py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">What you get</h2>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex gap-3 rounded-xl border border-gray-200 p-4 text-gray-800">
                    <span className="text-green-600">✓</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Our process</h2>
              <ol className="mt-8 space-y-4">
                {s.process.map((p, i) => (
                  <li key={p.step} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ff6321] font-bold text-white">{i + 1}</span>
                    <div>
                      <h3 className="font-semibold">{p.step}</h3>
                      <p className="text-gray-600">{p.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* PROOF */}
        {studies.length > 0 && (
          <section className="bg-[#fff6ed] py-20">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Proof: work we&apos;ve shipped</h2>
              <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {studies.map((c) => (
                  <Link key={c.slug} href={`/case-study/${c.slug}`} className="group rounded-2xl border border-[#ffedd5] bg-white p-6 transition hover:shadow-lg">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#e85716]">{c.industry.join(" · ")}</p>
                    <h3 className="mt-2 text-lg font-bold group-hover:text-[#ff6321]">{c.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{c.shortDescription}</p>
                    <span className="mt-4 inline-block text-sm font-semibold text-[#ff6321]">Read case study →</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ENQUIRY */}
        <section className="py-20">
          <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Let&apos;s talk about your growth</h2>
              <p className="mt-4 text-lg text-gray-600">
                Book a free 30-minute call. We&apos;ll review your current website, rankings or process and tell you honestly what will move the needle — even if it&apos;s not us.
              </p>
              <ul className="mt-8 space-y-3 text-gray-700">
                <li>📞 <a className="underline" href={CONTACT.phoneHref}>{CONTACT.phone}</a></li>
                <li>💬 <a className="underline" href={waLink(`Hi Adszoo, I'm interested in ${s.name}.`, CONTACT.generalWhatsApp)} target="_blank" rel="noopener noreferrer">WhatsApp us</a></li>
                <li>✉️ <a className="underline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
                <li>📍 {CONTACT.address.full}</li>
              </ul>
              {s.related.length > 0 && (
                <div className="mt-10">
                  <h3 className="font-semibold">Related services & products</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {s.related.map((r) => (
                      <li key={r.href}>
                        <Link href={r.href} className="inline-block rounded-full border border-gray-300 px-4 py-2 text-sm hover:border-[#ff6321] hover:text-[#ff6321]">
                          {r.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <EnquiryForm kind="service" defaultInterest={s.formInterest} />
          </div>
        </section>

        <FaqBlock faqs={s.faqs} />

        {/* LEARN */}
        {(blogs.length > 0 || s.externalRefs) && (
          <section className="border-t py-16">
            <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">
              {blogs.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold">Learn more on our blog</h2>
                  <ul className="mt-4 space-y-3">
                    {blogs.map((b) => (
                      <li key={b.slug}>
                        <Link href={`/blogs/${b.slug}`} className="font-medium hover:text-[#ff6321]">
                          {b.title} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {s.externalRefs && (
                <div>
                  <h2 className="text-xl font-bold">Recommended references</h2>
                  <ul className="mt-4 space-y-3">
                    {s.externalRefs.map((r) => (
                      <li key={r.href}>
                        <a href={r.href} target="_blank" rel="noopener" className="font-medium text-gray-700 underline hover:text-[#ff6321]">
                          {r.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}
      </main>
      <FooterSection />
    </>
  );
}
