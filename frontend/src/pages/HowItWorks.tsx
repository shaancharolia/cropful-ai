import React from "react";
import Header from "../components/Header";
import SlidingCard from "../components/SlidingCard";
import TractorImage from "../assets/Tractor.jpg"; // Adjust the path as necessary
import MLImage from "../assets/AIPlant.jpg";
import FarmImage from "../assets/farm.jpg";
import AboutTitle from "../components/AboutTitle";
import ParticlesComponent from "../components/particles";
import Box from "../components/Box";

const HowItWorks: React.FC = () => {
  const cardData = [
    {
      text: "We trained our crop yield prediction model using a dataset from Kaggle, which, while not directly from NASS, includes many data points based on NASS reports. This allowed our model to accurately incorporate a wide range of factors such as temperature, rainfall, soil type, and others, ensuring more reliable predictions across different agricultural scenarios.",
      imageSrc: TractorImage, // Use imported image
    },
    {
      text: "Due to the linear relationships between the features in our dataset and crop yield, we opted for a linear regression model to estimate yield outcomes. Using Python’s scikit-learn library, we implemented and trained this model on our dataset, leveraging its ability to effectively handle continuous variables and provide accurate predictions.",
      imageSrc: MLImage, // Use imported image
    },
    {
      text: "Our backend is built using Python and features a linear regression model to predict crop yield. We used Flask to create a web application that allows seamless communication between the front end and the model. Data from the front end is passed to the Flask app, which feeds it into the model, processes the input, and returns the predicted output back to the user interface.",
      imageSrc: FarmImage, // Use imported image
    },
    // Add more cards as needed
    {
      text: "Our frontend is developed using React and TypeScript, designed for a responsive user experience. Utilizing TailwindCSS for styling, the interface features intuitive forms for users to input agricultural data seamlessly. The application captures user input in real-time, managing state with React hooks to ensure dynamic updates. Upon submission, the data is sent to the Flask backend, which processes it through the linear regression model. The predicted crop yield is then displayed back in the UI, providing users with instant feedback and insights for their agricultural decisions.",
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
          CROPful is an AI model that allows farmers to input data like region,
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
