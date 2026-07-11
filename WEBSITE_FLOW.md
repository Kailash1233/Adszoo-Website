# Adszoo Website Flow Documentation

## 📋 Project Overview
**Website:** Adszoo - Digital Marketing Agency  
**Type:** Marketing & Service Landing Site  
**Framework:** Next.js 15.5 (App Router)  
**Purpose:** Lead generation and service promotion  

---

## 🌍 User Journey Map

### Entry Points (How users come in)
Users can enter the Adszoo website through multiple channels:

1. **Home Page** → `/` 
   - Main landing page
   - Direct link or organic search
   - SEO optimized with metadata

2. **Service Pages** → `/services/*`
   - Specific service deep-links
   - Google Ads
   - Meta Ads
   - Website Design (by location)
   - Conversion Rate Optimization
   - Lead Generation Systems
   - Landing Page Design
   - Sales Funnel Building

3. **Blog/Resources** → `/blogs`, `/resources/*`
   - Content marketing entry
   - Blog articles with SEO
   - Marketing guides
   - Lead generation guides
   - Website conversion guides

4. **Case Studies** → `/case-study`
   - Social proof entry point
   - Portfolio showcase

5. **Industries** → `/industries/*`
   - Industry-specific pages
   - Dental marketing
   - Ecommerce marketing
   - Healthcare marketing
   - Interior design marketing
   - Real estate marketing

6. **Locations** → `/locations/*`
   - Local SEO entry
   - Chennai-specific pages
   - Location-based marketing

7. **Contact Page** → `/contact`
   - Direct inquiry entry
   - For users ready to engage

---

## 🎯 User Actions & Flow

### Primary User Path (Lead Generation)

```
User arrives at homepage
        ↓
Sees Hero Section with CTA buttons
        ├─ "Book a Strategy Call" → Cal.com (30-min call)
        └─ "See Real Client Results" → Case Studies
        ↓
Browses Benefits & Features
        ↓
Views Case Studies / Social Proof
        ↓
Reads Testimonials
        ↓
Explores Services Section
        ↓
Reads FAQ
        ↓
Views Blog Articles
        ↓
[LEAD POPUP APPEARS after 9 seconds]
        ├─ Form submitted → Email + Formspree
        ├─ Lead saved to Firebase
        └─ PDF ("Web System Blueprint") sent via email
        ↓
Multiple Action Options:
        ├─ Continue browsing
        ├─ Click "Book a Strategy Call" (Navbar)
        ├─ Click "Talk to Us" (Mobile menu)
        ├─ Navigate to /contact
        ├─ Fill Lead Popup form
        └─ Navigate to specific services
```

### Secondary Paths

#### A. Service Exploration Path
```
User lands on specific service page
        ↓
Reads service details
        ↓
Sees related FAQ
        ↓
CTA: Book call or Contact
        ↓
Eventually converts to /contact or Lead Popup
```

#### B. Content/Blog Path
```
User reads blog article
        ↓
Explores related content
        ↓
Sees CTA in/near article
        ↓
Lead Popup triggers
        ↓
Converts through form or navigation
```

#### C. Location/Industry Path
```
User searches "Digital Marketing Agency Chennai" etc.
        ↓
Lands on location/industry-specific page
        ↓
Sees localized content
        ↓
CTA: Contact or Book Call
        ↓
Lead generation flow
```

---

## 📍 Page Structure & Components

### Root Layout (`app/layout.tsx`)
- **Purpose:** Global configuration
- **Features:**
  - Google Analytics (GA ID: G-FDVY1D5V41)
  - Vercel Analytics & Speed Insights
  - SEO Metadata
  - JSON-LD Schema (DigitalMarketingAgency)
  - Google Site Verification
  - Smooth Scroll wrapper

### Home Page (`app/page.tsx`) - ⭐ PRIMARY CONVERSION HUB
**Active Components:**
- ✅ Navbar
- ✅ HeroSection
- ✅ BenefitsSection
- ✅ CaseStudyPreview
- ✅ TestimonialSection
- ✅ CommunitySection
- ✅ ServiceFAQ
- ✅ DigitalMarketingFAQ
- ✅ BlogSection
- ✅ FooterSection
- ✅ LeadPopup (9-second trigger)

**Inactive/Commented:**
- ❌ SponsorsSection
- ❌ FeaturesSection
- ❌ ServicesSection
- ❌ PricingSection
- ❌ TeamSection
- ❌ ContactSection
- ❌ FAQSection

**SEO & Social Meta:**
- Optimized title & description
- OpenGraph tags for social sharing
- Twitter card setup

---

## 🎨 Navigation Structure

