import React from 'react';
import styled from 'styled-components';
//components
import Td from '../Td/Index';

const Tr = styled.tr`
  cursor: pointer;
  border-bottom: 1px solid #ccc;

  &:hover {
    background-color: #e8eaf6;
  }

  &:last-of-type {
    border-bottom: none;
  }
`;

const Index = ({ data }) => {
  return (
    <Tr>
      {Object.values(data).map((ele, idx) => (
        <Td key={idx} data={ele} />
      ))}
    </Tr>
  );
};

export default Index;
