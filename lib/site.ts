// Single source of truth for brand / NAP (Name, Address, Phone) details.
// Keep these identical to the Google Business Profile listing — NAP consistency
// is a local-SEO ranking signal.

export const SITE_URL = "https://www.adszoo.in";
export const SITE_NAME = "Adszoo";

export const CONTACT = {
  phone: "+91 63690 50929",
  phoneHref: "tel:+916369050929",
  // Direct line / WhatsApp for product (Unizo, PropertyGenie, Smart Queue) enquiries
  productPhone: "+91 81900 69737",
  productPhoneHref: "tel:+918190069737",
  productWhatsApp: "918190069737",
  generalWhatsApp: "916369050929",
  email: "adszoo.digital@gmail.com",
  address: {
    street: "43, Ramachandra Rd, Nehru Nagar, Chromepet",
    locality: "Chennai",
    region: "Tamil Nadu",
    postalCode: "600044",
    country: "IN",
    full: "43, Ramachandra Rd, Nehru Nagar, Chromepet, Chennai, Tamil Nadu 600044",
  },
  geo: { lat: 12.9516, lng: 80.1462 },
  calendly: "https://cal.com/adszoo/30min",
};

export const SOCIALS = [
  "https://www.facebook.com/profile.php?id=61565406179842",
  "https://www.instagram.com/adszoo_/",
  "https://www.linkedin.com/company/adszoo/",
];

export function waLink(text: string, number: string = CONTACT.productWhatsApp) {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

export function absUrl(path: string) {
  if (!path) return SITE_URL;
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}

/** Serialise JSON-LD safely (prevents `</script>` breakouts). */
export function jsonLd(data: object) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

/** Parse loosely formatted dates ("JULY 7, 2025") into ISO-8601 for schema. */
export function toISODate(date?: string) {
  if (!date) return undefined;
  const d = new Date(date);
  return isNaN(d.getTime()) ? undefined : d.toISOString().slice(0, 10);
}
