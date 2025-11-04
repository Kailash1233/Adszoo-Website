// /app/api/lead/route.ts
import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebaseAdmin";
import path from "path";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const { name, role, contact } = await req.json();
    if (!name || !role || !contact) {
      return NextResponse.json(
        { ok: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    // Save to Firestore
    await db.collection("leads").add({
      name,
      role,
      email: contact,
      createdAt: new Date(),
    });

    // Absolute path to the PDF inside /public
    const pdfFilePath = path.join(
      process.cwd(),
      "public",
      "adszoo-web-system.pdf"
    );

    // SMTP transporter (works for Gmail with App Password or other SMTP)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST!,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT || 587) === 465, // true for 465
      auth: { user: process.env.SMTP_USER!, pass: process.env.SMTP_PASS! },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM!,
      to: contact,
      subject: "Your Web System Blueprint is inside (PDF attached)",
      text: `Hi ${name},

Thanks for requesting "The Web System Blueprint".

We've attached the PDF to this email.

- Team Adszoo`,
      html: `
        <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;line-height:1.6;color:#111">
  <p>Hey ${name},</p>

  <p>Here it is!
  Your copy of <strong>“The Web System Blueprint”</strong> is attached to this email.</p>

  <p>This isn’t another fluffy ebook.  
  It’s the same exact process we use to build <strong>web systems that sell - not just websites that sit pretty.</strong></p>

  <p>Inside, you’ll learn:</p>
  <ul>
    <li>How top agencies structure websites to print profit - not pixels</li>
    <li>Why most websites fail to convert and how to fix yours</li>
    <li>The framework we use to plan, design, and launch revenue-focused web systems</li>
  </ul>

  <p>Give it a read today - it’ll change the way you think about websites forever.</p>

  <p>And hey, if you’d like us to build (or rebuild) your site into a revenue machine,  
  just reply to this email or click the <strong>“Need Help?”</strong> button on the website.</p>

  <hr style="border:none;border-top:1px solid #eee;margin:20px 0" />

  <p>Talk soon,<br>
  <strong>Team Adszoo</strong><br/>
  <strong><a href="https://adszoo.in">adszoo.in</a></strong></p>
</div>

      `,
      attachments: [
        {
          filename: "adszoo-web-system.pdf",
          path: pdfFilePath,
          contentType: "application/pdf",
        },
      ],
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}
