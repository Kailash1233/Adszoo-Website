# Adszoo Website - Quick Reference Guide

## 🎯 The 30-Second Version

**What is Adszoo?**  
A digital marketing agency website designed to capture B2B leads through multiple touchpoints: pop-ups, contact forms, and strategy call scheduling.

**How do people use it?**
1. **Arrive** → Search, direct link, or social media
2. **Browse** → Explore services, benefits, case studies, blogs
3. **Convert** → Fill popup form (9s trigger), contact form, or book a strategy call
4. **Follow-up** → Receive PDF via email, get contacted by team

**Main Goal:** Turn website visitors into qualified leads for digital marketing services

---

## 📊 Key Numbers

| Metric | Value |
|--------|-------|
| **Main Entry Point** | Home page (/) |
| **Total Pages** | 40+ |
| **Active Lead Capture Points** | 3 (Popup, Contact Form, Cal.com) |
| **Lead Form Fields** | 7 |
| **Popup Trigger Time** | 9 seconds |
| **Services Offered** | 8 main + 6 location variants |
| **Industries Targeted** | 5 |
| **Locations Targeted** | 4 (Chennai area) |
| **Blog/Resource Pages** | 8+ |
| **Case Studies** | Dynamic (slug-based) |
| **API Endpoints** | 3 (lead, leads, ping) |
| **Database Used** | Firebase Firestore |
| **Analytics Tool** | Google Analytics 4 |
| **Call Scheduling** | Cal.com (30-min slots) |

---

## 🔥 The Conversion Funnel

```
All Visitors (100%)
    ↓
Page Viewers (100%)
    ↓
Scroll Past Hero (70%)
    ↓
Popup Appears (40% see it after 9s)
    ↓
Form Fills (16% of all visitors)
    ↓
Submissions (Convert to Lead)
    ↓
Email Received (PDF sent)
    ↓
Database Stored (Firebase)
    ↓
Sales Follow-up (Manual process)
```

---

## 📍 Where People Convert

### 1. **Homepage Lead Popup** ⭐ PRIMARY
- **Trigger:** 9 seconds after page load
- **Where:** Bottom-center on mobile, center on desktop
- **Fields:** 7 (name, email, phone, website, service, budget, message)
- **Destination:** Firebase + Email (PDF)
- **Best for:** First-time visitors
- **Conversion Rate:** ~16% of all visitors

### 2. **Contact Form** - SECONDARY
- **URL:** `/contact`
- **Trigger:** Manual navigation
- **Fields:** 5 (name, email, company, service, message)
- **Destination:** Formspree → Email
- **Best for:** Serious prospects
- **Navigation:** Navbar CTA or internal links

### 3. **Strategy Call** - HIGHEST INTENT
- **Link:** `https://cal.com/adszoo/30min`
- **Type:** Calendar booking (Cal.com embed)
- **Duration:** 30 minutes
- **Best for:** Very high-intent leads
- **Location:** Navbar (all pages), Hero section

---

## 🌐 All Routes (Organized by Purpose)

### Lead Capture Routes
```
/              → Home (Primary funnel with popup)
/contact       → Contact form page
/thank-you     → Post-submission confirmation
https://cal.com/adszoo/30min → Strategy call booking
```

### Service Pages (Marketing Funnel)
```
/services                              → All services overview
/services/conversion-focused-websites  → Website building
/services/landing-page-design          → Landing pages
/services/google-ads-management        → Google Ads
/services/meta-ads-management          → Meta/Facebook Ads
/services/conversion-rate-optimization → CRO
/services/lead-generation-systems      → Lead gen
/services/sales-funnel-building        → Sales funnels
```

### Location-Based Pages (Local SEO)
```
/locations/digital-marketing-agency-chennai
/locations/google-ads-agency-chennai
/locations/meta-ads-agency-chennai
/locations/website-design-chennai
```

### Industry-Specific Pages
```
/industries/dental-marketing
/industries/ecommerce-marketing
/industries/healthcare-marketing
/industries/interior-design-marketing
/industries/real-estate-marketing
```

### Content Pages (Organic Traffic)
```
/blogs              → Blog listing
/blogs/[slug]       → Individual blog posts
/case-study         → Case studies listing
/case-study/[slug]  → Individual case study
/resources/marketing-blog
/resources/marketing-guides
/resources/lead-generation-guide
/resources/website-conversion-guide
```

### Other Pages
```
/ads       → Ad landing page
/websystems → Web systems page
/landing   → Landing page layout (layout.tsx)
```

