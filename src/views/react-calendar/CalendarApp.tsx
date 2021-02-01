import React, { FC, useEffect, useReducer } from 'react';
//style
import { CalendarPage } from './style';
//components
import Calendar from './containers/Calendar';
//type
import { EAction } from './type';
//reducer
import { reducer, initialState } from './reducer';
//context
import Context from './context';

const ReactCalendar: FC = () => {
  const [context, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch({ type: EAction.INITIAL_DATE });
  }, []);

  return (
    <CalendarPage>
      <Context.Provider value={{ context, dispatch }}>
        <Calendar />
      </Context.Provider>
    </CalendarPage>
  );
};

export default ReactCalendar;
