"use client";
import { useState, MouseEvent, useCallback } from "react";
import TractorImage from "../assets/Tractor.jpg"; // Import your images
import WheatImage from "../assets/wheat.jpg"; // Import a second image
import FarmImage from "../assets/farm.jpg"; // Import a third image

function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let lastCall = 0;
  return (...args: Parameters<T>) => {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return func(...args);
  };
}

const CardSpotlight = ({
  customStyle,
  image,
}: {
  customStyle: React.CSSProperties;
  image: string;
}) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const onMouseMove = useCallback(
    throttle((e: MouseEvent<HTMLDivElement>) => {
      const card = e.currentTarget;
      const box = card.getBoundingClientRect();
      const x = e.clientX - box.left;
      const y = e.clientY - box.top;
      const centerX = box.width / 2;
      const centerY = box.height / 2;
      const rotateX = (y - centerY) / 4;
      const rotateY = (centerX - x) / 4;

      setRotate({ x: rotateX, y: rotateY });
    }, 100),
    []
  );

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      className="card absolute rounded-2xl transition-[all_400ms_cubic-bezier(0.03,0.98,0.52,0.99)_0s] will-change-transform"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        ...customStyle,
        aspectRatio: "16 / 9", // Keep the aspect ratio
        width: "400px", // Set a larger width
        height: "auto", // Automatically adjust height based on aspect ratio
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
        transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  );
};

const CardGallery = () => {
  return (
    <>
      <div
        className="relative flex flex-wrap items-center justify-center max-h-1 overflow-auto" // Use flexbox for alignment
        style={{ minHeight: "100vh", overflow: "hidden" }} // Set minHeight and overflow
      >
        {/* Card 1: Positioned top-left with TractorImage */}
        <CardSpotlight
          customStyle={{ top: "0%", left: "7%", transform: "rotate(-5deg)" }} // Adjusted top position
          image={TractorImage} // Pass TractorImage
        />
        {/* Card 2: Positioned slightly lower and more centered with FarmImage */}
        <CardSpotlight
          customStyle={{ top: "7%", left: "38%", transform: "rotate(10deg)" }} // Adjusted top position
          image={FarmImage} // Pass FarmImage
        />
        {/* Card 3: Positioned more to the right and rotated with WheatImage */}
        <CardSpotlight
          customStyle={{
            top: "3%",
            right: "9%",
            transform: "rotate(-15deg)",
          }} // Adjusted top position
          image={WheatImage} // Pass WheatImage
        />
      </div>
    </>
  );
};

export default CardGallery;
