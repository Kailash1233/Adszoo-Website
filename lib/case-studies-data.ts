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
    website: "https://vizhipomvidhaipom.org/",
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
    website: "https://srinivasan-chess.vercel.app/",
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
    website: "https://supremealuminium.com/",
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
    website: "https://getnura.shop/",
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
