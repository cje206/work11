import './App.css';
import ClassBind from './ClassBind';
import Counter from './Counter';
import SyntheticEvent from './SyntheticEvent';
import Ex3 from './components/ex/Ex3';
import Ex4 from './components/ex/Ex4';
import HandlerEx from './components/ex/HandlerEx';
import HandlerEx2 from './components/ex/HandlerEx2';
import HandlerEx3 from './components/ex/HandlerEx3';
import HandlerEx4 from './components/ex/HandlerEx4';
import ExAll from './exAll/ExAll';
import ExamTotal from './exam/ExamTotal';

function App() {
  return (
    <div className="App">
      <ExAll />
      <hr />
      <ExamTotal />
      <hr />
      <SyntheticEvent />

      <hr />
      <ClassBind />

      <hr />
      <Counter />

      <hr />
      <HandlerEx />

      <hr />
      <HandlerEx2 />

      <hr />
      <Ex3 />

      <hr />
      <HandlerEx4 />
    </div>
  );
}

export default App;
