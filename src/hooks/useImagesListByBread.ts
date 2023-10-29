import { useState } from 'react';
import dogApi from '../services/Dog';
import type { Breed, ImageUrl } from '../types';

const useImagesListByBread = () => {
  const [breed, setBreed] = useState<Breed>();
  const [images, setImages] = useState<ImageUrl[]>();

  const getImages = async () => {
    if (breed) {
      const resp = await dogApi.getImagesListByBreed(breed);
      if (resp.status === 'success') {
        setImages(resp.message);
      }
    }
  };

  const handleOnSetBreed = (breed: Breed) => {
    setBreed(breed);
  };

  return {
    breedSelected: breed,
    images,
    setBreed: handleOnSetBreed,
    getImages,
  };
};

export default useImagesListByBread;
