import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
} from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import { FooterSection } from "@/components/layout/sections/footer";
import { Button } from "@/components/ui/button";

import FounderCard from "@/components/about/FounderCard";
import ServiceCard from "@/components/about/ServiceCard";
import ValueCard from "@/components/about/ValueCard";
import { Stats } from "fs";
import StatsSection from "@/components/StatsSection";

export const metadata: Metadata = {
  alternates: { canonical: "/company/about-adszoo" },
  title: "About Adszoo | Website Development, SEO & AI Visibility Agency",
  description:
    "Learn about Adszoo, a digital growth agency helping businesses grow through websites, SEO, AI visibility, branding and performance marketing.",
};

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Modern, fast and conversion-focused websites designed to generate enquiries instead of simply looking good.",
  },
  {
    icon: Search,
    title: "SEO",
    description:
      "Organic search strategies that increase rankings, traffic and qualified leads across Google Search and Maps.",
  },
  {
    icon: Bot,
    title: "AI Visibility",
    description:
      "Helping businesses appear inside ChatGPT, Gemini, Perplexity and the next generation of AI search platforms.",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Performance-driven campaigns that improve reach, engagement and revenue with measurable outcomes.",
  },
  {
    icon: PenTool,
    title: "Branding & Design",
    description:
      "Visual identities and creative assets that help businesses build trust and stand out.",
  },
  {
    icon: Target,
    title: "Growth Strategy",
    description:
      "Data-backed strategies focused on long-term business growth rather than short-term vanity metrics.",
  },
];

