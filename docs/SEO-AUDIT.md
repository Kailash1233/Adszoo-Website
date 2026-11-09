# Adszoo.in — SEO / AEO / GEO Audit & Changes (November 2026)

## Critical issues found (and fixed)

| # | Issue | Impact | Fix |
|---|-------|--------|-----|
| 1 | Root layout set `canonical: https://www.adszoo.in/` and **33 pages** had no canonical of their own, so they inherited it | Google was told every service, location, resource and company page was a duplicate of the homepage → those pages could not rank | Removed the global canonical, added `metadataBase`, gave every page a self-referencing canonical |
| 2 | ~20 pages had **no title/description**, inheriting the homepage title | Duplicate titles across the site, weak CTR, cannibalisation | Unique, keyword-targeted title + description on every page |
| 3 | `@tailwindcss/typography` not installed, but blog used `prose` classes | Blog headings, lists and tables rendered unstyled | Installed plugin, upgraded article styling |
| 4 | Blog `datePublished` in "JULY 7, 2025" format; sitemap `lastmod` invalid | Invalid structured data and sitemap dates | ISO dates in schema, OG tags and sitemap |
| 5 | Google Analytics loaded in root layout **and** again on 9 pages/layouts | Double-counted pageviews, skewed data | Single GA tag in root layout |
| 6 | 10 case studies pointed to **missing images** (one case-sensitive filename) | Broken images on case study pages + OG | Fixed paths / generated previews |
| 7 | `/ads` and `/landing` layouts rendered nested `<html>/<body>` | Invalid HTML, hydration issues | Replaced with wrappers; `/landing` set to noindex |
| 8 | Duplicate/thin pages: `/locations/website-design-chennai` vs `/services/website-design-chennai`, `/company/contact-us` vs `/contact`, `/company/client-success-stories` vs `/case-study`, `/resources/marketing-blog` vs `/blogs` | Split ranking signals, thin content | 301 redirects to the stronger page, files removed |
| 9 | Footer linked to `/company/contact` (404) | Broken internal link | Fixed + redirect added |
| 10 | Nav used `#anchors` and JS `router.push` | Weak crawlable internal linking to money pages | Real `<Link>`s to Services, Products, B2B SEO, Case Studies, Blog, Contact |
| 11 | `/blogs` and homepage blog section were client components importing every article | ~hundreds of KB of article HTML shipped as JS; random featured post caused hydration mismatch | Server-rendered listing with slim data |
| 12 | Mixed `adszoo.in` / `www.adszoo.in` absolute URLs | Inconsistent canonical host signals | All URLs normalised to `https://www.adszoo.in`; non-www → www redirect |
| 13 | 18 blog posts under 250 words (some ~70) | Thin content | Rewritten into full guides (same URLs) + 10 new long-form posts |
| 14 | Phone numbers inconsistent (NAP) and LocalBusiness schema minimal | Weaker local SEO | `lib/site.ts` single source of truth; full Organization + LocalBusiness + WebSite graph |

## What was added

- **Products:** `/products`, `/products/unizo-gst-billing-inventory-software`, `/products/propertygenie-real-estate-listing-software`, `/products/smart-queue-restaurant-queue-management-system` — SoftwareApplication + FAQ + Breadcrumb schema, WhatsApp (+91 81900 69737), call, enquiry form.
- **Lead capture:** `/api/product-lead` emails `adszoo.digital@gmail.com` with subject **"Product Request Lead — …"** (or "Service Enquiry Lead — …"). SMTP first, Formspree fallback, optional Firestore copy. Honeypot spam protection. GA4 `generate_lead` event on submit.
- **New service pages:** SEO for Manufacturers (flagship), Custom Software Development, Mobile App Development, Social Media Marketing, E-commerce Website Development — Service + FAQ + Breadcrumb schema.
- **Case studies:** rewritten Hitech Insulation, Srinivasan Chess Academy (SEO progress section), Supreme Aluminium, KVM CMart, Promide, Eswari; new KVM Agencies, VV Builders, GS Traders, Jayaram Mittai. Related studies now matched by industry/service.
- **Blog:** 10 new long-form posts (manufacturing SEO, billing software ×2, restaurant queue, real estate brokers, custom software, app cost, website cost, B2B social, GEO/ChatGPT), 18 thin posts rewritten + expanded, topic-aware CTA + internal links on every post, related posts by tag, breadcrumbs, branded cover images.
- **Site-wide:** floating WhatsApp button, rebuilt footer with full internal link architecture, homepage "What we do" + Products section, robots.txt allows AI crawlers (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended), sitemap priorities, security headers.

## To do outside the code (high impact)

1. **Vercel → Domains:** set `www.adszoo.in` as primary; redirect apex to www.
2. **Environment variables** (Vercel): `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM` (Gmail App Password works). Optional `LEAD_INBOX`, `FORMSPREE_LEAD_ENDPOINT`. Without SMTP, leads go via the existing Formspree form.
3. **Search Console + Bing Webmaster:** resubmit `https://www.adszoo.in/sitemap.xml`; request indexing for /products/*, /services/seo-for-manufacturers and the new blog posts; watch the "Duplicate, Google chose different canonical" report clear over 2–6 weeks.
4. **Google Business Profile:** add Products (Unizo, PropertyGenie, Smart Queue) and Services; add the WhatsApp number; post the new case studies; ask clients (Hitech, KVM, Srinivasan Chess) for reviews that mention the service.
5. **Backlinks/citations:** list Unizo/PropertyGenie/Smart Queue on software directories (G2, Capterra, SoftwareSuggest, Techjockey), get "Website by Adszoo" footer credits on client sites (VV Builders, GS Traders, KVM, Hitech, Supreme), local Chennai directories, restaurant association / builder association listings.
6. **Real numbers:** Srinivasan Chess now shows Search Console data (164 clicks, Oct spike, +121% FIDE guide). Add the same for Hitech, KVM and Supreme Aluminium once their data is available (`metrics`, `seoWins`, `proofImage` in `lib/case-studies-data.ts`).
7. **Main domains:** when V.V Builders and G.S. Traders move off the adszoo.in subdomains, update their `website` URLs in `lib/case-studies-data.ts`. Replace the Jayaram Mittai cover with a store screenshot once it launches.
8. **Content cadence:** 2 posts/month — next targets: "ACP sheet manufacturer SEO", "GST billing for hardware shops in Tamil", "restaurant waitlist vs reservation", "property brochure template", plus Tamil-language versions of top product pages.
