"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type TocItem = { id: string; text: string; level: number };

type TableOfContentsProps = {
  containerSelector?: string;
  // show on which min breakpoint: "lg" or "xl" doesn't change code, styling handled by classes
  minVisibleBreakpointClass?: string; // e.g. "hidden lg:block" (default)
};

export default function TableOfContents({
  containerSelector = "article",
  minVisibleBreakpointClass = "hidden lg:block",
}: TableOfContentsProps) {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);
  const mutationObserverRef = useRef<MutationObserver | null>(null);
  const lastSetActiveRef = useRef<number>(0);

  // helper to slugify headings (keeps original logic)
  const slugify = (text: string) =>
    text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  // build TOC from headings & ensure ids exist
  const buildToc = useCallback((): TocItem[] => {
    const container = document.querySelector(
      containerSelector
    ) as HTMLElement | null;
    if (!container) return [];

    const headings = Array.from(
      container.querySelectorAll("h2, h3")
    ) as HTMLHeadingElement[];
    const toc = headings.map((h) => {
      if (!h.id) {
        h.id = slugify(h.textContent || "");
      }
      return {
        id: h.id,
        text: h.textContent || "",
        level: h.tagName === "H2" ? 2 : 3,
      } as TocItem;
    });

    return toc;
  }, [containerSelector]);

  // set up IntersectionObserver to track active heading
  useEffect(() => {
    const container = document.querySelector(
      containerSelector
    ) as HTMLElement | null;
    if (!container) {
      setItems([]);
      return;
    }

    const toc = buildToc();
    setItems(toc);

    // cleanup previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }

    // IntersectionObserver callback — debounce updates slightly for stability
    const onIntersect: IntersectionObserverCallback = (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visible.length > 0) {
        const newest = (visible[0].target as HTMLElement).id;
        const now = Date.now();
        // only update if > 50ms since last update to avoid flicker
        if (now - lastSetActiveRef.current > 50) {
          lastSetActiveRef.current = now;
          setActiveId(newest);
        }
      }
    };

    observerRef.current = new IntersectionObserver(onIntersect, {
      // when the heading crosses ~30% from top of viewport, treat as active
      root: null,
      rootMargin: "-30% 0px -50% 0px",
      threshold: [0, 0.1, 0.5, 1],
    });

    // observe headings
    const headings = Array.from(
      container.querySelectorAll("h2, h3")
    ) as HTMLElement[];
    headings.forEach((h) => observerRef.current?.observe(h));

    // mutation observer: update TOC if headings change (useful for async content)
    if (mutationObserverRef.current) {
      mutationObserverRef.current.disconnect();
      mutationObserverRef.current = null;
    }

    mutationObserverRef.current = new MutationObserver(() => {
      const newToc = buildToc();
      setItems((prev) => {
        // quick equality check by ids to avoid unnecessary re-renders
        if (
          prev.length === newToc.length &&
          prev.every((p, i) => p.id === newToc[i].id)
        ) {
          return prev;
        }
        // rebind observer for new headings
        observerRef.current?.disconnect();
        const newHeadings = Array.from(
          document.querySelectorAll(
            `${containerSelector} h2, ${containerSelector} h3`
          )
        ) as HTMLElement[];
        newHeadings.forEach((h) => observerRef.current?.observe(h));
        return newToc;
      });
    });

    mutationObserverRef.current.observe(container, {
      childList: true,
      subtree: true,
    });

    return () => {
      observerRef.current?.disconnect();
      mutationObserverRef.current?.disconnect();
    };
  }, [containerSelector, buildToc]);

  // scroll handler for clicking a TOC link
  const handleClick = useCallback((e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;
    // prefer smooth center scroll
    target.scrollIntoView({ behavior: "smooth", block: "center" });
    // set focus for keyboard/screen-reader users
    target.setAttribute("tabindex", "-1");
    (target as HTMLElement).focus({ preventScroll: true });
    setActiveId(id);
  }, []);

  const content = useMemo(() => items, [items]);

  if (!content || content.length === 0) return null;

  return (
    <nav
      className={`${minVisibleBreakpointClass} sticky top-24 text-sm`}
      aria-label="Table of contents"
    >
      <ul className="space-y-1">
        {content.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li
              key={item.id}
              className={item.level === 3 ? "pl-4" : ""}
              data-level={item.level}
            >
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`block rounded px-2 py-1 hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-300 ${
                  isActive
                    ? "text-emerald-600 font-medium"
                    : "text-muted-foreground"
                }`}
                aria-current={isActive ? "true" : undefined}
              >
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
