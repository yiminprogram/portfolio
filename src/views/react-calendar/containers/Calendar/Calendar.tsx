import React, { useContext } from 'react';
//style
import {
  CalendarDiv,
  CalendarDateList,
  CalendarDayList,
  CalendarDay,
} from './style';
//context
import Context from '../../context';
//components
import { CurrentDate, PrevNextDate } from '../../components/CalendarDate';
import Title from '../../components/CalendarTitle';

const Calendar = () => {
  const {
    context: { currentList, nextList, prevList, today },
  } = useContext(Context);

  return (
    <CalendarDiv>
      <Title />
      <CalendarDayList>
        <CalendarDay>日</CalendarDay>
        <CalendarDay>ㄧ</CalendarDay>
        <CalendarDay>二</CalendarDay>
        <CalendarDay>三</CalendarDay>
        <CalendarDay>四</CalendarDay>
        <CalendarDay>五</CalendarDay>
        <CalendarDay>六</CalendarDay>
      </CalendarDayList>
      <CalendarDateList>
        {prevList.map((ele) => (
          <PrevNextDate>{ele.id.getDate()}</PrevNextDate>
        ))}
        {currentList.map((ele) => (
          <CurrentDate
            today={ele.id.toLocaleDateString() === today.toLocaleDateString()}
          >
            {ele.id.getDate()}
          </CurrentDate>
        ))}
        {nextList.map((ele) => (
          <PrevNextDate>{ele.id.getDate()}</PrevNextDate>
        ))}
      </CalendarDateList>
    </CalendarDiv>
  );
};

export default Calendar;
