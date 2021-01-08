import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { reducer, initialState } from './state/reducer';
import StateProvider from './state/StateProvider';

ReactDOM.render(
  <StateProvider reducer={reducer} initialState={initialState}>
    <App />
  </StateProvider>,
  document.getElementById('root')
);