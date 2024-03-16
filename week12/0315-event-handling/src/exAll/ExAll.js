import { useState } from 'react';
import Select from './Select';
import Result from './Result';
import Input from './Input';

export default function ExAll() {
  // 상태
  const [data, setData] = useState({
    fruit: 'apple',
    background: 'black',
    color: 'white',
    content: 'text',
  });
  // 아래처럼 따로 관리해도 되지만, 위 처럼 한 번에 처리 할 수도 있음
  // const [fruit, setFruit] = useState('apple');
  // const [background, setBackground] = useState('black');
  // const [color, setColor] = useState('white');
  // const [content, setContent] = useState('text');

  return (
    <>
      <Select setData={setData} />
      <Input setData={setData} />
      <Result data={data} />
    </>
  );
}
