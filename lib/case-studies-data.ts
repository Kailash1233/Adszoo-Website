export interface Metric {
  label: string;
  value: string;
}

export interface CaseStudy {
  metrics?: Metric[];
  website?: string;
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  client: string;
  turnaround: string;
  stack: string[];
  industry: string[];
  services: string[];
  scopeOfWork: string[];
  logoUrl: string;
  previewImage: string;
  challenge: string;
  approach: string;
  results: string;
  // SEO fields — optional so existing entries above don't need changes
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "Promide Steel Fabrication LLC",
    slug: "promide-steel-fabrication-llc",
    website: "http://promidesteel.com/",
    description:
      "Promide Steel Fabrication LLC wanted a website that reflected their industrial precision and expertise in steel fabrication. Their goal was to attract corporate clients with a modern, credible digital presence.",
    shortDescription:
      "High-impact corporate website for a steel fabrication firm",
    client: "Promide Steel Fabrication LLC",
    turnaround: "Completed",
    stack: ["Vite.js", "Tailwind CSS", "Framer Motion"],
    industry: ["Manufacturing", "Steel"],
    services: ["Development", "Web Design"],
    scopeOfWork: ["Development", "Web Design"],
    logoUrl: "/CaseStudy/8.webp",
    previewImage: "/casestudy-websites/PromideSteelFab.png",
    challenge:
      "Their challenge was to stand out in a competitive B2B manufacturing space and communicate their scale and precision through a strong visual identity.",
    approach:
      "We designed a minimal yet industrially bold website that showcased their expertise and credibility through structured sections, smooth animations, and optimized layouts.",
    results:
      "The new website positioned Promide Steel Fabrication as a modern, trusted steel brand - increasing business inquiries and improving client confidence.",
  },
  {
    id: "2",
    title: "Vizhipom Vidhaipom",
    slug: "vizhipom-vidhaipom",
    website: "https://www.vizhipomvidhaipom.in/",
    description:
      "Vizhipom Vidhaipom, a youth-driven NGO, wanted a digital space to share their weekly service work, attract donors, and inspire volunteers to join their mission.",
    shortDescription: "Mission-driven NGO website for youth-led social impact",
    client: "Vizhipom Vidhaipom",
    turnaround: "Completed",
    stack: ["HTML", "CSS", "JavaScript", "PHP"],
    industry: ["NGO", "Social Sector"],
    services: ["Web Design", "Development"],
    scopeOfWork: ["Web Design", "Development"],
    logoUrl: "/CaseStudy/6.webp",
    previewImage: "/casestudy-websites/vizhipom-vidhaipom.png",
    challenge:
      "They needed a website that clearly told their story, accepted donations securely, and helped visitors understand their activities in just a few clicks.",
    approach:
      "We created a lightweight, mobile-friendly website with intuitive navigation, impact storytelling, and bold calls-to-action to encourage volunteering and donations.",
    results:
      "The website became a key driver for outreach and community engagement, helping the NGO connect with hundreds of new volunteers and donors.",
  },
  {
    id: "3",
    title: "Eswari Builders",
    slug: "eswari-builders",
    website: "https://www.eswaribuilders.in/",
    description:
      "Eswari Builders wanted a modern, elegant website that reflected their craftsmanship and heritage while appealing to both residential and commercial clients.",
    shortDescription:
      "Luxury website highlighting a builder's legacy and expertise",
    client: "Eswari Builders",
    turnaround: "Completed",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    industry: ["Construction", "Real Estate"],
    services: ["Web Design", "UI/UX", "Development"],
    scopeOfWork: ["Web Design", "UI/UX", "Development"],
    logoUrl: "/CaseStudy/1.webp",
    previewImage: "/casestudy-websites/eswari-builders.png",
    challenge:
      "They needed a refined website that could visually represent their decades of trust and premium construction quality.",
    approach:
      "We designed a clean, high-end interface that combined visuals of their projects with clear service details and smooth interactions for a professional experience.",
    results:
      "The new site improved client trust, strengthened their brand positioning, and led to a measurable increase in project inquiries.",
  },
  {
    id: "4",
    title: "GafClickz",
    slug: "gafclickz",
    website: "https://gafclickz.in/",
    description:
      "GafClickz, a creative photography brand, needed a lightning-fast portfolio website that could visually express their dynamic style without unnecessary clutter.",
    shortDescription: "Minimal and high-speed photography portfolio",
    client: "GafClickz",
    turnaround: "Completed",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    industry: ["Photography"],
    services: ["Development"],
    scopeOfWork: ["Web Development"],
    logoUrl: "/CaseStudy/2.webp",
    previewImage: "/casestudy-websites/gafclickz.png",
    challenge:
      "They needed a seamless gallery experience that let their photos shine, without performance issues or visual distractions.",
    approach:
      "We developed a performance-optimized site with clean layouts and fluid animations - allowing users to browse through photos effortlessly.",
    results:
      "The result was a bold, fast-loading digital portfolio that perfectly reflected the brand’s artistic identity and helped them win more creative collaborations.",
  },
  {
    id: "5",
    title: "Srinivasan Chess Academy",
    slug: "srinivasan-chess-academy",
    website: "https://www.srinivasanchessacademy.in/",
    description:
      "Srinivasan Chess Academy wanted a digital platform to simplify how parents and students access class schedules, programs, and academy details.",
    shortDescription: "Educational website for a leading chess academy",
    client: "Srinivasan Chess Academy",
    turnaround: "Completed",
    stack: ["React.js", "CSS", "JavaScript"],
    industry: ["Education", "Sports"],
    services: ["Development"],
    scopeOfWork: ["Development"],
    logoUrl: "/CaseStudy/3.webp",
    previewImage: "/casestudy-websites/srinivasan-chess.png",
    challenge:
      "They needed a reliable, informative website that builds trust and helps users quickly find chess program details.",
    approach:
      "We built a simple, fast-loading website with clear navigation and responsive layouts for all devices.",
    results:
      "The academy gained a polished digital presence that improved engagement from both students and parents.",
  },
  {
    id: "6",
    title: "Supreme Aluminium",
    slug: "supreme-aluminium",
    website: "https://supremealuminium.shop/",
    description:
      "Supreme Aluminium wanted a website that showcased their product precision and technical expertise with a corporate yet modern touch.",
    shortDescription: "Corporate interface for a precision aluminium company",
    client: "Supreme Aluminium",
    turnaround: "Ongoing",
    stack: ["Vite.js", "React.js", "TailwindCSS", "Framer Motion"],
    industry: ["Manufacturing", "Aluminium"],
    services: ["UI/UX", "Development"],
    scopeOfWork: ["UI/UX", "Development"],
    logoUrl: "/CaseStudy/7.webp",
    previewImage: "/casestudy-websites/supreme-aluminium.png",
    challenge:
      "They needed a design that communicated both industrial strength and corporate polish, without sacrificing performance.",
    approach:
      "We crafted a structured, visually refined layout with smooth animations and clear product storytelling.",
    results:
      "The new digital interface is in progress - built to elevate Supreme Aluminium’s credibility and online reach among business clients.",
  },
  {
    id: "7",
    title: "KVM CMart",
    slug: "kvm-cmart",
    website: "https://www.kvmcmart.in/",
    description:
      "KVM CMart aimed to transform their traditional materials business into a full-fledged online platform with real-time inventory and a CMS-backed system.",
    shortDescription:
      "E-commerce transformation for construction material supplier",
    client: "KVM CMart",
    turnaround: "Completed",
    stack: ["Vite.js", "TailwindCSS", "Framer Motion", "Strapi", "Node.js"],
    industry: ["Construction", "E-Commerce"],
    services: ["Web Design", "Development"],
    scopeOfWork: ["Web Design", "Development"],
    logoUrl: "/CaseStudy/4.webp",
    previewImage: "/casestudy-websites/kvm-cmart.png",
    challenge:
      "They needed an easy-to-manage platform to sell construction materials online and handle daily updates efficiently.",
    approach:
      "We built an e-commerce site powered by Strapi CMS - allowing non-technical staff to manage products, orders, and updates smoothly.",
    results:
      "The shift to digital helped KVM CMart expand their reach, improve efficiency, and modernize how clients purchase building materials.",
  },
  {
    id: "8",
    title: "Sathiya Fruits",
    slug: "sathiya-fruits",
    website: "https://www.sathiyafruits.in/",
    description:
      "Sathiya Fruits wanted a digital identity that reflected their quality and freshness while appealing to corporate clients and bulk buyers.",
    shortDescription: "Clean and modern website for a premium fruit supplier",
    client: "Sathiya Fruits",
    turnaround: "Completed",
    stack: ["Vite.js", "Tailwind CSS", "Framer Motion"],
    industry: ["Fruits", "Corporate"],
    services: ["Development", "Web Design"],
    scopeOfWork: ["Development", "Web Design"],
    logoUrl: "/CaseStudy/9.webp",
    previewImage: "/casestudy-websites/sathiya-fruits.png",
    challenge:
      "They needed a sleek platform to highlight their fresh produce, certifications, and B2B supply network.",
    approach:
      "We designed a clean, refreshing layout with an emphasis on visuals and user experience to showcase their brand story effectively.",
    results:
      "The site gave Sathiya Fruits a professional presence, improved corporate inquiries, and reinforced their commitment to quality.",
  },
  {
    id: "9",
    title: "Nura",
    slug: "nura",
    website: "https://nura-sage.vercel.app/index.html",
    description:
      "Nura, a skincare and wellness brand, wanted an e-commerce experience that balanced luxury, simplicity, and trust - helping users buy confidently online.",
    shortDescription: "Luxury skincare e-commerce platform with smooth UX",
    client: "Nura",
    turnaround: "Completed",
    stack: ["Next.js", "TailwindCSS", "Framer Motion", "Shopify"],
    industry: ["E-Commerce", "Skincare"],
    services: ["UI/UX Design", "Development", "Shopify Integration"],
    scopeOfWork: ["UI/UX", "Development"],
    logoUrl: "/CaseStudy/10.webp",
    previewImage: "/casestudy-websites/nura.png",
    challenge:
      "They needed a digital storefront that reflected their premium skincare positioning - combining product trust, elegance, and conversion-focused design.",
    approach:
      "We crafted a Shopify-integrated website with immersive visuals, minimal navigation, and seamless checkout flow for a refined user experience.",
    results:
      "The result was a conversion-focused website that strengthened Nura’s brand identity and simplified how customers discover and purchase their products.",
  },

  // ── New case studies ──────────────────────────────────────────────

  {
    id: "10",
    title: "PriVio Health",
    slug: "privio-health",
    website: "https://priviohealth.co.in/",
    description:
      "Piles is a condition most patients delay treating simply because talking about it feels awkward. PriVio exists to remove that barrier — a telehealth platform where patients complete a private assessment, consult a licensed doctor over video, and get treatment without ever stepping into a waiting room.",
    shortDescription:
      "Telehealth platform for private, at-home piles consultation and treatment",
    client: "PriVio Health",
    turnaround: "Ongoing",
    stack: ["React.js", "TanStack Router", "Tailwind CSS"],
    industry: ["Healthcare", "Telehealth"],
    services: ["Web Design", "Development", "UI/UX", "Conversion Optimization"],
    scopeOfWork: ["Web Design", "Development", "UI/UX"],
    logoUrl: "/CaseStudy/privio.webp",
    previewImage: "/casestudy-websites/privio-health.png",
    challenge:
      "Patient drop-off is the core problem in telehealth for sensitive conditions — most visitors abandon the moment a form feels clinical or the pricing feels hidden. The site had to earn trust in seconds while keeping the entire funnel, from symptom check to paid consultation, frictionless on mobile.",
    approach:
      "Built a fast, symptom-first assessment flow with upfront pricing, a sticky mobile CTA bar, and a calm, non-clinical visual language that makes an uncomfortable topic feel safe to act on. Every screen was structured around a single next step, not a menu of options.",
    results:
      "A consultation flow that patients can complete in minutes without ever picking up a phone — turning a condition people avoid discussing into a straightforward, private, three-step process from assessment to treatment.",
    metaTitle:
      "PriVio Health Case Study — Telehealth Platform for Piles Treatment | Adszoo",
    metaDescription:
      "How Adszoo built PriVio, a private telehealth platform for piles treatment in India — from patient assessment to doctor consultation.",
    keywords: [
      "telehealth website development India",
      "healthcare app development Chennai",
      "piles treatment platform",
      "medical consultation website design",
      "patient assessment funnel design",
      "healthcare conversion rate optimization",
    ],
  },
  {
    id: "11",
    title: "ScoutEdge",
    slug: "scoutedge",
    website: "https://scoutedge1.framer.website/",
    description:
      "ScoutEdge is an IIT Madras-incubated platform that uses computer vision to turn raw match footage into structured player performance data — tracking speed, positioning, and decision-making frame by frame, for scouts and academies who currently rely on gut feel.",
    shortDescription:
      "Landing page for an IIT Madras-incubated AI sports scouting platform",
    client: "ScoutEdge",
    turnaround: "Completed",
    stack: ["React.js", "TanStack Router", "Tailwind CSS", "Framer Motion"],
    industry: ["Sports Tech", "AI/ML"],
    services: ["Web Design", "Development", "UI/UX"],
    scopeOfWork: ["Web Design", "Development", "UI/UX"],
    logoUrl: "/CaseStudy/scoutedge.webp",
    previewImage: "/casestudy-websites/scoutedge.png",
    challenge:
      "Explaining a computer-vision product to two very different audiences at once — technical investors evaluating the AI, and coaches who just want to know if it'll save them time — without either group bouncing off jargon or an underwhelming demo.",
    approach:
      "Structured the page around a single visual proof point — raw footage transforming into scored player data — using custom scroll-triggered animations to make the AI's output tangible before a single feature is explained in text.",
    results:
      "A conversion-focused landing page that leads with product proof instead of claims, giving both technical and non-technical visitors a clear reason to request a demo within the first scroll.",
    metaTitle:
      "ScoutEdge Case Study — AI Sports Scouting Platform Website | Adszoo",
    metaDescription:
      "How Adszoo designed and built the landing page for ScoutEdge, an IIT Madras-incubated AI-powered cricket talent scouting platform.",
    keywords: [
      "sports tech startup website design",
      "AI product landing page development",
      "startup website design Chennai",
      "IIT Madras incubated startup website",
      "SaaS landing page design India",
      "scroll animation website design",
    ],
  },
  {
    id: "12",
    title: "Pallavaram Constituency Grievance Portal",
    slug: "pallavaram-grievance-portal",
    website: "http://pallavaram.tnkural.in/",
    description:
      "Built for the Pallavaram MLA's constituency office, this is a public civic portal where residents file complaints on water, drainage, roads, sanitation, and electricity issues, and track resolution status on a live map in real time.",
    shortDescription:
      "Bilingual civic grievance and complaint-tracking portal for a Tamil Nadu MLA's constituency office",
    client: "MLA Pallavaram Constituency Office",
    turnaround: "Ongoing",
    stack: ["React.js", "Supabase", "TanStack Router", "Tailwind CSS"],
    industry: ["Government", "Civic Tech"],
    services: ["Full-Stack Development", "Web Design", "UI/UX"],
    scopeOfWork: ["Web Design", "Development", "Admin System"],
    logoUrl: "/CaseStudy/tnkural.webp",
    previewImage: "/casestudy-websites/pallavaram-portal.png",
    challenge:
      "A grievance portal only works if residents actually trust it enough to use it — that meant building real accountability into the product itself: visible complaint status, a live map, and category-wise tracking, not just a contact form that disappears into an inbox.",
    approach:
      "Built a full-stack system with role-based access for constituency staff to triage and resolve complaints, GPS-tagged submissions with image upload and compression, bilingual Tamil-English content throughout, and a public live map showing real-time resolution status by ward and category.",
    results:
      "A transparent, publicly accountable complaint system — residents can file an issue and watch its status change from submitted to resolved on the same map everyone else can see, which is the trust mechanism the whole portal is built around.",
    metaTitle:
      "Civic Grievance Portal Case Study — Government Website Development | Adszoo",
    metaDescription:
      "How Adszoo built a bilingual, GPS-enabled civic grievance and complaint-tracking portal for a Tamil Nadu MLA constituency office.",
    keywords: [
      "government portal development India",
      "civic tech website development",
      "constituency website design Tamil Nadu",
      "complaint tracking system development",
      "bilingual website development Chennai",
      "public sector web application development",
    ],
  },
  {
    id: "13",
    title: "AB Design Labs",
    slug: "ab-design-labs",
    website: "https://abdesignlabs.in/",
    description:
      "AB Design Labs runs architecture and interior design projects across Chennai — villas, cafés, salons, and commercial fit-outs — and needed a web presence built to convert local, high-intent searches ward by ward, not just look good in a portfolio.",
    shortDescription:
      "Local SEO-focused website and content system for a Chennai interior design firm",
    client: "AB Design Labs",
    turnaround: "Ongoing",
    stack: ["PHP", "JavaScript", "CSS"],
    industry: ["Interior Design", "Architecture"],
    services: ["Local SEO", "Web Development", "Content Strategy"],
    scopeOfWork: ["Web Development", "Local SEO", "Blog Content"],
    logoUrl: "/CaseStudy/abdesignlabs.webp",
    previewImage: "/casestudy-websites/ab-design-labs.png",
    challenge:
      "Interior design searches in Chennai are hyper-local — someone searching 'interior designer in T Nagar' won't click a firm whose site only ranks for 'interior designer Chennai.' A single generic services page couldn't compete against firms with neighbourhood-specific content.",
    approach:
      "Built out dedicated location pages for 11+ Chennai neighbourhoods, each targeting real local search intent, alongside a category-specific service architecture (salon, café, hospital, boutique interiors) and an ongoing blog content system to keep the site's local footprint expanding.",
    results:
      "A site structure built to be found neighbourhood by neighbourhood, service by service — turning one firm's portfolio into dozens of specific, rankable entry points instead of a single homepage competing for one broad keyword.",
    metaTitle:
      "AB Design Labs Case Study — Local SEO for Interior Design Firm | Adszoo",
    metaDescription:
      "How Adszoo built location-specific pages and a content system to help AB Design Labs rank across 11+ Chennai neighbourhoods for interior design searches.",
    keywords: [
      "interior design website development",
      "local SEO for interior designers",
      "affordable interior designers Chennai",
      "architecture firm website design",
      "location page SEO strategy",
      "interior design lead generation website",
    ],
  },
  {
    id: "14",
    title: "Gotcha",
    slug: "gotcha",
    website: "https://gotchaindia.framer.website/",
    description:
      "Gotcha is a matcha café in Alwarpet, Chennai, built around a slower, calmer approach to a drink most cafés serve as a trend. The brand needed a site that matched that pace — unhurried, visual, and built to get people to the menu fast.",
    shortDescription:
      "Café website and digital menu for a Chennai matcha brand",
    client: "Gotcha",
    turnaround: "Completed",
    stack: ["Framer"],
    industry: ["Food & Beverage", "Hospitality"],
    services: ["Web Design", "Menu & Ordering UX"],
    scopeOfWork: ["Web Design", "Menu Design"],
    logoUrl: "/CaseStudy/gotchaindia.webp",
    previewImage: "/casestudy-websites/gotcha.png",
    challenge:
      "Café websites usually either bury the menu behind a PDF or overload the homepage with atmosphere shots and nothing functional. Gotcha needed both — a brand feel that matched their calm, intentional identity, and a menu people could actually browse and order from on their phones.",
    approach:
      "Designed a quiet, image-led homepage that immediately establishes the brand's tone, paired with a fast, filterable digital menu (matcha, non-matcha, desserts) so first-time visitors can go from landing on the site to deciding what to order in under a minute.",
    results:
      "A café website that does double duty as both brand statement and functional menu — visitors get the vibe and the order-ready menu in the same visit, without one undercutting the other.",
    metaTitle:
      "Gotcha Case Study — Café Website & Digital Menu Design | Adszoo",
    metaDescription:
      "How Adszoo designed the website and digital menu for Gotcha, a matcha café in Alwarpet, Chennai.",
    keywords: [
      "café website design Chennai",
      "restaurant website design India",
      "digital menu design",
      "F&B brand website development",
      "matcha café Chennai website",
      "hospitality website design",
    ],
  },
  {
    id: "15",
    title: "Hitech Insulation",
    slug: "hitech-insulation",
    website: "https://hitechinsulation.in/",
    description:
      "Hitech Insulation manufactures electrical and thermal insulation materials — laminates, sheets, tubes, and tapes — used in foundries, furnaces, and industrial electrical systems. Their buyers are procurement engineers who need exact specifications, not marketing copy.",
    shortDescription:
      "B2B catalog and specification website for an industrial insulation manufacturer",
    client: "Hitech Insulation",
    turnaround: "Completed",
    stack: ["Next.js", "Tailwind CSS"],
    industry: ["Manufacturing", "Industrial Materials"],
    services: ["Web Design", "Development"],
    scopeOfWork: ["Web Design", "Development", "Product Catalog Structure"],
    logoUrl: "/CaseStudy/hitech.webp",
    previewImage: "/casestudy-websites/hitech-insulation.png",
    challenge:
      "Industrial buyers evaluating insulation materials need thickness ranges, material grades, and application use-cases at a glance — generic product photography with no specifications tells a procurement engineer nothing useful and sends them straight to a competitor's spec sheet.",
    approach:
      "Structured each product category — laminates, syndanio sheets, insulation tubes, tapes — around clear technical specifications (thickness ranges, material composition, typical applications) instead of generic industrial stock photography, so a buyer can qualify a product without a phone call.",
    results:
      "A catalog-style site that speaks the language of the actual buyer — procurement and engineering teams can self-qualify products by spec before ever reaching out, shortening the sales cycle on inbound inquiries.",
    metaTitle:
      "Hitech Insulation Case Study — Industrial B2B Website Design | Adszoo",
    metaDescription:
      "How Adszoo built a specification-led B2B website for Hitech Insulation, an industrial electrical and thermal insulation manufacturer.",
    keywords: [
      "industrial manufacturer website design",
      "B2B product catalog website",
      "electrical insulation manufacturer website",
      "manufacturing company website development India",
      "technical specification website design",
      "industrial B2B lead generation website",
    ],
  },
  {
    id: "16",
    title: "Pallavi Pratap",
    slug: "pallavi-pratap",
    website: "https://pallavipratap.com/",
    description:
      "A personal site for Pallavi Pratap — a practicing lawyer who writes essays on grief, ambition, selfhood, and the parts of life law school doesn't prepare you for. The brief was to build a space that reads like a memoir in progress, not a professional portfolio.",
    shortDescription: "Personal essay and memoir website for a lawyer-writer",
    client: "Pallavi Pratap",
    turnaround: "Completed",
    stack: ["Framer"],
    industry: ["Personal Brand", "Publishing"],
    services: ["Web Design", "Content Structure"],
    scopeOfWork: ["Web Design"],
    logoUrl: "/CaseStudy/pallavi.webp",
    previewImage: "/casestudy-websites/pallavi-pratap.png",
    challenge:
      "Most personal websites for professionals default to a credentials-first layout — bio, resume, contact. This site needed to do the opposite: lead with voice and writing, and let the professional background sit quietly in the background instead of framing everything.",
    approach:
      "Designed an editorial, blog-forward homepage where recent essays take center stage, with a minimal, text-focused layout that gets out of the way of the writing instead of competing with it visually.",
    results:
      "A site that functions as a living, ongoing body of work rather than a static bio page — new essays become the homepage's main content, keeping the site naturally current with every post.",
    metaTitle:
      "Pallavi Pratap Case Study — Personal Essay & Writer Website Design | Adszoo",
    metaDescription:
      "How Adszoo designed a personal, editorial-style website for writer and lawyer Pallavi Pratap.",
    keywords: [
      "personal brand website design",
      "writer portfolio website",
      "blog website design India",
      "editorial website design",
      "personal website for professionals",
      "Framer website design agency",
    ],
  },
  {
    id: "17",
    title: "HiFive Finance",
    slug: "hifive-finance",
    website: "https://hifivefinance.vercel.app/",
    description:
      "HiFive Finance handles accounting, tax filing, GST compliance, and business registration for growing companies. Their site had to do what their service does — make compliance feel manageable instead of intimidating — while converting visitors searching for urgent filing help.",
    shortDescription:
      "Website for an accounting and GST/tax compliance firm serving growing businesses",
    client: "HiFive Finance",
    turnaround: "Completed",
    stack: ["Next.js", "Tailwind CSS"],
    industry: ["Fintech", "Accounting", "Professional Services"],
    services: ["Web Design", "Development", "SEO"],
    scopeOfWork: ["Web Design", "Development", "SEO Structure"],
    logoUrl: "/CaseStudy/hifive.webp",
    previewImage: "/casestudy-websites/hifive-finance.png",
    challenge:
      "Compliance services get searched under deadline pressure — 'GST return due date,' 'TDS filing help' — so the site needed to convert visitors who are stressed and time-boxed, not browsing casually, without burying the actual services under generic trust-badge marketing copy.",
    approach:
      "Built clear, separated service pages for tax filing, GST compliance, business registration, and bookkeeping, each written to answer the specific question a business owner has at that exact filing stage, backed by a straightforward, credibility-first homepage.",
    results:
      "A site structured around real compliance triggers instead of one generic 'services' page — visitors land on the exact page matching their filing deadline instead of hunting through a menu.",
    metaTitle:
      "HiFive Finance Case Study — Accounting & Tax Compliance Website | Adszoo",
    metaDescription:
      "How Adszoo built a service-page-driven website for HiFive Finance, an accounting, GST, and tax compliance firm.",
    keywords: [
      "accounting firm website design",
      "tax compliance website development",
      "GST filing service website",
      "CA firm website design India",
      "fintech services website development",
      "business registration service website",
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getRelatedCaseStudies(
  currentSlug: string,
  limit = 3
): CaseStudy[] {
  return caseStudies
    .filter((study) => study.slug !== currentSlug)
    .slice(0, limit);
}
