// Adszoo software products. Each product gets a rich, SEO-focused landing page
// at /products/[slug]. Content is written for buyers (owners, managers,
// brokers) — not developers — and every page ends in an enquiry.

export interface ProductFeature {
  title: string;
  description: string;
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  category: string; // schema.org applicationCategory
  shortDescription: string;
  definition: string; // one-sentence, AI-quotable answer to "What is X?"
  heroDescription: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  idealFor: string[];
  problem: { title: string; points: string[] };
  features: ProductFeature[];
  howItWorks: { step: string; description: string }[];
  deployment: { title: string; description: string }[];
  pricingModel: { title: string; description: string; points: string[] };
  outcomes: string[];
  screenshots?: { src: string; alt: string; caption: string; portrait?: boolean }[];
  faqs: { question: string; answer: string }[];
  relatedBlogs: string[];
  relatedCaseStudies: string[];
  locations: string[];
  liveUrl?: string;
  accent: string; // tailwind-safe hex for product accent
  status: string;
}

export const products: Product[] = [
  {
    slug: "unizo-gst-billing-inventory-software",
    name: "Unizo",
    definition:
      "Unizo is a GST billing, inventory and accounts software for construction material, hardware and trading businesses that runs fully offline on a Windows PC or on the cloud, sold at a one-time price with optional annual support.",
    tagline:
      "GST billing, stock & accounts software for construction material, hardware and trading businesses",
    category: "BusinessApplication",
    shortDescription:
      "End-to-end billing, GST reports, stock, purchase, sales and customer credit management — runs offline on your shop PC or on the cloud, at a one-time price.",
    heroDescription:
      "Unizo is an end-to-end billing and inventory software built first for a construction raw material dealer in Tamil Nadu. Cement, steel, hardware, electricals, plumbing, tiles, paints — fast GST billing at the counter, live stock, supplier purchases, customer credit and GST-ready reports in one place. Install it on your own computer (works 100% offline) or run it on the cloud. One-time fee, no per-user monthly rent.",
    metaTitle:
      "Unizo — GST Billing & Inventory Software for Construction Material Dealers | Adszoo",
    metaDescription:
      "Affordable GST billing, stock, purchase, sales & credit software for building material, hardware and trading shops in Chennai & Tamil Nadu. Works offline or on cloud. Book a free demo.",
    keywords: [
      "billing software for construction materials",
      "building material shop billing software",
      "hardware shop billing software Tamil Nadu",
      "GST billing software Chennai",
      "offline billing software India",
      "inventory management software for traders",
      "cement steel dealer software",
      "billing software one time payment",
    ],
    idealFor: [
      "Construction raw material & building material dealers",
      "Cement, steel, TMT and aggregate traders",
      "Hardware, electrical, plumbing & sanitaryware shops",
      "Tiles, paints, plywood and aluminium dealers",
      "Wholesale & retail traders who sell on credit",
    ],
    problem: {
      title: "Why most material dealers outgrow Excel and generic billing apps",
      points: [
        "Bills are written by hand or in Excel, so GST filing takes days every month and mistakes cost penalties.",
        "Stock on the system never matches stock in the godown — no one knows which item is short until a contractor is waiting.",
        "Contractors and dealers buy on credit, but outstanding balances live in a notebook and payments are missed.",
        "Different prices for retail, contractor and dealer customers are applied from memory.",
        "Most 'cloud' billing software charges monthly per user and stops working when the internet does.",
      ],
    },
    features: [
      {
        title: "Fast GST billing at the counter",
        description:
          "Search by product number, barcode, name, brand or HSN. Keyboard-driven billing — F9 saves and prints. CGST/SGST or IGST is applied automatically based on the customer's state.",
      },
      {
        title: "Customer-type pricing",
        description:
          "Separate Retail, Contractor and Dealer prices are picked automatically for each customer, with role-controlled discounts (e.g. cashier 2%, manager 10%).",
      },
      {
        title: "Credit & outstanding tracking",
        description:
          "Every customer and supplier has a running ledger. Credit-limit warnings at billing, receive-payment entries, printable statements and outstanding reports.",
      },
      {
        title: "Live stock with low-stock alerts",
        description:
          "Every sale, purchase, return and adjustment is a traceable stock movement — stock is never a number someone typed in. Low-stock list on the dashboard.",
      },
      {
        title: "Purchases & supplier management",
        description:
          "Enter supplier bills with GST, update cost prices, record part payments and returns. Supplier ledgers update in the same step.",
      },
      {
        title: "GST reports, ready for your auditor",
        description:
          "Sales register, purchase register, HSN summary and tax-slab summary for any date range, exportable to Excel/CSV.",
      },
      {
        title: "16 business reports",
        description:
          "Daily & monthly sales, sales by product, category, brand and staff, stock movement, payment collection, cancelled bills, returns and more.",
      },
      {
        title: "Split payments & thermal printing",
        description:
          "Cash, UPI, card and credit on one bill. A4 or 80mm thermal invoices with amount-in-words and tax breakup. Hold & resume bills during rush hours.",
      },
      {
        title: "Staff roles & audit log",
        description:
          "Owner, Manager and Cashier logins. Cashiers never see purchase cost or profit. Price changes, cancellations and stock edits are logged with user and time.",
      },
      {
        title: "Automatic backups",
        description:
          "Local automatic backups with one-click restore, plus manual backup to a pen drive. Your data stays with you.",
      },
      {
        title: "Excel product import",
        description:
          "Bring your existing product list from Excel/CSV with validation for duplicate codes, GST rates and HSN codes.",
      },
      {
        title: "Your brand on every bill",
        description:
          "Business name, GSTIN, address, invoice prefix and footer are set once in Settings and appear on every invoice.",
      },
    ],
    howItWorks: [
      {
        step: "Free demo call",
        description:
          "We show Unizo on a live demo with sample data from a material shop like yours (WhatsApp or Google Meet).",
      },
      {
        step: "Setup & data import",
        description:
          "We install it on your shop PC or cloud, import your products, customers and opening balances, and set up your GST and invoice format.",
      },
      {
        step: "Staff training",
        description:
          "A hands-on session for your billing staff in Tamil or English, plus a simple SOP guide.",
      },
      {
        step: "Go live with support",
        description:
          "You start billing from day one. Our support team is a WhatsApp message away.",
      },
    ],
    deployment: [
      {
        title: "On your own computer (offline)",
        description:
          "Installs as a normal Windows program. Works with zero internet — power cuts and network drops never stop billing. Data stays on your PC.",
      },
      {
        title: "Cloud setup",
        description:
          "Prefer access from multiple branches or from home? We host and manage a cloud instance for you with secure access.",
      },
    ],
    pricingModel: {
      title: "Affordable, one-time pricing",
      description:
        "Unizo is sold as a one-time licence with setup — not a monthly per-user subscription. An optional yearly support & updates plan keeps you covered.",
      points: [
        "One-time setup & licence fee",
        "Optional annual support / AMC",
        "Custom modules (e.g. delivery challans, site-wise billing) on request",
        "Free demo before you pay anything",
      ],
    },
    outcomes: [
      "GST filing data ready in minutes instead of days",
      "Accurate stock — fewer 'out of stock' surprises for contractors",
      "Credit outstanding visible for every customer, every day",
      "Faster counter billing during peak hours",
    ],
    faqs: [
      {
        question: "Does Unizo work without internet?",
        answer:
          "Yes. The desktop version of Unizo runs 100% offline on your Windows computer and stores data locally in a single database file with automatic backups. A cloud setup is also available if you need multi-branch access.",
      },
      {
        question: "Is Unizo suitable for construction material and hardware shops?",
        answer:
          "Yes — Unizo was first built for a construction raw material dealer, so it handles contractor/dealer pricing, credit sales, bulk items, GST slabs and HSN-wise reports that building material, hardware, electrical and plumbing shops need.",
      },
      {
        question: "Can Unizo generate GST reports?",
        answer:
          "Unizo generates a sales register, purchase register, HSN summary and GST rate-wise tax summary for any date range, exportable to Excel/CSV for your auditor or GST return filing.",
      },
      {
        question: "How much does Unizo cost?",
        answer:
          "Unizo is priced as a one-time setup and licence fee with an optional annual support plan, so there is no monthly per-user rent. Pricing depends on users, branches and customisation — WhatsApp us for a quote.",
      },
      {
        question: "Can you customise Unizo for my business?",
        answer:
          "Yes. Adszoo built Unizo in-house, so we can add modules such as delivery challans, vehicle/site-wise billing, or custom invoice formats.",
      },
      {
        question: "Do you provide installation and training in Chennai and Tamil Nadu?",
        answer:
          "Yes. We install, import your data and train your staff on-site in Chennai and remotely anywhere in Tamil Nadu and India.",
      },
    ],
    relatedBlogs: [
      "billing-software-for-construction-material-dealers",
      "offline-vs-cloud-billing-software-india",
      "custom-software-vs-off-the-shelf-for-smes",
    ],
    relatedCaseStudies: ["kvm-agencies", "kvm-cmart", "gs-traders"],
    locations: ["Chennai", "Chengalpattu", "Kanchipuram", "Coimbatore", "Erode", "Madurai", "Tiruchirappalli", "Salem", "Tamil Nadu"],
    accent: "#ff6321",
    status: "Live with customers",
  },
  {
    slug: "propertygenie-real-estate-listing-software",
    name: "PropertyGenie",
    definition:
      "PropertyGenie is a property listing and lead-capture tool for real estate brokers that turns a rough property note and photos into a shareable listing page, a WhatsApp message and a PDF brochure, and sends buyer enquiries directly to the broker.",
    tagline:
      "Turn a rough WhatsApp property note into a premium listing page, share message & PDF brochure — in seconds",
    category: "BusinessApplication",
    shortDescription:
      "Property microsite and lead-capture tool for real estate brokers and agencies. AI writes the listing, buyers enquire, leads land in your phone.",
    heroDescription:
      "PropertyGenie is built for independent real estate brokers and small agencies. Paste the messy property description you'd normally forward on WhatsApp, upload photos, and PropertyGenie generates a polished, mobile-first property page with its own link, a ready-to-send WhatsApp message and a downloadable PDF brochure. Every page has an enquiry form, so buyer leads come straight to you — not to a portal that sells them to five other brokers.",
    metaTitle:
      "PropertyGenie — Property Listing Website & Lead Capture for Real Estate Brokers | Adszoo",
    metaDescription:
      "Create beautiful property listing pages, WhatsApp share messages and PDF brochures in seconds. Built for real estate brokers & agencies in Chennai and India. Start free.",
    keywords: [
      "real estate broker software India",
      "property listing website for brokers",
      "property brochure maker",
      "real estate lead generation Chennai",
      "property microsite builder",
      "real estate agent website Chennai",
      "WhatsApp property listing tool",
    ],
    idealFor: [
      "Independent real estate brokers",
      "Small and mid-size real estate agencies",
      "Builders & promoters with a few live projects",
      "Rental & resale property consultants",
    ],
    problem: {
      title: "Why brokers lose buyers between WhatsApp forwards",
      points: [
        "Property details get forwarded as long WhatsApp texts and 20 loose photos — buyers lose interest or forget which flat was which.",
        "Portals charge for visibility and then share the same enquiry with many brokers.",
        "Making a decent brochure for every property needs a designer and a day of back-and-forth.",
        "There's no way to see which property is getting attention or where leads came from.",
      ],
    },
    features: [
      {
        title: "AI writes the listing",
        description:
          "Paste a rough note like '2BHK, 1050 sqft, Velachery, 2nd floor, car park, 85L' — PropertyGenie structures it and writes clean, buyer-friendly listing copy.",
      },
      {
        title: "A premium page per property",
        description:
          "Every property gets its own shareable, mobile-first page with photos, highlights, location and price — looks like a real listing, not a form.",
      },
      {
        title: "One-tap WhatsApp sharing",
        description:
          "A ready-to-send WhatsApp message with the property link is generated for you. Share to buyers and groups in one tap.",
      },
      {
        title: "PDF brochure, auto-generated",
        description:
          "Download a professional brochure for every property from the same details — no designer needed.",
      },
      {
        title: "Lead capture that comes to you",
        description:
          "Buyers enquire on the page and you get notified instantly. All leads are listed in your dashboard by property.",
      },
      {
        title: "Your broker profile page",
        description:
          "A branded page listing all your properties with your name, photo and WhatsApp number — your own mini website.",
      },
      {
        title: "Agency & team plans",
        description:
          "Agencies can add team members, share a monthly listing pool and keep every listing under the agency brand.",
      },
      {
        title: "Built for phones",
        description:
          "Brokers work from the field. Add a property, share it and check leads entirely from your phone.",
      },
    ],
    howItWorks: [
      { step: "Paste & upload", description: "Paste the property note and add photos." },
      { step: "Review", description: "AI drafts the listing — edit anything you want." },
      { step: "Publish & share", description: "Get the page link, WhatsApp message and PDF brochure." },
      { step: "Get leads", description: "Buyers enquire, you get notified, you close." },
    ],
    deployment: [
      {
        title: "Self-serve SaaS",
        description:
          "Sign up and start with free listings — no installation. Pay only for listing packs you use.",
      },
      {
        title: "White-label for agencies & builders",
        description:
          "Want PropertyGenie on your own domain, with your brand? We offer a one-time setup with an annual support plan.",
      },
    ],
    pricingModel: {
      title: "Start free, pay per listing",
      description:
        "Individual brokers start with free listings and buy small listing packs as needed. Agencies get monthly plans with team seats; builders can get a white-label version.",
      points: [
        "Free listings to start — no card needed",
        "Affordable one-time listing packs",
        "Monthly agency plans with team seats",
        "White-label setup with one-time fee + annual support",
      ],
    },
    outcomes: [
      "Every property shared as a professional link instead of a wall of text",
      "Direct buyer enquiries you don't share with other brokers",
      "Brochures in seconds instead of days",
      "A clear view of which listings get interest",
    ],
    faqs: [
      {
        question: "What is PropertyGenie?",
        answer:
          "PropertyGenie is a property listing and lead-capture tool for real estate brokers. You paste a property description and photos, and it generates a mobile-friendly property page, a WhatsApp share message and a PDF brochure, with an enquiry form that sends buyer leads to you.",
      },
      {
        question: "Is PropertyGenie a property portal like 99acres or MagicBricks?",
        answer:
          "No. PropertyGenie is your own digital sales catalogue. Leads from your listing pages come only to you — they are not shared or sold to other brokers.",
      },
      {
        question: "Can I try PropertyGenie for free?",
        answer:
          "Yes. New brokers get free listings at signup with no card required. You can buy listing packs or an agency plan later.",
      },
      {
        question: "Can my agency use it with multiple agents?",
        answer:
          "Yes. Agency plans include team seats and a shared monthly listing pool. Builders and large agencies can also get a white-label version on their own domain.",
      },
      {
        question: "Does it work outside Chennai?",
        answer:
          "Yes. PropertyGenie was launched with Chennai brokers but works for property listings anywhere in India.",
      },
    ],
    relatedBlogs: [
      "real-estate-broker-lead-generation-guide",
      "real-estate-developer-seo-aeo-2026",
      "whatsapp-marketing-best-practices-2025",
    ],
    relatedCaseStudies: ["vv-builders", "eswari-builders"],
    locations: ["Chennai", "Velachery", "OMR", "Tambaram", "Anna Nagar", "Porur", "Coimbatore", "Bengaluru", "India"],
    liveUrl: "https://propertygenie.adszoo.in/",
    accent: "#0F766E",
    status: "Live — self-serve",
  },
  {
    slug: "smart-queue-restaurant-queue-management-system",
    name: "Smart Queue",
    definition:
      "Smart Queue is a QR-based restaurant queue management system: guests scan a daily QR code to join a digital waitlist, track their token on their phone and a TV display, and are alerted when a best-fit table is allocated.",
    tagline:
      "QR-based waiting list & table management system for busy restaurants — no more shouting names",
    category: "BusinessApplication",
    shortDescription:
      "Guests scan a QR to join the queue, watch their token on a TV and get alerted on their phone when their table is ready. Staff manage tables from a tablet.",
    heroDescription:
      "Weekend rush, 40 people at the door, a manager shouting names over the noise and guests leaving for the restaurant next door — Smart Queue fixes that. Guests scan a QR at the entrance and join the waiting list from their phone in English, Tamil or Hindi. A TV shows tokens 'In process' and 'Allocated'. Tables are allocated automatically by party size, and guests get alerted on their phone. Managers see everything live on a tablet and get notifications on their phone.",
    metaTitle:
      "Smart Queue — Restaurant Queue Management & QR Waitlist System | Adszoo",
    metaDescription:
      "QR waitlist, TV token display, auto table allocation & phone alerts for restaurants and messes in Chennai, Erode, Coimbatore & across India. One-time setup. Book a live demo.",
    keywords: [
      "restaurant queue management system",
      "restaurant waitlist app India",
      "QR code queue system for restaurants",
      "token display system for restaurant",
      "table management software Chennai",
      "restaurant waiting list software Tamil Nadu",
      "virtual queue system India",
    ],
    idealFor: [
      "Busy restaurants and family dining",
      "Mess & meals restaurants with weekend rush",
      "Multi-branch restaurant chains",
      "Cafés, bakeries & food courts with waiting crowds",
      "Clinics, salons & service counters that run token queues",
    ],
    problem: {
      title: "The waiting-area chaos every busy restaurant knows",
      points: [
        "Managers shout names or write them on paper — guests miss their turn or argue about who came first.",
        "Small groups get seated at big tables while large families keep waiting.",
        "Guests can't step away to wait in the car or shop next door, so the entrance gets crowded.",
        "Walk-away guests are lost revenue — and nobody measures how many leave.",
      ],
    },
    features: [
      {
        title: "Scan QR to join the queue",
        description:
          "Guests scan the QR at the entrance and enter name, number of guests and phone. No app download. The QR changes daily, so screenshots and forwarded links don't work.",
      },
      {
        title: "Live token on the guest's phone",
        description:
          "Guests see their token number and how many groups are ahead — and get an alert when their table is ready, so they can wait wherever they like.",
      },
      {
        title: "TV display with voice announcement",
        description:
          "Big, readable 'In process' and 'Allocated' tokens on any smart TV, with a chime and voice call-out. Shows today's QR too.",
      },
      {
        title: "Automatic best-fit table allocation",
        description:
          "First-come-first-served with best fit — a party of 2 doesn't take an 8-seater unless you allow it. Merge tables for big groups.",
      },
      {
        title: "Manager dashboard & phone notifications",
        description:
          "Live queue with Allocate, Seated, No-show and Walk-in actions, a table map (free, reserved, occupied, blocked) and instant notifications.",
      },
      {
        title: "Tamil, English & Hindi",
        description:
          "Guests choose their language. Perfect for Tamil Nadu restaurants serving locals, families and travellers.",
      },
      {
        title: "Billing / POS integration",
        description:
          "When the bill prints, the table frees up and the next group is allocated automatically. No integration? Staff tap 'Bill done'.",
      },
      {
        title: "WhatsApp updates & reports",
        description:
          "Guests can share their token on WhatsApp; automated WhatsApp messages can be enabled. Daily reports show wait times and no-shows.",
      },
      {
        title: "Multi-branch & your brand",
        description:
          "Each branch gets its own tables, QR, TV link and managers. Your logo, name and brand colours on every screen.",
      },
    ],
    howItWorks: [
      { step: "Guest scans QR", description: "At the entrance or on the TV, and joins in 20 seconds." },
      { step: "Token on TV & phone", description: "Guests see their position and can wait comfortably." },
      { step: "Table auto-allocated", description: "Best-fit table assigned as soon as one frees up." },
      { step: "Guest alerted & seated", description: "Phone alert + TV announcement; manager taps 'Seated'." },
    ],
    deployment: [
      {
        title: "Cloud (recommended)",
        description:
          "We host it for you. Works on any smart TV browser, tablet and phone. Nothing to install at the restaurant.",
      },
      {
        title: "Local server at the restaurant",
        description:
          "Runs on a small PC on your Wi-Fi if you prefer everything on-premise.",
      },
    ],
    pricingModel: {
      title: "One-time setup + monthly/annual support",
      description:
        "A one-time setup fee covers branding, table configuration, QR posters and TV setup. A small retainer covers hosting, updates and support.",
      points: [
        "One-time setup per branch",
        "Hosting & support retainer",
        "Optional WhatsApp automation & POS integration",
        "Live demo at your restaurant before you decide",
      ],
    },
    outcomes: [
      "A calm, organised entrance even on weekend peaks",
      "Fewer walk-aways — guests wait comfortably instead of leaving",
      "Better table utilisation with best-fit allocation",
      "Data on wait times and no-shows to plan staffing",
    ],
    screenshots: [
      { src: "/products/smart-queue/tv-display.webp", alt: "Smart Queue restaurant TV token display showing in-process and allocated tokens", caption: "TV display — tokens in process and allocated, with today's QR" },
      { src: "/products/smart-queue/dashboard-queue.webp", alt: "Smart Queue manager dashboard with live waiting list", caption: "Manager dashboard — live queue with one-tap actions" },
      { src: "/products/smart-queue/dashboard-tables.webp", alt: "Smart Queue table map with free, occupied and reserved tables", caption: "Table map — free, reserved, occupied and blocked" },
      { src: "/products/smart-queue/guest-join.webp", alt: "Guest join form on phone after scanning restaurant QR code", caption: "Guest joins from their phone — no app", portrait: true },
      { src: "/products/smart-queue/token-waiting.webp", alt: "Guest token waiting screen showing groups ahead", caption: "Live token with groups ahead", portrait: true },
      { src: "/products/smart-queue/token-tamil.webp", alt: "Smart Queue guest token screen in Tamil", caption: "Available in Tamil, English & Hindi", portrait: true },
    ],
    faqs: [
      {
        question: "What is a restaurant queue management system?",
        answer:
          "A restaurant queue management system replaces paper waiting lists and name-calling. Guests join a digital waitlist (here, by scanning a QR code), see their live position on their phone and a TV, and are alerted when a table is allocated to them.",
      },
      {
        question: "Do guests need to download an app?",
        answer:
          "No. Guests scan the QR code with their phone camera and join from the browser in under 30 seconds, in English, Tamil or Hindi.",
      },
      {
        question: "Can people join the queue from home using an old QR photo?",
        answer:
          "No. The QR code changes every business day and is cryptographically signed, so old photos and forwarded links show 'Link Expired'. Only guests physically at the restaurant can join.",
      },
      {
        question: "Does it work with my billing software?",
        answer:
          "Yes. Your billing/POS can send one simple API call when a bill prints to free the table and allocate the next group automatically. Without integration, staff tap 'Bill done' on the dashboard.",
      },
      {
        question: "How much does Smart Queue cost?",
        answer:
          "Smart Queue is priced as a one-time setup per branch plus a small hosting and support retainer. Contact us on WhatsApp for a quote and a live demo.",
      },
      {
        question: "Can I use it for multiple branches?",
        answer:
          "Yes. Each branch gets its own tables, QR code, TV display link and manager accounts, all under your brand.",
      },
    ],
    relatedBlogs: [
      "restaurant-queue-management-system-guide",
      "whatsapp-marketing-best-practices-2025",
      "custom-software-vs-off-the-shelf-for-smes",
    ],
    relatedCaseStudies: ["gotcha", "jayaram-mittai"],
    locations: ["Chennai", "Erode", "Coimbatore", "Madurai", "Tiruppur", "Salem", "Bengaluru", "Tamil Nadu", "India"],
    accent: "#F5B800",
    status: "Live demo — onboarding restaurants",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
