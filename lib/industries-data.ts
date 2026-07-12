export interface IndustryFAQ {
  question: string;
  answer: string;
}

export interface IndustryService {
  icon: string; // maps to an icon in the page component's icon map
  title: string;
  description: string;
}

export interface IndustryComparison {
  traditional: string[];
  adszoo: string[];
}

export interface IndustryProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface Industry {
  slug: string;
  industryName: string;
  badge: string;
  heroTitlePrefix: string;
  heroHighlight: string;
  heroTitleSuffix: string;
  heroSubtitle: string;
  painPointsHeading: string;
  painPoints: string[];
  storyHeading: string;
  storyParagraphs: string[];
  storyQuote: string;
  services: IndustryService[];
  process: IndustryProcessStep[];
  comparison: IndustryComparison;
  faqs: IndustryFAQ[];
  ctaHeading: string;
  ctaSubtext: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export const industries: Industry[] = [
  {
    slug: "marketing-for-real-estate",
    industryName: "Real Estate",
    badge: "Industries / Real Estate Marketing",
    heroTitlePrefix: "Marketing For Developers",
    heroHighlight: "Who Sell Projects",
    heroTitleSuffix: ", Not Just Listings",
    heroSubtitle:
      "We build project websites, run ad campaigns, and structure your search presence so buyers find your specific project — on Google, on maps, and increasingly, when they ask ChatGPT to compare projects near a location.",
    painPointsHeading: "Why most developer websites don't convert",
    painPoints: [
      "You're fighting 99acres and MagicBricks for generic searches like \"2BHK in [area]\" — a battle with no realistic win",
      "Pricing is hidden behind \"Contact for Price,\" which removes you from every budget-qualified search a buyer actually makes",
      "Construction progress and RERA details are buried in PDFs instead of building visible, ongoing trust",
      "Ad spend goes to broad location keywords instead of the specific project-name and micro-location searches only you can own",
    ],
    storyHeading: "You already own the project. You should own the search for it too.",
    storyParagraphs: [
      "Aggregator portals will always out-rank you for broad, generic property searches — they have more listings and more domain authority than any single developer site ever will.",
      "The real opportunity is narrower and more valuable: project-specific pages, honest construction-progress updates, and micro-location content that only your team has the detail to write.",
      "We also structure your site so that when a buyer asks an AI assistant to compare two projects near a location, your own site — not a portal listing — is the structured, factual source it pulls from.",
    ],
    storyQuote: "\"Will this get us in front of a buyer who's already decided to buy in this area?\"",
    services: [
      {
        icon: "Building2",
        title: "Project Websites",
        description:
          "Fast, conversion-focused sites per project — floor plans, amenities, pricing ranges, and construction updates buyers actually search for.",
      },
      {
        icon: "Search",
        title: "Local & Project SEO",
        description:
          "Ranking for project-name and micro-location searches, not generic city-wide terms you can't realistically win against portals.",
      },
      {
        icon: "Bot",
        title: "AI Property Search Visibility",
        description:
          "Structured RealEstateListing schema so AI tools cite your project directly when buyers ask for comparisons.",
      },
      {
        icon: "Target",
        title: "Performance Ad Campaigns",
        description:
          "Google and Meta campaigns targeted at high-intent, budget-qualified searches instead of broad awareness spend.",
      },
      {
        icon: "TrendingUp",
        title: "Construction Progress Content",
        description:
          "Ongoing, dated progress updates and RERA transparency that build buyer trust through the entire sales cycle.",
      },
      {
        icon: "Users",
        title: "Lead Capture & CRM Handoff",
        description:
          "Forms and WhatsApp flows built to qualify leads before they reach your sales team, not after.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Understand",
        description: "We map your project's real buyer — budget range, location priorities, and what they're actually Googling.",
      },
      {
        step: "02",
        title: "Plan",
        description: "A project-page and content structure built to own micro-location searches your competitors ignore.",
      },
      {
        step: "03",
        title: "Execute",
        description: "Website, schema, and ad campaigns launched together so search and paid traffic land on the same conversion path.",
      },
      {
        step: "04",
        title: "Grow",
        description: "Ongoing construction updates and content that keep the project ranking through the full sales timeline.",
      },
    ],
    comparison: {
      traditional: [
        "Chase broad city-wide keywords you can't win",
        "One generic \"Projects\" page for everything",
        "Pricing hidden behind a contact form",
        "No structured data for AI property search",
        "Static site that goes stale after launch",
      ],
      adszoo: [
        "Own project-specific and micro-location search",
        "Dedicated page per project with real detail",
        "Transparent pricing ranges that convert",
        "RealEstateListing schema for AI citation",
        "Living site updated through construction",
      ],
    },
    faqs: [
      {
        question: "We already list on 99acres and MagicBricks — do we still need our own website and SEO?",
        answer:
          "Yes. Aggregator listings generate leads, but you don't own that relationship or traffic long-term, and you're competing against every other developer on the same page. Your own site is the only place you control the buyer's first impression and capture their details directly.",
      },
      {
        question: "How long before a new project website starts ranking?",
        answer:
          "Project-specific and micro-location content can start showing traction within 6-8 weeks, since you're not fighting established aggregator content for that exact search.",
      },
      {
        question: "Do you handle ads as well as SEO?",
        answer:
          "Yes — we run both together so paid and organic traffic land on the same conversion-optimized project pages instead of competing strategies.",
      },
    ],
    ctaHeading: "Ready to get your project found by the right buyers?",
    ctaSubtext:
      "Let's talk about which of your current projects has the most search opportunity sitting untapped.",
    metaTitle: "Real Estate Marketing Agency | Developer Website & SEO — Adszoo",
    metaDescription:
      "Websites, SEO, and ad campaigns for real estate developers — built to rank for project and micro-location searches, and get cited in AI property search.",
    keywords: [
      "real estate marketing agency",
      "real estate developer website design",
      "property SEO Chennai",
      "real estate digital marketing India",
      "real estate developer lead generation",
      "project marketing website development",
    ],
  },
  {
    slug: "marketing-for-dentists",
    industryName: "Dental",
    badge: "Industries / Dental Marketing",
    heroTitlePrefix: "Marketing For Dental Clinics",
    heroHighlight: "That Book Chairs",
    heroTitleSuffix: ", Not Just Traffic",
    heroSubtitle:
      "We build clinic websites and run local campaigns structured around what patients actually search before booking — treatment cost, urgency, and \"near me\" — so the right patients find your specific clinic on Google, Maps, and AI search.",
    painPointsHeading: "Why most dental clinic websites underperform",
    painPoints: [
      "Your site lists treatments by name (\"Root Canal,\" \"Implants\") instead of answering the cost and pain questions patients search first",
      "No Google Business Profile strategy, so you're invisible on the map pack where most \"dentist near me\" searches actually convert",
      "Reviews are scattered or unmanaged, while competitors with more visible reviews win the trust decision before a patient even opens your site",
      "Appointment booking is a phone-only process, losing patients who want to book after-hours online",
    ],
    storyHeading: "Patients don't search \"best dentist.\" They search their pain point.",
    storyParagraphs: [
      "\"Tooth pain won't go away,\" \"root canal cost near me,\" \"emergency dentist open now\" — these are the real searches driving appointments, and most clinic websites have no content built to answer them.",
      "We restructure your site and Google Business Profile around procedure-specific, cost-transparent, urgency-aware content — the same information a nervous patient is trying to find at 11pm.",
      "Local SEO and review management do more for a single-location clinic than almost any other channel, because the competition for hyper-local dental searches is thinner than people assume.",
    ],
    storyQuote: "\"Would a patient in pain find and trust this page in under 10 seconds?\"",
    services: [
      {
        icon: "Stethoscope",
        title: "Clinic Website Design",
        description: "Fast, mobile-first sites with procedure pages that answer real patient questions, not brochure copy.",
      },
      {
        icon: "MapPin",
        title: "Google Business Profile & Local SEO",
        description: "Map-pack visibility for \"dentist near me\" and neighbourhood-specific searches around your clinic.",
      },
      {
        icon: "Star",
        title: "Review Generation & Management",
        description: "Systems to turn satisfied patients into visible Google reviews, the single biggest local trust signal.",
      },
      {
        icon: "Calendar",
        title: "Online Booking Integration",
        description: "Appointment booking that works after hours, capturing patients your front desk would otherwise miss.",
      },
      {
        icon: "Bot",
        title: "AI Search Visibility",
        description: "Structured, answer-first content built to be cited when patients ask ChatGPT or Google AI Overviews about treatments.",
      },
      {
        icon: "Target",
        title: "Local Ad Campaigns",
        description: "Google and Meta ads targeted at high-intent, nearby searches instead of broad, wasted reach.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Understand",
        description: "We look at what patients in your area are actually searching and where your clinic is currently invisible.",
      },
      {
        step: "02",
        title: "Plan",
        description: "A content and local SEO plan built around procedure, cost, and urgency-based searches.",
      },
      {
        step: "03",
        title: "Execute",
        description: "Website, Google Business Profile, and booking flow launched together for a single, consistent patient path.",
      },
      {
        step: "04",
        title: "Grow",
        description: "Ongoing review generation and content expansion to keep compounding local visibility.",
      },
    ],
    comparison: {
      traditional: [
        "Treatment names with no cost or pain context",
        "Invisible on the Google Maps pack",
        "Reviews scattered, unmanaged, or ignored",
        "Phone-only appointment booking",
        "No content built for AI search citation",
      ],
      adszoo: [
        "Answer-first pages matching real patient searches",
        "Local SEO built to win the map pack",
        "Active review generation system",
        "Online booking live 24/7",
        "Structured content built for AI visibility",
      ],
    },
    faqs: [
      {
        question: "Is local SEO worth it for a single-location dental clinic?",
        answer:
          "Yes, often more than for larger chains — competition for hyper-local, procedure-specific searches near a single clinic is thinner than people assume, and results tend to show faster.",
      },
      {
        question: "How important are Google reviews really?",
        answer:
          "Extremely — reviews are one of the strongest local ranking and trust signals, and often the deciding factor between two clinics with similar map-pack visibility.",
      },
      {
        question: "Can you help with both the website and ongoing Google Business Profile management?",
        answer:
          "Yes, we handle both together, since your website and your Google Business Profile should be reinforcing the same local trust signals, not working separately.",
      },
    ],
    ctaHeading: "Ready to fill more chairs with the right patients?",
    ctaSubtext: "Let's look at where your clinic is currently invisible in local search.",
    metaTitle: "Dental Marketing Agency | Clinic Website & Local SEO — Adszoo",
    metaDescription:
      "Website design, local SEO, and Google Business Profile management for dental clinics — built to convert real patient searches into booked appointments.",
    keywords: [
      "dental marketing agency",
      "dentist SEO services",
      "dental clinic website design",
      "local SEO for dentists",
      "dental practice digital marketing",
      "patient acquisition for dental clinics",
    ],
  },
  {
    slug: "marketing-for-interior-designers",
    industryName: "Interior Design",
    badge: "Industries / Interior Design Marketing",
    heroTitlePrefix: "Marketing For Interior Designers",
    heroHighlight: "Who Want Local Clients",
    heroTitleSuffix: ", Not Just Followers",
    heroSubtitle:
      "We build portfolio-driven websites and neighbourhood-specific SEO so homeowners and businesses searching for an interior designer in your city actually find your studio, not just your Instagram.",
    painPointsHeading: "Why most interior design websites don't generate leads",
    painPoints: [
      "A beautiful portfolio with no content structure means Google has nothing specific to rank you for beyond your studio name",
      "One generic \"Services\" page competes against studios with dedicated neighbourhood and project-type pages",
      "No pricing or process transparency, so budget-conscious leads bounce to a competitor who explains what to expect",
      "Instagram gets the engagement, but the website — where inquiries actually convert — gets ignored",
    ],
    storyHeading: "Your portfolio proves your taste. Your website should prove you're findable.",
    storyParagraphs: [
      "Interior design searches are hyper-local — \"interior designer in [neighbourhood]\" behaves completely differently from a generic city-wide search, and most studio sites aren't structured to compete for either.",
      "We build dedicated pages by neighbourhood and project type (residential, café, salon, commercial) so your studio shows up for the specific combination a client is actually searching.",
      "Your portfolio images stay the centerpiece — we just wrap them in the structure and content that gets a page found in the first place.",
    ],
    storyQuote: "\"Would this page rank for the exact search a client near us is typing right now?\"",
    services: [
      {
        icon: "PenTool",
        title: "Portfolio Website Design",
        description: "Visually led sites that showcase your work while staying structured enough to actually rank.",
      },
      {
        icon: "MapPin",
        title: "Neighbourhood & Local SEO",
        description: "Location-specific pages so you're found for searches tied to the exact areas you serve.",
      },
      {
        icon: "Search",
        title: "Project-Type SEO",
        description: "Dedicated content for residential, café, salon, or commercial interiors — whatever your studio specializes in.",
      },
      {
        icon: "Bot",
        title: "AI Search Visibility",
        description: "Structured content built to be surfaced when clients ask AI tools to recommend a local interior designer.",
      },
      {
        icon: "Users",
        title: "Inquiry-to-Consultation Funnel",
        description: "Forms and content built to convert a portfolio browser into a booked consultation call.",
      },
      {
        icon: "TrendingUp",
        title: "Ongoing Content & Blog System",
        description: "A content engine that keeps expanding your local footprint project after project.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Understand",
        description: "We map the neighbourhoods, project types, and budget range you actually want more of.",
      },
      {
        step: "02",
        title: "Plan",
        description: "A site structure and content plan built around those specific, winnable searches.",
      },
      {
        step: "03",
        title: "Execute",
        description: "A portfolio-led website launched with the SEO structure already built in, not bolted on later.",
      },
      {
        step: "04",
        title: "Grow",
        description: "New projects become new content, compounding your local search footprint over time.",
      },
    ],
    comparison: {
      traditional: [
        "Beautiful portfolio, no SEO structure",
        "One generic services page for everything",
        "No pricing or process transparency",
        "All engagement lives on Instagram only",
        "No local, neighbourhood-specific content",
      ],
      adszoo: [
        "Portfolio wrapped in a rankable structure",
        "Dedicated pages per neighbourhood and project type",
        "Clear process and budget expectations",
        "Website built to convert, not just display",
        "Local SEO across every area you serve",
      ],
    },
    faqs: [
      {
        question: "We already have a strong Instagram — do we really need website SEO?",
        answer:
          "Instagram builds awareness, but most clients still research and decide via Google before reaching out. A website with no SEO structure means that research phase happens on a competitor's site instead of yours.",
      },
      {
        question: "How specific should our website content get?",
        answer:
          "Very — \"interior designer in [neighbourhood]\" for residential versus commercial versus café fit-outs are different searches with different intent. Dedicated pages for each outperform one generic services page.",
      },
      {
        question: "We're a small studio — is this worth the investment?",
        answer:
          "Often more so than for larger firms — competition for hyper-local, project-specific searches is thinner, so a small studio with the right content structure can outrank much larger competitors locally.",
      },
    ],
    ctaHeading: "Ready to turn your portfolio into a lead-generating website?",
    ctaSubtext: "Let's look at which neighbourhoods and project types you're currently invisible for.",
    metaTitle: "Interior Design Marketing Agency | Studio Website & Local SEO — Adszoo",
    metaDescription:
      "Portfolio websites and local SEO for interior design studios — built to rank for neighbourhood and project-type searches that convert into consultations.",
    keywords: [
      "interior design marketing agency",
      "interior designer website design",
      "local SEO for interior designers",
      "interior design lead generation",
      "interior design studio SEO",
      "affordable interior designers marketing",
    ],
  },
  {
    slug: "marketing-for-hospitals",
    industryName: "Healthcare",
    badge: "Industries / Healthcare Marketing",
    heroTitlePrefix: "Marketing For Hospitals & Clinics",
    heroHighlight: "That Patients Can Actually Find",
    heroTitleSuffix: "",
    heroSubtitle:
      "We build healthcare websites and search strategies structured around what patients actually type before booking — symptoms, cost, and urgency — so your hospital or clinic shows up on Google, AI Overviews, and ChatGPT when it matters most.",
    painPointsHeading: "Why most hospital and clinic websites don't rank",
    painPoints: [
      "Department pages (\"Cardiology,\" \"Orthopedics\") rank for almost nothing, while real searches are symptom-first: \"chest pain when to see a doctor\"",
      "No doctor-level structured data, so Google and AI tools have nothing to answer \"who is the best [specialty] doctor near me\" with",
      "Pricing is hidden, losing high-intent, cost-conscious searches entirely to competitors who publish transparent ranges",
      "Zero content built to be extracted and cited by AI Overviews or ChatGPT, even though that's increasingly where health questions get answered first",
    ],
    storyHeading: "Patients search symptoms and cost. Most hospital sites answer neither.",
    storyParagraphs: [
      "Nobody searches \"best hospital.\" They search \"piles treatment cost in Chennai\" or \"is laparoscopic surgery painful\" — specific, urgent, and answerable questions your site should already have content for.",
      "We rebuild site structure around symptom and condition pages, doctor-level schema, and transparent pricing — the exact information both Google and a worried patient are looking for.",
      "This also means your hospital's own content, not a generic health portal, becomes the source AI search tools cite when someone asks a related question.",
    ],
    storyQuote: "\"Could a patient searching in a panic find and trust this exact page?\"",
    services: [
      {
        icon: "Stethoscope",
        title: "Symptom & Condition Pages",
        description: "Content structured around real patient searches, not department names nobody actually types into Google.",
      },
      {
        icon: "Users",
        title: "Doctor-Level Structured Data",
        description: "Schema markup per doctor so search and AI tools can answer \"best [specialty] doctor near me\" with your team.",
      },
      {
        icon: "Search",
        title: "Local & Multi-Branch SEO",
        description: "Location-specific pages for every branch, instead of one generic locations page competing with itself.",
      },
      {
        icon: "Bot",
        title: "AI Search & AEO",
        description: "Answer-first content and FAQ schema built to be extracted and cited by ChatGPT and Google AI Overviews.",
      },
      {
        icon: "Target",
        title: "Patient Acquisition Campaigns",
        description: "Ad campaigns targeted at high-intent, cost- and urgency-based searches, not broad awareness spend.",
      },
      {
        icon: "TrendingUp",
        title: "Reputation & Review Management",
        description: "Systems to build visible trust signals across Google and health-specific review platforms.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Understand",
        description: "We identify the highest-value services and the real searches your patients are already making.",
      },
      {
        step: "02",
        title: "Plan",
        description: "A content and schema strategy built around symptoms, cost, and urgency, not department structure.",
      },
      {
        step: "03",
        title: "Execute",
        description: "Website, doctor pages, and schema launched together so search and AI visibility grow in parallel.",
      },
      {
        step: "04",
        title: "Grow",
        description: "Ongoing content expansion across conditions, branches, and doctors as your hospital grows.",
      },
    ],
    comparison: {
      traditional: [
        "Department pages with no real search value",
        "No doctor-level structured data",
        "Pricing hidden or absent",
        "Nothing built for AI Overviews or ChatGPT",
        "One generic \"Locations\" page for all branches",
      ],
      adszoo: [
        "Symptom and condition pages that actually rank",
        "Doctor schema built for search and AI citation",
        "Transparent, trust-building pricing pages",
        "Answer-first content structured for AEO",
        "Dedicated local SEO per branch",
      ],
    },
    faqs: [
      {
        question: "Do hospitals need a separate AI search (AEO) strategy from SEO?",
        answer:
          "No — AEO builds on top of good SEO. If technical SEO is weak, no amount of AI optimization alone will fix that. We start with SEO fundamentals, then layer answer-first content and schema on top.",
      },
      {
        question: "Is this only relevant for large hospital chains?",
        answer:
          "No. Single-location clinics and diagnostic centers often see faster results, since competition for hyper-local, condition-specific searches is thinner than for large multi-branch hospital groups.",
      },
      {
        question: "How long does it take to see results?",
        answer:
          "Technical fixes can show measurable improvement in 4-6 weeks. Competitive ranking growth typically takes 4-6 months, while AI citation visibility can happen faster, sometimes within 30-60 days, since so few healthcare sites are structured for it yet.",
      },
    ],
    ctaHeading: "Ready for patients to actually find you first?",
    ctaSubtext: "Let's audit which of your highest-value services are currently invisible in search.",
    metaTitle: "Healthcare Marketing Agency | Hospital & Clinic SEO + AEO — Adszoo",
    metaDescription:
      "Website design, local SEO, and AI search visibility for hospitals and clinics — built around real patient searches, not department names.",
    keywords: [
      "healthcare marketing agency",
      "hospital SEO agency India",
      "clinic digital marketing Chennai",
      "patient acquisition website",
      "hospital website design",
      "healthcare AEO AI search visibility",
    ],
  },
  {
    slug: "marketing-for-ecommerce",
    industryName: "Ecommerce",
    badge: "Industries / Ecommerce Marketing",
    heroTitlePrefix: "Marketing For Ecommerce Brands",
    heroHighlight: "That Convert Traffic",
    heroTitleSuffix: "Into Repeat Customers",
    heroSubtitle:
      "We build fast, conversion-optimized storefronts and run performance campaigns structured around actual purchase intent — search, product, and comparison queries — so your store shows up and converts, not just gets visited.",
    painPointsHeading: "Why most ecommerce stores leak revenue",
    painPoints: [
      "Product pages are thin on the specific details (size, material, comparison) that both shoppers and AI shopping assistants need to recommend you",
      "Slow page speed and cluttered checkout flows quietly kill conversion rate long before ad spend is even the problem",
      "SEO strategy stops at the homepage, leaving category and product pages to rank for almost nothing",
      "No structured product data, meaning your store is invisible when someone asks an AI tool to compare or recommend products in your category",
    ],
    storyHeading: "Traffic isn't the problem. Conversion and findability are.",
    storyParagraphs: [
      "Most ecommerce marketing spend chases more traffic to a store that's already leaking the traffic it has — slow load times, unclear product information, and checkout friction all cost more revenue than most brands realize.",
      "We fix conversion architecture first — speed, product page depth, checkout flow — then build SEO and structured data that make individual products findable, not just your homepage.",
      "As AI shopping assistants become a real discovery channel, structured Product schema is what determines whether your store gets recommended or skipped entirely.",
    ],
    storyQuote: "\"Would this product page convince someone to buy without needing to ask a question first?\"",
    services: [
      {
        icon: "ShoppingCart",
        title: "Storefront Design & Development",
        description: "Fast, conversion-focused storefronts built on Shopify or custom stacks, not generic templates.",
      },
      {
        icon: "Search",
        title: "Product & Category SEO",
        description: "SEO built down to the product level, so individual listings rank, not just your homepage.",
      },
      {
        icon: "Bot",
        title: "AI Shopping Visibility",
        description: "Structured Product schema so AI shopping assistants can find, compare, and recommend your products.",
      },
      {
        icon: "TrendingUp",
        title: "Conversion Rate Optimization",
        description: "Checkout flow, page speed, and product-page fixes that turn existing traffic into more revenue.",
      },
      {
        icon: "Target",
        title: "Performance Ad Campaigns",
        description: "Google Shopping, Meta, and retargeting campaigns built around actual purchase-intent data.",
      },
      {
        icon: "Users",
        title: "Retention & Email Flows",
        description: "Post-purchase and abandoned-cart flows built to increase repeat purchase rate, not just first sales.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Understand",
        description: "We audit where your current traffic is actually leaking, from speed to checkout to page content.",
      },
      {
        step: "02",
        title: "Plan",
        description: "A prioritized fix list covering conversion architecture, SEO, and structured data.",
      },
      {
        step: "03",
        title: "Execute",
        description: "Storefront, SEO, and schema improvements shipped together so gains compound instead of competing.",
      },
      {
        step: "04",
        title: "Grow",
        description: "Ongoing campaign and content optimization based on real conversion and search data.",
      },
    ],
    comparison: {
      traditional: [
        "More ad spend to a leaking storefront",
        "SEO that stops at the homepage",
        "Thin product pages with no real detail",
        "No structured data for AI shopping tools",
        "Retention treated as an afterthought",
      ],
      adszoo: [
        "Conversion architecture fixed first",
        "SEO built down to the product level",
        "Detailed, comparison-ready product pages",
        "Product schema built for AI recommendation",
        "Retention flows built in from day one",
      ],
    },
    faqs: [
      {
        question: "Should we fix conversion rate or SEO first?",
        answer:
          "Conversion architecture, usually. There's little point sending more traffic to a storefront that's already losing the visitors it has to slow load times or checkout friction.",
      },
      {
        question: "Does structured product data actually matter for AI shopping search?",
        answer:
          "Increasingly, yes. AI shopping assistants rely on structured Product schema to compare and recommend items, so stores without it are effectively invisible in that channel even if the products themselves are strong.",
      },
      {
        question: "We're on Shopify — can you still help with SEO and CRO?",
        answer:
          "Yes, we work within Shopify as well as custom stacks, since most of the highest-impact fixes are structural and content-based rather than platform-specific.",
      },
    ],
    ctaHeading: "Ready to convert more of the traffic you're already getting?",
    ctaSubtext: "Let's audit where your storefront is losing revenue before we talk about ad spend.",
    metaTitle: "Ecommerce Marketing Agency | Storefront, SEO & CRO — Adszoo",
    metaDescription:
      "Storefront design, SEO, and conversion rate optimization for ecommerce brands — built to turn existing traffic into revenue and rank in AI shopping search.",
    keywords: [
      "ecommerce marketing agency",
      "ecommerce SEO services",
      "Shopify store optimization",
      "D2C brand marketing agency",
      "ecommerce conversion rate optimization",
      "product page SEO",
    ],
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
