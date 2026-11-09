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
  status?: string;
  highlights?: string[];
  seoWins?: string[];
  proofImage?: { src: string; alt: string; caption: string };
  relatedLinks?: { label: string; href: string }[];
  // SEO fields — optional so existing entries above don't need changes
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
}

const allCaseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "Promide Steel Fabrication LLC",
    slug: "promide-steel-fabrication-llc",
    website: "http://promidesteel.com/",
    status: "Live",
    description:
      "Promide Steel Fabrication LLC is a structural steel fabrication company serving corporate, industrial and construction clients. They needed a website that looked as precise and dependable as their fabrication work — and that a procurement manager or main contractor could trust at first glance.",
    shortDescription:
      "Corporate B2B website for a structural steel fabrication company",
    client: "Promide Steel Fabrication LLC",
    turnaround: "Completed",
    stack: ["Vite.js", "Tailwind CSS", "Framer Motion"],
    industry: ["Manufacturing", "Steel"],
    services: ["Development", "Web Design"],
    scopeOfWork: ["Development", "Web Design"],
    logoUrl: "/CaseStudy/8.webp",
    previewImage: "/casestudy-websites/PromideSteelFab.png",
    challenge:
      "Steel fabrication is a trust business. Contracts are won by firms that can prove capacity, safety and finish quality before the first site visit. Promide's old presence didn't show any of that: no clear capability list, no project proof and nothing that separated them from dozens of fabricators competing for the same tenders.",
    approach:
      "We designed a minimal but industrially bold site organised around how B2B buyers evaluate a fabricator: capabilities first (structural steel, fabrication, erection), then process and quality, then projects and a direct enquiry path. Subtle motion, large project imagery and a strict grid give the brand a 'precision engineering' feel without slowing the site down.",
    results:
      "Promide now has a corporate-grade website the sales team confidently sends to prospects and includes in tender documents. Capability and project sections answer the first round of buyer questions up front, so enquiries arrive better qualified.",
    highlights: [
      "Capability-led information architecture for B2B buyers",
      "Project and process sections that build pre-call trust",
      "Fast, lightweight build with tasteful motion",
      "Clear enquiry paths on every section",
    ],
    relatedLinks: [
      { label: "SEO & lead generation for manufacturers", href: "/services/seo-for-manufacturers" },
      { label: "Conversion-focused websites", href: "/services/conversion-focused-websites" },
    ],
    metaTitle: "Promide Steel Fabrication Case Study — B2B Steel Company Website | Adszoo",
    metaDescription:
      "How Adszoo designed a capability-led corporate website for Promide Steel Fabrication to win B2B and contractor trust.",
    keywords: ["steel fabrication company website", "B2B manufacturing website design", "industrial website design India"],
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
    status: "Live",
    description:
      "Eswari Builders is a construction company with a long track record in residential and commercial projects. They wanted a website that carried the weight of their legacy and helped homebuyers and commercial clients shortlist them with confidence.",
    shortDescription:
      "Premium website showcasing a builder's legacy, projects and expertise",
    client: "Eswari Builders",
    turnaround: "Completed",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    industry: ["Construction", "Real Estate"],
    services: ["Web Design", "UI/UX", "Development"],
    scopeOfWork: ["Web Design", "UI/UX", "Development"],
    logoUrl: "/CaseStudy/1.webp",
    previewImage: "/casestudy-websites/eswari-builders.png",
    challenge:
      "Homebuyers spend weeks researching a builder before they call. Eswari's reputation was strong offline, but online it was hard to see completed projects, construction quality or what made them different — so prospects were comparing them on price alone.",
    approach:
      "We built a refined Next.js site that leads with completed work: project galleries, construction approach, services for residential and commercial clients, and clear calls to book a site visit. Typography and imagery were chosen to feel premium while keeping pages fast on mobile.",
    results:
      "Eswari Builders now has a credible, premium digital presence that reflects decades of trust. The site helps prospects shortlist them before the first call, and the team reports better-quality project enquiries.",
    highlights: [
      "Project-first layout with rich galleries",
      "Separate journeys for residential and commercial clients",
      "Site-visit and enquiry CTAs throughout",
      "Next.js performance for fast mobile loads",
    ],
    relatedLinks: [
      { label: "Real estate marketing", href: "/industries/marketing-for-real-estate" },
      { label: "PropertyGenie for real estate brokers", href: "/products/propertygenie-real-estate-listing-software" },
    ],
    metaTitle: "Eswari Builders Case Study — Construction Company Website Design | Adszoo",
    metaDescription:
      "How Adszoo built a premium, project-led website for Eswari Builders to turn reputation into enquiries.",
    keywords: ["builder website design Chennai", "construction company website", "real estate developer website"],
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
    previewImage: "/casestudy-websites/GafClickz.png",
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
    status: "Live · SEO ongoing",
    description:
      "Srinivasan Chess Academy is a chess academy in Chromepet, Chennai, founded in 2023 by Coach C K R Gangadharam and affiliated to the Chengalpattu District Chess Association. It runs offline classes at its Nehru Nagar centre and live online classes for students across Tamil Nadu, India and abroad. We built the website and run its SEO. Today it ranks for chess-class searches across most Chennai localities, and Google clicks took off from mid-October 2026.",
    shortDescription:
      "Website + local SEO: ranking across most of Chennai for chess-class searches",
    client: "Srinivasan Chess Academy",
    turnaround: "Live · SEO ongoing",
    stack: ["React.js", "Schema Markup", "Google Search Console", "Google Business Profile"],
    industry: ["Education", "Sports"],
    services: ["Web Development", "Local SEO", "Content", "AEO"],
    scopeOfWork: ["Development", "Local SEO", "Locality Pages", "Content Strategy"],
    logoUrl: "/CaseStudy/srinivasan-chess-live.webp",
    previewImage: "/casestudy-websites/srinivasan-chess-live.webp",
    challenge:
      "Parents don't search for an academy by name. They search 'chess classes near me', 'chess classes in Tambaram', 'online chess classes for kids' or 'how to get a FIDE rating'. A new academy (founded 2023) was competing with national online platforms and older academies, and a single homepage could never rank in dozens of Chennai neighbourhoods at once.",
    approach:
      "We built a fast, answer-first website and then a local SEO architecture on top of it. It has program pages for kids, adults, beginners, advanced players, one-on-one coaching, tournament preparation and online classes. It has 44 dedicated Chennai locality pages, from Chromepet, Tambaram and Pallavaram to Velachery, Anna Nagar, T Nagar, Adyar and OMR. A 'Learn' hub answers the questions parents actually ask: how to get a FIDE rating in India, the best age to start chess, online vs offline classes, and chess tournaments in Chennai. We added LocalBusiness, Person and FAQ schema, kept name, address and phone consistent with Google Business Profile, and used Search Console data to refine titles and content.",
    results:
      "The academy now ranks for chess-class searches across most Chennai localities, not just Chromepet. Search Console shows 164 web search clicks between 8 August and 9 November 2026. Clicks were 0–3 a day through August and September, while the locality pages and guides were being indexed. From mid-October they jumped to 6–14 a day. The 'How to get a FIDE rating in India' guide alone saw a 121% jump in impressions. Parents now arrive already knowing the programmes and timings, so enquiries are warmer.",
    metrics: [
      { label: "Search clicks (8 Aug – 9 Nov 2026)", value: "164" },
      { label: "Peak clicks/day (was 0–3)", value: "14" },
      { label: "Chennai locality pages", value: "44" },
      { label: "FIDE guide impressions", value: "+121%" },
    ],
    proofImage: {
      src: "/casestudy-websites/srinivasan-chess-search-console.webp",
      alt: "Google Search Console chart for srinivasanchessacademy.in showing 164 total web search clicks with a sharp rise from mid-October 2026",
      caption: "Google Search Console, 8 Aug – 9 Nov 2026: 164 web search clicks, with daily clicks rising sharply from mid-October.",
    },
    highlights: [
      "44 Chennai locality pages (Chromepet, Tambaram, Velachery, Anna Nagar, T Nagar, OMR…)",
      "Program pages: kids, adults, beginners, advanced, one-on-one, tournament prep, online",
      "'Learn' hub answering parents' real questions (FIDE rating, best age to start)",
      "Click-to-call, WhatsApp and timings visible on every page",
    ],
    seoWins: [
      "Ranking for chess-class searches across most Chennai localities",
      "164 Google clicks in 3 months, with peak days of 13–14 clicks from mid-October",
      "'How to get FIDE rating in India' guide: +121% impressions",
      "Average positions of roughly 4–12 already in Aug–Sep on 20–80 daily impressions",
      "LocalBusiness, Person & FAQ schema for rich results and AI answers",
      "Consistent NAP with Google Business Profile",
    ],
    relatedLinks: [
      { label: "Local SEO guide for small businesses", href: "/blogs/local-seo-small-business-guide" },
      { label: "SEO, AEO & GEO services", href: "/seo-aeo-geo-services" },
    ],
    metaTitle: "Srinivasan Chess Academy Case Study — Local SEO Ranking Across Chennai | Adszoo",
    metaDescription:
      "How Adszoo's website, 44 Chennai locality pages and answer-first content took Srinivasan Chess Academy to 164 Google clicks in 3 months, with a sharp rise from October 2026.",
    keywords: [
      "local SEO case study Chennai",
      "SEO for coaching centres Chennai",
      "chess academy website design",
      "locality pages SEO",
      "education website SEO case study",
    ],
  },
  {
    id: "6",
    title: "Supreme Aluminium & Hardwares",
    slug: "supreme-aluminium",
    website: "https://www.supremealuminium.shop/",
    status: "Live · SEO ongoing",
    description:
      "Supreme Aluminium & Hardwares is an aluminium hardware wholesaler and retail shop in Selaiyur, Chennai, trading since 2011. It supplies window and door sections, Jindal clips, mosquito net channels, rubbers, sealants, boards, handles and ladders to fabricators, builders and homeowners. We built a local-SEO-first website that turns 'aluminium shop near me' searches across South Chennai into calls and WhatsApp orders.",
    shortDescription:
      "Local SEO website with 40+ area pages for an aluminium hardware wholesaler",
    client: "Supreme Aluminium & Hardwares",
    turnaround: "Live · SEO ongoing",
    stack: ["Vite.js", "React.js", "Tailwind CSS", "FAQ & LocalBusiness Schema"],
    industry: ["Manufacturing", "Aluminium", "Trading"],
    services: ["Web Development", "Local SEO", "Content", "AEO"],
    scopeOfWork: ["Web Development", "Product Catalogue", "Area Pages", "Guides"],
    logoUrl: "/CaseStudy/supreme-aluminium-live.webp",
    previewImage: "/casestudy-websites/supreme-aluminium-live.webp",
    challenge:
      "Fabricators and homeowners search hyper-locally: 'aluminium hardware shop Tambaram', 'Jindal aluminium dealer Chromepet', 'mosquito net shop Velachery'. A single shop page could never appear for all of them. Customers also called with the same questions every day: which section, which thickness, is it genuine Jindal, do you deliver?",
    approach:
      "We built separate pages for 11 product categories: window and door sections, plain sections, channels and angles, mosquito net, rubber items, sealants, boards, handles, ladders and slotted angles. Wholesale and fabrication service pages target trade buyers. 40+ South Chennai area pages cover Selaiyur, Tambaram, Chromepet, Velachery, Medavakkam, OMR, Pallavaram and more. Buying guides cover aluminium vs UPVC, 2-track vs 3-track sliders, section thickness, and how to spot genuine Jindal aluminium. An answer-first 'quick facts' block plus FAQ and LocalBusiness schema helps the shop get quoted by Google and AI assistants.",
    results:
      "Supreme Aluminium now has a dedicated, rankable page for every product line and every area it delivers to — over 60 entry points from Google instead of one. Customers self-serve sizes and options before calling, the guides answer common questions, and the 'call / WhatsApp' path is one tap from every page.",
    metrics: [
      { label: "Area pages", value: "40+" },
      { label: "Product categories", value: "11" },
      { label: "Buying guides", value: "6" },
      { label: "In trade since", value: "2011" },
    ],
    highlights: [
      "11 product category pages with sizes and use-cases",
      "Wholesale and fabrication pages for trade buyers",
      "40+ South Chennai area pages",
      "Buying guides + answer-first 'quick facts' block",
    ],
    relatedLinks: [
      { label: "SEO for manufacturers & suppliers", href: "/services/seo-for-manufacturers" },
      { label: "Local SEO guide", href: "/blogs/local-seo-small-business-guide" },
    ],
    metaTitle: "Supreme Aluminium Case Study — Local SEO for an Aluminium Hardware Wholesaler | Adszoo",
    metaDescription:
      "How Adszoo built a local-SEO website with 40+ area pages, 11 product categories and buying guides for Supreme Aluminium & Hardwares, Selaiyur, Chennai.",
    keywords: ["aluminium hardware shop website", "local SEO for wholesalers", "area pages SEO Chennai", "hardware store SEO case study"],
  },
  {
    id: "7",
    title: "KVM CMart",
    slug: "kvm-cmart",
    website: "https://www.kvmcmart.in/",
    status: "Live",
    description:
      "KVM CMart is the online arm of KVM Agencies — an A-to-Z, one-stop shop for construction raw materials. We built a CMS-powered e-commerce platform so contractors and home builders can browse cement, steel, sand, bricks and more, and so the team can manage products and prices without a developer.",
    shortDescription:
      "E-commerce platform for a construction raw material supplier",
    client: "KVM CMart (KVM Agencies)",
    turnaround: "Completed",
    stack: ["Vite.js", "Tailwind CSS", "Framer Motion", "Strapi CMS", "Node.js"],
    industry: ["Construction", "E-Commerce"],
    services: ["Web Design", "Development", "CMS"],
    scopeOfWork: ["Web Design", "Development", "CMS Setup"],
    logoUrl: "/CaseStudy/4.webp",
    previewImage: "/casestudy-websites/kvm-cmart.png",
    challenge:
      "Construction material prices change often, and catalogues go stale fast. KVM needed an online store their own staff could update daily — products, prices, categories, offers — without calling a developer each time, while still being simple enough for contractors to use on a phone.",
    approach:
      "We paired a fast, mobile-friendly storefront with a Strapi headless CMS. Non-technical staff manage products, orders and updates from an admin panel, while customers get clean category navigation and clear product information.",
    results:
      "KVM CMart took a traditional materials business online with a platform the team runs themselves. It extended KVM's reach beyond walk-in customers and modernised how contractors and builders buy materials — and laid the groundwork for Unizo, the billing software we later built for the same business.",
    highlights: [
      "Headless CMS so staff update products & prices daily",
      "Category navigation for cement, steel, sand, bricks & more",
      "Mobile-first storefront for contractors",
      "Foundation for Unizo billing & inventory software",
    ],
    relatedLinks: [
      { label: "KVM Agencies case study", href: "/case-study/kvm-agencies" },
      { label: "Unizo billing software", href: "/products/unizo-gst-billing-inventory-software" },
    ],
    metaTitle: "KVM CMart Case Study — Construction Materials E-commerce | Adszoo",
    metaDescription:
      "How Adszoo built a CMS-powered e-commerce platform for KVM CMart, a construction raw material supplier.",
    keywords: ["construction material ecommerce", "building materials online store", "Strapi ecommerce India"],
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
    previewImage: "/CaseStudy/privio-health.webp",
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
    previewImage: "/CaseStudy/scoutedge1.webp",
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
    previewImage: "/CaseStudy/tnkural.webp",
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
    previewImage: "/CaseStudy/abdesignlabs.webp",
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
    previewImage: "/CaseStudy/gotcha.webp",
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
    website: "https://www.hitechinsulation.in/",
    status: "Live · SEO ongoing",
    description:
      "Hitech Insulation is an electrical insulation manufacturer in Guindy, Chennai, operating since 1977. It makes pressboard, pre-compressed pressboard, transformer insulation kits, moulded pressboard components, G10 epoxy sheets, paper phenolic, mica and PTFE sheets, kraft paper and custom gaskets. It supplies transformer, motor and switchgear manufacturers across India and overseas. We built a specification-led B2B website and SEO foundation designed to turn procurement searches into RFQs.",
    shortDescription:
      "Spec-led B2B website & SEO for a pressboard and electrical insulation manufacturer (since 1977)",
    client: "Hitech Insulation",
    turnaround: "Live · SEO ongoing",
    stack: ["Next.js", "Tailwind CSS", "Organization & FAQ Schema", "Google Search Console"],
    industry: ["Manufacturing", "Industrial Materials"],
    services: ["Web Design", "Development", "B2B SEO", "AEO"],
    scopeOfWork: ["Web Design", "Development", "Product Pages", "SEO"],
    logoUrl: "/CaseStudy/hitech-insulation-live.webp",
    previewImage: "/casestudy-websites/hitech-insulation-live.webp",
    challenge:
      "Transformer and switchgear manufacturers buy insulation by specification: pressboard density and thickness, epoxy grade, temperature class. A 49-year-old manufacturer with deep expertise was barely visible for those searches. Its buyers, procurement and design engineers, need exact product information and a fast quote, not marketing copy.",
    approach:
      "We gave every product family its own page: pressboard, pre-compressed pressboard, transformer insulation kits, moulded pressboard components, G10 epoxy, paper phenolic, mica, PTFE, kraft paper and custom gaskets. Each page has specifications and applications as crawlable text. A dedicated pressboard hub and an industries page connect products to transformer, motor and switchgear use cases. Organization, LocalBusiness and FAQ schema, a 'Get a Quote' path with a 24-hour quote promise, and a fast Next.js build complete it.",
    results:
      "Hitech now presents itself online the way it operates: 'Best electrical insulation manufacturer in Chennai' since 1977, with 10 product pages engineers can self-qualify from. Each product page is a dedicated entry point for spec-level searches on Google and AI assistants. Enquiries arrive with clearer requirements, and the ongoing SEO builds on that foundation.",
    metrics: [
      { label: "Years in business", value: "49+" },
      { label: "Product pages", value: "10" },
      { label: "Quote turnaround promise", value: "24 hrs" },
      { label: "Markets", value: "India + export" },
    ],
    highlights: [
      "10 product pages from pressboard to PTFE and custom gaskets",
      "Pressboard hub + industries page (transformers, motors, switchgear)",
      "Specifications and applications written as indexable text",
      "24-hour quote CTA, click-to-call and WhatsApp on every page",
    ],
    seoWins: [
      "Positioned for 'electrical insulation manufacturer Chennai' and pressboard searches",
      "Organization, LocalBusiness & FAQ schema for rich results and AI citation",
      "Spec-level product URLs for procurement searches",
      "Fast Next.js build with strong Core Web Vitals",
    ],
    relatedLinks: [
      { label: "SEO & lead generation for manufacturers", href: "/services/seo-for-manufacturers" },
      { label: "SEO for manufacturers: complete guide", href: "/blogs/seo-for-manufacturers-india-guide" },
    ],
    metaTitle: "Hitech Insulation Case Study — Pressboard Manufacturer Website & B2B SEO | Adszoo",
    metaDescription:
      "How Adszoo built a spec-led website and SEO foundation for Hitech Insulation, a Chennai pressboard and electrical insulation manufacturer since 1977.",
    keywords: [
      "industrial manufacturer website design",
      "pressboard manufacturer website",
      "electrical insulation manufacturer SEO",
      "SEO for manufacturers case study",
      "B2B manufacturing website Chennai",
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
    previewImage: "/CaseStudy/pallavi.webp",
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
    previewImage: "/CaseStudy/hifive.webp",
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
  {
    id: "18",
    title: "KVM Agencies",
    slug: "kvm-agencies",
    website: "https://kvmagencies.in/",
    status: "Live",
    description:
      "KVM Agencies has supplied construction materials in Chengalpattu since 2002: cement from six leading brands, M Sand, P Sand, jally, bricks, AAC and hollow blocks, TMT steel and binding wire, delivered to sites across 17+ towns. Adszoo is their end-to-end digital partner. We built the bilingual website, the KVM CMart online store, and Unizo, the GST billing and inventory software that runs their counter.",
    shortDescription:
      "Bilingual SEO website, e-commerce and custom billing software for a construction material supplier",
    client: "KVM Agencies",
    turnaround: "Live · Ongoing partnership",
    stack: ["React", "Tailwind CSS", "Schema Markup", "Strapi CMS", "SQLite", "Electron"],
    industry: ["Construction", "Building Materials", "Software"],
    services: ["Web Design", "Development", "Custom Software", "Local SEO"],
    scopeOfWork: ["SEO Website (EN + Tamil)", "Material Calculator", "E-commerce (KVM CMart)", "Billing Software (Unizo)"],
    logoUrl: "/CaseStudy/kvm-agencies-live.webp",
    previewImage: "/casestudy-websites/kvm-agencies-live.webp",
    challenge:
      "Construction buyers want three things fast: today's rate, delivery to their site, and trust that the material is genuine. KVM's buyers range from homeowners to masons, contractors and builders, many of whom prefer Tamil. Inside the business, billing, stock and contractor credit needed software that fit their pricing and GST reporting.",
    approach:
      "The website is built around 'Get today's rate'. It has call and WhatsApp CTAs everywhere, product pages per material and per cement brand (UltraTech, Ramco, Dalmia, ACC, Adani, Maha), and 18 area pages across Chengalpattu district (Guduvanchery, Maraimalai Nagar, Mahindra World City, Padappai and more). It also includes a construction material calculator, a bulk-orders page, a Tamil version, and buyer guides such as OPC vs PPC cement, M Sand vs P Sand, a TMT weight chart and brick vs block comparisons. FAQ, Service and Speakable schema support AI answers. Alongside it we built the KVM CMart store and Unizo: offline-first GST billing with contractor pricing, credit limits, stock movement and 16 reports.",
    results:
      "KVM Agencies now has one partner for its whole digital stack. A bilingual site with 50+ product, brand, area and guide pages captures local searches and sends buyers straight to call or WhatsApp. The material calculator and bulk-order flow qualify bigger jobs. At the counter, Unizo keeps billing running even when the internet doesn't, and turns GST reporting from days of work into minutes. That software is now a product we offer to other dealers.",
    metrics: [
      { label: "Supplying since", value: "2002" },
      { label: "Towns served", value: "17+" },
      { label: "Cement brands", value: "6" },
      { label: "Reports in Unizo", value: "16" },
    ],
    highlights: [
      "English + Tamil website with 'Get today's rate' CTAs",
      "Product pages per material and per cement/steel brand",
      "18 Chengalpattu-district area pages + material calculator",
      "Unizo: offline GST billing, stock & contractor credit software",
    ],
    relatedLinks: [
      { label: "Unizo billing & inventory software", href: "/products/unizo-gst-billing-inventory-software" },
      { label: "Custom software development", href: "/services/custom-software-development" },
      { label: "KVM CMart case study", href: "/case-study/kvm-cmart" },
    ],
    metaTitle: "KVM Agencies Case Study — Construction Materials Website, SEO & Billing Software | Adszoo",
    metaDescription:
      "How Adszoo built KVM Agencies' bilingual SEO website, material calculator, KVM CMart store and Unizo GST billing software for a Chengalpattu construction material supplier.",
    keywords: [
      "construction material supplier website",
      "building materials SEO Chengalpattu",
      "billing software for building materials",
      "custom software case study Chennai",
    ],
  },
  {
    id: "19",
    title: "V.V Builders",
    slug: "vv-builders",
    website: "https://vvbuilders.adszoo.in/",
    status: "Completed · Launching on main domain",
    description:
      "V.V Builders is a residential and commercial construction company based in Padappai, Tambaram. It builds homes and villas and handles renovations and home extensions across South Chennai, with 15+ years of experience and 150+ completed projects. We designed and built a premium, conversion-focused website with a full local SEO structure. The work is complete and moving to their main domain.",
    shortDescription:
      "Premium builder website with 16 South Chennai location pages and buyer guides",
    client: "V.V Builders",
    turnaround: "Completed · Going live",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion", "Schema Markup"],
    industry: ["Construction", "Real Estate"],
    services: ["Web Design", "Development", "Local SEO", "Content"],
    scopeOfWork: ["Web Design", "Development", "Location Pages", "Insights Blog", "Portfolio PDF"],
    logoUrl: "/CaseStudy/vv-builders-live.webp",
    previewImage: "/casestudy-websites/vv-builders-live.webp",
    challenge:
      "Building a home is a family's biggest purchase. Buyers research for weeks, looking for proof (projects, approvals, timelines) and a builder who works in their area. V.V Builders had the experience but relied on referrals, with no way to be found for 'house construction in Tambaram' or 'builders in Guduvanchery'.",
    approach:
      "We designed a premium, architecture-led site that leads with completed work (Padappai Garden Villa, Tambaram Modern Residence, a South Chennai heritage restoration) and a downloadable portfolio PDF. We added 16 location pages across the GST Road belt and South Chennai: Padappai, Tambaram, Chromepet, Pallavaram, Selaiyur, Medavakkam, Guduvanchery, Urapakkam, Vandalur, Mudichur and more. An 'Insights' hub answers buyer questions: house construction cost in Chennai, CMDA vs panchayat approval, questions to ask a builder, renovate or rebuild, and monsoon-proofing. WhatsApp chat and click-to-call run throughout.",
    results:
      "The site is complete and moving to V.V Builders' main domain. It gives the team a premium link to share with every prospect, plus 16 location pages and 5 in-depth guides ready to rank from day one. That foundation is ready for local SEO and site-visit ad campaigns.",
    metrics: [
      { label: "Years of experience", value: "15+" },
      { label: "Projects completed", value: "150+" },
      { label: "Location pages", value: "16" },
      { label: "Buyer guides", value: "5" },
    ],
    highlights: [
      "Project showcase + downloadable portfolio PDF",
      "16 South Chennai location pages",
      "Insights hub: construction cost, approvals, choosing a builder",
      "WhatsApp chat widget and call CTAs",
    ],
    relatedLinks: [
      { label: "Real estate marketing", href: "/industries/marketing-for-real-estate" },
      { label: "SEO for real estate developers", href: "/blogs/real-estate-developer-seo-aeo-2026" },
    ],
    metaTitle: "V.V Builders Case Study — Construction Company Website & Local SEO | Adszoo",
    metaDescription:
      "How Adszoo built a premium website with 16 location pages and buyer guides for V.V Builders, a residential & commercial builder in Padappai, Tambaram.",
    keywords: ["builder website design Chennai", "construction company SEO Tambaram", "house construction website", "real estate website development"],
  },
  {
    id: "20",
    title: "G.S. Traders",
    slug: "gs-traders",
    website: "https://gstraders.adszoo.in/",
    status: "Completed · Launching on main domain",
    description:
      "G.S. Traders, Chitlapakkam, Chennai, has supplied and installed aluminium and UPVC windows and doors since 2013, along with ACP cladding, structural glazing, netlon mosquito works, modular kitchens and false ceilings. It has 2,400+ projects delivered and is an authorised partner for Encraft, Aluplast, Supreme Aluminium systems and Saint-Gobain glass. We built a conversion-focused website that turns homeowner research into free site-visit bookings. It's complete and moving to their main domain.",
    shortDescription:
      "Conversion-focused website for an aluminium & UPVC windows, doors and glazing company",
    client: "G.S. Traders",
    turnaround: "Completed · Going live",
    stack: ["Next.js", "Tailwind CSS", "LocalBusiness Schema"],
    industry: ["Construction", "Building Materials", "Trading"],
    services: ["Web Design", "Development", "Local SEO"],
    scopeOfWork: ["Web Design", "Development", "Solution Pages", "Service Areas"],
    logoUrl: "/CaseStudy/gs-traders-live.webp",
    previewImage: "/casestudy-websites/gs-traders-live.webp",
    challenge:
      "Homeowners comparing window and door installers worry about noise, heat, leakage, hidden costs and installers who disappear after payment. G.S. Traders had 12+ years of work and strong brand partnerships, but nothing online communicated that or captured these high-value enquiries.",
    approach:
      "The homepage sells outcomes ('windows and doors that keep your home quiet, cool and safe') backed by proof: authorised brand partners, live Google reviews, and 2,400+ projects with 98% on-time completion. Dedicated solution pages cover aluminium windows, UPVC, structural glazing, netlon/mosquito works, modular kitchens and false ceilings. A six-step process, a free measurement offer and a written quote in 48 hours lower the risk. Service-area pages, a gallery and LocalBusiness schema support local search.",
    results:
      "The site is complete and moving to G.S. Traders' main domain. It gives the business a credible, conversion-focused presence: every page leads to a free site visit or a call, and the solution and area pages are ready to rank for window, door and glazing searches across Chennai.",
    metrics: [
      { label: "Years in business", value: "12+" },
      { label: "Projects delivered", value: "2,400+" },
      { label: "On-time completion", value: "98%" },
      { label: "Solution pages", value: "6" },
    ],
    highlights: [
      "Outcome-led homepage with brand partner proof",
      "6 solution pages: aluminium, UPVC, glazing, netlon, kitchens, ceilings",
      "Free measurement + 48-hour written quote offer",
      "Service areas, gallery and live Google reviews",
    ],
    relatedLinks: [
      { label: "Conversion-focused websites", href: "/services/conversion-focused-websites" },
      { label: "Supreme Aluminium case study", href: "/case-study/supreme-aluminium" },
    ],
    metaTitle: "G.S. Traders Case Study — Windows, Doors & Glazing Company Website | Adszoo",
    metaDescription:
      "How Adszoo built a conversion-focused website for G.S. Traders, a Chennai aluminium & UPVC windows, doors and glazing company since 2013.",
    keywords: ["windows and doors company website", "UPVC windows website Chennai", "glazing company SEO", "home improvement website design"],
  },
  {
    id: "21",
    title: "Jayaram Mittai",
    slug: "jayaram-mittai",
    website: "https://jayarammittai.com/",
    status: "In development",
    description:
      "Jayaram Mittai has been making traditional sweets and snacks in Chennai since 1978. Alongside sweets and savouries it serves chaats, North Indian, tandoori and Chinese food. We're building its new e-commerce store so customers can order sweets, snacks and festive gift boxes online. It will offer fast mobile browsing, online payments, delivery, and WhatsApp ordering for customers who prefer to chat.",
    shortDescription:
      "E-commerce store for a Chennai sweets & snacks brand since 1978 (in development)",
    client: "Jayaram Mittai",
    turnaround: "In development",
    stack: ["Next.js", "Tailwind CSS", "Payment Gateway", "WhatsApp"],
    industry: ["Food & Beverage", "E-Commerce"],
    services: ["E-commerce Development", "UI/UX", "SEO"],
    scopeOfWork: ["E-commerce Store", "Product Catalogue", "Payments & Delivery", "SEO"],
    logoUrl: "/CaseStudy/jayaram-mittai.webp",
    previewImage: "/casestudy-websites/jayaram-mittai.webp",
    challenge:
      "Sweet shops see huge spikes around Diwali, Pongal and weddings, and families increasingly order gift boxes for relatives in other cities. Jayaram Mittai's current site is a menu brochure, and orders depend on phone calls and delivery apps that take a commission on every order.",
    approach:
      "We're building a mobile-first store with appetising product pages, weight and pack options, festive gift-box collections, online payments, delivery options and WhatsApp ordering. Product and category pages are written for search ('buy Mysore pak online Chennai', 'Diwali sweets box'), and brand, FAQ and Product schema are planned, so the store attracts organic orders rather than relying on commission-based apps.",
    results:
      "The store is in active development. Once live, Jayaram Mittai will take festive and everyday orders directly, reach customers beyond walking distance, and grow through SEO and social media, without paying aggregator commission on every order.",
    highlights: [
      "Mobile-first sweets, snacks & savouries catalogue",
      "Festive gift-box collections",
      "Online payments, delivery & WhatsApp ordering",
      "SEO-ready product and category pages",
    ],
    relatedLinks: [
      { label: "E-commerce website development", href: "/services/ecommerce-website-development" },
      { label: "Social media marketing", href: "/services/social-media-marketing" },
    ],
    metaTitle: "Jayaram Mittai Case Study — Sweets E-commerce Store | Adszoo",
    metaDescription:
      "How Adszoo is building a direct-order e-commerce store for Jayaram Mittai, a Chennai sweets & snacks brand since 1978.",
    keywords: ["sweets shop ecommerce website", "online sweets store Chennai", "food ecommerce website development"],
  },
];

// Display order: strongest proof first (homepage features the first three).
const PRIORITY = [
  "hitech-insulation",
  "srinivasan-chess-academy",
  "kvm-agencies",
  "supreme-aluminium",
  "pallavaram-grievance-portal",
  "privio-health",
  "vv-builders",
  "gs-traders",
  "promide-steel-fabrication-llc",
  "ab-design-labs",
  "jayaram-mittai",
  "kvm-cmart",
];

export const caseStudies: CaseStudy[] = [...allCaseStudies].sort((a, b) => {
  const ia = PRIORITY.indexOf(a.slug);
  const ib = PRIORITY.indexOf(b.slug);
  return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
});

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getRelatedCaseStudies(
  currentSlug: string,
  limit = 3
): CaseStudy[] {
  const current = getCaseStudyBySlug(currentSlug);
  const score = (c: CaseStudy) =>
    current
      ? c.industry.filter((i) => current.industry.includes(i)).length * 2 +
        c.services.filter((x) => current.services.includes(x)).length
      : 0;
  return caseStudies
    .filter((study) => study.slug !== currentSlug)
    .map((c, i) => ({ c, s: score(c), i }))
    .sort((a, b) => b.s - a.s || a.i - b.i)
    .slice(0, limit)
    .map((x) => x.c);
}
