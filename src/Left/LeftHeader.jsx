import React, { useState, useEffect } from 'react';
import './SelectBox.scss';

import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import { useStateValue } from '../store/StateProvider';
import { CHANGE_COUNTRY, SET_MAP_CENTER } from '../store/types';

const LeftHeader = () => {
  const [{ countries, country }, dispatch] = useStateValue();

  return (
    <div className='left__header row space-between'>
      <h1>COVID-19 TRACKER</h1>
      <select
        className='select-css'
        value={country}
        onChange={(e) => {
          dispatch({ type: CHANGE_COUNTRY, payload: e.target.value });
        }}
      >
        <option>Worldwide</option>
        {countries.map(({ country }, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LeftHeader;
