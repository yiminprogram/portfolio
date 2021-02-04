import React, { useContext } from 'react';
//style
import { Title, Arrow, TodayBtn, Time } from './style';
//material ui
import { ArrowLeft, ArrowRight, Today } from '@material-ui/icons';
//context
import Context from '../../context';
//type
import { EAction } from '../../type';

const CalendarTitle = () => {
  const {
    context: { firstDate },
    dispatch,
  } = useContext(Context);

  return (
    <Title>
      <Arrow onClick={() => dispatch({ type: EAction.PREV_MONTH })}>
        <span>
          <ArrowLeft style={{ fontSize: '25px' }} />
        </span>
      </Arrow>
      <Time>
        <span>{`${firstDate.getFullYear()}/${firstDate.getMonth() + 1}`}</span>
        <TodayBtn onClick={() => dispatch({ type: EAction.BACK_TODAY })}>
          <Today />
        </TodayBtn>
      </Time>
      <Arrow onClick={() => dispatch({ type: EAction.NEXT_MONTH })}>
        <span>
          <ArrowRight style={{ fontSize: '25px' }} />
        </span>
      </Arrow>
    </Title>
  );
};

export default CalendarTitle;
