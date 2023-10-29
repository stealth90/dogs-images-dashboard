import React, { useContext } from 'react';

import Card from '../Card';
import CustomButton from '../CustomButton';
import SelectInput from '../SelectInput';
import Carousel from '../Carousel';
import ImagePlaceholder from '../ImagePlaceholder';
import useImagesListByBreadAndSubBreed from '../../hooks/useImagesListByBreadAndSubBreed';
import { BreedContext } from '../../context/Breed';

import './images-list-by-bread-and-sub-breed.scss';

const ImagesListByBreadAndSubBreed = () => {
  const { breedSelected, isDisabled, subBreedSelected, images, setSubBreed, setBreed, getImages } =
    useImagesListByBreadAndSubBreed();

  const { breedsWithSubBreedsList, loading, getSubBreedsList } = useContext(BreedContext);
  const subBreedsList = getSubBreedsList ? getSubBreedsList(breedSelected || '') : [];

  return (
    <Card data-testid="imagesListByBreadAndSubBreed" title="Images list by breed and sub breed">
      <div className="images-list-by-bread-and-sub-breed">
        <div className="images-list-by-bread-and-sub-breed__wrapper">
          <SelectInput
            data-testid="imagesListByBreadAndSubBreed-breedSelect"
            items={breedsWithSubBreedsList}
            itemSelected={breedSelected}
            loading={loading}
            onSelectItem={(item: string) => setBreed(item)}
            placeholder="Select a breed"
          />
          <SelectInput
            data-testid="imagesListByBreadAndSubBreed-subBreedSelect"
            items={subBreedsList}
            itemSelected={subBreedSelected}
            loading={loading}
            onSelectItem={(item: string) => setSubBreed(item)}
            placeholder="Select a sub breed"
            disabled={!breedSelected}
          />
        </div>
        <CustomButton
          data-testid="imagesListByBreadAndSubBreed-button"
          disabled={isDisabled}
          onClick={() => getImages()}
        />
      </div>
      {!images?.length ? (
        <ImagePlaceholder data-testid="imagesListByBreadAndSubBreed-placeholder" />
      ) : (
        <Carousel data-testid="imagesListByBreadAndSubBreed-carousel" images={images} />
      )}
    </Card>
  );
};

export default ImagesListByBreadAndSubBreed;
