import React, { FC, useEffect } from 'react';
//style
import { CalendarPage } from './style';
//components
import Calendar from './components/Calendar';
// import CalendarInfo from './components/CalendarInfo';

const ReactCalendar: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // const currentDay = new Date();
    // const currentMonthFirst = new Date(
    //   currentDay.getFullYear(),
    //   currentDay.getMonth(),
    //   1,
    // );
    // let newData: number[] = [];
    // while (currentMonthFirst.getMonth() === currentDay.getMonth()) {
    //   newData = [...newData, currentMonthFirst.getDate()];
    //   currentMonthFirst.setDate(currentMonthFirst.getDate() + 1);
    // }
  }, []);

  return (
    <CalendarPage>
      <Calendar />
      {/* <CalendarInfo /> */}
    </CalendarPage>
  );
};

export default ReactCalendar;
