import React from "react";
import { motion } from "framer-motion";

const Section = ({ title }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and a slight downward position
      animate={{ opacity: 1, y: 0 }} // Animate to opacity 1 and original position
      transition={{ duration: 0.75 }} // Smooth transition duration
      className="section"
    >
      <div className="section-content">
        <h2>{title}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
          venenatis enim.
        </p>
      </div>
    </motion.section>
  );
};

export default Section;
