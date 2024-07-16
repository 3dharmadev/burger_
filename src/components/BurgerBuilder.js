 import React, { useState } from 'react';
import Burger from './Burger';
import ControlPanel from './ControlPanel';
 
// Prices for each type of slice
const slicePrices = {
  alooTikki: 30,
  paneer: 50,
  cheese: 20,
};

const BurgerBuilder = () => {
  // State to keep track of the number of slices for each type
  const [slices, setSlices] = useState({
    alooTikki: 0,
    paneer: 0,
    cheese: 0,
  });

  // State to keep track of the quantity of burgers
  const [quantity, setQuantity] = useState(1);

  // Function to add a slice
  const addSlice = (type) => {
    const updatedSlices = { ...slices };
    updatedSlices[type]++;
    setSlices(updatedSlices);
  };

  // Function to remove a slice
  const removeSlice = (type) => {
    const updatedSlices = { ...slices };
    if (updatedSlices[type] > 0) {
      updatedSlices[type]--;
      setSlices(updatedSlices);
    }
  };

  // Function to update the quantity of burgers
  const updateQuantity = (event) => {
    setQuantity(Number(event.target.value));
  };

  // Function to calculate the total price
  const calculateTotalPrice = () => {
    let total = 0;
    for (let type in slices) {
      total += slices[type] * slicePrices[type];
    }
    return total * quantity;
  };

  return (
    <div className="BurgerBuilder">
      <Burger slices={slices} />
      <ControlPanel
        slices={slices}
        addSlice={addSlice}
        removeSlice={removeSlice}
        quantity={quantity}
        updateQuantity={updateQuantity}
      />
      <h2 className="TotalPrice">Total Price: ₹{calculateTotalPrice()}</h2>
    </div>
  );
};

export default BurgerBuilder;
