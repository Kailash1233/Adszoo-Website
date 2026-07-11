# Adszoo Website - Visual Flow Diagrams

## 🎯 Complete User Journey Map

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          USER ENTRY POINTS                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│  
│  Organic Search     →  Direct Visit    →  Social Media    →  Ads/Referrals
│       │                     │                  │                  │
│  "marketing agency"   google.com/   linkedin.com links   facebook ads
│  "website design"     adszoo.in
│  "google ads"
│       └─────────────────────┬──────────────────┬───────────────────┘
│                             ↓
│                    ╔════════════════╗
│                    ║   HOME PAGE    ║  /
│                    ║   (Landing)    ║
│                    ╚════════════════╝
│
└─────────────────────────────────────────────────────────────────────────────┘
```

## 📊 Detailed User Flow Diagram

```
                              START: USER VISITS
                                     │
                         ┌───────────┼───────────┐
                         ↓           ↓           ↓
                    HOME PAGE   SERVICE PAGE   BLOG/CONTENT
                     (Hero)       (Service)     (Article)
                         │           │           │
              ┌──────────┴───────────┴───────────┘
              ↓
         NAVBAR VISIBLE
         ├─ Logo (Home)
         ├─ Services (Scroll to #service)
         ├─ Testimonials (Scroll to #testimonials)
         ├─ FAQs (Scroll to #faq)
         ├─ Blogs (/blogs)
         ├─ Case Studies (/case-study)
         └─ CTA Button (Book Strategy Call)
              │
              ├─ Desktop: "Book a Strategy Call" 
              │           └─→ Cal.com (New Tab)
              │
              └─ Mobile: "Talk to Us"
                          └─→ #contact
              
         USER BROWSES
         ├─ Benefits Section
         ├─ Case Studies Preview
         ├─ Testimonials
         ├─ Community Section
         ├─ Service FAQs
         ├─ Digital Marketing FAQs
         └─ Blog Section
              │
              │ [⏱️ 9 SECONDS ELAPSED]
              ↓
         ╔═══════════════════════════════╗
         ║   LEAD POPUP APPEARS          ║
         ║   ┌─────────────────────────┐ ║
         ║   │ Ready to take brand     │ ║
         ║   │ online?                 │ ║
         ║   │                         │ ║
         ║   │ [Form Fields]           │ ║
         ║   │ [Submit Button]         │ ║
         ║   └─────────────────────────┘ ║
         ╚═══════════════════════════════╝
              │
              ├─→ ❌ CLOSE/DISMISS
              │   └─ User continues browsing
              │
              ├─→ ✅ FILL FORM
              │   ├─ Name*
              │   ├─ Email*
              │   ├─ Phone*
              │   ├─ Website
              │   ├─ Service* (Multi-select)
              │   ├─ Budget
              │   └─ Message
              │   │
              │   └─→ [CLIENT-SIDE VALIDATION]
              │       ├─ ✅ Valid → Continue
              │       └─ ❌ Invalid → Show Errors
              │   │
              │   └─→ [SUBMIT]
              │       │
              │       ├─→ POST to Formspree
              │       │   └─ https://formspree.io/f/myznbjkn
              │       │
              │       ├─→ SAVE TO FIREBASE
              │       │   └─ Collection: "leads"
              │       │       ├─ name
              │       │       ├─ role
              │       │       ├─ email
              │       │       └─ createdAt
              │       │
              │       ├─→ SEND EMAIL
              │       │   ├─ Host: SMTP_HOST
              │       │   ├─ From: SMTP_FROM
              │       │   ├─ To: contact (user email)
              │       │   ├─ Subject: "Your Web System Blueprint is inside"
              │       │   ├─ Body: Custom HTML
              │       │   └─ Attachment: adszoo-web-system.pdf
              │       │
              │       └─→ ✅ SUCCESS
              │           ├─ Show: "Thanks - we'll reach out within 24 hours"
              │           ├─ Auto-close after 1.4s
              │           └─ Lead enters CRM (Firebase)
              │
              └─→ ⚠️ NETWORK ERROR
                  └─ Show: "Network error. Please try again."
```

## 🔄 Alternative Conversion Paths

```
PATH A: STRATEGY CALL BOOKING
═══════════════════════════════════

User sees CTA → Click "Book Strategy Call" 
              → Opens Cal.com (New Tab)
              → Select 30-min slot
              → Book appointment
              → Confirmation email
              → High-Intent Lead ✅

PATH B: CONTACT FORM
═════════════════════════════════════

Home → Click "Talk to Us" (Mobile) or Navigate to /contact
    → Fill comprehensive form
    → Name*
    → Email*
    → Company
    → Service Selection*
    → Message*
    → Submit
    → Formspree processes
    → Redirect to /thank-you
    → Display thank you message
    → Lead logged ✅

PATH C: SERVICE DEEP DIVE
═════════════════════════════════════

Search/Navigate → /services/[service-name]
              → Read service details
              → Explore FAQ
              → Click CTA
              → Either:
                 a) Book Call → Cal.com
                 b) Contact Form → /contact
                 c) Popup → 9-sec trigger
              → Lead captured ✅

