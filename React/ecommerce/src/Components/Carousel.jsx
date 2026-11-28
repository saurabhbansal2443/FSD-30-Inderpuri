import React from "react";
import Image1 from "../Assets/Image1.webp";
import Image2 from "../Assets/Image2.webp";
import Image3 from "../Assets/Image3.webp";
import Image4 from "../Assets/Image4.webp";
import ChevronLeft from "../Icons/ChevronLeft";
import ChevronRight from "../Icons/ChevronRight";

let imagesArray = [Image1, Image2, Image3, Image4];

const Carousel = () => {
  return (
    <div className="w-screen h-[50vh] relative">
      <img className="h-full w-full" src={imagesArray[0]} alt="" />
      <div className="absolute top-[50%] bg-white p-2 rounded-md">
        <ChevronLeft />
      </div>
      <div className="absolute top-[50%] right-0 bg-white p-2 rounded-md">
        <ChevronRight />
      </div>
    </div>
  );
};

export default Carousel;
