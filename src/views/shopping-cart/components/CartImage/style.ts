import styled from 'styled-components';

type TChecked = {
  isChecked: boolean;
};

export const CartSvg = styled.svg<TChecked>`
  #product-1 {
    transition: 1s ease-out;
    transform: ${(p) =>
      p.isChecked ? 'translate(0,0)' : 'translate(30px, -500px)'};
  }
  #product-2 {
    transition: 1s ease-out;
    transform: ${(p) =>
      p.isChecked ? 'translate(0,0)' : 'translate(0px, -500px)'};
  }
  #product-3 {
    transition: 1s ease-out;
    transform: ${(p) =>
      p.isChecked ? 'translate(0,0)' : 'translate(-50px, -500px)'};
  }
`;
