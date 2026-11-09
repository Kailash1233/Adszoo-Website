import { CaseStudyPreview } from "@/components/CaseStudySection";
import { Navbar } from "@/components/layout/navbar";
import { BenefitsSection } from "@/components/layout/sections/benefits";
import BlogSection from "@/components/layout/sections/blogsection";
import { CommunitySection } from "@/components/layout/sections/community";
// import { ContactSection } from "@/components/layout/sections/contact";
// import { FAQSection } from "@/components/layout/sections/faq";
// import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
// import { PricingSection } from "@/components/layout/sections/pricing";
import ServiceFAQ from "@/components/layout/sections/servicefaq";
// import { ServicesSection } from "@/components/layout/sections/services";
// import { SponsorsSection } from "@/components/layout/sections/sponsors";
// import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";
import LeadPopup from "@/components/LeadPopup";
import HomeServicesProducts from "@/components/HomeServicesProducts";
import type { Metadata } from "next";
import { blogPosts } from "@/lib/blog-posts";
import DigitalMarketingFAQ from "@/components/ui/digi-faq";
// import ServicesAccordion from "@/components/ui/service-accordion";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: "Adszoo | Website Development, SEO & Software Company in Chennai",
  description:
    "Chennai digital marketing & software company: conversion-focused websites, custom web & mobile apps, social media marketing and SEO/AEO/GEO that generates B2B leads for manufacturers. Free consultation.",
  openGraph: {
    type: "website",
    url: "/",
    title: "Adszoo | Websites, Software, SEO & Social Media that Bring Enquiries",
    description:
      "Conversion-focused websites, custom software, SEO/AEO/GEO for manufacturers and social media marketing — from Chromepet, Chennai.",
    images: [{ url: "/Logo1.png", width: 600, height: 600, alt: "Adszoo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adszoo | Website Development, SEO & Software Company in Chennai",
    description:
      "Conversion-focused websites, custom software, SEO/AEO/GEO and social media marketing.",
    images: ["/Logo1.png"],
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      {/* <SponsorsSection /> */}
      <HomeServicesProducts />
      <BenefitsSection />
      <CaseStudyPreview />
      {/* <ServicesAccordion /> */}
      {/* <FeaturesSection /> */}
      {/* <ServicesSection /> */}
      <TestimonialSection />
      {/* <TeamSection /> */}
      <CommunitySection />
      <ServiceFAQ />
      {/* <PricingSection /> */}
      <DigitalMarketingFAQ />
      <BlogSection
        posts={blogPosts.slice(0, 3).map(({ slug, title, description, image, date, readTime, author }) => ({
          slug, title, description, image, date, readTime, author, href: `/blogs/${slug}`,
        }))}
      />
      {/* <ContactSection /> */}
      {/* <FAQSection /> */}
      <FooterSection />
      <LeadPopup />
    </>
  );
}
