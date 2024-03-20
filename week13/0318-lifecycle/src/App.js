import './App.css';
import Ex1 from './Ex1';
import LifeCycleClass from './LifeCycleClass';
import LifeCycleFunction from './LifeCycleFunction';
import PostList from './PostList';

function App() {
  return (
    <div className="App">
      <PostList />
      <hr />
      <Ex1 />
      <hr />
      <LifeCycleClass />
      <hr />
      <LifeCycleFunction />
    </div>
  );
}

export default App;
