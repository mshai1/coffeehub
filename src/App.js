// App.js

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import coffeeArt from './assets/coffeeArt.png';
import MenuBar from './MenuBar'; // Import the MenuBar component
import Home from './pages/Home'; // Import the Home page component
import MakeCoffee from './pages/MakeCoffee'; // Import the MakeCoffee page component
import OfferedCoffee from './pages/OfferedCoffee'; // Import the OfferedCoffee page component
import NoPage from './pages/NoPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MenuBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/makecoffee" element={<MakeCoffee />} />
          <Route path="/offeredcoffee" element={<OfferedCoffee />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
