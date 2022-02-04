// Name: Amritpal Singh
// File Name: index.js
// Date: 31 January 2022
// Descrition: This file adds the code of react to HTML file and also provide access of redux store to whole application





import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {store} from './redux/store/store'
import {Provider} from 'react-redux'

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={baseUrl}>
      <App />
    </BrowserRouter>
  </Provider>,
  rootElement);

registerServiceWorker();
