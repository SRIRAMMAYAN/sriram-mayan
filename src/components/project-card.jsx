import React from "react";
import PropTypes from "prop-types";
import {
  Card, CardBody, Typography, Button,
} from "@material-tailwind/react";
import { LazyImage } from "./lazy-image";

export function ProjectCard({ img, title, desc, github }) {
  return (
    <div className="project-card-wrap rounded-2xl">
      <Card color="transparent" shadow={false} className="flex flex-col h-full">
        {/* Image with lazy load + shimmer + zoom */}
        <div className="mx-0 mt-0 mb-6 h-48 rounded-xl overflow-hidden">
          <LazyImage
            src={img}
            alt={title}
            className="h-48 w-full"
            imgClass="h-full w-full object-cover"
          />
        </div>

        <CardBody className="p-1 flex flex-col flex-1">
          <Typography variant="h5" color="blue-gray" className="mb-2 text-blue-gray-900">
            {title}
          </Typography>
          <Typography className="mb-6 font-normal !text-gray-500 text-justify flex-1">
            {desc}
          </Typography>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <Button
              color="gray"
              size="sm"
              className="transition-transform hover:scale-105 active:scale-95"
            >
              see details
            </Button>
          </a>
        </CardBody>
      </Card>
    </div>
  );
}

ProjectCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
};

export default ProjectCard;
