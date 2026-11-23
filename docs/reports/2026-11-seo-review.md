# Adszoo — SEO & Lead Review, November 2026

Data: Search Console (16 months to 21 Nov 2026), indexing report (to 16 Nov), Google Business Profile (Jun–Nov 2026), Vercel Speed Insights (17–23 Nov). Leads this month: 2 (local ad enquiries by phone), customers won: 0. Most customers still come from referrals.

## 1. What the data says

### Search Console (adszoo.in domain property)
| Month | Clicks | Impressions | Avg. position |
|---|---|---|---|
| Jul 2026 | 6 | 877 | 57.4 |
| Aug 2026 | 9 | 1,710 | 60.2 |
| Sep 2026 | 11 | 1,280 | 42.5 |
| Oct 2026 | 16 | 1,846 | 36.3 |
| Nov 2026 (to 21st) | 9 | 2,086 | 34.4 |

- **November is already the biggest month for impressions** (2,086 in 21 days), and average position is improving month on month since August.
- **Clicks are tiny (~130 in 16 months)** and ~80% go to the homepage, mostly from brand searches ("adszoo", "adzoo").
- **Most impressions come from the wrong audience**: informational blog searches ("whatsapp business profile optimization", "youtube ads for lead generation india") and dental SEO terms at positions 70–90. These readers don't buy.
- **Local buying searches already rank but don't get clicked**: "advertising services in chrompet chennai" (position 1.0, 61 impressions, 0 clicks), "social media marketing services chitlapakkam chennai" (1.3), "digital marketing company in chrompet" (23), "best web design company in chromepet" (54).
- **One page wastes 4,349 impressions**: `/blogs/social-media-management-pricing-2025` ranks ~11 for "social media management pricing india per month" but has a vague title and no actual prices, so CTR is 0%.
- **Products are almost invisible** (new pages), but real demand already appears: "billing software for hardware shop", "construction billing software", "civil billing software", "contractor invoicing software", "construction invoicing software", "smart queue".
- **Desktop shows 86% of impressions but CTR 0.44%**; mobile CTR is 2.5%. Local buyers search on mobile.

### Indexing
- 100 indexed / 92 not indexed (16 Nov).
- **27 × 404**: old URLs still in Google (e.g. `/industries/dental-marketing`, `/industries/real-estate-marketing`, `/blogs/social-media-management-pricing-2024`). Fixed with 301s in this PR.
- 26 × "Page with redirect": expected (non-www → www, old pages → new). No action.
- 23 × "Redirect error" (validation started): likely old http/non-www chains from before the www redirect; recheck after deploy. Please export the example URLs if it doesn't clear.
- 11 × "Crawled – currently not indexed": mostly thin older pages; will improve with internal links + the new content.

### Google Business Profile (Jun–Nov 2026)
- 540 profile views, 198 interactions; Google Maps mobile is 27% of views.
- Search terms: "ad chromept", "adszoo", "chrompet marketing agency near vaishnava cllg", "chrompet, ads", "digital marketing agency tamilnadu". **People find you as "the ads agency in Chrompet"**, so the site now has a page that matches this exactly.

### Speed (Vercel)
- Real Experience Score **99 desktop / 99 mobile**. Speed is not the problem; relevance and click-through are.

## 2. Why no online sales (diagnosis)
1. Traffic is informational (blog readers), not buyers.
2. Local buyer pages didn't exist for the exact searches people use ("chrompet ads", "chitlapakkam social media").
3. Product pages are new and had one page each; there was no page per buyer type (hardware shop, cement dealer, restaurant in Chennai).
4. No way to see which page produced a call or WhatsApp (calls weren't tracked).
5. Too few Google reviews and posts on GBP compared with competitors (assumption; check review count vs top 3 for "digital marketing agency chromepet").

## 3. What this PR changes
See the PR description for the full list. Highlights: 404 redirects, CTR rewrites, 6 local area pages, 9 product keyword pages, NFC Google Review Card product + 24 Chennai area pages, AI-search upsell, 3 new posts, WhatsApp/call click tracking.

## 4. Other sites (crawl on 23 Nov)
| Site | Issue | Fix (owner) |
|---|---|---|
| srinivasanchessacademy.in | Canonicals and sitemap use `srinivasanchessacademy.in`, but that host **307-redirects** to `www.` on all 99 pages | In Vercel → Domains, make the apex the primary (or change canonicals and sitemap to www), and use a 308 redirect |
| gstraders.adszoo.in | Sitemap `<loc>` and canonical tags are **relative** (`/`, `/why-us`); sitemap not in robots.txt | Use absolute URLs; add `Sitemap:` to robots.txt; move to the main domain |
| vvbuilders.adszoo.in | Sitemap already lists `www.vvbuilders.co.in` URLs | Finish the domain move so the sitemap matches the live host |
| propertygenie.adszoo.in | No sitemap (404) and none in robots.txt | Add sitemap.xml with the landing, pricing and public listing pages |
| hitechinsulation.in | Duplicate title on two PTFE cloth pages | Distinct titles (adhesive vs non-adhesive) |
| jayarammittai.com | No sitemap or robots.txt (current site) | Include both in the new store |
| kvmagencies.in, supremealuminium.shop | Healthy (all 200, canonicals OK, schema present); many titles > 65 chars | Shorten the longest titles over time |
