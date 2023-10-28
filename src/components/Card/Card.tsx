import React, { PropsWithChildren } from 'react';

import './card.scss';

interface CardProps {
  title: string;
}

const Card: React.FC<PropsWithChildren<CardProps>> = ({ title, children }) => {
  return (
    <div data-testid={`card-${title}`} className="card">
      <h3 className="card__title">{title}</h3>
      {children}
    </div>
  );
};

export default Card;
