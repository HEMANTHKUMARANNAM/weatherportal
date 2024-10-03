import React from 'react';
import { useTheme } from '../context/ThemeContext';


const HourlyForecast = () => {

    const { theme } = useTheme();
  return (
    <div className="row text-light mt-4">
      <div className="col">
        <div className= {`card ${theme === "light" ? "bg-light text-dark" : "bg-dark text-light"}`} >
          <div className="card-body">
            <h5>Today at</h5>
            <div className="d-flex justify-content-around">
              <div className="text-center">
                <p>1 PM</p>
                <p>18°C</p>
              </div>
              <div className="text-center">
                <p>4 PM</p>
                <p>16°C</p>
              </div>
              <div className="text-center">
                <p>7 PM</p>
                <p>14°C</p>
              </div>
              <div className="text-center">
                <p>10 PM</p>
                <p>12°C</p>
              </div>
              <div className="text-center">
                <p>1 AM</p>
                <p>11°C</p>
              </div>
              <div className="text-center">
                <p>4 AM</p>
                <p>8°C</p>
              </div>
              <div className="text-center">
                <p>7 AM</p>
                <p>8°C</p>
              </div>
              <div className="text-center">
                <p>10 AM</p>
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
