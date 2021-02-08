import React, { FC } from 'react';
//style
import { Card } from './style';
//type
import { TCalendar } from '../../type';

const InfoCard: FC<TCalendar> = ({ id, title, content }) => {
  return (
    <Card>
      <time>{id.toLocaleDateString()}</time>
      <h1>{title}</h1>
      <p>{content}</p>
    </Card>
  );
};

export default InfoCard;
