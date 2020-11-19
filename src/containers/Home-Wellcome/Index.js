import React from 'react';
import styled, { keyframes } from 'styled-components';
//components
import Model from '../../components/wellcome-model/Index';
//icon
import { Mouse } from '@material-ui/icons';

const moveMouse = keyframes`
25%{
transform:translateX(30px);
}
50%{
  transform:translateX(0px);
}
75%{
  transform:translateX(-30px);
}
100%{
  transform:translateX(0px);
}
`;

const Wellcome = styled.div`
  width: 85%;
  height: 60vh;
  margin: 0 auto;
`;

const Hover = styled.div`
  color: #666;
  text-align: center;
  > ${Mouse} {
    animation: ${moveMouse} 1s linear infinite;
  }
`;

const Index = () => {
  return (
    <Wellcome>
      <Model />
      <Hover>
        <Mouse />
      </Hover>
    </Wellcome>
  );
};

export default Index;
