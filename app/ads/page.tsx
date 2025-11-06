"use client";

import { useState, useMemo } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { Space_Grotesk } from "next/font/google";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import Image from "next/image";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  weight: ["400", "500", "700"],
});

const BRAND_GREEN = "#53D366";
const BOOKING_LINK = "https://cal.com/adszoo/15min";
const PDF_DOWNLOAD_LINK = "/adszoo-web-system.pdf";

type LeadFormData = { name: string; role: string; contact: string };

export default function AdsLanding() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { scrollY } = useScroll();
  const glowOpacity = useTransform(scrollY, [0, 300], [1, 0.2]);

  // Navbar polish
  const bgColor = useTransform(
    scrollY,
    [0, 40, 100],
    ["rgba(0,0,0,0)", "rgba(0,0,0,0.15)", "rgba(0,0,0,0.35)"]
  );
  const borderColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.06)"]
  );
  const paddingY = useTransform(scrollY, [0, 100], [20, 12]);
  const blurValue = useTransform(scrollY, [0, 100], [0, 10]);
  const backdropFilter = useMotionTemplate`blur(${blurValue}px) saturate(160%)`;

  return (
    <div
      className={`min-h-screen bg-black text-zinc-100 ${grotesk.variable} font-sans tracking-tighter`}
    >
      {/* animated backdrop */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            "radial-gradient(60% 40% at 50% 0%, rgba(83,211,102,0.12), transparent 65%), radial-gradient(50% 30% at 20% 10%, rgba(83,211,102,0.10), transparent 60%)",
        }}
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* NAVBAR - refined */}
      <motion.header className="fixed inset-x-0 top-0 z-30">
        <motion.nav
          className="max-w-6xl mx-auto px-6 flex items-center justify-between"
          style={{
            paddingTop: paddingY,
            paddingBottom: paddingY,
            backgroundColor: bgColor,
            borderBottomColor: borderColor,
            borderBottomWidth: 1,
            backdropFilter,
            WebkitBackdropFilter: backdropFilter as any,
          }}
        >
          <a href="/" className="inline-flex items-center gap-3">
            <Image
              src="/Logo1.png"
              alt="Adszoo Logo"
              width={40}
              height={40}
              priority
            />
          </a>

          <div className="flex items-center gap-3">
            <a
              href={BOOKING_LINK}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold text-black shadow-[0_10px_30px_-10px_rgba(83,211,102,0.9)]"
              style={{ backgroundColor: BRAND_GREEN }}
            >
              <HiOutlineChatBubbleLeftRight className="text-black" />
              Need help?
            </a>
          </div>
        </motion.nav>
      </motion.header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* subtle top glow */}
        <motion.div
          aria-hidden
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] rounded-full blur-[110px]"
          style={{
            backgroundColor: "rgba(83,211,102,0.12)",
            opacity: glowOpacity as any,
          }}
        />
        <div className="max-w-5xl mx-auto px-6 pt-28 pb-10 relative z-10">
          <motion.h1
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[32px] md:text-5xl font-semibold tracking-tight leading-[1.15] text-white"
          >
            The exact system top agencies use to build websites that{" "}
            <span className="font-bold">
              <Highlight>print profit, not pixels.</Highlight>
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-6 text-xl text-white/95 font-semibold"
          >
            Download the Playbook: “The Web System Blueprint”
          </motion.p>

          <motion.p
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.14 }}
            className="mt-2 text-base md:text-lg text-zinc-300"
          >
            Learn how 7-figure agencies design web systems that drive sales -
            without endless redesigns, confusion, or wasted spend.
          </motion.p>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8"
          >
            {!submitted ? (
              <LeadForm
                onSubmit={async ({ name, role, contact }) => {
                  setLoading(true);
                  try {
                    const res = await fetch("/api/lead", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        name,
                        role,
                        contact, // email
                        company: "", // honeypot
                      }),
                    });
                    const data = await res.json();
                    if (!res.ok || !data.ok)
                      throw new Error(data?.error || "Submission failed");
                    setSubmitted(true);
                  } catch (e) {
                    console.error(e);
                    alert("Sorry, something went wrong. Please try again.");
                  } finally {
                    setLoading(false);
                  }
                }}
                loading={loading}
              />
            ) : (
              <AfterForm />
            )}
          </motion.div>

          {/* Consent line */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-xs md:text-sm text-zinc-500"
          >
            By submitting, you agree to receive helpful insights from Adszoo.
            (We respect your inbox - no spam ever.)
          </motion.p>

          {/* Service pitch */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-10 rounded-2xl p-5 bg-zinc-900/30 ring-1 ring-white/5"
          >
            <p className="text-zinc-200">
              <strong>
                Want us to build or redesign your website into a web system?
              </strong>
            </p>
            <p className="mt-2 text-zinc-400">
              We’ll handle everything - strategy, design, and launch - built
              exactly to drive revenue. You know where the{" "}
              <span style={{ color: BRAND_GREEN }}>Need help</span> button is.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

/* ---------- UI Bits ---------- */

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block">
      <motion.span
        aria-hidden
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute inset-0 rounded-md"
        style={{
          backgroundColor: BRAND_GREEN,
          transformOrigin: "left center",
          filter: "drop-shadow(0 8px 24px rgba(83,211,102,0.35))",
        }}
      />
      <span className="relative z-10 px-1 py-0.5">{children}</span>
    </span>
  );
}

