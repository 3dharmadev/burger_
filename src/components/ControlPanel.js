 import React from 'react';
import './ControlPanel.css';

const ControlPanel = ({ slices, addSlice, removeSlice, quantity, updateQuantity }) => {
  return (
    <div className="ControlPanel">
      <h3>Build Your Burger</h3>
      {Object.keys(slices).map(type => (
        <div key={type}>
          <button onClick={() => addSlice(type)}>Add {type}</button>
          <button onClick={() => removeSlice(type)}>Remove {type}</button>
          <span>{slices[type]}</span>
        </div>
      ))}
      <h3>Quantity</h3>
      <input type="number" value={quantity} onChange={updateQuantity} min="1" />
    </div>
  );
};

export default ControlPanel;
