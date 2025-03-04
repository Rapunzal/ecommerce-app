import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const ImageSlider = ({ imageUrls }) => {
  console.log(imageUrls);
  const [imgIndex, setImgIndex] = useState(0);
  const showPrevImage = () => {
    setImgIndex((index) => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });
  };
  const showNextImage = () => {
    setImgIndex((index) => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    });
  };

  return (
    <div className="w-full h-1/4 relative">
      <img
        src={imageUrls[imgIndex]}
        className="max-w-7xl w-[1280px] h-[600px] m-auto "
      />
      <button
        onClick={showPrevImage}
        className="absolute top-0 bottom-0 hover:bg-slate-100 transition-colors duration-100 ease-in-out "
      >
        <FaChevronLeft className="w-20" />
      </button>
      <button
        className="absolute top-0 bottom-0 right-0  hover:bg-slate-100"
        onClick={showNextImage}
      >
        <FaChevronRight className="w-20" />
      </button>
    </div>
  );
};
