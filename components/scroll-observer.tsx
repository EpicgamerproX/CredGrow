"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof document === "undefined") return;

    // Guarantee .js class exists on <html>
    document.documentElement.classList.add("js");

    const timeout = setTimeout(() => {
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
          rootMargin: "0px 0px -30px 0px",
          threshold: 0.1,
        }
      );

      const selector =
        ".reveal, .section, .section-tight, .editorial-row, .pathway, .sector-card, .split-grid > div, .legal";
      const elements = document.querySelectorAll(selector);

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // Immediately reveal elements already visible in viewport on load/navigation
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add("visible");
        } else {
          observer.observe(el);
        }
      });

      return () => {
        elements.forEach((el) => observer.unobserve(el));
      };
    }, 50);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
