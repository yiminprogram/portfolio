import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import GlobalStyle from './theme/GlobalStyle';
import Project from './Project';

render(
  <StrictMode>
    <HashRouter>
      <GlobalStyle />
      <Project />
    </HashRouter>
  </StrictMode>,
  document.querySelector('#root'),
);
