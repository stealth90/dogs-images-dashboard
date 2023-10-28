import { useEffect, useState } from 'react';
import type { Breed, BreedsListResponse } from '../types';
import dogApi from '../services/Dog';
import { getBreedsFromResponse, getBreedsThatHaveSubBreed } from '../utils';

const useBreedsList = (onlyWithSubBreeds?: boolean) => {
  const [loading, setLoading] = useState(false);
  const [breedsList, setBreedsList] = useState<BreedsListResponse>();

  useEffect(() => {
    const getAllBreedsList = async () => {
      setLoading(true);
      const response = await dogApi.getAllBreedsList();
      setBreedsList(response.message);
      setLoading(false);
    };
    getAllBreedsList();
  }, [onlyWithSubBreeds]);

  const getBreedsList = (): Breed[] => {
    if (onlyWithSubBreeds) {
      return getBreedsThatHaveSubBreed(breedsList);
    }
    return getBreedsFromResponse(breedsList);
  };

  const getSubBreedsList = (breed: Breed): Breed[] => {
    return breedsList && breed ? breedsList[breed] : [];
  };

  return { loading, breedsList: getBreedsList(), getSubBreedsList };
};

export default useBreedsList;
