import React, { FC, useContext } from 'react';
//style
import { CalendarInfoDiv, DateTitle, List } from './style';
//components
import InfoCard from '../../components/InfoCard';
//context
import Context from '../../context';

const CalendarInfo: FC = () => {
  const {
    context: { currentDate, boardList },
  } = useContext(Context);
  return (
    <CalendarInfoDiv>
      <DateTitle>{currentDate.toLocaleDateString()}</DateTitle>
      <List>
        {boardList.map((ele) => (
          <InfoCard key={ele.id.toLocaleDateString()} {...ele} />
        ))}
      </List>
    </CalendarInfoDiv>
  );
};

export default CalendarInfo;
