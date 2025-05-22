// src/ProgressContext.js
import React, { createContext, useContext, useState } from 'react';

const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState({
    beginner: true,
    intermediate: false,
    advanced: false,
  });

  const markLevelCompleted = (level) => {
    setProgress((prev) => ({ ...prev, [level]: true }));
  };

  return (
    <ProgressContext.Provider value={{ progress, markLevelCompleted }}>
      {children}
    </ProgressContext.Provider>
  );
};

// This is what you import as `useProgress`
export const useProgress = () => useContext(ProgressContext);