### Navbar Routes
```
[Logo/Home] ← Links to /
├─ Services (#service) → Scroll to services on home
├─ Testimonials (#testimonials) → Scroll to testimonials
├─ FAQs (#faq) → Scroll to FAQ section
├─ Blogs → /blogs
├─ Case Studies → /case-study
└─ [CTA Button]
    ├─ Desktop: "Book a Strategy Call" → https://cal.com/adszoo/30min
    └─ Mobile: "Talk to Us" → #contact
```

**Mobile Navigation:**
- Hamburger menu opens side sheet
- All routes accessible
- Same CTAs as desktop

**Smart Scroll Logic:**
- If clicking section link from non-home page → Navigate to home, then scroll to section
- Uses localStorage to track scroll target
- Smooth scroll behavior implemented

---

## 📧 Lead Capture System

### Lead Popup Component (`components/LeadPopup.tsx`)
**Trigger:** 9 seconds after page load

**Form Fields:**
1. Full Name (required)
2. Email (required, validated)
3. Phone (required, 7-15 digits)
4. Website (optional)
5. Service Interest (required, multi-select)
   - Website
   - Performance Ads
   - Lead Gen
   - Branding
6. Budget (optional dropdown)
   - Less than ₹10k
   - ₹10k - ₹50k
   - ₹50k - ₹2L
   - More than ₹2L
7. Message (optional text)

**Submission Flow:**
```
User fills form
        ↓
Client-side validation (name, email, phone, service)
        ↓
POST to Formspree (https://formspree.io/f/myznbjkn)
        ↓
Success → Show confirmation message
        ↓
Auto-close popup after 1.4s
```

**Lead Storage:** Firebase Firestore (`leads` collection)
- Stores: name, role, email, createdAt

