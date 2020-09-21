import React, { useState } from 'react';
import './Right.scss';

import { Card, CardContent, Typography } from '@material-ui/core';
import { useStateValue } from '../store/StateProvider';

import { addCommas } from '../helpers';
import LineGraph from './LineGraph';

const Right = () => {
  const [{ countries, country, selectedCard }, dispatch] = useStateValue();

  const sorted = [...countries].sort((a, b) => a.cases < b.cases);

  return (
    <div className='right border'>
      <h3 className='right__title mb-1'>Live Cases by Country</h3>

      <ul className='countries mb-2'>
        {sorted.map(({ country, cases }) => (
          <li key={country} className='country'>
            {country} <strong>{addCommas(cases)}</strong>
          </li>
        ))}
      </ul>

      <h3 className='right__title mb-1'>
        Total {[...selectedCard].map((t, i) => (i === 0 ? t.toUpperCase() : t))} from
        the last 180 days
      </h3>

      <LineGraph />
    </div>
  );
};

export default Right;
