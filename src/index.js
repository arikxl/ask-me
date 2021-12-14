import React, {setState} from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';

import './App.css';
import App from './App';

// const reducer = (state = {step : 0}) => {
//   return state;
// }

// export const handleSteps = (value) => {
//   const state = reducer().step;
//   console.log('state:', state)
//   console.log('value:', value)
//   setState({state: value})
// }

// const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store} handleSteps={handleSteps}> */}
      < App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

