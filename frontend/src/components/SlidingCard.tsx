import React from "react";
import { motion } from "framer-motion";

function SlidingCard({ text = "", index = 0 }) {
  return (
    <motion.div
      className="card bg-yellow-100 shadow-md rounded-lg p-6 mb-6 w-1/2 h-80" // Set fixed width and height
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
      <p className="card-text text-center">{text}</p>
    </motion.div>
  );
}

export default SlidingCard;
