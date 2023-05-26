import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import ColorSlider from './ColorSlider';

const App = () => {
  const [redValue, setRedValue] = useState(0);
  const [greenValue, setGreenValue] = useState(0);
  const [blueValue, setBlueValue] = useState(0);

  const boxStyle = {
    backgroundColor: `rgb(${redValue}, ${greenValue}, ${blueValue})`,
  };

  const handleRedChange = (value) => {
    setRedValue(value);
  };

  const handleGreenChange = (value) => {
    setGreenValue(value);
  };

  const handleBlueChange = (value) => {
    setBlueValue(value);
  };

  return (
    <div className="color-panel">
      <h1>Mixér barev</h1>
      <div className="sliders">
        <ColorSlider
          baseColor="red"
          colorName="Červená"
          onValueChange={handleRedChange}
          currentValue={redValue}
        />
        <ColorSlider
          baseColor="green"
          colorName="Zelená"
          onValueChange={handleGreenChange}
          currentValue={greenValue}

        />
        <ColorSlider
          baseColor="blue"
          colorName="Modrá"
          onValueChange={handleBlueChange}
          currentValue={blueValue}

        />
      </div>
      <div className="color-box" style={boxStyle}></div>
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
