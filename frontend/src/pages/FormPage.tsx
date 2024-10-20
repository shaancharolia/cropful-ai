import React from "react";
import AgriculturalForm from "../components/AgricultureForm";
import Header from "../components/Header";
import Footer from "../components/Footer";

const FormPage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-green-300 via-green-400 to-green-200">
        <Header></Header>   
        <AgriculturalForm></AgriculturalForm>
        <Footer></Footer>
      </div>
    </>
  );
};

export default FormPage;
