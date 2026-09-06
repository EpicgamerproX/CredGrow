"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // Add a slight delay to ensure DOM is fully rendered after route change
    const timeout = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.15,
        }
      );

      const elements = document.querySelectorAll(".reveal, .section, .section-tight, .sector-card, .editorial-row");
      elements.forEach((el) => observer.observe(el));

      return () => {
        elements.forEach((el) => observer.unobserve(el));
      };
    }, 100);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
