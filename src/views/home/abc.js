import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
//components
import Wellcome from '../../containers/home-wellcome/Index';

const Protfolio = styled.div`
  ${(p) => p.theme.mixin.portfolio};
`;

const ReactLogo = styled.div`
  ${(p) => p.theme.mixin.logo};
  transform: ${({ fade }) => (fade ? 'translateX(0)' : 'translateX(-150px)')};
  opacity: ${({ fade }) => (fade ? 1 : 0)};
`;
const VueLogo = styled.div`
  ${(p) => p.theme.mixin.logo};
  transform: ${({ fade }) => (fade ? 'translateX(0)' : 'translateX(150px)')};
  opacity: ${({ fade }) => (fade ? 1 : 0)};
`;
const IIILogo = styled.div`
  ${(p) => p.theme.mixin.logo};
  transform: ${({ fade }) => (fade ? 'translateX(0)' : 'translateX(-150px)')};
  opacity: ${({ fade }) => (fade ? 1 : 0)};
`;
const ReactInfo = styled.div`
  flex: 0 1 600px;
  transition: 0.5s all ease;
  transform: ${({ fade }) => (fade ? 'translateX(0)' : 'translateX(150px)')};
  opacity: ${({ fade }) => (fade ? 1 : 0)};
`;
const VueInfo = styled.div`
  flex: 0 1 600px;
  transition: 0.5s all ease;
  transform: ${({ fade }) => (fade ? 'translateX(0)' : 'translateX(-150px)')};
  opacity: ${({ fade }) => (fade ? 1 : 0)};
`;
const IIIInfo = styled.div`
  flex: 0 1 600px;
  transition: 0.5s all ease;
  transform: ${({ fade }) => (fade ? 'translateX(0)' : 'translateX(150px)')};
  opacity: ${({ fade }) => (fade ? 1 : 0)};
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
  const portfolioReact = useRef();
  const portfolioVue = useRef();
  const portfolioIII = useRef();
  const [fadeReact, setFadeReact] = useState(false);
  const [fadeVue, setFadeVue] = useState(false);
  const [fadeIII, setFadeIII] = useState(false);
  const scrollReact = (e) => {
    if (e[0].isIntersecting) {
      setFadeReact(true);
    }
  };
  const scrollVue = (e) => {
    if (e[0].isIntersecting) {
      setFadeVue(true);
    }
  };
  const scrollIII = (e) => {
    if (e[0].isIntersecting) {
      setFadeIII(true);
    }
  };
  useEffect(() => {
    const observeReact = new IntersectionObserver(scrollReact, {
      threshold: 0.75,
    });
    const observeVue = new IntersectionObserver(scrollVue, {
      threshold: 0.75,
    });
    const observeIII = new IntersectionObserver(scrollIII, {
      threshold: 0.75,
    });
    observeReact.observe(portfolioReact.current);
    observeVue.observe(portfolioVue.current);
    observeIII.observe(portfolioIII.current);
  }, []);
  return (
    <Home>
      <Wellcome />
      <Protfolio ref={portfolioReact}>
        <ReactLogo fade={fadeReact}>
          <img src={ReactImg} alt="error" />
        </ReactLogo>
        <ReactInfo fade={fadeReact}>
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
        </ReactInfo>
      </Protfolio>
      <Protfolio ref={portfolioVue}>
        <VueInfo fade={fadeVue}>
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
        </VueInfo>
        <VueLogo fade={fadeVue}>
          <img src={VueImg} alt="error" />
        </VueLogo>
      </Protfolio>
      <Protfolio ref={portfolioIII}>
        <IIILogo fade={fadeIII}>
          <img src={StaticImg} alt="error" />
        </IIILogo>
        <IIIInfo fade={fadeIII}>
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
        </IIIInfo>
      </Protfolio>
    </Home>
  );
};

export default Index;
