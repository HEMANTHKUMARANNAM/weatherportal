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
  const temperature = weatherData?.main?.temp; // Example of accessing temperature
  const weatherDescription = weatherData?.weather[0]?.description; // Example of accessing weather description

  return (
    <div className="col-12">
      <div className={`card ${theme === "light" ? "bg-light text-dark" : "bg-dark text-light"}`}
           style={{ color: theme === "light" ? "#333333" : "#202124" }}>
        <div className="d-flex justify-content-between">
          <div className="card-body">
            {temperature ? ( // Check if temperature is available
              <>
                <h2> {temperature} °C </h2>
                <p>{weatherDescription || "Weather data not available"}</p>
                <div>
                  <p>Wednesday, 1 Mar</p>
                  <p>Washington, US</p>
                </div>
              </>
            ) : (
              <p>Loading weather data...</p> // Fallback while data is loading
            )}
          </div>

          <div className="card-body"
               style={{ display: 'flex', justifyContent: 'center', justifyItems: 'center' }}>
            <img src={theme === "light" ? sunlight : sundark}
                 style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
          </div>
        </div>
      </div>

      <div className={`card ${theme === "light" ? "bg-light text-dark" : "bg-dark text-light"}`}>
        {/* Additional content can go here */}
      </div>
    </div>
  );
};

export default CurrentWeather;
