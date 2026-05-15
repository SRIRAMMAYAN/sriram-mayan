"use client";

import { Typography } from "@material-tailwind/react";
import LogoLoop from "@/components/LogoLoop";
import {
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiMongodb,
  SiMysql,
  SiGit,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

const TOOL_LOGOS = [
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiTensorflow />, title: "TensorFlow", href: "https://www.tensorflow.org" },
  { node: <SiPytorch />, title: "PyTorch", href: "https://pytorch.org" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

export function PopularClients() {
  return (
    <section className="px-4 sm:px-8 py-16">
      <div className="container mx-auto text-center mb-12">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          Tech Stack
        </Typography>
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Tools & Technologies
        </Typography>
      </div>
      <div className="container mx-auto rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-lg shadow-slate-200/40 dark:border-slate-700 dark:bg-slate-950/80">
        <LogoLoop
          logos={TOOL_LOGOS}
          speed={120}
          direction="left"
          logoHeight={52}
          gap={48}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#e2e8f0"
          ariaLabel="Tools and technologies"
        />
      </div>
    </section>
  );
}

export default PopularClients;
