import Link from "next/link";
import { CONTACT, waLink } from "@/lib/site";

type L = { label: string; href: string };
export type TopicLinks = {
  primary: { href: string; cta: string; headline: string; text: string };
  links: L[];
  whatsapp: string;
};

const T = {
  manufacturing: {
    primary: {
      href: "/services/seo-for-manufacturers",
      cta: "Get a free B2B SEO audit",
      headline: "Want more RFQs from Google and AI search?",
      text: "We help manufacturers and B2B suppliers turn product searches into qualified enquiries with spec-led pages, SEO, AEO and GEO.",
    },
    links: [
      { label: "SEO & lead generation for manufacturers", href: "/services/seo-for-manufacturers" },
      { label: "Case study: Hitech Insulation", href: "/case-study/hitech-insulation" },
      { label: "Case study: Supreme Aluminium", href: "/case-study/supreme-aluminium" },
    ],
  },
  seo: {
    primary: {
      href: "/seo-aeo-geo-services",
      cta: "Get a free SEO audit",
      headline: "Want to rank on Google and get cited by AI?",
      text: "Our SEO, AEO and GEO programmes build rankings, AI citations and — most importantly — enquiries.",
    },
    links: [
      { label: "SEO, AEO & GEO services", href: "/seo-aeo-geo-services" },
      { label: "SEO for manufacturers", href: "/services/seo-for-manufacturers" },
      { label: "Case study: Srinivasan Chess Academy (local SEO)", href: "/case-study/srinivasan-chess-academy" },
    ],
  },
  social: {
    primary: {
      href: "/services/social-media-marketing",
      cta: "Plan my social media",
      headline: "Want social media that brings enquiries, not just likes?",
      text: "Content, reels and Meta/LinkedIn ads — planned around what your buyers ask, reported in leads.",
    },
    links: [
      { label: "Social media marketing services", href: "/services/social-media-marketing" },
      { label: "Meta Ads management", href: "/services/meta-ads-management" },
      { label: "Case study: Gotcha café", href: "/case-study/gotcha" },
    ],
  },
  ads: {
    primary: {
      href: "/services/google-ads-management",
      cta: "Audit my ad account",
      headline: "Spending on ads but not getting leads?",
      text: "We fix targeting, landing pages and tracking so every rupee of ad spend is measured in enquiries.",
    },
    links: [
      { label: "Google Ads management", href: "/services/google-ads-management" },
      { label: "Meta Ads management", href: "/services/meta-ads-management" },
      { label: "Landing page design", href: "/services/landing-page-design" },
    ],
  },
  website: {
    primary: {
      href: "/services/conversion-focused-websites",
      cta: "Get a website consultation",
      headline: "Need a website that actually converts?",
      text: "We build fast, SEO-ready websites designed around one goal — more calls, WhatsApp chats and enquiries.",
    },
    links: [
      { label: "Conversion-focused websites", href: "/services/conversion-focused-websites" },
      { label: "E-commerce website development", href: "/services/ecommerce-website-development" },
      { label: "Website design in Chennai", href: "/services/website-design-chennai" },
    ],
  },
  software: {
    primary: {
      href: "/services/custom-software-development",
      cta: "Discuss my software idea",
      headline: "Running your business on Excel and WhatsApp?",
      text: "We build custom software and ready-made products — billing, inventory, portals, apps — with one-time pricing and local support.",
    },
    links: [
      { label: "Custom software development", href: "/services/custom-software-development" },
      { label: "Unizo billing & inventory software", href: "/products/unizo-gst-billing-inventory-software" },
      { label: "Case study: KVM Agencies", href: "/case-study/kvm-agencies" },
    ],
  },
  billing: {
    primary: {
      href: "/products/unizo-gst-billing-inventory-software",
      cta: "Book a free Unizo demo",
      headline: "See Unizo billing software on a live demo",
      text: "GST billing, stock, credit and reports for construction material, hardware and trading businesses — offline or cloud, one-time price.",
    },
    links: [
      { label: "Unizo — GST billing & inventory software", href: "/products/unizo-gst-billing-inventory-software" },
      { label: "Case study: KVM Agencies", href: "/case-study/kvm-agencies" },
      { label: "Custom software development", href: "/services/custom-software-development" },
    ],
  },
  restaurant: {
    primary: {
      href: "/products/smart-queue-restaurant-queue-management-system",
      cta: "Book a Smart Queue demo",
      headline: "End the waiting-area chaos at your restaurant",
      text: "QR waitlist, TV token display, auto table allocation and phone alerts — set up in a day.",
    },
    links: [
      { label: "Smart Queue — restaurant queue system", href: "/products/smart-queue-restaurant-queue-management-system" },
      { label: "Custom software development", href: "/services/custom-software-development" },
      { label: "Mobile app development", href: "/services/mobile-app-development" },
    ],
  },
  realestate: {
    primary: {
      href: "/products/propertygenie-real-estate-listing-software",
      cta: "Try PropertyGenie",
      headline: "Share every property as a premium listing page",
      text: "PropertyGenie turns a WhatsApp property note into a listing page, share message and PDF brochure — with leads sent to you.",
    },
    links: [
      { label: "PropertyGenie for brokers", href: "/products/propertygenie-real-estate-listing-software" },
      { label: "Real estate marketing", href: "/industries/marketing-for-real-estate" },
      { label: "Case study: VV Builders", href: "/case-study/vv-builders" },
    ],
  },
} satisfies Record<string, Omit<TopicLinks, "whatsapp">>;

