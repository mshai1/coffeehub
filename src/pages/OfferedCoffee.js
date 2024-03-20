// OfferedCoffee.js
import React from 'react';

// Sample coffee data
const coffees = [
  {
    id: 1,
    name: 'Espresso',
    description: 'Strong coffee brewed by forcing hot water through finely-ground coffee beans.',
  },
  {
    id: 2,
    name: 'Cappuccino',
    description: 'Espresso-based coffee with equal parts espresso, steamed milk, and milk foam.',
  },
  {
    id: 3,
    name: 'Latte',
    description: 'Coffee made with espresso and steamed milk, topped with milk foam.',
  },
  // Add more coffee objects as needed
];

const OfferedCoffee = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Offered Coffees</h2>
      <div className="row">
        {coffees.map(coffee => (
          <div key={coffee.id} className="col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h3 className="card-title">{coffee.name}</h3>
                <p className="card-text">{coffee.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferedCoffee;
