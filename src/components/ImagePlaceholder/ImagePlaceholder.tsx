import React from 'react';
import './image-placeholder.scss';

interface ImagePlaceholderProps {
  className?: string;
  'data-testid'?: string;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ className, ...props }) => {
  return <div data-testid={props['data-testid']} className={`image-placeholder ${className}`} />;
};

export default ImagePlaceholder;
