import React from 'react';

const CurrentWeather = ({ data }) => {
  if (!data) return null;

  const { main, weather, name, sys } = data;
  const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  const capitalizeWords = (str) => str.replace(/\b\w/g, l => l.toUpperCase());

  return (
    <div className="current-weather">
      <h2>Current Weather in {name}, {sys.country}</h2>
      <img src={iconUrl} alt={weather[0].description} />
      <p>Temperature: {Math.round(main.temp)}°C</p>
      <p>Feels Like: {Math.round(main.feels_like)}°C</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Weather: {capitalizeWords(weather[0].description)}</p>
    </div>
  );
};

export default CurrentWeather;