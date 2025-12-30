import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import { fetchCurrentWeather, fetchForecast } from './utils/api';

function App() {
  const [city, setCity] = useState('London'); // Default city
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const weatherData = await fetchCurrentWeather(city);
        const forecastData = await fetchForecast(city);
        setCurrentWeather(weatherData);
        setForecast(forecastData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setCurrentWeather(null);
        setForecast(null);
      }
    };
    if (city) loadData();
  }, [city]);

  return (
    <div className="app">
      <h1>Weather App</h1>
      <SearchBar onSearch={setCity} />
      {error && <p className="error">{error}</p>}
      <CurrentWeather data={currentWeather} />
      <Forecast data={forecast} />
    </div>
  );
}

export default App;