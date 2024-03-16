import './App.css';
import { useState } from 'react';
import Menu from './Menu';

function App() {
  const [list, setList] = useState('');
  const selectFunc = (menu) => {
    list === ''
      ? setList(menu)
      : list.includes(menu)
      ? setList(list)
      : setList(`${list}, ${menu}`);
  };
  const menuList = [];
  // prettier-ignore
  const titleList = ['아메리카노', '카페라떼', '초코라떼', '망고 블렌디드', '딸기 요거트 블렌디드', '유자 블렌디드']
  for (let i = 0; i < 6; i++) {
    menuList.push({
      image: `juice${i + 1}`,
      title: titleList[i],
      price: 4000,
      selectFunc,
    });
  }
  return (
    <div className="App">
      <h1>메뉴판</h1>
      <h3>
        {list === '' ? '원하는 음료를 골라주세요!' : `${list}를 고르셨군요!`}
      </h3>
      <table border="1" cellSpacing="0">
        <thead>
          <tr>
            <th>음료</th>
            <th>음료명</th>
            <th>가격</th>
            <th>선택</th>
          </tr>
        </thead>
        <tbody>
          <Menu info={menuList[0]} />
          <Menu info={menuList[1]} />
          <Menu info={menuList[2]} />
          <Menu info={menuList[3]} />
          <Menu info={menuList[4]} />
          <Menu info={menuList[5]} />
        </tbody>
      </table>
    </div>
  );
}

export default App;
