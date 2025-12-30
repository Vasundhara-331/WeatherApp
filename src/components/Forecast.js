import React from 'react';

const Forecast = ({ data }) => {
  if (!data || !data.list) return null;

  // Group by day (forecast is 3-hourly, so take every 8th for daily approx)
  const dailyForecast = data.list.filter((_, index) => index % 8 === 0).slice(0, 5);

  const capitalizeWords = (str) => str.replace(/\b\w/g, l => l.toUpperCase());

  return (
    <div className="forecast">
      <h2>5-Day Forecast</h2>
      <div className="forecast-grid">
        {dailyForecast.map((item, index) => {
          const date = new Date(item.dt * 1000).toLocaleDateString();
          const iconUrl = `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
          return (
            <div key={index} className="forecast-item">
              <p>{date}</p>
              <img src={iconUrl} alt={item.weather[0].description} />
              <p>Temp: {Math.round(item.main.temp)}°C</p>
              <p>{capitalizeWords(item.weather[0].description)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Forecast;