const RULES: [RegExp, keyof typeof T][] = [
  [/billing|gst|inventory|pos|unizo|trader|hardware/i, "billing"],
  [/restaurant|queue|hospitality|f&b|food/i, "restaurant"],
  [/real estate|broker|property|developer/i, "realestate"],
  [/manufactur|b2b|industrial|procurement|export|linkedin/i, "manufacturing"],
  [/software|app|saas|web system|migration/i, "software"],
  [/seo|aeo|geo|backlink|local|ai search|content/i, "seo"],
  [/instagram|social|reels|meta|facebook|whatsapp/i, "social"],
  [/google ads|ppc|ads|youtube/i, "ads"],
  [/website|landing|cro|ecommerce|conversion/i, "website"],
];

export function getTopicLinks(tags: string[], slug = ""): TopicLinks {
  const hay = `${tags.join(" ")} ${slug.replace(/-/g, " ")}`;
  const key = RULES.find(([re]) => re.test(hay))?.[1] ?? "website";
  const t = T[key];
  return {
    ...t,
    whatsapp: waLink(
      `Hi Adszoo, I read your article (${slug}) and want to discuss ${t.primary.cta.toLowerCase()}.`,
      key === "billing" || key === "restaurant" || key === "realestate" ? CONTACT.productWhatsApp : CONTACT.generalWhatsApp
    ),
  };
}

export default function BlogConversionBox({ topic }: { topic: TopicLinks }) {
  return (
    <aside className="not-prose mt-14 overflow-hidden rounded-3xl bg-gray-950 text-white">
      <div className="p-8 md:p-10">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#fdba74]">Turn this into results</p>
        <p className="mt-2 text-2xl font-extrabold tracking-tight md:text-3xl">{topic.primary.headline}</p>
        <p className="mt-3 text-gray-300">{topic.primary.text}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link href={topic.primary.href} className="rounded-full bg-[#ff6321] px-6 py-3 text-center font-semibold text-white hover:bg-[#e85716]">
            {topic.primary.cta}
          </Link>
          <a
            href={topic.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#25D366] px-6 py-3 text-center font-semibold text-white"
          >
            WhatsApp us
          </a>
          <a href={CONTACT.phoneHref} className="rounded-full border border-white/30 px-6 py-3 text-center font-semibold">
            Call {CONTACT.phone}
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 bg-white/5 px-8 py-6 md:px-10">
        <p className="text-sm font-semibold text-gray-300">Related on Adszoo</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {topic.links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="inline-block rounded-full border border-white/20 px-4 py-2 text-sm hover:border-[#ff6321] hover:text-[#fdba74]">
                {l.label} →
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
