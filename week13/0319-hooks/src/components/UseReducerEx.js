import React, { useReducer } from 'react';
const initState = { value: 0 };
const reducer = (prevState, action) => {
  console.log('prevState', prevState);
  console.log('action', action); // INCREMENT => {type: 'INCREMENT}

  switch (action.type) {
    case 'INCREMENT':
      return { value: prevState.value + 1 };
    case 'DECREMENT':
      return { value: prevState.value - 1 };
    case 'RESET':
      return { value: initState.value };

    default:
      break;
  }
};

export default function UseReducerEx() {
  // reducer: state 상태를 업데이트하는 함수
  // dispatch: 액션을 발생시키는 함수 (액션: state가 어떻게 변경되어야 하는지에 대한 힌트)
  // state: 현재 상태
  // initState: 초기값
  // useReducer:
  const [state, dispatch] = useReducer(reducer, initState);
  const increment = () => dispatch({ type: 'INCREMENT' });
  const decrement = () => dispatch({ type: 'DECREMENT' });
  const reset = () => dispatch({ type: 'RESET' });

  return (
    <div>
      <h1>UseReducer Ex</h1>
      <h2>{state.value}</h2>
      <button onClick={increment}>plus</button>
      <button onClick={decrement}>minus</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
