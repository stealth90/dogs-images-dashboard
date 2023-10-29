import { useEffect, useState } from 'react';
import dogApi from '../services/Dog';
import type { Breed, ImageUrl } from '../types';

const useImagesListByBreadAndSubBreed = () => {
  const [breed, setBreed] = useState<Breed>();
  const [subBreed, setSubBreed] = useState<Breed>();
  const [images, setImages] = useState<ImageUrl[]>();

  useEffect(() => {
    setSubBreed('');
  }, [breed]);
  
  const getImages = async () => {
    if (breed && subBreed) {
      const resp = await dogApi.getImagesListByBreedAndSubBreed(breed, subBreed);
      if (resp.status === 'success') {
        setImages(resp.message);
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
    images,
    setSubBreed: handleOnSetSubBreed,
    setBreed: handleOnSetBreed,
    getImages,
  };
};

export default useImagesListByBreadAndSubBreed;
