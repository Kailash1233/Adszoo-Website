import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Systems — Websites + Automation that Generate Revenue | Adszoo",
  description:
    "A web system is a website connected to lead capture, CRM, WhatsApp and automation. Adszoo builds web systems that turn traffic into qualified, tracked enquiries.",
  alternates: { canonical: "/websystems" },
  openGraph: {
    url: "/websystems",
    title: "Web Systems by Adszoo",
    description: "Websites connected to lead capture, CRM, WhatsApp and automation.",
  },
};

export default function WebSystemsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
