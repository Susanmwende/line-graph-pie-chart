// src/components/DataSelector.js
import React from 'react';

const DataSelector = ({ dataType, handleChange }) => {
  return (
    <select onChange={handleChange} value={dataType} style={{ marginBottom: '20px' }}>
      <option value="daily">Daily</option>
      <option value="weekly">Weekly</option>
      <option value="monthly">Monthly</option>
    </select>
  );
};

export default DataSelector;