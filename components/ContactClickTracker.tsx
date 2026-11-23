"use client";

import { useEffect } from "react";

/**
 * Sends a GA4 event for every WhatsApp, phone and email click anywhere on the
 * site (whatsapp_click / phone_click / email_click, with the page path), so
 * calls and chats can be attributed to the page that produced them.
 * Mark these events as "key events" in GA4 to see them as conversions.
 */
export default function ContactClickTracker() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const a = (e.target as HTMLElement | null)?.closest?.("a") as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute("href") || "";
      let event: string | null = null;
      if (href.startsWith("https://wa.me/") || href.includes("api.whatsapp.com")) event = "whatsapp_click";
      else if (href.startsWith("tel:")) event = "phone_click";
      else if (href.startsWith("mailto:")) event = "email_click";
      if (!event) return;
      try {
        (window as any).gtag?.("event", event, {
          page_path: window.location.pathname,
          link_text: (a.textContent || "").trim().slice(0, 80),
          link_url: href.split("?")[0],
        });
      } catch {}
    }
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);
  return null;
}
