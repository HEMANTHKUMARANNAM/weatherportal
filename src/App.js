import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Home from '../src/Pages/Home';
import Dashboard from '../src/Pages/Dashboard';
// import './App.css';

import OfflinePage from './Pages/OfflinePage';


import './styles.css'

import { ThemeProvider, useTheme } from './context/ThemeContext'; // Adjust the path as necessary

function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}

const MainApp = () => {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme; // Update the body's class based on the theme
  }, [theme]);

  return (
    <Router basename='/weatherportal'>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Dashboard />} />
        <Route path="/offline" element={<OfflinePage />} />
        {/* Redirect to /home if the route doesn't match */}
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
}

export default App;
