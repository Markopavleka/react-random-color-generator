import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const color = randomColor();
  const [changeColor, setChangeColor] = useState(color);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          width: '70vh',
          height: '50vh',
          backgroundColor: changeColor,
          textAlign: 'center',
          fontSize: '5vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Generated Color:
        <br />
        {changeColor}
      </div>
      <br />
      <button
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '15vh',
          height: '8vh',
        }}
        onClick={() => setChangeColor(color)}
      >
        Generate
      </button>
      <br />
    </div>
  );
}
