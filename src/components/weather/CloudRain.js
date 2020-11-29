import React from 'react';
import styled from 'styled-components';
import { left, right, drop } from './animation';

const SVG = styled.svg`
  width: 100%;
  height: 100%;

  #cloudStart {
    animation: 2s ${right} infinite linear;
  }
  #cloudCenter {
    animation: 2s ${left} infinite linear;
  }

  #cloudEnd {
    animation: 3s ${right} infinite linear;
  }

  .rain {
    animation: 1s ${drop} infinite linear;
  }

  .rain1 {
    animation: 2s ${drop} infinite linear;
  }
`;

const CloudRain = () => {
  return (
    <SVG viewBox="0 0 300 257" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="cloudRain">
        <path
          id="cloudEnd"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M100 0C109.107 0 117.646 2.43486 125 6.68911C132.354 2.43486 140.893 0 150 0C159.107 0 167.646 2.43486 175 6.68911C182.354 2.43486 190.893 0 200 0C227.614 0 250 22.3858 250 50C250 54.1365 249.498 58.1558 248.551 62C249.498 65.8442 250 69.8634 250 74C250 101.614 227.614 124 200 124C190.893 124 182.354 121.565 175 117.311C167.646 121.565 159.107 124 150 124C140.893 124 132.354 121.565 125 117.311C117.646 121.565 109.107 124 100 124C72.3858 124 50 101.614 50 74C50 69.8634 50.5023 65.8442 51.4493 62C50.5023 58.1558 50 54.1365 50 50C50 22.3858 72.3858 0 100 0Z"
          fill="#F9F9F9"
        />
        <path
          id="cloudCenter"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M150 51C159.107 51 167.646 53.4349 175 57.6891C182.354 53.4349 190.893 51 200 51C209.107 51 217.646 53.4349 225 57.6891C232.354 53.4349 240.893 51 250 51C277.614 51 300 73.3858 300 101C300 105.137 299.498 109.156 298.551 113C299.498 116.844 300 120.863 300 125C300 152.614 277.614 175 250 175C240.893 175 232.354 172.565 225 168.311C217.646 172.565 209.107 175 200 175C190.893 175 182.354 172.565 175 168.311C167.646 172.565 159.107 175 150 175C122.386 175 100 152.614 100 125C100 120.863 100.502 116.844 101.449 113C100.502 109.156 100 105.137 100 101C100 73.3858 122.386 51 150 51Z"
          fill="#F3F3F3"
        />
        <path
          id="cloudStart"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M50 30C59.1072 30 67.6457 32.4349 75 36.6891C82.3543 32.4349 90.8928 30 100 30C109.107 30 117.646 32.4349 125 36.6891C132.354 32.4349 140.893 30 150 30C177.614 30 200 52.3858 200 80C200 84.1365 199.498 88.1558 198.551 92C199.498 95.8442 200 99.8634 200 104C200 131.614 177.614 154 150 154C140.893 154 132.354 151.565 125 147.311C117.646 151.565 109.107 154 100 154C90.8928 154 82.3543 151.565 75 147.311C67.6457 151.565 59.1072 154 50 154C22.3858 154 0 131.614 0 104C0 99.8634 0.502322 95.8442 1.44929 92C0.502322 88.1558 0 84.1365 0 80C0 52.3858 22.3858 30 50 30Z"
          fill="#ECECEC"
        />
        <line
          className="rain"
          x1="45.9701"
          y1="169.243"
          x2="42.9701"
          y2="181.243"
          stroke="#B9F2FF"
          stroke-width="2"
        />
        <line
          className="rain1"
          x1="25.9701"
          y1="196.243"
          x2="22.9701"
          y2="208.243"
          stroke="#B9F2FF"
          stroke-width="2"
        />
        <line
          className="rain"
          x1="42.9701"
          y1="232.243"
          x2="39.9701"
          y2="244.243"
          stroke="#B9F2FF"
          stroke-width="2"
        />
        <line
          className="rain1"
          x1="66.9701"
          y1="196.243"
          x2="63.9701"
          y2="208.243"
          stroke="#B9F2FF"
          stroke-width="2"
        />
        <line
          className="rain"
          x1="97.9701"
          y1="181.243"
          x2="94.9701"
          y2="193.243"
          stroke="#B9F2FF"
          stroke-width="2"
        />
        <line
          className="rain1"
          x1="86.9701"
          y1="232.243"
          x2="83.9701"
          y2="244.243"
          stroke="#B9F2FF"
          stroke-width="2"
        />
        <line
          className="rain"
          x1="118.97"
          y1="220.243"
          x2="115.97"
          y2="232.243"
          stroke="#B9F2FF"
          stroke-width="2"
        />
        <line
          className="rain"
          x1="135.97"
          y1="187.243"
          x2="132.97"
          y2="199.243"
          stroke="#B9F2FF"
          stroke-width="2"
        />
        <line
          className="rain1"
          x1="141.97"
          y1="244.243"
          x2="138.97"
          y2="256.243"
          stroke="#B9F2FF"
          stroke-width="2"
        />
        <line
          className="rain"
          x1="156.97"
          y1="199.243"
          x2="153.97"
          y2="211.243"
          stroke="#B9F2FF"
          stroke-width="2"
        />
        <line
          className="rain1"
          x1="177.97"
          y1="235.243"
          x2="174.97"
          y2="247.243"
          stroke="#B9F2FF"
          stroke-width="2"
        />
        <line
          className="rain"
          x1="191.97"
          y1="196.243"
          x2="188.97"
          y2="208.243"
          stroke="#B9F2FF"
          stroke-width="2"
        />
        <line
          className="rain1"
          x1="200.97"
          y1="241.243"
          x2="197.97"
          y2="253.243"
          stroke="#B9F2FF"
          stroke-width="2"
        />
        <line
          className="rain"
          x1="219.97"
          y1="202.243"
          x2="216.97"
          y2="214.243"
          stroke="#B9F2FF"
          stroke-width="2"
        />
        <line
          className="rain1"
          x1="228.97"
          y1="241.243"
          x2="225.97"
          y2="253.243"
          stroke="#B9F2FF"
          stroke-width="2"
        />
        <line
          className="rain"
          x1="252.97"
          y1="199.243"
          x2="249.97"
          y2="211.243"
          stroke="#B9F2FF"
          stroke-width="2"
        />
        <line
          className="rain"
          x1="264.97"
          y1="238.243"
          x2="261.97"
          y2="250.243"
          stroke="#B9F2FF"
          stroke-width="2"
        />
        <line
          className="rain1"
          x1="276.97"
          y1="187.243"
          x2="273.97"
          y2="199.243"
          stroke="#B9F2FF"
          stroke-width="2"
        />
      </g>
    </SVG>
  );
};

export default CloudRain;
