# useState vs useReducer vs react-redux

- 공통점 : 상태관리를 위해 사용한다
- useState, useReducer : 리액트 기본 제공 기능
- react-redux : 외부 라이브러리

## useState

- 선언된 컴포넌트 안에서만 상태관리 가능
- 독립적인 상태값을 관리할 때 사용함

## useReducer

- state의 형태가 복잡할 때 주로 사용
- 여러 상태값이 서로 의존성을 갖고 있을 때 적합
- 업데이트 로직을 컴포넌트 외부로 분리하여 가독성 향상됨
- 용어 정리
  - reducer <br>
    state를 업데이트하는 함수
  - dispatch <br>
    액션을 발생시키는 함수
  - action <br>
    state가 어떻게 변경되어야하는지에 대한 힌트
  - state <br>
    상태

## react-redux

- 외부 상태관리 라이브러리
- 전역 상태관리가 가능해짐에 따라 props drilling을 해결할 수 있음
- 구조가 복잡한 상태관리에 효과적으로 사용됨
- 용어 정리
  - 기본적으로 useReducer에서 사용하는 용어 뜻과 동일함
    <br>
  - store <br>
    전역 상태를 관리하는 공간
  - useSelector <br>
    store의 상태를 조회하는 Hook
  - useDispatch <br>
    액션 생성 Hook, 액션과 변경할 내용을 넘겨줄 수 있다
