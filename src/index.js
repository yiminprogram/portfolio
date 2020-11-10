import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import GlobalStyle from './theme/GlobalStyle';
import Project from './Project';

render(
  <HashRouter>
    <GlobalStyle />
    <Project />
  </HashRouter>,
  document.querySelector('#root'),
);
