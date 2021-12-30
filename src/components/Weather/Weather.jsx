import React from 'react';
import './Weather.scss';

export const Weather = () => {
  const a = 12;

  // eslint-disable-next-line no-console
  console.log(a);

  return (
    <div className="weather">
      <div className="weather__side">
        <h2 className="weather__title">
          Stay always tuned with planting trends
        </h2>
        <p className="weather__temp">Current temperature is: 24°C</p>
        <div className="weather__search" />
      </div>
      <img
        className="weather__img"
        src="/images/weather.svg"
        alt="weather"
      />
    </div>
  );
};
