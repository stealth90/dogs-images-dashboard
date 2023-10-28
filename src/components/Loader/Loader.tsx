import React from 'react';
import { ReactComponent as LoaderIcon } from '../../assets/icons/loader.svg';
import './loader.scss'

interface LoaderProps {
  width?: string;
  height?: string;
}

const Loader: React.FC<LoaderProps> = ({ width = "50", height = "50" }) => {
  return <LoaderIcon className='loader-icon' width={width} height={height} />;
};

export default React.memo(Loader);
