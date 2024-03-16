import { useState } from 'react';

export default function HandlerEx3() {
  const [style, setStlye] = useState('block');
  const [style2, setStlye2] = useState('none');
  const disappear = (e) => {
    setStlye('none');
    setStlye2('block');
  };
  const appear = (e) => {
    setStlye('block');
    setStlye2('none');
  };
  return (
    <div>
      <button onClick={disappear} style={{ display: style }}>
        사라져라
      </button>
      <button onClick={appear} style={{ display: style2 }}>
        보여라
      </button>
      <h1 style={{ display: style }}>안녕하세요</h1>
    </div>
  );
}
