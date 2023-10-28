import React from 'react';

import Card from '../Card';
import CustomButton from '../CustomButton';
import SelectInput from '../SelectInput';
import Carousel from '../Carousel';
import useImagesListByBreadAndSubBreed from '../../hooks/useImagesListByBreadAndSubBreed';

import './images-list-by-bread-and-sub-breed.scss';

const ImagesListByBreadAndSubBreed = () => {
  const {
    breedSelected,
    isDisabled,
    subBreedSelected,
    subBreedsList,
    breedsList,
    images,
    setSubBreed,
    setBreed,
    getImages,
  } = useImagesListByBreadAndSubBreed();

  return (
    <Card title="Images list by breed and sub breed">
      <div className="images-list-by-bread-and-sub-breed">
        <div className="images-list-by-bread-and-sub-breed__wrapper">
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
        <CustomButton disabled={isDisabled} onClick={() => getImages()} />
      </div>
      {!images?.length ? (
        <div className="images-list-by-bread-and-sub-breed__placeholder" />
      ) : (
        <Carousel images={images} />
      )}
    </Card>
  );
};

export default ImagesListByBreadAndSubBreed;
