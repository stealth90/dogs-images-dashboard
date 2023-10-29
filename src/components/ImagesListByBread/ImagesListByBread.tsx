import React, { useContext } from 'react';

import Card from '../Card';
import CustomButton from '../CustomButton';
import SelectInput from '../SelectInput';
import Carousel from '../Carousel';
import ImagePlaceholder from '../ImagePlaceholder';
import useImagesListByBread from '../../hooks/useImagesListByBread';
import { BreedContext } from '../../context/Breed';

import './images-list-by-bread.scss';

const ImagesListByBread = () => {
  const { breedSelected, images, setBreed, getImages } = useImagesListByBread();

  const { completeBreedsList, loading } = useContext(BreedContext);

  return (
    <Card data-testid="imagesListByBread" title="Images list by breed">
      <div className="images-list-by-bread">
        <SelectInput
          data-testid="imagesListByBread-breedSelect"
          items={completeBreedsList}
          itemSelected={breedSelected}
          loading={loading}
          onSelectItem={(item: string) => setBreed(item)}
          placeholder="Select a breed"
        />
        <CustomButton
          data-testid="imagesListByBread-button"
          disabled={!breedSelected}
          onClick={() => getImages()}
        />
      </div>
      {!images ? (
        <ImagePlaceholder data-testid="imagesListByBread-placeholder" />
      ) : (
        <Carousel data-testid="imagesListByBread-carousel" images={images} />
      )}
    </Card>
  );
};

export default ImagesListByBread;
