import { Component } from 'react';

export default class State1 extends Component {
  state = { number: 0 };
  render() {
    const { number } = this.state;
    const plus = () => {
      this.setState({ number: number + 2 });
    };
    const minus = () => {
      this.setState({ number: number - 1 });
    };
    return (
      <div>
        <h1>{number}</h1>
        <button onClick={plus}>+2</button>
        <button onClick={minus}>-1</button>
      </div>
    );
  }
}
