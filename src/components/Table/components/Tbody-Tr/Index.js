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

  > td {
    font-size: 1.1rem;
    padding: 1rem;
    text-align: center;
    vertical-align: middle;

    > img {
      width: 60%;
      min-width: 100px;
    }
  }
`;

const Index = ({ data }) => {
  return (
    <Tr>
      <td>{data.id}</td>
      <td>{data.name}</td>
      <td>
        <img src={data.image} alt="error" />
      </td>
      <td>{data.price}</td>
      <td>{data.calorie}</td>
      {/* {Object.values(data).map((ele, idx) => (
        <Td key={idx} data={ele} />
      ))} */}
    </Tr>
  );
};

export default Index;
