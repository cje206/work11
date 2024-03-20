import CssModuleComponent from './CssModuleComponent';
import Ex1 from './Ex1';
import Ex2 from './Ex2';
import PostList from './PostList';
import SassComponent from './SassComponent';
import StyledComponent from './StyledComponent';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <PostList />
      <Ex2 />
      <h1>React Styling</h1>
      <CssModuleComponent />
      <SassComponent />
      <StyledComponent />
      <Ex1 />
    </div>
  );
}

export default App;
