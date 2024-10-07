import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const FiveDayForecast = ({ forecastdata }) => {
  const { theme } = useTheme();
  const [forecast, setForecastInfo] = useState(null);

  // Function to convert date to "Day, Date Month" format
  const convertDate = (dateString) => {
    const date = new Date(dateString);
    let options = { weekday: 'short', day: 'numeric', month: 'short' };
    return date.toLocaleDateString('en-GB', options);
  };

  useEffect(() => {
    if (forecastdata) {
      let data = [];
      let list = [];

      forecastdata.list.forEach((element) => {
        const formattedDate = convertDate(element.dt_txt.substring(0, 10));
        if (list.indexOf(formattedDate) === -1) {
          const elementData = {
            date: formattedDate,
            temp: element.main.temp_max, // or element.main.temp if needed
            icon: element.weather[0].icon,
          };

          list.push(elementData.date);
          data.push(elementData);
        }
      });

      setForecastInfo(data);
    }
  }, [forecastdata]);


  return (
    <div className="col-12">
      <div className={`card ${theme === "light" ? "bg-light text-dark" : "bg-dark text-light"}`}>
        <div className="card-body">
          <h5 className="card-title text-center mb-4">5 Days Forecast</h5>
          <div className="d-flex flex-column align-items-center">
            {/* Forecast rows */}
            {forecast ? (
              <>
                {forecast.map((data, index) => (
                  <div
                    key={index}
                    className="row row-cols-3 align-items-center py-2"
                    style={{ width: '100%', borderBottom: index < 4 ? '1px solid #ccc' : 'none' }}
                  >
                    <div className="col text-center">
                      <img
                        src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
                        alt="weather-icon"
                        style={{ height: '40px' }}
                      />
                    </div>
                    <div className="col text-center">{data.date}</div>
                    <div className="col text-center">{Math.round(data.temp)}°C</div>
                  </div>
                ))}
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiveDayForecast;
