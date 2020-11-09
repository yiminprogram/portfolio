import React from 'react';
import styled from 'styled-components';
//image
import ShoppingCart from '../../assets/image/screenshot/vue-shopping-cart.jpg';
//functions
import { ScrollTop } from '../../functions/Index';
//material ui

const VueShoppingCart = styled.div`
  ${(p) => p.theme.mixin.page};
`;

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  padding: 2rem 0;

  > h1 {
    margin-bottom: 2rem;
    color: ${(p) => p.theme.colors.primary};
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
  }
`;

const Info = styled.div`
  text-align: center;
  > ul {
    list-style: outside;
    > li {
      color: #555;
      font-size: 1.3rem;
      font-weight: 700;
      margin-bottom: 2rem;
    }
  }
`;

const Website = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  > a {
    display: block;
    flex: 0 1 500px;
    margin: 1rem auto;
    text-align: center;
    color: ${(p) => p.theme.colors.primary};
    text-decoration: none;
    > figure {
      > img {
        margin-bottom: 1rem;
        box-shadow: 0 0 10px #ccc;
        border-radius: 10px;
        width: 100%;
      }
      > figcaption {
        font-size: 1.1rem;
      }
    }

    &:hover img {
      box-shadow: 0 0 15px #aaa;
    }
  }
`;

const Index = () => {
  ScrollTop();
  return (
    <VueShoppingCart>
      <Container>
        <h1>Vue購物車</h1>
        <Info>
          <ul>
            <li>vue cli 2</li>
            <li>vue router</li>
            <li>vuex</li>
          </ul>
        </Info>
        <Website>
          <a href="https://yiminprogram.github.io/vue-shopping-cart/#/">
            <figure>
              <img src={ShoppingCart} alt="error" />
              <figcaption>購物車</figcaption>
            </figure>
          </a>
        </Website>
      </Container>
    </VueShoppingCart>
  );
};

export default Index;
