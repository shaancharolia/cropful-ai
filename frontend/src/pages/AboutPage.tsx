import React from "react";
import Header from "../components/Header";
import SlidingCard from "../components/SlidingCard";
import ParticlesComponent from "../components/particles";

const AboutPage: React.FC = () => {
  const cardTexts = [
    "Card 1: This is the first card.",
    "Card 2: This is the second card.",
    "Card 3: This is the third card.",
    "Card 4: This is the fourth card.",
    "Card 5: This is the fifth card.",
  ];

  return (
    <>
    <ParticlesComponent id="particles"/>
    <div className="min-h-screen bg-gradient-to-br from-green-300 via-green-400 to-green-200">
      <Header></Header>
      <div className="flex flex-col items-center space-y-8 p-4">
        {cardTexts.map((text, index) => (
          <SlidingCard key={index} text={text} index={index} />
        ))}
      </div>
    </div>
    </>
  );
};

export default AboutPage;
