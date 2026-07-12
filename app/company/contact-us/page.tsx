import GenericPage from "@/components/GenericPage";
import { Navbar } from "@/components/layout/navbar";
import { FooterSection } from "@/components/layout/sections/footer";

export default function ContactUsPage() {
  return (
    <>
      <Navbar />
      <GenericPage
        badge="Contact"
        title="Let's Build Something Great Together."
        description="Tell us about your business, your goals and the challenges you're facing. We'd love to explore how Adszoo can help."
        sections={[
          {
            title: "Website Development",
            description:
              "Custom websites designed for performance, conversions and long-term growth.",
          },
          {
            title: "SEO",
            description:
              "Improve your Google rankings and generate consistent organic traffic.",
          },
          {
            title: "AI Visibility",
            description:
              "Prepare your business for AI-powered search and discovery.",
          },
          {
            title: "Consultation",
            description:
              "Not sure where to start? We'll help you identify the best strategy.",
          },
        ]}
        ctaTitle="Let's start the conversation."
        ctaDescription="We'll review your enquiry and get back to you as soon as possible."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
      <FooterSection />
    </>
  );
}
