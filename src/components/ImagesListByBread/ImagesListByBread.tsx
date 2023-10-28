import React from 'react';

import Card from '../Card';
import CustomButton from '../CustomButton';
import SelectInput from '../SelectInput';
import Carousel from '../Carousel';
import useImagesListByBread from '../../hooks/useImagesListByBread';

import './images-list-by-bread.scss';

const ImagesListByBread = () => {
  const { breedSelected, breedsList, images, setBreed, getImages } =
    useImagesListByBread();

  return (
    <Card title="Images list by breed">
      <div className="images-list-by-bread">
        <SelectInput
          items={breedsList}
          itemSelected={breedSelected}
          onSelectItem={(item: string) => setBreed(item)}
          placeholder="Select a breed"
        />
        <CustomButton disabled={!breedSelected} onClick={() => getImages()} />
      </div>
      {!images ? (
        <div className="images-list-by-bread__placeholder" />
      ) : (
        <Carousel images={images} />
      )}
    </Card>
  );
};

export default ImagesListByBread;
