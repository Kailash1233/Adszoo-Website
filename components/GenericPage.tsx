import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GenericPageProps {
  badge: string;
  title: string;
  description: string;
  sections: {
    title: string;
    description: string;
  }[];
  ctaTitle: string;
  ctaDescription: string;
  buttonText: string;
  buttonHref: string;
}

export default function GenericPage({
  badge,
  title,
  description,
  sections,
  ctaTitle,
  ctaDescription,
  buttonText,
  buttonHref,
}: GenericPageProps) {
  return (
    <main className="bg-white text-black">
      {/* Hero */}
      <section className="border-b">
        <div className="container mx-auto max-w-7xl px-4 py-24">
          <span className="inline-flex rounded-full bg-[#ff6321]/10 px-4 py-2 text-sm font-semibold text-[#ff6321]">
            {badge}
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-black tracking-tight leading-tight">
            {title}
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-600">
            {description}
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {sections.map((section) => (
              <div
                key={section.title}
                className="rounded-3xl border border-neutral-200 p-8 transition hover:border-[#ff6321] hover:shadow-lg"
              >
                <h2 className="text-2xl font-bold">{section.title}</h2>

                <p className="mt-5 leading-8 text-neutral-600">
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="rounded-[32px] bg-black px-10 py-16 text-center text-white">
            <h2 className="text-4xl font-black">{ctaTitle}</h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
              {ctaDescription}
            </p>

            <Button
              asChild
              className="mt-10 rounded-full bg-[#ff6321] hover:bg-[#e95a1b]"
              size="lg"
            >
              <Link href={buttonHref}>
                {buttonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
