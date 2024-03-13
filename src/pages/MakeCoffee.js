import React, { useState } from 'react';
import latteImage from '../assets/latte.png';
import espressoImage from '../assets/espresso.png';
import cappuccinoImage from '../assets/cappuccino.jpeg';

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

  const [showReport, setShowReport] = useState(false);

  const handlePayment = (selectedCoffee) => {
    let coffeeInfo = {};
    switch (selectedCoffee) {
      case 'latte':
        coffeeInfo = { name: "latte", water: 200, milk: 150, coffee: 24, cost: 2.5 };
        break;
      case 'espresso':
        coffeeInfo = { name: "espresso", water: 50, milk: 0, coffee: 18, cost: 1.5 };
        break;
      case 'cappuccino':
        coffeeInfo = { name: "cappuccino", water: 250, milk: 50, coffee: 24, cost: 3 };
        break;
      default:
        break;
    }

    if (coffeeInfo.name) {
      if (water >= coffeeInfo.water && milk >= coffeeInfo.milk && coffee >= coffeeInfo.coffee) {
        setWater(water - coffeeInfo.water);
        setMilk(milk - coffeeInfo.milk);
        setCoffee(coffee - coffeeInfo.coffee);
        setProfit(profit + coffeeInfo.cost);
        setSalesReport([...salesReport, coffeeInfo.name]);
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
  };

  const containerStyle = {
    background: 'linear-gradient(to right, #ffffff, #f0f8ff)',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  };

  const contentStyle = {
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    textAlign: 'center',
    maxWidth: '100%',
    padding: '20px',
  };

  const imagesContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    maxWidth: '800px',
    marginBottom: '20px',
  };

  const coffeeImageStyle = {
    width: '100px',
    height: '100px',
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>Make Coffee</h1>
        <div style={imagesContainerStyle}>
          <div>
            <img src={latteImage} alt="Latte" style={coffeeImageStyle} />
            <br />
            <input type="radio" id="latte" name="coffeeType" value="latte" />
            <label htmlFor="latte">Latte</label>
          </div>
          <div>
            <img src={espressoImage} alt="Espresso" style={coffeeImageStyle} />
            <br />
            <input type="radio" id="espresso" name="coffeeType" value="espresso" />
            <label htmlFor="espresso">Espresso</label>
          </div>
          <div>
            <img src={cappuccinoImage} alt="Cappuccino" style={coffeeImageStyle} />
            <br />
            <input type="radio" id="cappuccino" name="coffeeType" value="cappuccino" />
            <label htmlFor="cappuccino">Cappuccino</label>
          </div>
        </div>
        <button onClick={() => handlePayment(document.querySelector('input[name="coffeeType"]:checked').value)} style={{ margin: '20px 10px' }}>Pay</button>
        <button onClick={handleReport} style={{ margin: '20px 10px' }}>Report</button>
        <button onClick={handleReset} style={{ margin: '20px 10px' }}>Reset</button>
        {showReport && (
          <div>
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
