import GenericPage from "@/components/GenericPage";
import { Navbar } from "@/components/layout/navbar";
import { FooterSection } from "@/components/layout/sections/footer";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Partner with Adszoo | Agency & Technology Partnerships",
  description: "Partner with Adszoo, Chennai — white-label web development, software and marketing partnerships for agencies, consultants and technology providers.",
  alternates: { canonical: "/company/partners" },
  openGraph: { url: "/company/partners", title: "Partner with Adszoo | Agency & Technology Partnerships", description: "Partner with Adszoo, Chennai — white-label web development, software and marketing partnerships for agencies, consultants and technology providers." },
};



export default function PartnersPage() {
  return (
    <>
      <Navbar />
      <GenericPage
        badge="Partnerships"
        title="Grow Better Together."
        description="We collaborate with agencies, freelancers, consultants and technology partners to deliver outstanding digital solutions."
        sections={[
          {
            title: "Agency Partnerships",
            description:
              "Expand your capabilities with a trusted execution partner.",
          },
          {
            title: "White-label Development",
            description: "Reliable website development under your own brand.",
          },
          {
            title: "Marketing Collaboration",
            description:
              "Combine development, SEO and marketing for better client outcomes.",
          },
          {
            title: "Long-term Relationships",
            description:
              "We believe the best partnerships are built on trust and shared success.",
          },
        ]}
        ctaTitle="Interested in partnering with Adszoo?"
        ctaDescription="Let's explore how we can build something valuable together."
        buttonText="Become a Partner"
        buttonHref="/contact"
      />
      <FooterSection />
    </>
  );
}
