// Hyper-local "digital marketing agency in <area>" pages around our Chromepet
// office. Each page carries area-specific copy (landmarks, business mix, local
// client proof) so they are genuinely useful, not doorway duplicates.

export interface AreaPage {
  slug: string;
  area: string;
  altSpellings?: string[];
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  localContext: string;
  businessMix: string[];
  nearby: string[];
  localProof: { label: string; href: string; text: string }[];
  faqs: { question: string; answer: string }[];
}

export const areaPages: AreaPage[] = [
  {
    slug: "digital-marketing-agency-chromepet",
    area: "Chromepet",
    altSpellings: ["Chrompet", "Chromepet Chennai"],
    metaTitle: "Digital Marketing & Advertising Agency in Chromepet (Chrompet), Chennai | Adszoo",
    metaDescription:
      "Adszoo is a digital marketing & advertising agency in Nehru Nagar, Chromepet (Chrompet), near Vaishnav College on GST Road. Websites, Google & Meta ads, SEO and social media. Walk in, call or WhatsApp.",
    h1: "Digital Marketing & Advertising Agency in Chromepet, Chennai",
    intro:
      "Adszoo's office is in Nehru Nagar, Chromepet (also spelt Chrompet), just off GST Road near Vaishnav College and Chromepet railway station. Chromepet businesses can walk in, meet the people building their website or running their ads, and see results on a screen. No call centre and no offshore team.",
    localContext:
      "Chromepet has grown from its leather-industry roots into one of South Chennai's busiest commercial stretches: GST Road showrooms, hospitals and clinics, coaching centres near MIT and the colleges, hardware and building-material shops, restaurants and messes. Most customers here search on their phones with 'near me' or the area name. That is why we focus on Google Maps rankings, local pages and click-to-call and WhatsApp ads that reach people within a few kilometres.",
    businessMix: ["Clinics, hospitals & diagnostics on GST Road", "Coaching centres & academies near the colleges", "Hardware, aluminium & building-material shops", "Restaurants, messes & sweet shops", "Showrooms & retail on GST Road", "Builders and real estate agents"],
    nearby: ["Nehru Nagar", "Radha Nagar", "Hasthinapuram", "Chitlapakkam", "Pallavaram", "Tambaram", "Keelkattalai", "Nemilichery"],
    localProof: [
      { label: "Srinivasan Chess Academy (Chromepet)", href: "/case-study/srinivasan-chess-academy", text: "Website + local SEO: 164 Google clicks in 3 months and rankings across most Chennai localities." },
      { label: "G.S. Traders (Chitlapakkam)", href: "/case-study/gs-traders", text: "Conversion-focused website for aluminium & UPVC windows, doors and glazing." },
      { label: "Supreme Aluminium (Selaiyur)", href: "/case-study/supreme-aluminium", text: "Local SEO website with 40+ South Chennai area pages." },
    ],
    faqs: [
      { question: "Where is Adszoo's office in Chromepet?", answer: "Adszoo is at 43, Ramachandra Road, Nehru Nagar, Chromepet, Chennai 600044, near Vaishnav College and Chromepet railway station on GST Road. Call +91 63690 50929 or WhatsApp +91 81900 69737 before visiting." },
      { question: "Do you run Google and Facebook ads for shops in Chromepet?", answer: "Yes. We run Google Search, Google Maps and Meta (Facebook/Instagram) ads targeted to a few kilometres around your shop, with click-to-call and WhatsApp buttons so enquiries come straight to your phone." },
      { question: "How long does it take to rank on Google Maps in Chromepet?", answer: "A fully optimised Google Business Profile with regular posts and reviews usually starts improving within 4–8 weeks. Competitive categories on GST Road can take 3–6 months of consistent work." },
    ],
  },
  {
    slug: "digital-marketing-agency-tambaram",
    area: "Tambaram",
    altSpellings: ["East Tambaram", "West Tambaram"],
    metaTitle: "Digital Marketing Agency in Tambaram, Chennai | Websites, SEO & Ads — Adszoo",
    metaDescription:
      "Digital marketing for Tambaram businesses (East & West Tambaram, Camp Road, Selaiyur): websites, Google Maps SEO, Meta & Google ads. Office 10 minutes away in Chromepet.",
    h1: "Digital Marketing Agency for Tambaram Businesses",
    intro:
      "Tambaram is South Chennai's gateway, with the railway terminus, MCC, Camp Road, Sanatorium and fast-growing residential belts towards Mudichur and Perungalathur. Adszoo works from Chromepet, ten minutes up GST Road, and helps Tambaram businesses get found by the families and students moving into the area.",
    localContext:
      "Searches in Tambaram are split between East and West Tambaram and the suburbs behind them, so one 'Chennai' page rarely wins. We build service and area pages that match how people search ('dentist in East Tambaram', 'UPVC windows Tambaram'), keep your Google Business Profile active, and run local ads around the station and Camp Road where footfall is highest.",
    businessMix: ["Builders & real estate along the GST Road belt", "Schools, tuition centres & academies", "Clinics and hospitals", "Hardware, UPVC & aluminium work", "Restaurants and bakeries", "Wedding halls & event services"],
    nearby: ["East Tambaram", "West Tambaram", "Camp Road", "Selaiyur", "Mudichur", "Perungalathur", "Irumbuliyur", "Sanatorium"],
    localProof: [
      { label: "V.V Builders (Padappai/Tambaram)", href: "/case-study/vv-builders", text: "Premium builder website with 16 South Chennai location pages." },
      { label: "Supreme Aluminium (Selaiyur)", href: "/case-study/supreme-aluminium", text: "40+ area pages covering Tambaram, Selaiyur and South Chennai." },
    ],
    faqs: [
      { question: "Do you work with businesses in East and West Tambaram?", answer: "Yes. Our Chromepet office is about ten minutes from Tambaram. We can meet at your shop or clinic, and we build pages and ads for both East and West Tambaram searches." },
      { question: "What is the best way for a Tambaram shop to get more local customers?", answer: "Start with a complete Google Business Profile and genuine reviews, then a fast website with click-to-call and WhatsApp, and finally small Google or Meta ads targeted to a 3–5 km radius." },
    ],
  },
  {
    slug: "digital-marketing-agency-pallavaram",
    area: "Pallavaram",
    metaTitle: "Digital Marketing Agency in Pallavaram, Chennai | SEO, Ads & Websites — Adszoo",
    metaDescription:
      "Websites, Google Maps SEO and local ads for Pallavaram businesses: shops near the Friday market, airport-side services, clinics and builders. Adszoo, Chromepet — next door.",
    h1: "Digital Marketing for Pallavaram Businesses",
    intro:
      "Pallavaram sits between Chromepet and the airport, with its famous Friday market, the cantonment, busy GST Road stretches and a growing number of offices and apartments. Adszoo is right next door in Chromepet. We also built the bilingual civic grievance portal for the Pallavaram constituency office.",
    localContext:
      "Pallavaram customers include airport-side travellers and professionals as well as long-time local families. We set up Google Business Profiles in Tamil and English, write service pages that answer local questions, and run ads that reach people near the airport and Old and New Pallavaram.",
    businessMix: ["Travel, logistics & airport-side services", "Retail & wholesale traders near the market", "Clinics & diagnostic centres", "Builders and interior designers", "Restaurants & cloud kitchens", "Schools & training institutes"],
    nearby: ["Old Pallavaram", "New Pallavaram", "Zamin Pallavaram", "Pammal", "Anakaputhur", "Meenambakkam", "Chromepet", "Thiruneermalai"],
    localProof: [
      { label: "Pallavaram Constituency Grievance Portal", href: "/case-study/pallavaram-grievance-portal", text: "Bilingual, GPS-enabled civic complaint portal for the MLA office." },
      { label: "Srinivasan Chess Academy", href: "/case-study/srinivasan-chess-academy", text: "Local SEO ranking across Pallavaram, Chromepet and most of Chennai." },
    ],
    faqs: [
      { question: "Can Adszoo build a Tamil and English website for my Pallavaram business?", answer: "Yes. We build bilingual Tamil–English websites and Google Business Profiles, like the Pallavaram constituency grievance portal we developed." },
      { question: "Do you offer website design in Pallavaram?", answer: "Yes. Fast, mobile-first websites with WhatsApp and call buttons, built and supported from our office in neighbouring Chromepet." },
    ],
  },
  {
    slug: "digital-marketing-agency-chitlapakkam",
    area: "Chitlapakkam",
    metaTitle: "Social Media Marketing & Digital Marketing in Chitlapakkam, Chennai | Adszoo",
    metaDescription:
      "Social media marketing, websites and Google Maps SEO for Chitlapakkam businesses. Instagram reels, Meta ads and local SEO from Adszoo, two minutes away in Chromepet.",
    h1: "Social Media & Digital Marketing in Chitlapakkam",
    intro:
      "Chitlapakkam is a dense residential neighbourhood between Chromepet and Selaiyur, full of home-run businesses, tuition centres, boutiques and home-improvement services. Adszoo is two minutes away and already works with Chitlapakkam businesses such as G.S. Traders.",
    localContext:
      "In a residential area like Chitlapakkam most customers come from within a few streets, so Instagram reels, local Facebook groups, WhatsApp and Google Maps work better than broad city-wide ads. We plan simple monthly content, shoot reels at your shop or home studio, and run small hyper-local Meta ads.",
    businessMix: ["Home-run food, cakes & catering", "Tuition centres & activity classes", "Boutiques & tailoring", "Windows, doors & home improvement", "Clinics & pharmacies", "Salons & beauty parlours"],
    nearby: ["Chromepet", "Selaiyur", "Hasthinapuram", "Rajakilpakkam", "Sembakkam", "Tambaram", "Madambakkam"],
    localProof: [
      { label: "G.S. Traders (Chitlapakkam)", href: "/case-study/gs-traders", text: "Website for aluminium & UPVC windows, doors and glazing since 2013." },
    ],
    faqs: [
      { question: "Do you provide social media marketing in Chitlapakkam?", answer: "Yes. We plan content, shoot and edit reels, manage Instagram and Facebook, and run small local Meta ads for Chitlapakkam businesses from our Chromepet office nearby." },
      { question: "Is social media or Google better for a small business in Chitlapakkam?", answer: "Use both for different jobs: Google Maps captures people already searching for your service nearby, and Instagram or Facebook builds trust and repeat customers within the neighbourhood." },
    ],
  },
  {
    slug: "digital-marketing-agency-selaiyur",
    area: "Selaiyur",
    metaTitle: "Digital Marketing Agency in Selaiyur, Chennai | Local SEO & Websites — Adszoo",
    metaDescription:
      "Websites, local SEO and ads for Selaiyur and Camp Road businesses: wholesalers, hardware shops, clinics and schools. Proven with Supreme Aluminium, Selaiyur.",
    h1: "Digital Marketing for Selaiyur & Camp Road Businesses",
    intro:
      "Selaiyur and Camp Road have become a commercial strip of their own, with wholesalers, hardware and aluminium shops, schools and clinics along Agaram Main Road. Our client Supreme Aluminium & Hardwares in Selaiyur now has a website with 40+ area pages covering South Chennai.",
    localContext:
      "Trade businesses in Selaiyur sell to fabricators, contractors and homeowners across South Chennai, not just the neighbourhood. So we build product pages and area pages for every locality you deliver to, add WhatsApp ordering, and make sure your Google Business Profile shows the right categories and hours.",
    businessMix: ["Hardware & aluminium wholesalers", "Building materials & paints", "Schools & colleges", "Clinics", "Restaurants & bakeries", "Real estate & builders"],
    nearby: ["Camp Road", "Agaram", "Sembakkam", "Rajakilpakkam", "Madambakkam", "Chitlapakkam", "Tambaram"],
    localProof: [
      { label: "Supreme Aluminium & Hardwares (Selaiyur)", href: "/case-study/supreme-aluminium", text: "11 product categories, 40+ area pages and buying guides." },
    ],
    faqs: [
      { question: "Can my Selaiyur shop rank for areas we deliver to?", answer: "Yes. We create a dedicated page for each area you serve, as we did for Supreme Aluminium, so you can appear for searches in Tambaram, Medavakkam, Velachery and beyond." },
      { question: "Do you also offer billing software for hardware shops?", answer: "Yes. Unizo, our GST billing and inventory software, is built for hardware, aluminium and building-material businesses and works offline or on the cloud." },
    ],
  },
  {
    slug: "digital-marketing-agency-medavakkam",
    area: "Medavakkam",
    metaTitle: "Digital Marketing Agency in Medavakkam, Chennai | Websites, SEO & Ads — Adszoo",
    metaDescription:
      "Digital marketing for Medavakkam, Velachery Road and OMR-side businesses: websites, Google Maps SEO, reels and Meta ads that reach new apartment communities.",
    h1: "Digital Marketing for Medavakkam Businesses",
    intro:
      "Medavakkam has filled up with apartment communities and young families working on OMR and in Velachery. That means demand for clinics, schools, daycare, restaurants, interiors and home services, and plenty of new businesses competing for the same customers.",
    localContext:
      "People moving into Medavakkam search Google and ask in apartment WhatsApp groups before they choose a doctor, school or restaurant. We combine Google Business Profile optimisation, review generation, apartment-targeted Meta ads and fast websites, so you show up in both places.",
    businessMix: ["Clinics, dental & paediatric care", "Schools, daycare & activity centres", "Interior designers", "Restaurants & cloud kitchens", "Fitness studios", "Real estate"],
    nearby: ["Medavakkam Junction", "Perumbakkam", "Pallikaranai", "Madipakkam", "Sholinganallur", "Velachery", "Jalladianpet"],
    localProof: [
      { label: "AB Design Labs", href: "/case-study/ab-design-labs", text: "Location pages for 11+ Chennai neighbourhoods for an interior design firm." },
    ],
    faqs: [
      { question: "How do I reach new apartment residents in Medavakkam?", answer: "Run Meta ads targeted to the apartment clusters, keep your Google Business Profile active with photos and reviews, and offer a simple WhatsApp booking link that residents can share in community groups." },
      { question: "Do you design websites for Medavakkam clinics and schools?", answer: "Yes. Fast, mobile-first websites with booking, WhatsApp and call buttons, plus local SEO so parents and patients find you." },
    ],
  },
];

export function getAreaPage(slug: string) {
  return areaPages.find((a) => a.slug === slug);
}
