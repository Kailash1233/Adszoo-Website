// Keyword-focused landing pages for our two priority products (Unizo billing
// software and Smart Queue). Rendered at /software/[slug]. Each page targets a
// specific buyer search with its own copy, FAQ and CTA to the main product.

export interface SolutionPage {
  slug: string;
  product: "unizo" | "smart-queue";
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  eyebrow: string;
  h1: string;
  quickAnswer: string;
  intro: string;
  pains: string[];
  howItHelps: { title: string; description: string }[];
  example?: { title: string; rows: string[][]; note: string };
  visual?: { customer: string; items: { name: string; qty: string; gst: number; amount: number }[] };
  faqs: { question: string; answer: string }[];
}

const U = "unizo" as const;
const Q = "smart-queue" as const;

export const solutionPages: SolutionPage[] = [
  // ---------------- Unizo cluster ----------------
  {
    slug: "billing-software-for-hardware-shop",
    product: U,
    visual: { customer: "Ravi Fabrication Works", items: [
      { name: "SS Hinges 4\" (pair)", qty: "12 pr", gst: 18, amount: 1440 },
      { name: "Wall plug 8mm (box)", qty: "3 box", gst: 18, amount: 450 },
      { name: "Primer 4L", qty: "2 tin", gst: 18, amount: 1960 },
      { name: "Drill bit set HSS", qty: "1 set", gst: 18, amount: 850 },
    ] },
    metaTitle: "Billing Software for Hardware Shop | GST Billing & Stock (Offline/Cloud) — Unizo",
    metaDescription:
      "GST billing software for hardware shops in Chennai & Tamil Nadu: barcode billing, thousands of SKUs, contractor credit, low-stock alerts and HSN reports. Works offline. One-time price. Free demo.",
    keywords: ["billing software for hardware shop", "hardware shop billing software", "hardware store software India", "GST billing software hardware", "hardware shop software Chennai"],
    eyebrow: "Unizo for hardware shops",
    h1: "Billing Software for Hardware Shops — Fast GST Bills, Live Stock, Contractor Credit",
    quickAnswer:
      "Unizo is GST billing and stock software built for hardware shops. It handles thousands of small items (bolts, fittings, tools, paint), bills by item code or barcode in seconds, tracks contractor credit, and alerts you before items run out. It runs offline on your shop PC or on the cloud, for a one-time price.",
    intro:
      "A hardware counter is chaotic: hundreds of tiny items with different GST rates, fabricators and plumbers buying on credit, and walk-in customers who want a bill now. Generic billing apps slow down when the item list grows, and Excel can't tell you what's actually on the shelf.",
    pains: [
      "Searching thousands of SKUs (sizes, brands, finishes) takes too long at the counter",
      "Plumbers, electricians and fabricators buy on credit and payments slip",
      "Stock on paper never matches the shelf, and fast movers run out",
      "Multiple GST rates on one bill make month-end filing painful",
    ],
    howItHelps: [
      { title: "Find any item in a second", description: "Search by code, barcode, name, brand, category or HSN. Exact matches come first, and the keyboard-only flow means F9 saves and prints." },
      { title: "Contractor & dealer pricing", description: "Separate retail, contractor and dealer prices are applied automatically per customer, with role-limited discounts." },
      { title: "Credit limits & statements", description: "See outstanding before you bill, warn on credit-limit breaches, receive part payments, and print statements." },
      { title: "Low-stock alerts", description: "Every sale and purchase updates stock. The dashboard lists items that are running low." },
      { title: "GST reports in minutes", description: "Sales and purchase registers, HSN summary and tax-slab summary, exported to Excel for your auditor." },
      { title: "Works without internet", description: "Installs on your Windows PC with automatic backups. A cloud setup is available for multiple branches." },
    ],
    example: {
      title: "A typical hardware bill in Unizo",
      rows: [["Item", "Qty"], ["Hinges SS 4\" (pair)", "12"], ["Wall plug 8mm (box)", "3"], ["Asian Paints primer 4L", "2"], ["PVC elbow 1\"", "25"]],
      note: "Contractor price applied automatically · added to the customer's credit ledger · printed on 80mm thermal",
    },
    faqs: [
      { question: "Which is the best billing software for a hardware shop?", answer: "Choose software that handles thousands of SKUs with fast search, contractor/dealer pricing, credit tracking, low-stock alerts and GST/HSN reports, and that keeps working when the internet drops. Unizo was built for exactly this and is sold at a one-time price." },
      { question: "Can I import my existing hardware item list?", answer: "Yes. Unizo imports products from Excel/CSV with validation for duplicate codes, GST rates and HSN codes. We do the import for you during setup." },
      { question: "Does it support barcode scanners and thermal printers?", answer: "Yes. Unizo works with USB barcode scanners and prints on A4 or 80mm thermal printers." },
      { question: "Is there a monthly fee?", answer: "No per-user monthly rent. Unizo is a one-time setup and licence, with an optional annual support plan." },
    ],
  },
  {
    slug: "construction-material-billing-software",
    product: U,
    metaTitle: "Construction Material Billing Software | Building Materials GST Billing — Unizo",
    metaDescription:
      "Billing & inventory software for construction material and building-material dealers: cement, sand, jally, bricks, blocks, TMT. Contractor credit, site-wise sales, GST reports. Built for a real dealer in Chengalpattu.",
    keywords: ["construction material billing software", "building material billing software", "construction billing software", "building materials inventory software", "civil material supplier software"],
    eyebrow: "Unizo for building-material dealers",
    h1: "Construction Material Billing Software for Building-Material Dealers",
    quickAnswer:
      "Unizo is billing and inventory software for construction material suppliers: cement, M Sand and P Sand, jally, bricks, blocks, TMT steel and binding wire. It bills in bags, tonnes, units and loads, applies contractor pricing, tracks credit per customer and produces GST reports. It was first built for KVM Agencies, a Chengalpattu supplier since 2002.",
    intro:
      "Building-material businesses sell to homeowners, masons, contractors and builders, often on credit and in mixed units. Daily rates change, trucks go out to sites, and month-end GST and collections become a scramble. Unizo was designed inside exactly this kind of business.",
    pains: [
      "Mixed units: cement in bags, sand in units, steel in tonnes, bricks in thousands",
      "Contractors on running credit with month-end settlements",
      "Daily price changes across brands (UltraTech, Ramco, Dalmia…)",
      "Stock and GST registers maintained manually",
    ],
    howItHelps: [
      { title: "Any unit, any brand", description: "Products by brand, grade and unit, with brand-wise prices and quick bulk price updates when rates change." },
      { title: "Contractor credit ledgers", description: "Running balances, credit limits, part payments and printed statements for every contractor and builder." },
      { title: "Purchases from suppliers", description: "Enter supplier bills with GST; stock, cost and supplier ledger update together." },
      { title: "Reports that matter", description: "Daily sales, payment collection, customer outstanding, stock movement and GST registers." },
      { title: "Offline-first", description: "Billing never stops for power or network issues, with automatic local backups." },
      { title: "Customisable", description: "Need delivery challans, vehicle numbers or site-wise billing? We built Unizo, so we can add it." },
    ],
    example: {
      title: "A typical construction material bill",
      rows: [["Item", "Qty"], ["OPC 53 cement (50kg)", "40 bags"], ["M Sand", "2 units"], ["TMT 12mm Fe550", "0.5 t"], ["Wire-cut bricks", "3,000 nos"]],
      note: "Correct GST per item (multiple slabs on one bill) · contractor credit · outstanding shown before saving",
    },
    faqs: [
      { question: "Is Unizo suitable for civil contractors' billing?", answer: "Unizo is built for businesses that sell construction materials (dealers and suppliers). If you are a civil contractor who needs RA bills or project invoicing, we can customise a module. Talk to us." },
      { question: "Can it handle multiple GST rates on one bill?", answer: "Yes. Each line carries its own GST rate, and bill-level discounts are distributed correctly across slabs." },
      { question: "Is it used by a real construction material dealer?", answer: "Yes. Unizo was first built for KVM Agencies, a construction material supplier in Chengalpattu since 2002." },
    ],
  },
  {
    slug: "cement-steel-dealer-software",
    product: U,
    visual: { customer: "Lakshmi Builders (Dealer rate)", items: [
      { name: "PPC Cement (50kg)", qty: "100 bag", gst: 18, amount: 36000 },
      { name: "TMT 10mm Fe550", qty: "1 t", gst: 18, amount: 59000 },
      { name: "TMT 8mm Fe550", qty: "0.5 t", gst: 18, amount: 30000 },
      { name: "Binding wire", qty: "25 kg", gst: 18, amount: 2250 },
    ] },
    metaTitle: "Cement & Steel Dealer Software | Billing, Stock & Credit for Cement/TMT Dealers — Unizo",
    metaDescription:
      "Software for cement and TMT steel dealers: brand-wise rates, bag/tonne billing, dealer & contractor pricing, credit tracking and GST registers. Offline or cloud. Free demo in Tamil or English.",
    keywords: ["cement dealer software", "steel dealer billing software", "TMT dealer software", "cement shop billing software", "cement agency software Tamil Nadu"],
    eyebrow: "Unizo for cement & steel dealers",
    h1: "Billing & Stock Software for Cement and TMT Steel Dealers",
    quickAnswer:
      "Cement and steel dealers need brand-wise pricing that changes often, billing in bags and tonnes, separate dealer and contractor rates, and tight control of credit. Unizo does all of this with GST registers ready for filing, and it runs offline at the counter.",
    intro:
      "Margins in cement and steel are thin and credit is where dealers lose money. Rates change by brand and by week, and a single wrong rate on a large order can wipe out a day's profit. Unizo keeps prices, stock and outstanding in one place.",
    pains: ["Rates change by brand and by week", "Large credit exposure to contractors and sub-dealers", "Stock by brand and grade hard to track", "Manual GST and HSN summaries"],
    howItHelps: [
      { title: "Bulk price updates", description: "Update rates for a whole brand or category by percentage in one step, with every change logged." },
      { title: "Dealer vs contractor vs retail rates", description: "The right price for each customer type is picked automatically." },
      { title: "Credit control", description: "Credit-limit warnings at billing and an outstanding report every morning." },
      { title: "Brand & grade-wise stock", description: "Stock per brand and grade, with movement history and low-stock alerts." },
    ],
    faqs: [
      { question: "Can I change cement rates quickly when prices move?", answer: "Yes. Unizo supports bulk percentage price updates by category or brand, and every price change is recorded in the audit log." },
      { question: "Does it work for sub-dealers buying on credit?", answer: "Yes. Each sub-dealer or contractor gets a ledger with credit limits, receipts and statements." },
    ],
  },
  {
    slug: "electrical-plumbing-shop-billing-software",
    product: U,
    visual: { customer: "Kumar Electricals (Contractor)", items: [
      { name: "FR wire 1.5 sq mm (90m)", qty: "2 coil", gst: 18, amount: 3600 },
      { name: "Modular switch 6A", qty: "20 nos", gst: 18, amount: 1400 },
      { name: "CPVC elbow 3/4\"", qty: "30 nos", gst: 18, amount: 540 },
      { name: "MCB 32A DP", qty: "2 nos", gst: 18, amount: 1180 },
    ] },
    metaTitle: "Billing Software for Electrical & Plumbing Shops | GST, Stock, Credit — Unizo",
    metaDescription:
      "GST billing software for electrical, plumbing, sanitaryware and pipe shops: thousands of fittings, electrician/plumber credit, barcode billing, low-stock alerts. Offline or cloud. Book a demo.",
    keywords: ["billing software for electrical shop", "plumbing shop billing software", "sanitary shop billing software", "electrical shop software India", "pipe fittings inventory software"],
    eyebrow: "Unizo for electrical & plumbing shops",
    h1: "Billing Software for Electrical, Plumbing & Sanitaryware Shops",
    quickAnswer:
      "Electrical and plumbing shops sell thousands of fittings in many sizes and brands, mostly to electricians and plumbers on credit. Unizo gives you fast search billing, technician credit ledgers, brand-wise stock and GST/HSN reports, offline or on the cloud.",
    intro:
      "Wires by the coil, switches by brand, CPVC fittings by size, and the same plumber visiting three times a day. Electrical and plumbing counters need speed and credit control more than fancy dashboards.",
    pains: ["Thousands of fittings in sizes and brands", "Technicians buying on running credit", "Returns and exchanges of unused items", "Fast movers running out unnoticed"],
    howItHelps: [
      { title: "Fast fitting search", description: "Find items by size, brand or code, with barcode support for packed goods." },
      { title: "Technician ledgers", description: "Credit per electrician and plumber, with part payments and statements." },
      { title: "Clean returns", description: "Sales returns against the original bill put stock back and credit the customer correctly." },
      { title: "Low-stock alerts", description: "Know which fittings to reorder before the weekend rush." },
    ],
    faqs: [
      { question: "Can Unizo handle returns from plumbers and electricians?", answer: "Yes. Pick the original bill, select items and quantities, and stock and the customer's ledger are updated. You can't return more than was sold." },
      { question: "Does it work for sanitaryware and tiles too?", answer: "Yes. Unizo suits any trading business with many SKUs, multiple GST rates and credit customers." },
    ],
  },
  {
    slug: "gst-billing-software-chennai",
    product: U,
    metaTitle: "GST Billing Software in Chennai | Offline & Cloud, One-Time Price — Unizo by Adszoo",
    metaDescription:
      "GST billing & inventory software from a Chennai company: installation, data import and staff training at your shop in Chennai, Chengalpattu & Kanchipuram. Works offline. One-time price. Demo in Tamil/English.",
    keywords: ["GST billing software Chennai", "billing software Chennai", "inventory software Chennai", "billing software Tamil Nadu", "offline billing software Chennai"],
    eyebrow: "Made in Chennai",
    h1: "GST Billing Software in Chennai, with Local Installation and Support",
    quickAnswer:
      "Unizo is GST billing and inventory software built and supported by Adszoo in Chromepet, Chennai. We install it at your shop, import your items, train your staff in Tamil or English, and support you on WhatsApp. It works offline or on the cloud, for a one-time price.",
    intro:
      "Most billing software is sold by call centres in another city. When something goes wrong at 7 PM on a Saturday, you need someone who answers. Unizo is built in Chennai, and our team can be at your counter.",
    pains: ["Call-centre support that doesn't understand your business", "Monthly per-user fees that never end", "Software that stops when the internet drops", "No help migrating your old data"],
    howItHelps: [
      { title: "On-site installation", description: "We install, configure GST and invoice formats, and import your items, customers and balances." },
      { title: "Training in Tamil or English", description: "Hands-on training for billing staff plus a simple SOP guide." },
      { title: "WhatsApp support", description: "A Chennai team that replies. Remote help is available anywhere in Tamil Nadu." },
      { title: "One-time pricing", description: "One licence and setup fee, plus optional yearly support." },
    ],
    faqs: [
      { question: "Which areas in Chennai do you install billing software in?", answer: "All of Chennai: Chromepet, Tambaram, Pallavaram, Velachery, T Nagar, Anna Nagar, Ambattur, Porur, OMR and the suburbs, plus Chengalpattu and Kanchipuram districts. Remote setup is available across Tamil Nadu." },
      { question: "Can I see a demo before buying?", answer: "Yes. We show a free live demo with sample data from a shop like yours, on WhatsApp video or in person in Chennai." },
    ],
  },
  // ---------------- Smart Queue cluster ----------------
  {
    slug: "restaurant-queue-management-system-chennai",
    product: Q,
    metaTitle: "Restaurant Queue Management System in Chennai | QR Waitlist & TV Tokens — Smart Queue",
    metaDescription:
      "Restaurant queue management system for Chennai restaurants, messes and cafés: QR waitlist, TV token display, auto table allocation and phone alerts. Tamil, English & Hindi. Live demo at your restaurant.",
    keywords: ["restaurant queue management system Chennai", "restaurant waiting list system Chennai", "queue management system for restaurants", "restaurant token system Chennai", "hotel waiting list app Chennai"],
    eyebrow: "Smart Queue · Chennai",
    h1: "Restaurant Queue Management System for Chennai Restaurants",
    quickAnswer:
      "Smart Queue is a QR-based restaurant queue management system from Adszoo, Chennai. Guests scan a QR at your entrance, join the waitlist in Tamil, English or Hindi, watch their token on a TV and get a phone alert when a table is ready. Managers allocate best-fit tables from a tablet. We set it up and demo it at your restaurant.",
    intro:
      "From weekend biryani queues in Velachery to Sunday lunch crowds in T Nagar and family dinners on GST Road, Chennai's popular restaurants lose guests every weekend to chaos at the door. Smart Queue replaces shouting names and paper lists with a calm, fair system.",
    pains: ["Managers shouting names over the crowd", "Guests arguing about who came first", "Small groups blocking large tables", "Walk-aways to the restaurant next door"],
    howItHelps: [
      { title: "QR join, no app", description: "Guests scan and join in 20 seconds. The QR changes daily so nobody joins from home." },
      { title: "TV token display", description: "'In process' and 'Allocated' tokens with a chime and voice call-out on any smart TV." },
      { title: "Best-fit tables", description: "First come, first served without wasting an 8-seater on a party of two." },
      { title: "Phone alerts", description: "Guests wait in their car or nearby and come back when their table is ready." },
      { title: "Tamil, English, Hindi", description: "Guest screens in the language your customers prefer." },
      { title: "Multi-branch", description: "Each branch gets its own tables, QR, TV link and managers." },
    ],
    faqs: [
      { question: "Can you install Smart Queue at my restaurant in Chennai?", answer: "Yes. We configure your tables, set up the TV display, print the QR poster and train your managers, anywhere in Chennai. Usually it's done in a day." },
      { question: "Does it work for messes and South Indian 'hotels'?", answer: "Yes. It was demoed for a well-known mess, and it handles fast table turnover and large family groups." },
      { question: "What do I need to run it?", answer: "Any smart TV or streaming stick for the display, and a tablet or phone for the manager. Guests use their own phones." },
    ],
  },
  {
    slug: "restaurant-waitlist-app",
    product: Q,
    metaTitle: "Restaurant Waitlist App (No Download) | QR Waiting List for Restaurants — Smart Queue",
    metaDescription:
      "A restaurant waitlist that guests join by scanning a QR. No app download. Live position, phone alerts, WhatsApp sharing and best-fit table allocation. For restaurants across India.",
    keywords: ["restaurant waitlist app", "waiting list app for restaurants", "QR code waiting list", "virtual queue for restaurants", "digital waitlist India"],
    eyebrow: "Smart Queue · Digital waitlist",
    h1: "A Restaurant Waitlist App Your Guests Don't Need to Download",
    quickAnswer:
      "Smart Queue works like a waitlist app without the download. Guests scan a QR code, enter name, party size and phone, and see their live position in the browser. They're alerted when their table is ready and can share their token on WhatsApp. You manage it all from a tablet.",
    intro:
      "Most guests won't install an app to wait 20 minutes. Browser-based waitlists remove that friction completely and work on every phone.",
    pains: ["Guests refuse to install apps", "Paper lists get lost or misread", "No idea how many guests walk away", "Hosts overwhelmed at peak hours"],
    howItHelps: [
      { title: "Join in 20 seconds", description: "Scan, fill three fields, done. Works on any Android or iPhone." },
      { title: "Live position", description: "Guests see how many groups are ahead, which reduces 'how long?' questions at the desk." },
      { title: "Alerts & WhatsApp", description: "Phone alerts when the table is ready, plus a share-on-WhatsApp button." },
      { title: "Reports", description: "Tokens per hour, average wait and no-shows to plan staffing." },
    ],
    faqs: [
      { question: "Is there an app to download?", answer: "No. Guests use their phone browser after scanning the QR code. Managers use the dashboard on any tablet or PC." },
      { question: "Can guests join remotely?", answer: "No. The QR rotates daily and is signed, so only guests at the restaurant can join, which keeps no-shows low." },
    ],
  },
  {
    slug: "token-display-system-for-restaurants",
    product: Q,
    metaTitle: "Token Display System for Restaurants | TV Token Screen with Voice Call-out — Smart Queue",
    metaDescription:
      "TV token display system for restaurants, messes and food courts: big token numbers, chime & voice announcements, daily QR on screen. Runs on any smart TV. Includes manager dashboard.",
    keywords: ["token display system for restaurant", "restaurant token display TV", "token system for hotel", "queue token display", "food court token system"],
    eyebrow: "Smart Queue · TV token display",
    h1: "Token Display System for Restaurants and Food Courts",
    quickAnswer:
      "Smart Queue's token display turns any smart TV into a queue board: tokens 'In process' and 'Allocated' in large numbers, a chime with a voice announcement, and today's QR code so new guests can join. It's driven by the manager's dashboard and the guests' phones.",
    intro:
      "Traditional token machines print paper slips and need a person calling numbers. A TV display linked to guests' phones is clearer, quieter and works for both dine-in waitlists and counter pick-ups.",
    pains: ["Paper token slips and dedicated hardware", "Staff shouting token numbers", "Guests crowding the counter to check their turn"],
    howItHelps: [
      { title: "Any smart TV", description: "Open the display link in the TV browser, a Fire TV stick or a mini PC, then tap once for sound and full screen." },
      { title: "Voice + chime", description: "Each allocation is announced so guests notice even from a distance." },
      { title: "QR on screen", description: "New guests scan from the TV, so you don't need a printed poster." },
    ],
    faqs: [
      { question: "Do I need special token hardware?", answer: "No. Any smart TV or streaming stick works, and guests use their own phones." },
      { question: "Can it work for takeaway counters?", answer: "Yes. Use it to call out ready orders by token for counters and food courts." },
    ],
  },
  {
    slug: "clinic-token-queue-system",
    product: Q,
    metaTitle: "Clinic & Hospital Token System | QR Patient Queue with Phone Alerts — Smart Queue",
    metaDescription:
      "Patient token and queue system for clinics, hospitals and diagnostic centres: QR check-in, TV token display, phone alerts and reports. Calmer waiting rooms. Set up by Adszoo, Chennai.",
    keywords: ["clinic token system", "hospital queue management system", "patient token display system", "OPD queue management", "clinic waiting list app"],
    eyebrow: "Smart Queue for clinics",
    h1: "Token & Queue System for Clinics, Hospitals and Diagnostic Centres",
    quickAnswer:
      "Smart Queue's queue engine also works for clinics. Patients scan a QR to check in, get a token, see their position on a TV and their phone, and are alerted when it's their turn, so waiting rooms stay calm and patients can wait outside.",
    intro:
      "Crowded OPD waiting rooms, receptionists repeatedly answering 'how long?', and patients missing their turn are the same problem restaurants have. We adapt Smart Queue's token flow to doctors and counters instead of tables.",
    pains: ["Crowded waiting rooms", "Repeated 'how long?' questions at reception", "Patients missing their turn", "No data on waiting times"],
    howItHelps: [
      { title: "QR check-in", description: "Patients join the queue from their phone. Reception can add walk-ins." },
      { title: "TV + phone tokens", description: "Clear token display and alerts when it's their turn." },
      { title: "Per-doctor queues", description: "Configure doctors or counters the way tables are configured." },
      { title: "Reports", description: "Average waits and peak hours for better scheduling." },
    ],
    faqs: [
      { question: "Is Smart Queue ready for clinics out of the box?", answer: "The core works today; we configure doctors or counters in place of tables and adjust the wording during setup. Talk to us for a demo." },
    ],
  },
];

export function getSolutionPage(slug: string) {
  return solutionPages.find((s) => s.slug === slug);
}
