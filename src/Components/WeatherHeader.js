import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

import { SharedContext } from '../context/SharedContext';

const WeatherHeader = () => {
  const [city, setCity] = useState( localStorage.getItem("hometown") || 'Nellore'); // Default city set to Nellore
  const API_KEY = 'fc88c3d4dbff34df7ce72ef2036e4dfb'; // Replace with your API key

  const { setSharedValue ,  sharedValue } = useContext(SharedContext); // Access setSharedValue from context

  const { theme } = useTheme();


  const formatCityName = (city) => {
    return city
      .replace(/[^a-zA-Z\s]/g, '') // Remove special characters
      .replace(/\s+/g, ' ')         // Replace multiple spaces with a single space
      .trim()                       // Trim leading and trailing spaces
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize each word
      .join(' ');
  };

  const getWeatherData = async (city) => {
    const formattedCity = formatCityName(city);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${formattedCity}&appid=${API_KEY}&units=metric`;

    try {
      await axios.get(url);
      console.log(`City: ${formattedCity}`);
      setSharedValue(formattedCity);
      localStorage.setItem("city" , formattedCity);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleSearch = () => {
    if (city) {
      getWeatherData(city);
    }
  };

  useEffect(() => {
    getWeatherData(city); // Fetch weather data for default city on component mount
    console.log(sharedValue);
  }, [city , localStorage.getItem("hometown") ]);

  return (
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
      <h1 className={theme === "light" ? "text-dark" : "text-light"}>weatherio</h1>
      <div className="input-group mb-3 w-50">
        <input
          type="text"
          className="form-control"
          placeholder="Search city"
          aria-label="Search city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{
            padding: '10px',
            borderRadius: '5px 0 0 5px',
            border: '1px solid #007bff', // Blue border
          }}
        />
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleSearch}
          style={{
            borderRadius: '0 5px 5px 0',
          }}
        >
          <FaSearch />
        </button>
      </div>
      {/* <button className="btn btn-secondary" type="button">
        Current Location
      </button> */}

    </div>
  );
};

export default WeatherHeader;
