import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  width: 500px;
  box-shadow: 0 0 10px #ccc;
  border-collapse: collapse;
  border-radius: 10px;
  overflow: hidden;

  th {
    padding: 1rem;
    font-size: 1.3rem;
    font-weight: 700;
    color: #fff;
    background-color: #3f51b5;
  }

  td {
    font-size: 1.1rem;
    padding: 1rem;
    text-align: center;
  }

  tbody tr {
    cursor: pointer;
    border-bottom: 1px solid #ccc;
    &:hover {
      background-color: #e8eaf6;
    }
  }

  tbody tr:last-of-type {
    border-bottom: none;
  }
`;

const Td = ({ data }) => {
  return <td>{data}</td>;
};

const Tr = ({ data }) => {
  return (
    <tr>
      {Object.values(data).map((ele, idx) => (
        <Td key={idx} data={ele} />
      ))}
    </tr>
  );
};

const Thead = ({ head }) => {
  return (
    <thead>
      <tr>
        {head.map((ele, idx) => (
          <th key={idx}>{ele}</th>
        ))}
      </tr>
    </thead>
  );
};

const Tbody = ({ data }) => {
  return (
    <tbody>
      {data.map((ele, idx) => (
        <Tr key={idx} data={ele} />
      ))}
    </tbody>
  );
};

const Index = ({ data }) => {
  return (
    <Table>
      <Thead head={Object.keys(data[0])} />
      <Tbody data={data} />
    </Table>
  );
};

export default Index;
