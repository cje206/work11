import logo from './logo.svg';
import './App.css';
import FunctionComponent from './FunctionComponent';
import ClassComponent from './ClassComponent';
import Button from './Button';
import Practice from './Practice';
import Practice2 from './Practice2';
import Practice3 from './Practice3';

function App() {
  const name = '코딩온';
  const book = {
    title: '나의 하루는 4시 30분에 시작된다',
    author: '김유진',
    price: '13,500원',
    type: '자기계발서',
  };
  return (
    <div className="App">
      <FunctionComponent name={name} time="14시" />
      <FunctionComponent time="14시" />
      <FunctionComponent time="14시">자식 내용</FunctionComponent>
      <FunctionComponent name={[1, 2, 3]} time="14시"></FunctionComponent>

      {/* 함수형과 클래스형 컴포넌트 중복 사용 시 prop-types 하나만 뜨는 경우 발생 */}
      <hr />
      {/* <ClassComponent name={name}></ClassComponent> */}

      <hr />
      <Button link="https://www.google.com">
        <span>Google</span>
      </Button>

      <hr />
      <Practice food="딸기쥬스"></Practice>

      <hr />
      {/* <Practice2
        title="나의 하루는 4시 30분에 시작된다"
        author="김유진"
        price="13,500원"
        type="자기계발서"
      /> */}
      <Practice2 book={book} />
      <hr />
    </div>
  );
}

export default App;
