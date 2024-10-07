// src/context/SharedContext.js

import React, { createContext, useState } from 'react';

// Create a Context
const SharedContext = createContext();

// Provider Component
const SharedProvider = ({ children }) => {
  const [sharedValue, setSharedValue] = useState( localStorage.getItem('city') ||'');

  return (
    <SharedContext.Provider value={{ sharedValue, setSharedValue }}>
      {children}
    </SharedContext.Provider>
  );
};

// Export both `SharedProvider` and `SharedContext`
export { SharedContext, SharedProvider };
