import React from 'react';
//style
import * as TodoListCard from './style';
//material ui
import Checkbox from '@material-ui/core/Checkbox';
//interface
import { IProps } from './interface';

const Index: React.FC<IProps> = ({
  time,
  title,
  content,
  done,
  todoDone,
}) => {
  return (
    <TodoListCard.ListCard>
      <Checkbox
        checked={done}
        onChange={() => todoDone(time)}
      />
      <TodoListCard.Info>
        <h3>{title}</h3>
        <p>{content}</p>
        <time>{time}</time>
      </TodoListCard.Info>
    </TodoListCard.ListCard>
  );
};

export default Index;
