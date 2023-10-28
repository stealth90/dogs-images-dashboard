import React from 'react';

import Card from '../Card';
import LazyImage from '../LazyImage';
import CustomButton from '../CustomButton';
import SelectInput from '../SelectInput';
import Skeleton from '../Skeleton';
import useRandomBreedDogImage from '../../hooks/useRandomBreedDogImage';
import './random-bree-dog-image-wrapper.scss';

const RandomBreedDogImage = () => {
  const { breedSelected, breedsList, isLoading, image, setBreed, getImage } =
    useRandomBreedDogImage();

  return (
    <Card title="Random image by breed">
      <div className="random-bree-dog-image-wrapper">
        <SelectInput
          items={breedsList}
          itemSelected={breedSelected}
          placeholder="Select a breed"
          loading={isLoading}
          onSelectItem={(item: string) => setBreed(item)}
        />
        <CustomButton disabled={!breedSelected} onClick={() => getImage()} />
      </div>
      {!image ? (
        <div className="random-bree-dog-image-wrapper__placeholder" />
      ) : (
        <LazyImage src={image} loadingElement={<Skeleton />} />
      )}
    </Card>
  );
};

export default RandomBreedDogImage;
