import React, { useState } from 'react';
import latteImage from '../assets/latte.png';
import espressoImage from '../assets/espresso.png';
import cappuccinoImage from '../assets/cappuccino.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MakeCoffee.css'; // Import custom CSS file

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
    <div className="container">
      <div className="card mt-5 p-4">
        <h1 className="text-center">Make Coffee</h1>
        {selfDestructMessage && (
          <div className="alert alert-success">{selfDestructMessage}</div>
        )}
        <div className="row justify-content-center">
          {coffeeOptions.map((option, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div
                className={`card text-center ${selectedCoffee === index ? 'border-primary' : ''}`}
                style={{ cursor: 'pointer' }}
                onClick={() => setSelectedCoffee(index)}
              >
                <img src={option.image} className="card-img-top" alt={option.name} />
                <div className="card-body">
                  <h5 className="card-title">{option.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => handlePayment(selectedCoffee)}
          className="btn btn-custom mr-2" // Custom button class
          disabled={selectedCoffee === null}
        >
          Pay
        </button>
        <button onClick={handleReport} className="btn btn-custom mr-2">
          Report
        </button>
        <button onClick={handleReset} className="btn btn-custom"> 
          Reset
        </button>
        {showReport && (
          <div className="mt-3">
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
