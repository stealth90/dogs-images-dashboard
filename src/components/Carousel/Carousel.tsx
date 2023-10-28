import React from 'react';
import LazyImage from '../LazyImage';
import Skeleton from '../Skeleton';
import useCarousel from '../../hooks/useCarousel';
import './carousel.scss';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const { goNextSlide, goPreviousSlide, getTranslateValue } = useCarousel(images.length);

  return (
    <div className="slider">
      {images.map((imageUrl, index) => {
        const transform = getTranslateValue(index);
        return (
          <div key={imageUrl} className="slider__slide" style={{ transform }}>
            <LazyImage src={imageUrl} loadingElement={<Skeleton />} />
          </div>
        );
      })}

      <button onClick={goPreviousSlide} className="slider__button prev">
        -
      </button>
      <button onClick={goNextSlide} className="slider__button next">
        +
      </button>
    </div>
  );
};

export default Carousel;
