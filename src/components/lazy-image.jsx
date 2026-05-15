"use client";

import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

/**
 * Lazy-loaded image with shimmer placeholder.
 * Falls back to a grey box if src is missing.
 * Wraps with img-zoom-wrap for CSS hover-zoom effect.
 *
 * Props:
 *   src        – image path (local /public or external URL)
 *   alt        – accessible alt text (required)
 *   className  – extra classes on the outer wrapper div
 *   imgClass   – extra classes on the <img> element
 *   width      – optional width hint (for Next.js Image or native)
 *   height     – optional height hint
 */
export function LazyImage({ src, alt, className = "", imgClass = "" }) {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    if (!wrapRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" }
    );
    observer.observe(wrapRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapRef}
      className={`img-zoom-wrap relative ${className}`}
      style={{ background: "#f3f4f6" }}
    >
      {/* Shimmer shown until image loads */}
      {!loaded && (
        <div
          className="img-placeholder absolute inset-0"
          aria-hidden="true"
        />
      )}

      {inView && src && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`${imgClass} ${loaded ? "opacity-100" : "opacity-0"}`}
          style={{ transition: "opacity 0.4s ease" }}
        />
      )}

      {/* Placeholder graphic when no src */}
      {(!src || (!inView && !loaded)) && (
        <div
          className="absolute inset-0 flex items-center justify-center text-gray-300"
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

LazyImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  imgClass: PropTypes.string,
};

export default LazyImage;
