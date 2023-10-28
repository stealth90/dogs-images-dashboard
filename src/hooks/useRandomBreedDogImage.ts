import { useState } from 'react';
import dogApi from '../services/Dog';
import type { ImageUrl } from '../types';
import useBreedsList from './useBreedsList';

const useRandomBreedDogImage = () => {
  const [breed, setBreed] = useState<string>();
  const [image, setImage] = useState<ImageUrl>();
  const { breedsList, loading } = useBreedsList();

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
    isLoading: loading,
    breedsList,
    breedSelected: breed,
    image,
    setBreed: handleOnSetBreed,
    getImage,
  };
};

export default useRandomBreedDogImage;
