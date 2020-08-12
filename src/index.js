import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './sass/global.scss';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.querySelector('#root')
);
