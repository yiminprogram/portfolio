import styled from 'styled-components';
//animation
import {
  right,
  left,
  bright,
  drop,
} from './animation/animation';

export const Cloud = styled.svg`
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
`;

export const CloudRain = styled.svg`
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
export const CloudSun = styled.svg`
  width: 100%;
  height: 100%;

  #cloudStart {
    animation: 2s ${left} infinite linear;
  }

  #cloudEnd {
    animation: 2s ${right} infinite linear;
  }

  #sun {
    animation: 5s ${bright} infinite linear;
  }
`;
export const Error = styled.svg`
  width: 100%;
  height: 100%;

  #errorCircle {
    animation: 2s ${bright} infinite linear;
  }
`;
export const Rain = styled.svg`
  width: 100%;
  height: 100%;

  #cloud {
    animation: 5s ${bright} infinite linear;
  }

  .rain {
    animation: 1s ${drop} infinite linear;
  }

  .rain1 {
    animation: 2s ${drop} infinite linear;
  }
`;
export const Sun = styled.svg`
  width: 100%;
  height: 100%;

  #sun {
    animation: 5s ${bright} infinite linear;
  }
`;
