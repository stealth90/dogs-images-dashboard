import React from 'react';
import LazyImage from '../LazyImage';
import Skeleton from '../Skeleton';
import useCarousel from '../../hooks/useCarousel';
import { ReactComponent as NextIcon } from '../../assets/icons/next.svg';
import { ReactComponent as PrevIcon } from '../../assets/icons/prev.svg';
import './carousel.scss';

interface CarouselProps {
  'data-testid': string;
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images, ...rest }) => {
  const { goNextSlide, goPreviousSlide, getTranslateValue } = useCarousel(images.length);

  return (
    <div data-testid={rest['data-testid']} className="slider">
      {images.map((imageUrl, index) => {
        const transform = getTranslateValue(index);
        return (
          <div
            data-testid={`${rest['data-testid']}-slide-${index}`}
            key={imageUrl}
            className="slider__slide"
            style={{ transform }}
          >
            <LazyImage
              data-testid={`${rest['data-testid']}-image-${index}`}
              src={imageUrl}
              loadingElement={<Skeleton />}
            />
          </div>
        );
      })}

      <button
        data-testid={`${rest['data-testid']}-prevButton`}
        onClick={goPreviousSlide}
        className="slider__button prev"
      >
        <PrevIcon />
      </button>
      <button
        data-testid={`${rest['data-testid']}-nextButton`}
        onClick={goNextSlide}
        className="slider__button next"
      >
        <NextIcon />
      </button>
    </div>
  );
};

export default Carousel;
