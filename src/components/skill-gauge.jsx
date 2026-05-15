"use client";

import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

/**
 * Animated SVG arc gauge.
 *
 * Props:
 *   percent   – 0–100
 *   label     – text below the gauge (e.g. "Python")
 *   color     – stroke colour (default gray-900)
 *   size      – viewBox size in px (default 100)
 */
export function SkillGauge({
  percent = 75,
  label = "",
  color = "#111827",
  size = 100,
}) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);

  // Trigger once when the gauge enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const radius = 38;
  const cx = size / 2;
  const cy = size / 2;
  const circumference = 2 * Math.PI * radius;
  // We only draw 270° arc (from 135° to 405°), so total arc = 0.75 * circumference
  const arcLength = circumference * 0.75;
  const offset = arcLength - (animated ? (percent / 100) * arcLength : arcLength);

  // SVG arc: start at bottom-left (135°), sweep clockwise 270°
  const startAngle = 135;
  const toRad = (deg) => (deg * Math.PI) / 180;
  const arcPath = describeArc(cx, cy, radius, startAngle, startAngle + 270);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-2"
      role="img"
      aria-label={`${label}: ${percent}%`}
    >
      <div className={animated ? "gauge-active" : ""}>
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          aria-hidden="true"
        >
          {/* Track */}
          <path
            d={arcPath}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="7"
            strokeLinecap="round"
          />
          {/* Fill */}
          <path
            d={arcPath}
            fill="none"
            stroke={color}
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray={arcLength}
            strokeDashoffset={offset}
            style={{
              transition: "stroke-dashoffset 1.2s cubic-bezier(0.16,1,0.3,1)",
            }}
          />
          {/* Percentage label */}
          <text
            x={cx}
            y={cy + 5}
            textAnchor="middle"
            fontSize="16"
            fontWeight="700"
            fill="#111827"
          >
            {animated ? `${percent}%` : "0%"}
          </text>
        </svg>
      </div>
      <span className="text-xs font-semibold text-gray-600 tracking-wide text-center">
        {label}
      </span>
    </div>
  );
}

/** Utility: SVG arc path string */
function describeArc(cx, cy, r, startDeg, endDeg) {
  const toRad = (d) => (d * Math.PI) / 180;
  const start = polarToCartesian(cx, cy, r, endDeg);
  const end = polarToCartesian(cx, cy, r, startDeg);
  const largeArc = endDeg - startDeg <= 180 ? "0" : "1";
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 0 ${end.x} ${end.y}`;
}

function polarToCartesian(cx, cy, r, angleDeg) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

SkillGauge.propTypes = {
  percent: PropTypes.number,
  label: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
};

export default SkillGauge;
