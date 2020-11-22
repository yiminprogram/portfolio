import React from 'react';
import styled from 'styled-components';
import { ComponentCard, ProjectCard } from '../../components/home-list-card/Index';

const List = styled.section`
  width: 85%;
  padding: 1rem 0;
  margin: 5rem auto;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  > div {
    flex: 0 1 100px;

    > img {
      width: 100%;
    }
  }
`;

const LinkList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
`;

export const ComponentList = ({ list, logo }) => {
  return (
    <List>
      <Logo>
        <div>
          <img src={logo} alt="error" />
        </div>
      </Logo>
      <LinkList>
        {list.map((ele) => (
          <ComponentCard key={ele.id} {...ele} />
        ))}
      </LinkList>
    </List>
  );
};

export const ProjectList = ({ list, logo }) => {
  return (
    <List>
      <Logo>
        <div>
          <img src={logo} alt="error" />
        </div>
      </Logo>
      <LinkList>
        {list.map((ele) => (
          <ProjectCard key={ele.id} {...ele} />
        ))}
      </LinkList>
    </List>
  );
};
