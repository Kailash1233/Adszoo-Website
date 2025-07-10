export interface CaseStudy {
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
    id: "6",
    title: "Vizhipom Vidhaipom",
    slug: "vizhipom-vidhaipom",
    description:
      "Vizhipom Vidhaipom, an NGO focused on education and empowerment, needed a digital space to share their mission and attract donors and volunteers. Their primary goal was to communicate impact while simplifying navigation for diverse users.",
    shortDescription: "Mission-driven website for an educational NGO",
    client: "Vizhipom Vidhaipom",
    turnaround: "Completed",
    stack: ["HTML", "CSS", "JavaScript", "PHP"],
    industry: ["NGO", "Social Sector"],
    services: ["Web Design", "Development"],
    scopeOfWork: ["Web Design", "Development"],
    logoUrl: "/CaseStudy/6.webp",
    previewImage: "/casestudy-websites/VizhipomVidhaipom.png",
    challenge:
      "They needed a simple website to share what they do, encourage donations, and help more people get involved — all while being easy for anyone to use.",
    approach:
      "We built a clean and lightweight site with clear messaging, simple navigation, and strong calls to action for donations and volunteering",
    results:
      "The site became a useful platform for sharing their mission, collecting donations, and helping volunteers reach out easily.",
  },
  {
    id: "1",
    title: "Eswari Builders",
    slug: "eswari-builders",
    description:
      "Eswari Builders approached us to create a sleek, modern website that reflects their legacy and craftsmanship in the construction sector. With a history rooted in trust and architectural excellence, the new digital presence needed to highlight their portfolio, services, and credibility—while remaining intuitive for their diverse audience.",
    shortDescription:
      "Modern website reflecting legacy and craftsmanship of a construction firm",
    client: "Eswari Builders",
    turnaround: "Completed",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    industry: ["Construction", "Real Estate"],
    services: ["Web Design", "UI/UX", "Development"],
    scopeOfWork: ["Web Design", "UI/UX", "Development"],
    logoUrl: "/CaseStudy/1.webp",
    previewImage: "/casestudy-websites/Eswari Builders.png",
    challenge:
      "They wanted a modern site that showcases their past work, reflects their brand's credibility, and speaks to both homeowners and commercial clients.",
    approach:
      "We designed a sleek, responsive website that focuses on visuals and smooth experience, while keeping the content clear and professional.",
    results:
      "The new site built trust with visitors, gave them a strong online presence, and helped potential clients understand their services better.",
  },
  {
    id: "2",
    title: "GafClickz",
    slug: "gafclickz",
    description:
      "GafClickz, a creative photography brand, needed a fast, image-forward portfolio site that reflects their dynamic style. They came to us with a clear vision—minimal distractions, quick loading, and seamless gallery displays.",
    shortDescription:
      "Fast, bold and responsive portfolio for photography brand",
    client: "GafClickz",
    turnaround: "Completed",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    industry: ["Photography"],
    services: ["Development"],
    scopeOfWork: ["Web Development"],
    logoUrl: "/CaseStudy/2.webp",
    previewImage: "/casestudy-websites/GafClickz.png",
    challenge:
      "As a photography brand, they needed a fast-loading portfolio where their pictures could speak for themselves, without too many distractions.",
    approach:
      "We built a minimal, performance-first website with focus on galleries, so that users could scroll through photos seamlessly.",
    results:
      "They now have a fast and stylish portfolio that makes their work shine, and helps them share it easily with clients.",
  },
  {
    id: "3",
    title: "Srinivasan Chess Academy",
    slug: "srinivasan-chess-academy",
    description:
      "The Srinivasan Chess Academy wanted a simple and clear digital platform to engage students and chess enthusiasts. They needed a digital identity that could host schedules, display course details, and build trust with parents.",
    shortDescription:
      "Educational platform to host schedules and courses for a chess academy",
    client: "Srinivasan Chess Academy",
    turnaround: "Completed",
    stack: ["React.js", "CSS", "JavaScript"],
    industry: ["Education", "Chess Academy"],
    services: ["Development"],
    scopeOfWork: ["Development"],
    logoUrl: "/CaseStudy/3.webp",
    previewImage: "/casestudy-websites/SrinivasanChessAcademy.png",
    challenge:
      "They needed a basic, trustable website that parents and students could use to see class schedules and understand what’s being offered.",
    approach:
      "We kept it simple — fast-loading pages, clear course info, and easy access to updates or new sessions.",
    results:
      "The website made it easier for parents to engage with the academy and for the team to share class details with their audience.",
  },
  {
    id: "4",
    title: "Supreme Aluminium",
    slug: "supreme-aluminium",
    description:
      "Supreme Aluminium needed a high-impact digital interface to reflect the precision and quality of their aluminium works. The website had to balance corporate appeal with technical content, without compromising on performance.",
    shortDescription:
      "Corporate website for a high-precision aluminium company",
    client: "Supreme Aluminium",
    turnaround: "Ongoing",
    stack: ["Vite.js", "React.js", "TailwindCSS", "Framer Motion"],
    industry: ["Manufacturing", "Aluminium"],
    services: ["Development", "UI/UX"],
    scopeOfWork: ["Development", "UI/UX"],
    logoUrl: "/CaseStudy/7.webp",
    previewImage: "/CaseStudy/7.webp",
    challenge:
      "They wanted to show their aluminium product range clearly — but also look polished and professional to business clients.",
    approach:
      "We created a clean, structured website with smooth animations and a balance of visuals and technical info.",
    results:
      "The final site helped them present their brand better online, especially when sharing it with corporate leads or during pitches.",
  },
  {
    id: "5",
    title: "KVM CMart",
    slug: "kvm-cmart",
    description:
      "KVM CMart needed a user-friendly platform for selling construction raw materials online. The challenge was to modernize a traditional industry with an interface that supports discovery, browsing, and backend CMS integration.",
    shortDescription:
      "Construction materials e-commerce platform with CMS backend",
    client: "KVM CMart",
    turnaround: "Completed",
    stack: ["Vite.js", "TailwindCSS", "Framer Motion", "Strapi", "Node.js"],
    industry: ["Construction", "E-Commerce"],
    services: ["Development", "Web Design"],
    scopeOfWork: ["Development", "Web Design"],
    logoUrl: "/CaseStudy/4.webp",
    // previewImage: "/casestudy-websites/KVMCMart.png",
    previewImage: "/casestudy-websites/Portfolio-KVM.png",
    challenge:
      "They needed a website to sell construction materials — something easy to use, yet powerful enough to manage inventory and updates.",
    approach:
      "We designed an e-commerce site with a content management system (CMS), so they could handle everything without needing to code.",
    results:
      "The team now runs their business online, updates products easily, and offers a smoother buying experience to their customers.",
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
