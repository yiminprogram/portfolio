import React, { FC } from 'react';
//style
import * as SVG from '../style';

const Sun: FC = () => {
  return (
    <SVG.Sun
      viewBox="40 0 200 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle id="sun" cx="143" cy="65" r="65" fill="#FFD600" />
    </SVG.Sun>
  );
};

export default Sun;
