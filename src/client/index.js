import 'babel-polyfill';
import React from 'react';
import RenderDOM from 'react-dom';
import {Provider} from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';
import App from './components/App'

import configureStore from './store/configureStore';

const store = configureStore();

const Routing = () => (
  <BrowserRouter>
    <Route path="/" component={App}/>
  </BrowserRouter>
);

RenderDOM.render(
  <Provider store={store}>
    <Routing/>
  </Provider>,
  document.getElementById('root')
);
