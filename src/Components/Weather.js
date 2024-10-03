import React from 'react';
import WeatherHeader from './WeatherHeader';
import CurrentWeather from './CurrentWeather';
import WeatherHighlights from './WeatherHighlights';
import FiveDayForecast from './FiveDayForecast';
import HourlyForecast from './HourlyForecast';

import '../Components/weatherstyle.css'

const Weather = () => {
  return (
    <div className="container my-5">
      {/* <WeatherHeader /> */}

      <div className="row">

      <div className='col'  style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}    >

      <CurrentWeather />

      <FiveDayForecast />

      </div>


      <div className='col' >

      <WeatherHighlights />

      <HourlyForecast />

      </div>


      
        
        
      </div>
      
      
    </div>
  );
};

export default Weather;
