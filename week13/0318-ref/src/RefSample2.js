import { Component, createRef } from 'react';

export default class RefSample2 extends Component {
  // createRef를 사용해 만들 때는 컴포넌트 내부에서 변수에 createRef()를 담아주는 것
  myInput = createRef();
  handleFocus = () => {
    // createRef를 이용해 설정한 DOM 요소에 접근하려면 this.myInput.current 이용
    console.log('this.myInput', this.myInput);
    console.log('this.myInput.curren', this.myInput.current);
    this.myInput.current.focus();
  };
  render() {
    return (
      <>
        <p>(클래스형 컴포넌트) 버튼 클릭 시 input에 focus 처리</p>
        <input type="text" ref={this.myInput} />
        <button onClick={this.handleFocus}>focus</button>
      </>
    );
  }
}
