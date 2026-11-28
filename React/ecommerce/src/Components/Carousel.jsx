import React, { useState } from "react";
import Image1 from "../Assets/Image1.webp";
import Image2 from "../Assets/Image2.webp";
import Image3 from "../Assets/Image3.webp";
import Image4 from "../Assets/Image4.webp";
import ChevronLeft from "../Icons/ChevronLeft";
import ChevronRight from "../Icons/ChevronRight";

let imagesArray = [Image1, Image2, Image3, Image4];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const handleRightButton = () => {
    if (index == imagesArray.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const handleLeftButton = () => {
    if (index == 0) {
      setIndex(imagesArray.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div className="w-screen h-[50vh] relative">
      <img className="h-full w-full" src={imagesArray[index]} alt="" />
      <div
        onClick={handleLeftButton}
        className="absolute top-[50%] bg-white p-2 rounded-md"
      >
        <ChevronLeft />
      </div>
      <div
        onClick={handleRightButton}
        className="absolute top-[50%] right-0 bg-white p-2 rounded-md"
      >
        <ChevronRight />
      </div>
    </div>
  );
};

export default Carousel;