### Contact Form (`app/contact/contact-form.tsx`)
**Endpoint:** Formspree (https://formspree.io/f/maqpqezz)

**Fields:**
1. Name (required)
2. Email (required)
3. Company/Business (optional)
4. Service Interested In (dropdown)
5. Message (textarea, required)

**Flow:**
```
User submits form
        ↓
POST to Formspree
        ↓
Success → Redirect to /thank-you
        ↓
Display thank you page
```

---

## 🔗 All Active Routes & Pages

### Marketing Services Pages
| Route | Purpose | Status |
|-------|---------|--------|
| `/services` | All services overview | ✅ Active |
| `/services/conversion-focused-websites` | Website service | ✅ Active |
| `/services/landing-page-design` | Landing page service | ✅ Active |
| `/services/google-ads-management` | Google Ads service | ✅ Active |
| `/services/meta-ads-management` | Meta Ads service | ✅ Active |
| `/services/conversion-rate-optimization` | CRO service | ✅ Active |
| `/services/lead-generation-systems` | Lead gen service | ✅ Active |
| `/services/sales-funnel-building` | Sales funnel service | ✅ Active |
| `/services/website-design-anna-nagar` | Location-based service | ✅ Active |
| `/services/website-design-chennai` | Location-based service | ✅ Active |
| `/services/website-design-omr` | Location-based service | ✅ Active |
| `/services/website-design-porur` | Location-based service | ✅ Active |
| `/services/website-design-tambaram` | Location-based service | ✅ Active |
| `/services/website-design-velachery` | Location-based service | ✅ Active |

### Content Pages
| Route | Purpose | Status |
|-------|---------|--------|
| `/blogs` | Blog listing page | ✅ Active |
| `/blogs/[slug]` | Individual blog posts | ✅ Active |
| `/case-study` | Case studies overview | ✅ Active |
| `/case-study/[slug]` | Individual case study | ✅ Active |

### Industry Pages
| Route | Purpose | Status |
|-------|---------|--------|
| `/industries/dental-marketing` | Dental industry service | ✅ Active |
| `/industries/ecommerce-marketing` | Ecommerce industry service | ✅ Active |
| `/industries/healthcare-marketing` | Healthcare industry service | ✅ Active |
| `/industries/interior-design-marketing` | Interior design industry service | ✅ Active |
| `/industries/real-estate-marketing` | Real estate industry service | ✅ Active |

### Location Pages
| Route | Purpose | Status |
|-------|---------|--------|
| `/locations/digital-marketing-agency-chennai` | Local SEO | ✅ Active |
| `/locations/google-ads-agency-chennai` | Local SEO | ✅ Active |
| `/locations/meta-ads-agency-chennai` | Local SEO | ✅ Active |
| `/locations/website-design-chennai` | Local SEO | ✅ Active |

### Resource Pages
| Route | Purpose | Status |
|-------|---------|--------|
| `/resources/marketing-blog` | Resources hub | ✅ Active |
| `/resources/marketing-guides` | Guide resources | ✅ Active |
| `/resources/lead-generation-guide` | Lead gen guide | ✅ Active |
| `/resources/website-conversion-guide` | Conversion guide | ✅ Active |

### Lead Capture Pages
| Route | Purpose | Status |
|-------|---------|--------|
| `/contact` | Contact form page | ✅ Active |
| `/thank-you` | Post-submission confirmation | ✅ Active |
| `/ads` | Ad landing page | ✅ Active |
| `/websystems` | Web systems page | ✅ Active |

---

## 🔧 API Endpoints

### POST `/api/lead`
**Purpose:** Save lead and send PDF via email

**Request Body:**
```json
{
  "name": "User Name",
  "role": "Job Title",
  "contact": "email@example.com"
}
```

**Response:**
```json
{
  "ok": true
}
```

**Side Effects:**
1. Save to Firebase: `leads` collection
2. Send email via SMTP (Gmail/custom)
3. Attach PDF: "Web System Blueprint"

**Required Environment Variables:**
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM`
- Firebase Admin credentials

### POST `/api/leads`
**Status:** Template/Commented  
**Purpose:** Generic lead capture (unused currently)

### GET `/api/ping`
**Purpose:** Health check/monitoring

---

## 🔑 Key Technologies & Integrations

### Frontend
- **Next.js 15.5** - Framework
- **React 18.3** - UI library
- **Tailwind CSS 3.4** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Radix UI** - Accessible components
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### Backend & Services
- **Firebase Admin** - Database & lead storage
- **Nodemailer** - Email sending
- **Formspree** - Form backend (lead capture)
- **Cal.com** - Scheduling integration (30-min calls)

### Analytics & SEO
- **Google Analytics 4** - Traffic tracking (GA ID: G-FDVY1D5V41)
- **Vercel Analytics** - Performance monitoring
- **Vercel Speed Insights** - Core Web Vitals
- **Next Sitemap** - XML sitemap generation

### Third-party
- **Embla Carousel** - Image carousels
- **React Scroll** - Smooth scrolling
- **React Share** - Social sharing
- **Next Themes** - Theme management
- **Lottie React** - Animations
- **Marquee** - Animated text/logos

---

## 📊 User Flow Metrics

### What Happens in Each User Session

**No Conversion:**
```
User visits → Browses → Leaves
Time on site: varies
No lead captured
```

**High-Intent Conversion:**
```
User visits
        ↓ [9 seconds]
Popup appears & fills form
        ↓
Lead saved to Firebase
        ↓
PDF sent to email
        ↓
Redirects to home or stays
Time on site: ~5-10 minutes
Lead quality: High
```

**Call Conversion:**
```
User visits
        ↓
Clicks "Book Strategy Call"
        ↓
Redirected to Cal.com
        ↓
Schedules 30-minute call
Time on site: ~2-3 minutes
Lead quality: Very High
```

**Contact Form Conversion:**
```
User visits
        ↓
Navigates to /contact
        ↓
Fills comprehensive form
        ↓
Submits via Formspree
        ↓
Redirects to /thank-you
Time on site: ~5-8 minutes
Lead quality: High
```

---

## 🎯 What's Used vs. What's Not

### ✅ ACTIVE FEATURES
- ✅ Lead Popup (9-second trigger)
- ✅ Contact Form
- ✅ Cal.com Integration (Book Strategy Call)
- ✅ Firebase Leads Collection
- ✅ Email PDF Delivery (SMTP)
- ✅ Formspree Forms
- ✅ Google Analytics
- ✅ Vercel Analytics
- ✅ Speed Insights
- ✅ Smooth Scroll
- ✅ Navbar Navigation with Smart Scroll
- ✅ Blog Section
- ✅ Case Studies
- ✅ Testimonials
- ✅ Benefits Section
- ✅ Community Section
- ✅ Service FAQs
- ✅ Digital Marketing FAQs
- ✅ Social Links (LinkedIn, Instagram, Facebook)

### ❌ INACTIVE/COMMENTED OUT
- ❌ Sponsors Section (component exists, not used on home)
- ❌ Features Section (component exists, not used on home)
- ❌ Services Section (component exists, not used on home)
- ❌ Pricing Section (component exists, not used on home)
- ❌ Team Section (component exists, not used on home)
- ❌ Contact Section (form on dedicated page instead)
- ❌ FAQ Section (different component used)
- ❌ Theme Provider (commented out, using default theme)
- ❌ Page Transition Provider
- ❌ Footer Section comments (being used)

### 🚀 NOT IMPLEMENTED (Could Be Added)
- OAuth/Multi-auth providers
- User dashboard/accounts
- E-commerce/payments
- Customer portal
- CRM integration (beyond Firebase)
- Advanced analytics dashboard
- A/B testing framework
- Email automation sequences
- SMS notifications

---

## 📈 SEO & Metadata Strategy

### Global Metadata
- Title: "Adszoo | Best Website Development & Social Media Marketing Agency"
- Description: "Boost your business with expert PPC, Website Development and Social Media services..."
- Google Verification: `2scpu4pXHJ-tPOYU7PA9trnQsFwk6z3AUfDywzNVt6Y`
- Ahrefs Verification: `52cc875c8d0ea547fbd9cfc1b7a156038a191d34a4edbf623f55a5e7590ac90b`

### Schema Markup
- Type: `DigitalMarketingAgency`
- Includes: Name, URL, Logo, Description, Address, Social Links

### OpenGraph Tags
- Used on home page for social sharing
- Custom images for each major page
- Twitter card setup

---

## 🚨 Critical User Decision Points

### Point 1: Hero Section (Landing)
**User Decision:**
- ❌ Leave the site
- ✅ "Book a Strategy Call" → Cal.com
- ✅ "See Real Client Results" → Case Studies
- ✅ Scroll down to explore

### Point 2: Popup (9 seconds)
**User Decision:**
- ❌ Close popup
- ✅ Fill form & submit
- ✅ Continue browsing

### Point 3: Footer
**User Decision:**
- ❌ Leave
- ✅ Contact form
- ✅ Follow social links
- ✅ Navigate to other pages

### Point 4: Service Pages
**User Decision:**
- ❌ Leave
- ✅ Contact/Book call
- ✅ Explore other services

---

## 💡 Conversion Optimization Opportunities

1. **Lead Popup Timing** - Currently 9 seconds (could A/B test)
2. **Form Fields** - Could reduce fields on popup for higher submission
3. **Call Scheduling** - Cal.com is well-integrated
4. **Social Proof** - Testimonials are visible early
5. **Service Pages** - Each has dedicated pages for deep targeting
6. **Local SEO** - Location-specific pages capture local search
7. **Content Strategy** - Blogs and resources drive organic traffic
8. **Multi-touch** - Multiple CTAs and forms throughout site

---

## 📱 Mobile Responsiveness

- **Responsive Design:** Tailwind breakpoints (mobile-first)
- **Mobile Menu:** Hamburger sheet navigation
- **Touch Optimized:** CTAs are properly sized
- **Form Validation:** Works on all devices
- **Popup:** Appears at bottom on mobile, center on desktop
- **Images:** Lazy loading implemented

---

## 🔐 Security & Compliance

- **Form Validation:** Client & server-side
- **Email Verification:** Built into forms
- **CORS:** Formspree handles CORS
- **Firebase:** Admin SDK for backend operations
- **Environment Variables:** Sensitive data in .env
- **SSL:** Vercel hosting provides HTTPS

---

## 📊 Analytics Tracking

### Google Analytics Events
- Page views
- User interactions
- Form submissions
- CTA clicks
- Scroll depth

### Vercel Analytics
- Web Vitals monitoring
- Performance tracking

### Custom Events to Consider
- Lead popup impressions
- Lead popup submissions
- Call booking clicks
- Service page visits
- Blog article reads

---

## 🎓 Summary

**Website Type:** Lead Generation Machine for Digital Marketing Services

**Primary Goal:** Capture high-quality B2B leads through:
1. Strategic popups
2. Contact forms
3. Call scheduling
4. Content marketing
5. Local/industry targeting

**Traffic Sources:**
- Organic search (SEO)
- Direct
- Referrals
- Social media (implied)

**Lead Quality Strategy:**
- Lead popup for auto-generated interest
- Contact form for committed prospects
- Call scheduling for serious leads
- PDF delivery for email list building

**Conversion Path:** Awareness → Interest → Decision → Action (Lead/Call)

---

## 🔗 Quick Reference

- **Home:** `/`
- **All Services:** `/services`
- **Contact:** `/contact`
- **Book Call:** `https://cal.com/adszoo/30min`
- **Case Studies:** `/case-study`
- **Blog:** `/blogs`
- **Analytics:** Google Analytics Dashboard (GA ID: G-FDVY1D5V41)
- **Lead Database:** Firebase Firestore (`leads` collection)

---

**Document Version:** 1.0  
**Last Updated:** July 2026  
**Framework:** Next.js 15.5 (App Router)  
**Maintained by:** Adszoo Development Team
