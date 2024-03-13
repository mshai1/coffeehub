import React from 'react';

export default function Home() {
  return (
    <div style={{ backgroundColor: 'lightblue', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h2 style={{ fontFamily: 'aclonica', textAlign: 'center' }}>Home</h2>
        <p style={{ fontFamily: 'aclonica', textAlign: 'center', fontSize: '18px', color: 'white' }}>CoffeeHub, the best coffee you can ever get</p>
        <button>About Us</button>
      </div>
      <div style={{ flex: 1 }}>
        {/* Add your portrait picture here */}
      </div>
    </div>
  );
}
