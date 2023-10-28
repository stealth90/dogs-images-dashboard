import React from 'react';

import Card from '../Card';
import LazyImage from '../LazyImage';
import CustomButton from '../CustomButton';
import SelectInput from '../SelectInput';
import Skeleton from '../Skeleton';
import useRandomImageByBreedAndSubBreed from '../../hooks/useRandomImageByBreedAndSubBreed';

import './random-bree-dog-image-wrapper.scss';

const RandomImageByBreedAndSubBreed = () => {
  const {
    breedSelected,
    subBreedsList,
    subBreedSelected,
    breedsList,
    image,
    isDisabled,
    setSubBreed,
    setBreed,
    getImage,
  } = useRandomImageByBreedAndSubBreed();

  return (
    <Card title="Random image by breed and sub breed">
      <div className="random-image-by-breed-and-sub-breed">
        <div className="random-image-by-breed-and-sub-breed__wrapper">
          <SelectInput
            items={breedsList}
            itemSelected={breedSelected}
            onSelectItem={(item: string) => setBreed(item)}
            placeholder="Select a breed"
          />
          <SelectInput
            items={subBreedsList}
            itemSelected={subBreedSelected}
            onSelectItem={(item: string) => setSubBreed(item)}
            placeholder="Select a sub breed"
            disabled={!breedSelected}
          />
        </div>
        <CustomButton disabled={isDisabled} onClick={() => getImage()} />
      </div>
      {!image ? (
        <div className="random-image-by-breed-and-sub-breed__placeholder" />
      ) : (
        <LazyImage key={image} src={image} loadingElement={<Skeleton />} />
      )}
    </Card>
  );
};

export default RandomImageByBreedAndSubBreed;
