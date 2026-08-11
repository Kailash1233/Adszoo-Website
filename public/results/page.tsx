import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

/**
 * ─────────────────────────────────────────────────────────────────────────
 * ADSZOO — SEO • AEO • GEO SERVICES PAGE
 * Route: app/seo-aeo-geo-services/page.tsx  →  https://www.adszoo.in/seo-aeo-geo-services
 *
 * Theme: Adszoo brand — light background, black text, #ff6321 accent.
 *
 * IMAGE ASSETS — place the files from the delivered `public-assets/` folder
 * into your Next.js repo's `/public/` directory, matching these paths:
 *
 *   /public/results/gameon-gsc-growth.png
 *   /public/results/gsc-result-1.png
 *   /public/results/gsc-result-2.png
 *   /public/results/gsc-result-3.png
 *   /public/results/gsc-result-4.png
 *   /public/case-studies/gameon-solution.png
 *   /public/case-studies/khadija-gold.png
 *   /public/case-studies/scoutedge.png
 *   /public/case-studies/gotcha.png
 *   /public/case-studies/promide-steel-dubai.png
 *   /public/case-studies/ab-design-labs.png
 * ─────────────────────────────────────────────────────────────────────────
 */

const SITE_URL = "https://www.adszoo.in";
const PAGE_URL = `${SITE_URL}/seo-aeo-geo-services`;
const ACCENT = "#ff6321";

