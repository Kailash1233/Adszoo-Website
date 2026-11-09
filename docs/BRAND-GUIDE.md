# Adszoo

**Websites, software and marketing that bring in enquiries.** Adszoo is a digital marketing and software company in Chromepet, Chennai. We build conversion-focused websites, custom software and mobile apps, run social media marketing (organic and ads), and deliver SEO, AEO and GEO with a specialisation in B2B lead generation for manufacturers. We also sell our own products: **Unizo** (GST billing and inventory), **PropertyGenie** (real estate listings and leads) and **Smart Queue** (restaurant waitlists).

This brand book is for designers, video editors and developers working on anything Adszoo: the website, social posts, ads, decks, product UIs and print.

---

## 1. Brand foundations

### Positioning
- **Category:** Digital marketing and software company (an agency that also builds products).
- **Primary audience:** owners and marketing heads of Indian SMEs, especially **B2B manufacturers, traders and suppliers**, builders, clinics, restaurants and retailers.
- **Promise:** measurable enquiries, not vanity metrics. Every asset should lead to a call, a WhatsApp chat, a form or a demo.
- **Proof we lean on:** real client work (Hitech Insulation, KVM Agencies, Srinivasan Chess Academy, Supreme Aluminium, Pallavaram Grievance Portal, PriVio Health, ScoutEdge) and products in daily use.

### Four service pillars (always in this order)
1. Conversion-focused website development
2. Custom software, web apps and mobile apps
3. SEO · AEO · GEO (B2B manufacturing focus)
4. Social media marketing: organic content and ads

### Personality
| We are | We are not |
|---|---|
| Direct and practical | Hype-driven ("10X your business!!") |
| Technical but plain-spoken | Jargon-heavy |
| Local and reachable (Tamil and English) | A faceless offshore vendor |
| Proof-first | Claim-first |
| Confident and warm | Corporate and stiff |

---

## 2. Voice and copy

- **Lead with the outcome**, then the method. "More RFQs from Google", not "We do SEO".
- **Answer-first.** Open sections with a one- or two-sentence direct answer (this also helps Google and AI search).
- **Specific over clever.** Name industries, cities, numbers and real deliverables.
- **Indian context:** ₹, lakh/crore, GST, UPI, WhatsApp, Tamil Nadu cities. Write "enquiry" (Indian/British spelling) across the brand.
- **CTA verbs:** *Book a free demo · Get a free audit · WhatsApp us · Get pricing on WhatsApp · Request a quote*. Avoid "Submit" and "Learn more".
- **No fabricated stats.** Every number must come from a client, a report or our own data.

**Examples**
- Headline: *SEO & lead generation for manufacturers: more RFQs, distributor enquiries and export leads*
- Product line: *GST billing that works without internet: one-time price, local support.*
- Social hook: *Your website gets visitors but no calls? Here's why.*

---

## 3. Logo

Two marks exist (see **Assets → Logos**):
- **Symbol** (`Logo1.png`): a black circular badge with a white "A" monogram. Use it for favicons, app icons, social avatars, and next to the word "Adszoo" in the navbar.
- **Wordmark** (`adszoo-divider.png`): the lowercase **adszoo** in a heavy geometric sans. Use it for large brand moments (website footer band, presentation covers, merchandise).

