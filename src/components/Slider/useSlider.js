import React, { useState, useEffect } from "react";

const useSlider = () => {
  const images = [
    "https://via.placeholder.com/600x300/ff7f7f/333333?text=Image+1",
    "https://via.placeholder.com/600x300/7f7fff/333333?text=Image+2",
    "https://via.placeholder.com/600x300/7fff7f/333333?text=Image+3",
    "https://via.placeholder.com/600x300/ffff7f/333333?text=Image+4",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const goToIndex = (index) => {
    if (index >= 0 && index < images.length) {
      setCurrentIndex(index);
    }
  };

  const resetInterval = () => {
    clearInterval(intervalId);
    const newInterval = setInterval(
      () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length),
      10000
    );
    setIntervalId(newInterval);
  };

  useEffect(() => {
    resetInterval();

    return () => clearInterval(intervalId);
  }, []);

  return { currentIndex, goToIndex, images, resetInterval };
};

export default useSlider;