export const metadata: Metadata = {
  title: "SEO, AEO & GEO Services in Chennai | Rank on Google, AI Overviews & ChatGPT — Adszoo",
  description:
    "Adszoo helps businesses rank on Google, get cited in AI Overviews, and get recommended by ChatGPT & Perplexity. Real case studies, real Search Console data, and measurable growth.",
  keywords: [
    "SEO AEO GEO services",
    "AEO services Chennai",
    "GEO generative engine optimization",
    "AI search optimization agency",
    "ChatGPT SEO",
    "AI Overviews optimization",
    "answer engine optimization agency India",
    "SEO agency Chennai",
    "AEO agency India",
    "generative engine optimization services",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "SEO, AEO & GEO Services | Get Found on Google, AI Overviews & ChatGPT — Adszoo",
    description:
      "We rank you on Google, get you cited in AI Overviews, and get you recommended by ChatGPT, Perplexity & Gemini. Real client results, verified.",
    url: PAGE_URL,
    siteName: "Adszoo",
    images: [{ url: `${SITE_URL}/Logo1.png`, width: 1200, height: 630, alt: "Adszoo — SEO, AEO & GEO Services" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO, AEO & GEO Services — Adszoo",
    description:
      "Rank on Google. Get cited in AI Overviews. Get recommended by ChatGPT. One team, one strategy.",
    images: [`${SITE_URL}/Logo1.png`],
  },
  robots: { index: true, follow: true },
};

/* ──────────────────────────────────────────────────────────────────────
   DATA
   ────────────────────────────────────────────────────────────────────── */

const pillars = [
  {
    tag: "SEO",
    title: "Search Engine Optimization",
    desc:
      "The foundation. We fix your technical architecture, build topical authority, and earn the rankings that put you in front of buyers actively searching on Google.",
    points: [
      "Technical SEO & Core Web Vitals",
      "On-page + topical content clusters",
      "Local SEO & Google Business Profile",
      "High-authority link building",
    ],
  },
  {
    tag: "AEO",
    title: "Answer Engine Optimization",
    desc:
      "Google's AI Overviews now answer the question before a click ever happens. AEO structures your content so the engine pulls your answer, with your brand attached.",
    points: [
      "Structured, extractable answer formatting",
      "Schema markup (FAQ, HowTo, Article)",
      "Featured snippet & AI Overview targeting",
      "Question-first content architecture",
    ],
  },
  {
    tag: "GEO",
    title: "Generative Engine Optimization",
    desc:
      "ChatGPT, Perplexity, and Gemini are the new front door to your customers. GEO makes sure your business is the one these models cite and recommend.",
    points: [
      "LLM-readable content structuring",
      "Entity & brand authority signals",
      "Citation-worthy data & source building",
      "Presence across AI-crawled sources",
    ],
  },
] as const;

/** Real, verified numbers from the GameOn Solution engagement. */
const heroStats = [
  ["2,254%", "Impressions growth"],
  ["30K+", "Monthly organic clicks"],
  ["900+", "Organic leads generated"],
] as const;

const midStats = [
  { value: "2,254%", label: "Impressions Growth", sub: "GameOn Solution, 5 months" },
  { value: "538%", label: "Organic Clicks Increase", sub: "GameOn Solution, 5 months" },
  { value: "900+", label: "Organic Leads Generated", sub: "No paid ads required" },
  { value: "17 → 9", label: "Keywords in Top 10 / Top 3", sub: "Up from just 3 in Top 10" },
] as const;

/** Real Search Console screenshots — analytics proof gallery. */
const analyticsShots = [
  { src: "/results/gameon-gsc-growth.png", caption: "GameOn Solution — 30K clicks · 2.7M impressions" },
  { src: "/results/gsc-result-1.png", caption: "Live client account — 90-day performance" },
  { src: "/results/gsc-result-2.png", caption: "Live client account — steady organic growth" },
  { src: "/results/gsc-result-3.png", caption: "Live client account — 4.9% average CTR" },
  { src: "/results/gsc-result-4.png", caption: "Live client account — top 5 average position" },
] as const;

const comparison = [
  { row: "Where it shows up", seo: "Google search results (blue links)", aeo: "Featured snippets & AI Overviews", geo: "ChatGPT, Perplexity, Gemini, Claude" },
  { row: "What wins", seo: "Rankings & organic traffic", aeo: "Being the quoted answer", geo: "Being the recommended brand" },
  { row: "Core unit", seo: "Keywords & pages", aeo: "Structured answers", geo: "Entities & trusted citations" },
  { row: "Success metric", seo: "Position, clicks, traffic", aeo: "Snippet share, impressions", geo: "AI mentions, share of voice" },
  { row: "Time to impact", seo: "2–4 months", aeo: "4–8 weeks (existing content)", geo: "Ongoing, compounding" },
] as const;

const services = [
  { title: "Technical SEO Audit & Fixes", desc: "Site speed, crawlability, indexing, Core Web Vitals — the plumbing every ranking depends on." },
  { title: "Topical Content Clusters", desc: "Pillar + supporting content built around what your buyers actually search, not vanity keywords." },
  { title: "Schema & Structured Data", desc: "FAQ, HowTo, Product, LocalBusiness and Article schema so machines can parse and quote you." },
  { title: "Local SEO & GBP Optimization", desc: "Rank in the map pack and local AI answers for every service area you operate in." },
  { title: "AI Overview & Snippet Targeting", desc: "Content re-engineered to be the answer Google lifts — not just a link below it." },
  { title: "LLM Visibility & Brand Citations", desc: "Getting your business named, described, and recommended inside ChatGPT & Perplexity answers." },
  { title: "Link Building & Digital PR", desc: "Authority signals that both classic SEO and generative engines weigh heavily." },
  { title: "Conversion-Focused Website Builds", desc: "Rankings mean nothing without a site engineered to turn visitors into customers." },
] as const;

/**
 * Real project screenshots — pulled directly from Adszoo's own case-study
 * portfolio. `href` points to the live case-study page where one exists;
 * projects not yet published as a standalone case study link to /case-study.
 */
const projects = [
  {
    name: "GameOn Solution",
    category: "Sports Infra · SEO & AEO",
    src: "/case-studies/gameon-solution.png",
    href: "/case-study",
    span: "lg:col-span-3 lg:row-span-2",
  },
  {
    name: "Khadija Gold",
    category: "Jewellery · Malaysia · Shopify",
    src: "/case-studies/khadija-gold.png",
    href: "/case-study",
    span: "lg:col-span-3 lg:row-span-1",
  },
  {
    name: "ScoutEdge",
    category: "Sports Tech · AI/ML",
    src: "/case-studies/scoutedge.png",
    href: "/case-study/scoutedge",
    span: "lg:col-span-3 lg:row-span-1",
  },
  {
    name: "Gotcha",
    category: "Food & Beverage · Digital Menu",
    src: "/case-studies/gotcha.png",
    href: "/case-study/gotcha",
    span: "lg:col-span-2 lg:row-span-1",
  },
  {
    name: "Promide Steel Fabrication",
    category: "Manufacturing · Dubai",
    src: "/case-studies/promide-steel-dubai.png",
    href: "/case-study/promide-steel-fabrication-llc",
    span: "lg:col-span-2 lg:row-span-1",
  },
  {
    name: "AB Design Labs",
    category: "Interior Design · Local SEO",
    src: "/case-studies/ab-design-labs.png",
    href: "/case-study/ab-design-labs",
    span: "lg:col-span-2 lg:row-span-1",
  },
] as const;

const faqs = [
  {
    q: "What's the difference between SEO, AEO, and GEO?",
    a: "SEO gets your website ranking in traditional Google search results. AEO (Answer Engine Optimization) structures your content so Google's AI Overviews and featured snippets quote you directly. GEO (Generative Engine Optimization) makes sure AI chat tools like ChatGPT, Perplexity, and Gemini cite and recommend your business when people ask them questions. In 2026, you need all three working together — they share the same foundation but target different surfaces.",
  },
  {
    q: "Do I need AEO and GEO if I already do SEO?",
    a: "Yes. A growing share of searches now end on an AI Overview or an AI chat answer, with no click to any website at all. If your content isn't structured for machines to extract and cite, competitors who did optimize for AEO and GEO capture that visibility instead — even if you outrank them in traditional blue-link results.",
  },
  {
    q: "How long does it take to see results from AEO and GEO?",
    a: "Existing, well-structured content can start appearing in AI Overviews and snippets within 4–8 weeks. GEO visibility inside tools like ChatGPT tends to build more gradually and compounds over time as your brand accumulates citations and authority signals across the web.",
  },
  {
    q: "Can you optimize my existing website, or do I need a new one?",
    a: "In most cases we work with your existing site — restructuring content, adding schema markup, and fixing technical issues. If the underlying site has fundamental performance or architecture problems, we'll flag that upfront rather than optimizing content on top of a broken foundation.",
  },
  {
    q: "How do you measure AEO and GEO performance?",
    a: "For AEO, we track featured snippet ownership, AI Overview appearances, and impression share on question-based queries. For GEO, we track brand mentions and citation frequency across ChatGPT, Perplexity, and Gemini for relevant prompts, alongside referral traffic from AI platforms as that data becomes available.",
  },
  {
    q: "Is GEO the same as buying ads inside ChatGPT?",
    a: "No. GEO is entirely earned, organic visibility — it's about your brand appearing in an AI model's response because your content is well-structured, credible, and cited elsewhere on the web. There's no ad spend involved; it works alongside SEO and AEO rather than replacing them.",
  },
  {
    q: "Which industries benefit most from SEO, AEO & GEO together?",
    a: "Any business where customers research before buying — sports infrastructure, jewellery and retail, healthcare, interior design, manufacturing, and food & beverage especially. GameOn Solution alone generated 900+ organic leads across a single niche once its SEO and AI-search visibility were built out.",
  },
  {
    q: "How do I get started?",
    a: "Book a free strategy call and we'll audit where you currently stand across Google, AI Overviews, and AI chat tools, then map out a plan across all three.",
  },
] as const;

/* ──────────────────────────────────────────────────────────────────────
   JSON-LD
   ────────────────────────────────────────────────────────────────────── */

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "SEO, AEO & GEO (Generative Engine Optimization) Services",
  provider: {
    "@type": "Organization",
    name: "Adszoo",
    url: SITE_URL,
    logo: `${SITE_URL}/Logo1.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "43, Ramachandra Rd, Nehru Nagar, Chromepet",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "600044",
      addressCountry: "IN",
    },
  },
  areaServed: "IN",
  description:
    "Full-stack search visibility services covering traditional SEO, Answer Engine Optimization (AEO) for AI Overviews and featured snippets, and Generative Engine Optimization (GEO) for ChatGPT, Perplexity, and Gemini.",
  url: PAGE_URL,
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "SEO, AEO & GEO Services", item: PAGE_URL },
  ],
};

/* ──────────────────────────────────────────────────────────────────────
   PAGE
   ────────────────────────────────────────────────────────────────────── */

export default function SeoAeoGeoPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fafaf9] text-black antialiased">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

      {/* Subtle ambient warmth — brand orange, kept light */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-32 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full blur-[130px]"
          style={{ background: `${ACCENT}14` }}
        />
        <div
          className="absolute top-[1100px] -right-40 h-[420px] w-[420px] rounded-full blur-[120px]"
          style={{ background: `${ACCENT}10` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_40%,transparent_100%)]" />
      </div>

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="relative mx-auto max-w-6xl px-6 pt-28 pb-24 text-center sm:pt-36">
        <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-1.5 text-xs font-medium tracking-wide text-black/70 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span
              className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
              style={{ backgroundColor: ACCENT }}
            />
            <span className="relative inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: ACCENT }} />
          </span>
          Built for Google, AI Overviews &amp; ChatGPT — together
        </div>

        <h1 className="mx-auto max-w-4xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
          SEO, AEO &amp; GEO —{" "}
          <span style={{ color: ACCENT }}>one strategy to own every search surface</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-black/60">
          Google isn&apos;t the only place people search anymore. We get you ranking in classic
          search, quoted in AI Overviews, and recommended by ChatGPT &amp; Perplexity —
          with one connected strategy, not three disconnected vendors.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://cal.com/adszoo/30min"
            className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(255,99,33,0.6)] transition-transform hover:scale-[1.03]"
            style={{ backgroundColor: ACCENT }}
          >
            Get Your Free AI Search Audit
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <Link
            href="/case-study"
            className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-7 py-3.5 text-sm font-medium text-black/80 transition-colors hover:bg-black hover:text-white"
          >
            See Real Client Results
          </Link>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-4 border-t border-black/10 pt-8">
          {heroStats.map(([stat, label]) => (
            <div key={stat}>
              <div className="text-2xl font-semibold sm:text-3xl">{stat}</div>
              <div className="mt-1 text-xs text-black/50 sm:text-sm">{label}</div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-black/35">Real results from the GameOn Solution SEO &amp; AEO engagement</p>
      </section>

      {/* ── THE THREE PILLARS ──────────────────────────────────────── */}
      <section className="relative mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="The Framework"
          title="SEO. AEO. GEO. Explained simply."
          desc="Three names, one goal: your business is the answer, wherever the question gets asked."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.tag}
              className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white p-8 shadow-[0_2px_20px_-8px_rgba(0,0,0,0.08)] transition-all hover:border-black/20 hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.14)]"
            >
              <span
                className="inline-block rounded-full border px-3 py-1 text-xs font-bold tracking-widest"
                style={{ borderColor: `${ACCENT}55`, backgroundColor: `${ACCENT}12`, color: ACCENT }}
              >
                {p.tag}
              </span>
              <h3 className="mt-5 text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-black/55">{p.desc}</p>
              <ul className="mt-6 space-y-2.5 border-t border-black/10 pt-6">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm text-black/70">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0"
                      style={{ color: ACCENT }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── MID-PAGE CONVERSION BLOCK — real proof + big CTA ───────── */}
      <section className="relative border-y border-black/10 bg-black py-24">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, ${ACCENT}22, transparent)` }}
        />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: ACCENT }}>
              The Proof
            </span>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              This is what SEO + AEO + GEO actually delivers
            </h2>
            <p className="mt-4 text-balance text-white/60">
              Real Google Search Console data from the GameOn Solution engagement — no vanity
              metrics, just clicks, impressions, and leads that turned into revenue.
            </p>
          </div>

          {/* Stat band */}
          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {midStats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-sm"
              >
                <div className="text-3xl font-bold text-white sm:text-4xl" style={{ color: ACCENT }}>
                  {s.value}
                </div>
                <div className="mt-2 text-sm font-medium text-white/85">{s.label}</div>
                <div className="mt-1 text-xs text-white/45">{s.sub}</div>
              </div>
            ))}
          </div>

          {/* Real analytics screenshots — scattered proof wall */}
          <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            {analyticsShots.map((shot, i) => {
              const rotations = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "-rotate-1"];
              return (
                <div
                  key={shot.src}
                  className={`group relative ${rotations[i % rotations.length]} transition-transform duration-300 hover:rotate-0 hover:scale-[1.04] ${
                    i === 0 ? "sm:col-span-2 lg:col-span-2" : ""
                  }`}
                >
                  <div className="overflow-hidden rounded-xl border-4 border-white bg-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)]">
                    <div className="relative aspect-[16/10] w-full">
                      <Image
                        src={shot.src}
                        alt={shot.caption}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                  <p className="mt-3 text-center text-[11px] leading-snug text-white/50">{shot.caption}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <a
              href="https://cal.com/adszoo/30min"
              className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-white shadow-[0_10px_40px_-10px_rgba(255,99,33,0.7)] transition-transform hover:scale-[1.03]"
              style={{ backgroundColor: ACCENT }}
            >
              I Want Results Like This — Book My Free Audit
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <p className="mt-4 text-xs text-white/40">No contracts. No jargon. Just a straight look at where you stand today.</p>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ───────────────────────────────────────── */}
      <section className="relative mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Side by Side"
          title="How SEO, AEO & GEO actually differ"
          desc="Each optimizes for a different surface — but they share the same content foundation, which is why doing them together compounds results."
        />

        <div className="mt-12 overflow-x-auto rounded-2xl border border-black/10 bg-white shadow-[0_2px_20px_-8px_rgba(0,0,0,0.08)]">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-black/10 bg-black/[0.02]">
                <th className="px-6 py-4 font-medium text-black/45">Dimension</th>
                <th className="px-6 py-4 font-semibold text-black">SEO</th>
                <th className="px-6 py-4 font-semibold" style={{ color: ACCENT }}>AEO</th>
                <th className="px-6 py-4 font-semibold" style={{ color: ACCENT }}>GEO</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr key={row.row} className={i % 2 === 0 ? "bg-black/[0.012]" : ""}>
                  <td className="px-6 py-4 font-medium text-black/45">{row.row}</td>
                  <td className="px-6 py-4 text-black/75">{row.seo}</td>
                  <td className="px-6 py-4 text-black/75">{row.aeo}</td>
                  <td className="px-6 py-4 text-black/75">{row.geo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SERVICES GRID ──────────────────────────────────────────── */}
      <section className="relative mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="What's Included"
          title="Everything under one roof"
          desc="No fragmented vendors. One team building your visibility across every search surface."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-black/10 bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)]"
            >
              <h3 className="text-sm font-semibold text-black">{s.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-black/50">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://cal.com/adszoo/30min"
            className="inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline"
            style={{ color: ACCENT }}
          >
            Get a custom plan for your business →
          </a>
        </div>
      </section>

      {/* ── WEBSITE PROJECTS — BENTO GALLERY ───────────────────────── */}
      <section className="relative mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Proof, Not Promises"
          title="Real websites we've built and optimized"
          desc="Tap any project to see the full case study — challenge, approach, and results."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 lg:auto-rows-[220px] lg:grid-cols-6">
          {projects.map((p) => (
            <Link
              key={p.name}
              href={p.href}
              className={`group relative overflow-hidden rounded-2xl border border-black/10 bg-black shadow-[0_2px_20px_-8px_rgba(0,0,0,0.15)] transition-all hover:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.35)] ${p.span} min-h-[220px]`}
            >
              <Image
                src={p.src}
                alt={`${p.name} — website project screenshot`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top opacity-90 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100"
              />
              {/* Base gradient so text is always readable */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

              {/* Hover accent ring */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-2 transition-opacity group-hover:opacity-100"
                style={{ boxShadow: `inset 0 0 0 2px ${ACCENT}` }}
              />

              <div className="absolute left-0 right-0 top-0 flex items-center justify-between p-4">
                <span
                  className="rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide text-white backdrop-blur-sm"
                  style={{ backgroundColor: `${ACCENT}cc` }}
                >
                  {p.category}
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-sm transition-all group-hover:translate-x-0 group-hover:opacity-100 -translate-x-2">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-base font-semibold text-white sm:text-lg">{p.name}</h3>
                <span className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-white/70">
                  View full case study
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/case-study"
            className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-6 py-3 text-sm font-medium text-black/80 transition-colors hover:bg-black hover:text-white"
          >
            View All Case Studies →
          </Link>
        </div>
      </section>

      {/* ── TESTIMONIAL STRIP ──────────────────────────────────────── */}
      <section className="relative mx-auto max-w-4xl px-6 py-20 text-center">
        <svg className="mx-auto mb-6 h-8 w-8" style={{ color: `${ACCENT}99` }} fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
        </svg>
        <p className="text-balance text-xl font-medium leading-relaxed text-black/85 sm:text-2xl">
          &ldquo;Delivered a robust, SEO-friendly website for our page. Smooth process and clear
          communication.&rdquo;
        </p>
        <div className="mt-6 text-sm text-black/50">
          <span className="font-medium text-black/80">Gafur</span> — Founder, GafClickz
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      <section className="relative mx-auto max-w-3xl px-6 py-20">
        <SectionHeading
          eyebrow="FAQs"
          title="SEO, AEO & GEO — your questions answered"
          desc="Straight answers, pulled from real client conversations."
        />

        <div className="mt-12 space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-xl border border-black/10 bg-white px-6 py-1 shadow-[0_1px_10px_-4px_rgba(0,0,0,0.06)] transition-colors open:shadow-[0_4px_20px_-6px_rgba(0,0,0,0.1)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-sm font-medium text-black/90 marker:content-none">
                {f.q}
                <span
                  className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-transform group-open:rotate-45"
                  style={{ backgroundColor: `${ACCENT}14`, color: ACCENT }}
                >
                  +
                </span>
              </summary>
              <p className="pb-5 text-sm leading-relaxed text-black/55">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA — bold black block for contrast ──────────────── */}
      <section className="relative mx-auto max-w-5xl px-6 pb-28 pt-10">
        <div className="relative overflow-hidden rounded-3xl bg-black px-8 py-16 text-center sm:px-16">
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: `radial-gradient(ellipse 60% 60% at 50% 0%, ${ACCENT}33, transparent)` }}
          />
          <h2 className="relative text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Ready to be the answer — everywhere it&apos;s asked?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-balance text-white/60">
            Book a free 30-minute audit. We&apos;ll show you exactly where you stand on Google,
            AI Overviews, and ChatGPT — and what it takes to lead on all three.
          </p>
          <a
            href="https://cal.com/adszoo/30min"
            className="relative mt-8 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            style={{ backgroundColor: ACCENT }}
          >
            Discuss Your Ideas →
          </a>
        </div>
      </section>
    </main>
  );
}

/* ──────────────────────────────────────────────────────────────────────
   REUSABLE
   ────────────────────────────────────────────────────────────────────── */

function SectionHeading({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: ACCENT }}>
        {eyebrow}
      </span>
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {desc && <p className="mt-4 text-balance text-black/55">{desc}</p>}
    </div>
  );
}
