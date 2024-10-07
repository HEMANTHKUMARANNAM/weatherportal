
import React , {useState , useEffect , useContext } from 'react';
import WeatherHeader from './WeatherHeader';
import CurrentWeather from './CurrentWeather';
import WeatherHighlights from './WeatherHighlights';
import FiveDayForecast from './FiveDayForecast';
import HourlyForecast from './HourlyForecast';

import { SharedContext } from '../context/SharedContext';
import { useNavigate } from 'react-router-dom';



const Weather = () => {

  const { sharedValue } = useContext(SharedContext);
    const [weatherData, setWeatherData] = useState(null);

    const [ forecast, setForecast] = useState(null);
    const navigate = useNavigate();


  
    useEffect(() => {
      const fetchData = async () => {
        try {
          if (!navigator.onLine) {
            navigate('/offline'); // Redirect to offline page within your app
            return;
          }
          const city = sharedValue || "Nellore";
          const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`); // Update with your API
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setWeatherData(JSON.stringify(data));
          console.log( JSON.stringify(data) );
        } catch (error) {
          // setError(error.message);
        } finally {
          // setLoading(false);
        }
      };

      const fetchData2 = async () => {
        try {
          if (!navigator.onLine) {
            navigate('/offline'); // Redirect to offline page within your app
            return;
          }
          const city = sharedValue || "Nellore";
          const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`); // Update with your API
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          console.log(data);
          setForecast(data);
          console.log( JSON.stringify(data) );
        } catch (error) {
          // setError(error.message);
        } finally {
          // setLoading(false);
        }
      };

      fetchData();
      fetchData2();
    }, [sharedValue]); 



  return (


    
    <div className="container my-5">
      <WeatherHeader />

      <div className="row">

      <div className='col-4'  style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}    >

      <CurrentWeather  weatherdata = {weatherData}  />

      <FiveDayForecast forecastdata = {forecast}  />

      </div>

      <div className='col-8' style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}   >

      
      <WeatherHighlights  weatherdata = {weatherData}     />

      <HourlyForecast  forecastdata = {forecast} />

      </div>

        
      </div>
      
      
    </div>

   
  );
};

export default Weather;