function LeadForm({
  onSubmit,
  loading,
}: {
  onSubmit: (d: LeadFormData) => void;
  loading: boolean;
}) {
  const [name, setName] = useState("");
  const [role, setRole] = useState<LeadFormData["role"]>("Business");
  const [contact, setContact] = useState("");

  // Subtle container (no heavy borders; soft ring on focus-within)
  const cardBorder = useMemo(
    () => ({
      background:
        "linear-gradient(#0b0b0b,#0b0b0b) padding-box, radial-gradient(100% 100% at 0% 0%, rgba(83,211,102,0.18), rgba(83,211,102,0.05)) border-box",
    }),
    []
  );

  return (
    <motion.form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ name, role, contact });
      }}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative max-w-xl rounded-2xl p-6 md:p-7 shadow-[0_10px_60px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/5 focus-within:ring-emerald-500/30"
      style={{ border: "1px solid transparent", ...cardBorder }}
    >
      <div className="inline-flex items-center gap-2 text-[11px] tracking-wide uppercase text-zinc-400 bg-zinc-900/60 ring-1 ring-white/10 rounded-full px-3 py-1">
        Free Download • PDF
      </div>

      <div className="mt-4 grid gap-3">
        <FloatingInput
          label="Your Name"
          value={name}
          onChange={setName}
          required
        />
        <FloatingSelect
          label="You are a"
          value={role}
          onChange={setRole}
          options={["Business", "Agency", "Freelancer"]}
        />
        <FloatingInput
          label="Email"
          value={contact}
          onChange={setContact}
          required
          type="email"
        />

        {/* Honeypot field - invisible to users */}
        <input
          type="text"
          name="company"
          autoComplete="off"
          tabIndex={-1}
          className="hidden"
          aria-hidden="true"
        />
      </div>

      <motion.button
        type="submit"
        disabled={loading}
        whileTap={{ scale: 0.98 }}
        className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-black font-semibold disabled:opacity-60"
        style={{
          backgroundColor: BRAND_GREEN,
          boxShadow: "0 20px 40px -18px rgba(83,211,102,0.6)",
        }}
      >
        {loading ? <>Preparing your PDF…</> : <>Download now</>}
      </motion.button>

      {/* soft corner glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-6 -right-6 h-24 w-24 rounded-full blur-2xl"
        style={{ backgroundColor: "rgba(83,211,102,0.25)" }}
      />
    </motion.form>
  );
}

function AfterForm() {
  // Clean, text-only confirmation (no box)
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="max-w-2xl"
    >
      <p className="text-zinc-200 text-lg">
        <strong>You’re all set.</strong> The blueprint is in your inbox.
      </p>
      <p className="mt-2 text-zinc-500">
        We’re <span className="text-zinc-300">Adszoo</span> - we don’t build
        websites. We build revenue systems.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <a
          href={PDF_DOWNLOAD_LINK}
          className="px-5 py-2 rounded-xl text-black font-semibold"
          style={{ backgroundColor: BRAND_GREEN }}
        >
          Download again
        </a>
        <a
          href={BOOKING_LINK}
          target="_blank"
          className="px-5 py-2 rounded-xl border"
          style={{ borderColor: BRAND_GREEN, color: BRAND_GREEN }}
        >
          Book a Call
        </a>
      </div>
    </motion.div>
  );
}

/* ---- Inputs ---- */

// Smooth floating label (no overlap). Uses placeholder=" " trick and translates label.
function FloatingInput({
  label,
  value,
  onChange,
  required,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  type?: string;
}) {
  return (
    <label className="relative block">
      <input
        type={type}
        className="peer w-full bg-zinc-950/70 ring-1 ring-inset ring-zinc-800 focus:ring-zinc-700 rounded-xl px-4 py-4 text-zinc-100 outline-none transition placeholder-transparent"
        placeholder=" " // keeps label from overlapping; we animate label instead
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
      />
      <span
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-zinc-500 transition-all
                   peer-focus:top-2 peer-focus:text-xs peer-focus:text-zinc-400
                   peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:text-xs"
      >
        {label}
      </span>
    </label>
  );
}

function FloatingSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <label className="relative block">
      <select
        className="w-full appearance-none bg-zinc-950/70 ring-1 ring-inset ring-zinc-800 focus:ring-zinc-700 rounded-xl px-4 py-4 text-zinc-100 outline-none transition"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      <span className="pointer-events-none absolute left-4 top-2 text-xs text-zinc-400">
        {label}
      </span>
    </label>
  );
}
