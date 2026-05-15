import PropTypes from "prop-types";
import { Card, Typography } from "@material-tailwind/react";

export function ResumeItem({ icon: Icon, children }) {
  return (
    <div className="flex items-start gap-4">
      <Card
        color="gray"
        className="h-12 w-12 shrink-0 items-center justify-center !rounded-lg"
      >
        <Icon className="h-6 w-6" strokeWidth={2} />
      </Card>
      <Typography className="w-full font-normal !text-gray-500">
        {children}
      </Typography>
    </div>
  );
}

ResumeItem.propTypes = {
  /** A Heroicon component (or any React component that renders an SVG icon) */
  icon: PropTypes.elementType.isRequired,
  children: PropTypes.node.isRequired,
};

export default ResumeItem;
