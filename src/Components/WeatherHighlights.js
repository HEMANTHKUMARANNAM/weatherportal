import React from 'react';
import { useTheme } from '../context/ThemeContext';


const WeatherHighlights = () => {

    const { theme } = useTheme();
  return (
    <div className="col-lg-8 mb-4">
      <div className= {`card ${theme === "light" ? "bg-light text-dark" : "bg-dark text-light"}`} >
        <div className="card-body">
          <h5>Today's Highlights</h5>
          <div className="row">
            <div className="col-md-4">
              <p>Air Quality Index</p>
              <div>5.18 PM2.5</div>
              <div>4.89 SO2</div>
              <div>3.17 NO2</div>
              <div>100 O3</div>
              <div className="badge bg-warning">Moderate</div>
            </div>
            <div className="col-md-4">
              <p>Sunrise & Sunset</p>
              <div>Sunrise: 6:55 AM</div>
              <div>Sunset: 6:12 PM</div>
            </div>
            <div className="row">
  <div className="d-flex justify-content-between">
    <div>
      <p>Humidity: 45%</p>
    </div>
    <div>
      <p>Pressure: 1010 hPa</p>
    </div>
    <div>
      <p>Visibility: 10 km</p>
    </div>
    <div>
      <p>Feels Like: 17°C</p>
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
