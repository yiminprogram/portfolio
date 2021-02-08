import React, { FC, memo } from 'react';
//style
import { CalendarDayList, Day } from './style';

const CalendarDay: FC = memo(() => {
  return (
    <CalendarDayList>
      <Day>日</Day>
      <Day>ㄧ</Day>
      <Day>二</Day>
      <Day>三</Day>
      <Day>四</Day>
      <Day>五</Day>
      <Day>六</Day>
    </CalendarDayList>
  );
});

export default CalendarDay;
