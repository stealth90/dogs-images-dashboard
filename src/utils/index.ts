import type { Breed, BreedsListResponse } from '../types';

export const capitalize = (word: string) => {
  return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
};

export const wait = (milliseconds?: number) =>
  milliseconds
    ? new Promise((resolve) => {
        setTimeout(resolve, milliseconds);
      })
    : Promise.resolve();

export const getBreedsThatHaveSubBreed = (breeds?: BreedsListResponse): Breed[] => {
  if (breeds) {
    const breedsParsed = getBreedsFromResponse(breeds);
    return breedsParsed.reduce<Breed[]>((acc, value) => {
      if (breeds[value].length) {
        acc = [...acc, value];
      }
      return acc;
    }, []);
  }
  return [];
};

export const getBreedsFromResponse = (breeds?: BreedsListResponse): Breed[] => {
  return breeds ? Object.keys(breeds) : [];
};
