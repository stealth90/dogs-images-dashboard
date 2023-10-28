import { useCallback, useEffect, useState } from 'react';

export const loadImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    if (src) {
      img.src = src;
      img.onload = () => {
        resolve(img);
      };
      img.onerror = (error) => {
        console.error(`Error while retrieving image "${src}"`, error);
        reject(error);
      };
    } else {
      reject(new Error('Missing src'));
    }
  });
};

export const useLoadImage = ({
  hasInitialError,
  src,
}: {
  hasInitialError: boolean;
  src: string;
}) => {
  const [{ loaded, hasError }, setState] = useState({
    loaded: hasInitialError,
    hasError: hasInitialError,
  });

  const onMount = useCallback(async () => {
    setState({
      loaded: false,
      hasError: false,
    });
    try {
      loadImage(src).then(() => {
        setState({
          loaded: true,
          hasError: false,
        });
      });
    } catch (error) {
      setState({
        loaded: true,
        hasError: true,
      });
    }
  }, [src]);

  useEffect(() => {
    if (src) {
      onMount();
    }
  }, [onMount, src]);

  return { loaded, hasError };
};

export default useLoadImage;
