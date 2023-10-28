import React, { ButtonHTMLAttributes } from 'react';
import './custom-button.scss';

const CustomButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <button className="custom-button" {...props}>
      <span className="custom-button__back" />
      <span className="custom-button__front" />
    </button>
  );
};

export default CustomButton;
