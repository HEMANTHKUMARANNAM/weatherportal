import React from 'react';
import { useTheme } from '../context/ThemeContext'; 

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

import sunImage from '../Images/sun-light.png'; 
import moonImage from '../Images/moon.png'; 

import userImage from '../Images/user.png';

import appicon from '../Images/whethericon.png';

import { Link } from 'react-router-dom';

function Navbar( {currentpage} ) {
    const { theme, toggleTheme } = useTheme(); 

    return ( 
        <div>
            <nav className={`navbar navbar-expand-lg ${theme === 'light' ? 'bg-light' : 'bg-dark'} text-${theme === 'light' ? 'dark' : 'light'}`}>
                <div className="container-fluid">
                    <a className="navbar-brand">
                        <img src={appicon} style={{ width: '30px', height: '30px' }} alt="App Icon" /> Weather App
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <Link className={`nav-link ${currentpage === 'home' ? 'active' : ''}`} to="/home">Home</Link>
                            {/* Other nav items can be added here */}
                        </ul>
                    </div>

                    <div className="d-flex align-items-center">

                        <img  
                            onClick={toggleTheme}
                            src={theme === 'light' ? moonImage : sunImage}
                            alt={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                            style={{ width: '20px', height: '20px', marginRight: '8px' }}
                        />

                        <Link to="/profile">
                            <div className="navbar-profile text-center">
                                <img 
                                    src={userImage}
                                    alt="Profile"
                                    className="rounded-circle"
                                    style={{ width: '25px', height: '25px' }} 
                                />
                            </div>
                        </Link>

                    </div>

                </div>
            </nav>
        </div>
    );
}

export default Navbar;
