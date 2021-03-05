import styled, { keyframes } from 'styled-components';

const anime = keyframes`
50%{
  opacity:1;
}

`;

export const GalleryPage = styled.div`
  ${(p) => p.theme.mixin.page};
  background-color: #000;
  padding-bottom: 5rem;
`;

export const ImageList = styled.ul`
  max-width: 1200px;
  margin: 0 auto 5rem auto;
  padding: 5rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-flow: dense;
  gap: 2rem;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;

  > span {
    margin: 0 1rem;
  }

  .text {
    color: #fff;
    font-size: 1rem;
    font-weight: 700;
  }

  .logo {
    height: 100%;
    background-color: #fffa;
    padding: 1rem;

    > img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const DataLoading = styled.div`
  max-width: 1000px;
  height: 500px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const LoadingDot = styled.div`
  margin-bottom: 2rem;

  > span {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 1rem;
    background-color: #fff;
    border-radius: 50%;
    opacity: 0;
    animation: ${anime} 1s linear infinite;
  }
`;
export const LoadingText = styled.div`
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  opacity: 0;
  animation: ${anime} 1s linear infinite;
`;
