import { useState } from 'react';

export default function HandlerEx2() {
  const [text, setText] = useState('검정색 글씨');
  const [color, setColor] = useState({ color: 'black' });
  const colorRed = () => {
    setText('빨간색 글씨');
    setColor({ color: 'red' });
  };
  const colorBlue = () => {
    setText('파란색 글씨');
    setColor({ color: 'blue' });
  };
  return (
    <div>
      <h1 style={color}>{text}</h1>
      <button onClick={colorRed}>빨간색</button>
      <button onClick={colorBlue}>파란색</button>
    </div>
  );
}