PATH D: CONTENT DISCOVERY
═════════════════════════════════════

Search term → Blog article (/blogs/[slug])
          → Read article
          → Explore related posts
          → 9-sec popup appears
          → Fill lead form
          → PDF sent
          → Lead captured ✅

PATH E: LOCAL/INDUSTRY TARGETING
══════════════════════════════════════

Local search → /locations/[location]
            or /industries/[industry]
          → Localized content
          → CTA buttons
          → Contact or Book Call
          → Lead funnel
          → Conversion ✅
```

## 📍 Navigation Decision Tree

```
                          NAVBAR MENU
                               │
                ┌──────────────┼──────────────┐
                ↓              ↓              ↓
              LOGO        NAV LINKS        CTA BUTTON
              (/)             │              │
                              │         ┌────┴────┐
                    ┌─────────┼─────────┤          │
                    ↓         ↓         ↓          ↓
                 Services Testimonials FAQs    DESKTOP:
                    │          │        │     Book Call
                    │          │        │     (Cal.com)
                    │          │        │        │
            ┌───────┼──────┐   │        │        │
            ↓       ↓      ↓   │        │        │
         HOME    #service #faq │        │        │
        (Scroll) (Scroll)      │        │        │
                               │        │        │
                        On HOME page only
                        ✅ Shows "Book Strategy Call"
                        ✅ Links to Cal.com
                        
                      On OTHER pages
                      ✅ Shows "Book Strategy Call"
                      ✅ Links to Cal.com

