import React from 'react';
import styled from 'styled-components';
//components
import { ProjectCard } from '../../components/home-list-card/Index';
//data
import ProjectList from '../../assets/data/iii-project.json';
//image
import LogoImg from '../../assets/image/logo/school-logo.png';
//function
import { ScrollTop } from '../../functions/Index';

const ReactPortfolio = styled.div`
  ${(p) => p.theme.mixin.page};
`;
const Logo = styled.div`
  display: flex;
  justify-content: center;
  margin: 5rem auto;
  .logoContainer {
    flex: 0 1 200px;
    > img {
      width: 100%;
    }
  }
`;
const ListContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;
const index = () => {
  ScrollTop();
  return (
    <ReactPortfolio>
      <Logo>
        <div className="logoContainer">
          <img src={LogoImg} alt="error" />
        </div>
      </Logo>
      <ListContainer>
        {ProjectList.map((ele) => (
          <ProjectCard key={ele.id} {...ele} />
        ))}
      </ListContainer>
    </ReactPortfolio>
  );
};

export default index;
