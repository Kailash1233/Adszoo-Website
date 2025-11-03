"use client";

import { useState, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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

type LeadFormData = {
  name: string;
  role: string;
  contact: string;
};

export default function AdsLanding() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // scroll bg parallax
  const { scrollY } = useScroll();
  const glowOpacity = useTransform(scrollY, [0, 300], [1, 0.2]);

  return (
    <div
      className={`min-h-screen bg-black text-zinc-100 ${grotesk.variable} font-sans`}
    >
      {/* soft animated backdrop */}
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

      {/* NAVBAR */}
      <header className="relative z-20">
        <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="/" className="group inline-flex items-center gap-3">
            {/* Logo mark */}
            <Image src="/Logo1.png" alt="Adszoo Logo" width={40} height={40} />
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
        </nav>
      </header>

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
        <div className="max-w-5xl mx-auto px-6 pt-14 pb-10 relative z-10">
          <motion.h1
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[34px] md:text-6xl font-medium tracking-tight leading-[1.07] text-white"
          >
            Your Website Should{" "}
            <span className="text-primary font-bold">
              <Highlight>Make You Money</Highlight>
            </span>
            - Not Cost You.
          </motion.h1>

          <motion.p
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-5 text-lg md:text-xl text-zinc-300"
          >
            Download the setup top web agencies use to build{" "}
            <span className="text-white font-semibold">web systems</span> that
            actually drive revenue.
          </motion.p>

          <motion.p
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-3 text-sm md:text-base text-zinc-500"
          >
            No theory. No BS. Just the exact framework we use to launch sites
            that are clean, fast, and built to sell.
          </motion.p>

          {/* FORM + trust */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10"
          >
            {!submitted ? (
              <LeadForm
                onSubmit={async (data: LeadFormData) => {
                  setLoading(true);
                  // simulate API & then trigger download
                  setTimeout(() => {
                    setSubmitted(true);
                    setLoading(false);
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
          </motion.div>

          {/* trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-8 text-xs md:text-sm text-zinc-500"
          >
            You’ll work 1:1 with us until you’re satisfied. No guesswork. No
            wasted time. No risk.
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
        className="absolute inset-0"
        style={{
          backgroundColor: BRAND_GREEN,
          transformOrigin: "left center",
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

  // gradient ring border for the card
  const cardBorder = useMemo(
    () => ({
      background:
        "linear-gradient(#0b0b0b,#0b0b0b) padding-box, conic-gradient(from 180deg, rgba(83,211,102,0.35), rgba(83,211,102,0.05), rgba(83,211,102,0.35)) border-box",
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
      className="relative max-w-xl rounded-2xl p-6 md:p-7 shadow-[0_10px_60px_-20px_rgba(0,0,0,0.6)]"
      style={{
        border: "1px solid transparent",
        ...cardBorder,
      }}
    >
      {/* badge */}
      <div className="inline-flex items-center gap-2 text-[11px] tracking-wide uppercase text-zinc-400 bg-zinc-900/60 border border-zinc-800 rounded-full px-3 py-1">
        Free Download • PDF
      </div>

      <div className="mt-4 grid gap-3">
        <FloatingInput
          label="your name"
          value={name}
          onChange={setName}
          placeholder="john carter"
          required
        />
        <FloatingSelect
          label="you are a"
          value={role}
          onChange={setRole}
          options={["Business", "Agency", "Freelancer"]}
        />
        <FloatingInput
          label="email or whatsapp"
          value={contact}
          onChange={setContact}
          placeholder="you@example.com / +91…"
          required
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
        {loading ? (
          <>
            <Spinner />
            preparing your pdf…
          </>
        ) : (
          <>Download now</>
        )}
      </motion.button>

      <p className="mt-3 text-[11px] leading-relaxed text-zinc-500">
        By submitting, you agree to be contacted regarding this resource.
      </p>

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="border border-zinc-800 bg-zinc-900/70 p-6 rounded-2xl max-w-xl shadow-[0_10px_60px_-20px_rgba(0,0,0,0.6)]"
    >
      <p className="text-zinc-200">
        <strong>read it.</strong> you’ll see why we don’t just make websites —
        we build <em>web systems</em>.
      </p>
      <p className="mt-2 text-zinc-500">
        we’re <span className="text-zinc-300">adszoo.in</span> — the team behind
        real results.
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

function FloatingInput({
  label,
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="group relative block">
      <input
        className="peer w-full bg-zinc-950/70 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 placeholder-transparent outline-none transition focus:border-zinc-700"
        placeholder={placeholder || label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
      />
      <span className="pointer-events-none absolute left-4 top-3 text-sm text-zinc-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-zinc-500 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-zinc-400 peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:text-xs">
        {label}
      </span>
      <span
        aria-hidden
        className="absolute inset-0 rounded-xl ring-0 group-focus-within:ring-2"
        style={{
          boxShadow: `0 0 0 0px rgba(83,211,102,0), 0 0 0 0 rgba(83,211,102,0)`,
        }}
      />
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
        className="w-full appearance-none bg-zinc-950/70 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 outline-none focus:border-zinc-700"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      <span className="pointer-events-none absolute left-4 -top-3 text-xs text-zinc-400">
        {label}
      </span>
    </label>
  );
}

function Spinner() {
  return (
    <motion.span
      className="inline-block h-[18px] w-[18px] rounded-full border-2 border-black/20"
      style={{ borderTopColor: "black" }}
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
    />
  );
}
