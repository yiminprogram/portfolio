import React from 'react';
import styled from 'styled-components';

const WaveSvg = styled.svg`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 250px;
  z-index: -1;
  transform: rotate(180deg);
`;

const WaveBottom = () => {
  return (
    <WaveSvg
      viewBox="0 0 1441 553"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M0 497V0H1440.5V393.5C1427.17 420 1368.2 462.2 1239 419C1077.5 365 1072.5 423.5 866.5 497C660.5 570.5 703.5 239.5 438.5 446C226.5 611.2 57.8333 548.833 0 497Z"
        fill="url(#paint0_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="350"
          y1="-2.53609e-05"
          x2="974"
          y2="444.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#451B9E" />
          <stop offset="1" stop-color="#9F2F9B" />
        </linearGradient>
      </defs>
    </WaveSvg>
  );
};

export default WaveBottom;
