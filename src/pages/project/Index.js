import React from 'react';
import styled from 'styled-components';
//image
import Home from '../../assets/image/screenshot/space-home.png';
//functions
import { ScrollTop } from '../../functions/Index';
//material ui

const Project = styled.div`
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
    display: inline-block;
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

const Index = ({ location }) => {
  const { project, information, link } = location.query;
  ScrollTop();
  return (
    <Project>
      <Container>
        <h1>{project}</h1>
        <Info>
          <ul>
            {information.map((ele) => (
              <li key={ele.id}>{ele.info}</li>
            ))}
          </ul>
        </Info>
        <Website>
          {link.map((ele) => (
            <a key={ele.id} href={ele.link}>
              <figure>
                <img src={ele.image} alt="error" />
                <figcaption>{ele.name}</figcaption>
              </figure>
            </a>
          ))}
        </Website>
      </Container>
    </Project>
  );
};

export default Index;
