import React from 'react';
import styled from 'styled-components';
//components
import Tr from '../Tbody-Tr/Index';

const Tbody = styled.tbody``;

const Index = ({ data }) => {
  return (
    <Tbody>
      {data.map((ele, idx) => (
        <Tr key={idx} data={ele} />
      ))}
    </Tbody>
  );
};

export default Index;
