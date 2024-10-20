import React from "react";
import Header from "../components/Header";
import SlidingCard from "../components/SlidingCard";
import ParthImage from "../assets/Parth.jpg"; // Adjust the path as necessary
import ShaanImage from "../assets/Shaan.jpg";
import NitinImage from "../assets/Nitin.jpg";
import AbhiImage from "../assets/Abhi.png";
import AboutTitle from "../components/AboutTitle";
import ParticlesComponent from "../components/particles";

const AboutPage: React.FC = () => {
  const cardData = [
    {
      text: "I’m Parthiban Nagesh, a sophomore in electrical engineering, where I’m developing a solid foundation in circuits, electronics, and power systems. Outside of my studies, I enjoy working on hands-on projects, watching movies, and listening to music keep me inspired and balanced.",
      imageSrc: ParthImage, // Use imported image
    },
    {
      text: "Hi, my name is Shaan! I'm a sophomore studying Computer Engineering. I'm interested in full-stack development with working experience in the home automation and health industries. I love spending my Sundays watching football.",
      imageSrc: ShaanImage, // Use imported image
    },
    {
      text: "I'm Abhitej Devireddy, a sophomore studying Computer Engineering. I'm interested in learning more about embedded systems and hope to work in the automotive industry. Outside of school, I like to spend my time drawing and painting.",
      imageSrc: AbhiImage, // Use imported image
    },
    // Add more cards as needed
    {
      text: "Howdy, I’m Nitin! I’m a sophomore Computer Science student. I’m very interested in stock trading and quantitative analysis models as my dream is to become a quant. I love drumming and working out in my free time.",
      imageSrc: NitinImage,
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
