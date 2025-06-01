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
  results: string[];
}

export const caseStudies: CaseStudy[] = [
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
    logoUrl: "/",
    previewImage: "/",
    challenge:
      "They needed a site that highlights their architectural craftsmanship and builds trust across a broad audience, from developers to prospective homeowners.",
    approach:
      "We designed a visually strong, responsive website that combines technical sophistication with elegant aesthetics. Using microinteractions and smooth transitions, we emphasized their philosophy while simplifying navigation and lead generation.",
    results: [],
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
    logoUrl: "/sa-case-study-thumbnail.webp",
    previewImage: "/placeholder.svg?height=400&width=800",
    challenge:
      "They needed a lightweight site with fast image rendering and minimal UI distractions to allow their work to speak for itself.",
    approach:
      "We created a bold and responsive website using modern frontend frameworks, emphasizing visual clarity and gallery performance.",
    results: [],
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
    logoUrl: "/placeholder.svg?height=128&width=128",
    previewImage: "/placeholder.svg?height=400&width=800",
    challenge:
      "To create a trustworthy, distraction-free educational portal for kids and parents with clear course details and scheduling.",
    approach:
      "We created a streamlined site that’s fast and responsive, purpose-built to serve educational content with straightforward navigation.",
    results: [],
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
    turnaround: "Completed",
    stack: ["Vite.js", "React.js", "TailwindCSS", "Framer Motion"],
    industry: ["Manufacturing", "Aluminium"],
    services: ["Development", "UI/UX"],
    scopeOfWork: ["Development", "UI/UX"],
    logoUrl: "/placeholder.svg?height=128&width=128",
    previewImage: "/placeholder.svg?height=400&width=800",
    challenge:
      "They needed to present their aluminium products with clarity and credibility to both technical and executive audiences.",
    approach:
      "We built a polished, performance-focused site with a component-based structure and seamless animations for modern UX.",
    results: [],
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
    logoUrl: "/placeholder.svg?height=128&width=128",
    previewImage: "/placeholder.svg?height=400&width=800",
    challenge:
      "They needed a modern e-commerce site with CMS integration to simplify operations and enable easy updates.",
    approach:
      "We created a robust frontend paired with a Strapi-powered backend, ensuring easy content management and scalability.",
    results: [],
  },
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
    logoUrl: "/placeholder.svg?height=128&width=128",
    previewImage: "/placeholder.svg?height=400&width=800",
    challenge:
      "They needed a lightweight yet impactful platform to share their story and drive donations and volunteer signups.",
    approach:
      "We designed a clean, mission-driven website with clear CTAs and navigation tailored to non-tech-savvy users.",
    results: [],
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
