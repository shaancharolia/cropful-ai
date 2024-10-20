import React from "react";

interface BoxProps {
  children?: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ children }) => {
  return (
    <div className="w-4/5 h-64 bg-white shadow-lg rounded-3xl mx-auto flex justify-center items-center mb-10">
      <p className="text-center text-lg">{children}</p> {/* Centered text */}
    </div>
  );
};

export default Box;
