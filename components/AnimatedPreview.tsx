"use client";

import Image from "next/image";
import { useState } from "react";

interface AnimatedPreviewProps {
  src: string;
  alt: string;
  isNura?: boolean;
}

/**
 * AnimatedPreview
 * - shows a shimmer / skeleton until the Next/Image finishes loading
 * - fades the image in when loaded
 * - accepts `isNura` to use a smaller desktop presentation for Nura
 */
export default function AnimatedPreview({
  src,
  alt,
  isNura = false,
}: AnimatedPreviewProps) {
  const [loaded, setLoaded] = useState(false);

  // responsive heights: default vs nura
  const wrapperClass = isNura
    ? "w-full h-[320px] md:h-[360px] lg:h-[260px]" // Nura smaller on desktop
    : "w-full h-[420px] md:h-[520px] lg:h-[420px]";

  return (
    <div
      className={`relative ${wrapperClass} rounded-lg overflow-hidden bg-white`}
    >
      {/* Shimmer / skeleton (visible while !loaded) */}
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-pulse">
          <div className="w-3/4 h-3/4 rounded-lg bg-gradient-to-br from-gray-200 to-gray-100/70 shadow-inner" />
        </div>
      )}

      {/* Next/Image with fade-in */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          style={{ objectFit: "contain" }}
          onLoadingComplete={() => setLoaded(true)}
          priority
        />
      </div>
    </div>
  );
}
