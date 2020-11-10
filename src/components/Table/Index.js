import React, { useState } from 'react';
import styled from 'styled-components';
//components
import Thead from './components/Thead/Index';
import Tbody from './components/Tbody/Index';
//context api

const Table = styled.table`
  margin: 10px;
  box-shadow: 0 0 10px #ccc;
  border-collapse: collapse;
  border-radius: 10px;
  overflow: hidden;
`;

const Index = ({ data }) => {
  const [tableData, setTableData] = useState(data);
  const [item, setItem] = useState('');
  const [sortStaus, setSortStaus] = useState('none');
  const thClick = (e) => {
    const thItem = e.target.getAttribute('aria-details');
    if (thItem !== item) {
      const newData = [...data].sort((a, b) => {
        return a[thItem] - b[thItem];
      });
      setTableData(newData);
      setSortStaus('ascending');
    } else if (sortStaus === 'none') {
      const newData = [...data].sort((a, b) => {
        return a[thItem] - b[thItem];
      });
      setTableData(newData);
      setSortStaus('ascending');
    } else if (sortStaus === 'ascending') {
      const newData = [...data].sort((a, b) => {
        return b[thItem] - a[thItem];
      });
      setTableData(newData);
      setSortStaus('descending');
    } else {
      const newData = [...data].sort((a, b) => {
        return a[thItem] - b[thItem];
      });
      setTableData(newData);
      setSortStaus('none');
    }
    setItem(thItem);
  };
  return (
    <Table>
      <Thead head={Object.keys(data[0])} thClick={thClick} item={item} sortStaus={sortStaus} />
      <Tbody data={tableData} />
    </Table>
  );
};

export default Index;
