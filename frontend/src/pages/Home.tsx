import React from "react";
import Header from "../components/Header";
import MainBody from "../components/MainBody";
import CardSpotlight from "../components/CardSpotlight";
import ParticlesComponent from "../components/particles";

const Home: React.FC = () => {
  return (
    <>
      <div className="min-h-screen h- bg-gradient-to-br from-green-300 via-green-400 to-green-200">
        <ParticlesComponent id="particles"/>
        <Header></Header>
        <MainBody></MainBody>
        <CardSpotlight></CardSpotlight>
      </div>
    </>
  );
};

export default Home;
