import React, { useState } from 'react';
import { Map as LeafletMap, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.scss';
import { useStateValue } from '../store/StateProvider';
import { Circle } from 'react-leaflet';
import { addCommas } from '../helpers';
import colors from './MapNdChartColors';

const Map = () => {
  const [
    { mapCenter, mapZoom, countries, selectedCard },
    dispatch,
  ] = useStateValue();

  const tileLayerUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  const tileLayerAttribution =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

  return (
    <div className='left__map border'>
      <LeafletMap center={mapCenter} zoom={mapZoom}>
        <TileLayer url={tileLayerUrl} attribution={tileLayerAttribution} />

        {countries.map((country) => (
          <Circle
            key={country.country}
            center={[country.countryInfo.lat, country.countryInfo.long]}
            fillOpacity={0.4}
            color={colors[selectedCard].hex}
            fillColor={colors[selectedCard].hex}
            radius={
              Math.sqrt(country[selectedCard]) * colors[selectedCard].multiplier
            }
          >
            <Popup>
              <div className='popup'>
                <img className='popup__flag' src={country.countryInfo.flag} />
                <div className='popup__name'>{country.country}</div>
                <div className='popup__cases'>
                  Cases: {addCommas(country.cases)}
                </div>
                <div className='popup__recovered'>
                  Recovered: {addCommas(country.recovered)}
                </div>
                <div className='popup__deaths'>
                  Death: {addCommas(country.deaths)}
                </div>
              </div>
            </Popup>
          </Circle>
        ))}
      </LeafletMap>
    </div>
  );
};

export default Map;
