import React, { useEffect } from 'react';
import './App.scss';

import Left from './Left/Left';
import Right from './Right/RIght';

import { useStateValue } from './store/StateProvider';
import { SET_COUNTRIES } from './store/types';

const App = () => {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/countries/')
      .then((res) => res.json())
      .then((data) => dispatch({ type: SET_COUNTRIES, payload: data }));
  }, []);

  return (
    <div className='container'>
      <Left />
      <Right />
    </div>
  );
};

export default App;
