import React, { useState } from 'react';
import styled from 'styled-components';
//material ui
import {
  ArrowUpward,
  ArrowDownward,
} from '@material-ui/icons';

const Table = styled.table`
  min-width: 600px;
  box-shadow: 0 0 10px #ccc;
  border-collapse: collapse;
  border-radius: 10px;
  overflow: hidden;

  th {
    cursor: pointer;
    min-width: 100px;
    padding: 1rem;
    font-size: 1.3rem;
    font-weight: 700;
    color: #fff;
    background-color: #3f51b5;
    vertical-align: middle;
    white-space: nowrap;
  }

  td {
    font-size: 1.1rem;
    padding: 1rem;
    text-align: center;
    vertical-align: middle;
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

const SortIcon = styled(ArrowDownward)`
  visibility: ${(p) =>
    p.arr === undefined ? 'hidden' : 'visible'};
  transform: ${(p) =>
    p.arr !== undefined
      ? p.arr.length === 1
        ? 'rotate(0deg)'
        : 'rotate(180deg)'
      : 'none'};
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

const Th = ({ data, state }) => {
  return (
    <th>
      <SortIcon arr={state} />
      <span>{data}</span>
    </th>
  );
};

const Thead = ({ head }) => {
  const [state, setState] = useState([]);
  const target = (e) => {
    const tHead = e.target.textContent;
    if (state.length === 2) {
      setState([]);
    } else if (state[0] !== tHead) {
      setState([tHead]);
    } else if (state.length === 0) {
      setState([...state, tHead]);
    } else if (state[0] === tHead) {
      setState([...state, tHead]);
    }
  };
  return (
    <thead>
      <tr onClick={target}>
        {head.map((ele, idx) =>
          ele === state[0] ? (
            <Th key={idx} data={ele} state={state} />
          ) : (
            <Th key={idx} data={ele} />
          ),
        )}
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
