import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

import humiditydark from '../Images/humidity-dark.png';
import humiditylight from '../Images/humidity-light.png';

import pressurelight from '../Images/pressure.png';
import pressuredark from '../Images/pressure.png';

import visibilitylight from '../Images/visibility-light.png';
import visibilitydark from '../Images/visibility-dark.png';  // Fixed import

import airdark from '../Images/air-dark.png';
import airlight from '../Images/air-light.png';


import sunrise from '../Images/sunrise.png';
import sunset from '../Images/sunset.png';

import windlight from '../Images/wind-light.png';

const WeatherHighlights = ( { weatherdata } ) => {
  const { theme } = useTheme();
  const [weatherInfo, setWeatherInfo] = useState({});

  const textStyle = {
    fontSize: '18px',
    fontWeight: '500',
    marginBottom: '5px'
  };

  const getWindDirection = (degree) => {
    if (degree >= 348.75 || degree < 11.25) return 'N';
    if (degree >= 11.25 && degree < 33.75) return 'NNE';
    if (degree >= 33.75 && degree < 56.25) return 'NE';
    if (degree >= 56.25 && degree < 78.75) return 'ENE';
    if (degree >= 78.75 && degree < 101.25) return 'E';
    if (degree >= 101.25 && degree < 123.75) return 'ESE';
    if (degree >= 123.75 && degree < 146.25) return 'SE';
    if (degree >= 146.25 && degree < 168.75) return 'SSE';
    if (degree >= 168.75 && degree < 191.25) return 'S';
    if (degree >= 191.25 && degree < 213.75) return 'SSW';
    if (degree >= 213.75 && degree < 236.25) return 'SW';
    if (degree >= 236.25 && degree < 258.75) return 'WSW';
    if (degree >= 258.75 && degree < 281.25) return 'W';
    if (degree >= 281.25 && degree < 303.75) return 'WNW';
    if (degree >= 303.75 && degree < 326.25) return 'NW';
    if (degree >= 326.25 && degree < 348.75) return 'NNW';
  };

  const convertUnixToTime = (unixTimestamp) => {
    const date = new Date(unixTimestamp * 1000); // Multiply by 1000 to convert from seconds to milliseconds
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
  
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes; // Adding a leading zero if minutes < 10
    
    const formattedTime = `${hours}:${minutes} ${ampm}`;
    return formattedTime;
  };
  
  

  useEffect(() => {
    console.log("meow");
    weatherdata = JSON.parse(weatherdata);
    
    if (weatherdata && weatherdata.main) {
      setWeatherInfo({
        pressure: weatherdata.main.pressure,
        humidity: weatherdata.main.humidity,
        feels_like: weatherdata.main.feels_like,
        visibility: weatherdata.visibility / 1000 ,

        speed : weatherdata.wind.speed,

        direction : getWindDirection(weatherdata.wind.deg ),

        sunrise : convertUnixToTime(weatherdata.sys.sunrise),
        sunset : convertUnixToTime(weatherdata.sys.sunset)
        
      });

      console.log(weatherdata);

      console.log( `${weatherInfo.pressure} ${weatherInfo.humidity} ${weatherInfo.visibility}`   );

    }
  }, [weatherdata]);

  return (
    <div className={`card ${theme === "light" ? "bg-light text-dark" : "bg-dark text-light"}`}>
      <div className="card-body">
        <h5 style={{ fontWeight: '600', fontSize: '22px', marginBottom: '20px' }}>Today's Highlights</h5>



        <div className='card-body'>

          <p>Sunrise and Sunset</p>


          <div className="row row-cols-2 g-3">
            
          
            <div className={`card ${theme === "light" ? "bg-light text-dark" : "bg-dark text-light"} p-3`}>
              <div className="row row-cols-2 g-3">

                <div className='col d-flex flex-column align-items-center justify-content-center' >

                  <img src= {sunrise}

                  style={ {height : "40px"} }
                   >
                  </img>

                  <p>sunrise</p>

                  <p>{weatherInfo.sunrise}</p>

                </div>

                <div className='col d-flex flex-column align-items-center justify-content-center' >

                <img src= {sunset}
                 style={ {height : "40px"} }
                 ></img>

                 <p>sunset</p>

                 <p> {  weatherInfo.sunset}</p>


                </div>


                
              </div>


            </div>


            <div className={`card ${theme === "light" ? "bg-light text-dark" : "bg-dark text-light"} p-3`}>
              <div className="row row-cols-2 g-3">

                <div className='col d-flex flex-column align-items-center justify-content-center' >

                  <img src= {windlight}

                  style={ {height : "40px"} }
                   >
                  </img>

                  <p>wind</p>

                </div>

                <div className='col d-flex flex-column align-items-center justify-content-center' >


                  <p>{weatherInfo.speed}</p>
                  <p>{weatherInfo.direction}</p>

                
                </div>


                
              </div>


            </div>

        
            


          </div>
        </div>

        

        <div className='card-body'>
          <div className="row row-cols-4 g-3">
            
            {/* Humidity Card */}
            <div className={`card ${theme === "light" ? "bg-light text-dark" : "bg-dark text-light"} p-3`}>
              <div className="d-flex align-items-center">
                <img
                  src={theme === "light" ? humiditylight : humiditydark}
                  alt="Humidity"
                  style={{ width: '30px', height: '30px', marginRight: '10px' }}
                />
                <div>
                  <p style={textStyle}>Humidity</p>
                  <p>{weatherInfo.humidity}%</p>
                </div>
              </div>
            </div>

            {/* Pressure Card */}
            <div className={`card ${theme === "light" ? "bg-light text-dark" : "bg-dark text-light"} p-3`}>
              <div className="d-flex align-items-center">
                <img
                  src={theme === "light" ? pressurelight : pressuredark}
                  alt="Pressure"
                  style={{ width: '30px', height: '30px', marginRight: '10px' }}
                />
                <div>
                  <p style={textStyle}>Pressure</p>
                  <p>{weatherInfo.pressure} hPa</p>
                </div>
              </div>
            </div>

            {/* Visibility Card */}
            <div className={`card ${theme === "light" ? "bg-light text-dark" : "bg-dark text-light"} p-3`}>
              <div className="d-flex align-items-center">
                <img
                  src={theme === "light" ? visibilitylight : visibilitydark}
                  alt="Visibility"
                  style={{ width: '30px', height: '30px', marginRight: '10px' }}
                />
                <div>
                  <p style={textStyle}>Visibility</p>
                  <p>{weatherInfo.visibility} km</p>
                </div>
              </div>
            </div>

            {/* Feels Like Card */}
            <div className={`card ${theme === "light" ? "bg-light text-dark" : "bg-dark text-light"} p-3`}>
              <div className="d-flex align-items-center">
                <img
                  src={theme === "light" ? airlight : airdark}
                  alt="Feels Like"
                  style={{ width: '30px', height: '30px', marginRight: '10px' }}
                />
                <div>
                  <p style={textStyle}>Feels Like</p>
                  <p>{Math.round(weatherInfo.feels_like)}°C</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherHighlights;


