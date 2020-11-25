import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
//components
import Wellcome from '../../containers/home-wellcome/Index';
import Img from '../../components/image/Index';
//image
import ReactImg from '../../assets/image/logo/reacr-profile.svg';
import VueImg from '../../assets/image/logo/vue-profile.svg';
import StaticImg from '../../assets/image/logo/static-profile.svg';

//function
// import { ScrollTop } from '../../functions/Index';
const Home = styled.div`
  ${(props) => props.theme.mixin.page};
`;

const Protfolio = styled.div`
  ${(p) => p.theme.mixin.portfolio};
`;

const LogoContainer = styled.div`
  flex: 0 1 600px;
  padding: 1.5rem;
  > img {
    width: 100%;
    object-fit: cover;
  }
`;
const InfoContainer = styled.div`
  flex: 0 1 600px;
`;

const InfoCard = styled.div`
  max-width: 400px;
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
      <Protfolio>
        <LogoContainer>
          <Img src={ReactImg} />
        </LogoContainer>
        <InfoContainer>
          <InfoCard color="#61dafb">
            <h1>React Portfolio</h1>
            <ul>
              <li>React Components</li>
              <li>React Project</li>
            </ul>
            <LinkGroup color="#61dafb">
              <Link className="btn" to="/portfolio/react">
                Go to
              </Link>
            </LinkGroup>
          </InfoCard>
        </InfoContainer>
      </Protfolio>
      <Protfolio>
        <InfoContainer>
          <InfoCard color="#41b883">
            <h1>Vue Portfolio</h1>
            <ul>
              <li>Vue Project</li>
            </ul>
            <LinkGroup color="#41b883">
              <Link className="btn" to="/portfolio/vue">
                Go to
              </Link>
            </LinkGroup>
          </InfoCard>
        </InfoContainer>
        <LogoContainer>
          <Img src={VueImg} />
        </LogoContainer>
      </Protfolio>
      <Protfolio>
        <LogoContainer>
          <Img src={StaticImg} />
        </LogoContainer>
        <InfoContainer>
          <InfoCard color="#dd4b25">
            <h1>資策會結訓專案</h1>
            <ul>
              <li>Static HTML,CSS,jQuery</li>
              <li>Website Template</li>
            </ul>
            <LinkGroup color="#dd4b25">
              <Link className="btn" to="/portfolio/iii">
                Go to
              </Link>
            </LinkGroup>
          </InfoCard>
        </InfoContainer>
      </Protfolio>
    </Home>
  );
};

export default Index;