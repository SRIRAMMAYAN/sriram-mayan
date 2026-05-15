"use client";

import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import { SectionTransition } from "@/components/section-transition";

export default function Hero() {
  return (
    <SectionTransition
      as="header"
      className="bg-white p-8 grain-overlay"
    >
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2 relative z-10">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="reveal mb-4 text-4xl sm:text-5xl lg:text-5xl !leading-tight"
          >
            AI & Data Science <br /> Portfolio
          </Typography>
          <Typography
            variant="lead"
            className="reveal reveal-delay-1 mb-4 !text-gray-500 md:pr-16 xl:pr-28 text-justify"
          >
            I&apos;m P Sriram Mayan, a final-year B.Tech student in Artificial
            Intelligence &amp; Data Science at Mepco Schlenk Engineering
            College. My work spans deep learning, computer vision, and
            real-world AI impact — from brain tumor detection to deepfake
            identification. IEEE Published researcher.
          </Typography>
          <div className="reveal reveal-delay-2 flex flex-wrap gap-3 mb-4">
            <a href="https://github.com/SRIRAMMAYAN" target="_blank" rel="noreferrer">
              <Button
                color="gray"
                className="flex items-center gap-2 transition-transform hover:scale-105 active:scale-95"
              >
                GitHub Profile
              </Button>
            </a>
            <a href="https://linkedin.com/in/mayan-sriram" target="_blank" rel="noreferrer">
              <Button
                variant="outlined"
                color="gray"
                className="flex items-center gap-2 transition-transform hover:scale-105 active:scale-95"
              >
                LinkedIn
              </Button>
            </a>
          </div>
          <Typography variant="small" className="reveal reveal-delay-3 font-normal !text-gray-500">
            mayansriram@gmail.com &nbsp;|&nbsp; +91 9843227159
          </Typography>
        </div>

        <div className="reveal reveal-delay-2 h-[22rem] sm:h-[28rem] md:h-[32rem] lg:h-[36rem] rounded-xl overflow-hidden shadow-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/image/avatar.png"
            alt="P Sriram Mayan"
            loading="eager"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
          />
        </div>
      </div>
    </SectionTransition>
  );
}
