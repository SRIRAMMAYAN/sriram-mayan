"use client";

import { Typography, Card, CardBody } from "@material-tailwind/react";
import { SectionTransition } from "@/components/section-transition";

const ACTIVITIES = [
  { icon: "🎤", title: "Technical Presentations", desc: "Presented deep learning research at academic seminars and national-level technical symposiums." },
  { icon: "⚡", title: "Hackathons & Workshops",  desc: "Active participant in AI/ML hackathons, coding competitions, and hands-on workshop programs." },
  { icon: "♟️", title: "Chess – District Level",  desc: "Represented the district in competitive chess, demonstrating strategic thinking under pressure." },
  { icon: "🏸", title: "Badminton – Zonal Level", desc: "Competed at zonal level — reflecting discipline, quick reflexes, and competitive team spirit." },
];

export function Testimonial() {
  return (
    <SectionTransition as="section" className="px-4 sm:px-8 py-24 bg-gray-50">
      <div className="container mx-auto mb-16 text-center">
        <Typography color="blue-gray" className="reveal mb-2 font-bold uppercase tracking-widest text-xs">
          Beyond Code
        </Typography>
        <Typography variant="h2" color="blue-gray" className="reveal reveal-delay-1 mb-4">
          Extracurricular Activities
        </Typography>
        <Typography variant="lead" className="reveal reveal-delay-2 mx-auto w-full !text-gray-500 lg:w-7/12">
          I believe the best engineers are well-rounded. From competitive chess
          to national symposiums — here&apos;s what keeps me sharp outside the lab.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {ACTIVITIES.map((activity, idx) => (
          <div key={idx} className={`reveal reveal-delay-${idx + 1}`}>
            <Card shadow={true} className="border border-gray-100 transition-shadow hover:shadow-lg h-full">
              <CardBody className="text-center p-8">
                <div className="text-4xl mb-4">{activity.icon}</div>
                <Typography variant="h6" color="blue-gray" className="mb-2 font-bold">
                  {activity.title}
                </Typography>
                <Typography variant="small" className="font-normal !text-gray-500">
                  {activity.desc}
                </Typography>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </SectionTransition>
  );
}

export default Testimonial;
