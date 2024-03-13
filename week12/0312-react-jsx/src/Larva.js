import './Larva.css';
import grass from './grass.png';

function Larva() {
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
      <div className="grass-bg"></div>
      {/* public 이미지 접근 */}
      <img src="/logo192.png" alt="logo"></img>
    </div>
  );
}
export default Larva;
