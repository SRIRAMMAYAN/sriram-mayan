"use client";

import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

/**
 * Wraps a section so its `.reveal` children animate in on scroll.
 * Usage:
 *   <SectionTransition>
 *     <h2 className="reveal">…</h2>
 *     <p  className="reveal reveal-delay-1">…</p>
 *   </SectionTransition>
 */
export function SectionTransition({ children, className = "", as: Tag = "div" }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    const el = ref.current;
    if (!el) return;
    el.querySelectorAll(".reveal").forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}

SectionTransition.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  as: PropTypes.elementType,
};

export default SectionTransition;
