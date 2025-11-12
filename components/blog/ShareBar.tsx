"use client";

import { useMemo, useState } from "react";
import {
  Facebook,
  Linkedin,
  Twitter,
  Link as LinkIcon,
  Check,
} from "lucide-react";
import clsx from "clsx";

type ShareBarProps = {
  url: string;
  title: string;
  vertical?: boolean; // sticky sidebar
  compact?: boolean; // inline mobile bar
};

export default function ShareBar({
  url,
  title,
  vertical = false,
  compact = false,
}: ShareBarProps) {
  const [copied, setCopied] = useState(false);

  const encoded = useMemo(
    () => ({
      url: encodeURIComponent(url),
      title: encodeURIComponent(title),
    }),
    [url, title]
  );

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  }

  // icon sizing
  const iconSize = compact ? 16 : 18;

  // base button classes (adjust width/height for compact mode)
  const btnBase = clsx(
    "inline-flex items-center justify-center rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-primary/40",
    compact ? "w-9 h-9 p-0" : "p-2",
    "hover:text-primary hover:bg-muted"
  );

  // container classes
  const containerClass = clsx(
    "text-muted-foreground",
    vertical
      ? "hidden lg:flex flex-col gap-3 items-center sticky top-24"
      : compact
      ? "flex flex-row gap-2 items-center justify-center"
      : "flex flex-row gap-3 items-center"
  );

  return (
    <div className={containerClass}>
      <a
        aria-label="Share on Twitter"
        title="Share on Twitter"
        href={`https://twitter.com/intent/tweet?text=${encoded.title}&url=${encoded.url}`}
        target="_blank"
        rel="noopener noreferrer"
        className={btnBase}
      >
        <Twitter size={iconSize} />
      </a>

      <a
        aria-label="Share on LinkedIn"
        title="Share on LinkedIn"
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encoded.url}`}
        target="_blank"
        rel="noopener noreferrer"
        className={btnBase}
      >
        <Linkedin size={iconSize} />
      </a>

      <a
        aria-label="Share on Facebook"
        title="Share on Facebook"
        href={`https://www.facebook.com/sharer/sharer.php?u=${encoded.url}`}
        target="_blank"
        rel="noopener noreferrer"
        className={btnBase}
      >
        <Facebook size={iconSize} />
      </a>

      <button
        aria-label={copied ? "Link copied" : "Copy link"}
        title={copied ? "Copied!" : "Copy link"}
        onClick={copyLink}
        // keep copy button from shrinking and ensure consistent tappable area
        className={clsx(
          btnBase,
          "flex-shrink-0",
          copied ? "text-green-600" : ""
        )}
      >
        {copied ? <Check size={iconSize} /> : <LinkIcon size={iconSize} />}
      </button>
    </div>
  );
}
