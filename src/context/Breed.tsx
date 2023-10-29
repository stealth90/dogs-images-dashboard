import { createContext } from 'react';

export const BreedContext = createContext<{
  loading: boolean;
  completeBreedsList: string[];
  breedsWithSubBreedsList: string[];
  getSubBreedsList?: (breed: string) => string[];
}>({
  loading: false,
  completeBreedsList: [],
  breedsWithSubBreedsList: [],
});
