"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  AcademicCapIcon, TrophyIcon, DocumentCheckIcon, ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";
import { SectionTransition } from "@/components/section-transition";

const RESUME_ITEMS = [
  { icon: AcademicCapIcon,   children: "B.Tech – Artificial Intelligence & Data Science | Mepco Schlenk Engineering College (2022–2026) | CGPA: 6.71" },
  { icon: DocumentCheckIcon, children: "HSC – Computer Science | Keren Metric Higher Secondary School (2022) | 88.5%" },
  { icon: TrophyIcon,        children: "IEEE Published — Brain Tumor Classification using Hybrid CNN + Swin Transformer (SMDFNet-SwinBTC)" },
];

export function Resume() {
  return (
    <SectionTransition as="section" className="px-4 sm:px-8 py-24">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <Typography variant="h2" color="blue-gray" className="reveal">
            Education & Achievements
          </Typography>
          <Typography className="reveal reveal-delay-1 mb-4 mt-3 w-full lg:w-9/12 font-normal !text-gray-500">
            Final-year AI &amp; Data Science student with hands-on experience
            in deep learning, computer vision, and NLP. IEEE-published
            researcher with a strong academic foundation and a passion for
            solving real-world problems using AI.
          </Typography>
          <div className="reveal reveal-delay-2">
            <a href="https://linkedin.com/in/mayan-sriram" target="_blank" rel="noreferrer">
              <Button variant="text" color="gray" className="flex items-center gap-2 hover:gap-3 transition-all">
                View LinkedIn
                <ArrowRightIcon strokeWidth={3} className="h-3.5 w-3.5 text-gray-900" />
              </Button>
            </a>
          </div>
        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {RESUME_ITEMS.map((props, idx) => (
            <div key={idx} className={`reveal reveal-delay-${idx + 1}`}>
              <ResumeItem {...props} />
            </div>
          ))}
        </div>
      </div>
    </SectionTransition>
  );
}

export default Resume;
