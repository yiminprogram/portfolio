import styled, { css } from 'styled-components';
//css
import {
  Portfolio as cssPortfolio,
  Image as cssImage,
  Info as cssInfo,
  InfoTitle as cssInfoTitle,
  InfoContent as cssInfoContent,
  InfoLink as cssInfoLink,
  fadeIn,
  rightImgFadein,
} from '../../style';

type THover = {
  hover: boolean;
};

export const Portfolio = styled.div`
  ${cssPortfolio}
`;
export const Image = styled.div<THover>`
  ${cssImage};
  visibility: hidden;

  ${({ hover }) =>
    hover &&
    css`
      animation: ${rightImgFadein} 1s linear;
      animation-fill-mode: forwards;
    `}
`;

export const Info = styled.div`
  ${cssInfo};
`;

export const InfoTitle = styled.div<THover>`
  ${cssInfoTitle};
  visibility: hidden;
  > h1 {
    ${({ hover }) =>
      hover &&
      css`
        animation: ${fadeIn} 0.5s linear;
        animation-fill-mode: forwards;
      `}
  }
`;
export const InfoContent = styled.div<THover>`
  ${cssInfoContent};
  visibility: hidden;
  > p {
    ${({ hover }) =>
      hover &&
      css`
        animation: ${fadeIn} 0.5s linear;
        animation-fill-mode: forwards;
        animation-delay: 0.25s;
      `}
  }
`;
export const InfoLink = styled.div<THover>`
  ${cssInfoLink};
  visibility: hidden;
  > a {
    ${({ hover }) =>
      hover &&
      css`
        animation: ${fadeIn} 0.5s linear;
        animation-fill-mode: forwards;
        animation-delay: 0.5s;
      `}
  }
`;
