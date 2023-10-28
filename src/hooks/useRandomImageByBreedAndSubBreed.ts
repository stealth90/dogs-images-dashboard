import { useEffect, useState } from 'react';
import dogApi from '../services/Dog';
import type { Breed, ImageUrl } from '../types';
import useBreedsList from './useBreedsList';

const useRandomImageByBreedAndSubBreed = () => {
  const [breed, setBreed] = useState<Breed>();
  const [subBreed, setSubBreed] = useState<Breed>();
  const [subBreedsList, setSubBreedsList] = useState<Breed[]>([]);
  const [image, setImage] = useState<ImageUrl>();

  const { breedsList, getSubBreedsList, loading } = useBreedsList(true);

  useEffect(() => {
    setSubBreed('');
  }, [breed]);

  useEffect(() => {
    if (breed) {
      const subBreeds = getSubBreedsList(breed);
      setSubBreedsList(subBreeds);
    }
  }, [breed, getSubBreedsList]);

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
    if (breed && subBreedsList?.length && subBreed) {
      return false;
    }
    return true;
  };

  return {
    isLoading: loading,
    isDisabled: getIsDisabled(),
    breedsList,
    breedSelected: breed,
    subBreedsList,
    subBreedSelected: subBreed,
    image,
    setBreed: handleOnSetBreed,
    setSubBreed: handleOnSetSubBreed,
    getImage,
  };
};

export default useRandomImageByBreedAndSubBreed;
