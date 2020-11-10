import React from 'react';
import styled from 'styled-components';
//material-ui
import { ArrowDownward } from '@material-ui/icons';

const TableTh = styled.th`
  cursor: pointer;
  min-width: 100px;
  padding: 0rem 1.3rem;
  height: 60px;
  font-size: 1.3rem;
  font-weight: 700;
  color: #fff;
  background-color: #3f51b5;
  vertical-align: middle;
  white-space: nowrap;

  > div {
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const rotate = (e) => {
  switch (e) {
    case 'ascending':
      return 'rotate(0deg)';
    case 'descending':
      return 'rotate(180deg)';
    default:
      return 'rotate(0deg)';
  }
};

const SortIcon = styled.span`
  pointer-events: none;
  display: ${(p) => (p.sortStatus === 'none' ? 'none' : 'initial')};
  transform: ${(p) => rotate(p.sortStatus)};
`;

export const ThIcon = ({ data, sortStatus }) => {
  return (
    <TableTh aria-details={data}>
      <div>
        <SortIcon sortStatus={sortStatus}>
          <ArrowDownward />
        </SortIcon>

        <span>{data}</span>
      </div>
    </TableTh>
  );
};

export const Th = ({ data }) => {
  return (
    <TableTh aria-details={data}>
      <div>
        <span>{data}</span>
      </div>
    </TableTh>
  );
};
