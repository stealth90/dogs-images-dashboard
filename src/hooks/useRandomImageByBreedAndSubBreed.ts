import { useEffect, useState } from 'react';
import dogApi from '../services/Dog';
import type { Breed, ImageUrl } from '../types';

const useRandomImageByBreedAndSubBreed = () => {
  const [breed, setBreed] = useState<Breed>();
  const [subBreed, setSubBreed] = useState<Breed>();
  const [image, setImage] = useState<ImageUrl>();

  useEffect(() => {
    setSubBreed('');
  }, [breed]);

  const getImage = async () => {
    if (breed && subBreed) {
      const resp = await dogApi.getRandomImageByBreedAndSubBreed(breed, subBreed);
      if (resp.status === 'success') {
        setImage(resp.message);
      }
    }
  };

  const handleOnSetBreed = (breed: Breed) => {
    setBreed(breed);
  };

  const handleOnSetSubBreed = (breed: Breed) => {
    setSubBreed(breed);
  };

  const getIsDisabled = () => {
    if (breed) {
      return false;
    }
    return true;
  };

  return {
    isDisabled: getIsDisabled(),
    breedSelected: breed,
    subBreedSelected: subBreed,
    image,
    setBreed: handleOnSetBreed,
    setSubBreed: handleOnSetSubBreed,
    getImage,
  };
};

export default useRandomImageByBreedAndSubBreed;
