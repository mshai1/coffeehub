// MenuBar.js

import React from 'react';
import { Link } from 'react-router-dom';

function MenuBar() {
  return (
    <div className="menu-bar">
      <nav>
        <ul style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', listStyleType: 'none', padding: 0 }}>
          <li style={{ marginRight: '10px' }}><Link to="/">Home</Link></li>
          <li style={{ marginRight: '10px' }}><Link to="/makecoffee">Make Coffee</Link></li>
          <li style={{ marginRight: '10px' }}><Link to="/offeredcoffee">Offered Coffee</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default MenuBar;
