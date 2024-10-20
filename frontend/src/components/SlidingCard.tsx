import React from "react";
import { motion } from "framer-motion";

interface SlidingCardProps {
  text?: string;
  index?: number;
  imageSrc?: string; // New prop for image source
}

function SlidingCard({ text = "", index = 0, imageSrc }: SlidingCardProps) {
  return (
    <motion.div
      className="card bg-yellow-100 shadow-md rounded-lg p-6 mb-6 w-1/2 h-80 flex" // Adjusted for flex layout
      initial={{
        opacity: 1, // Start fully visible
        x: 0, // Start at the center
      }}
      whileInView={{
        x: index % 2 === 0 ? 300 : -300, // Slide out to the right or left based on index
        transition: {
          duration: 1, // Animation duration
        },
      }}
      viewport={{ once: true }} // Animation occurs only once when in view
    >
      {imageSrc && (
        <img
          src={imageSrc}
          alt={text} // Use text as alt text
          className="w-64 h-64 object-cover rounded-md mr-4" // Increase image size
        />
      )}
      <div className="flex flex-col justify-center">
        {" "}
        {/* Text container */}
        <p className="card-text text-left">{text}</p>
      </div>
    </motion.div>
  );
}

export default SlidingCard;
