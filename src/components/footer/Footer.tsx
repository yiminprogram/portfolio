import React from 'react';
import { FooterDiv, GitHubLogo } from './style';
import Logo from '../../assets/image/github.png';

const Footer = () => {
  return (
    <FooterDiv>
      <GitHubLogo href="https://github.com/yiminprogram/portfolio">
        <img src={Logo} alt="github" />
        <span>GitHub Page</span>
      </GitHubLogo>
    </FooterDiv>
  );
};

export default Footer;
