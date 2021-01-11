import React from 'react';
//style
import { Info, ListCard } from './style';
//material ui
import Checkbox from '@material-ui/core/Checkbox';
//type
import { TCardProps } from '../../type';

const Index: React.FC<TCardProps> = ({
  time,
  title,
  content,
  done,
  todoDone,
}) => {
  return (
    <ListCard>
      <Checkbox checked={done} onChange={() => todoDone(time)} />
      <Info>
        <h3>{title}</h3>
        <p>{content}</p>
        <time>{time}</time>
      </Info>
    </ListCard>
  );
};

export default Index;
