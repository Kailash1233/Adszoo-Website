import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { FooterSection } from "@/components/layout/sections/footer";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import FaqBlock from "@/components/seo/FaqBlock";
import { CONTACT, SITE_URL, absUrl, jsonLd, waLink } from "@/lib/site";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact Adszoo | Digital Marketing & Software Company in Chromepet, Chennai",
  description:
    "Talk to Adszoo about websites, SEO, ads, social media or our software products. WhatsApp +91 81900 69737, call +91 63690 50929 or visit us in Nehru Nagar, Chromepet. Free growth plan in 24 hours.",
  openGraph: {
    url: "/contact",
    title: "Contact Adszoo, Chromepet, Chennai",
    description: "WhatsApp, call or send a short form, and get a free growth plan for your business.",
  },
};

const MAPS = "https://www.google.com/maps/search/?api=1&query=Adszoo+43+Ramachandra+Road+Nehru+Nagar+Chromepet+Chennai";

const channels = [
  {
    title: "WhatsApp",
    value: CONTACT.productPhone,
    note: "Fastest reply, usually within the hour",
    href: waLink("Hi Adszoo, I'd like to discuss my business."),
    external: true,
    accent: "bg-[#25D366]",
  },
  {
    title: "Call us",
    value: CONTACT.phone,
    note: "Mon–Sat, 9:30 AM – 7:00 PM",
    href: CONTACT.phoneHref,
    external: false,
    accent: "bg-[#ff6321]",
  },
  {
    title: "Email",
    value: CONTACT.email,
    note: "For proposals and documents",
    href: `mailto:${CONTACT.email}`,
    external: false,
    accent: "bg-gray-900",
  },
  {
    title: "Visit the office",
    value: "Nehru Nagar, Chromepet",
    note: "Near Vaishnav College, GST Road",
    href: MAPS,
    external: true,
    accent: "bg-[#c2410c]",
  },
];

const steps = [
  { title: "We review your business", text: "Your website, Google Maps listing and competitors, before we call." },
  { title: "A 20-minute call or WhatsApp", text: "We ask about goals and budget, and tell you honestly what will work." },
  { title: "Your free growth plan", text: "A short plan with priorities, timeline and cost, within 24 hours." },
];

const faqs = [
  {
    question: "How quickly will Adszoo respond?",
    answer:
      "We reply to form enquiries within a few working hours, usually on WhatsApp. WhatsApp messages during business hours (Mon–Sat, 9:30 AM – 7 PM) usually get a reply within the hour.",
  },
  {
    question: "Is the first consultation free?",
    answer:
      "Yes. The first call and your growth plan are free and there's no obligation. If we're not the right fit, we'll say so.",
  },
  {
    question: "Do you work with businesses outside Chennai?",
    answer:
      "Yes. We work with businesses across Tamil Nadu, India and overseas over video calls and WhatsApp, and meet in person in Chennai.",
  },
  {
    question: "Why do you ask for a monthly marketing budget?",
    answer:
      "So we recommend a plan you can actually run. Pick 'Not sure yet' if you'd like us to suggest a starting budget.",
  },
];

