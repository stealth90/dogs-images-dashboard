import React, { ButtonHTMLAttributes } from 'react';
import './custom-button.scss';

const CustomButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <button className="custom-button" {...props}>
      Generate
    </button>
  );
};

export default CustomButton;
