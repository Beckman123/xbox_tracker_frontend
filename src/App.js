// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Games from './pages/Games';
import About from './pages/About';
import Navbar from './components/Navbar'; // Import the Navbar component
import { ThemeProvider } from 'styled-components';
import Theme from './styled/theme';
import { RootDiv } from './styled/Common';



const App = () => {
  return (
    <RootDiv>
    <ThemeProvider theme={Theme}>
      <Router> 
        <Navbar /> 
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/games" element={<Games />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </ThemeProvider>
    </RootDiv>
  );
};

export default App;
