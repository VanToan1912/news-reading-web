import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import './ThemeToggle.css'

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
        // doc trang thai tu localStorage khi components duoc mount
        const savedMode = localStorage.getItem('darkMode');
        return savedMode ? JSON.parse(savedMode) : false;
  });


  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
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
    <div>
      <button className='themeToggleBtn' onClick={toggleTheme}>
        {darkMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
      </button>
    </div>
  );
};

export default ThemeToggle;
