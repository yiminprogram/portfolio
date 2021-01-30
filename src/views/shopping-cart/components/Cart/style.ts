import styled from 'styled-components';

//type
type isCart = {
  isCart: boolean;
};

export const CartPage = styled.div<isCart>`
  position: fixed;
  right: 0;
  top: 0;
  width: 600px;
  height: 100%;
  z-index: 2;
  overflow-y: auto;
  background-color: #fff;
  box-shadow: 0 0 100px #666;
  padding: 2rem;
  transform: ${(p) => (p.isCart ? 'translateX(0px)' : 'translateX(600px)')};
  visibility: ${(p) => (p.isCart ? 'visiable' : 'hidden')};
  transition: 0.5s;

  > h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 600px) {
    width: 100vw;
  }
`;

export const CloseCartBtn = styled.button`
  cursor: pointer;
  width: 30px;
  height: 30px;
  margin-bottom: 2rem;
  border: 0;
  border-radius: 50%;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #e0e0e0;
  }

  &:active {
    background-color: #d0d0d0;
  }
`;

export const CartList = styled.ul`
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #ddd;
`;

export const TotalPrice = styled.div`
  padding: 1rem;
  margin-bottom: 2rem;
  font-size: 1.3rem;
  font-weight: 700;

  display: flex;
  justify-content: space-between;
`;

export const Price = styled.span`
  color: #ff1e1a;
`;

export const Check = styled.button`
  cursor: pointer;
  width: 100%;
  font-size: 1.3rem;
  font-weight: 700;
  padding: 0.5rem 0;
  border: 0;
  border-radius: 15px;
  color: #fff;
  background-color: #34b776;

  &:hover {
    background-color: #278b59;
  }

  &:active {
    background-color: #22774c;
  }

  &:disabled {
    background-color: #c0c0c0;
  }
`;
