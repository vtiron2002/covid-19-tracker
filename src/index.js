import React, { createContext } from 'react';
import { render } from 'react-dom';

import App from './App';
import { StateProvider } from './store/StateProvider';
import reducer from './store/reducer';
import initialState from './store/initialState';

export const Context = createContext();

render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,
  document.getElementById('root'),
);
