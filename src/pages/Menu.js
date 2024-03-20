// Menu.js
import React from 'react';

const Menu = ({ items }) => {
  return (
    <div className="container">
      <h2 className="text-center mt-4">Menu</h2>
      <ul className="list-group">
        {items.map(item => (
          <li key={item.name} className="list-group-item">{item.name} - ${item.cost}</li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
