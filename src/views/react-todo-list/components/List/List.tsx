import React, { FC } from 'react';
//style
import { Category, ListDiv } from './style';
//Icon
import { EventAvailable, EventBusy } from '@material-ui/icons';
// Components
import ListCard from '../Card';
//type
import { TListPorps, TTodo } from '../../type';

const List: FC<TListPorps> = ({ todos, todoDone }) => {
  return (
    <ListDiv>
      <Category color="#ef5350">
        <EventBusy />
        <span>未完成</span>
      </Category>
      {todos.map(
        (ele: TTodo) =>
          !ele.done && <ListCard key={ele.time} {...ele} todoDone={todoDone} />,
      )}
      <Category color="#2e7d32">
        <EventAvailable />
        <span>已完成</span>
      </Category>
      {todos.map(
        (ele: TTodo) =>
          ele.done && <ListCard key={ele.time} {...ele} todoDone={todoDone} />,
      )}
    </ListDiv>
  );
};

export default List;
