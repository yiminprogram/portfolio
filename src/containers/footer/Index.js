import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/image/github.png';

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  padding: 1.1rem;
  color: #fff;
  background-color: ${(props) => props.theme.colors.primary};
  font-weight: 700;
`;

const GitHub = styled.a`
  display: flex;
  align-items: center;
  color: #fff;
  text-decoration: 0;
  > img {
    height: 20px;
  }
  > span {
    margin-left: 1rem;
  }
`;

const Index = () => {
  return (
    <Footer>
      <GitHub href="https://github.com/yiminprogram/portfolio">
        <img src={Logo} alt="github" />
        <span>GitHub Page</span>
      </GitHub>
    </Footer>
  );
};

export default Index;
