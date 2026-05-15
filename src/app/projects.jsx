"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";
import { SectionTransition } from "@/components/section-transition";

const PROJECTS = [
  {
    img: "/image/brain-tumor.jpg",
    title: "Brain Tumor Classification",
    desc: "SMDFNet-SwinBTC: Hybrid CNN + Swin Transformer model to detect Glioma, Meningioma, Pituitary Tumor, and No Tumor from MRI/CT scans. Uses Grad-CAM for visual explainability. IEEE Published.",
    github: "https://github.com/SRIRAMMAYAN/Brain-Tumor-SMDFNet-SwimBTC",
  },
  {
    img: "/image/deepfakes.webp",
    title: "DeepFake Detection",
    desc: "Multimodal AI system analyzing visual frames and audio simultaneously using Vision Transformer (ViT) and Audio Fusion to identify AI-manipulated video content with high accuracy.",
    github: "https://github.com/SRIRAMMAYAN/DeepFake-Detection",
  },
  {
    img: "/image/cancer-prediction.jpg",
    title: "Cancer Detection",
    desc: "Random Forest ML pipeline predicting cancer types from structured patient data. Full preprocessing: missing value handling, label encoding, and feature scaling for production-ready output.",
    github: "https://github.com/SRIRAMMAYAN/CANCER-PREDICTION",
  },
  {
    img: "/image/baby-cry.jpg",
    title: "Don't Cry — Infant Cry Classifier",
    desc: "Audio classification model identifying why a baby cries (hunger, pain, discomfort). Noise removal + spectrogram conversion extracts rich sound features for deep learning classification.",
    github: "https://github.com/SRIRAMMAYAN/Infant-cry-analysis",
  },
];

export function Projects() {
  return (
    <SectionTransition as="section" className="py-28 px-4 sm:px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="reveal mb-4">
          My Projects
        </Typography>
        <Typography
          variant="lead"
          className="reveal reveal-delay-1 mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12 text-justify"
        >
          Real-world AI solutions — from medical imaging to audio intelligence.
          Each project is built with deep learning, rigorous preprocessing, and
          a focus on meaningful impact.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4 items-stretch">
        {PROJECTS.map((props, idx) => (
          <div key={idx} className={`reveal reveal-delay-${Math.min(idx + 1, 4)}`}>
            <ProjectCard {...props} />
          </div>
        ))}
      </div>
    </SectionTransition>
  );
}

export default Projects;
