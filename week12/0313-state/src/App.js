import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import SayFunction from './SayFunction';
import Practice3 from './Practice3';
import State1 from './State1';
import State2 from './State2';

function App() {
  const valid = () => {
    console.log('콘솔 띄우기 성공');
  };
  return (
    <div className="App">
      <State2 />

      <hr />
      <State1 />

      <hr />
      <Practice3 valid={valid} />

      <hr />
      <Counter />

      <hr />
      <SayFunction />
    </div>
  );
}

export default App;
