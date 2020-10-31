import React from 'react';
import styled from 'styled-components';
import portfolio from '../../assets/image/portfolio.svg';

const Wellcome = styled.div`
  width: 85%;
  margin: 0 auto;
`;

const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageBox = styled.div`
  flex: 0 1 400px;

  > img {
    width: 100%;
  }
`;

const Title = styled.h1`
  color: #666;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 2rem 0;
  text-align: center;
  line-height: 1.5;
`;

const Index = () => {
  return (
    <Wellcome>
      <Image>
        <ImageBox>
          <img src={portfolio} alt="wellcome" />
        </ImageBox>
      </Image>
      <Title>Wellcome to my portfolio website</Title>
    </Wellcome>
  );
};

export default Index;
