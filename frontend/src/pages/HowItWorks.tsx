import React from "react";
import Header from "../components/Header";
import SlidingCard from "../components/SlidingCard";
import TractorImage from "../assets/Tractor.jpg"; // Adjust the path as necessary
import WheatImage from "../assets/wheat.jpg";
import FarmImage from "../assets/farm.jpg";
import AboutTitle from "../components/AboutTitle";
import ParticlesComponent from "../components/particles";
import Box from "../components/Box";

const HowItWorks: React.FC = () => {
  const cardData = [
    {
      text: "Data",
      imageSrc: TractorImage, // Use imported image
    },
    {
      text: "AI",
      imageSrc: WheatImage, // Use imported image
    },
    {
      text: "whatever else",
      imageSrc: FarmImage, // Use imported image
    },
    // Add more cards as needed
    {
      text: "idk what goes here",
      imageSrc: TractorImage,
    },
  ];

  return (
    <>
      <ParticlesComponent id="particles" />

      <div className="min-h-screen h- bg-gradient-to-br from-green-300 via-green-400 to-green-200">
        <Header></Header>
        <AboutTitle></AboutTitle>
        <Box>
          We created an AI model that allows farmers to input data like region,
          climate, crop type, and fertilizer use to receive an estimated crop
          yield for the upcoming year. This tool helps farmers experiment with
          different combinations of inputs, enabling them to make informed
          decisions and optimize their production for the next agricultural
          season.
        </Box>
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

export default HowItWorks;