export default function ContactPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: absUrl("/contact"),
    name: "Contact Adszoo",
    about: { "@id": `${SITE_URL}/#localbusiness` },
    mainEntity: {
      "@id": `${SITE_URL}/#localbusiness`,
      contactPoint: [
        { "@type": "ContactPoint", telephone: "+91-6369050929", contactType: "sales", areaServed: "IN", availableLanguage: ["English", "Tamil"] },
        { "@type": "ContactPoint", telephone: "+91-8190069737", contactType: "customer support", areaServed: "IN", availableLanguage: ["English", "Tamil"] },
      ],
    },
  };

  return (
    <>
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
      <main className="bg-white text-black tracking-tight">
        <section className="bg-gradient-to-b from-[#fff6ed] to-white">
          <div className="mx-auto max-w-7xl px-6 pb-10 pt-16 md:pt-20">
            <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />
            <div className="mt-6 grid items-end gap-6 lg:grid-cols-[1.3fr_1fr]">
              <div>
                <span className="inline-flex rounded-full bg-[#ff6321]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#c2410c]">
                  Free growth plan · Reply within 24 hours
                </span>
                <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tighter md:text-6xl">
                  Let&apos;s get your business <span className="text-[#ff6321]">more enquiries</span>
                </h1>
                <p className="mt-5 max-w-2xl text-lg text-gray-600">
                  Tell us a little about your business. We&apos;ll review your website and Google presence and come back with a practical plan, not a sales pitch.
                </p>
              </div>
              <ul className="flex flex-wrap gap-2 text-sm text-gray-700 lg:justify-end">
                {["Websites", "SEO & Google Maps", "Ads & social media", "Software & apps"].map((t) => (
                  <li key={t} className="rounded-full border border-[#ffedd5] bg-white px-4 py-2">✓ {t}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="mx-auto grid max-w-7xl items-start gap-10 px-6 lg:grid-cols-[1fr_1.25fr]">
            {/* Left: ways to reach us + process */}
            <div className="order-2 space-y-10 lg:order-1">
              <div>
                <h2 className="text-2xl font-bold">Prefer to talk now?</h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {channels.map((c) => (
                    <a
                      key={c.title}
                      href={c.href}
                      {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="group flex gap-4 rounded-2xl border border-gray-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-[#ff6321] hover:shadow-lg"
                    >
                      <span className={`mt-1 h-3 w-3 shrink-0 rounded-full ${c.accent}`} aria-hidden="true" />
                      <span className="min-w-0">
                        <span className="block text-sm text-gray-500">{c.title}</span>
                        <span className="block break-words font-semibold group-hover:text-[#c2410c]">{c.value}</span>
                        <span className="mt-1 block text-xs text-gray-500">{c.note}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold">What happens next</h2>
                <ol className="mt-5 space-y-4">
                  {steps.map((s, i) => (
                    <li key={s.title} className="flex gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-sm font-bold text-white">{i + 1}</span>
                      <div>
                        <h3 className="font-semibold">{s.title}</h3>
                        <p className="text-gray-600">{s.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-2xl bg-gray-950 p-6 text-white">
                <p className="text-sm font-semibold uppercase tracking-wider text-[#fdba74]">Recent results</p>
                <ul className="mt-4 space-y-3 text-sm text-gray-200">
                  <li>
                    <Link href="/case-study/srinivasan-chess-academy" className="hover:text-white">
                      <strong className="text-white">Srinivasan Chess Academy</strong>: ranking across most Chennai localities, 164 Google clicks in 3 months →
                    </Link>
                  </li>
                  <li>
                    <Link href="/case-study/kvm-agencies" className="hover:text-white">
                      <strong className="text-white">KVM Agencies</strong>: bilingual SEO website + Unizo billing software →
                    </Link>
                  </li>
                  <li>
                    <Link href="/case-study/hitech-insulation" className="hover:text-white">
                      <strong className="text-white">Hitech Insulation</strong>: spec-led B2B site for a manufacturer since 1977 →
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="text-sm text-gray-600">
                <p className="font-semibold text-gray-900">Adszoo</p>
                <address className="not-italic">{CONTACT.address.full}</address>
                <a href={MAPS} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block font-semibold text-[#c2410c] underline">
                  Open in Google Maps
                </a>
              </div>
            </div>

            {/* Right: form */}
            <div className="order-1 lg:order-2 lg:sticky lg:top-28">
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl md:p-8">
                <h2 className="text-2xl font-bold tracking-tight">Tell us about your business</h2>
                <p className="mt-1 mb-6 text-sm text-gray-600">Takes about a minute. Fields marked * are required.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <FaqBlock faqs={faqs} title="Before you get in touch" />
      </main>
      <FooterSection />
    </>
  );
}
