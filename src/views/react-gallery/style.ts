import styled from 'styled-components';

export const GalleryPage = styled.div`
  ${(p) => p.theme.mixin.page};
  background-color: #000;
  padding-top: 60px;
  padding-bottom: 5rem;
`;

export const ImageList = styled.ul`
  max-width: 1200px;
  margin: 0 auto 5rem auto;
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
    background-color: #fff;
    padding: 1rem;

    > img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const Result = styled.div`
  max-width: 1200px;
  font-size: 3rem;
  font-weight: 700;
  color: #fff;
  margin: 0 auto 3rem auto;
  text-transform: capitalize;
`;
