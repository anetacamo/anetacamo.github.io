import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { App } from './components';
import { ScrollToTop } from './components/';
import './style.scss';

axios.defaults.baseUrl = '/';

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
