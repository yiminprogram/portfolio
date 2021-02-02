import React from 'react';
import { Link } from 'react-router-dom';
//style
import { AboutLink, AboutDiv, AboutTitle } from '../../style';
//image
import Wallpaper from 'src/assets/image/home-wallpaper.jpg';

const About = () => {
  return (
    <AboutDiv style={{ backgroundImage: `url(${Wallpaper})` }}>
      <AboutTitle>關於我</AboutTitle>
      <AboutLink>
        <Link to="/about">進一步了解 {'\u2192'}</Link>
      </AboutLink>
    </AboutDiv>
  );
};

export default About;
