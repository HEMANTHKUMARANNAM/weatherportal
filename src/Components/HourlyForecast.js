import React , {useState , useEffect} from 'react';
import { useTheme } from '../context/ThemeContext';
import sundark from '../Images/sun-dark.png';
import sunlight from '../Images/sun-light.png'; // Assuming you have this for the light theme

const HourlyForecast = ( {forecastdata} ) => {
  const { theme } = useTheme();

  const [forecast, setforecastInfo] = useState(null);


  function settime( time)
  {
    if( parseInt(time) <=12 )
    {
      return time + "AM";
    }
    return time + "PM";
  }

  

  useEffect(() => {
    console.log("meow");

    let data = [];
  
    
    if (forecastdata ) {

      const meow = forecastdata.list;

      for(let i =0 ; i< 8 ; i++)
      {

        const element =
        {
          temp : meow[i].main.temp,
          time : settime(meow[i].dt_txt .substring(11,13)) ,
          icon : meow[i].weather[0].icon
        }
        data.push(element);
        console.log(meow[i].main.temp);
        console.log(meow[i].dt_txt);
        console.log(meow[i].weather[0].icon);
      }

      console.log("meow " ,data);

      setforecastInfo(data);



    }
    


  }, [forecastdata]);





  const icon = theme === 'light' ? sunlight : sundark; // Choose the appropriate icon based on theme

  return (
    <div className="row">
      <div className="col">
        <div className={`card ${theme === "light" ? "bg-light text-dark" : "bg-dark text-light"}`}>
          <div className="card-body">
            <h5>Today at</h5>
            <div className="d-flex justify-content-around">
              
              {/* Each block follows the same format */}

              {forecast ? ( <>
              <div className="text-center">
                <p>{forecast[0].time}</p>
                <img
                  src= {  `https://openweathermap.org/img/wn/${forecast[0].icon}@2x.png` } 
                  alt="weather-icon"
                  style={{ height: "70px", paddingBottom: "10px" }}
                />
                <p>{forecast[0].temp}°C</p>
              </div>

              <div className="text-center">
                <p>{forecast[1].time}</p>
                <img
                  src= {  `https://openweathermap.org/img/wn/${forecast[1].icon}@2x.png` } 
                  alt="weather-icon"
                  style={{ height: "70px", paddingBottom: "10px" }}
                />
                <p>{forecast[1].temp}°C</p>
              </div>

              <div className="text-center">
                <p>{forecast[2].time}</p>
                <img
                  src= {  `https://openweathermap.org/img/wn/${forecast[2].icon}@2x.png` } 
                  alt="weather-icon"
                  style={{ height: "70px", paddingBottom: "10px" }}
                />
                <p>{forecast[2].temp}°C</p>
              </div>

              <div className="text-center">
                <p>{forecast[3].time}</p>
                <img
                  src= {  `https://openweathermap.org/img/wn/${forecast[3].icon}@2x.png` } 
                  alt="weather-icon"
                  style={{ height: "70px", paddingBottom: "10px" }}
                />
                <p>{forecast[3].temp}°C</p>
              </div>

              <div className="text-center">
                <p> {forecast[4].time} </p>
                <img
                  src= {  `https://openweathermap.org/img/wn/${forecast[4].icon}@2x.png` } 
                  alt="weather-icon"
                  style={{ height: "70px", paddingBottom: "10px" }}
                />
                <p>{forecast[4].temp}°C</p>
              </div>

              <div className="text-center">
                <p>{forecast[5].time}</p>
                <img
                  src= {  `https://openweathermap.org/img/wn/${forecast[5].icon}@2x.png` } 
                  alt="weather-icon"
                  style={{ height: "70px", paddingBottom: "10px" }}
                />
                <p>{forecast[5].temp}°C</p>
              </div>

              <div className="text-center">
                <p>{ forecast[6].time }</p>
                <img
                  src= {  `https://openweathermap.org/img/wn/${forecast[6].icon}@2x.png` } 
                  alt="weather-icon"
                  style={{ height: "70px", paddingBottom: "10px" }}
                />
                <p>{forecast[6].temp}°C</p>
              </div>

              <div className="text-center">
                <p>{ forecast[7].time }</p>
                <img
                  src= {  `https://openweathermap.org/img/wn/${forecast[7].icon}@2x.png` } 
                  alt="weather-icon"
                  style={{ height: "70px", paddingBottom: "10px" }}
                />
                <p>{forecast[7].temp}°C</p>
              </div>


              </>) :(<>Loading</>)}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HourlyForecast;