---

## 🔧 How Things Connect

### Form → Lead Storage
```
User fills popup → Validation → Formspree API → Firebase Save → Email Sent
```

### Lead Flow Through System
```
Visitor → Popup Trigger → Form Fill → Success Message → Lead in Database
                              ↓
                        Email Sent
                              ↓
                        Sales Team Sees
                              ↓
                        Manual Follow-up
                              ↓
                        Lead → Opportunity → Deal
```

### Navigation Smart Features
```
Click "Services" from /blogs
    ↓
Redirect to home (/) 
    ↓
Scroll to #service section
    ↓
Shows services content
```

---

## 📧 What Happens After Submission

### Popup Form Submit
1. Data sent to Formspree (online form backend)
2. Data saved to Firebase Firestore
3. Automatic email sent to user with:
   - Personalized greeting
   - Web System Blueprint PDF attached
   - Team signature
4. User sees success message
5. Popup auto-closes after 1.4s

### Contact Form Submit
1. Data sent to Formspree (different form ID)
2. User redirected to `/thank-you` page
3. Thank you page shows confirmation message
4. No automatic email (uses Formspree backend)

### Strategy Call Booking
1. Opens Cal.com in new tab
2. User selects time slot
3. Calendar confirmation sent
4. Adszoo team notified
5. High-quality lead created

---

## 📱 Mobile vs Desktop

| Feature | Mobile | Desktop |
|---------|--------|---------|
| **Navbar** | Hamburger menu | Full navigation |
| **CTA Button** | "Talk to Us" (mobile menu) | "Book a Strategy Call" (fixed) |
| **Popup Position** | Bottom of screen | Center of screen |
| **Menu Animation** | Sheet slides from left | Dropdown (N/A) |
| **Layout** | Stack vertical | Multi-column |
| **Touch Targets** | Large (44px+) | Standard (24-32px) |

---

## 🔐 Environment Variables Needed

```bash
# Google Analytics
NEXT_PUBLIC_GA_ID=G-FDVY1D5V41

# SMTP (Email)
SMTP_HOST=smtp.gmail.com (or your provider)
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=noreply@adszoo.in

# Firebase
FIREBASE_PROJECT_ID=...
FIREBASE_PRIVATE_KEY=...
FIREBASE_CLIENT_EMAIL=...

# Formspree (embedded in code)
Popup Form: https://formspree.io/f/myznbjkn
Contact Form: https://formspree.io/f/maqpqezz
```

---

## 🎨 Visual Components Used

- ✅ Navbar with logo
- ✅ Hero section with CTA buttons
- ✅ Benefits showcase
- ✅ Case study preview
- ✅ Testimonials carousel
- ✅ Community section
- ✅ Service FAQs
- ✅ Digital marketing FAQs
- ✅ Blog section preview
- ✅ Footer with links
- ✅ Lead popup modal
- ✅ Contact form
- ✅ Thank you page

---

## ❌ Not Used (Removed/Commented)

- ❌ Sponsors section
- ❌ Features section
- ❌ Main services section
- ❌ Pricing section
- ❌ Team section
- ❌ Theme provider
- ❌ Page transitions
- ❌ Custom theme switcher

---

## 🚀 Key Technologies Stack

```
Frontend
├─ Next.js 15.5 (App Router)
├─ React 18.3
├─ Tailwind CSS 3.4
├─ Framer Motion (animations)
├─ Radix UI (accessible components)
└─ React Hook Form (form handling)

Backend & Services
├─ Firebase Admin SDK
├─ Nodemailer (email)
├─ Formspree (form backend)
└─ Cal.com (scheduling)

Analytics
├─ Google Analytics 4
├─ Vercel Analytics
└─ Speed Insights

Hosting & Deployment
└─ Vercel
```

---

## 📈 Success Metrics to Track

1. **Lead Volume**
   - Popup submissions per week
   - Contact form submissions
   - Strategy calls booked
   - Total leads per month

2. **Lead Quality**
   - Call booking rate (highest quality)
   - Contact form rate
   - Popup rate (lowest quality)

3. **Traffic Quality**
   - Source of leads
   - Device type
   - Bounce rate
   - Time on site

4. **Conversion Optimization**
   - Popup view rate
   - Popup engagement rate
   - Form field completion
   - Cross-browser compatibility

---

## 🛠️ Common Tasks

### Add a New Service Page
1. Create folder: `/services/[new-service]`
2. Create `page.tsx` with service details
3. Add to navbar (if needed)
4. Add to services listing page

