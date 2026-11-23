import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { FooterSection } from "@/components/layout/sections/footer";
import EnquiryForm from "@/components/EnquiryForm";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import FaqBlock from "@/components/seo/FaqBlock";
import { areaPages, getAreaPage } from "@/lib/area-pages";
import { CONTACT, SITE_URL, absUrl, jsonLd, waLink } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return areaPages.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = getAreaPage(slug);
  if (!a) return { title: "Not found" };
  return {
    title: a.metaTitle,
    description: a.metaDescription,
    keywords: [
      `digital marketing agency in ${a.area}`,
      `advertising agency ${a.area}`,
      `website design ${a.area}`,
      `social media marketing ${a.area}`,
      `SEO ${a.area} Chennai`,
      ...(a.altSpellings ?? []).map((s) => `digital marketing ${s}`),
    ],
    alternates: { canonical: `/locations/${a.slug}` },
    openGraph: { url: `/locations/${a.slug}`, title: a.metaTitle, description: a.metaDescription },
  };
}

const SERVICES = [
  { label: "Website design & development", href: "/services/conversion-focused-websites" },
  { label: "Google Ads (Search & Maps)", href: "/services/google-ads-management" },
  { label: "Meta Ads (Facebook & Instagram)", href: "/services/meta-ads-management" },
  { label: "Social media marketing & reels", href: "/services/social-media-marketing" },
  { label: "SEO, AEO & GEO (AI search)", href: "/seo-aeo-geo-services" },
  { label: "NFC Google review cards", href: "/products/nfc-google-review-card" },
];

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const a = getAreaPage(slug);
  if (!a) notFound();
  const others = areaPages.filter((x) => x.slug !== a.slug);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Digital marketing agency in ${a.area}, Chennai`,
    serviceType: "Digital marketing, advertising, website development and SEO",
    provider: { "@id": `${SITE_URL}/#localbusiness` },
    areaServed: [{ "@type": "Place", name: `${a.area}, Chennai` }, ...a.nearby.map((n) => ({ "@type": "Place", name: `${n}, Chennai` }))],
    url: absUrl(`/locations/${a.slug}`),
    description: a.metaDescription,
  };

  return (
    <>
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
      <main className="bg-white text-black tracking-tight">
        <section className="bg-gradient-to-b from-[#fff6ed] to-white">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <Breadcrumbs items={[{ name: "Chennai", href: "/locations/digital-marketing-agency-chennai" }, { name: a.area, href: `/locations/${a.slug}` }]} />
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tighter md:text-6xl">{a.h1}</h1>
            <p className="mt-6 max-w-4xl text-lg leading-relaxed text-gray-700">{a.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={CONTACT.phoneHref} className="rounded-full bg-[#ff6321] px-7 py-3.5 text-center font-semibold text-white hover:bg-[#e85716]">
                Call {CONTACT.phone}
              </a>
              <a
                href={waLink(`Hi Adszoo, I have a business in ${a.area} and want more customers online.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#25D366] px-7 py-3.5 text-center font-semibold text-white"
              >
                WhatsApp {CONTACT.productPhone}
              </a>
              <a href="#enquire" className="rounded-full border border-black px-7 py-3.5 text-center font-semibold">
                Get a free local audit
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500">Office: {CONTACT.address.full}</p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">How we grow {a.area} businesses</h2>
              <p className="mt-5 text-lg leading-relaxed text-gray-700">{a.localContext}</p>
              <h3 className="mt-8 text-xl font-semibold">Businesses we help in {a.area}</h3>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {a.businessMix.map((b) => (
                  <li key={b} className="rounded-xl bg-gray-50 px-4 py-3 text-sm">✓ {b}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-gray-950 p-8 text-white md:p-10">
              <h2 className="text-2xl font-bold">Services for {a.area}</h2>
              <ul className="mt-6 space-y-3">
                {SERVICES.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="hover:text-[#fdba74]">→ {s.label}</Link>
                  </li>
                ))}
              </ul>
              <h3 className="mt-8 font-semibold text-[#fdba74]">Also serving near {a.area}</h3>
              <p className="mt-2 text-gray-300">{a.nearby.join(" · ")}</p>
            </div>
          </div>
        </section>

        {a.localProof.length > 0 && (
          <section className="bg-[#fff6ed] py-16">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className="text-3xl font-bold tracking-tight">Local work you can check</h2>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {a.localProof.map((p) => (
                  <Link key={p.href} href={p.href} className="rounded-2xl border border-[#ffedd5] bg-white p-6 hover:shadow-lg">
                    <h3 className="font-bold">{p.label}</h3>
                    <p className="mt-2 text-sm text-gray-600">{p.text}</p>
                    <span className="mt-3 inline-block text-sm font-semibold text-[#c2410c]">Read case study →</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-16">
          <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Free local visibility audit for {a.area}</h2>
              <p className="mt-4 text-lg text-gray-600">
                We&apos;ll check how you appear on Google Maps, Google search and AI assistants for &quot;{a.area}&quot; searches, and send you a short WhatsApp report with the three fixes that will bring the most calls.
              </p>
              <h3 className="mt-10 font-semibold">Other areas we cover</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link href={`/locations/${o.slug}`} className="inline-block rounded-full border border-gray-300 px-4 py-2 text-sm hover:border-[#ff6321]">
                      {o.area}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/locations/digital-marketing-agency-chennai" className="inline-block rounded-full border border-gray-300 px-4 py-2 text-sm hover:border-[#ff6321]">
                    All of Chennai
                  </Link>
                </li>
              </ul>
            </div>
            <EnquiryForm kind="service" title={`Grow your ${a.area} business`} />
          </div>
        </section>

        <FaqBlock faqs={a.faqs} title={`Digital marketing in ${a.area}: FAQs`} />
      </main>
      <FooterSection />
    </>
  );
}
