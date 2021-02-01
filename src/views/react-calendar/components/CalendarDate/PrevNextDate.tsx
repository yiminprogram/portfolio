import React, { FC } from 'react';
//style
import { CalendarPrevNextDate } from './style';

const PrevNextDate: FC = ({ children }) => {
  return <CalendarPrevNextDate>{children}</CalendarPrevNextDate>;
};

export default PrevNextDate;
