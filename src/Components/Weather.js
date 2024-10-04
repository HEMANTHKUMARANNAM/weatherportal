import React , {useState , useEffect} from 'react';
import WeatherHeader from './WeatherHeader';
import CurrentWeather from './CurrentWeather';
import WeatherHighlights from './WeatherHighlights';
import FiveDayForecast from './FiveDayForecast';
import HourlyForecast from './HourlyForecast';


const Weather = () => {


    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [ forecast, setForecast] = useState(null);


  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Nellore&appid=fc88c3d4dbff34df7ce72ef2036e4dfb&units=metric'); // Update with your API
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setWeatherData(JSON.stringify(data));
          console.log( JSON.stringify(data) );
          localStorage.setItem("weatherdata" , JSON.stringify(data) );
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
      setForecast( {
        "cod": "200",
        "message": 0,
        "cnt": 40,
        "list": [
            {
                "dt": 1728054000,
                "main": {
                    "temp": 29.64,
                    "feels_like": 34.18,
                    "temp_min": 27.35,
                    "temp_max": 29.64,
                    "pressure": 1006,
                    "sea_level": 1006,
                    "grnd_level": 1004,
                    "humidity": 70,
                    "temp_kf": 2.29
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 2.46,
                    "deg": 152,
                    "gust": 3.51
                },
                "visibility": 10000,
                "pop": 0.83,
                "rain": {
                    "3h": 1.96
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-10-04 15:00:00"
            },
            {
                "dt": 1728064800,
                "main": {
                    "temp": 28.06,
                    "feels_like": 31.79,
                    "temp_min": 26.7,
                    "temp_max": 28.06,
                    "pressure": 1007,
                    "sea_level": 1007,
                    "grnd_level": 1005,
                    "humidity": 77,
                    "temp_kf": 1.36
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 99
                },
                "wind": {
                    "speed": 2.08,
                    "deg": 197,
                    "gust": 2.94
                },
                "visibility": 10000,
                "pop": 0.93,
                "rain": {
                    "3h": 2.35
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-10-04 18:00:00"
            },
            {
                "dt": 1728075600,
                "main": {
                    "temp": 26.31,
                    "feels_like": 26.31,
                    "temp_min": 26.31,
                    "temp_max": 26.31,
                    "pressure": 1006,
                    "sea_level": 1006,
                    "grnd_level": 1003,
                    "humidity": 84,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 98
                },
                "wind": {
                    "speed": 2.5,
                    "deg": 198,
                    "gust": 4.02
                },
                "visibility": 10000,
                "pop": 0.91,
                "rain": {
                    "3h": 0.74
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-10-04 21:00:00"
            },
            {
                "dt": 1728086400,
                "main": {
                    "temp": 26.11,
                    "feels_like": 26.11,
                    "temp_min": 26.11,
                    "temp_max": 26.11,
                    "pressure": 1007,
                    "sea_level": 1007,
                    "grnd_level": 1004,
                    "humidity": 84,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 99
                },
                "wind": {
                    "speed": 2.35,
                    "deg": 215,
                    "gust": 3.51
                },
                "visibility": 10000,
                "pop": 0.73,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-10-05 00:00:00"
            },
            {
                "dt": 1728097200,
                "main": {
                    "temp": 29.87,
                    "feels_like": 33.82,
                    "temp_min": 29.87,
                    "temp_max": 29.87,
                    "pressure": 1010,
                    "sea_level": 1010,
                    "grnd_level": 1006,
                    "humidity": 66,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 2.49,
                    "deg": 221,
                    "gust": 2.4
                },
                "visibility": 10000,
                "pop": 0.35,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-10-05 03:00:00"
            },
            {
                "dt": 1728108000,
                "main": {
                    "temp": 33.91,
                    "feels_like": 37.23,
                    "temp_min": 33.91,
                    "temp_max": 33.91,
                    "pressure": 1008,
                    "sea_level": 1008,
                    "grnd_level": 1005,
                    "humidity": 47,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 99
                },
                "wind": {
                    "speed": 0.39,
                    "deg": 91,
                    "gust": 1.29
                },
                "visibility": 10000,
                "pop": 0.37,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-10-05 06:00:00"
            },
            {
                "dt": 1728118800,
                "main": {
                    "temp": 33.35,
                    "feels_like": 37.31,
                    "temp_min": 33.35,
                    "temp_max": 33.35,
                    "pressure": 1005,
                    "sea_level": 1005,
                    "grnd_level": 1002,
                    "humidity": 51,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 78
                },
                "wind": {
                    "speed": 3.19,
                    "deg": 90,
                    "gust": 3.62
                },
                "visibility": 10000,
                "pop": 0.3,
                "rain": {
                    "3h": 0.15
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-10-05 09:00:00"
            },
            {
                "dt": 1728129600,
                "main": {
                    "temp": 30.1,
                    "feels_like": 33.88,
                    "temp_min": 30.1,
                    "temp_max": 30.1,
                    "pressure": 1006,
                    "sea_level": 1006,
                    "grnd_level": 1003,
                    "humidity": 64,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 85
                },
                "wind": {
                    "speed": 2.78,
                    "deg": 133,
                    "gust": 3.36
                },
                "visibility": 10000,
                "pop": 0.22,
                "rain": {
                    "3h": 0.42
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-10-05 12:00:00"
            },
            {
                "dt": 1728140400,
                "main": {
                    "temp": 27.9,
                    "feels_like": 31.14,
                    "temp_min": 27.9,
                    "temp_max": 27.9,
                    "pressure": 1009,
                    "sea_level": 1009,
                    "grnd_level": 1006,
                    "humidity": 75,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 71
                },
                "wind": {
                    "speed": 3.28,
                    "deg": 175,
                    "gust": 5.19
                },
                "visibility": 10000,
                "pop": 0.64,
                "rain": {
                    "3h": 0.77
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-10-05 15:00:00"
            },
            {
                "dt": 1728151200,
                "main": {
                    "temp": 27.2,
                    "feels_like": 29.88,
                    "temp_min": 27.2,
                    "temp_max": 27.2,
                    "pressure": 1008,
                    "sea_level": 1008,
                    "grnd_level": 1005,
                    "humidity": 77,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 60
                },
                "wind": {
                    "speed": 2.03,
                    "deg": 170,
                    "gust": 3.4
                },
                "visibility": 10000,
                "pop": 0.67,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-10-05 18:00:00"
            },
            {
                "dt": 1728162000,
                "main": {
                    "temp": 26.5,
                    "feels_like": 26.5,
                    "temp_min": 26.5,
                    "temp_max": 26.5,
                    "pressure": 1007,
                    "sea_level": 1007,
                    "grnd_level": 1003,
                    "humidity": 79,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 58
                },
                "wind": {
                    "speed": 1.9,
                    "deg": 249,
                    "gust": 2.31
                },
                "visibility": 10000,
                "pop": 0.15,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-10-05 21:00:00"
            },
            {
                "dt": 1728172800,
                "main": {
                    "temp": 26.28,
                    "feels_like": 26.28,
                    "temp_min": 26.28,
                    "temp_max": 26.28,
                    "pressure": 1007,
                    "sea_level": 1007,
                    "grnd_level": 1004,
                    "humidity": 79,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 73
                },
                "wind": {
                    "speed": 1.33,
                    "deg": 304,
                    "gust": 1.37
                },
                "visibility": 10000,
                "pop": 0.15,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-10-06 00:00:00"
            },
            {
                "dt": 1728183600,
                "main": {
                    "temp": 29.57,
                    "feels_like": 32.4,
                    "temp_min": 29.57,
                    "temp_max": 29.57,
                    "pressure": 1010,
                    "sea_level": 1010,
                    "grnd_level": 1007,
                    "humidity": 62,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 86
                },
                "wind": {
                    "speed": 0.8,
                    "deg": 113,
                    "gust": 0.83
                },
                "visibility": 10000,
                "pop": 0.07,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-10-06 03:00:00"
            },
            {
                "dt": 1728194400,
                "main": {
                    "temp": 33.55,
                    "feels_like": 35.68,
                    "temp_min": 33.55,
                    "temp_max": 33.55,
                    "pressure": 1008,
                    "sea_level": 1008,
                    "grnd_level": 1005,
                    "humidity": 44,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 93
                },
                "wind": {
                    "speed": 3.64,
                    "deg": 92,
                    "gust": 3.42
                },
                "visibility": 10000,
                "pop": 0.07,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-10-06 06:00:00"
            },
            {
                "dt": 1728205200,
                "main": {
                    "temp": 33.17,
                    "feels_like": 35.25,
                    "temp_min": 33.17,
                    "temp_max": 33.17,
                    "pressure": 1006,
                    "sea_level": 1006,
                    "grnd_level": 1003,
                    "humidity": 45,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 99
                },
                "wind": {
                    "speed": 5.05,
                    "deg": 84,
                    "gust": 3.66
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-10-06 09:00:00"
            },
            {
                "dt": 1728216000,
                "main": {
                    "temp": 29.63,
                    "feels_like": 32.51,
                    "temp_min": 29.63,
                    "temp_max": 29.63,
                    "pressure": 1007,
                    "sea_level": 1007,
                    "grnd_level": 1004,
                    "humidity": 62,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 99
                },
                "wind": {
                    "speed": 4.68,
                    "deg": 91,
                    "gust": 5.23
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-10-06 12:00:00"
            },
            {
                "dt": 1728226800,
                "main": {
                    "temp": 28.15,
                    "feels_like": 31.84,
                    "temp_min": 28.15,
                    "temp_max": 28.15,
                    "pressure": 1010,
                    "sea_level": 1010,
                    "grnd_level": 1007,
                    "humidity": 76,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 4.03,
                    "deg": 103,
                    "gust": 6.58
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-10-06 15:00:00"
            },
            {
                "dt": 1728237600,
                "main": {
                    "temp": 27.23,
                    "feels_like": 30.15,
                    "temp_min": 27.23,
                    "temp_max": 27.23,
                    "pressure": 1010,
                    "sea_level": 1010,
                    "grnd_level": 1006,
                    "humidity": 79,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 1.74,
                    "deg": 151,
                    "gust": 2.56
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-10-06 18:00:00"
            },
            {
                "dt": 1728248400,
                "main": {
                    "temp": 26.39,
                    "feels_like": 26.39,
                    "temp_min": 26.39,
                    "temp_max": 26.39,
                    "pressure": 1008,
                    "sea_level": 1008,
                    "grnd_level": 1005,
                    "humidity": 82,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 80
                },
                "wind": {
                    "speed": 1.68,
                    "deg": 165,
                    "gust": 1.88
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-10-06 21:00:00"
            },
            {
                "dt": 1728259200,
                "main": {
                    "temp": 25.91,
                    "feels_like": 26.78,
                    "temp_min": 25.91,
                    "temp_max": 25.91,
                    "pressure": 1010,
                    "sea_level": 1010,
                    "grnd_level": 1006,
                    "humidity": 85,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 88
                },
                "wind": {
                    "speed": 0.82,
                    "deg": 145,
                    "gust": 0.98
                },
                "visibility": 10000,
                "pop": 0.3,
                "rain": {
                    "3h": 0.22
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-10-07 00:00:00"
            },
            {
                "dt": 1728270000,
                "main": {
                    "temp": 28.75,
                    "feels_like": 32.19,
                    "temp_min": 28.75,
                    "temp_max": 28.75,
                    "pressure": 1012,
                    "sea_level": 1012,
                    "grnd_level": 1009,
                    "humidity": 70,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 99
                },
                "wind": {
                    "speed": 2.35,
                    "deg": 104,
                    "gust": 2.87
                },
                "visibility": 10000,
                "pop": 0.32,
                "rain": {
                    "3h": 0.43
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-10-07 03:00:00"
            },
            {
                "dt": 1728280800,
                "main": {
                    "temp": 32.61,
                    "feels_like": 35.52,
                    "temp_min": 32.61,
                    "temp_max": 32.61,
                    "pressure": 1010,
                    "sea_level": 1010,
                    "grnd_level": 1007,
                    "humidity": 50,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 77
                },
                "wind": {
                    "speed": 4.67,
                    "deg": 91,
                    "gust": 4.1
                },
                "visibility": 10000,
                "pop": 0.18,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-10-07 06:00:00"
            },
            {
                "dt": 1728291600,
                "main": {
                    "temp": 31.97,
                    "feels_like": 34.8,
                    "temp_min": 31.97,
                    "temp_max": 31.97,
                    "pressure": 1008,
                    "sea_level": 1008,
                    "grnd_level": 1005,
                    "humidity": 52,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 17
                },
                "wind": {
                    "speed": 5.87,
                    "deg": 88,
                    "gust": 4.67
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-10-07 09:00:00"
            },
            {
                "dt": 1728302400,
                "main": {
                    "temp": 28.89,
                    "feels_like": 31.63,
                    "temp_min": 28.89,
                    "temp_max": 28.89,
                    "pressure": 1009,
                    "sea_level": 1009,
                    "grnd_level": 1006,
                    "humidity": 65,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "clouds": {
                    "all": 14
                },
                "wind": {
                    "speed": 5.02,
                    "deg": 89,
                    "gust": 5.46
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-10-07 12:00:00"
            },
            {
                "dt": 1728313200,
                "main": {
                    "temp": 27.83,
                    "feels_like": 30.59,
                    "temp_min": 27.83,
                    "temp_max": 27.83,
                    "pressure": 1011,
                    "sea_level": 1011,
                    "grnd_level": 1008,
                    "humidity": 72,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 7
                },
                "wind": {
                    "speed": 3.36,
                    "deg": 91,
                    "gust": 5.33
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-10-07 15:00:00"
            },
            {
                "dt": 1728324000,
                "main": {
                    "temp": 27.22,
                    "feels_like": 29.82,
                    "temp_min": 27.22,
                    "temp_max": 27.22,
                    "pressure": 1011,
                    "sea_level": 1011,
                    "grnd_level": 1008,
                    "humidity": 76,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 9
                },
                "wind": {
                    "speed": 1.99,
                    "deg": 100,
                    "gust": 3.62
                },
                "visibility": 10000,
                "pop": 0.01,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-10-07 18:00:00"
            },
            {
                "dt": 1728334800,
                "main": {
                    "temp": 26.71,
                    "feels_like": 29.03,
                    "temp_min": 26.71,
                    "temp_max": 26.71,
                    "pressure": 1009,
                    "sea_level": 1009,
                    "grnd_level": 1006,
                    "humidity": 79,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 50
                },
                "wind": {
                    "speed": 1.65,
                    "deg": 104,
                    "gust": 1.92
                },
                "visibility": 10000,
                "pop": 0.28,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-10-07 21:00:00"
            },
            {
                "dt": 1728345600,
                "main": {
                    "temp": 26.27,
                    "feels_like": 26.27,
                    "temp_min": 26.27,
                    "temp_max": 26.27,
                    "pressure": 1010,
                    "sea_level": 1010,
                    "grnd_level": 1007,
                    "humidity": 82,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 72
                },
                "wind": {
                    "speed": 1.93,
                    "deg": 105,
                    "gust": 2.21
                },
                "visibility": 10000,
                "pop": 0.35,
                "rain": {
                    "3h": 0.44
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-10-08 00:00:00"
            },
            {
                "dt": 1728356400,
                "main": {
                    "temp": 29.23,
                    "feels_like": 32.47,
                    "temp_min": 29.23,
                    "temp_max": 29.23,
                    "pressure": 1012,
                    "sea_level": 1012,
                    "grnd_level": 1009,
                    "humidity": 66,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 2.84,
                    "deg": 99,
                    "gust": 3.24
                },
                "visibility": 10000,
                "pop": 0.27,
                "rain": {
                    "3h": 0.25
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-10-08 03:00:00"
            },
            {
                "dt": 1728367200,
                "main": {
                    "temp": 31.81,
                    "feels_like": 35.79,
                    "temp_min": 31.81,
                    "temp_max": 31.81,
                    "pressure": 1010,
                    "sea_level": 1010,
                    "grnd_level": 1007,
                    "humidity": 57,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 5.19,
                    "deg": 103,
                    "gust": 4.77
                },
                "visibility": 10000,
                "pop": 0.54,
                "rain": {
                    "3h": 0.41
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-10-08 06:00:00"
            },
            {
                "dt": 1728378000,
                "main": {
                    "temp": 31.62,
                    "feels_like": 35.12,
                    "temp_min": 31.62,
                    "temp_max": 31.62,
                    "pressure": 1008,
                    "sea_level": 1008,
                    "grnd_level": 1004,
                    "humidity": 56,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 96
                },
                "wind": {
                    "speed": 5.72,
                    "deg": 109,
                    "gust": 5.13
                },
                "visibility": 10000,
                "pop": 0.5,
                "rain": {
                    "3h": 0.19
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-10-08 09:00:00"
            },
            {
                "dt": 1728388800,
                "main": {
                    "temp": 29.01,
                    "feels_like": 32.03,
                    "temp_min": 29.01,
                    "temp_max": 29.01,
                    "pressure": 1008,
                    "sea_level": 1008,
                    "grnd_level": 1005,
                    "humidity": 66,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 91
                },
                "wind": {
                    "speed": 5.18,
                    "deg": 111,
                    "gust": 5.62
                },
                "visibility": 10000,
                "pop": 0.36,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-10-08 12:00:00"
            },
            {
                "dt": 1728399600,
                "main": {
                    "temp": 27.94,
                    "feels_like": 31.09,
                    "temp_min": 27.94,
                    "temp_max": 27.94,
                    "pressure": 1011,
                    "sea_level": 1011,
                    "grnd_level": 1008,
                    "humidity": 74,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 33
                },
                "wind": {
                    "speed": 3.56,
                    "deg": 118,
                    "gust": 5.62
                },
                "visibility": 10000,
                "pop": 0.02,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-10-08 15:00:00"
            },
            {
                "dt": 1728410400,
                "main": {
                    "temp": 27.42,
                    "feels_like": 30.35,
                    "temp_min": 27.42,
                    "temp_max": 27.42,
                    "pressure": 1010,
                    "sea_level": 1010,
                    "grnd_level": 1007,
                    "humidity": 77,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 44
                },
                "wind": {
                    "speed": 3.06,
                    "deg": 129,
                    "gust": 5.53
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-10-08 18:00:00"
            },
            {
                "dt": 1728421200,
                "main": {
                    "temp": 26.78,
                    "feels_like": 29.26,
                    "temp_min": 26.78,
                    "temp_max": 26.78,
                    "pressure": 1009,
                    "sea_level": 1009,
                    "grnd_level": 1005,
                    "humidity": 80,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 72
                },
                "wind": {
                    "speed": 1.98,
                    "deg": 128,
                    "gust": 3.41
                },
                "visibility": 10000,
                "pop": 0.05,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-10-08 21:00:00"
            },
            {
                "dt": 1728432000,
                "main": {
                    "temp": 26.3,
                    "feels_like": 26.3,
                    "temp_min": 26.3,
                    "temp_max": 26.3,
                    "pressure": 1009,
                    "sea_level": 1009,
                    "grnd_level": 1006,
                    "humidity": 82,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 86
                },
                "wind": {
                    "speed": 1.51,
                    "deg": 138,
                    "gust": 1.59
                },
                "visibility": 10000,
                "pop": 0.4,
                "rain": {
                    "3h": 0.19
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2024-10-09 00:00:00"
            },
            {
                "dt": 1728442800,
                "main": {
                    "temp": 29.25,
                    "feels_like": 32.33,
                    "temp_min": 29.25,
                    "temp_max": 29.25,
                    "pressure": 1011,
                    "sea_level": 1011,
                    "grnd_level": 1008,
                    "humidity": 65,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 97
                },
                "wind": {
                    "speed": 2.27,
                    "deg": 129,
                    "gust": 2.67
                },
                "visibility": 10000,
                "pop": 0.49,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-10-09 03:00:00"
            },
            {
                "dt": 1728453600,
                "main": {
                    "temp": 32.46,
                    "feels_like": 35.49,
                    "temp_min": 32.46,
                    "temp_max": 32.46,
                    "pressure": 1010,
                    "sea_level": 1010,
                    "grnd_level": 1006,
                    "humidity": 51,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 99
                },
                "wind": {
                    "speed": 4.35,
                    "deg": 105,
                    "gust": 3.64
                },
                "visibility": 10000,
                "pop": 0.49,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-10-09 06:00:00"
            },
            {
                "dt": 1728464400,
                "main": {
                    "temp": 31.78,
                    "feels_like": 34.68,
                    "temp_min": 31.78,
                    "temp_max": 31.78,
                    "pressure": 1007,
                    "sea_level": 1007,
                    "grnd_level": 1003,
                    "humidity": 53,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 5.43,
                    "deg": 103,
                    "gust": 4.37
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-10-09 09:00:00"
            },
            {
                "dt": 1728475200,
                "main": {
                    "temp": 28.92,
                    "feels_like": 31.85,
                    "temp_min": 28.92,
                    "temp_max": 28.92,
                    "pressure": 1007,
                    "sea_level": 1007,
                    "grnd_level": 1004,
                    "humidity": 66,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 98
                },
                "wind": {
                    "speed": 4.74,
                    "deg": 106,
                    "gust": 5.04
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2024-10-09 12:00:00"
            }
        ],
        "city": {
            "id": 1261529,
            "name": "Nellore",
            "coord": {
                "lat": 14.4333,
                "lon": 79.9667
            },
            "country": "IN",
            "population": 404158,
            "timezone": 19800,
            "sunrise": 1728001790,
            "sunset": 1728044855
        }
    }
  );
      fetchData()
    }, []); 



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
