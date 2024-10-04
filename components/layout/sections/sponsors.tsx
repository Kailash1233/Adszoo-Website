"use client";

import Image from "@/node_modules/next/image";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";

interface SponsorsProps {
  logo: string;
  name: string;
}

const sponsors: SponsorsProps[] = [
  {
    logo: "/clients/anthen.jpeg",
    name: "Anthen Engineering",
  },
  {
    logo: "/clients/kvm.jpeg",
    name: "KVM CMart",
  },
  {
    logo: "/clients/tagknot.png",
    name: "TagKnot",
  },
  {
    logo: "/clients/Regain.jpeg",
    name: "Regain Hair Clinic",
  },
  {
    logo: "/clients/SRINIVASAN.png",
    name: "Srinivasan Chess Academy",
  },
  {
    logo: "/clients/Pixels.png",
    name: "Pixels Studio",
  },
  {
    logo: "/clients/symbiote.avif",
    name: "Symbiote",
  },
];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="md:max-w-[60%] mx-auto">
      <h2 className="text-lg md:text-xl text-center mb-6">Our Clients</h2>

      <div className="mx-auto">
        <Marquee
          className="gap-[3rem]"
          fade
          innerClassName="gap-[3rem]"
          pauseOnHover
        >
          {sponsors.map(({ logo, name }) => (
            <div key={name} className="flex items-center">
              {/* <img
                src={logo}
                alt={name}
                className="h-16 md:h-24 object-contain"
              /> */}
              <Image
                src={logo}
                alt={name}
                className="h-16 md:h-24 object-contain"
                layout="intrinsic"
                width={100}
                height={100}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
