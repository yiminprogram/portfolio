import React from 'react';
//style
import { Skill as SkillDiv, Code } from '../../style';
//date
import technology from 'src/assets/data/technology.json';

const Skill = () => {
  return (
    <SkillDiv>
      {technology.map((ele) => (
        <Code color={ele.color}>
          <h2>{ele.language}</h2>
        </Code>
      ))}
    </SkillDiv>
  );
};

export default Skill;
