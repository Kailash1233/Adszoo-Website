import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { FooterSection } from "@/components/layout/sections/footer";
import EnquiryForm from "@/components/EnquiryForm";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import FaqBlock from "@/components/seo/FaqBlock";
import AiUpsell from "@/components/products/AiUpsell";
import { nfcAreas, getNfcArea } from "@/lib/nfc-areas";
import { CONTACT, SITE_URL, absUrl, jsonLd, waLink } from "@/lib/site";

type Props = { params: Promise<{ area: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return nfcAreas.map((a) => ({ area: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { area } = await params;
  const a = getNfcArea(area);
  if (!a) return { title: "Not found" };
  const title = `NFC Google Review Card in ${a.area}, Chennai | Tap-to-Review Cards — Adszoo`;
  const description = `Get more Google reviews for your ${a.area} business. NFC tap-to-review cards with QR backup, programmed with your review link and delivered in ${a.area}. Custom logo on bulk orders. WhatsApp ${CONTACT.productPhone}.`;
  return {
    title,
    description,
    keywords: [`NFC Google review card ${a.area}`, `Google review card ${a.area}`, `Google review stand ${a.area} Chennai`, `get more Google reviews ${a.area}`],
    alternates: { canonical: `/nfc-google-review-card/${a.slug}` },
    openGraph: { url: `/nfc-google-review-card/${a.slug}`, title, description, images: [{ url: "/products/nfc/nfc-google-review-card.webp" }] },
  };
}

export default async function NfcAreaPage({ params }: Props) {
  const { area } = await params;
  const a = getNfcArea(area);
  if (!a) notFound();
  const sameZone = nfcAreas.filter((x) => x.zone === a.zone && x.slug !== a.slug);
  const otherZones = nfcAreas.filter((x) => x.zone !== a.zone);

  const faqs = [
    {
      question: `Do you deliver NFC Google review cards in ${a.area}?`,
      answer: `Yes. We program the cards at our Chromepet office and deliver to businesses in ${a.area} and nearby areas such as ${a.nearby.slice(0, 3).join(", ")}. WhatsApp ${CONTACT.productPhone} with your business name to order.`,
    },
    {
      question: "What happens when a customer taps the card?",
      answer:
        "Their phone opens your Google Maps review form directly. They choose the stars, type a line and submit. Phones without NFC scan the QR code on the card and reach the same page.",
    },
    {
      question: `Which ${a.area} businesses benefit most?`,
      answer: `In ${a.area} we see the best results for ${a.businesses.slice(0, 3).join(", ").toLowerCase()} and ${a.businesses[3].toLowerCase()}. Any business with happy walk-in customers gets more reviews with a tap-to-review card.`,
    },
    {
      question: "Can I order in bulk for multiple counters or branches?",
      answer: "Yes. We supply bulk orders, program each card with the correct branch's review link, and print your logo and brand colours on the cards.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `NFC Google Review Card — ${a.area}, Chennai`,
    serviceType: "NFC Google review cards (programmed, supplied and custom branded)",
    description: `Tap-to-review NFC cards with QR backup that open your Google review form, programmed and delivered to businesses in ${a.area}, Chennai. Custom logo branding on bulk orders.`,
    image: absUrl("/products/nfc/nfc-google-review-card.webp"),
    url: absUrl(`/nfc-google-review-card/${a.slug}`),
    provider: { "@id": `${SITE_URL}/#localbusiness` },
    brand: { "@type": "Brand", name: "Adszoo" },
    areaServed: [a.area, ...a.nearby].map((n) => ({ "@type": "Place", name: `${n}, Chennai` })),
    audience: { "@type": "BusinessAudience", audienceType: a.businesses.join(", ") },
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
                  { name: "NFC Google Review Card", href: "/products/nfc-google-review-card" },
                  { name: a.area, href: `/nfc-google-review-card/${a.slug}` },
                ]}
              />
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tighter md:text-5xl">
                NFC Google Review Card in {a.area}, Chennai
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-gray-700">
                <strong>Tap, review, done.</strong> Your customers tap the card with their phone (or scan the QR on the back) and your Google review form opens instantly. More 5-star reviews means a better Google Maps ranking for &quot;near me&quot; searches in {a.area}.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={waLink(`Hi Adszoo, I want NFC Google review cards for my business in ${a.area}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#25D366] px-7 py-3.5 text-center font-semibold text-black"
                >
                  Order on WhatsApp {CONTACT.productPhone}
                </a>
                <a href="#enquire" className="rounded-full border border-black px-7 py-3.5 text-center font-semibold">
                  Bulk enquiry
                </a>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Or call <a className="font-semibold text-black underline" href={CONTACT.productPhoneHref}>{CONTACT.productPhone}</a> · Your logo on bulk orders
              </p>
            </div>
            <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-2xl">
              <Image
                src="/products/nfc/nfc-google-review-card.webp"
                alt={`NFC Google review card for businesses in ${a.area}, Chennai: scan the QR or tap to review`}
                width={1536}
                height={1024}
                priority
                className="h-auto w-full"
              />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Why {a.area} businesses need more Google reviews</h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                {a.area} is known for {a.hub} When someone nearby searches Google Maps, the businesses with more recent, higher-rated reviews show up first and get the calls. A tap-to-review card turns every happy customer into a review in seconds.
              </p>
              <p className="mt-4 rounded-2xl bg-[#fff6ed] p-5 text-gray-800">
                <strong>Placement tip for {a.area}:</strong> {a.tip}
              </p>
            </div>
            <div className="rounded-3xl border border-gray-200 p-8">
              <h2 className="text-2xl font-bold">Best for these {a.area} businesses</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {a.businesses.map((b) => (
                  <li key={b} className="rounded-xl bg-gray-50 px-4 py-3">✓ {b}</li>
                ))}
              </ul>
              <h3 className="mt-8 font-semibold">How it works</h3>
              <ol className="mt-3 space-y-2 text-gray-700">
                <li>1. Send us your business name or Google Maps link on WhatsApp.</li>
                <li>2. We program the NFC chip and QR code with your review link (and print your logo on bulk orders), then test them.</li>
                <li>3. We deliver to your shop in {a.area}; you place the cards at the counter or tables.</li>
                <li>4. Customers tap, rate and review. Your Maps ranking grows.</li>
              </ol>
              <Link href="/products/nfc-google-review-card" className="mt-6 inline-block font-semibold text-[#c2410c] underline">
                Full product details →
              </Link>
            </div>
          </div>
        </section>

        <AiUpsell />

        <section className="py-16">
          <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Order cards for your {a.area} business</h2>
              <p className="mt-4 text-lg text-gray-600">
                Single cards or bulk orders for every table, counter and branch. Bulk orders can carry <strong>your logo and brand colours</strong>. Tell us how many you need and share your logo, and we&apos;ll reply on WhatsApp with a quote and a design preview.
              </p>
              {sameZone.length > 0 && (
                <>
                  <h3 className="mt-10 font-semibold">Also delivering near {a.area}</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {sameZone.map((x) => (
                      <li key={x.slug}>
                        <Link href={`/nfc-google-review-card/${x.slug}`} className="inline-block rounded-full border border-gray-300 px-4 py-2 text-sm hover:border-[#ff6321]">
                          {x.area}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              <h3 className="mt-8 font-semibold">Other Chennai areas</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {otherZones.map((x) => (
                  <li key={x.slug}>
                    <Link href={`/nfc-google-review-card/${x.slug}`} className="inline-block rounded-full border border-gray-200 px-3 py-1.5 text-xs text-gray-700 hover:border-[#ff6321]">
                      {x.area}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <EnquiryForm kind="product" defaultInterest="NFC Google Review Card" title="NFC review card enquiry" subtitle="Share your business name and quantity — we reply on WhatsApp." />
          </div>
        </section>

        <FaqBlock faqs={faqs} title={`NFC review cards in ${a.area}: FAQs`} />
      </main>
      <FooterSection />
    </>
  );
}
