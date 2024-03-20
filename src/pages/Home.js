import React from 'react';
import Header from './header'; // Assuming the Header component is in the same directory and the filename is 'Header'

export default function Home() {
  return (
    <div className="container-fluid" style={{ backgroundColor: '#f5e9dc', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
      <div className="d-flex flex-column justify-content-center align-items-center" style={{ flex: 1 }}>
        <h2 style={{ fontFamily: 'aclonica', textAlign: 'center', color: '#6d4c41' }}>Home</h2>
        <p style={{ fontFamily: 'aclonica', textAlign: 'center', fontSize: '18px', color: '#6d4c41' }}>CoffeeHub, the best coffee you can ever get</p>
        <button className="btn btn-primary" style={{ backgroundColor: '#6d4c41', border: 'none' }}>About Us</button>
      </div>
      <div style={{ flex: 1 }}>
        {/* Add your portrait picture here */}
      </div>
    </div>
  );
}
