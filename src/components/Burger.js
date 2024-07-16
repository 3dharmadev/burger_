 import React from 'react';
import BurgerSlice from './BurgerSlice';
import './Burger.css';

 const sliceColors = {
  alooTikki: 'red',
  paneer: 'white',
  cheese: 'yellow',
};

const Burger = ({ slices }) => {
  // Generate the slices based on the current state
  const renderedSlices = [];
  for (let type in slices) {
    for (let i = 0; i < slices[type]; i++) {
      renderedSlices.push(<BurgerSlice key={type + i} color={sliceColors[type]} />);
    }
  }

  return (
    <div className="BurgerContainer">
      <div className="Bun Top"></div>
      {renderedSlices}
      <div className="Bun Bottom"></div>
    </div>
  );
};

export default Burger;
