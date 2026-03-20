import { Navbar } from "@/components/layout/navbar";
import { FooterSection } from "@/components/layout/sections/footer";
import Link from "next/link";

export default function MarketingBlog() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* HERO */}
      <section className="py-28 bg-slate-50 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Marketing Insights & Strategies
        </h1>

        <p className="text-slate-600">
          Learn how to grow traffic, generate leads, and improve conversions.
        </p>
      </section>

      {/* BLOG LIST */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          {[
            {
              title: "How to Increase Website Conversions",
              link: "/website-conversion-guide",
            },
            {
              title: "Lead Generation Strategies That Work",
              link: "/lead-generation-guide",
            },
          ].map((post, i) => (
            <div key={i} className="border p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-3">{post.title}</h2>

              <Link href={post.link} className="text-blue-600">
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
