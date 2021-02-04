import React, { FC, useEffect, useReducer } from 'react';
//style
import { CalendarPage, Container, AddBtn } from './style';
//components
import Calendar from './containers/Calendar';
import CalendarInfo from './containers/CalendarInfo';
import AddCalendar from './components/AddCalendar';
//type
import { EAction } from './type';
//reducer
import { reducer, initialState } from './reducer';
//context
import Context from './context';
//material ui
import { Event } from '@material-ui/icons';

const ReactCalendar: FC = () => {
  const [context, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch({ type: EAction.INITIAL_DATE });
  }, []);

  return (
    <CalendarPage>
      <Container>
        <Context.Provider value={{ context, dispatch }}>
          <Calendar />
          <CalendarInfo />
          <AddBtn>
            <button onClick={() => dispatch({ type: EAction.SHOW_FORM })}>
              <Event />
            </button>
          </AddBtn>
          {context.isAdd && <AddCalendar />}
        </Context.Provider>
      </Container>
    </CalendarPage>
  );
};

export default ReactCalendar;
