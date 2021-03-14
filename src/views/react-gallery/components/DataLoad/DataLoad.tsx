import React from 'react';
//style
import styled from 'styled-components';
//components
import CircularProgress from '@material-ui/core/CircularProgress';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;

  .progress {
    color: ${(p) => p.theme.colors.primary};
  }
`;

const DataLoad = () => {
  return (
    <Container>
      <CircularProgress className="progress" size={60} thickness={6} />
    </Container>
  );
};

export default DataLoad;
