import React, { FC } from 'react';
import { FooterDiv, GitHubLogo } from './style';
//material ui
import { GitHub } from '@material-ui/icons';

const Footer: FC = () => {
  return (
    <FooterDiv>
      <GitHubLogo
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/yiminprogram/portfolio"
      >
        <span>
          <GitHub />
        </span>
      </GitHubLogo>
    </FooterDiv>
  );
};

export default Footer;
