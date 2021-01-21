import React from 'react';
//style
import { OtherPortfolioDiv, OtherCard, Image, LinkBtn } from '../../style';
//image
import Vue from 'src/assets/image/logo/vue-profile.svg';
import III from 'src/assets/image/logo/static-profile.svg';

const OtherPortfolio = () => {
  return (
    <OtherPortfolioDiv>
      <OtherCard>
        <Image>
          <img src={Vue} alt="vue" />
        </Image>
        <LinkBtn color="#41b883" to="/portfolio/vue">
          前往Vue作品集 &gt;
        </LinkBtn>
      </OtherCard>
      <OtherCard>
        <Image>
          <img src={III} alt="iii" />
        </Image>
        <LinkBtn color="#dd4b25" to="/portfolio/iii">
          前往資策會結訓專案 &gt;
        </LinkBtn>
      </OtherCard>
    </OtherPortfolioDiv>
  );
};

export default OtherPortfolio;
