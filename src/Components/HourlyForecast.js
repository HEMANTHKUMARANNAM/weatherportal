import React from 'react';
import { useTheme } from '../context/ThemeContext';
import sundark from '../Images/sun-dark.png';
import sunlight from '../Images/sun-light.png'; // Assuming you have this for the light theme

const HourlyForecast = () => {
  const { theme } = useTheme();

  const icon = theme === 'light' ? sunlight : sundark; // Choose the appropriate icon based on theme

  return (
    <div className="row">
      <div className="col">
        <div className={`card ${theme === "light" ? "bg-light text-dark" : "bg-dark text-light"}`}>
          <div className="card-body">
            <h5>Today at</h5>
            <div className="d-flex justify-content-around">
              
              {/* Each block follows the same format */}
              <div className="text-center">
                <p>1 PM</p>
                <img
                  src={icon}
                  alt="weather-icon"
                  style={{ height: "40px", paddingBottom: "10px" }}
                />
                <p>18°C</p>
              </div>

              <div className="text-center">
                <p>4 PM</p>
                <img
                  src={icon}
                  alt="weather-icon"
                  style={{ height: "40px", paddingBottom: "10px" }}
                />
                <p>16°C</p>
              </div>

              <div className="text-center">
                <p>7 PM</p>
                <img
                  src={icon}
                  alt="weather-icon"
                  style={{ height: "40px", paddingBottom: "10px" }}
                />
                <p>14°C</p>
              </div>

              <div className="text-center">
                <p>10 PM</p>
                <img
                  src={icon}
                  alt="weather-icon"
                  style={{ height: "40px", paddingBottom: "10px" }}
                />
                <p>12°C</p>
              </div>

              <div className="text-center">
                <p>1 AM</p>
                <img
                  src={icon}
                  alt="weather-icon"
                  style={{ height: "40px", paddingBottom: "10px" }}
                />
                <p>11°C</p>
              </div>

              <div className="text-center">
                <p>4 AM</p>
                <img
                  src={icon}
                  alt="weather-icon"
                  style={{ height: "40px", paddingBottom: "10px" }}
                />
                <p>8°C</p>
              </div>

              <div className="text-center">
                <p>7 AM</p>
                <img
                  src={icon}
                  alt="weather-icon"
                  style={{ height: "40px", paddingBottom: "10px" }}
                />
                <p>8°C</p>
              </div>

              <div className="text-center">
                <p>10 AM</p>
                <img
                  src={icon}
                  alt="weather-icon"
                  style={{ height: "40px", paddingBottom: "10px" }}
                />
                <p>10°C</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HourlyForecast;