const values = [
  {
    icon: Rocket,
    title: "Execution First",
    description:
      "Ideas are valuable only when they are executed. We move quickly and focus on delivering measurable results.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description:
      "We work alongside our clients as an extension of their team, not just another agency.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Innovation",
    description:
      "Technology changes rapidly. We constantly adapt our strategies to stay ahead of search and AI.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-black">
        {/* Hero */}

        <section className="relative overflow-hidden border-b">
          <div className="absolute inset-0" />

          <div className="relative container mx-auto max-w-7xl px-4 py-24 lg:py-32">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div>
                <span className="inline-flex rounded-full bg-[#ff6321]/10 px-4 py-2 text-sm font-semibold text-[#ff6321]">
                  About Adszoo
                </span>

                <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight md:text-7xl">
                  Building digital
                  <span className="text-[#ff6321]"> growth engines</span>
                  <br />
                  for ambitious businesses.
                </h1>

                <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-600">
                  Adszoo is a digital growth agency focused on building
                  websites, improving search visibility, increasing AI
                  discoverability and helping businesses generate more qualified
                  leads online.
                </p>

                <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600">
                  We believe great marketing isn&apos;t about chasing
                  algorithms. It&apos;s about building businesses that customers
                  and search engines genuinely trust.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
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

              <div className="relative">
                <div className="overflow-hidden rounded-[32px] border border-neutral-200 shadow-2xl">
                  <video
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="/about-page.webp"
                  >
                    <source src="/about.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}

        <section className="py-24">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid gap-20 lg:grid-cols-2">
              <div>
                <span className="font-semibold uppercase tracking-widest text-[#ff6321]">
                  Our Story
                </span>

                <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                  We started with one simple goal.
                </h2>
              </div>

              <div className="space-y-7 text-lg leading-8 text-neutral-600">
                <p>
                  Too many businesses were investing in websites that looked
                  beautiful but failed to generate enquiries, rank on search
                  engines or contribute to measurable business growth.
                </p>

                <p>
                  Adszoo was founded to solve that problem by combining
                  development, SEO, AI visibility, branding and marketing into a
                  single growth-focused strategy.
                </p>

                <p>
                  Instead of delivering isolated services, we focus on building
                  digital ecosystems that attract visitors, convert them into
                  customers and continue growing over time.
                </p>

                <p>Every decision we make is guided by one question:</p>

                <blockquote className="border-l-4 border-[#ff6321] pl-6 text-2xl font-semibold italic text-black">
                  &quot;Will this create measurable value for the client?&quot;
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}

        <section className="bg-neutral-50 py-24">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <span className="font-semibold uppercase tracking-[0.2em] text-[#ff6321]">
                What We Do
              </span>

              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                Everything your business needs
                <br />
                to grow online.
              </h2>

              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Our services are designed to work together. Instead of hiring
                multiple agencies, businesses partner with Adszoo to build, grow
                and scale their complete digital presence.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <ServiceCard
                  key={service.title}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}

        <StatsSection />

        {/* Company Values */}

        <section className="py-24">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <span className="font-semibold uppercase tracking-[0.2em] text-[#ff6321]">
                Our Values
              </span>

              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                The principles behind every project.
              </h2>

              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Technology evolves constantly, but these values remain at the
                center of everything we build.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {values.map((value) => (
                <ValueCard
                  key={value.title}
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                />
              ))}
            </div>
          </div>
        </section>

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
              {[
                {
                  step: "01",
                  title: "Understand",
                  description:
                    "We learn about your business, customers and goals before recommending anything.",
                },
                {
                  step: "02",
                  title: "Plan",
                  description:
                    "A clear strategy covering website, SEO, AI visibility and growth opportunities.",
                },
                {
                  step: "03",
                  title: "Execute",
                  description:
                    "Our team designs, develops, optimizes and launches everything with precision.",
                },
                {
                  step: "04",
                  title: "Grow",
                  description:
                    "Continuous improvements based on analytics, search trends and business goals.",
                },
              ].map((item) => (
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

        {/* Founders */}

        <section className="py-24">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <span className="font-semibold uppercase tracking-[0.2em] text-[#ff6321]">
                Leadership
              </span>

              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                Meet the founders
              </h2>

              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Adszoo was founded with one belief. Businesses deserve digital
                partners who care about measurable growth instead of vanity
                metrics.
              </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-2">
              <FounderCard
                name="Askar"
                role="Co-Founder"
                image="/team/Askar.webp"
                description="Askar leads business strategy, client relationships and growth initiatives. His focus is helping businesses scale through SEO, branding, websites and digital marketing."
                linkedin="https://www.linkedin.com/in/mohammed-askar21/"
                instagram="https://www.instagram.com/mohmdaskar._/"
              />

              <FounderCard
                name="Kailash G"
                role="Co-Founder & Technical Lead"
                image="/team/Kailash.webp"
                description="Kailash leads product development, website engineering, AI visibility and technical SEO. He specializes in building high-performance digital experiences that generate measurable business growth."
                linkedin="https://www.linkedin.com/in/kailash1203/"
                instagram="https://www.instagram.com/kailash.builds/"
              />
            </div>
          </div>
        </section>

        {/* Why Choose Us */}

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
                    <li>• Focus on isolated services</li>
                    <li>• Rankings without business impact</li>
                    <li>• Generic website templates</li>
                    <li>• Limited technical expertise</li>
                    <li>• Reactive instead of proactive</li>
                    <li>• Rarely prepare for AI search</li>
                  </ul>
                </div>

                <div className="bg-black p-8 text-white">
                  <h3 className="mb-6 text-2xl font-bold text-[#ff6321]">
                    Adszoo
                  </h3>

                  <ul className="space-y-5">
                    <li>✓ Growth-first digital strategy</li>
                    <li>✓ SEO built around business goals</li>
                    <li>✓ Custom high-performance websites</li>
                    <li>✓ AI visibility optimization</li>
                    <li>✓ Transparent collaboration</li>
                    <li>✓ Long-term strategic partnership</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}

        <section className="py-24">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="overflow-hidden rounded-[36px] bg-black px-8 py-16 text-center text-white md:px-16">
              <span className="inline-flex rounded-full bg-[#ff6321]/20 px-4 py-2 text-sm font-semibold text-[#ff6321]">
                Let&apos;s Build Together
              </span>

              <h2 className="mt-8 text-4xl font-black tracking-tight md:text-6xl">
                Ready to grow your business?
              </h2>

              <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-300">
                Whether you&apos;re launching a new business or scaling an
                existing one, we&apos;d love to learn more about your goals and
                explore how Adszoo can help.
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
