import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import { App } from './components';
import { HashRouter } from 'react-router-dom';
import { ScrollToTop } from './components/';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
