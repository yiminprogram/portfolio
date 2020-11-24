import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
//components
import Wellcome from '../../containers/home-wellcome/Index';
//data
import ReactList from '../../assets/data/react-portfolio.json';
// import ReactProject from '../../assets/data/react-project.json';
import VueList from '../../assets/data/vue-project.json';
import IIIList from '../../assets/data/iii-project.json';
//image
import ReactImg from '../../assets/image/logo/reacr-profile.svg';
import VueImg from '../../assets/image/logo/vue-profile.svg';
import StaticImg from '../../assets/image/logo/static-profile.svg';
import ReactLogo from '../../assets/image/logo/react.png';
import VueLogo from '../../assets/image/logo/vue.png';
import SchoolLogo from '../../assets/image/logo/school-logo.png';
//function
// import { ScrollTop } from '../../functions/Index';
const Home = styled.div`
  ${(props) => props.theme.mixin.page};
`;

const ReactPortfolio = styled.div`
  ${(p) => p.theme.mixin.portfolio};
`;
const VuePortfolio = styled.div`
  ${(p) => p.theme.mixin.portfolio};
`;
const IIIPortfolio = styled.div`
  ${(p) => p.theme.mixin.portfolio};
`;
const LogoContainer = styled.div`
  flex: 0 1 600px;
  margin: 0 5rem;
  > img {
    width: 100%;
    object-fit: cover;
  }
`;
const InfoContainer = styled.div`
  flex: 0 1 600px;
`;

const InfoCard = styled.div`
  width: 60%;
  margin: 0 auto;
  padding: 2rem;
  box-shadow: ${(p) => p.theme.boxShadow.card};
  border-radius: 3px;

  > h1 {
    margin-bottom: 2rem;
    font-size: 2rem;
    font-weight: 700;
    color: ${(p) => p.color};
  }
  > ul {
    margin-bottom: 5rem;
    > li {
      color: #888;
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }
  }
`;

const LinkGroup = styled.div`
  text-align: right;
  margin-bottom: 1rem;
  .btn {
    color: #fff;
    padding: 0.6rem 1.2rem;
    font-size: 1.3rem;
    font-weight: 700;
    background-color: ${(p) => p.color};
    border: none;
    border-radius: 3px;
    text-decoration: none;
  }
`;

const Index = () => {
  // ScrollTop();
  return (
    <Home>
      <Wellcome />
      <ReactPortfolio>
        <LogoContainer>
          <img src={ReactImg} alt="error" />
        </LogoContainer>
        <InfoContainer>
          <InfoCard color="#61dafb">
            <h1>React Portfolio</h1>
            <ul>
              <li>React Components</li>
              <li>React Project</li>
            </ul>
            <LinkGroup color="#61dafb">
              <Link
                className="btn"
                to={{
                  pathname: '/profolio-list/react',
                  query: { logo: ReactLogo, data: ReactList },
                }}
              >
                Go to
              </Link>
            </LinkGroup>
          </InfoCard>
        </InfoContainer>
      </ReactPortfolio>
      <VuePortfolio>
        <InfoContainer>
          <InfoCard color="#41b883">
            <h1>Vue Portfolio</h1>
            <ul>
              <li>Vue Project</li>
            </ul>
            <LinkGroup color="#41b883">
              <Link
                className="btn"
                to={{ pathname: '/profolio-list/vue', query: { logo: VueLogo, data: VueList } }}
              >
                Go to
              </Link>
            </LinkGroup>
          </InfoCard>
        </InfoContainer>
        <LogoContainer>
          <img src={VueImg} alt="error" />
        </LogoContainer>
      </VuePortfolio>
      <IIIPortfolio>
        <LogoContainer>
          <img src={StaticImg} alt="error" />
        </LogoContainer>
        <InfoContainer>
          <InfoCard color="#dd4b25">
            <h1>資策會結訓專案</h1>
            <ul>
              <li>Static HTML,CSS,jQuery</li>
              <li>Website Template</li>
            </ul>
            <LinkGroup color="#dd4b25">
              <Link
                className="btn"
                to={{ pathname: '/profolio-list/iii', query: { logo: SchoolLogo, data: IIIList } }}
              >
                Go to
              </Link>
            </LinkGroup>
          </InfoCard>
        </InfoContainer>
      </IIIPortfolio>
    </Home>
  );
};

export default Index;
