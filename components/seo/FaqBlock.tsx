import { jsonLd } from "@/lib/site";

export type Faq = { question: string; answer: string };

/** Accessible, no-JS FAQ accordion + FAQPage JSON-LD (AEO-friendly: 40–60 word direct answers). */
export default function FaqBlock({
  faqs,
  title = "Frequently asked questions",
  withSchema = true,
}: {
  faqs: Faq[];
  title?: string;
  withSchema?: boolean;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
  return (
    <section className="py-20" id="faq">
      {withSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />}
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
        <div className="mt-8 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
          {faqs.map((f) => (
            <details key={f.question} className="group p-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold">
                <h3 className="text-base md:text-lg">{f.question}</h3>
                <span className="mt-1 text-[#ff6321] transition group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-gray-600">{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