MOBILE:
┌─ Hamburger Menu
│  ├─ Services
│  ├─ Testimonials  
│  ├─ FAQs
│  ├─ Blogs
│  ├─ Case Studies
│  └─ Talk to Us (#contact)
└─ (Sheet opens from left)
```

## 🔗 Site Structure Tree

```
adszoo.in/
├── / (HOME - PRIMARY CONVERSION HUB)
│
├── /services (SERVICE LISTING)
│   ├── /conversion-focused-websites
│   ├── /landing-page-design
│   ├── /google-ads-management
│   ├── /meta-ads-management
│   ├── /conversion-rate-optimization
│   ├── /lead-generation-systems
│   ├── /sales-funnel-building
│   ├── /website-design-anna-nagar
│   ├── /website-design-chennai
│   ├── /website-design-omr
│   ├── /website-design-porur
│   ├── /website-design-tambaram
│   └── /website-design-velachery
│
├── /industries (INDUSTRY PAGES)
│   ├── /dental-marketing
│   ├── /ecommerce-marketing
│   ├── /healthcare-marketing
│   ├── /interior-design-marketing
│   └── /real-estate-marketing
│
├── /locations (LOCAL SEO)
│   ├── /digital-marketing-agency-chennai
│   ├── /google-ads-agency-chennai
│   ├── /meta-ads-agency-chennai
│   └── /website-design-chennai
│
├── /blogs (CONTENT MARKETING)
│   ├── /[slug] (Individual blog post)
│   └── All articles
│
├── /case-study (SOCIAL PROOF)
│   ├── /[slug] (Individual case study)
│   └── All case studies
│
├── /resources (RESOURCE CENTER)
│   ├── /marketing-blog
│   ├── /marketing-guides
│   ├── /lead-generation-guide
│   └── /website-conversion-guide
│
├── /contact (LEAD CAPTURE - FORM)
│
├── /thank-you (POST-FORM)
│
├── /ads (AD LANDING)
│
└── /websystems (WEB SYSTEMS)
```

## 📧 Lead Capture Funnel

```
IMPRESSION (User visits site)
   ↓ [100% of users]
   │
ENGAGEMENT (Views content)
   ↓ [~70% scroll]
   │
POPUP TRIGGER (9 seconds)
   ↓ [~40% see it]
   │
   ├─→ CLOSE [60% close]
   │   └─ Continue browsing
   │
   └─→ CONVERT [40% engage]
       │
       ├─→ FILL FORM [80% of engaged]
       │   └─ Submit
       │       ↓
       │   LEAD CAPTURED ✅
       │   ├─ Saved to Firebase
       │   ├─ Email sent with PDF
       │   └─ Added to contact list
       │
       └─→ ABANDON [20% of engaged]
           └─ Leave without submitting

ALTERNATIVE CONVERSIONS
   ↓
   ├─→ BOOK CALL [Cal.com]
   │   └─ High Intent Lead ✅
   │
   └─→ CONTACT FORM [/contact]
       └─ Explicit Lead ✅
```

## 🔐 Lead Data Flow

```
USER FILLS FORM (LeadPopup.tsx)
       ↓
CLIENT-SIDE VALIDATION
├─ Name required
├─ Email format check
├─ Phone 7-15 digits
└─ Service selected
       ↓ [Valid]
       │
       ├─→ POST /api/leads (Formspree)
       │   │
       │   └─→ Formspree API
       │       ├─ Validates
       │       ├─ Stores in Formspree
       │       └─ Returns response
       │
       ├─→ PARALLEL: Firebase Save
       │   │
       │   └─→ db.collection("leads").add()
       │       ├─ name
       │       ├─ role (from form)
       │       ├─ email
       │       └─ createdAt (timestamp)
       │
       └─→ PARALLEL: Send Email
           │
           └─→ Nodemailer SMTP
               ├─ Connect to SMTP server
               ├─ Authenticate
               ├─ Compose email
               ├─ Attach PDF from /public
               └─ Send
                   │
                   └─→ Email Received
                       ├─ To: user email
                       ├─ Subject: "Your Web System Blueprint"
                       └─ Attachment: adszoo-web-system.pdf
       ↓ [All complete]
SHOW SUCCESS: "Thanks - we'll reach out within 24 hours"
       ↓
AUTO-CLOSE after 1.4s
       ↓
LEAD IN SYSTEM ✅
```

## 📊 Session Analytics Flow

```
User Session Start
       ↓
Google Analytics (GA-4)
├─ Page View: /
├─ Session Start: timestamp
└─ User ID: generated
       │
       ├─→ User Interactions
       │   ├─ Scroll events
       │   ├─ Click events
       │   ├─ Form submission
       │   ├─ CTA clicks
       │   └─ Link clicks
       │
       ├─→ Vercel Analytics
       │   ├─ Web Vitals
       │   ├─ LCP (Largest Contentful Paint)
       │   ├─ FID (First Input Delay)
       │   ├─ CLS (Cumulative Layout Shift)
       │   └─ FCP (First Contentful Paint)
       │
       └─→ Speed Insights
           └─ Performance monitoring
       ↓
       USER LEAVES SITE
       ↓
       GA Records Session End
       ├─ Session Duration
       ├─ Pages Visited
       ├─ Conversions: Yes/No
       ├─ Lead Status
       └─ Exit Page
```

## 🎯 Conversion Metrics

```
VISIT
  ↓ (Awareness)
  ├─ 100% Landing Page Visitors
  │
BROWSE
  ↓ (Interest)
  ├─ ~70% Scroll past hero
  │
ENGAGE
  ↓ (Consideration)
  ├─ ~40% Reach popup trigger (9s)
  │
CONVERT
  ↓ (Action)
  ├─ ~16% (40% × 40%) Submit popup form
  ├─ ~5% Click "Book Strategy Call"
  ├─ ~3% Visit /contact
  └─ ~24% Total Conversion Rate (est.)
  
LEAD QUALITY
├─ Popup Form: Medium quality
├─ Strategy Call: High quality
└─ Contact Form: High quality
```

## 🚀 Optimization Opportunities

```
CURRENT STATE:
   Popup 9s trigger → 40% see it → 40% engage → ~16% convert

POTENTIAL IMPROVEMENTS:

1. TIMING OPTIMIZATION
   9s is good, but test:
   ├─ 5s (aggressive)
   ├─ 7s (moderate)
   ├─ 12s (generous)
   └─ Scroll-based (after 50% scroll)

2. FORM FIELD OPTIMIZATION
   Current: 7 fields (name, email, phone, website, service, budget, message)
   Consider:
   ├─ Reduce to 3 fields (name, email, service) → Higher submission
   ├─ Or increase from 7 → More detailed leads
   └─ Progressive profiling (gather more over time)

3. VALUE PROPOSITION
   Current: "Web System Blueprint" PDF
   Potential improvements:
   ├─ Video instead of PDF
   ├─ Interactive calculator
   ├─ Personalized report
   └─ Discount coupon

4. CALL-TO-ACTION
   Test variations:
   ├─ "Get Free Strategy Session"
   ├─ "See Our Process"
   ├─ "Claim Your Blueprint"
   └─ Different colors/sizes

5. CONTENT STRATEGY
   ├─ More blog posts → More organic traffic
   ├─ More case studies → More social proof
   ├─ More testimonials → More trust
   └─ More FAQs → More answers → More leads

6. TECHNICAL
   ├─ Reduce form submission time
   ├─ Instant email delivery
   ├─ Real-time lead notification
   └─ SMS alerts for new leads
```

---

**Version:** 1.0  
**Last Updated:** July 2026  
**Type:** User Flow Documentation
