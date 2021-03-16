import React from 'react';
import { Link } from 'react-router-dom';
//style
import {
  WellcomeDiv,
  WellcomeTitle,
  TitleTop,
  TitleBottom,
  ModelContainer,
  TitleBtn,
} from '../../style';
//components
import Model from '../../components/WellcomeModel';

const Wellcome = () => {
  return (
    <WellcomeDiv>
      <WellcomeTitle>
        <TitleTop>
          <h1>歡迎來到我的</h1>
        </TitleTop>
        <TitleBottom>
          <h1>作品集</h1>
        </TitleBottom>
        <TitleBtn>
          <Link to="/portfolio/react">作品集列表</Link>
        </TitleBtn>
      </WellcomeTitle>
      <ModelContainer>
        <Model />
      </ModelContainer>
    </WellcomeDiv>
  );
};

export default Wellcome;
