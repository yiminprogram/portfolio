import React, { FC } from 'react';
//style
import { CalendarCurrentDate } from './style';
//type
import { TToday } from '../../type';

const CurrentDate: FC<TToday> = ({ today, children }) => {
  return <CalendarCurrentDate today={today}>{children}</CalendarCurrentDate>;
};

export default CurrentDate;
