import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeDiv = styled.div`
  ${(props) => props.theme.mixin.page};
`;

export const WellcomeDiv = styled.div`
  margin: 0 auto 5rem auto;
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  flex-flow: row nowrap;
  background-color: #fafafa;

  @media screen and (max-width: 768px) {
    flex-flow: column nowrap;
  }
`;

export const WellcomeTitle = styled.div`
  flex: 0 1 600px;
  color: #333;
  letter-spacing: 0.5rem;
  text-indent: 0.5rem;
  font-size: 3.5rem;
  font-weight: 700;
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
    flex: unset;
  }
`;
export const TitleTop = styled.div`
  margin-bottom: 5rem;
`;
export const TitleBottom = styled.div`
  color: #1877f2;
`;
export const ModelContainer = styled.div`
  flex: 0 1 600px;
  height: 600px;

  @media screen and (max-width: 768px) {
    flex: unset;
  }
`;

export const PortfolioDiv = styled.div`
  max-width: 1300px;
  margin: 0 auto 5rem auto;
`;
export const ReactCard = styled.div`
  max-width: 650px;
  margin: 0 auto 1rem auto;
  padding: 2rem 1rem;
  text-align: center;
  background-color: #fafafa;
  border-radius: 5px;
`;

export const Image = styled.div`
  margin-bottom: 5rem;
  > img {
    width: 100%;
  }
`;

export const LinkBtn = styled(Link)`
  font-size: 1.2rem;
  color: ${(p) => p.color};
  text-decoration: none;

  &:hover {
    box-shadow: 0 2px 0 ${(p) => p.color};
  }
`;

export const OtherPortfolioDiv = styled.div`
  text-align: center;
`;

export const OtherCard = styled.div`
  display: inline-block;
  max-width: 500px;
  margin: 1rem;
  padding: 2rem 1rem;
  background-color: #fafafa;
  border-radius: 5px;
  text-align: center;

  @media screen and (max-width: 1200px) {
    max-width: 650px;
    margin: 1rem auto;
  }
`;

export const AboutDiv = styled.div`
  height: 1000px;
  background-position: bottom;
  background-size: cover;
  position: relative;
  z-index: 1;
  padding-top: 10rem;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 500px;
    left: 0;
    top: 0;
    background: linear-gradient(#fff, #ffffff00);
    z-index: -1;
  }
`;

export const AboutTitle = styled.h1`
  color: #333;
  font-size: 5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
`;

export const AboutBtnDiv = styled.div`
  text-align: center;
`;
export const AboutBtn = styled(Link)`
  color: #1866f2;
  font-size: 1.3rem;
  text-decoration: none;

  &:hover {
    box-shadow: 0 1.5px 0 #1866f2;
  }
`;

export const PortfolioTitle = styled.h1`
  text-align: center;
  font-size: 3.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 3rem;
  letter-spacing: 30px;
  text-indent: 30px;
`;
