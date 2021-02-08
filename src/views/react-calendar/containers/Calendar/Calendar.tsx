import React, { FC, useContext } from 'react';
//style
import { CalendarDiv, CalendarDateList } from './style';
//context
import Context from '../../context';
//components
import { CurrentDate, PrevNextDate } from '../../components/CalendarDate';
import Title from '../../components/CalendarTitle';
import CalendarDay from '../../components/CalendarDay';

const Calendar: FC = () => {
  const { context, dispatch } = useContext(Context);
  const {
    month: { prevList, currentList, nextList },
    firstDate,
  } = context;

  return (
    <CalendarDiv>
      <Title firstDate={firstDate} dispatch={dispatch} />
      <CalendarDay />
      <CalendarDateList>
        {prevList.map((ele) => (
          <PrevNextDate>{ele.id.getDate()}</PrevNextDate>
        ))}
        {currentList.map((ele) => (
          <CurrentDate {...ele} dispatch={dispatch} />
        ))}
        {nextList.map((ele) => (
          <PrevNextDate>{ele.id.getDate()}</PrevNextDate>
        ))}
      </CalendarDateList>
    </CalendarDiv>
  );
};

export default Calendar;
