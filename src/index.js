import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './App.css';
import App from './App';

const reducer = (state = {step : 0}) => {
  return state;
}

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      < App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

