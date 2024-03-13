import { Component } from 'react';
import PropTypes from 'prop-types';
// prop-types 라이브러리를 PropTypes 이름으로 임포트(변수화)
// Class형 컴포넌트는 extends Component를 꼭 해야한다
class ClassComponent extends Component {
  // class형 컴포넌트는 render 함수 필수
  render() {
    console.log('props:', this.props);
    const { name } = this.props;
    return (
      <div>
        <h1>Hi {this.props.name}</h1>
        <h1>Hi2 {name}</h1>
      </div>
    );
  }
}
ClassComponent.defaultProps = {
  name: '홍길동',
};
ClassComponent.propTypes = {
  name: PropTypes.string.isRequired,
};
export default ClassComponent;
