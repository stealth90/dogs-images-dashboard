import { useState } from 'react';

const useCarousel = (numberOfImages: number) => {
  const [currSlide, setCurrSlide] = useState(0);

  const goNextSlide = () => {
    setCurrSlide((currSlide) => (currSlide === numberOfImages - 1 ? 0 : currSlide + 1));
  };

  const goPreviousSlide = () => {
    setCurrSlide((currSlide) => (currSlide === 0 ? numberOfImages - 1 : currSlide - 1));
  };

  const getTranslateValue = (indx: number) => {
    return `translateX(${100 * (indx - currSlide)}%)`;
  };

  return {
    getTranslateValue,
    goNextSlide,
    goPreviousSlide,
  };
};
export default useCarousel;
