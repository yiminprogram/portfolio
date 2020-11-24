import React from 'react';
import styled from 'styled-components';
//components
import { ComponentCard } from '../../components/home-list-card/Index';
//function
import { ScrollTop } from '../../functions/Index';

const ReactPortfolio = styled.div`
  ${(p) => p.theme.mixin.page};
`;
const Logo = styled.div`
  display: flex;
  justify-content: center;
  margin: 5rem auto;
  > img {
    flex: 0 1 200px;
  }
`;
const ListContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;
const index = (props) => {
  const { logo, data } = props.location.query;
  ScrollTop();
  return (
    <ReactPortfolio>
      <Logo>
        <img src={logo} alt="error" />
      </Logo>
      <ListContainer>
        {data.map((ele) => (
          <ComponentCard key={ele.id} {...ele} />
        ))}
      </ListContainer>
    </ReactPortfolio>
  );
};

export default index;
