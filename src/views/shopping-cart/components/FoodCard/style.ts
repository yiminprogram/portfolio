import styled from 'styled-components';

//type
type TFavorite = {
  favorite: boolean;
};

type TIsInCart = {
  isInCart: boolean;
};

export const CardList = styled.li`
  flex: 0 1 300px;
  border: 1px solid #ddd;
  border-radius: 15px;
  margin: 1rem;
  padding: 1rem 2rem 0 2rem;

  &:hover {
    box-shadow: 0 0 15px #ddd;
  }
`;

export const CardInfo = styled.article`
  text-align: center;
`;

export const Like = styled.div<TFavorite>`
  text-align: right;

  > button {
    cursor: pointer;
    border: 0;
    padding: 0;
    background-color: transparent;
    color: ${(p) => (p.favorite ? '#ff1e1a' : '#c0c0c0')};

    &:hover {
      color: #ff9e9d;
    }

    &:active {
      color: #ff1e1a;
    }
  }
`;

export const CardImg = styled.div`
  height: 300px;
  clip-path: circle();
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const PriceAddGroup = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
`;

export const Price = styled.span`
  font-size: 1.3rem;
  font-weight: 700;
  color: #34b776;
`;

export const Add = styled.button<TIsInCart>`
  cursor: pointer;
  border: 0;
  padding: 0;
  background-color: transparent;
  color: #34b776;
  visibility: ${(p) => (p.isInCart ? 'hidden' : 'visiable')};

  &:hover {
    color: #278b59;
  }

  &:active {
    color: #22774c;
  }
`;
