import { useState } from 'react';
import dogApi from '../services/Dog';
import type { ImageUrl } from '../types';

const useRandomBreedDogImage = () => {
  const [breed, setBreed] = useState<string>();
  const [image, setImage] = useState<ImageUrl>();

  const getImage = async () => {
    if (breed) {
      const resp = await dogApi.getRandomImageByBreed(breed);
      if (resp.status === 'success') {
        setImage(resp.message);
      }
    }
  };

  const handleOnSetBreed = (breed: string) => {
    setBreed(breed);
  };

  return {
    breedSelected: breed,
    image,
    setBreed: handleOnSetBreed,
    getImage,
  };
};

export default useRandomBreedDogImage;
