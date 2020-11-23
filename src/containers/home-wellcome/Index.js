import React from 'react';
import styled from 'styled-components';
//components
import Model from '../../components/wellcome-model/Index';

const Wellcome = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  margin: 6rem auto;
`;

const Title = styled.div`
  flex: 0 1 800px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  > h1 {
    padding-bottom: 3rem;
    font-weight: 700;
  }

  .top {
    font-size: 4rem;
    color: #333;
  }

  .bottom {
    line-height: 1.5;
    font-size: 5rem;
    color: ${(p) => p.theme.colors.primary};
    text-align: right;
  }
`;

const ModelContainer = styled.div`
  flex: 0 1 800px;
  height: 600px;
`;

const Index = () => {
  return (
    <Wellcome>
      <Title>
        <h1 className="top">Wellcome To</h1>
        <h1 className="bottom">My Portfolio</h1>
      </Title>
      <ModelContainer>
        <Model />
      </ModelContainer>
    </Wellcome>
  );
};

export default Index;
