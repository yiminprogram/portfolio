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
  const {
    context: {
      month: { prevList, currentList, nextList },
    },
  } = useContext(Context);

  return (
    <CalendarDiv>
      <Title />
      <CalendarDay />
      <CalendarDateList>
        {prevList.map((ele) => (
          <PrevNextDate>{ele.id.getDate()}</PrevNextDate>
        ))}
        {currentList.map((ele) => (
          <CurrentDate {...ele} />
        ))}
        {nextList.map((ele) => (
          <PrevNextDate>{ele.id.getDate()}</PrevNextDate>
        ))}
      </CalendarDateList>
    </CalendarDiv>
  );
};

export default Calendar;
