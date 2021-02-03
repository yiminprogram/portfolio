import styled from 'styled-components';

export const Card = styled.li`
  flex: 0 1 300px;
  margin: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 10px #ddd;
  overflow: hidden;

  &:hover {
    box-shadow: 0 0 10px #aaa;
  }
`;

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
