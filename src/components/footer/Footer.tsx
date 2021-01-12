import React, { FC } from 'react';
import { FooterDiv, GitHubLogo } from './style';
import Logo from '../../assets/image/github.png';

const Footer: FC = () => {
  return (
    <FooterDiv>
      <GitHubLogo href="https://github.com/yiminprogram/portfolio">
        <img src={Logo} alt="github" />
      </GitHubLogo>
    </FooterDiv>
  );
};

export default Footer;
