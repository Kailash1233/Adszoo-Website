"use client";

import { useMemo } from "react";
import { Facebook, Linkedin, Twitter, Link as LinkIcon } from "lucide-react";

type ShareBarProps = {
  url: string;
  title: string;
};

export default function ShareBar({ url, title }: ShareBarProps) {
  const encoded = useMemo(
    () => ({
      url: encodeURIComponent(url),
      title: encodeURIComponent(title),
    }),
    [url, title]
  );

  function copyLink() {
    navigator.clipboard.writeText(url).catch(() => {});
  }

  return (
    <div className="sticky top-24 hidden lg:flex flex-col gap-3 items-center text-muted-foreground">
      <a
        aria-label="Share on Twitter"
        href={`https://twitter.com/intent/tweet?text=${encoded.title}&url=${encoded.url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full hover:text-primary hover:bg-muted transition"
      >
        <Twitter size={18} />
      </a>
      <a
        aria-label="Share on LinkedIn"
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encoded.url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full hover:text-primary hover:bg-muted transition"
      >
        <Linkedin size={18} />
      </a>
      <a
        aria-label="Share on Facebook"
        href={`https://www.facebook.com/sharer/sharer.php?u=${encoded.url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full hover:text-primary hover:bg-muted transition"
      >
        <Facebook size={18} />
      </a>
      <button
        aria-label="Copy link"
        onClick={copyLink}
        className="p-2 rounded-full hover:text-primary hover:bg-muted transition"
      >
        <LinkIcon size={18} />
      </button>
    </div>
  );
}

