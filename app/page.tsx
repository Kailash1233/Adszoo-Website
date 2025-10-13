import { Navbar } from "@/components/layout/navbar";
import { BenefitsSection } from "@/components/layout/sections/benefits";
import BlogSection from "@/components/layout/sections/blogsection";
// import { CommunitySection } from "@/components/layout/sections/community";
// import { ContactSection } from "@/components/layout/sections/contact";
// import { FAQSection } from "@/components/layout/sections/faq";
// import { FeaturesSection } from "@/components/layout/sections/features";
// import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
// import { PricingSection } from "@/components/layout/sections/pricing";
import ServiceFAQ from "@/components/layout/sections/servicefaq";
// import { ServicesSection } from "@/components/layout/sections/services";
// import { SponsorsSection } from "@/components/layout/sections/sponsors";
// import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";
import LeadPopup from "@/components/LeadPopup";
import DigitalMarketingFAQ from "@/components/ui/digi-faq";
import { GoogleAnalytics } from "@next/third-parties/google";
// import ServicesAccordion from "@/components/ui/service-accordion";

export const metadata = {
  title: "Adszoo - Best Digital Marketing Agency in Chromepet",
  description:
    "We specialize in empowering your business with a comprehensive suite of digital solutions",
  openGraph: {
    type: "website",
    url: "https://adszoo.in/",
    title: "Adszoo - Digital Marketing Agency",
    description:
      "We specialize in empowering your business with a comprehensive suite of digital solutions",
    images: [
      {
        url: "https://www.adszoo.in/Logo1.png",
        width: 1200,
        height: 630,
        alt: "Adszoo - Digital Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://adszoo.in/",
    title: "Adszoo - Digital Marketing Agency",
    description:
      "We specialize in empowering your business with a comprehensive suite of digital solutions",
    images: ["https://www.adszoo.in/Logo1.png"],
  },
};

export default function Home() {
  return (
    <>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-FDVY1D5V41"} />
      <Navbar />
      <HeroSection />
      <LeadPopup />
      {/* <SponsorsSection /> */}
      <BenefitsSection />
      {/* <ServicesAccordion /> */}
      <ServiceFAQ />
      {/* <FeaturesSection /> */}
      {/* <ServicesSection /> */}
      <TestimonialSection />
      {/* <TeamSection /> */}
      {/* <CommunitySection /> */}
      {/* <PricingSection /> */}
      <DigitalMarketingFAQ />
      <BlogSection />
      {/* <ContactSection /> */}
      {/* <FAQSection /> */}
      {/* <FooterSection /> */}
    </>
  );
}
