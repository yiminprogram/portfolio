import React, { FC, memo } from 'react';
//style
import { Title, PrevNextBtn, TodayBtn } from './style';
//material ui
import { ArrowLeft, ArrowRight, Today } from '@material-ui/icons';
//type
import { EAction, TCalendarTitleProps } from '../../type';

const CalendarTitle: FC<TCalendarTitleProps> = memo(
  ({ firstDate, dispatch }) => {
    return (
      <Title>
        <h1>{`${firstDate.getFullYear()}/${firstDate.getMonth() + 1}`}</h1>
        <div>
          <TodayBtn onClick={() => dispatch({ type: EAction.BACK_TODAY })}>
            <span>
              <Today style={{ fontSize: '1.8rem' }} />
            </span>
          </TodayBtn>
          <PrevNextBtn onClick={() => dispatch({ type: EAction.PREV_MONTH })}>
            <span>
              <ArrowLeft style={{ fontSize: '1.8rem' }} />
            </span>
          </PrevNextBtn>
          <PrevNextBtn onClick={() => dispatch({ type: EAction.NEXT_MONTH })}>
            <span>
              <ArrowRight style={{ fontSize: '1.8rem' }} />
            </span>
          </PrevNextBtn>
        </div>
      </Title>
    );
  },
);

export default CalendarTitle;
