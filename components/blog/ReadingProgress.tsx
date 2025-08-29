"use client";

import { useEffect, useState } from "react";

type ReadingProgressProps = {
  targetSelector?: string;
};

export default function ReadingProgress({
  targetSelector = "article",
}: ReadingProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const target = document.querySelector(targetSelector) as HTMLElement | null;
    if (!target) return;

    function onScroll() {
      const rect = target.getBoundingClientRect();
      const total = target.scrollHeight - window.innerHeight;
      const scrolled = Math.min(
        Math.max(window.scrollY - (target.offsetTop - 0), 0),
        total
      );
      const pct = total > 0 ? (scrolled / total) * 100 : 0;
      setProgress(pct);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [targetSelector]);

  return (
    <div className="fixed left-0 right-0 top-0 z-40 h-1 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

