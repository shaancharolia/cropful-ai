import React from "react";
import Header from "../components/Header";
import MainBody from "../components/MainBody";

const Home: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-green-300 via-green-400 to-green-200">
        <Header></Header>
        <MainBody></MainBody>
      </div>
    </>
  );
};

export default Home;
