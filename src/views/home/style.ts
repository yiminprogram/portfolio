import styled, { keyframes, css } from 'styled-components';

export const fadeIn = keyframes`
from{
  transform:translateY(100px);
  opacity:0;
}
to{
  transform:translateY(0)
  opacity:1;
  visibility:visible;
}
`;

export const leftImgFadein = keyframes`
from{
  opacity:0;
  transform:translateX(-100px);
}
to{
  opacity:1;
  visibility:visible;
  transform:translateX(0);
}
`;

export const rightImgFadein = keyframes`
from{
  opacity:0;
  transform:translateX(100px);
}
to{
  opacity:1;
  visibility:visible;
  transform:translateX(0);
}
`;

export const HomeDiv = styled.div`
  ${(props) => props.theme.mixin.page};
`;

export const WellcomeDiv = styled.div`
  margin: 0 auto 5rem auto;
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  flex-flow: row nowrap;

  @media screen and (max-width: 768px) {
    flex-flow: column nowrap;
  }
`;

export const WellcomeTitle = styled.div`
  flex: 0 1 600px;
  padding-left: 5rem;
  text-indent: 5px;
  font-size: 3.5rem;
  font-weight: 700;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 1rem;
    margin-bottom: 2rem;
    flex: unset;
    text-align: center;
  }
`;
export const TitleTop = styled.div`
  margin-bottom: 2rem;
  overflow: hidden;
  > h1 {
    animation: ${fadeIn} 0.5s linear;
  }
`;

export const TitleBottom = styled.div`
  margin-bottom: 6rem;
  overflow: hidden;
  > h1 {
    color: ${(p) => p.theme.colors.primary};
    visibility: hidden;
    animation: ${fadeIn} 0.5s linear;
    animation-delay: 0.25s;
    animation-fill-mode: forwards;
  }
`;

export const TitleBtn = styled.div`
  overflow: hidden;
  > a {
    display: inline-block;
    font-size: 1.3rem;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    background-color: ${(p) => p.theme.colors.primary};
    color: #ffffff;
    padding: 1rem 1.5rem;
    visibility: hidden;
    animation: ${fadeIn} 0.5s linear;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
    text-decoration: none;

    &:hover {
      background-color: ${(p) => p.theme.colors.hover};
    }
  }
`;

export const ModelContainer = styled.div`
  flex: 0 1 600px;
  height: 600px;

  @media screen and (max-width: 768px) {
    flex: unset;
  }
`;

export const PortfolioDiv = styled.div`
  max-width: 1000px;
  margin: 0 auto 5rem auto;
`;

export const Portfolio = css`
  display: flex;
  justify-content: center;
  margin-bottom: 10rem;

  @media screen and (max-width: 768px) {
    flex-flow: column nowrap;
  }
`;

export const Image = css`
  flex: 0 1 500px;
  padding: 2rem;

  > img {
    width: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    flex: unset;
  }
`;

export const Info = css`
  flex: 0 1 500px;
  padding: 3rem;

  @media screen and (max-width: 768px) {
    flex: unset;
  }
`;

export const InfoTitle = css`
  overflow: hidden;

  > h1 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
`;

export const InfoContent = css`
  overflow: hidden;
  > p {
    color: #666;
    line-height: 2;
    margin-bottom: 1rem;
  }
`;

export const InfoLink = css`
  overflow: hidden;
  > a {
    font-weight: 700;
    display: inline-block;
    padding: 1rem;
    color: #ffffff;
    background-color: ${(p) => p.theme.colors.primary};
    text-decoration: none;
    border-radius: 5px;

    &:hover {
      background-color: ${(p) => p.theme.colors.hover};
    }
  }
`;
