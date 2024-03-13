// Menu.js
import React from 'react';

const Menu = ({ items }) => {
  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {items.map(item => (
          <li key={item.name}>{item.name} - ${item.cost}</li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
