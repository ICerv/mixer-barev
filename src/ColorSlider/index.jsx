import React from 'react'
import './style.css'

const ColorSlider = ({ baseColor, colorName, onValueChange, currentValue }) => {

  const handleChange = (e) => {
    const value = e.target.value;
    onValueChange(value);
  };


  return (
    <div>
      <label htmlFor={`${baseColor}`}>{colorName}</label>
      <input
        type="range"
        className={`slider slider--${baseColor}`}
        id={`${baseColor}`}
        min="0"
        max="255"
        value={currentValue}
        onChange={handleChange}
      />
    </div>

  )
}

export default ColorSlider;