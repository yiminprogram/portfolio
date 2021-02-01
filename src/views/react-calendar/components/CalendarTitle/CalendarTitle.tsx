import React, { useContext } from 'react';
//style
import { Title } from './style';
//material ui
import { ArrowLeft, ArrowRight } from '@material-ui/icons';
//context
import Context from '../../context';
//type
import { EAction } from '../../type';

const CalendarTitle = () => {
  const {
    context: { currentDay },
    dispatch,
  } = useContext(Context);

  return (
    <Title>
      <button onClick={() => dispatch({ type: EAction.PREV_MONTH })}>
        <span>
          <ArrowLeft style={{ fontSize: '25px' }} />
        </span>
      </button>
      <span>{`${currentDay.getFullYear()}/${currentDay.getMonth() + 1}`}</span>
      <button onClick={() => dispatch({ type: EAction.NEXT_MONTH })}>
        <span>
          <ArrowRight style={{ fontSize: '25px' }} />
        </span>
      </button>
    </Title>
  );
};

export default CalendarTitle;
