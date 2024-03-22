import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import counterReducer from './store/counterReducer';
import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from './store';
import App2 from './App2';
import App3 from './App3';
// import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';
import { composeWithDevTools } from '@redux-devtools/extension';
import Ex1 from './Ex1';
import Bank from './Bank';

const root = ReactDOM.createRoot(document.getElementById('root'));
// store 정의: 전역 상태를 관리하는 공간(상태,리듀서 두 가지 존재) (하나의 프로젝트에 하나만!)
// const store = createStore(counterReducer); // deprecated

// composeWithDevTools: 확장프로그램 사용하기 위해 추가(없어도 무관함)
const store = configureStore({ reducer: rootReducer }, composeWithDevTools());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      {/* <App2 /> */}
      {/* <App3 /> */}
      {/* <Ex1 /> */}
      <Bank />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();