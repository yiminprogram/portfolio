import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './theme/GlobalStyle';
import Project from './Project';

render(
  <BrowserRouter>
    <GlobalStyle />
    <Project />
  </BrowserRouter>,
  document.querySelector('#root'),
);
