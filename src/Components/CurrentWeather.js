import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

import sunlight from '../Images/sun-light.png';
import sundark from '../Images/sun-dark.png';

const CurrentWeather = ( {weatherdata} ) => {
  const { theme } = useTheme();

  const [weatherInfo, setWeatherInfo] = useState({});


  

  useEffect(() => {
    console.log("meow");
    weatherdata = JSON.parse(weatherdata);
    
    if (weatherdata ) {

      console.log(weatherdata.weather[0].description);

      setWeatherInfo({
        
        temperature : weatherdata.main.temp,
        description : weatherdata.weather[0].description,
        name : weatherdata.name,
        icon : weatherdata.weather[0].icon
        
      });
    }


  }, [weatherdata]);

  

  return (
    <div className="col-12">
      <div 
        className={`card ${theme === "light" ? "bg-light text-dark" : "bg-dark text-light"}`}
        style={{ color: theme === "light" ? "#333333" : "#202124" }}
      >
        <div className="d-flex justify-content-between">
          <div className="card-body">
            <p>Now</p>
            {weatherInfo.temperature ? ( 
              <>
                <h2>{weatherInfo.temperature} °C</h2>
                <p>{weatherInfo.description || "Weather description not available"}</p>
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
              src= {  `https://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png` } 
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
        <p>{weatherInfo.name}</p>
      </div>
    </div>
  );
};

export default CurrentWeather;
