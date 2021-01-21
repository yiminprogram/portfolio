import React from 'react';
//style
import {
  WellcomeDiv,
  Title,
  TitleTop,
  TitleBottom,
  ModelContainer,
} from '../../style';
//components
import Model from '../../components/WellcomeModel';

const Wellcome = () => {
  return (
    <WellcomeDiv>
      <Title>
        <TitleTop>歡迎來到我的</TitleTop>
        <TitleBottom>作品集</TitleBottom>
      </Title>
      <ModelContainer>
        <Model />
      </ModelContainer>
    </WellcomeDiv>
  );
};

export default Wellcome;
