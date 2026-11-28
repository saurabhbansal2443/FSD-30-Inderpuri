import React from "react";
import Image1 from "../Assets/Image1.webp";
import Image2 from "../Assets/Image2.webp";
import Image3 from "../Assets/Image3.webp";
import Image4 from "../Assets/Image4.webp";

let imagesArray = [Image1, Image2, Image3, Image4];

const Carousel = () => {
  return ( 
    <div>
      <img src={imagesArray[0]} alt="" />
    </div>
  );
};

export default Carousel;
