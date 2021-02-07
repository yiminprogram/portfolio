import React, { FC, memo } from 'react';
//style
import {
  CalendarCurrentDate,
  Event,
  DateSpan,
  DateRadio,
  DateLabel,
} from './style';
//type
import { EAction, TDateProps } from '../../type';
//material ui
import { EventNote } from '@material-ui/icons';

const CurrentDate: FC<TDateProps> = memo(({ dispatch, id, list }) => {
  const today = new Date();
  const date = new Date(id);
  const dateStr = date.getDate();
  const isToday = today.toLocaleDateString() === date.toLocaleDateString();
  return (
    <CalendarCurrentDate>
      <DateRadio type="radio" name="date" id={`${dateStr}`} />
      <DateLabel
        htmlFor={`${dateStr}`}
        isToday={isToday}
        onClick={() =>
          dispatch({ type: EAction.CLICK_CURRENT_LIST, payload: id })
        }
      >
        <DateSpan>{dateStr}</DateSpan>
        {list.length > 0 && (
          <Event isToday={isToday}>
            <EventNote style={{ fontSize: '2rem' }} />
          </Event>
        )}
      </DateLabel>
    </CalendarCurrentDate>
  );
});

export default CurrentDate;
