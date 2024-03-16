import React, { useState } from 'react';
import Select from './Select';
import Text from './Text';

export default function ExamTotal() {
  const [text, setText] = useState('text');
  const fruit = ['fruit', '과일'];
  const bgColor = ['bgColor', '배경색'];
  const color = ['color', '글자색'];
  const memo = ['memo', '내용'];
  const fruitList = [
    ['apple', '사과'],
    ['banana', '바나나'],
    ['peach', '복숭아'],
    ['orange', '오렌지'],
  ];
  const colorList = [
    ['black', '검정'],
    ['white', '하양'],
    ['red', '빨강'],
    ['orange', '주황'],
    ['yellow', '노랑'],
    ['green', '초록'],
    ['blue', '파랑'],
    ['purple', '보라'],
    ['pink', '분홍'],
  ];
  const fruitFunc = (e) => {};
  return (
    <div>
      <Select title={fruit} option={fruitList} func={fruitFunc} />
      <Select title={bgColor} option={colorList} func={fruitFunc} />
      <Select title={fruit} option={colorList} func={fruitFunc} />
      <br />
      <Text title={memo} text={text} />
      <br />
    </div>
  );
}
