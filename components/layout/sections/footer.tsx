"use client";

import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CONTACT, waLink } from "@/lib/site";

const columns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Services",
    links: [
      { label: "Website Development", href: "/services/conversion-focused-websites" },
      { label: "E-commerce Websites", href: "/services/ecommerce-website-development" },
      { label: "Custom Software Development", href: "/services/custom-software-development" },
      { label: "Mobile App Development", href: "/services/mobile-app-development" },
      { label: "SEO for Manufacturers", href: "/services/seo-for-manufacturers" },
      { label: "SEO, AEO & GEO", href: "/seo-aeo-geo-services" },
      { label: "Social Media Marketing", href: "/services/social-media-marketing" },
      { label: "Google Ads Management", href: "/services/google-ads-management" },
      { label: "Meta Ads Management", href: "/services/meta-ads-management" },
      { label: "Landing Page Design", href: "/services/landing-page-design" },
      { label: "Lead Generation Systems", href: "/services/lead-generation-systems" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "All Products", href: "/products" },
      { label: "Unizo — GST Billing & Inventory", href: "/products/unizo-gst-billing-inventory-software" },
      { label: "PropertyGenie — Real Estate", href: "/products/propertygenie-real-estate-listing-software" },
      { label: "Smart Queue — Restaurants", href: "/products/smart-queue-restaurant-queue-management-system" },
    ],
  },
  {
    title: "Our Work",
    links: [
      { label: "All Case Studies", href: "/case-study" },
      { label: "Hitech Insulation (B2B SEO)", href: "/case-study/hitech-insulation" },
      { label: "Srinivasan Chess Academy", href: "/case-study/srinivasan-chess-academy" },
      { label: "KVM Agencies (Software)", href: "/case-study/kvm-agencies" },
      { label: "Supreme Aluminium", href: "/case-study/supreme-aluminium" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Manufacturing & B2B", href: "/services/seo-for-manufacturers" },
      { label: "Real Estate", href: "/industries/marketing-for-real-estate" },
      { label: "Healthcare", href: "/industries/marketing-for-hospitals" },
      { label: "Dental Clinics", href: "/industries/marketing-for-dentists" },
      { label: "Interior Designers", href: "/industries/marketing-for-interior-designers" },
      { label: "E-commerce", href: "/industries/marketing-for-ecommerce" },
      { label: "All Industries", href: "/industries" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blogs" },
      { label: "Marketing Guides", href: "/resources/marketing-guides" },
      { label: "Website Conversion Guide", href: "/resources/website-conversion-guide" },
      { label: "Lead Generation Guide", href: "/resources/lead-generation-guide" },
      { label: "SEO, AEO & GEO Guide", href: "/blogs/seo-aeo-geo-complete-guide" },
    ],
  },
  {
    title: "Company & Locations",
    links: [
      { label: "About Adszoo", href: "/company/about-adszoo" },
      { label: "Contact Us", href: "/contact" },
      { label: "Careers", href: "/company/careers" },
      { label: "Partners", href: "/company/partners" },
      { label: "Digital Marketing Agency Chennai", href: "/locations/digital-marketing-agency-chennai" },
      { label: "Website Design Chennai", href: "/services/website-design-chennai" },
      { label: "Website Design Tambaram", href: "/services/website-design-tambaram" },
      { label: "Google Ads Agency Chennai", href: "/locations/google-ads-agency-chennai" },
      { label: "Meta Ads Agency Chennai", href: "/locations/meta-ads-agency-chennai" },
    ],
  },
];

export const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-black pt-16 border-t tracking-tight">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_3fr]">
          {/* Brand + NAP */}
          <div>
            <Link href="/" className="flex items-center mb-4">
              <Image src="/Logo1.png" alt="Adszoo logo" width={32} height={32} />
              <span className="ml-2 font-bold text-xl">Adszoo</span>
            </Link>
            <p className="text-sm text-gray-600 mb-5">
              Chennai-based digital marketing &amp; software company. Conversion-focused websites, custom
              software &amp; apps, social media marketing and SEO/AEO/GEO that bring in enquiries — especially
              for B2B manufacturers.
            </p>
            <address className="not-italic space-y-3 text-sm text-gray-700">
              <a href={CONTACT.phoneHref} className="flex items-start gap-2 hover:text-[#ff6321]">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" /> {CONTACT.phone}
              </a>
              <a
                href={waLink("Hi Adszoo, I'd like to know more about your software products.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-[#ff6321]"
              >
                <MessageCircle className="w-4 h-4 mt-0.5 shrink-0" /> {CONTACT.productPhone} (WhatsApp · Products)
              </a>
              <a href={`mailto:${CONTACT.email}`} className="flex items-start gap-2 hover:text-[#ff6321]">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" /> {CONTACT.email}
              </a>
              <span className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" /> {CONTACT.address.full}
              </span>
            </address>
            <div className="flex gap-4 mt-5">
              <a href="https://www.facebook.com/profile.php?id=61565406179842" target="_blank" rel="noopener" aria-label="Adszoo on Facebook">
                <Facebook className="w-5 h-5 hover:text-[#ff6321]" />
              </a>
              <a href="https://www.linkedin.com/company/adszoo/" target="_blank" rel="noopener" aria-label="Adszoo on LinkedIn">
                <Linkedin className="w-5 h-5 hover:text-[#ff6321]" />
              </a>
              <a href="https://www.instagram.com/adszoo_/" target="_blank" rel="noopener" aria-label="Adszoo on Instagram">
                <Instagram className="w-5 h-5 hover:text-[#ff6321]" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-2">
                <p className="font-bold text-base mb-1">{col.title}</p>
                {col.links.map((l) => (
                  <Link key={l.href + l.label} href={l.href} className="text-sm text-gray-600 hover:text-[#ff6321]">
                    {l.label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-12 border-t pt-6 flex flex-col md:flex-row justify-between gap-3 text-sm text-gray-500">
          <span>© {currentYear} Adszoo. All rights reserved.</span>
          <span>Website Development · Software · SEO/AEO/GEO · Social Media — Chennai, Tamil Nadu, India</span>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full h-auto object-contain opacity-90 mt-8"
      >
        <div className="relative w-full h-[140px] sm:h-[220px] md:h-[320px] lg:h-[420px]">
          <Image src="/adszoo-divider.png" alt="" fill sizes="100vw" className="object-cover object-center" />
        </div>
      </motion.div>
    </footer>
  );
};
