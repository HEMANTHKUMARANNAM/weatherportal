import { useLocation } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import WeatherDashboard from '../Components/Weather';
import { useTheme  } from '../context/ThemeContext';

import { useState , useEffect } from 'react';

import News from '../Components/News';
import NewsHeader from '../Components/NewsHeader';


function Home() {

    // const [weatherData, setWeatherData] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

  
    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Nellore&appid=fc88c3d4dbff34df7ce72ef2036e4dfb&units=metric'); // Update with your API
    //       if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //       }
    //       const data = await response.json();
    //       setWeatherData(JSON.stringify(data));
    //       console.log( JSON.stringify(data) );
    //       localStorage.setItem("weatherdata" , JSON.stringify(data) );
    //     } catch (error) {
    //       setError(error.message);
    //     } finally {
    //       setLoading(false);
    //     }
    //   };
    //   fetchData()
    // }, []); 

   



    return ( 
        <div>
            <Navbar currentpage = "home" ></Navbar>
            <WeatherDashboard></WeatherDashboard>

            <NewsHeader></NewsHeader>
            
            <News></News>
            <Footer></Footer>
        </div>
     );
}

export default Home;