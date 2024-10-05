import { useLocation } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import WeatherDashboard from '../Components/Weather';
import { useTheme  } from '../context/ThemeContext';

import { useState , useEffect } from 'react';

import News from '../Components/News';
import NewsHeader from '../Components/NewsHeader';

import  {SharedProvider}  from '../context/SharedContext';


function Home() {

 



    return ( 

        <SharedProvider>
        <div>
            <Navbar currentpage = "home" ></Navbar>
            <WeatherDashboard></WeatherDashboard>

            <NewsHeader></NewsHeader>
            
            <News></News>
            <Footer></Footer>
        </div>

        </SharedProvider>
     );
}

export default Home;