import { useState } from 'react';

export default function HandlerEx4() {
  const [src, setSrc] = useState('./apple.jpg');
  const [backgroundColor, setBgColor] = useState('black');
  const [color, setColor] = useState('white');
  const [text, setText] = useState('text');
  return (
    <div>
      <div>
        <label htmlFor="fruit">과일 :</label>
        <select
          name="fruit"
          onChange={(e) => setSrc(`./${e.target.value}.jpg`)}
        >
          <option value="apple">사과</option>
          <option value="banana">바나나</option>
          <option value="peach">복숭아</option>
          <option value="orange">오렌지</option>
        </select>
        <label htmlFor="bgColor">배경색 :</label>
        <select name="bgColor" onChange={(e) => setBgColor(e.target.value)}>
          <option value="black">검정</option>
          <option value="white">하양</option>
          <option value="red">빨강</option>
          <option value="orange">주황</option>
          <option value="yellow">노랑</option>
          <option value="green">초록</option>
          <option value="blue">파랑</option>
          <option value="purple">보라</option>
          <option value="pink">분홍</option>
        </select>
        <label htmlFor="color">글자색 :</label>
        <select name="color" onChange={(e) => setColor(e.target.value)}>
          <option value="black">검정</option>
          <option value="white">하양</option>
          <option value="red">빨강</option>
          <option value="orange">주황</option>
          <option value="yellow">노랑</option>
          <option value="green">초록</option>
          <option value="blue">파랑</option>
          <option value="purple">보라</option>
          <option value="pink">분홍</option>
        </select>
        <br />
        <label htmlFor="text">내용 :</label>
        <input
          type="text"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <div>
        <img src={src} alt="" />
        <br />
        <span style={{ color, backgroundColor }}>{text}</span>
      </div>
    </div>
  );
}
