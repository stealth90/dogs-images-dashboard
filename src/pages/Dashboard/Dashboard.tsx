import React from 'react';

import RandomBreedDogImage from '../../components/RandomBreedDogImage';
import ImagesListByBread from '../../components/ImagesListByBread';
import RandomImageByBreedAndSubBreed from '../../components/RandomImageByBreedAndSubBreed';
import ImagesListByBreadAndSubBreed from '../../components/ImagesListByBreadAndSubBreed';
import './dashboard.scss';

const Dashboard: React.FC = () => {
  return (
    <div data-testid="dashboard" className="dashboard">
      <h1 className="dashboard__title">Dashboard</h1>
      <div className="dashboard__content">
        <RandomBreedDogImage />
        <RandomImageByBreedAndSubBreed />
        <ImagesListByBread />
        <ImagesListByBreadAndSubBreed />
      </div>
    </div>
  );
};

export default Dashboard;
