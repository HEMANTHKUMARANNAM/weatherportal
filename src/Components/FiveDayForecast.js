import React from 'react';
import { useTheme } from '../context/ThemeContext';

import sundark from '../Images/sun-dark.png';
import sunlight from '../Images/sun-light.png'; // Assuming you have this for the light theme

const FiveDayForecast = () => {
  const { theme } = useTheme();

  const icon = theme === 'light' ? sunlight : sundark; // Dynamically set icon based on theme

  // Example forecast data for five days
  const forecastData = [
    { date: '2 Mar', temp: '10°C' },
    { date: '3 Mar', temp: '4°C' },
    { date: '4 Mar', temp: '0°C' },
    { date: '5 Mar', temp: '2°C' },
    { date: '6 Mar', temp: '7°C' },
  ];

  return (
    <div className="col-12">
      <div className={`card ${theme === "light" ? "bg-light text-dark" : "bg-dark text-light"}`}>
        <div className="card-body">
          <h5 className="card-title text-center mb-4">5 Days Forecast</h5>
          <div className="d-flex flex-column align-items-center">

            {/* Forecast rows */}
            {forecastData.map((day, index) => (
              <div key={index} className="row row-cols-3 align-items-center py-2" style={{ width: '100%', borderBottom: index < forecastData.length - 1 ? '1px solid #ccc' : 'none' }}>
                <div className="col text-center">
                  <img
                    src={icon}
                    alt="weather-icon"
                    style={{ height: '40px' }}
                  />
                </div>
                <div className="col text-center">{day.date}</div>
                <div className="col text-center">{day.temp}</div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default FiveDayForecast;
