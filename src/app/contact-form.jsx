"use client";

import { Typography, IconButton } from "@material-tailwind/react";

export function ContactForm() {
  return (
    <section className="px-4 sm:px-8 py-20 bg-[#f5f0eb]">
      {/* Section label */}
      <p className="text-xs font-semibold tracking-widest text-orange-600 uppercase mb-6">
      </p>

      {/* Top row: heading + illustration */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
        {/* Left: Heading + description */}
        <div className="max-w-xl">
          <h1
            className="text-5xl lg:text-6xl font-bold text-[#1a2e44] leading-tight mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Have an <br /> opportunity?{" "}
            <span className="italic text-orange-500">Let&apos;s talk.</span>
          </h1>
          <p className="text-gray-600 text-base text-justify leading-relaxed max-w-sm">
            I&apos;m open to internships, collaborations, and interesting AI /
            data science projects. Based in Virudhunagar, Tamil Nadu — available
            remotely or on-site.
          </p>
        </div>

        {/* Right: Boy illustration card */}
        <div className="bg-white rounded-3xl shadow-md p-6 flex items-center justify-center w-full max-w-xs sm:max-w-sm h-auto sm:h-64 flex-shrink-0">
          {/* Inline SVG: boy sitting with laptop */}
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-48 h-48"
          >
            {/* Background circle */}
            <circle cx="100" cy="110" r="75" fill="#dce8f5" />

            {/* Body */}
            <rect x="72" y="105" width="56" height="50" rx="10" fill="#3b5998" />

            {/* Head */}
            <circle cx="100" cy="88" r="22" fill="#f4c48a" />

            {/* Hair */}
            <path d="M78 82 Q100 60 122 82" fill="#3b2a1a" stroke="none" />
            <ellipse cx="100" cy="68" rx="22" ry="14" fill="#3b2a1a" />

            {/* Eyes */}
            <circle cx="93" cy="88" r="2.5" fill="#333" />
            <circle cx="107" cy="88" r="2.5" fill="#333" />

            {/* Smile */}
            <path
              d="M93 96 Q100 102 107 96"
              stroke="#c07040"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />

            {/* Arms */}
            <rect x="50" y="108" width="22" height="12" rx="6" fill="#3b5998" />
            <rect x="128" y="108" width="22" height="12" rx="6" fill="#3b5998" />

            {/* Hands */}
            <circle cx="50" cy="117" r="7" fill="#f4c48a" />
            <circle cx="150" cy="117" r="7" fill="#f4c48a" />

            {/* Laptop base */}
            <rect x="58" y="128" width="84" height="8" rx="4" fill="#999" />

            {/* Laptop screen */}
            <rect x="65" y="100" width="70" height="30" rx="4" fill="#222" />
            <rect x="68" y="103" width="64" height="24" rx="2" fill="#4a90d9" />

            {/* Code lines on screen */}
            <rect x="72" y="108" width="30" height="2" rx="1" fill="#fff" opacity="0.7" />
            <rect x="72" y="113" width="20" height="2" rx="1" fill="#ffd700" opacity="0.7" />
            <rect x="72" y="118" width="35" height="2" rx="1" fill="#fff" opacity="0.5" />

            {/* Legs */}
            <rect x="76" y="152" width="18" height="22" rx="6" fill="#2c3e6b" />
            <rect x="106" y="152" width="18" height="22" rx="6" fill="#2c3e6b" />

            {/* Shoes */}
            <ellipse cx="85" cy="174" rx="12" ry="6" fill="#222" />
            <ellipse cx="115" cy="174" rx="12" ry="6" fill="#222" />
          </svg>
        </div>
      </div>

      {/* Divider */}
      <div className="container mx-auto border-t border-gray-300 mb-12" />

      {/* Find me on */}
      <div className="container mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
            FIND ME ON
          </span>
          <div className="flex-1 border-t border-gray-300" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/mayan-sriram"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl p-5 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0077b5] flex items-center justify-center">
              <i className="fa-brands fa-linkedin text-white text-lg" />
            </div>
            <div>
              <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase">
                LinkedIn
              </p>
              <p className="text-sm font-semibold text-gray-800">mayan-sriram</p>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/SRIRAMMAYAN"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl p-5 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-[#1a1a1a] flex items-center justify-center">
              <i className="fa-brands fa-github text-white text-lg" />
            </div>
            <div>
              <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase">
                GitHub
              </p>
              <p className="text-sm font-semibold text-gray-800">mayan-sriram</p>
            </div>
          </a>

          {/* Gmail */}
          <a
            href="mailto:mayansriram@gmail.com"
            className="bg-white rounded-2xl p-5 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-[#ea4335] flex items-center justify-center">
              <i className="fa-solid fa-envelope text-white text-lg" />
            </div>
            <div>
              <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase">
                Gmail
              </p>
              <p className="text-sm font-semibold text-gray-800 truncate">
                mayansriram@gmail...
              </p>
            </div>
          </a>

          {/* Phone / WhatsApp */}
          <a
            href="tel:+919843227159"
            className="bg-white rounded-2xl p-5 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-[#25d366] flex items-center justify-center">
              <i className="fa-brands fa-whatsapp text-white text-lg" />
            </div>
            <div>
              <p className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase">
                WhatsApp
              </p>
              <p className="text-sm font-semibold text-gray-800">+91 9843227159</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
