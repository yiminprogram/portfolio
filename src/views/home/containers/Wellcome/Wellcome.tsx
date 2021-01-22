import React from 'react';
//style
import {
  WellcomeDiv,
  WellcomeTitle,
  TitleTop,
  TitleBottom,
  ModelContainer,
} from '../../style';
//components
import Model from '../../components/WellcomeModel';

const Wellcome = () => {
  return (
    <WellcomeDiv>
      <WellcomeTitle>
        <TitleTop>歡迎來到我的</TitleTop>
        <TitleBottom>作品集</TitleBottom>
      </WellcomeTitle>
      <ModelContainer>
        <Model />
      </ModelContainer>
    </WellcomeDiv>
  );
};

export default Wellcome;
