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
      "Srinivasan Chess Academy coaches children and adults from beginner to tournament level. We built their website and continue to run SEO for it — and the academy now ranks among the top results when parents search for the best chess academy in its area, turning Google into a steady source of admissions enquiries.",
    shortDescription:
      "Website + ongoing SEO that made a chess academy rank as a 'best chess academy' result",
    client: "Srinivasan Chess Academy",
    turnaround: "Ongoing SEO",
    stack: ["React.js", "CSS", "JavaScript", "Schema Markup", "Google Business Profile"],
    industry: ["Education", "Sports"],
    services: ["Web Development", "Local SEO", "Content", "AEO"],
    scopeOfWork: ["Development", "Local SEO", "Content Strategy"],
    logoUrl: "/CaseStudy/3.webp",
    previewImage: "/casestudy-websites/srinivasan-chess.png",
    challenge:
      "Parents don't search for an academy by name — they search 'best chess academy near me', 'chess classes for kids' or 'online chess coaching'. The academy had excellent coaching and tournament results, but online it was competing with national platforms and bigger academies. Program details, schedules and fees were scattered across WhatsApp messages, so even interested parents had to call just to learn the basics.",
    approach:
      "We first built a fast, simple website where parents can understand programs (beginner, intermediate, advanced, online and offline), batch timings and the coach's credentials in a few taps. Then we ran local SEO on top of it: keyword-mapped pages for each program and audience, answer-first content for the questions parents ask, LocalBusiness and FAQ schema, Google Business Profile optimisation with photos, posts and reviews, and internal linking that pushes authority to the pages that convert. We keep refining titles, content and on-page structure every month based on Search Console data.",
    results:
      "The academy now appears among the top results for 'best chess academy' style searches in its locality, alongside much bigger brands, and shows up on Google Maps for chess-class searches nearby. Parents arrive already knowing the programs and timings, so enquiries are warmer and convert into admissions faster. SEO work is ongoing to expand rankings to more program and location keywords.",
    highlights: [
      "Program pages for beginners, intermediate, advanced & online coaching",
      "Batch timings and coach credentials visible in two taps",
      "Mobile-first design — most parents search on phones",
      "Click-to-call and WhatsApp enquiry on every page",
    ],
    seoWins: [
      "Ranking among top results for 'best chess academy' searches in its area",
      "Visible in the Google Maps local pack for chess class searches",
      "Program-level pages ranking for long-tail queries (kids, online, beginners)",
      "LocalBusiness, Course & FAQ schema for rich results and AI answers",
      "Google Business Profile optimised with reviews, photos and posts",
      "Monthly Search Console-led optimisation of titles and content",
    ],
    relatedLinks: [
      { label: "Local SEO guide for small businesses", href: "/blogs/local-seo-small-business-guide" },
      { label: "SEO, AEO & GEO services", href: "/seo-aeo-geo-services" },
    ],
    metaTitle: "Srinivasan Chess Academy Case Study — Local SEO that Ranks as 'Best Chess Academy' | Adszoo",
    metaDescription:
      "How Adszoo's website and local SEO helped Srinivasan Chess Academy rank among the top 'best chess academy' results and grow admission enquiries.",
    keywords: [
      "local SEO for academies",
      "SEO for coaching centres Chennai",
      "chess academy website design",
      "education website SEO case study",
      "best chess academy SEO",
    ],
  },
  {
    id: "6",
    title: "Supreme Aluminium & Hardwares",
    slug: "supreme-aluminium",
    website: "https://supremealuminium.shop/",
    status: "Live",
    description:
      "Supreme Aluminium & Hardwares supplies aluminium sections, profiles and hardware to fabricators, contractors and homeowners. We built an online catalogue-and-store that lets customers browse products by category, check specifications and enquire or order without visiting the shop.",
    shortDescription:
      "Online catalogue & store for an aluminium and hardware supplier",
    client: "Supreme Aluminium & Hardwares",
    turnaround: "Completed",
    stack: ["Vite.js", "React.js", "Tailwind CSS", "Framer Motion"],
    industry: ["Manufacturing", "Aluminium", "E-Commerce"],
    services: ["UI/UX", "Development", "E-commerce", "SEO"],
    scopeOfWork: ["UI/UX", "Development", "Product Catalogue"],
    logoUrl: "/CaseStudy/7.webp",
    previewImage: "/CaseStudy/7.webp",
    challenge:
      "Aluminium and hardware customers ask the same questions all day — which section, which thickness, which finish, is it in stock, what's the price? Without an online catalogue every answer needed a phone call or a shop visit, and the business was invisible to people searching for aluminium and hardware suppliers online.",
    approach:
      "We structured the entire range into clear categories and product pages with sizes, finishes and use-cases written as text (so Google can read them), fast filtering for fabricators who know exactly what they want, and simple enquiry/order paths with WhatsApp. The design balances industrial strength with a clean retail feel.",
    results:
      "Supreme Aluminium now has a live, searchable product catalogue on its own domain. Customers self-serve product information before calling, the sales team spends less time on repetitive questions, and every product page is a new entry point from Google.",
    highlights: [
      "Category-wise catalogue for aluminium sections & hardware",
      "Product pages with specs written as indexable text",
      "WhatsApp & enquiry ordering",
      "Mobile-first for fabricators on site",
    ],
    relatedLinks: [
      { label: "E-commerce website development", href: "/services/ecommerce-website-development" },
      { label: "SEO for manufacturers & suppliers", href: "/services/seo-for-manufacturers" },
    ],
    metaTitle: "Supreme Aluminium Case Study — Aluminium & Hardware Online Store | Adszoo",
    metaDescription:
      "How Adszoo built an online product catalogue and store for Supreme Aluminium & Hardwares.",
    keywords: ["aluminium supplier website", "hardware store ecommerce", "aluminium profiles online catalogue"],
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
      "Hitech Insulation manufactures electrical and thermal insulation materials — laminates, syndanio and asbestos-free sheets, insulation tubes and tapes — used in foundries, furnaces, transformers and industrial electrical systems. Their buyers are procurement and maintenance engineers who need exact specifications, not marketing copy. We built a specification-led B2B website and SEO foundation designed to turn those searches into RFQs.",
    shortDescription:
      "Spec-led B2B website & SEO for an industrial insulation manufacturer",
    client: "Hitech Insulation",
    turnaround: "Live · SEO ongoing",
    stack: ["Next.js", "Tailwind CSS", "Product Schema", "Google Search Console"],
    industry: ["Manufacturing", "Industrial Materials"],
    services: ["Web Design", "Development", "B2B SEO", "AEO"],
    scopeOfWork: ["Web Design", "Development", "Product Catalogue Structure", "SEO"],
    logoUrl: "/CaseStudy/hitech.webp",
    previewImage: "/CaseStudy/hitech.webp",
    challenge:
      "Industrial buyers evaluating insulation materials search with specifics — 'FR4 laminate sheet', 'syndanio sheet supplier', 'electrical insulation tube manufacturer' — and need thickness ranges, material grades, temperature ratings and applications at a glance. Generic product photos with no specifications tell a procurement engineer nothing and send them straight to a competitor's datasheet or a trade portal.",
    approach:
      "We structured every product category — laminates, sheets, tubes, tapes — around technical specifications written as crawlable text (thickness ranges, composition, typical applications and industries), not images or PDFs. Each category is its own page targeting the exact terms buyers use, with Product and Organization schema, internal links between related materials and applications, a quick RFQ path, click-to-call and WhatsApp. The Next.js build keeps pages fast for engineers browsing on mobile at the plant.",
    results:
      "Hitech Insulation now has a catalogue-style site that speaks the buyer's language. Procurement and engineering teams self-qualify products by specification before reaching out, enquiries arrive with clearer requirements, and each product page is a dedicated entry point for spec-level searches on Google and AI assistants — the foundation we keep building on with ongoing SEO.",
    highlights: [
      "Category pages for laminates, sheets, tubes & tapes",
      "Specifications & applications written as indexable text",
      "Industry/application-based internal linking",
      "RFQ, click-to-call & WhatsApp on every product page",
    ],
    seoWins: [
      "Dedicated, indexable pages for each product category",
      "Product & Organization schema for rich results and AI citation",
      "Spec-level keyword targeting for procurement searches",
      "Fast Next.js build with strong Core Web Vitals",
    ],
    relatedLinks: [
      { label: "SEO & lead generation for manufacturers", href: "/services/seo-for-manufacturers" },
      { label: "How manufacturers get found by procurement & AI", href: "/blogs/b2b-manufacturer-aeo-procurement-2026" },
    ],
    metaTitle: "Hitech Insulation Case Study — B2B Manufacturer Website & SEO | Adszoo",
    metaDescription:
      "How Adszoo built a specification-led website and SEO foundation for Hitech Insulation, an industrial electrical & thermal insulation manufacturer.",
    keywords: [
      "industrial manufacturer website design",
      "B2B product catalogue website",
      "electrical insulation manufacturer website",
      "SEO for manufacturers case study",
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
      "KVM Agencies is a construction raw material supplier — cement, sand, bricks, steel and more — serving 1000+ clients and supplying 600+ projects with its own fleet of delivery vehicles. Adszoo has been their digital partner end to end: the corporate website, the KVM CMart online store, and Unizo, the custom billing, GST and inventory software that now runs their counter.",
    shortDescription:
      "Website, e-commerce and custom billing & inventory software for a construction material supplier",
    client: "KVM Agencies",
    turnaround: "Live · Ongoing partnership",
    stack: ["React", "Tailwind CSS", "Strapi CMS", "SQLite", "Electron", "TanStack"],
    industry: ["Construction", "Building Materials", "Software"],
    services: ["Web Design", "Development", "Custom Software", "E-commerce"],
    scopeOfWork: ["Corporate Website", "E-commerce (KVM CMart)", "Billing & Inventory Software (Unizo)"],
    logoUrl: "/CaseStudy/kvm-agencies.webp",
    previewImage: "/casestudy-websites/kvm-agencies.webp",
    challenge:
      "A busy building-materials business runs on speed and credit: contractors want quotes fast, materials delivered the same day, and running credit accounts settled at month-end. KVM's online presence didn't reflect its scale, and day-to-day billing, stock and outstanding tracking depended on manual work and generic tools that didn't fit contractor/dealer pricing or GST reporting.",
    approach:
      "We started with a corporate website that shows KVM's scale — 1000+ clients, 600+ projects, 70+ partners, own fleet — and services, with clear contact paths. We then launched KVM CMart, a CMS-powered online store for construction raw materials. Finally we built Unizo: offline-first GST billing, stock, purchase, customer/supplier ledgers and 16 reports, designed around how their counter actually works — keyboard billing, contractor pricing, credit limits and HSN-wise GST registers.",
    results:
      "KVM Agencies now has one partner for its entire digital stack: a credible website, an online store its staff manage, and billing software that works even when the internet doesn't. GST data that used to take days is available as reports in minutes, credit outstanding is visible per customer, and the software became Unizo — a product we now offer to other material dealers.",
    highlights: [
      "Corporate website showcasing scale, fleet and services",
      "KVM CMart e-commerce platform with headless CMS",
      "Unizo: offline GST billing, stock & credit software",
      "Contractor/dealer pricing, credit limits & 16 reports",
    ],
    metrics: [
      { label: "Clients served (KVM)", value: "1000+" },
      { label: "Projects supplied", value: "600+" },
      { label: "Reports in Unizo", value: "16" },
      { label: "Works offline", value: "100%" },
    ],
    relatedLinks: [
      { label: "Unizo billing & inventory software", href: "/products/unizo-gst-billing-inventory-software" },
      { label: "Custom software development", href: "/services/custom-software-development" },
      { label: "KVM CMart case study", href: "/case-study/kvm-cmart" },
    ],
    metaTitle: "KVM Agencies Case Study — Website, E-commerce & Billing Software for a Building Materials Supplier | Adszoo",
    metaDescription:
      "How Adszoo built KVM Agencies' website, KVM CMart online store and Unizo — offline GST billing & inventory software for construction materials.",
    keywords: [
      "construction material supplier website",
      "billing software for building materials",
      "custom software case study Chennai",
      "GST billing software case study",
    ],
  },
  {
    id: "19",
    title: "VV Builders",
    slug: "vv-builders",
    website: "https://vvbuilders.adszoo.in/",
    status: "Completed · Launching on main domain",
    description:
      "VV Builders is a construction company building homes and projects for families and investors. We designed and developed a conversion-focused website that presents their projects, construction process and quality standards — built to turn homebuyer research into site-visit bookings. The site is complete and moving to their main domain.",
    shortDescription:
      "Conversion-focused website for a construction & home builder",
    client: "VV Builders",
    turnaround: "Completed · Going live",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    industry: ["Construction", "Real Estate"],
    services: ["Web Design", "Development", "SEO Setup"],
    scopeOfWork: ["Web Design", "Development", "On-page SEO"],
    logoUrl: "/CaseStudy/vv-builders.webp",
    previewImage: "/casestudy-websites/vv-builders.webp",
    challenge:
      "Choosing a builder is one of the biggest financial decisions a family makes. Buyers look for proof — completed projects, approvals, construction quality, transparency on process — before they ever pick up the phone. Without a strong website, VV Builders was relying on referrals alone.",
    approach:
      "We built the site around a buyer's decision journey: who VV Builders are, projects (ongoing and completed), how they build (materials, stages, quality checks), and a frictionless way to book a site visit or call. Every page is SEO-ready with structured headings, local keywords and fast mobile performance.",
    results:
      "The website is complete and is being moved to VV Builders' main domain. It gives the team a professional, trustworthy link to share with every prospect and a foundation for local SEO and ad campaigns that drive site-visit enquiries.",
    highlights: [
      "Project showcase for ongoing & completed work",
      "Construction process & quality sections",
      "Site-visit booking, call & WhatsApp CTAs",
      "SEO-ready structure for local builder searches",
    ],
    relatedLinks: [
      { label: "Real estate marketing", href: "/industries/marketing-for-real-estate" },
      { label: "SEO for real estate developers", href: "/blogs/real-estate-developer-seo-aeo-2026" },
    ],
    metaTitle: "VV Builders Case Study — Construction Company Website | Adszoo",
    metaDescription:
      "How Adszoo designed a conversion-focused website for VV Builders to turn homebuyer research into site-visit enquiries.",
    keywords: ["builder website design", "construction company website Chennai", "real estate website development"],
  },
  {
    id: "20",
    title: "GS Traders",
    slug: "gs-traders",
    website: "http://gstraders.adszoo.in/",
    status: "Completed · Launching on main domain",
    description:
      "GS Traders is a B2B trading and supply business. We built a clean, catalogue-led website that lists their product range, brands and supply capabilities so trade buyers can quickly confirm 'do they stock what I need?' and send an enquiry. The site is complete and moving to their main domain.",
    shortDescription:
      "Catalogue-led B2B website for a trading & supply company",
    client: "GS Traders",
    turnaround: "Completed · Going live",
    stack: ["Next.js", "Tailwind CSS"],
    industry: ["Trading", "B2B Supply"],
    services: ["Web Design", "Development", "SEO Setup"],
    scopeOfWork: ["Web Design", "Development", "Product Catalogue", "On-page SEO"],
    logoUrl: "/CaseStudy/gs-traders.webp",
    previewImage: "/casestudy-websites/gs-traders.webp",
    challenge:
      "Trade buyers compare suppliers on range, availability, brands and responsiveness. Without a website that answers those questions, every new buyer needed a phone call to discover what GS Traders could supply — and buyers searching online never found them at all.",
    approach:
      "We organised their range into clear product categories with brand and application information, highlighted supply capabilities (bulk orders, delivery, credit terms) and placed call, WhatsApp and enquiry options on every page. The structure is built for product-level SEO so each category can rank for supplier searches.",
    results:
      "The website is complete and moving to GS Traders' main domain. The sales team has a professional catalogue to share with buyers, and the business has an SEO-ready foundation to capture 'supplier' and 'dealer' searches in its region.",
    highlights: [
      "Category-wise product & brand catalogue",
      "Supply capability & delivery information",
      "Call, WhatsApp & enquiry on every page",
      "SEO structure for supplier/dealer searches",
    ],
    relatedLinks: [
      { label: "SEO & lead generation for B2B suppliers", href: "/services/seo-for-manufacturers" },
      { label: "Unizo billing software for traders", href: "/products/unizo-gst-billing-inventory-software" },
    ],
    metaTitle: "GS Traders Case Study — B2B Trading Company Website | Adszoo",
    metaDescription:
      "How Adszoo built a catalogue-led B2B website for GS Traders to help trade buyers find products and enquire faster.",
    keywords: ["trading company website design", "B2B supplier website", "distributor website India"],
  },
  {
    id: "21",
    title: "Jayaram Mittai",
    slug: "jayaram-mittai",
    website: "https://jayarammittai.com/",
    status: "In development",
    description:
      "Jayaram Mittai is a traditional sweets and snacks brand. We're building their e-commerce store so customers can order sweets, savouries and festive gift boxes online — with fast mobile browsing, UPI payments, delivery and WhatsApp ordering for customers who prefer to chat.",
    shortDescription:
      "E-commerce store for a traditional sweets & snacks brand (in development)",
    client: "Jayaram Mittai",
    turnaround: "In development",
    stack: ["Next.js", "Tailwind CSS", "Payment Gateway", "WhatsApp"],
    industry: ["Food & Beverage", "E-Commerce"],
    services: ["E-commerce Development", "UI/UX", "SEO"],
    scopeOfWork: ["E-commerce Store", "Product Catalogue", "Payments & Delivery", "SEO"],
    logoUrl: "/CaseStudy/jayaram-mittai.webp",
    previewImage: "/casestudy-websites/jayaram-mittai.webp",
    challenge:
      "Sweet shops see huge demand spikes around Diwali, Pongal and weddings — and customers increasingly want to order gift boxes online for family in other cities. Taking these orders over phone calls and WhatsApp alone doesn't scale, and the brand had no way to be discovered by people searching for sweets online.",
    approach:
      "We're building a mobile-first store with appetising product pages, weight/pack options, festive gift-box collections, UPI and card payments, delivery options and WhatsApp ordering. Product pages are written for SEO ('buy [sweet] online', 'Diwali sweets box') so the store can attract organic traffic, not just ads.",
    results:
      "The store is in active development. Once live, it will let Jayaram Mittai take festive and everyday orders online at scale, reach customers beyond walk-in distance, and grow through SEO and social media campaigns.",
    highlights: [
      "Mobile-first sweets & snacks catalogue",
      "Festive gift-box collections",
      "UPI/card payments & delivery",
      "WhatsApp ordering option",
    ],
    relatedLinks: [
      { label: "E-commerce website development", href: "/services/ecommerce-website-development" },
      { label: "Social media marketing", href: "/services/social-media-marketing" },
    ],
    metaTitle: "Jayaram Mittai Case Study — Sweets E-commerce Website | Adszoo",
    metaDescription:
      "How Adszoo is building an online sweets and snacks store for Jayaram Mittai with payments, delivery and WhatsApp ordering.",
    keywords: ["sweets shop ecommerce website", "online sweets store India", "food ecommerce website development"],
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
