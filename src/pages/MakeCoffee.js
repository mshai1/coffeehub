import React, { useState } from 'react';
import Header from './header';
import latteImage from '../assets/latte.png';
import espressoImage from '../assets/espresso.png';
import cappuccinoImage from '../assets/cappuccino.jpeg';

// Styles
const styles = {
  container: {
    //background: 'linear-gradient(to right, #ffffff, #f0f8ff)',
   // display: 'flex',
    //justifyContent: 'center',
    padding: '20px',
  },
  content: {
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    textAlign: 'center',
    maxWidth: '100%',
    padding: '20px',
    position: 'relative',
  },
  coffeeCardContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  coffeeCard: {
    width: '200px',
    height: '200px',
    position: 'relative',
    backgroundSize: 'cover',
    marginBottom: '20px',
    cursor: 'pointer',
    borderRadius: '10px',
    transition: 'border 0.3s ease-in-out',
  },
  coffeeName: {
    position: 'absolute',
    bottom: '10px',
    left: '10px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '5px',
    borderRadius: '5px',
  },
  button: {
    margin: '20px 10px',
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-in-out',
  },
  buttonHover: {
    backgroundColor: '#2980b9',
  },
  report: {
    display: 'block',
  },
  selfDestructMessage: {
    position: 'absolute',
    top: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#2ecc71',
    color: '#fff',
    padding: '10px',
    borderRadius: '5px',
    zIndex: '1',
    transition: 'opacity 0.5s ease-in-out',
  },
};

// Coffee options
const coffeeOptions = [
  { name: 'Latte', image: latteImage, water: 200, milk: 150, coffee: 24, cost: 2.5 },
  { name: 'Espresso', image: espressoImage, water: 50, milk: 0, coffee: 18, cost: 1.5 },
  { name: 'Cappuccino', image: cappuccinoImage, water: 250, milk: 50, coffee: 24, cost: 3 },
];

// MakeCoffee Component
const MakeCoffee = () => {
  const initialWater = 300;
  const initialMilk = 200;
  const initialCoffee = 100;
  const [water, setWater] = useState(initialWater);
  const [milk, setMilk] = useState(initialMilk);
  const [coffee, setCoffee] = useState(initialCoffee);
  const [profit, setProfit] = useState(0);
  const [salesReport, setSalesReport] = useState([]);
  const [selectedCoffee, setSelectedCoffee] = useState(null);
  const [showReport, setShowReport] = useState(false);
  const [selfDestructMessage, setSelfDestructMessage] = useState('');

  const handlePayment = (selectedCoffeeIndex) => {
    const coffeeInfo = coffeeOptions[selectedCoffeeIndex];
    if (coffeeInfo) {
      if (water >= coffeeInfo.water && milk >= coffeeInfo.milk && coffee >= coffeeInfo.coffee) {
        setWater(water - coffeeInfo.water);
        setMilk(milk - coffeeInfo.milk);
        setCoffee(coffee - coffeeInfo.coffee);
        setProfit(profit + coffeeInfo.cost);
        setSalesReport([...salesReport, coffeeInfo.name]);
        setSelectedCoffee(null);
        setSelfDestructMessage(`You bought a ${coffeeInfo.name}. Enjoy your coffee!`);
        setTimeout(() => {
          setSelfDestructMessage('');
        }, 3000);
      } else {
        alert("Sorry, not enough ingredients to make this coffee.");
      }
    }
  };

  const handleReport = () => {
    setShowReport(!showReport);
  };

  const handleReset = () => {
    setWater(initialWater);
    setMilk(initialMilk);
    setCoffee(initialCoffee);
    setProfit(0);
    setSalesReport([]);
    setSelectedCoffee(null);
    setSelfDestructMessage('Machine reset successfully.');
    setTimeout(() => {
      setSelfDestructMessage('');
    }, 5000);
  };

  return (
    <div style={styles.container}>
      <Header />
      <div style={styles.content}>
        <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>Make Coffee</h1>
        {selfDestructMessage && (
          <div style={styles.selfDestructMessage}>
            {selfDestructMessage}
          </div>
        )}
        <div style={styles.coffeeCardContainer}>
          {coffeeOptions.map((option, index) => (
            <div
              key={index}
              style={{
                ...styles.coffeeCard,
                backgroundImage: `url(${option.image})`,
                border: selectedCoffee === index ? '2px solid #3498db' : '2px solid transparent',
              }}
              onClick={() => setSelectedCoffee(index)}
            >
              <p style={styles.coffeeName}>{option.name}</p>
            </div>
          ))}
        </div>
        <button
          onClick={() => handlePayment(selectedCoffee)}
          style={styles.button}
          disabled={selectedCoffee === null}
        >
          Pay
        </button>
        <button onClick={handleReport} style={styles.button}>
          Report
        </button>
        <button onClick={handleReset} style={styles.button}>
          Reset
        </button>
        {showReport && (
          <div style={styles.report}>
            <h3>Sales Report</h3>
            <p>Coffee Types Sold: {salesReport.join(', ')}</p>
            <p>Total Coffee Sold: {salesReport.length}</p>
            <p>Total Money Made: ${profit}</p>
            <h3>Coffee Machine Status</h3>
            <p>Water: {water}ml</p>
            <p>Milk: {milk}ml</p>
            <p>Coffee: {coffee}g</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MakeCoffee;