"use client";

import { useEffect, useMemo, useState } from "react";

type TocItem = { id: string; text: string; level: number };

type TableOfContentsProps = {
  containerSelector?: string;
};

export default function TableOfContents({
  containerSelector = "article",
}: TableOfContentsProps) {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const container = document.querySelector(
      containerSelector
    ) as HTMLElement | null;
    if (!container) return;
    const headings = Array.from(
      container.querySelectorAll("h2, h3")
    ) as HTMLHeadingElement[];

    const toc: TocItem[] = headings.map((h) => {
      if (!h.id) {
        h.id =
          h.textContent
            ?.toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "") || "";
      }
      return {
        id: h.id,
        text: h.textContent || "",
        level: h.tagName === "H2" ? 2 : 3,
      };
    });
    setItems(toc);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId((entry.target as HTMLElement).id);
          }
        });
      },
      { rootMargin: "0px 0px -70% 0px", threshold: 0.1 }
    );
    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [containerSelector]);

  const content = useMemo(() => items, [items]);

  if (content.length === 0) return null;

  return (
    <nav className="sticky top-24 hidden xl:block text-sm">
      <div className="font-semibold text-foreground/80 mb-3">On this page</div>
      <ul className="space-y-1">
        {content.map((item) => (
          <li key={item.id} className={item.level === 3 ? "pl-4" : ""}>
            <a
              href={`#${item.id}`}
              className={`block rounded px-2 py-1 hover:bg-muted transition ${
                activeId === item.id ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

