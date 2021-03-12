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
      {/* <Wrapper>
        <LoadText>Loading</LoadText>
        <LoadImage
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <ellipse
              id="dot1"
              cx="100"
              cy="11.3333"
              rx="11.3333"
              ry="11.3333"
              fill="white"
            />
            <ellipse
              id="dot2"
              cx="162.333"
              cy="37.3333"
              rx="11"
              ry="11.3333"
              fill="white"
            />
            <ellipse
              id="dot3"
              cx="188.667"
              cy="100"
              rx="11.3333"
              ry="11.3333"
              fill="white"
            />
            <ellipse
              id="dot4"
              cx="162.333"
              cy="162.667"
              rx="11"
              ry="11.3333"
              fill="white"
            />
            <ellipse
              id="dot5"
              cx="100"
              cy="188.667"
              rx="11.3333"
              ry="11.3333"
              fill="white"
            />
            <ellipse
              id="dot6"
              cx="37"
              cy="162.667"
              rx="11"
              ry="11.3333"
              fill="white"
            />
            <ellipse
              id="dot7"
              cx="11.3333"
              cy="100"
              rx="11.3333"
              ry="11.3333"
              fill="white"
            />
            <ellipse
              id="dot8"
              cx="37"
              cy="37.3333"
              rx="11"
              ry="11.3333"
              fill="white"
            />
          </g>
        </LoadImage>
      </Wrapper> */}
    </Container>
  );
};

export default DataLoad;
