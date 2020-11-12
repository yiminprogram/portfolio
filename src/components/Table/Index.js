import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
//components
import Thead from './components/Thead/Index';
import Tbody from './components/Tbody/Index';
//context api

const Table = styled.table`
  width: 100%;
  margin: 10px;
  box-shadow: 0 0 10px #ccc;
  border-collapse: collapse;
  border-radius: 10px;
  overflow: hidden;
`;

const Index = ({ data, head }) => {
  const [tableData, setTableData] = useState();
  const [item, setItem] = useState('');
  const [sortStaus, setSortStaus] = useState('none');
  useEffect(() => {
    setTableData(data);
  }, [data]);
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
      {head && (
        <Thead head={Object.keys(head)} thClick={thClick} item={item} sortStaus={sortStaus} />
      )}
      {tableData && <Tbody data={tableData} />}
    </Table>
  );
};

export default Index;
