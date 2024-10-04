// "use client";

// import { Icon } from "@/components/ui/icon";
// import { Marquee } from "@devnomic/marquee";
// import "@devnomic/marquee/dist/index.css";
// import { icons } from "lucide-react";
// interface sponsorsProps {
//   icon: string;
//   name: string;
// }

// const sponsors: sponsorsProps[] = [
//   {
//     icon: "Crown",
//     name: "Anthen Engineering",
//   },
//   {
//     icon: "Vegan",
//     name: "KVM CMart",
//   },
//   {
//     icon: "Ghost",
//     name: "TagKnot",
//   },
//   {
//     icon: "Puzzle",
//     name: "Regain Hair Clinic",
//   },
//   {
//     icon: "Squirrel",
//     name: "Srinivasan Chess Academy",
//   },
//   {
//     icon: "Cookie",
//     name: "Pixels Studio",
//   },
//   {
//     icon: "Drama",
//     name: "Symbiote",
//   },
// ];

// export const SponsorsSection = () => {
//   return (
//     <section id="sponsors" className="max-w-[75%] mx-auto pb-24 sm:pb-32">
//       <h2 className="text-lg md:text-xl text-center mb-6">Our Clients</h2>

//       <div className="mx-auto">
//         <Marquee
//           className="gap-[3rem]"
//           fade
//           innerClassName="gap-[3rem]"
//           pauseOnHover
//         >
//           {sponsors.map(({ icon, name }) => (
//             <div
//               key={name}
//               className="flex items-center text-xl md:text-2xl font-medium"
//             >
//               <Icon
//                 name={icon as keyof typeof icons}
//                 size={32}
//                 color="white"
//                 className="mr-2"
//               />
//               {name}
//             </div>
//           ))}
//         </Marquee>
//       </div>
//     </section>
//   );
// };

"use client";

import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";

interface SponsorsProps {
  logo: string; // Path to logo image
  name: string; // Client name (optional if you don't want to display)
}

// Update the sponsors array with logo paths
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
              <img
                src={logo}
                alt={name}
                className="h-16 md:h-24 object-contain" // Adjust height as needed
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
