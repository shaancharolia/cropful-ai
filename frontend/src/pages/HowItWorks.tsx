import React from "react";
import Header from "../components/Header";
import ParticlesComponent from "../components/particles";

const HowItWorks: React.FC = () => {
  return (
    <>
      <div className="min-h-screen h- bg-gradient-to-br from-green-300 via-green-400 to-green-200">
      <ParticlesComponent id="particles"/>
      <Header></Header>
      </div>
    </>
  );
};

export default HowItWorks;
