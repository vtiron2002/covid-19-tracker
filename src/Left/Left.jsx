import React from 'react';
import './Left.scss';

import LeftHeader from './LeftHeader';
import LeftCards from './LeftCards';
import Map from './Map';

const Left = () => {
  return (
    <div className='left'>
      <LeftHeader />

      <LeftCards />

      <Map />
    </div>
  );
};

export default Left;
