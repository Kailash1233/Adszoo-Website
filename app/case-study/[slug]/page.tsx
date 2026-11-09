import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getCaseStudyBySlug,
  getRelatedCaseStudies,
  caseStudies,
} from "@/lib/case-studies-data";
import { Navbar } from "@/components/layout/navbar";
import AnimatedPreviewWithLightbox from "@/components/AnimatedPreviewWithLightbox";
import { FooterSection } from "@/components/layout/sections/footer";
import EnquiryForm from "@/components/EnquiryForm";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { SITE_URL, absUrl } from "@/lib/site";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

// 1. generateMetadata — wires up metaTitle / metaDescription / keywords per case study
export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) return { title: "Not Found" };

  const url = `https://www.adszoo.in/case-study/${slug}`;
  const title = caseStudy.metaTitle ?? `${caseStudy.title} | Adszoo Case Study`;
  const description = caseStudy.metaDescription ?? caseStudy.description;
  const ogImage = caseStudy.previewImage
    ? absUrl(caseStudy.previewImage)
    : absUrl("/og-case-studies.png");

  return {
    title,
    description,
    keywords: caseStudy.keywords,

    alternates: {
      canonical: url,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title,
      description,
      url,
      siteName: "Adszoo",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${caseStudy.title} — case study preview`,
        },
      ],
      locale: "en_IN",
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) notFound();

  const relatedCaseStudies = getRelatedCaseStudies(slug, 3);
  const shareUrl = `https://www.adszoo.in/case-study/${slug}`;

  // 3. JSON-LD CreativeWork schema — structured entity data for search + AI answer engines
  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: caseStudy.title,
    headline: caseStudy.title,
    description: caseStudy.metaDescription ?? caseStudy.description,
    url: shareUrl,
    image: caseStudy.previewImage ? absUrl(caseStudy.previewImage) : undefined,
    creator: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-IN",
    about: caseStudy.client,
    keywords: caseStudy.keywords?.join(", "),
    genre: caseStudy.industry,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": shareUrl,
    },
  };

  return (
    <>
      <Navbar />

      {/* JSON-LD schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(caseStudySchema).replace(/</g, "\\u003c"),
        }}
      />

      <main className="bg-white text-black min-h-screen tracking-tighter">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          {/* HERO */}
          <section className="grid lg:grid-cols-3 gap-12 items-start mb-16">
            <div className="lg:col-span-2">
              <Breadcrumbs
                className="mb-6"
                items={[
                  { name: "Case Studies", href: "/case-study" },
                  { name: caseStudy.title, href: `/case-study/${caseStudy.slug}` },
                ]}
              />
              {caseStudy.status && (
                <span className="mb-4 inline-flex rounded-full bg-[#ff6321]/10 px-3 py-1 text-xs font-semibold text-[#e85716]">
                  {caseStudy.status}
                </span>
              )}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight transition-transform duration-300">
                {caseStudy.title}
              </h1>

              <p className="mt-6 text-lg text-gray-600 max-w-3xl">
                {caseStudy.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3 items-center">
                <a
                  href={caseStudy.website}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#ff6321] hover:bg-[#e96500] text-white rounded-full px-5 py-3 text-sm font-semibold shadow-md"
                >
                  {caseStudy.status?.toLowerCase().includes("develop") || caseStudy.status?.toLowerCase().includes("launching")
                    ? "View preview"
                    : "Visit live site"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" />
                  </svg>
                </a>

                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <span className="px-3 py-1 bg-gray-100 rounded-full">
                    {caseStudy.turnaround}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full">
                    {Array.isArray(caseStudy.industry)
                      ? caseStudy.industry.join(", ")
                      : caseStudy.industry}
                  </span>
                </div>
              </div>
            </div>

            {/* Stats / Quick Info Panel */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-sm font-semibold text-gray-700">
                  Project Snapshot
                </p>

                <dl className="mt-4 grid gap-3">
                  <div>
                    <dt className="text-xs text-gray-500">Client</dt>
                    <dd className="font-medium">{caseStudy.client}</dd>
                  </div>

                  <div>
                    <dt className="text-xs text-gray-500">Services</dt>
                    <dd className="font-medium">
                      {Array.isArray(caseStudy.services)
                        ? caseStudy.services.join(" • ")
                        : caseStudy.services}
                    </dd>
                  </div>

                  <div>
                    <dt className="text-xs text-gray-500">Tech</dt>
                    <dd className="flex flex-wrap gap-2 mt-2">
                      {Array.isArray(caseStudy.stack) &&
                        caseStudy.stack.map((s: string, i: number) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-1 bg-white border rounded-full"
                          >
                            {s}
                          </span>
                        ))}
                    </dd>
                  </div>
                </dl>
              </div>
            </aside>
          </section>

          {/* PREVIEW: mobile = full image, desktop = small preview + lightbox */}
          <div className="mb-20 border border-gray-200 rounded-2xl overflow-hidden">
            <div className="w-full">
              <AnimatedPreviewWithLightbox
                src={caseStudy.previewImage || "/placeholder.svg"}
                alt={`${caseStudy.title} Preview`}
                isNura={caseStudy.slug === "nura"}
              />
            </div>
          </div>

          {/* Challenge / Approach / Results */}
          <section className="grid lg:grid-cols-3 gap-12 mb-20 items-start">
            <div className="lg:col-span-2">
              <article className="space-y-12">
                <div>
                  <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                  <p className="text-lg text-gray-600">{caseStudy.challenge}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
                  <p className="text-lg text-gray-600">{caseStudy.approach}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Results</h2>
                  <p className="text-lg text-gray-600">{caseStudy.results}</p>

                  {/* Optional metrics area */}
                  {caseStudy.metrics && Array.isArray(caseStudy.metrics) && (
                    <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {caseStudy.metrics.map((m: any, idx: number) => (
                        <div
                          key={idx}
                          className="p-4 bg-white border rounded-lg text-center"
                        >
                          <div className="text-2xl font-bold">{m.value}</div>
                          <div className="text-xs text-gray-500">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {caseStudy.highlights && caseStudy.highlights.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4">What we built</h2>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {caseStudy.highlights.map((h) => (
                        <li key={h} className="flex gap-3 rounded-xl border border-gray-200 p-4 text-gray-700">
                          <span className="text-[#ff6321]">✓</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {caseStudy.seoWins && caseStudy.seoWins.length > 0 && (
                  <div className="rounded-2xl bg-gray-950 p-8 text-white">
                    <h2 className="text-2xl font-bold mb-2">SEO progress so far</h2>
                    <p className="text-gray-400 mb-6 text-sm">Ongoing work — updated as rankings grow.</p>
                    <ul className="space-y-3">
                      {caseStudy.seoWins.map((w) => (
                        <li key={w} className="flex gap-3">
                          <span className="text-green-400">▲</span>
                          {w}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {caseStudy.proofImage && (
                  <figure className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
                    <Image
                      src={caseStudy.proofImage.src}
                      alt={caseStudy.proofImage.alt}
                      width={1120}
                      height={772}
                      className="h-auto w-full"
                    />
                    <figcaption className="border-t p-4 text-sm text-gray-600">
                      {caseStudy.proofImage.caption}
                    </figcaption>
                  </figure>
                )}

                {caseStudy.relatedLinks && caseStudy.relatedLinks.length > 0 && (
                  <div>
                    <h2 className="text-xl font-bold mb-3">Related</h2>
                    <ul className="flex flex-wrap gap-2">
                      {caseStudy.relatedLinks.map((l) => (
                        <li key={l.href}>
                          <Link href={l.href} className="inline-block rounded-full border border-gray-300 px-4 py-2 text-sm hover:border-[#ff6321] hover:text-[#ff6321]">
                            {l.label} →
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            </div>

            {/* Callout / CTA */}
            <aside>
              <div className="p-6 bg-[#fff6ed] border border-[#ffedd5] rounded-2xl">
                <p className="text-lg font-semibold mb-3">
                  Want a site like this?
                </p>
                <p className="text-sm text-gray-700 mb-4">
                  We build conversion-first websites, custom software and SEO
                  systems that bring in enquiries — for B2B manufacturers,
                  builders, retailers and service brands.
                </p>

                <Link
                  href="https://cal.com/adszoo/30min"
                  className="block w-full text-center bg-[#ff6321] hover:bg-[#e96500] text-white rounded-full px-4 py-3 font-medium"
                >
                  Start a project
                </Link>

                <div className="mt-4 text-xs text-gray-500">
                  Or email us at{" "}
                  <a href="mailto:adszoo.digital@gmail.com" className="underline">
                    adszoo.digital@gmail.com
                  </a>
                </div>
              </div>
            </aside>
          </section>

          <section className="mb-20 grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4">Want results like {caseStudy.client}?</h2>
              <p className="text-lg text-gray-600">
                Tell us about your business. We&apos;ll review your current website, search visibility and
                processes, and share a practical plan on a free call — no obligation.
              </p>
            </div>
            <EnquiryForm kind="service" title="Start your project" />
          </section>

          {/* Related Case Studies */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Related case studies</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedCaseStudies.map((study) => (
                <article
                  key={study.id}
                  className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
                >
                  <div className="relative h-44 w-full">
                    <Image
                      src={study.logoUrl || "/placeholder.svg"}
                      alt={study.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-semibold mb-2">
                      {study.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {study.shortDescription}
                    </p>
                    <Link
                      href={`/case-study/${study.slug}`}
                      className="text-[#ff6321] font-medium inline-flex items-center gap-2 hover:text-[#e96500]"
                    >
                      Read case study
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
      <FooterSection />
    </>
  );
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}
