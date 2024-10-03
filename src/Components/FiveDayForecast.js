import React from 'react';
import { useTheme } from '../context/ThemeContext';


const FiveDayForecast = () => {

    const { theme } = useTheme();

  return (
    <div className="col-12">
      <div className={`card ${theme === "light" ? "bg-light text-dark" : "bg-dark text-light"}`}>
        <div className="card-body">
          <h5>5 Days Forecast</h5>
          <div className="d-flex flex-column align-items-center">
            <div className="text-center">
              <div>2 Mar</div>
              <div>10°C</div>
            </div>
            <div className="text-center">
              <div>3 Mar</div>
              <div>4°C</div>
            </div>
            <div className="text-center">
              <div>4 Mar</div>
              <div>0°C</div>
            </div>
            <div className="text-center">
              <div>5 Mar</div>
              <div>2°C</div>
            </div>
            <div className="text-center">
              <div>6 Mar</div>
              <div>7°C</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiveDayForecast;
