"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const PHONE = "+916369050929";
const WHATSAPP = `https://wa.me/91${PHONE.replace(/\D/g, "").slice(0)}`;
const BOOKING_LINK = "https://cal.com/adszoo/strategy-call"; // replace if needed
const PDF_DOWNLOAD_LINK = "/adszoo-web-system.pdf"; // keep inside /public

type LeadFormData = {
  name: string;
  role: string;
  contact: string;
};

export default function AdsLanding() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-black text-zinc-100">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_70%)]" />
        <div className="max-w-4xl mx-auto px-6 pt-24 pb-16 relative z-10">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white"
          >
            your website should{" "}
            <span className="underline decoration-emerald-500">
              make you money
            </span>{" "}
            — not cost you.
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg md:text-xl text-zinc-400"
          >
            download the setup top web agencies use to build web systems that
            actually drive revenue.
          </motion.p>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-sm md:text-base text-zinc-500"
          >
            no theory. no bs. just the exact framework we use to build sites
            that work — clean, fast, and built to sell.
          </motion.p>

          {/* FORM SECTION */}
          <div className="mt-10">
            {!submitted ? (
              <LeadForm
                onSubmit={async (data: LeadFormData) => {
                  setLoading(true);
                  setTimeout(() => {
                    setSubmitted(true);
                    setLoading(false);
                    // Trigger PDF download only after submission
                    const link = document.createElement("a");
                    link.href = PDF_DOWNLOAD_LINK;
                    link.download = "AdsZOO-WebSystem.pdf";
                    link.click();
                  }, 900);
                }}
                loading={loading}
              />
            ) : (
              <AfterForm />
            )}
          </div>
        </div>
      </section>

      {/* WHY IT WORKS */}
      <SectionWrapper>
        <SectionHeader
          title="clean. fast. built to sell."
          subtitle="we design revenue-first websites and funnels that convert attention into customers."
        />
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <ValueCard
            title="clarity over clutter"
            desc="a focused message, above-the-fold offer, and frictionless contact path."
          />
          <ValueCard
            title="conversion thinking"
            desc="copy, layout, and ctas crafted using funnel psychology that works."
          />
          <ValueCard
            title="data & iteration"
            desc="tracking, heatmaps, and fast cycles to keep improving results."
          />
        </div>
      </SectionWrapper>

      {/* WHAT'S INSIDE PDF */}
      <SectionWrapper bg="muted">
        <SectionHeader
          title="what you'll get inside"
          subtitle="use this plug-and-play framework to build a site that performs."
        />
        <ul className="mt-6 space-y-3 text-zinc-400 text-sm md:text-base">
          <li>• a proven website architecture used by top agencies</li>
          <li>• high-converting page blocks and ctas you can copy</li>
          <li>• lead capture + nurture flow (email & whatsapp)</li>
          <li>• performance checklist: speed, seo, analytics</li>
          <li>• sample copy + the exact launch sequence we use</li>
        </ul>

        {/* CTA */}
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            onClick={() => alert("fill the form above to get instant access")}
            className="px-5 py-3 bg-emerald-600 text-white rounded-lg disabled:opacity-70"
            disabled={!submitted}
          >
            {submitted ? "download again" : "download the pdf"}
          </button>
          <a
            href={WHATSAPP}
            target="_blank"
            className="px-5 py-3 border border-emerald-600 text-emerald-400 rounded-lg"
          >
            ask a quick question ↗
          </a>
        </div>
      </SectionWrapper>

      {/* PROOF / CASES */}
      <SectionWrapper>
        <SectionHeader
          title="proof it works"
          subtitle="a few outcomes we've helped create for clients."
        />
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <ProofCard kpi="+150%" desc="more qualified leads in 90 days." />
          <ProofCard kpi="3x" desc="increase in inbound inquiries." />
          <ProofCard kpi="-40%" desc="lower cost per acquisition." />
        </div>
      </SectionWrapper>

      {/* PROCESS */}
      <SectionWrapper bg="muted">
        <SectionHeader
          title="how we build it"
          subtitle="straightforward, fast, and measurable."
        />
        <ol className="mt-6 grid md:grid-cols-3 gap-6 text-zinc-400">
          <ProcessStep
            step="01"
            title="strategy & wireframe"
            desc="map your offer, audience, and conversion path."
          />
          <ProcessStep
            step="02"
            title="design & build"
            desc="clean ui, fast pages, copy that sells."
          />
          <ProcessStep
            step="03"
            title="launch & optimize"
            desc="ship, test, iterate. keep what works."
          />
        </ol>
      </SectionWrapper>

      {/* TESTIMONIALS */}
      <SectionWrapper>
        <SectionHeader title="what clients say" />
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <Quote
            text="the site went from a brochure to a pipeline. calls doubled in 30 days."
            author="founder, service business"
          />
          <Quote
            text="adszoo kept it simple — and it worked. finally a website that pulls weight."
            author="owner, d2c brand"
          />
        </div>
      </SectionWrapper>

      {/* FINAL CTA */}
      <section className="py-16 text-center bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold">
            When you&apos;re ready to build yours, let&apos;s talk.
          </h2>
          <p className="mt-3 text-emerald-100">
            We&apos;ll map your funnel, show you the plan, and start where it
            the most revenue first.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <a
              href={BOOKING_LINK}
              className="px-6 py-3 bg-white text-emerald-700 rounded-lg font-medium"
            >
              book a call
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              className="px-6 py-3 border border-white rounded-lg"
            >
              whatsapp us
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-xs text-zinc-600">
        we’re <span className="text-zinc-300">adszoo.in</span> — the team behind
        real results.
      </footer>
    </div>
  );
}

