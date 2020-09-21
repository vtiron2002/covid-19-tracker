import React from 'react';

import { CardActionArea } from '@material-ui/core';
import { useStateValue } from '../store/StateProvider';
import { CHANGE_SELECTED_CARD } from '../store/types';

export default ({ title, number, total, className, selected, green, name }) => {
  const [{ selectedCard }, dispatch] = useStateValue();

  return (
    <div
      onClick={(e) => {
        // if (e.target.classList.includes('selected')) {
        // }
        dispatch({ type: CHANGE_SELECTED_CARD, payload: name });
      }}
      className={`card border ${name === selectedCard ? 'selected' : ''} `}
    >
      <CardActionArea>
        <div className='card__title mb-1'>{title}</div>
        <div className={`card__number mb-1 ${green ? 'green' : 'red'}`}>
          +{number}
        </div>
        <div className='card__total'>{total} Total</div>
      </CardActionArea>
    </div>
  );
};
