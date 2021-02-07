import React, { useContext } from 'react';
//style
import { CalendarDiv, CalendarDateList } from './style';
//context
import Context from '../../context';
//components
import { CurrentDate, PrevNextDate } from '../../components/CalendarDate';
import Title from '../../components/CalendarTitle';
import CalendarDay from '../../components/CalendarDay';

const Calendar = () => {
  const { context, dispatch } = useContext(Context);
  const {
    month: { prevList, currentList, nextList },
  } = context;

  return (
    <CalendarDiv>
      <Title context={context} dispatch={dispatch} />
      <CalendarDay />
      <CalendarDateList>
        {prevList.map((ele) => (
          <PrevNextDate>{new Date(ele.id).getDate()}</PrevNextDate>
        ))}
        {currentList.map((ele) => (
          <CurrentDate {...ele} context={context} dispatch={dispatch} />
        ))}
        {nextList.map((ele) => (
          <PrevNextDate>{new Date(ele.id).getDate()}</PrevNextDate>
        ))}
      </CalendarDateList>
    </CalendarDiv>
  );
};

export default Calendar;