/* ---------- Reusable UI Components ---------- */

function LeadForm({ onSubmit, loading }: any) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("Business");
  const [contact, setContact] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ name, role, contact });
      }}
      className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 backdrop-blur-sm max-w-xl"
    >
      <div className="text-sm font-medium text-zinc-300">get the pdf</div>
      <div className="mt-3 grid gap-3">
        <input
          className="w-full bg-black border border-zinc-700 rounded px-3 py-2 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          placeholder="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select
          className="w-full bg-black border border-zinc-700 rounded px-3 py-2 text-zinc-100 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option>Business</option>
          <option>Agency</option>
          <option>Freelancer</option>
        </select>
        <input
          className="w-full bg-black border border-zinc-700 rounded px-3 py-2 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          placeholder="email or whatsapp"
          required
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="mt-4 w-full px-4 py-3 bg-emerald-600 hover:bg-emerald-700 transition text-white font-medium rounded disabled:opacity-50"
      >
        {loading ? "preparing your pdf…" : "download now"}
      </button>
      <p className="mt-2 text-xs text-zinc-500">
        by submitting, you agree to be contacted regarding this resource.
      </p>
    </form>
  );
}

function AfterForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="border border-zinc-800 bg-zinc-900/70 p-6 rounded-xl max-w-xl"
    >
      <p className="text-zinc-200">
        <strong>read it.</strong> you’ll see why we don’t just make websites —
        we build <em>web systems</em>.
      </p>
      <p className="mt-2 text-zinc-500">
        we’re <span className="text-zinc-300">adszoo.in</span> — the team behind
        real results.
      </p>
      <div className="mt-4 flex gap-3">
        <a
          href={PDF_DOWNLOAD_LINK}
          className="px-5 py-2 bg-emerald-600 text-white rounded"
        >
          download again
        </a>
        <a
          href={WHATSAPP}
          target="_blank"
          className="px-5 py-2 border border-emerald-600 text-emerald-400 rounded"
        >
          whatsapp us
        </a>
      </div>
    </motion.div>
  );
}

function SectionWrapper({ children, bg }: any) {
  return (
    <section className={bg === "muted" ? "bg-zinc-950 py-16" : "py-16"}>
      <div className="max-w-5xl mx-auto px-6">{children}</div>
    </section>
  );
}

function SectionHeader({ title, subtitle }: any) {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-extrabold text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-zinc-500 text-sm md:text-base">{subtitle}</p>
      )}
    </div>
  );
}

function ValueCard({ title, desc }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="border border-zinc-800 bg-zinc-900 p-5 rounded-xl"
    >
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm text-zinc-500 mt-2">{desc}</p>
    </motion.div>
  );
}

function ProofCard({ kpi, desc }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="border border-zinc-800 bg-zinc-900 p-5 rounded-xl"
    >
      <div className="text-3xl font-extrabold text-white">{kpi}</div>
      <p className="text-sm text-zinc-500 mt-2">{desc}</p>
    </motion.div>
  );
}

function ProcessStep({ step, title, desc }: any) {
  return (
    <div className="border border-zinc-800 bg-zinc-900 p-5 rounded-xl">
      <div className="text-xs uppercase text-zinc-500">step {step}</div>
      <div className="text-white font-semibold mt-2">{title}</div>
      <p className="text-sm text-zinc-500 mt-2">{desc}</p>
    </div>
  );
}

function Quote({ text, author }: any) {
  return (
    <motion.blockquote
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="p-6 border border-zinc-800 bg-zinc-900 rounded-xl"
    >
      <p className="text-zinc-200">“{text}”</p>
      <footer className="mt-3 text-xs text-zinc-500">— {author}</footer>
    </motion.blockquote>
  );
}
