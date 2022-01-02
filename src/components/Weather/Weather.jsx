import React, { useEffect, useState } from 'react';
import './Weather.scss';

export const Weather = ({ filterArticle }) => {
  const [temperature, setTemperature] = useState(0);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = async() => {
    const apiKey = '7080d22fcf40837ada0e15a625bc7048';
    const city = 'Kyiv';
    const baseUrl = 'https://api.openweathermap.org/data/2.5/';
    const url = `${baseUrl}weather?q=${city}&appid=${apiKey}&units=metric`;

    await fetch(url)
      .then(response => response.json())
      .then(data => setTemperature(Math.floor(data.main.temp)))
      .catch((err) => {
        throw new Error(err);
      });
  };

  const handleInputChange = (event) => {
    const { value } = event.target;

    setInputValue(value);
  };

  useEffect(() => {
    filterArticle(inputValue);
  }, [inputValue]);

  return (
    <div className="Weather" id="weather__search">
      <div className="Weather__side">
        <h2 className="Weather__title">
          Stay always tuned with planting trends
        </h2>
        <p
          className="Weather__temp"
        >
          {`Current temperature is: ${temperature}°C`}
        </p>
        <p className="Weather__text-mob">
          Tips &amp; Tricks selected specially for you!
        </p>
        <div className="Weather__search">
          <form>
            <input
              className="Weather__input"
              type="text"
              placeholder="Search"
              onChange={handleInputChange}
              value={inputValue}
            />
          </form>
          <img
            className="Weather__ico"
            src="/images/weather-search.svg"
            alt="Search"
          />
        </div>
      </div>
      <img
        className="Weather__img"
        src="/images/weather.svg"
        alt="weather"
      />
    </div>
  );
};
