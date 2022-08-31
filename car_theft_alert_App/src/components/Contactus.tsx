import  React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import phone from './images/contact.webp'; 

//Below function is going to be used to display our contact details
function Contactus() {
  return (
    <div className="contact">
      <img src={phone}  height="10%" width="30%" alt="Our Logo" />
      <p>You can cntact us here:</p>
      <ul>
        <li>+266 56787521</li>
        <li>+266 59146533</li>
      </ul>
      <p>For formal communication, Emails us here: <br />code.technology@gmail.com</p>
    </div>
  );
}
export default Contactus;

