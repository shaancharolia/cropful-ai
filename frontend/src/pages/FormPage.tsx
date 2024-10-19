import React from "react";
import AgriculturalForm from "../components/AgricultureForm";
import Header from "../components/Header";

const FormPage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-green-600 via-green-400 to-green-100">
        <Header></Header>
        <AgriculturalForm></AgriculturalForm>
      </div>
    </>
  );
};

export default FormPage;
