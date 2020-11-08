import React from 'react';
import styled from 'styled-components';

const Td = styled.td`
  font-size: 1.1rem;
  padding: 1rem;
  text-align: center;
  vertical-align: middle;
`;

const Index = ({ data }) => {
  return <Td>{data}</Td>;
};

export default Index;
