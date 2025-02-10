import React from "react";
import useSlider from "./useSlider";

const SliderView = () => {
  const { currentIndex, goToIndex, images, resetInterval } = useSlider();

  return (
    <div className="rounded-md shadow-sm overflow-hidden relative mb-5 w-full aspect-video bg-white">
      <img
        src={images[currentIndex]}
        alt="Slider"
        className="w-full object-cover object-center"
      />
      <div className="flex gap-2 justify-evenly absolute bottom-2 left-1/2 -translate-x-1/2">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className="w-3 h-3 rounded-full bg-black opacity-50 cursor-pointer"
              style={{
                opacity: currentIndex === index ? 1 : 0.5,
              }}
              onClick={() => {
                goToIndex(index);
                resetInterval();
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default SliderView;
