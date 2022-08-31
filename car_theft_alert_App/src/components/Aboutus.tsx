
import '../App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/Code.jpg'; 

//Below is about us details
function Aboutus() {
  return (
    <div className="about">
                  <img src={logo}  height="10%" width="30%" alt="Our Logo" />
            <p>We focus on development of world-class mobile and web applications</p>
            <p>We are Located at Lesotho, Maseru, Ha Thetsane</p>
    </div>
  );
}

export default Aboutus;
