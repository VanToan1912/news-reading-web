import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = '#333';
      document.body.style.color = '#fff';
    } else {
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = '#000';
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button onClick={toggleTheme} style={{ padding: '10px', fontSize: '16px' }}>
        Toggle to {darkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
};

export default ThemeToggle;
