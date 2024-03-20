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
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
            Coffee Shop
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/makecoffee">Make Coffee</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/offeredcoffee">Offered Coffee</a>
              </li>
            </ul>
          </div>
        </nav>
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
