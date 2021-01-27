import styled from 'styled-components';

export const CardList = styled.li`
  margin-bottom: 1rem;
`;

export const Card = styled.article`
  padding: 1rem 0 1rem 2rem;
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 15px;
`;

export const CardInfo = styled.div`
  flex: 2;
  padding: 1rem 0;

  > h2 {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  > h3 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
`;

export const CardImg = styled.div`
  flex: 1;

  > img {
    width: 100%;
    clip-path: circle();
  }
`;

export const Price = styled.div`
  color: #34b776;
  font-size: 1.1rem;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;

  > button {
    cursor: pointer;
    width: 25px;
    height: 25px;
    color: #fff;
    background-color: #34b776;
    font-size: 1.1rem;
    border: 0;
    border-radius: 50%;
    margin: 0 1rem;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: #278b59;
    }

    &:active {
      background-color: #22774c;
    }
  }
`;

export const DeleteBtn = styled.button`
  cursor: pointer;
  color: #ff1e1a;
  background-color: transparent;
  border: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: #ff9e9d;
  }

  &:active {
    color: #ff1e1a;
  }
`;
