// POST /api/product-lead
// Receives product & service enquiries and emails them to adszoo.digital@gmail.com
// Subject: "Product Request Lead — <Product>" (or "Service Enquiry Lead — <Service>").
//
// Delivery order:
//   1. SMTP via nodemailer (SMTP_HOST / SMTP_PORT / SMTP_USER / SMTP_PASS / SMTP_FROM)
//   2. Fallback: Formspree (FORMSPREE_LEAD_ENDPOINT or the site's existing form)
// Leads are also stored in Firestore ("product_leads") when Firebase is configured.

import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const LEAD_INBOX = process.env.LEAD_INBOX || "adszoo.digital@gmail.com";
const FORMSPREE =
  process.env.FORMSPREE_LEAD_ENDPOINT || "https://formspree.io/f/maqpqezz";

type Lead = {
  name: string;
  phone: string;
  email?: string;
  company?: string;
  city?: string;
  interest: string; // product or service name
  kind: "product" | "service";
  message?: string;
  page?: string;
  website?: string; // honeypot
};

function esc(s = "") {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .slice(0, 2000);
}

export async function POST(req: NextRequest) {
  let lead: Lead;
  try {
    lead = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid body" }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields. Pretend success.
  if (lead.website) return NextResponse.json({ ok: true });

  const name = (lead.name || "").trim();
  const phone = (lead.phone || "").trim();
  if (name.length < 2 || phone.replace(/\D/g, "").length < 8 || !lead.interest) {
    return NextResponse.json(
      { ok: false, error: "Please enter your name, a valid phone number and what you're interested in." },
      { status: 400 }
    );
  }

  const label = lead.kind === "service" ? "Service Enquiry Lead" : "Product Request Lead";
  const subject = `${label} — ${lead.interest} — ${name}`;
  const rows: [string, string | undefined][] = [
    ["Interested in", lead.interest],
    ["Name", name],
    ["Phone / WhatsApp", phone],
    ["Email", lead.email],
    ["Company", lead.company],
    ["City", lead.city],
    ["Message", lead.message],
    ["Page", lead.page],
    ["Received", new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })],
  ];
  const text = rows.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`).join("\n");
  const waNumber = phone.replace(/\D/g, "").replace(/^0/, "");
  const waHref = `https://wa.me/${waNumber.length === 10 ? "91" + waNumber : waNumber}`;
  const html = `
    <div style="font-family:system-ui,Segoe UI,Roboto,Arial,sans-serif;color:#0b0b0b">
      <h2 style="margin:0 0 12px;color:#ff6321">${esc(label)}</h2>
      <table cellpadding="6" style="border-collapse:collapse">
        ${rows
          .filter(([, v]) => v)
          .map(([k, v]) => `<tr><td style="color:#666;vertical-align:top">${esc(k)}</td><td><strong>${esc(v)}</strong></td></tr>`)
          .join("")}
      </table>
      <p style="margin-top:16px"><a href="${waHref}" style="background:#25D366;color:#fff;padding:10px 16px;border-radius:999px;text-decoration:none">Reply on WhatsApp</a></p>
    </div>`;

  let delivered = false;

  // 1) SMTP
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    try {
      const port = Number(process.env.SMTP_PORT || 587);
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port,
        secure: port === 465,
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      });
      await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: LEAD_INBOX,
        replyTo: lead.email || undefined,
        subject,
        text,
        html,
      });
      delivered = true;
    } catch (e) {
      console.error("product-lead SMTP failed:", e);
    }
  }

  // 2) Formspree fallback
  if (!delivered) {
    try {
      const res = await fetch(FORMSPREE, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: subject,
          name,
          phone,
          email: lead.email || "",
          company: lead.company || "",
          city: lead.city || "",
          service: lead.interest,
          message: text,
        }),
      });
      delivered = res.ok;
    } catch (e) {
      console.error("product-lead Formspree failed:", e);
    }
  }

  // Optional: persist to Firestore (never blocks the response on failure)
  try {
    const { db } = await import("@/lib/firebaseAdmin");
    if (db) {
      await db.collection("product_leads").add({
        ...lead,
        name,
        phone,
        delivered,
        createdAt: new Date(),
      });
    }
  } catch (e) {
    console.warn("product-lead Firestore skipped:", (e as Error).message);
  }

  if (!delivered) {
    return NextResponse.json(
      { ok: false, error: "We couldn't send your request. Please WhatsApp or call us directly." },
      { status: 502 }
    );
  }
  return NextResponse.json({ ok: true });
}
