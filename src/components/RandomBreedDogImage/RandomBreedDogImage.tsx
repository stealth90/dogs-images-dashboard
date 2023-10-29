import React, { useContext } from 'react';

import Card from '../Card';
import LazyImage from '../LazyImage';
import CustomButton from '../CustomButton';
import SelectInput from '../SelectInput';
import Skeleton from '../Skeleton';
import useRandomBreedDogImage from '../../hooks/useRandomBreedDogImage';
import ImagePlaceholder from '../ImagePlaceholder';
import { BreedContext } from '../../context/Breed';

import './random-bree-dog-image-wrapper.scss';

const RandomBreedDogImage = () => {
  const { breedSelected, image, setBreed, getImage } = useRandomBreedDogImage();

  const { completeBreedsList, loading } = useContext(BreedContext);

  return (
    <Card data-testid="randomBreedDogImage" title="Random image by breed">
      <div className="random-bree-dog-image-wrapper">
        <SelectInput
          data-testid="randomBreedDogImage-breedSelect"
          items={completeBreedsList}
          itemSelected={breedSelected}
          placeholder="Select a breed"
          loading={loading}
          onSelectItem={(item: string) => setBreed(item)}
        />
        <CustomButton
          data-testid="randomBreedDogImage-button"
          disabled={!breedSelected}
          onClick={() => getImage()}
        />
      </div>
      {!image ? (
        <ImagePlaceholder data-testid="randomBreedDogImage-placeholder" />
      ) : (
        <LazyImage
          data-testid="randomBreedDogImage-image"
          src={image}
          loadingElement={<Skeleton />}
        />
      )}
    </Card>
  );
};

export default RandomBreedDogImage;
