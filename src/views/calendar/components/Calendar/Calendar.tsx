import React from 'react';
//style
import {
  CalendarDiv,
  CalendarDateList,
  Title,
  CalendarDayList,
  CalendarDay,
  CalendarDate,
} from './style';
//material ui
import { ArrowRight, ArrowLeft } from '@material-ui/icons';

const number = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
];

const Calendar = () => {
  return (
    <CalendarDiv>
      <Title>
        <button>
          <span>
            <ArrowLeft style={{ fontSize: '25px' }} />
          </span>
        </button>
        <span>2021/01</span>
        <button>
          <span>
            <ArrowRight style={{ fontSize: '25px' }} />
          </span>
        </button>
      </Title>
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
        {number.map((ele) => (
          <CalendarDate>{ele}</CalendarDate>
        ))}
      </CalendarDateList>
    </CalendarDiv>
  );
};

export default Calendar;
