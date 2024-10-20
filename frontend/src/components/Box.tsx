import React from "react";

interface BoxProps {
  children?: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ children }) => {
  return (
    <div className="bg-green-200 w-4/5 h-64 shadow-lg rounded-3xl mx-auto flex justify-center items-center mb-10">
      <p className="text-green-700 font-semibold px-5 text-center text-lg">{children}</p> {/* Centered text */}
    </div>
  );
};

export default Box;
