import styled from 'styled-components';

type TIndex = {
  index: number;
};

export const GalleryPage = styled.div`
  ${(p) => p.theme.mixin.page};
  overflow: hidden;
  background-color: #222;
`;

export const GalleryDiv = styled.div`
  min-height: inherit;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #000000aa;
    z-index: -1;
  }
`;

export const Title = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;

  h1:nth-child(2n) {
    font-size: 5rem;
    font-weight: 700;
    color: #fff;
    margin-left: 5rem;
  }

  h1:nth-of-type(1) {
    background: linear-gradient(transparent, #fff6);
  }
  h1:nth-of-type(3) {
    background: linear-gradient(#fff6, transparent);
  }

  h1:nth-child(2n-1) {
    font-size: 3rem;
    font-weight: 700;
    color: #fff;
    margin-left: 5rem;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
//==========================================
export const ImageCard = styled.div`
  flex: 2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-flow: column nowrap;
  overflow: hidden;
`;

export const CardWrapper = styled.div<TIndex>`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 6rem;
  transform: ${(p) => `translateX(${p.index}px)`};
  transition: 0.5s;

  /* & :nth-child(${(p) =>
    p.index}) {
    flex: 0 0 350px;
    height: 450px;
  } */
`;

export const Card = styled.div`
  flex: 0 0 300px;
  height: 400px;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  transition: 0.5s;
`;

export const PageButton = styled.div`
  width: 100%;
  height: 100px;
  margin-bottom: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;

  > span {
    display: inline-block;
    height: 35px;
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    display: inline-flex;
    align-items: center;
  }

  > button {
    cursor: pointer;
    color: #fff;
    border: none;
    background-color: #fff3;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    margin: 0 1.5rem;

    &:hover {
      background-color: #fff6;
    }
  }
`;
