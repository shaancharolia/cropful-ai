import React from "react";
import Header from "../components/Header";
import SlidingCard from "../components/SlidingCard";
import TractorImage from "../assets/Tractor.jpg"; // Adjust the path as necessary
import ShaanImage from "../assets/Shaan.jpg";
import FarmImage from "../assets/farm.jpg";
import AboutTitle from "../components/AboutTitle";
import ParticlesComponent from "../components/particles";

const AboutPage: React.FC = () => {
  const cardData = [
    {
      text: "Parth",
      imageSrc: TractorImage, // Use imported image
    },
    {
      text: "Shaan",
      imageSrc: ShaanImage, // Use imported image
    },
    {
      text: "Abhi",
      imageSrc: FarmImage, // Use imported image
    },
    // Add more cards as needed
    {
      text: "Nitin",
      imageSrc: TractorImage,
    },
  ];

  return (
    <>
      <ParticlesComponent id="particles" />

      <div className="min-h-screen h- bg-gradient-to-br from-green-300 via-green-400 to-green-200">
        <Header></Header>
        <AboutTitle></AboutTitle>
        <div className="flex flex-col items-center space-y-8 p-4">
          {cardData.map((card, index) => (
            <SlidingCard
              key={index}
              text={card.text}
              index={index}
              imageSrc={card.imageSrc}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutPage;
