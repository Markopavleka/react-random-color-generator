import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const color = randomColor();
  const [changeColor, setChangeColor] = useState(color);
  const [height, setHeight] = useState('500px');
  const [width, setWidth] = useState('500px');

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontFamily: 'monospace',
      }}
    >
      <div
        style={{
          width: width,
          height: height,
          borderRadius: '20px',
          backgroundColor: changeColor,
          textAlign: 'center',
          fontSize: '5vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'all .8s ease',
          WebkitTransition: 'all .8s ease',
          MozTransition: 'all .8s ease',
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
          borderRadius: '20px',
          fontSize: '20px',
          background: 'white',
          borderColor: changeColor,
          borderWidth: '4px',
        }}
        onClick={() => setChangeColor(color)}
      >
        Generate
      </button>
      <br />

      <h2>Change Hight</h2>

      <input
        placeholder="500"
        style={{
          background: 'white',
          borderColor: changeColor,
          borderWidth: '3px',
          width: '15vh',
          height: '8vh',
          borderRadius: '20px',
          textAlign: 'center',
          fontSize: '20px',
        }}
        onChange={(event) => {
          setHeight(event.currentTarget.value + 'px');
        }}
      />
      <br />
      <h2>Change Width</h2>
      <input
        placeholder="500"
        style={{
          background: 'white',
          borderColor: changeColor,
          borderWidth: '3px',
          width: '15vh',
          height: '8vh',
          borderRadius: '20px',
          textAlign: 'center',
          fontSize: '20px',
        }}
        onChange={(event) => {
          setWidth(event.currentTarget.value + 'px');
        }}
      />
    </div>
  );
}
