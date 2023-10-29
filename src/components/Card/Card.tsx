import React, { PropsWithChildren } from 'react';

import './card.scss';

interface CardProps {
  'data-testid': string;
  title: string;
}

const Card: React.FC<PropsWithChildren<CardProps>> = ({ title, children, ...rest }) => {
  return (
    <div data-testid={rest["data-testid"]} className="card">
      <h3 className="card__title">{title}</h3>
      {children}
    </div>
  );
};

export default Card;
