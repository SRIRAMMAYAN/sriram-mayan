"use client";

import { Typography } from "@material-tailwind/react";
import {
  CpuChipIcon, CircleStackIcon, ChartBarIcon,
  CodeBracketIcon, PresentationChartLineIcon, UserGroupIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";
import { SkillGauge } from "@/components/skill-gauge";
import { SectionTransition } from "@/components/section-transition";

const SKILLS = [
  { icon: CpuChipIcon,                title: "ML / Deep Learning",      children: "Proficient in building and training deep learning models using TensorFlow and PyTorch. Experience with CNNs, Vision Transformers (ViT), and hybrid architectures for real-world medical and security applications." },
  { icon: CodeBracketIcon,             title: "Programming Languages",   children: "Strong command of Python and Java as primary languages, with web skills in HTML, CSS, and JavaScript. Python is my go-to for all ML pipelines, data processing, and model deployment workflows." },
  { icon: CircleStackIcon,             title: "Databases",               children: "Hands-on experience with MySQL for relational data and MongoDB (NoSQL) for unstructured datasets. Comfortable designing schemas and writing efficient queries for data-driven applications." },
  { icon: ChartBarIcon,                title: "Data Visualization",      children: "Skilled in Power BI and Tableau for building insightful dashboards. Also use Grad-CAM for explainable AI — visually highlighting which image regions drive model predictions." },
  { icon: PresentationChartLineIcon,   title: "Research & Publication",  children: "Published research in IEEE on brain tumor classification using hybrid CNN-Transformer models. Presented deep learning work at national-level technical symposiums and academic conferences." },
  { icon: UserGroupIcon,               title: "Soft Skills & Leadership",children: "Strong communicator and team player with proven leadership experience. District-level chess competitor and zonal-level badminton player — demonstrating strategic thinking and discipline under pressure." },
];

const GAUGES = [
  { label: "Python",       percent: 70, color: "#3b82f6" },
  { label: "TensorFlow",   percent: 65, color: "#f59e0b" },
  { label: "PyTorch",      percent: 68, color: "#ef4444" },
  { label: "SQL/NoSQL",    percent: 80, color: "#10b981" },
  { label: "Tableau",      percent: 80, color: "#f97316" },
  { label: "Research",     percent: 70, color: "#8b5cf6" },
];

export function Skills() {
  return (
    <SectionTransition as="section" className="px-4 sm:px-8 pt-20 pb-10">
      <div className="container mx-auto mb-16 text-center">
        <Typography color="blue-gray" className="reveal mb-2 font-bold uppercase tracking-widest text-xs">
          my skills
        </Typography>
        <Typography variant="h1" color="blue-gray" className="reveal reveal-delay-1 mb-4">
          What I Do
        </Typography>
        <Typography variant="lead" className="reveal reveal-delay-2 mx-auto w-full !text-gray-500 lg:w-10/12">
          From building IEEE-published deep learning models to competing at
          district-level chess — I bring precision, curiosity, and relentless
          drive to everything I tackle.
        </Typography>
      </div>

      {/* Skill gauge row */}
      <div className="container mx-auto mb-16">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 xl:grid-cols-6">
          {GAUGES.map((g, i) => (
            <div key={g.label} className={`reveal reveal-delay-${Math.min(i + 1, 6)}`}>
              <SkillGauge percent={g.percent} label={g.label} color={g.color} size={100} />
            </div>
          ))}
        </div>
      </div>

      {/* Skill cards grid */}
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <div key={idx} className={`reveal reveal-delay-${Math.min(idx + 1, 6)}`}>
            <SkillCard {...props} />
          </div>
        ))}
      </div>
    </SectionTransition>
  );
}

export default Skills;
