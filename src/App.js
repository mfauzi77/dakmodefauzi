import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from './redux/themeSlice';
import './App.css';

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <div className={darkMode ? 'app dark-mode' : 'app light-mode'}>
      <button onClick={handleToggle} className="toggle-btn">
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      <h1>{darkMode ? 'Dark Mode' : 'Light Mode'}</h1>
      <p>This is a {darkMode ? 'dark' : 'light'} themed paragraph.</p>
    </div>
  );
}

export default App;
