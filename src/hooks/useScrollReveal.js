"use client";

import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver to all `.reveal` elements inside the
 * returned container ref, adding the `.visible` class when they enter the
 * viewport.
 *
 * @param {object} [options]
 * @param {number} [options.threshold=0.15]
 * @param {string} [options.rootMargin="0px 0px -40px 0px"]
 */
export function useScrollReveal(options = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const { threshold = 0.15, rootMargin = "0px 0px -40px 0px" } = options;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // fire once
          }
        });
      },
      { threshold, rootMargin }
    );

    const el = containerRef.current;
    if (!el) return;

    const targets = el.querySelectorAll(".reveal");
    targets.forEach((t) => observer.observe(t));

    return () => observer.disconnect();
  }, []);

  return containerRef;
}
