const API_KEY = '6a6ed4a5b1389c3010c0a995eefc7fa4'; // Replace with your actual key
const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const GEO_URL = 'https://api.openweathermap.org/geo/1.0';

export const fetchCurrentWeather = async (city) => {
  const response = await fetch(`${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`);
  if (!response.ok) throw new Error('City not found');
  return response.json();
};

export const fetchForecast = async (city) => {
  const response = await fetch(`${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`);
  if (!response.ok) throw new Error('Forecast not available');
  return response.json();
};

export const fetchCitySuggestions = async (query) => {
  if (!query.trim()) return [];
  const response = await fetch(`${GEO_URL}/direct?q=${query}&limit=5&appid=${API_KEY}`);
  if (!response.ok) return [];
  const data = await response.json();
  return data.map(city => `${city.name}, ${city.country}`);
};