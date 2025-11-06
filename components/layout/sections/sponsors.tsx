"use client";

import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import Image from "next/image";

interface SponsorsProps {
  logo: string;
  name: string;
}

const sponsors: SponsorsProps[] = [
  { logo: "/clients/Anthen.webp", name: "Anthen Engineering" },
  { logo: "/clients/Kvm.webp", name: "KVM CMart" },
  { logo: "/clients/Regain.webp", name: "Regain Hair Care" },
  {
    logo: "/clients/Gafur.webp",
    name: "Gaf Clickz",
  },
  { logo: "/clients/Tagknot.webp", name: "Tagknot" },
  { logo: "/clients/Taiyo.webp", name: "Taiyo" },
  { logo: "/clients/abdesignlabs.webp", name: "AB Design Labs" },
  {
    logo: "/clients/Promide_Steel_Logo.png",
    name: "Promide Steel Fabrication",
  },
  { logo: "/clients/Mei.png", name: "Mei IFF" },
  { logo: "/clients/nura.png", name: "Nura" },
];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="w-full max-w-6xl mx-auto px-4">
      <h2 className="text-sm md:text-md text-center mb-6 font-semibold text-muted-foreground">
        Trusted by 15+ Businesses
      </h2>

      <div className="overflow-hidden">
        <Marquee className="gap-12" fade innerClassName="gap-12" pauseOnHover>
          {sponsors.map(({ logo, name }) => (
            <div
              key={name}
              className="flex items-center justify-center h-16 md:h-24"
            >
              <Image
                src={logo}
                alt={name}
                width={120}
                height={60}
                className="object-contain w-auto h-full grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
