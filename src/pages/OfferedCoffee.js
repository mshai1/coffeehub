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
    <div style={styles.container}>
      <h2 style={styles.title}>Offered Coffees</h2>
      <div style={styles.coffeeList}>
        {coffees.map(coffee => (
          <div key={coffee.id} style={styles.coffeeCard}>
            <h3 style={styles.coffeeName}>{coffee.name}</h3>
            <p style={styles.coffeeDescription}>{coffee.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '20px',
  },
  coffeeList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gridGap: '20px',
  },
  coffeeCard: {
    backgroundColor: '#f5f5f5',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  coffeeName: {
    fontSize: '20px',
    color: '#333',
    marginBottom: '10px',
  },
  coffeeDescription: {
    fontSize: '16px',
    color: '#666',
  },
};

export default OfferedCoffee;
