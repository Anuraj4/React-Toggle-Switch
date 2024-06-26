import React, { useState } from 'react';

function ColorChanger() {
  const [color, setColor] = useState('#ffffff');

  return (
    <div style={{ backgroundColor: color, height: '20vh', padding: '20px' }}>
      <h1>Color Changer</h1>
      <input 
        type="color" 
        value={color} 
        onChange={(e) => setColor(e.target.value)} 
      />
    </div>
  );
}

export default ColorChanger;
