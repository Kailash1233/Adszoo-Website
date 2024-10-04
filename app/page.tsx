import { BenefitsSection } from "@/components/layout/sections/benefits";
// import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
// import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
// import { PricingSection } from "@/components/layout/sections/pricing";
// import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "Adszoo - Best Digital Marketing Agency in Chromepet",
  description:
    "We specialize in empowering your business with a comprehensive suite of digital solutions",
  openGraph: {
    type: "website",
    url: "https://adszoo-website.vercel.app/",
    title: "Adszoo - Digital Marketing Agency",
    description:
      "We specialize in empowering your business with a comprehensive suite of digital solutions",
    images: [
      {
        url: "https://i.ibb.co/jRzxGYd/WebSS.png",
        width: 1200,
        height: 630,
        alt: "Adszoo - Digital Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://adszoo-website.vercel.app/",
    title: "Adszoo - Digital Marketing Agency",
    description:
      "We specialize in empowering your business with a comprehensive suite of digital solutions",
    images: ["https://i.ibb.co/jRzxGYd/WebSS.png"],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <BenefitsSection />
      <FeaturesSection />
      {/* <ServicesSection /> */}
      <TestimonialSection />
      <TeamSection />
      {/* <CommunitySection /> */}
      {/* <PricingSection /> */}
      <ContactSection />
      <FAQSection />
      {/* <FooterSection /> */}
    </>
  );
}
