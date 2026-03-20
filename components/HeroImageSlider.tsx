"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export const HeroImageSlider = () => {
  const images = [
    "/hero/abdesignlabs.jpg",
    "/hero/eswaribuilders.jpg",
    "/hero/gafclickz.jpg",
    "/hero/hitechinsulation.jpg",
    "/hero/promidesteel.jpg",
    "/hero/sathiyafruits.jpg",
    "/hero/srinivasanchessacademy.jpg",
    "/hero/vizhipomvidhaipom.jpg",
  ];

  // Duplicate for seamless loop
  const loopImages = [...images, ...images];
  const trackRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;

    const trackWidth = trackRef.current.scrollWidth / 2;

    trackRef.current.animate(
      [
        { transform: "translateX(0px)" },
        { transform: `translateX(-${trackWidth}px)` },
      ],
      {
        duration: 60000, // 60s = extremely smooth and calm
        iterations: Infinity,
        easing: "linear",
      }
    );
  }, []);

  return (
    <div className="relative w-full overflow-hidden mt-8 mask-edge">
      <ul
        ref={trackRef}
        className="flex gap-6 px-4 md:px-8"
        style={{ listStyle: "none", willChange: "transform" }}
      >
        {loopImages.map((src, index) => (
          <li
            key={index}
            className="flex-shrink-0 rounded-2xl overflow-hidden bg-muted shadow-lg"
            style={{
              width: index % 2 === 0 ? 420 : 300,
              height: 260,
            }}
          >
            <Image
              src={src}
              alt=""
              width={800}
              height={600}
              className="h-full w-full object-cover"
              draggable={false}
              priority={index < 4}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
