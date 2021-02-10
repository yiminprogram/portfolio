import React, { FC, useEffect } from 'react';
//style
import { AboutDiv } from './style';
//components
import Title from './components/Title';
import Introduce from './components/Introduce';
import Skill from './components/Skill';
import Contact from './components/Contact';
import Wave from './components/WaveBottom';

const About: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <AboutDiv>
      <Title />
      <Introduce />
      <Skill />
      <Contact />
      <Wave />
    </AboutDiv>
  );
};

export default About;
