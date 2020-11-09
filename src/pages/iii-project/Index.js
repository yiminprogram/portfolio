import React from 'react';
import styled from 'styled-components';
//image
import Home from '../../assets/image/screenshot/space-home.png';
import Search from '../../assets/image/screenshot/space-search.jpg';
//functions
import { ScrollTop } from '../../functions/Index';
//material ui

const IIIProject = styled.div`
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
    <IIIProject>
      <Container>
        <h1>資策會結訓專案模板</h1>
        <Info>
          <ul>
            <li>專案模板(未連接資料庫)</li>
            <li>HTML,CSS,jQuery,Bootstrap</li>
          </ul>
        </Info>
        <Website>
          <a href="https://yiminprogram.github.io/ProjectWebSite/src/Homepage.html">
            <figure>
              <img src={Home} alt="error" />
              <figcaption>首頁</figcaption>
            </figure>
          </a>
          <a href="https://yiminprogram.github.io/ProjectWebSite/src/SpaceSearch.html">
            <figure>
              <img src={Search} alt="error" />
              <figcaption>搜尋頁面</figcaption>
            </figure>
          </a>
        </Website>
      </Container>
    </IIIProject>
  );
};

export default Index;
