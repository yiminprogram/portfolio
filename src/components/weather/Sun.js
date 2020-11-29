import React from 'react';
import styled from 'styled-components';
import { bright } from './animation';
const SVG = styled.svg`
  width: 100%;
  height: 100%;

  #sun {
    animation: 5s ${bright} infinite linear;
  }
`;

const Sun = () => {
  return (
    <SVG viewBox="0 0 230 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle id="sun" cx="143" cy="65" r="65" fill="#FFD600" />
    </SVG>
  );
};

export default Sun;
