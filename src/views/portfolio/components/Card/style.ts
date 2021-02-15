import styled from 'styled-components';

export const CardList = styled.li`
  flex: 0 1 300px;
`;

export const Img = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: -2;
  filter: blur(3px);

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Card = styled.article`
  padding: 1rem;
  height: 400px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: #00000051;
    z-index: -1;
    transition: 0.5s;
  }

  &:hover::before {
    background-color: #000a;
  }

  &:hover .portfolio-link::before {
    width: 200%;
  }
  &:hover .github-link::before {
    width: 500%;
  }
  &:hover .portfolio-link::after {
    height: 800%;
  }
  &:hover .github-link::after {
    height: 800%;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid #fff;
  border-radius: 10px;
  display: flex;
  padding: 1rem;
  overflow: hidden;
`;

export const Title = styled.div`
  flex: 1;
  align-self: flex-end;
  line-height: 1.5;

  > h1 {
    color: #fff;
    font-size: 1.5rem;
    font-weight: 700;
  }
`;
export const LinkBtn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  gap: 2rem;

  > a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
    text-decoration: none;
    font-size: 1.1rem;
    color: #fff;
    border: 2px solid #fff;
    padding: 0.5rem;
    position: relative;

    > span {
      margin: 0 0.5rem;
    }

    &:hover {
      color: #333;
      background-color: #fff;
    }
  }

  .portfolio-link::before {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    left: 0;
    top: -2px;
    background-color: #fff;
    transition: 0.5s;
  }
  .portfolio-link::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 0;
    right: -2px;
    top: 0;
    background-color: #fff;
    transition: 0.5s;
  }
  .github-link::before {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    right: 0;
    bottom: -2px;
    background-color: #fff;
    transition: 0.5s;
  }
  .github-link::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 0;
    left: -2px;
    bottom: 0;
    background-color: #fff;
    transition: 0.5s;
  }
`;

//=========================================================
export const CardImg = styled.div`
  height: 250px;
  margin-bottom: 1rem;
  overflow: hidden;
`;

export const CardTitle = styled.h1`
  font-size: 1.3rem;
  font-weight: 700;
  text-align: center;
  padding: 0 1rem;
  line-height: 2;
  color: #666;
`;

export const CardInfo = styled.div`
  margin-bottom: 1rem;
  padding: 1rem 1rem 0 1rem;
  display: flex;
`;
export const CardInfoLink = styled.div`
  flex: 1;
  color: ${(p) => p.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;

  > a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(p) => p.theme.colors.primary};
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: 0.5s;

    &:hover {
      color: #fff;
      background-color: ${(p) => p.theme.colors.primary};
    }

    > span {
      margin-right: 0.5rem;
    }
  }
`;
