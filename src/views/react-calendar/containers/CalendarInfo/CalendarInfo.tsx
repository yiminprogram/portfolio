import React, { useContext } from 'react';
//style
import { CalendarInfoDiv, DateTitle, List } from './style';
//components
import InfoCard from '../../components/InfoCard';
//context
import Context from '../../context';

const CalendarInfo = () => {
  const {
    context: { currentDate, boardList },
  } = useContext(Context);
  return (
    <CalendarInfoDiv>
      <DateTitle>{currentDate.toLocaleDateString()}</DateTitle>
      <List>
        {boardList.map((ele) => (
          <InfoCard {...ele} />
        ))}
      </List>
    </CalendarInfoDiv>
  );
};

export default CalendarInfo;