**Rules**
- Always lowercase in the wordmark; in running text write **Adszoo** (capital A).
- The logo is single-ink: **ink** (#0B0B0B) on light, white on `ink-panel` or orange. Never recolour it orange, gradient it or add shadows.
- Clear space: at least the height of the symbol's "A" on every side.
- Minimum size: symbol 24px; wordmark 80px wide on screen.
- Don't stretch, rotate, outline or place it on busy photos without a solid panel behind it.

---

## 4. Colour

The palette is **black and white with one loud orange**. Orange is the signature; use it deliberately, not everywhere.

| Token | Hex (light) | Role |
|---|---|---|
| `brand-orange` | #FF6321 | Signature colour: big fills, highlight words, icons, illustrations |
| `action-orange` | #C2410C | Accessible orange for small text, links and white-label buttons |
| `orange-hover` | #E85716 | Hover and pressed states |
| `peach` | #FDBA74 | Accent text on black sections |
| `cream` | #FFF6ED | Soft brand background (heroes, callouts) |
| `cream-line` | #FFEDD5 | Borders on cream |
| `ink` | #0B0B0B | Text, logo, black buttons |
| `ink-panel` | #030712 | Dark contrast sections |
| `surface` / `surface-muted` | #FFFFFF / #F9FAFB | Page backgrounds |
| `text-muted` | #4B5563 | Body copy |
| `line` | #E5E7EB | Borders and dividers |
| `whatsapp` / `whatsapp-deep` | #25D366 / #128C7E | WhatsApp actions only |

**Ratio guide (per screen or post):** about 70% white/cream, 20% ink, 10% orange.

### Accessibility, important
White text on `brand-orange` measures **2.98:1**, which fails WCAG even for large text. Today's site uses white-on-#FF6321 buttons. For new work:
- Buttons with white labels: use `action-orange` (#C2410C, 5.18:1), **or**
- Keep #FF6321 and use **ink text** on it (6.62:1). This looks bold and on-brand.
- Small orange text on white: use `action-orange`.
- WhatsApp green with white text is 1.98:1, so keep labels 18px+ bold or use `whatsapp-deep`.

---

## 5. Typography

- **Inter** (Google Fonts) for everything: UI, headlines and body. Weights 400 / 600 / 700 / 800.
- Headlines are **extra-bold with tight negative tracking** (−0.05em at display sizes). This tight, dense headline style is the most recognisable part of the site's typography.
- Body copy is **regular, slightly tight** (−0.01em), line-height 1.6–1.65, max ~70 characters per line.
- Eyebrows: 12px, semibold, UPPERCASE, +0.08em tracking, inside a cream pill with `action-orange` text.
- Highlight one key word or phrase in a headline with `brand-orange` (e.g. "Websites that bring in **enquiries**").
- Wordmark-style lockups: a heavy geometric sans (Montserrat ExtraBold is the closest Google Font) for posters and merch only.

---

## 6. Layout and UI patterns

- **Pill buttons** (`radius-pill`): primary orange, secondary black, tertiary outline. WhatsApp is always green with the WhatsApp glyph.
- **Cards:** white, 1px `line` border, `radius-lg`/`radius-xl`, generous padding (24–32px). Lift on hover with `shadow-lift`.
- **Section rhythm:** white → `surface-muted` → white → cream → **one black `ink-panel` section** for proof or pricing.
- **Floating rounded navbar** with a soft shadow, centred, with an orange CTA on the right.
- **Every page ends in an enquiry block:** form + WhatsApp + call, plus FAQ.
- **Icons:** simple line icons (Lucide) in ink; ✓ ticks in `success`, ✕ problems in `danger` or orange.
- Mobile first: 16px side gutters; stacked CTAs at full width.

---

## 7. Imagery and video

- **Real over stock:** client websites in device frames, factory floors, products, the team, screenshots of our software.
- Product mockups: clean UI on white with a soft shadow; never fake data that looks like a real client's private numbers.
- Blog and social covers: black or deep-ink background, an orange ring/arc motif in the corner, white extra-bold title, peach subtitle, "adszoo.in" bottom-left (see the blog covers on the website).
- Reels: hook text in the first frame, captions always on, end card with the CTA and WhatsApp number.

---

## 8. Social media templates (for designers)

| Format | Size | Layout |
|---|---|---|
| Instagram post / carousel | 1080×1350 | Cream or white background, ink headline, one orange highlight word, logo symbol bottom-left |
| Reel / story cover | 1080×1920 | Black background, orange arc, white title, safe zone 250px top and bottom |
| LinkedIn post | 1200×1200 or 1200×627 | White, case-study numbers big in ink, client industry eyebrow |
| Blog / OG cover | 1200×630 | Black, orange ring top-right, tag pill, title, subtitle, adszoo.in |
| YouTube thumbnail | 1280×720 | Face or product left, 3–4 word title right, orange highlight |

---

## 9. Contact block (use exactly, for NAP consistency)

**Adszoo**, 43, Ramachandra Rd, Nehru Nagar, Chromepet, Chennai, Tamil Nadu 600044
Phone: +91 63690 50929 · Products & WhatsApp: +91 81900 69737 · Email: adszoo.digital@gmail.com · www.adszoo.in

---

## 10. Product sub-brands

Products sit under the Adszoo master brand ("by Adszoo") and may carry one accent of their own:
- **Unizo**: Adszoo orange. Tagline: *GST billing, stock & accounts for material and trading businesses.*
- **PropertyGenie**: teal #0F766E. Tagline: *Turn a WhatsApp property note into a premium listing.*
- **Smart Queue**: warm yellow #F5B800 on charcoal (mirrors its TV display). Tagline: *No more shouting names.*
