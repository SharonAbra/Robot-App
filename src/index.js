import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import 'tachyons';


import {reducer} from './redux/reducers';
const store = createStore(reducer,applyMiddleware(logger,thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

