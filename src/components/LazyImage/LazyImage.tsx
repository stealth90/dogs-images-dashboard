import React, { HTMLAttributes, ReactElement, ReactNode } from 'react';
import useLoadImage from '../../hooks/useLoadImage';

// styles
import './lazy-image.scss';

export interface LazyImageProps
  extends Omit<HTMLAttributes<HTMLImageElement>, 'onLoad' | 'onError'> {
  src: string;
  dataTestId?: string;
  alt?: string;
  width?: number;
  height?: number;
  loadingElement?: ReactElement;
  children?: ReactNode;
}

const LazyImage: React.FC<LazyImageProps> = ({
  id,
  className,
  src,
  dataTestId = 'lazy-image',
  style,
  width,
  height,
  loadingElement,
  children,
  alt = 'Generic image',
  ...rest
}) => {
  const hasInitialError = !src;

  const { loaded, hasError } = useLoadImage({
    hasInitialError,
    src,
  });

  return (
    <>
      {!loaded && (
        <span
          id={id}
          className="lazy-image loading"
          data-testid={dataTestId}
          style={{ ...style, width, height }}
        >
          {loadingElement || 'Loading...'}
        </span>
      )}
      {loaded && !hasError && (
        <img
          id={id}
          className="lazy-image"
          data-testid={dataTestId}
          src={src}
          width={width}
          height={height}
          style={{ ...style }}
          alt={alt}
          {...rest}
        />
      )}
      {hasError && (
        <span id={id} className="lazy-image error" data-testid={dataTestId} style={{ ...style }}>
          Error on fetch image. Please, retry.
        </span>
      )}
    </>
  );
};

export default LazyImage;
