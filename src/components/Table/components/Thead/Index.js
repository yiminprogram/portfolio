import React from 'react';
import styled from 'styled-components';
//components
import { Th, ThIcon } from '../Th/Index';

const Thead = styled.thead``;

const Index = ({ head, thClick, item, sortStaus }) => {
  return (
    <Thead>
      <tr onClick={thClick}>
        {head.map((ele, idx) =>
          ele === item ? (
            <ThIcon
              key={idx}
              data={ele}
              sortStatus={sortStaus}
            />
          ) : (
            <Th key={idx} data={ele} />
          ),
        )}
      </tr>
    </Thead>
  );
};

export default Index;
