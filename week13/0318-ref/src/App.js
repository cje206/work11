import './App.css';
import Ex1 from './Ex1';
import Ex2 from './Ex2';
import RefSample1 from './RefSample1';
import RefSample2 from './RefSample2';
import RefSample3 from './RefSample3';
import RefSample4 from './RefSample4';

function App() {
  return (
    <div className="App">
      <br />
      {/* 함수형 ref 실습 */}
      <Ex2 />
      <br />
      {/* 클래스형 ref 실습 */}
      <hr />
      <Ex1 />
      {/* 클래스형 컴포넌트: ref 사용 1. 콜백함수 */}
      <hr />
      <RefSample1 />

      {/* 클래스형 컴포넌트: ref 사용 2. createRef() */}
      <hr />
      <RefSample2 />

      {/* 함수 컴포넌트: useRef()로 DOM 요소에 접근 */}
      <hr />
      <RefSample3 />

      {/* 함수 컴포넌트: useRef()를 로컬 변수로 이용 */}
      <hr />
      <RefSample4 />
    </div>
  );
}

export default App;