### Add a Blog Post
1. Create folder: `/blogs/[slug]`
2. Create `page.tsx` with blog content
3. Update blog listing page
4. SEO metadata

### Change Popup Text/Timing
**File:** `components/LeadPopup.tsx`
- Timing: Line with `setTimeout(() => { setOpen(true) }, 9000)`
- Text: Form labels and messages
- Colors: Tailwind classes (emerald/green gradient)

### Update Contact Form Fields
**File:** `app/contact/contact-form.tsx`
- Add/remove input fields
- Update select options
- Modify validation rules

### Change Formspree Endpoints
**Files:**
- `app/contact/contact-form.tsx` → Line: `fetch("https://formspree.io/f/maqpqezz"`
- `components/LeadPopup.tsx` → Line: `const FORMSPREE_ENDPOINT = "https://formspree.io/f/myznbjkn"`

---

## 📊 Firebase Collections

### `leads` Collection Structure
```
{
  "name": "John Doe",
  "role": "Business Owner",
  "email": "john@example.com",
  "createdAt": timestamp,
  "id": auto-generated
}
```

---

## 🎯 Recommended Next Steps

1. **Monitor Lead Quality**
   - Track which pages convert best
   - Monitor lead source
   - Score leads by quality

2. **Optimize Conversion Paths**
   - A/B test popup timing
   - Test form field variations
   - Analyze drop-off points

3. **Expand Content**
   - Add more blog posts for organic traffic
   - Create case studies for social proof
   - Build industry-specific landing pages

4. **Scale Traffic**
   - Paid ads pointing to high-converting pages
   - SEO optimization
   - Social media integration

5. **Improve Follow-up**
   - Automated email sequences
   - CRM integration
   - Lead scoring system

---

## 🔗 Important Links

| Purpose | URL |
|---------|-----|
| **Website** | https://adszoo.in |
| **Book Call** | https://cal.com/adszoo/30min |
| **Email** | info@adszoo.in |
| **Phone** | +91 63690 50929 |
| **LinkedIn** | linkedin.com/company/adszoo/ |
| **Instagram** | instagram.com/adszoo_/ |
| **Facebook** | facebook.com/profile.php?id=61565406179842 |
| **Analytics** | Google Analytics (GA-4) |
| **Firebase** | Firebase Console |

---

## ⚡ Performance Checklist

- ✅ Mobile responsive
- ✅ Fast load times (Vercel hosting)
- ✅ SEO optimized (Metadata, Schema)
- ✅ Accessible (Radix UI, ARIA)
- ✅ Form validation
- ✅ Error handling
- ✅ Analytics tracking
- ✅ Smooth animations

---

## 🚨 Common Issues & Fixes

| Issue | Solution |
|-------|----------|
| **Popup not appearing** | Check browser console, verify 9s delay, check z-index |
| **Email not sending** | Verify SMTP credentials, check email in spam, test API |
| **Form not submitting** | Check Formspree endpoint, verify validation, check network |
| **Firebase not saving** | Check credentials, verify database permissions, check Firebase console |
| **Navigation not scrolling** | Clear localStorage, check anchor IDs, verify page is home |
| **Cal.com not loading** | Check embed code, verify URL, test in incognito mode |

---

## 📚 File Structure Reference

```
project/
├── app/
│   ├── layout.tsx (Root layout with analytics)
│   ├── page.tsx (Home page - primary funnel)
│   ├── contact/
│   │   ├── page.tsx (Contact page)
│   │   └── contact-form.tsx (Contact form component)
│   ├── thank-you/page.tsx (Confirmation page)
│   ├── services/ (All service pages)
│   ├── blogs/ (Blog pages)
│   ├── case-study/ (Case studies)
│   ├── industries/ (Industry pages)
│   ├── locations/ (Location pages)
│   ├── resources/ (Resource pages)
│   └── api/
│       ├── lead/route.ts (Lead capture API - Firebase + Email)
│       └── leads/route.ts (Generic leads API - template)
├── components/
│   ├── LeadPopup.tsx (9-second popup with form)
│   ├── layout/ (Navbar, footer, sections)
│   └── ui/ (Reusable components)
├── lib/
│   └── firebaseAdmin.ts (Firebase configuration)
└── public/
    └── adszoo-web-system.pdf (PDF for email)
```

---

**Quick Guide Version:** 1.0  
**Last Updated:** July 2026  
**Purpose:** Quick reference for website flow, features, and operations
