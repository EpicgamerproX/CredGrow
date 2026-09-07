"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof document === "undefined") return;

    // Guarantee .js class is present on root element
    document.documentElement.classList.add("js");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -50px 0px",
        threshold: 0.08,
      }
    );

    const selector =
      ".reveal, .section, .section-tight, .editorial-row, .pathway, .sector-card, .split-grid > div, .legal, .band";
    const elements = document.querySelectorAll(selector);

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
