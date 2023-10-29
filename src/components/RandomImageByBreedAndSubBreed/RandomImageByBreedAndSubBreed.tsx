import React, { useContext } from 'react';

import Card from '../Card';
import LazyImage from '../LazyImage';
import CustomButton from '../CustomButton';
import SelectInput from '../SelectInput';
import Skeleton from '../Skeleton';
import ImagePlaceholder from '../ImagePlaceholder';
import useRandomImageByBreedAndSubBreed from '../../hooks/useRandomImageByBreedAndSubBreed';
import { BreedContext } from '../../context/Breed';

import './random-bree-dog-image-wrapper.scss';

const RandomImageByBreedAndSubBreed = () => {
  const { breedSelected, subBreedSelected, image, isDisabled, setSubBreed, setBreed, getImage } =
    useRandomImageByBreedAndSubBreed();
  const { breedsWithSubBreedsList, loading, getSubBreedsList } = useContext(BreedContext);
  const subBreedsList = getSubBreedsList ? getSubBreedsList(breedSelected || '') : [];

  return (
    <Card data-testid="randomImageByBreedAndSubBreed" title="Random image by breed and sub breed">
      <div className="random-image-by-breed-and-sub-breed">
        <div className="random-image-by-breed-and-sub-breed__wrapper">
          <SelectInput
            data-testid="randomImageByBreedAndSubBreed-breedSelect"
            items={breedsWithSubBreedsList}
            itemSelected={breedSelected}
            loading={loading}
            onSelectItem={(item: string) => setBreed(item)}
            placeholder="Select a breed"
          />
          <SelectInput
            data-testid="randomImageByBreedAndSubBreed-subBreedSelect"
            items={subBreedsList}
            itemSelected={subBreedSelected}
            loading={loading}
            onSelectItem={(item: string) => setSubBreed(item)}
            placeholder="Select a sub breed"
            disabled={!breedSelected}
          />
        </div>
        <CustomButton
          data-testid="randomImageByBreedAndSubBreed-button"
          disabled={isDisabled}
          onClick={() => getImage()}
        />
      </div>
      {!image ? (
        <ImagePlaceholder data-testid="randomImageByBreedAndSubBreed-placeholder" />
      ) : (
        <LazyImage
          data-testid="randomImageByBreedAndSubBreed-image"
          src={image}
          loadingElement={<Skeleton />}
        />
      )}
    </Card>
  );
};

export default RandomImageByBreedAndSubBreed;
