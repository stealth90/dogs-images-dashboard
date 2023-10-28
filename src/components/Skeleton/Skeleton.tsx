import React from 'react';
import './skeleton.scss';

interface SkeletonProps {
  width?: string;
  height?: string;
  dynamic?: boolean;
}

const Skeleton: React.FC<SkeletonProps> = ({ width = '100%', height = '100%', dynamic = true }) => {
  return <div className="skeleton" style={{ width, height }} />;
};

export default Skeleton;
