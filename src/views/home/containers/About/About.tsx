import React from 'react';
//style
import { AboutBtn, AboutBtnDiv, AboutDiv, AboutTitle } from '../../style';
//image
import Wallpaper from 'src/assets/image/home-wallpaper.jpg';

const About = () => {
  return (
    <AboutDiv style={{ backgroundImage: `url(${Wallpaper})` }}>
      <AboutTitle>關於我</AboutTitle>
      <AboutBtnDiv>
        <AboutBtn to="/about">進一步了解 &gt;</AboutBtn>
      </AboutBtnDiv>
    </AboutDiv>
  );
};

export default About;
