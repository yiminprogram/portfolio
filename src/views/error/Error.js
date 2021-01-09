import React from 'react';
import styled from 'styled-components';
//image
import Error404 from '../../assets/image/error-404.svg';
import ErrorFixed from '../../assets/image/error-fixed.svg';

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 5rem 0;
`;

const Img = styled.div`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const ImgContainer = styled.div`
  flex: 0 1 600px;
  padding: 3rem;

  > img {
    width: 100%;
  }
`;

const Info = styled.div`
  text-align: center;

  > h1 {
    margin-bottom: 5rem;
    color: #c95757;
    font-size: 2rem;
    font-weight: 700;
  }

  > a {
    color: #fff;
    border: none;
    border-radius: 3px;
    font-size: 1.5rem;
    font-weight: 700;
    padding: 0.6rem 1.2rem;
    background-color: ${(p) => p.theme.colors.primary};
    text-decoration: none;
  }
`;

const Error = () => {
  return (
    <Page>
      <Img>
        <ImgContainer>
          <img src={Error404} alt="error" />
        </ImgContainer>
        <ImgContainer>
          <img src={ErrorFixed} alt="error" />
        </ImgContainer>
      </Img>
      <Info>
        <h1>Oops Something Went Wrong</h1>
        <a href="https://yiminprogram.github.io/portfolio/">Back to Home</a>
      </Info>
    </Page>
  );
};

export default Error;
