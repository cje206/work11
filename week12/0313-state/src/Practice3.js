import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Practice3 extends Component {
  render() {
    const { text, valid } = this.props;
    return (
      <div>
        <p>{text}</p>
        <button onClick={valid}>버튼</button>
      </div>
    );
  }
}

Practice3.defaultProps = {
  text: '이건 기본 text props입니다.',
};

Practice3.propTypes = {
  text: PropTypes.string.isRequired,
};
