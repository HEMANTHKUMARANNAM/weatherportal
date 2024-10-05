import React from 'react';
import { useTheme } from '../context/ThemeContext';


const NewsHeader = () => {
  const { theme } = useTheme();

  return (
    <div className='container' >
    <div className="d-flex justify-content-between">
      <h1 className= {theme === "light" ? "text-dark"  : "text-light" } >News</h1>
    </div>
    </div>
  );
};

export default NewsHeader;
