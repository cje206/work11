import { useState } from 'react';

const SayFunction = () => {
  const [message, setMessage] = useState('welcome!');
  console.log(useState('welcome!')); // ['welcome!', ƒ]
  // 'welcome!' : message 변수의 초기값으로 들어감
  // useState(초기값) = 숫자, 문자, 배열 등등 자유롭게 넣을 수 있음
  // f: setMessage() - message state 값을 바꾸는 함수

  const onClickEnter = () => {
    setMessage('안녕하세요~');
  };

  const onClickLeave = () => {
    setMessage('안녕히가세요~');
  };

  return (
    <div>
      {/* 리액트에서는 괄호 없음!
					- HTML: onclick ="onClickEnter()" -> 문자열 형식으로 호출문 등록
					- Js: addEventListner("click", onClickEnter) -> 괄호 없이 함수를 바로 실행하지 않고
								클릭이 발생했을 때 함수 호출되도록
					- React: onClick={onClickEnter} -> 괄호 X 함수 바로 실행 X
			*/}
      <h1>{message}</h1>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
    </div>
  );
};

export default SayFunction;
