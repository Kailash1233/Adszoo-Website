import GenericPage from "@/components/GenericPage";
import { Navbar } from "@/components/layout/navbar";
import { FooterSection } from "@/components/layout/sections/footer";

export default function ClientSuccessStoriesPage() {
  return (
    <>
      <Navbar />
      <GenericPage
        badge="Success Stories"
        title="Real Businesses. Real Results."
        description="Discover how Adszoo helps businesses grow through websites, SEO, AI visibility, branding and digital marketing."
        sections={[
          {
            title: "Website Development",
            description:
              "Fast, conversion-focused websites built for measurable business growth.",
          },
          {
            title: "Search Engine Optimization",
            description:
              "Long-term SEO strategies that improve rankings and generate qualified leads.",
          },
          {
            title: "AI Visibility",
            description:
              "Helping businesses become discoverable on ChatGPT, Gemini and Perplexity.",
          },
          {
            title: "Digital Growth",
            description:
              "Every strategy is focused on increasing enquiries, revenue and long-term visibility.",
          },
        ]}
        ctaTitle="Ready to become our next success story?"
        ctaDescription="Let's discuss how we can help your business achieve measurable digital growth."
        buttonText="Schedule a Call"
        buttonHref="/contact"
      />
      <FooterSection />
    </>
  );
}
