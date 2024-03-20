import './App.css';
import Ex1 from './components/Ex1';
import Faq from './components/Faq';
import Form from './components/Form';
import UseCallbackEx from './components/UseCallbackEx';
import UseMemoEx from './components/UseMemoEx';
import UseReducerEx from './components/UseReducerEx';

function App() {
  return (
    <div className="App">
      <Ex1 />
      <hr />
      <Form />
      <hr />
      <UseMemoEx />
      <hr />
      <UseCallbackEx postId={9} />
      <hr />
      <UseReducerEx />
      <hr />
      <Faq />
      <hr />
    </div>
  );
}

export default App;
