import React, { useState } from "react";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "/images/slider-mybrand.jpg",
    "/images/slider2-mybrand.jpg",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="relative h-[100vh] w-full overflow-hidden ">
      {/* Image slider */}
      <div
        className="w-[300vw] h-full flex transition-all ease-in duration-[800ms]"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((imgSrc, index) => (
          <img
            key={index}
            className="w-[100vw] h-full object-cover"
            src={imgSrc}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute flex left-0 right-0 m-auto bottom-[5%] w-fit gap-10">
        <div
          className="border-[1px] rounded-full border-white w-[50px] h-[50px] flex items-center justify-center cursor-pointer"
          onClick={prevSlide}
        >
          <WestIcon className="text-white" />
        </div>
        <div
          className="border-[1px] rounded-full border-white w-[50px] h-[50px] flex items-center justify-center cursor-pointer"
          onClick={nextSlide}
        >
          <EastIcon className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
