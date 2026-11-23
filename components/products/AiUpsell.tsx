import Link from "next/link";
import { CONTACT, waLink } from "@/lib/site";

/** Cross-sell: go beyond Google reviews → get recommended by AI assistants. */
export default function AiUpsell() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl bg-gray-950 text-white">
          <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#fdba74]">Go beyond Google</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
                Get recommended by ChatGPT, Gemini, Perplexity &amp; Google AI Overviews
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Customers now ask AI assistants &quot;best dentist in Velachery&quot; or &quot;good hardware shop near
                Tambaram&quot;. AI picks businesses it can verify: consistent details, strong reviews, clear answers
                on your website and mentions on trusted sites. Reviews from your NFC card are step one. We handle the
                rest, so you show up in Google Maps <em>and</em> in AI answers across Chennai.
              </p>
              <ul className="mt-6 grid gap-2 text-gray-200 sm:grid-cols-2">
                {[
                  "AI visibility check: are you mentioned today?",
                  "Google Business Profile & reviews strategy",
                  "Answer-first website pages AI can quote",
                  "Local citations & mentions across Chennai",
                ].map((t) => (
                  <li key={t} className="flex gap-2">
                    <span className="text-green-400">✓</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center gap-3">
              <a
                href={CONTACT.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#ff6321] px-6 py-3.5 text-center font-semibold text-black hover:bg-[#ff7a45]"
              >
                Schedule a free call
              </a>
              <a
                href={waLink("Hi Adszoo, I want my business to be recommended by AI search (ChatGPT, Gemini) and rank higher on Google Maps.")}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#25D366] px-6 py-3.5 text-center font-semibold text-black"
              >
                WhatsApp {CONTACT.productPhone}
              </a>
              <Link href="/seo-aeo-geo-services" className="rounded-full border border-white/30 px-6 py-3.5 text-center font-semibold">
                How AI search optimisation works
              </Link>
              <p className="text-center text-sm text-gray-400">Or call {CONTACT.productPhone}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
