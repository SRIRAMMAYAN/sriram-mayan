"use client";

import { Typography } from "@material-tailwind/react";
import { SectionTransition } from "@/components/section-transition";

const CERTIFICATIONS = [
  { name: "Programming with Java", org: "NPTEL" },
  { name: "Joy of Computing using Python", org: "NPTEL" },
  { name: "English for Technical Professionals", org: "IEEE" },
  { name: "AWS Solutions Architecture", org: "Amazon Web Services" },
  { name: "Software Development Simulation", org: "DATACOM" },
  { name: "Infosys Springboard Program", org: "Infosys" },
];

export function Clients() {
  return (
    <SectionTransition as="section" className="px-4 sm:px-8 py-12 bg-gray-50">
      <div className="container mx-auto text-center mb-10">
        <Typography color="blue-gray" className="reveal mb-2 font-bold uppercase tracking-widest text-xs">
          Certifications
        </Typography>
        <Typography variant="h3" color="blue-gray" className="reveal reveal-delay-1">
          Courses & Training
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {CERTIFICATIONS.map((cert, idx) => (
          <div
            key={idx}
            className={`reveal reveal-delay-${Math.min(idx + 1, 6)} flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 text-center transition-shadow hover:shadow-md`}
          >
            <Typography variant="small" color="blue-gray" className="font-semibold leading-tight">
              {cert.name}
            </Typography>
            <Typography variant="small" className="text-gray-500 mt-1 text-xs">
              {cert.org}
            </Typography>
          </div>
        ))}
      </div>
    </SectionTransition>
  );
}

export default Clients;
