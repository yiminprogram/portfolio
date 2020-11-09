import React from 'react';
import styled from 'styled-components';
import Card from '../../components/home-list-card/Index';

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

const ProjectList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
`;

const Index = ({ list, logo }) => {
  return (
    <List>
      <Logo>
        <div>
          <img src={logo} alt="error" />
        </div>
      </Logo>
      <ProjectList>
        {list.map((ele) => (
          <Card key={ele.id} {...ele} />
        ))}
      </ProjectList>
    </List>
  );
};

export default Index;
