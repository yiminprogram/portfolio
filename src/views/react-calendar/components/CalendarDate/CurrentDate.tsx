import React, { FC, useContext } from 'react';
//style
import { CalendarCurrentDate } from './style';
//type
import { TDate, EAction } from '../../type';
//context
import Context from '../../context';

const CurrentDate: FC<TDate> = React.memo(({ id }) => {
  const {
    context: { currentDate },
    dispatch,
  } = useContext(Context);
  return (
    <CalendarCurrentDate
      onClick={() =>
        dispatch({ type: EAction.CLICK_CURRENT_LIST, payload: id })
      }
      currentDate={currentDate.toLocaleDateString() === id.toLocaleDateString()}
    >
      {id.getDate()}
    </CalendarCurrentDate>
  );
});

export default CurrentDate;
