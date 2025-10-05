"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface AnimatedPreviewWithLightboxProps {
  src: string;
  alt?: string;
  isNura?: boolean;
}

/**
 * - Mobile: renders a full-width auto-height image (like original).
 * - Desktop (lg+): renders a small preview card. Clicking opens a full-screen lightbox.
 */
export default function AnimatedPreviewWithLightbox({
  src,
  alt = "Preview image",
  isNura = false,
}: AnimatedPreviewWithLightboxProps) {
  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // sizes for preview card on desktop
  const previewClass = isNura
    ? "w-full h-[320px] md:h-[360px] lg:h-[260px]" // Nura smaller on desktop
    : "w-full h-[420px] md:h-[520px] lg:h-[420px]";

  return (
    <>
      {/* MOBILE: full-width auto image (visible < lg) */}
      <div className="block lg:hidden w-full rounded-lg overflow-hidden shadow-lg">
        <div className="relative w-full" style={{ height: "auto" }}>
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={800}
            sizes="100vw"
            className="w-full h-auto object-contain"
            onLoadingComplete={() => setLoaded(true)}
            priority
          />
        </div>
      </div>

      {/* DESKTOP: preview card with shimmer, clickable to open lightbox */}
      <div
        className={`hidden lg:block rounded-lg overflow-hidden cursor-pointer ${previewClass} relative`}
        onClick={() => setOpen(true)}
        role="button"
        aria-label="Open preview"
      >
        {/* shimmer skeleton */}
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-pulse">
            <div className="w-3/4 h-3/4 rounded-lg bg-gradient-to-br from-gray-200 to-gray-100/70 shadow-inner" />
          </div>
        )}

        {/* image container */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 1024px) 100vw, 1200px"
            style={{ objectFit: "contain" }}
            onLoadingComplete={() => setLoaded(true)}
            priority
          />
        </div>

        {/* subtle overlay + zoom icon */}
        <div className="absolute bottom-4 right-4 bg-black/40 text-white px-3 py-1 rounded-full text-xs flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 3h6v6"
            />
            <path
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 14L21 3"
            />
            <rect
              x="3"
              y="3"
              width="7"
              height="7"
              rx="1"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect
              x="3"
              y="14"
              width="7"
              height="7"
              rx="1"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          View full
        </div>
      </div>

      {/* LIGHTBOX */}
      {open && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-[95vw] max-h-[95vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              aria-label="Close preview"
              className="absolute top-3 right-3 z-20 bg-black/50 hover:bg-black/60 text-white p-2 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Actual image */}
            <div className="relative w-full h-[75vh] sm:h-[80vh] md:h-[85vh]">
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 1024px) 100vw, 1200px"
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
