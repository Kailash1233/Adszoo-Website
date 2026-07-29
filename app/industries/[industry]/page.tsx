import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Globe,
  Search,
  Bot,
  PenTool,
  TrendingUp,
  Target,
  Rocket,
  Users,
  Lightbulb,
  Building2,
  Stethoscope,
  MapPin,
  Star,
  Calendar,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import { FooterSection } from "@/components/layout/sections/footer";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/about/ServiceCard";
import StatsSection from "@/components/StatsSection";
import { GoogleAnalytics } from "@next/third-parties/google";

import { industries, getIndustryBySlug } from "@/lib/industries-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Maps the icon name stored in industries-data.ts to the actual lucide component
const iconMap: Record<string, LucideIcon> = {
  Globe,
  Search,
  Bot,
  PenTool,
  TrendingUp,
  Target,
  Rocket,
  Users,
  Lightbulb,
  Building2,
  Stethoscope,
  MapPin,
  Star,
  Calendar,
  ShoppingCart,
};

interface IndustryPageProps {
  params: Promise<{ industry: string }>;
}

export async function generateStaticParams() {
  return industries.map((i) => ({ industry: i.slug }));
}

export async function generateMetadata({
  params,
}: IndustryPageProps): Promise<Metadata> {
  const { industry: slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) return { title: "Not Found" };

  const url = `https://www.adszoo.in/industries/${slug}`;

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    keywords: industry.keywords,

    alternates: {
      canonical: url,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      url,
      siteName: "Adszoo",
      type: "website",
      locale: "en_IN",
    },

    twitter: {
      card: "summary_large_image",
      title: industry.metaTitle,
      description: industry.metaDescription,
    },
  };
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { industry: slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) notFound();

  const url = `https://www.adszoo.in/industries/${slug}`;

  // Service schema — tells Google & AI systems exactly what this page offers, to whom
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `${industry.industryName} Marketing`,
    provider: {
      "@type": "Organization",
      name: "Adszoo",
      url: "https://adszoo.in",
    },
    areaServed: "IN",
    audience: {
      "@type": "Audience",
      audienceType: industry.industryName,
    },
    description: industry.metaDescription,
    url,
  };

  // FAQPage schema — the AEO/GEO layer, gives AI answer engines clean Q&A to extract
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: industry.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [serviceSchema, faqSchema],
  };

  return (
    <>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-FDVY1D5V41"} />
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaGraph).replace(/</g, "\\u003c"),
        }}
      />

      <main className="bg-white text-black">
        {/* Hero */}
        <section className="relative overflow-hidden border-b">
          <div className="relative container mx-auto max-w-7xl px-4 py-24 lg:py-32">
            <div className="mx-auto max-w-4xl text-center">
              <span className="inline-flex rounded-full bg-[#ff6321]/10 px-4 py-2 text-sm font-semibold text-[#ff6321]">
                {industry.badge}
              </span>

              <h1 className="mt-8 text-4xl font-black leading-tight tracking-tight md:text-6xl">
                {industry.heroTitlePrefix}{" "}
                <span className="text-[#ff6321]">{industry.heroHighlight}</span>{" "}
                {industry.heroTitleSuffix}
              </h1>

              <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
                {industry.heroSubtitle}
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-[#ff6321] hover:bg-[#e85716]"
                >
                  <Link href="/contact">
                    Let&apos;s Talk
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full"
                >
                  <Link href="/case-study">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-24">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid gap-20 lg:grid-cols-2">
              <div>
                <span className="font-semibold uppercase tracking-widest text-[#ff6321]">
                  The Problem
                </span>

                <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                  {industry.painPointsHeading}
                </h2>
              </div>

              <div className="space-y-6 text-lg leading-8 text-neutral-600">
                {industry.painPoints.map((point, idx) => (
                  <p key={idx} className="flex gap-3">
                    <span className="mt-1 text-[#ff6321]">→</span>
                    <span>{point}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Story / Approach */}
        <section className="bg-neutral-50 py-24">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <span className="font-semibold uppercase tracking-[0.2em] text-[#ff6321]">
                Our Approach
              </span>

              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                {industry.storyHeading}
              </h2>
            </div>

            <div className="mx-auto mt-12 max-w-3xl space-y-7 text-lg leading-8 text-neutral-600">
              {industry.storyParagraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}

              <blockquote className="border-l-4 border-[#ff6321] pl-6 text-2xl font-semibold italic text-black">
                {industry.storyQuote}
              </blockquote>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <span className="font-semibold uppercase tracking-[0.2em] text-[#ff6321]">
                What We Do
              </span>

              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                Built specifically for {industry.industryName.toLowerCase()}{" "}
                businesses.
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {industry.services.map((service) => {
                const Icon = iconMap[service.icon] ?? Globe;
                return (
                  <ServiceCard
                    key={service.title}
                    icon={Icon}
                    title={service.title}
                    description={service.description}
                  />
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats */}
        <StatsSection />

        {/* Process */}
        <section className="bg-black py-24 text-white">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="max-w-3xl">
              <span className="font-semibold uppercase tracking-[0.2em] text-[#ff6321]">
                Our Process
              </span>

              <h2 className="mt-4 text-4xl font-black md:text-5xl">
                Simple. Transparent.
                <br />
                Results Focused.
              </h2>
            </div>

            <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              {industry.process.map((item) => (
                <div key={item.step}>
                  <div className="text-6xl font-black text-[#ff6321]/30">
                    {item.step}
                  </div>
                  <h3 className="mt-6 text-2xl font-bold">{item.title}</h3>
                  <p className="mt-4 leading-7 text-neutral-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="bg-neutral-50 py-24">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <span className="font-semibold uppercase tracking-[0.2em] text-[#ff6321]">
                Why Adszoo
              </span>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                What makes us different?
              </h2>
            </div>

            <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white">
              <div className="grid md:grid-cols-2">
                <div className="border-b p-8 md:border-b-0 md:border-r">
                  <h3 className="mb-6 text-2xl font-bold text-neutral-400">
                    Traditional Agencies
                  </h3>
                  <ul className="space-y-5 text-neutral-600">
                    {industry.comparison.traditional.map((line, idx) => (
                      <li key={idx}>• {line}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-black p-8 text-white">
                  <h3 className="mb-6 text-2xl font-bold text-[#ff6321]">
                    Adszoo
                  </h3>
                  <ul className="space-y-5">
                    {industry.comparison.adszoo.map((line, idx) => (
                      <li key={idx}>✓ {line}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ — answer-first, matches the FAQPage schema above */}
        <section className="py-24">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <span className="font-semibold uppercase tracking-[0.2em] text-[#ff6321]">
                Frequently Asked Questions
              </span>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                Common questions, answered directly.
              </h2>
            </div>

            <Accordion type="single" collapsible className="AccordionRoot">
              {industry.faqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-7 text-neutral-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-24">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="overflow-hidden rounded-[36px] bg-black px-8 py-16 text-center text-white md:px-16">
              <span className="inline-flex rounded-full bg-[#ff6321]/20 px-4 py-2 text-sm font-semibold text-[#ff6321]">
                Let&apos;s Build Together
              </span>

              <h2 className="mt-8 text-4xl font-black tracking-tight md:text-6xl">
                {industry.ctaHeading}
              </h2>

              <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-300">
                {industry.ctaSubtext}
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-[#ff6321] hover:bg-[#e55b1d]"
                >
                  <Link href="/contact">
                    Start a Conversation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white bg-transparent text-white hover:bg-white hover:text-black"
                >
                  <Link href="/case-study">View Case Studies</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}
