import React from 'react';

import RandomBreedDogImage from '../../components/RandomBreedDogImage';
import ImagesListByBread from '../../components/ImagesListByBread';
import RandomImageByBreedAndSubBreed from '../../components/RandomImageByBreedAndSubBreed';
import ImagesListByBreadAndSubBreed from '../../components/ImagesListByBreadAndSubBreed';
import { BreedContext } from '../../context/Breed';
import useBreedsList from '../../hooks/useBreedsList';
import './dashboard.scss';

const Dashboard: React.FC = () => {
  const breedsState = useBreedsList();
  return (
    <div data-testid="dashboard" className="dashboard">
      <h1 className="dashboard__title">Dashboard</h1>
      <div className="dashboard__content">
        <BreedContext.Provider value={breedsState}>
          <RandomBreedDogImage />
          <RandomImageByBreedAndSubBreed />
          <ImagesListByBread />
          <ImagesListByBreadAndSubBreed />
        </BreedContext.Provider>
      </div>
    </div>
  );
};

export default Dashboard;
