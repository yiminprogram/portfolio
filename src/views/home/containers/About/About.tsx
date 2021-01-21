import React from 'react';
//style
import { AboutDiv, Image, LinkBtn } from '../../style';
//image
import Logo from 'src/assets/image/logo/profile.svg';

const About = () => {
  return (
    <AboutDiv>
      <Image>
        <img src={Logo} alt="about" />
      </Image>
      <LinkBtn color="#f9a826" to="/about">
        關於我 &gt;
      </LinkBtn>
    </AboutDiv>
  );
};

export default About;
