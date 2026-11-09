// Data-driven service landing pages rendered by app/services/[slug]/page.tsx.
// Written answer-first (AEO): every page opens with a direct, quotable answer,
// then problem → approach → deliverables → proof → FAQ → enquiry.

export interface ServicePage {
  slug: string;
  name: string; // used in schema + enquiry form
  formInterest: string;
  h1: string;
  eyebrow: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  quickAnswer: string;
  intro: string;
  problems: { title: string; points: string[] };
  approach: { title: string; description: string }[];
  deliverables: string[];
  process: { step: string; description: string }[];
  whoFor: string[];
  stats?: { value: string; label: string }[];
  caseStudies: string[];
  blogs: string[];
  related: { label: string; href: string }[];
  faqs: { question: string; answer: string }[];
  externalRefs?: { label: string; href: string }[];
}

export const servicePages: ServicePage[] = [
  {
    slug: "seo-for-manufacturers",
    name: "SEO & Lead Generation for Manufacturers",
    formInterest: "SEO & Lead Generation for Manufacturers",
    eyebrow: "B2B Manufacturing SEO · AEO · GEO",
    h1: "SEO & Lead Generation for Manufacturers — More RFQs, Distributor Enquiries and Export Leads",
    metaTitle: "SEO for Manufacturers in India | B2B Manufacturing Lead Generation Agency — Adszoo",
    metaDescription:
      "Adszoo helps B2B manufacturers in Chennai, Tamil Nadu & India rank on Google, get cited by ChatGPT and convert procurement traffic into RFQs. Spec-led websites, product SEO, AEO & GEO.",
    keywords: [
      "SEO for manufacturers India",
      "B2B manufacturing SEO agency",
      "industrial SEO Chennai",
      "lead generation for manufacturers",
      "manufacturing company digital marketing",
      "SEO for industrial products",
      "export lead generation India",
      "AEO for B2B",
    ],
    quickAnswer:
      "SEO for manufacturers means making every product line, specification and application findable when procurement engineers, distributors and importers search on Google or ask ChatGPT. Adszoo builds spec-rich product pages, industry and location pages, technical content and schema that turn this high-intent traffic into RFQs and enquiry calls — typically for a fraction of the cost of trade-portal subscriptions.",
    intro:
      "Most manufacturers still depend on referrals, trade fairs and paid listings on B2B portals where the same enquiry is sold to ten competitors. Meanwhile, buyers have changed: a purchase manager in Pune or a distributor in Dubai shortlists suppliers by searching '12mm aluminium composite panel supplier', 'FR4 laminate sheet manufacturer India' or by asking an AI assistant. If your website is a 5-page brochure with a downloadable PDF catalogue, you're invisible at exactly that moment. We fix that.",
    problems: {
      title: "Why manufacturing websites don't generate enquiries",
      points: [
        "Products live in a PDF catalogue — Google and AI engines can't read or rank them.",
        "One 'Products' page tries to rank for 200 different product searches.",
        "No specifications, grades, sizes, tolerances or applications written as text.",
        "No industry or application pages (e.g. 'insulation for foundries', 'aluminium for façades').",
        "Enquiry forms ask for too much or are buried — RFQs leak away to competitors.",
        "No tracking, so nobody knows which product or keyword brings real buyers.",
      ],
    },
    approach: [
      {
        title: "Product & specification architecture",
        description:
          "A dedicated, indexable page for every product line and variant with specs in HTML tables, applications, standards (IS/ASTM/DIN), MOQ, and an RFQ button. This is what ranks — and what AI engines quote.",
      },
      {
        title: "Buyer-intent keyword research",
        description:
          "We map how procurement teams, contractors, distributors and importers actually search — product + spec, product + application, product + 'manufacturer/supplier' + city or country.",
      },
      {
        title: "Industry, application & location pages",
        description:
          "Pages for the industries you serve and the regions you ship to — so you show up for 'manufacturer in Chennai' and 'supplier for UAE' searches alike.",
      },
      {
        title: "AEO & GEO for AI search",
        description:
          "Answer-first copy, FAQ blocks, Product/Organization schema and entity consistency so Google AI Overviews, ChatGPT, Perplexity and Gemini can cite your company.",
      },
      {
        title: "Technical SEO & speed",
        description:
          "Fast, mobile-friendly Next.js builds, clean URL structure, sitemaps, internal linking and Core Web Vitals that pass — no bloated themes.",
      },
      {
        title: "Lead capture & tracking",
        description:
          "Short RFQ forms, WhatsApp and click-to-call on every product page, GA4 conversion tracking and monthly lead reports by product and source.",
      },
    ],
    deliverables: [
      "B2B website audit & competitor gap analysis",
      "Keyword map per product line and market",
      "Spec-led product pages (or migration from PDF catalogue)",
      "Industry / application / location landing pages",
      "Product, Organization, FAQ & Breadcrumb schema",
      "Google Business Profile optimisation",
      "Monthly technical & educational content",
      "Industry-relevant backlinks & directory citations",
      "GA4 + Search Console setup with RFQ tracking",
      "Monthly ranking, traffic & enquiry report",
    ],
    process: [
      { step: "Audit", description: "Technical audit, current rankings, competitors and lost keyword opportunities." },
      { step: "Architecture", description: "Product, industry and location page plan mapped to keywords." },
      { step: "Build & optimise", description: "Pages, specs, schema, speed and conversion elements." },
      { step: "Content & authority", description: "Technical articles, FAQs and relevant backlinks every month." },
      { step: "Measure & scale", description: "Track RFQs by product, double down on what converts." },
    ],
    whoFor: [
      "Industrial raw material & component manufacturers",
      "Aluminium, steel, glass & building product manufacturers",
      "Electrical, insulation & engineering product makers",
      "Exporters looking for overseas distributors",
      "Traders & distributors of industrial goods",
    ],
    caseStudies: ["hitech-insulation", "supreme-aluminium", "promide-steel-fabrication-llc", "gs-traders"],
    blogs: [
      "seo-for-manufacturers-india-guide",
      "b2b-manufacturer-aeo-procurement-2026",
      "seo-aeo-geo-complete-guide",
      "high-quality-backlink-strategy-2025",
      "b2b-linkedin-ads-beginners-guide",
    ],
    related: [
      { label: "SEO, AEO & GEO services", href: "/seo-aeo-geo-services" },
      { label: "Conversion-focused websites", href: "/services/conversion-focused-websites" },
      { label: "Lead generation systems", href: "/services/lead-generation-systems" },
      { label: "Social media marketing for B2B", href: "/services/social-media-marketing" },
    ],
    externalRefs: [
      { label: "Google: SEO Starter Guide", href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
      { label: "Schema.org Product type", href: "https://schema.org/Product" },
      { label: "Google: Helpful, people-first content", href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
    ],
    faqs: [
      {
        question: "How long does SEO take for a manufacturing company?",
        answer:
          "Technical fixes and new product pages usually start showing impressions in 4–8 weeks. Consistent enquiry growth for competitive product keywords typically takes 4–6 months. Niche, spec-specific searches often rank faster because few manufacturers publish detailed specifications as text.",
      },
      {
        question: "Is SEO better than IndiaMART or TradeIndia listings?",
        answer:
          "They work differently. Portals rent you visibility and share enquiries with competitors. SEO builds an asset you own: buyers find your website directly and enquire only with you. Most of our manufacturing clients keep one portal and grow SEO so that their cost per enquiry falls over time.",
      },
      {
        question: "Can you do SEO if our products are only in a PDF catalogue?",
        answer:
          "Yes — that's the most common starting point. We convert the catalogue into individual, crawlable product pages with specification tables, images and RFQ buttons, and keep the PDF as a downloadable asset.",
      },
      {
        question: "Do you help manufacturers get export enquiries?",
        answer:
          "Yes. We create country and application pages, optimise for international buyer searches, add export-relevant information such as certifications, packaging, Incoterms and MOQ, and set up enquiry tracking by country.",
      },
      {
        question: "What is AEO and GEO for manufacturers?",
        answer:
          "AEO (Answer Engine Optimisation) and GEO (Generative Engine Optimisation) structure your content so AI tools like Google AI Overviews and ChatGPT can understand and cite it. For manufacturers, that means clear specs, answer-first FAQs and schema markup on every product page.",
      },
      {
        question: "How much does SEO for manufacturers cost in India?",
        answer:
          "It depends on the number of product lines, markets and the state of your current website. We work on monthly retainers after a one-time audit and setup. Book a free audit call and we'll share a scoped proposal.",
      },
    ],
  },
  {
    slug: "custom-software-development",
    name: "Custom Software Development",
    formInterest: "Custom Software / Web App Development",
    eyebrow: "Web Apps · Portals · Business Software",
    h1: "Custom Software & Web Application Development Company in Chennai",
    metaTitle: "Custom Software Development Company in Chennai | Web App Development — Adszoo",
    metaDescription:
      "Adszoo builds custom web applications, billing & inventory systems, portals, dashboards and SaaS for businesses in Chennai and India. Affordable, one-time build + support. Free consultation.",
    keywords: [
      "custom software development Chennai",
      "web application development company Chennai",
      "software company in Chromepet",
      "ERP software development for SMEs",
      "SaaS development India",
      "billing software development",
      "portal development Tamil Nadu",
    ],
    quickAnswer:
      "Custom software development is building an application around how your business actually works — instead of bending your process to off-the-shelf tools. Adszoo designs and builds web applications, portals, billing and inventory systems, dashboards and SaaS products for Indian SMEs, with a one-time build fee and an optional support retainer.",
    intro:
      "We don't just talk about software — we ship and run it. Our in-house products include Unizo (offline GST billing & inventory used by a construction material dealer), PropertyGenie (an AI-powered listing SaaS for real estate brokers), Smart Queue (a real-time restaurant waitlist with TV display) and a GPS-enabled civic grievance portal for an MLA constituency office. If you have a process running on Excel, WhatsApp and paper, we can turn it into software your team will actually use.",
    problems: {
      title: "Signs you need custom software",
      points: [
        "Your team re-types the same data into Excel, Tally and WhatsApp every day.",
        "Off-the-shelf software forces workarounds — or charges per user every month.",
        "Owners can't see sales, stock or collections without calling someone.",
        "Customers or vendors need a portal, but you're emailing spreadsheets.",
        "You have a product idea (SaaS/app) and need a team that can build and launch it.",
      ],
    },
    approach: [
      { title: "Discovery & workflow mapping", description: "We sit with your team, map the real process and agree on a scope that solves the expensive problems first." },
      { title: "UX that staff learn in a day", description: "Keyboard-first counters, mobile-first field apps, Tamil/English interfaces — designed for the actual users." },
      { title: "Modern, reliable stack", description: "React, Next.js, Node.js, Supabase/Postgres, SQLite for offline-first apps, Electron for desktop — chosen for your use case, not our habit." },
      { title: "Offline, cloud or hybrid", description: "Shops with unreliable internet get offline-first software with backups; multi-branch businesses get secure cloud apps." },
      { title: "Integrations", description: "Payment gateways (Razorpay/Cashfree), WhatsApp, SMS, email, GST reports, Excel import/export, POS and APIs." },
      { title: "Launch, training & support", description: "Data migration, staff training, documentation and a support retainer so your software keeps improving." },
    ],
    deliverables: [
      "Requirement document & clickable prototype",
      "Web application / admin dashboard",
      "Role-based logins & audit logs",
      "Reports & Excel/CSV exports",
      "Payment, WhatsApp & email integrations",
      "Desktop (Windows) or cloud deployment",
      "Automated backups & security hardening",
      "User training & SOP documentation",
      "Source code ownership options",
      "Annual maintenance (AMC) plans",
    ],
    process: [
      { step: "Free consultation", description: "Understand the problem and decide if custom software is worth it." },
      { step: "Scope & prototype", description: "Fixed scope, timeline and clickable prototype before development." },
      { step: "Build in sprints", description: "Weekly demos — you see progress, not just invoices." },
      { step: "Launch & train", description: "Data migration, go-live and hands-on training." },
      { step: "Support & improve", description: "AMC with bug fixes, updates and new features." },
    ],
    whoFor: [
      "Traders, distributors & retailers",
      "Manufacturers needing order/stock/dispatch tracking",
      "Restaurants, clinics & service businesses",
      "Startups building a SaaS or MVP",
      "Government & civic offices needing public portals",
    ],
    caseStudies: ["kvm-agencies", "pallavaram-grievance-portal", "privio-health", "kvm-cmart"],
    blogs: [
      "custom-software-vs-off-the-shelf-for-smes",
      "offline-vs-cloud-billing-software-india",
      "billing-software-for-construction-material-dealers",
      "restaurant-queue-management-system-guide",
      "web-systems-vs-websites-us",
    ],
    related: [
      { label: "Unizo billing & inventory software", href: "/products/unizo-gst-billing-inventory-software" },
      { label: "Smart Queue for restaurants", href: "/products/smart-queue-restaurant-queue-management-system" },
      { label: "PropertyGenie for real estate", href: "/products/propertygenie-real-estate-listing-software" },
      { label: "Mobile app development", href: "/services/mobile-app-development" },
    ],
    faqs: [
      {
        question: "How much does custom software development cost in India?",
        answer:
          "A focused business web application for an SME typically costs less than people expect when the scope is tight — the price depends on modules, users, integrations and whether you need offline or cloud deployment. We give a fixed quote after a free scoping call, plus an optional annual maintenance plan.",
      },
      {
        question: "How long does it take to build custom software?",
        answer:
          "A first usable version (MVP) of a business application usually takes 4–10 weeks. Larger systems are released in phases so your team starts using the most valuable modules early.",
      },
      {
        question: "Do I own the source code?",
        answer:
          "Yes, source code ownership is available. Many SMEs prefer a licence plus AMC because it costs less upfront and includes ongoing updates — we offer both models.",
      },
      {
        question: "Can you build software that works without internet?",
        answer:
          "Yes. We build offline-first desktop applications with local databases and automatic backups — our Unizo billing software works 100% offline on a Windows PC.",
      },
      {
        question: "Do you provide support after launch?",
        answer:
          "Yes. We provide training, documentation and annual maintenance plans covering bug fixes, updates, backups and small enhancements, with support over WhatsApp and phone from Chennai.",
      },
    ],
  },
  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    formInterest: "Mobile App Development",
    eyebrow: "Android · iOS · Progressive Web Apps",
    h1: "Mobile App Development Company in Chennai — Android, iOS & PWA",
    metaTitle: "Mobile App Development Company in Chennai | Android & iOS Apps — Adszoo",
    metaDescription:
      "Build Android, iOS and progressive web apps with Adszoo, Chennai. Customer apps, staff & field apps, booking and ordering apps — designed for real users, launched on Play Store & App Store.",
    keywords: [
      "mobile app development company Chennai",
      "android app development Chennai",
      "iOS app development India",
      "PWA development",
      "React Native app development India",
      "app development cost India",
    ],
    quickAnswer:
      "Mobile app development is designing, building and launching apps for Android and iOS — or a Progressive Web App (PWA) that installs from the browser. Adszoo builds customer apps, staff and field apps, booking and ordering apps for Indian businesses, and advises when a PWA will do the job at a fraction of the cost of two native apps.",
    intro:
      "Not every business needs a Play Store app — and not every app needs to be built twice. We start by asking what your users will do on their phones, how often, and whether they'll install anything. Our restaurant waitlist (Smart Queue) and PropertyGenie both run from the phone browser with no download; others need a proper native app with push notifications and offline mode. We'll recommend the cheapest path that still delivers the experience.",
    problems: {
      title: "Why many business apps fail",
      points: [
        "Built because 'everyone has an app' — no clear reason for customers to install it.",
        "Two separate native apps built for a problem a PWA could solve.",
        "Clunky UX that staff refuse to use in the field.",
        "No backend, admin panel or analytics planned — so the app can't be managed.",
        "Abandoned after launch with no updates for new Android/iOS versions.",
      ],
    },
    approach: [
      { title: "App strategy first", description: "Native vs cross-platform vs PWA — decided by your users, budget and features (camera, GPS, offline, push)." },
      { title: "Cross-platform builds", description: "React Native / Flutter for one codebase on Android and iOS when native apps are needed." },
      { title: "PWAs that feel native", description: "Installable, fast, offline-capable web apps — no app store approval, instant updates." },
      { title: "Backend & admin panel", description: "Secure APIs, databases and a web dashboard to manage users, orders and content." },
      { title: "Notifications & integrations", description: "Push, WhatsApp, SMS, payments (UPI/Razorpay), maps and analytics." },
      { title: "Store launch & ASO", description: "Play Store and App Store listing, screenshots and app store optimisation." },
    ],
    deliverables: [
      "App strategy & feature roadmap",
      "UI/UX design & clickable prototype",
      "Android & iOS apps or PWA",
      "Admin web dashboard",
      "APIs & cloud backend",
      "Payment & notification integrations",
      "Analytics & crash reporting",
      "Play Store / App Store publishing",
      "Post-launch maintenance plan",
    ],
    process: [
      { step: "Discover", description: "Users, use cases and must-have features." },
      { step: "Design", description: "Wireframes and prototype tested with real users." },
      { step: "Build", description: "Sprints with test builds on your phone every week." },
      { step: "Launch", description: "Store publishing, analytics and onboarding." },
      { step: "Grow", description: "Updates, new features and ASO." },
    ],
    whoFor: [
      "Restaurants, retail & D2C brands (ordering, loyalty)",
      "Field sales & service teams",
      "Clinics & healthcare (booking, teleconsult)",
      "Real estate & builders (site visits, listings)",
      "Startups launching an MVP",
    ],
    caseStudies: ["privio-health", "pallavaram-grievance-portal", "scoutedge"],
    blogs: [
      "mobile-app-development-cost-india",
      "custom-software-vs-off-the-shelf-for-smes",
      "restaurant-queue-management-system-guide",
    ],
    related: [
      { label: "Custom software development", href: "/services/custom-software-development" },
      { label: "Smart Queue (mobile-first)", href: "/products/smart-queue-restaurant-queue-management-system" },
      { label: "Conversion-focused websites", href: "/services/conversion-focused-websites" },
    ],
    externalRefs: [
      { label: "web.dev: Progressive Web Apps", href: "https://web.dev/explore/progressive-web-apps" },
      { label: "Android Developers: App quality", href: "https://developer.android.com/quality" },
    ],
    faqs: [
      {
        question: "How much does it cost to build a mobile app in India?",
        answer:
          "Costs depend on platforms, features and backend. A PWA or single cross-platform app with a basic admin panel costs far less than two separate native apps. We share a fixed quote after a free scoping call.",
      },
      {
        question: "Should I build a native app or a PWA?",
        answer:
          "Choose a PWA if users interact occasionally and you want zero install friction and instant updates. Choose a native or cross-platform app if you need heavy offline use, background location, deep device features or regular push engagement.",
      },
      {
        question: "Do you publish apps on the Play Store and App Store?",
        answer:
          "Yes. We handle store accounts, listings, screenshots, privacy policies and the review process for both Google Play and the Apple App Store.",
      },
      {
        question: "How long does app development take?",
        answer:
          "A focused MVP typically takes 6–12 weeks including design, development, testing and store launch. Complex apps are delivered in phases.",
      },
    ],
  },
  {
    slug: "social-media-marketing",
    name: "Social Media Marketing",
    formInterest: "Social Media Marketing (Organic + Ads)",
    eyebrow: "Organic Content · Meta Ads · LinkedIn · Reels",
    h1: "Social Media Marketing Agency in Chennai — Organic Content + Paid Ads that Bring Enquiries",
    metaTitle: "Social Media Marketing Agency in Chennai | Instagram, Meta & LinkedIn Ads — Adszoo",
    metaDescription:
      "Adszoo runs social media marketing for Chennai businesses: content strategy, reels, posting, community management, Meta Ads & LinkedIn Ads focused on leads — not just likes.",
    keywords: [
      "social media marketing agency Chennai",
      "social media management Chennai",
      "Instagram marketing agency Chennai",
      "Meta ads agency Chennai",
      "LinkedIn marketing for B2B India",
      "reels content creation Chennai",
    ],
    quickAnswer:
      "Social media marketing is using organic content (posts, reels, stories) and paid ads on Instagram, Facebook, LinkedIn and YouTube to build trust and generate enquiries. Adszoo plans content around what your buyers ask before purchasing, produces reels and creatives, runs Meta and LinkedIn ad campaigns, and reports on leads and cost per lead — not vanity metrics.",
    intro:
      "Posting three festival greetings a month isn't a strategy. We treat social media as part of your sales system: organic content answers objections and shows proof (projects, process, customers), ads put that proof in front of the right people, and every campaign points to a landing page or WhatsApp chat that converts. For B2B manufacturers we lean on LinkedIn and YouTube; for local and D2C brands, Instagram reels and Meta lead ads.",
    problems: {
      title: "Why most social media accounts don't bring business",
      points: [
        "Random posts with no content pillars or buyer journey.",
        "Pretty designs, but nothing that answers 'why you?' or 'how much?'",
        "Boosted posts instead of structured ad campaigns with targeting and testing.",
        "Ads sending traffic to the homepage instead of a focused landing page or WhatsApp.",
        "Reports full of reach and likes — but no lead or sales numbers.",
      ],
    },
    approach: [
      { title: "Content strategy & pillars", description: "Proof, process, education, people and offers — mapped to the questions your buyers ask." },
      { title: "Reels & creative production", description: "Scripts, shoots, editing, carousels and on-brand designs your audience stops for." },
      { title: "Community & profile management", description: "Optimised profiles, highlights, replies and DMs routed to your sales team or WhatsApp." },
      { title: "Meta Ads (Facebook & Instagram)", description: "Lead ads, WhatsApp click-to-chat and retargeting with proper pixel and conversion API tracking." },
      { title: "LinkedIn for B2B", description: "Company page, founder content and LinkedIn Ads targeting procurement, engineering and decision makers." },
      { title: "Reporting on leads", description: "Monthly report: leads, cost per lead, best content and next month's plan." },
    ],
    deliverables: [
      "Social media audit & competitor review",
      "Monthly content calendar",
      "Reels, posts, carousels & stories",
      "Captions, hashtags & posting",
      "Meta Ads campaign setup & optimisation",
      "LinkedIn page & ads for B2B",
      "Landing pages / WhatsApp funnels for ads",
      "Pixel, CAPI & GA4 tracking",
      "Monthly performance report",
    ],
    process: [
      { step: "Audit", description: "Profiles, competitors, audience and past performance." },
      { step: "Plan", description: "Pillars, calendar, offers and ad strategy." },
      { step: "Create", description: "Shoot, design, edit and schedule." },
      { step: "Advertise", description: "Launch, test creatives and scale winners." },
      { step: "Report", description: "Leads and cost per lead, then improve." },
    ],
    whoFor: [
      "Local businesses in Chennai & Tamil Nadu",
      "B2B manufacturers & industrial brands (LinkedIn)",
      "Real estate developers & builders",
      "Restaurants, sweets & food brands",
      "D2C & e-commerce brands",
    ],
    caseStudies: ["gotcha", "jayaram-mittai", "srinivasan-chess-academy"],
    blogs: [
      "social-media-to-grow-business",
      "quality-instagram-reels",
      "instagram-marketing-for-small-brands",
      "top-5-meta-ads-strategies",
      "social-media-management-pricing-2025",
      "b2b-linkedin-ads-beginners-guide",
    ],
    related: [
      { label: "Meta Ads management", href: "/services/meta-ads-management" },
      { label: "Google Ads management", href: "/services/google-ads-management" },
      { label: "Landing page design", href: "/services/landing-page-design" },
      { label: "SEO for manufacturers", href: "/services/seo-for-manufacturers" },
    ],
    externalRefs: [
      { label: "Meta Business Help: Lead ads", href: "https://www.facebook.com/business/help/1481110642188420" },
      { label: "LinkedIn Marketing Solutions", href: "https://business.linkedin.com/marketing-solutions" },
    ],
    faqs: [
      {
        question: "How much does social media marketing cost in Chennai?",
        answer:
          "Social media marketing is usually a monthly retainer based on the number of platforms, posts and reels, plus your separate ad budget paid directly to Meta or LinkedIn. We recommend starting with a focused plan on one or two platforms and scaling once leads are flowing.",
      },
      {
        question: "Do you shoot reels and videos?",
        answer:
          "Yes. We script, shoot and edit reels in Chennai and can work with footage you send from your site, factory or shop for clients outside Chennai.",
      },
      {
        question: "Is social media useful for B2B manufacturers?",
        answer:
          "Yes — mainly LinkedIn and YouTube. Factory process videos, product applications, certifications and project proof build trust with procurement teams, and LinkedIn Ads can target by job title and industry.",
      },
      {
        question: "How soon will I get leads from social media ads?",
        answer:
          "Well-structured Meta lead or WhatsApp campaigns usually generate first enquiries within the first one to two weeks. Cost per lead improves over the first 4–8 weeks as we test creatives and audiences.",
      },
    ],
  },
  {
    slug: "ecommerce-website-development",
    name: "E-commerce Website Development",
    formInterest: "Conversion-Focused Website Development",
    eyebrow: "Online Stores · Catalogues · B2B Ordering",
    h1: "E-commerce Website Development in Chennai — Online Stores that Sell",
    metaTitle: "E-commerce Website Development Company in Chennai | Online Store Design — Adszoo",
    metaDescription:
      "Launch a fast, SEO-ready online store with Adszoo, Chennai — sweets & food brands, hardware & building materials, D2C products. Payments, shipping, WhatsApp ordering & product SEO.",
    keywords: [
      "ecommerce website development Chennai",
      "online store development Tamil Nadu",
      "Shopify developer Chennai",
      "sweets shop ecommerce website",
      "hardware ecommerce website",
      "B2B ecommerce India",
    ],
    quickAnswer:
      "E-commerce website development is building an online store where customers can browse, pay and track orders. Adszoo builds fast, mobile-first stores on Next.js or Shopify with UPI/card payments, shipping, WhatsApp ordering and product-level SEO — for food & sweets brands, building-material and hardware sellers, and D2C products.",
    intro:
      "We've built e-commerce for very different businesses — a traditional sweets brand taking festive orders online, a construction material supplier with a CMS-managed product catalogue, an aluminium & hardware store, and a premium skincare brand. The common thread: fast pages, clear product information, frictionless checkout and SEO on every product so the store gets found without burning money on ads.",
    problems: {
      title: "Why online stores struggle in India",
      points: [
        "Slow, theme-heavy sites that lose mobile shoppers on 4G.",
        "Thin product pages with one photo and no description — nothing to rank.",
        "Checkout that doesn't support UPI well or asks for too much.",
        "No WhatsApp option for customers who prefer to order by chat.",
        "Shipping, pincode serviceability and festive peaks not planned for.",
      ],
    },
    approach: [
      { title: "Right platform for you", description: "Shopify for speed-to-market, custom Next.js for performance and flexibility, or a CMS-powered catalogue with enquiry." },
      { title: "Product pages that sell & rank", description: "Rich descriptions, specs, FAQs, reviews and Product schema on every item." },
      { title: "Indian payments & shipping", description: "UPI, cards, COD, Razorpay/Cashfree, Shiprocket and pincode checks." },
      { title: "WhatsApp commerce", description: "Order-on-WhatsApp buttons, order updates and abandoned cart nudges." },
      { title: "Speed & Core Web Vitals", description: "Optimised images, caching and lightweight code for fast mobile loads." },
      { title: "Launch marketing", description: "Google Shopping, Meta catalogue ads and SEO to drive first sales." },
    ],
    deliverables: [
      "Store design & development",
      "Product catalogue setup & import",
      "Payment gateway & COD",
      "Shipping & pincode integration",
      "WhatsApp ordering",
      "Product, Breadcrumb & Organization schema",
      "GA4 e-commerce tracking & Meta pixel",
      "Admin training",
    ],
    process: [
      { step: "Plan", description: "Catalogue, platform, payments and shipping." },
      { step: "Design", description: "Mobile-first store design and product page template." },
      { step: "Build", description: "Development, integrations and product upload." },
      { step: "Launch", description: "Testing, go-live and tracking." },
      { step: "Grow", description: "SEO, ads and conversion optimisation." },
    ],
    whoFor: [
      "Sweets, snacks & food brands",
      "Hardware, aluminium & building material sellers",
      "D2C & lifestyle brands",
      "Manufacturers selling B2B online",
    ],
    caseStudies: ["jayaram-mittai", "supreme-aluminium", "kvm-cmart", "nura"],
    blogs: ["ecommerce-seo-checklist-2025", "landing-page-design-that-converts", "whatsapp-marketing-best-practices-2025"],
    related: [
      { label: "Conversion-focused websites", href: "/services/conversion-focused-websites" },
      { label: "Conversion rate optimisation", href: "/services/conversion-rate-optimization" },
      { label: "Website design in Chennai", href: "/services/website-design-chennai" },
    ],
    faqs: [
      {
        question: "How much does an e-commerce website cost in Chennai?",
        answer:
          "It depends on the platform, number of products and integrations. A Shopify store is the quickest and most affordable way to start; a custom Next.js store costs more upfront but gives better speed and flexibility. We share a fixed quote after a short call.",
      },
      {
        question: "Can customers order on WhatsApp from the website?",
        answer:
          "Yes. We add order-on-WhatsApp buttons that send the product and quantity to your WhatsApp, alongside a normal cart and checkout.",
      },
      {
        question: "Will my online store be SEO friendly?",
        answer:
          "Yes. Every store we build includes clean URLs, unique product content, Product schema, sitemaps, fast loading and internal linking so products can rank on Google.",
      },
    ],
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((s) => s.slug === slug);
}
