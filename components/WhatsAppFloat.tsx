"use client";

import { usePathname } from "next/navigation";
import { CONTACT, waLink } from "@/lib/site";

/** Site-wide floating WhatsApp button. Product pages route to the product line. */
export default function WhatsAppFloat() {
  const pathname = usePathname() || "/";
  if (pathname.startsWith("/ads") || pathname.startsWith("/landing")) return null;

  const isProduct = pathname.startsWith("/products");
  const number = isProduct ? CONTACT.productWhatsApp : CONTACT.generalWhatsApp;
  const text = isProduct
    ? `Hi Adszoo, I'm interested in your software product (${pathname}). Please share a demo and pricing.`
    : `Hi Adszoo, I found you on adszoo.in (${pathname}) and would like to discuss a project.`;

  return (
    <a
      href={waLink(text, number)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Adszoo on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-xl transition hover:scale-105"
    >
      <svg viewBox="0 0 32 32" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M16.003 3C8.832 3 3 8.832 3 16c0 2.289.6 4.523 1.739 6.49L3 29l6.68-1.71A12.94 12.94 0 0 0 16.003 29C23.17 29 29 23.168 29 16S23.17 3 16.003 3Zm0 23.6c-2.03 0-4.02-.546-5.756-1.578l-.413-.245-3.963 1.015 1.058-3.86-.27-.43A10.55 10.55 0 0 1 5.4 16c0-5.846 4.757-10.6 10.603-10.6S26.6 10.154 26.6 16s-4.751 10.6-10.597 10.6Zm5.81-7.94c-.318-.159-1.882-.928-2.174-1.034-.292-.106-.504-.159-.716.159-.212.318-.822 1.034-1.008 1.246-.185.212-.371.239-.689.08-.318-.16-1.343-.495-2.558-1.578-.945-.843-1.583-1.884-1.769-2.202-.185-.318-.02-.49.14-.648.143-.142.318-.371.477-.557.159-.185.212-.318.318-.53.106-.212.053-.398-.026-.557-.08-.159-.716-1.725-.981-2.362-.258-.62-.52-.536-.716-.546l-.61-.01a1.17 1.17 0 0 0-.849.398c-.292.318-1.114 1.088-1.114 2.653s1.14 3.078 1.3 3.29c.159.212 2.245 3.428 5.44 4.807.76.328 1.353.524 1.816.67.763.243 1.457.209 2.006.127.612-.091 1.882-.769 2.148-1.512.265-.743.265-1.38.185-1.512-.079-.133-.291-.212-.61-.371Z" />
      </svg>
      <span className="hidden sm:inline">
        {isProduct ? `WhatsApp ${CONTACT.productPhone}` : "Chat on WhatsApp"}
      </span>
    </a>
  );
}
