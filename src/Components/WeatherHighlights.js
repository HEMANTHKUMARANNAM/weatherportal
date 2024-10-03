import React from 'react';
import { useTheme } from '../context/ThemeContext';

import humiditydark from '../Images/humidity-dark.png';
import humiditylight from '../Images/humidity-light.png';

import pressurelight from '../Images/pressure-light.png';
import pressuredark from '../Images/pressure-dark.png';

import visibilitylight from '../Images/visibility-light.png';
import visibilitydark from '../Images/visibility-light.png';  // Fixed import

import airdark from '../Images/air-dark.png';
import airlight from '../Images/air-light.png';


const WeatherHighlights = () => {
  const { theme } = useTheme();

  const textStyle = {
    fontSize: '18px',
    fontWeight: '500',
    marginBottom: '5px'
  };

  return (
    <div className={`card ${theme === "light" ? "bg-light text-dark" : "bg-dark text-light"}`}>
      <div className="card-body">
        <h5 style={{ fontWeight: '600', fontSize: '22px', marginBottom: '20px' }}>Today's Highlights</h5>

        <div className="col mb-4">
          <div className={`card ${theme === "light" ? "bg-light text-dark" : "bg-dark text-light"} p-3`}>
            <p style={textStyle}>Sunrise & Sunset</p>
            <div>Sunrise: 6:55 AM</div>
            <div>Sunset: 6:12 PM</div>
          
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
                  style={{ width: '50px', height: '50px', marginRight: '10px' }}
                />
                <div>
                  <p style={textStyle}>Humidity</p>
                  <p>45%</p>
                </div>
              </div>
            </div>

            {/* Pressure Card */}
            <div className={`card ${theme === "light" ? "bg-light text-dark" : "bg-dark text-light"} p-3`}>
              <div className="d-flex align-items-center">
                <img
                  src={theme === "light" ? pressurelight : pressuredark}
                  alt="Pressure"
                  style={{ width: '50px', height: '50px', marginRight: '10px' }}
                />
                <div>
                  <p style={textStyle}>Pressure</p>
                  <p>1010 hPa</p>
                </div>
              </div>
            </div>

            {/* Visibility Card */}
            <div className={`card ${theme === "light" ? "bg-light text-dark" : "bg-dark text-light"} p-3`}>
              <div className="d-flex align-items-center">
                <img
                  src={theme === "light" ? visibilitylight : visibilitydark}
                  alt="Visibility"
                  style={{ width: '50px', height: '50px', marginRight: '10px' }}
                />
                <div>
                  <p style={textStyle}>Visibility</p>
                  <p>10 km</p>
                </div>
              </div>
            </div>

            {/* Feels Like Card */}
            <div className={`card ${theme === "light" ? "bg-light text-dark" : "bg-dark text-light"} p-3`}>
              <div className="d-flex align-items-center">
                <img
                  src={theme === "light" ? airlight : airdark}
                  alt="Feels Like"
                  style={{ width: '50px', height: '50px', marginRight: '10px' }}
                />
                <div>
                  <p style={textStyle}>Feels Like</p>
                  <p>17°C</p>
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
