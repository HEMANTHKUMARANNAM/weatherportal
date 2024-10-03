import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

import sunlight from '../Images/sun-light.png';
import sundark from '../Images/sun-dark.png';

const CurrentWeather = () => {
  const { theme } = useTheme();
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Retrieve and parse weather data from local storage
    const storedData = localStorage.getItem('weatherdata');
    if (storedData) {
      setWeatherData(JSON.parse(storedData));
    }
  }, []);

  // Optional chaining to avoid errors if weatherData is null
  const temperature = weatherData?.main?.temp; // Access temperature
  const weatherDescription = weatherData?.weather?.[0]?.description; // Access weather description

  return (
    <div className="col-12">
      <div 
        className={`card ${theme === "light" ? "bg-light text-dark" : "bg-dark text-light"}`}
        style={{ color: theme === "light" ? "#333333" : "#202124" }}
      >
        <div className="d-flex justify-content-between">
          <div className="card-body">
            <p>Now</p>
            {temperature ? ( 
              <>
                <h2>{temperature} °C</h2>
                <p>{weatherDescription || "Weather description not available"}</p>
                <div>
                  <p>Wednesday, 1 Mar</p>
                </div>
              </>
            ) : (
              <p>Loading weather data...</p>
            )}
          </div>

          <div 
            className="card-body"
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '4.5vh' }}
          >
            <img 
              src={theme === "light" ? sunlight : sundark} 
              alt={theme === "light" ? "Sunlight" : "Sun in Dark Mode"} 
              style={{ width: '100px', height: '100px', objectFit: 'cover' }} 
            />
          </div>
        </div>
      </div>

      <div 
        className={`card ${theme === "light" ? "bg-light text-dark" : "bg-dark text-light"}`} 
        style={{ textAlign: 'center' }}
      >
        <p>Washington, US</p>
      </div>
    </div>
  );
};

export default CurrentWeather;
