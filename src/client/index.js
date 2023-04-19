import 'babel-polyfill';
import React from "react";
import { hydrate } from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './state/reducers';
import thunk from "redux-thunk";
import App from './App';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api'
});

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
