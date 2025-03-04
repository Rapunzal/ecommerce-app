import React from "react";
import { ImageSlider } from "./ImageSlider.jsx";
import shopping1 from "/imgs/shop7.jpg";
import shopping2 from "/imgs/shop5.jpg";
import shopping3 from "/imgs/shop6.jpg";
import shopping4 from "/imgs/shop8.jpeg";

const images = [shopping4, shopping1, shopping2, shopping3];

export const About = () => {
  return (
    <div className="py-16">
      <ImageSlider
        imageUrls={images}
        className="object-cover w-full h-full block"
      />
    </div>
  );
};
