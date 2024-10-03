import React from 'react';
import { useTheme } from '../context/ThemeContext'; 

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

import sunImage from '../Images/sun-light.png'; 
import moonImage from '../Images/moon.png'; 

import userImage from '../Images/user.png';

import appicon from '../Images/whethericon.png';




function Navbar( {currentpage} ) {
    const { theme, toggleTheme } = useTheme(); 

    return ( 
        <div>
            <nav className={`navbar navbar-expand-lg ${theme === 'light' ? 'bg-light' : 'bg-dark'} text-${theme === 'light' ? 'dark' : 'light'}`}>
                <div className="container-fluid">
                    <a className="navbar-brand"> <img src={appicon} style={{ width: '30px', height: '30px' }}   ></img> Whether App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className= { currentpage === "home" ? "nav-link active" :"nav-link" } aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>

                    <div className="d-flex align-items-center">

                    <img  onClick={toggleTheme}
                            src={theme === 'light' ? moonImage : sunImage}
                            alt={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                            style={{ width: '20px', height: '20px', marginRight: '8px' }} // Adjust the size as needed
                    />

                        <div className="navbar-profile text-center">
                            <img 
                                src= {userImage} // Replace with your profile image path
                                alt="Profile"
                                className="rounded-circle"
                                style={{ width: '25px', height: '25px' }} 
                            />
                        </div>

                    </div>

                </div>
            </nav>
        </div>
    );
}

export default Navbar;




// <button onClick={toggleTheme} className="btn btn-outline-secondary">
//                         {/* <img
//                             src={theme === 'light' ? moonImage : sunImage}
//                             alt={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
//                             style={{ width: '20px', height: '20px', marginRight: '8px' }} // Adjust the size as needed
//                         /> */}
//                         {/* Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode */}
//                     </button>  //