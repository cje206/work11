import grass from './grass.png';
import './Practice.css';

function Practice() {
  return (
    <div className="main">
      <div className="circle circle1">
        <div className="eye-white">
          <div className="eye-black"></div>
        </div>
      </div>
      <div className="circle circle2"></div>
      <div className="circle circle3"></div>
      <div className="circle circle4"></div>
      <div className="circle circle5"></div>
      <img className="grass" src={grass} alt="grass" />
    </div>
  );
}

export default Practice;
