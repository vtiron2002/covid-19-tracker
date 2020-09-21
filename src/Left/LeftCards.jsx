import React, { useEffect, useState } from 'react';

import Card from './Card';
import { useStateValue } from '../store/StateProvider';

import { kFormatter } from '../helpers';

import { GET_CARDS_DATA, SET_MAP_CENTER, RESET_MAP } from '../store/types';

const LeftCards = () => {
  const [{ countries, country, cardsData }, dispatch] = useStateValue();

  const url =
    country === 'Worldwide'
      ? 'https://disease.sh/v3/covid-19/all'
      : `https://disease.sh/v3/covid-19/countries/${country}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: GET_CARDS_DATA, payload: data });
        if (country === 'Worldwide') return dispatch({ type: RESET_MAP });
        dispatch({
          type: SET_MAP_CENTER,
          payload: { lat: data.countryInfo.lat, lng: data.countryInfo.long },
        });
      });
  }, [country]);

  return (
    <div className='left__cards'>
      <Card
        name='cases'
        selected
        title='Coronavirus Cases'
        number={kFormatter(cardsData.todayCases)}
        total={kFormatter(cardsData.cases)}
      />
      <Card
        name='recovered'
        green
        title='Recovered'
        number={kFormatter(cardsData.todayRecovered)}
        total={kFormatter(cardsData.recovered)}
      />
      <Card
        name='deaths'
        title='Deaths'
        number={kFormatter(cardsData.todayDeaths)}
        total={kFormatter(cardsData.deaths)}
      />
    </div>
  );
};

export default LeftCards;
