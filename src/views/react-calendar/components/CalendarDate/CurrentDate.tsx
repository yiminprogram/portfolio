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
import { EAction, TCurrentDateProps } from '../../type';
//material ui
import { EventNote } from '@material-ui/icons';

const CurrentDate: FC<TCurrentDateProps> = memo(({ dispatch, id, list }) => {
  return (
    <CalendarCurrentDate>
      <DateRadio type="radio" name="date" id={`${id.getDate()}`} />
      <DateLabel
        htmlFor={`${id.getDate()}`}
        isToday={id.toLocaleDateString() === new Date().toLocaleDateString()}
        onClick={() =>
          dispatch({ type: EAction.CLICK_CURRENT_LIST, payload: id })
        }
      >
        <DateSpan>{id.getDate()}</DateSpan>
        {list.length > 0 && (
          <Event
            isToday={
              id.toLocaleDateString() === new Date().toLocaleDateString()
            }
          >
            <EventNote style={{ fontSize: '2rem' }} />
          </Event>
        )}
      </DateLabel>
    </CalendarCurrentDate>
  );
});

export default CurrentDate;
