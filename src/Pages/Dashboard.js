import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext'; // Import your theme context
import Navbar from '../Components/Navbar';
import Profile from '../Components/Profile';


function Dashboard() {
  const navigate = useNavigate();
  const { theme } = useTheme(); // Use theme to apply dark or light mode styles

  console.log(theme);



 

  return (



    <div>


        <Navbar></Navbar>

        <Profile></Profile>

     


    </div>



    
  );
}

export default Dashboard;
