import React from 'react';
import ReactDOM from 'react-dom';
import 'animate.css';

import './App.css';
import App from './App';
import MyProvider from './components/context';

ReactDOM.render(
  <React.StrictMode>
    <MyProvider>
      < App />
    </MyProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

