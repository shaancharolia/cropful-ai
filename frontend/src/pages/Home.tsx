import React from "react";
import Header from "../components/Header";
import MainBody from "../components/MainBody";

const Home: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-green-600 via-green-400 to-green-100">
        <Header></Header>
        <MainBody></MainBody>
      </div>
    </>
  );
};

export default Home;
