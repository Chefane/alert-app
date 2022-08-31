import React from "react";
import Container from 'react-bootstrap/Container';
import Register from "./Register";
import Login from "./Login";
import Contactus from "./Contactus";
import Aboutus from "./Aboutus";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";





function Header () {
  
  return (

    <Router>
      <div>
    
        <Navbar  style={{backgroundColor:'blue', color:'white'}} expand="lg">
        <Container>
          <Navbar.Brand style={{ color:'white'}} as={Link} to={"/Home"}>Alert App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link  style={{ color:'white'}} as={Link} to={"/Register"}>Register</Nav.Link>
              <Nav.Link  style={{ color:'white'}} as={Link} to={"/Login"}>Login</Nav.Link>
              <Nav.Link style={{ color:'white'}} as={Link} to={"/Aboutus"}>About us</Nav.Link>
              <Nav.Link  style={{ color:'white'}}  as={Link} to={"/Contactus"}>Contact us</Nav.Link>  
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
      <div>
        <Routes>
          <Route path="/Home" element={<Home/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Aboutus" element={<Aboutus/>} />
          <Route path="/Contactus" element={<Contactus/>} />
        </Routes>
      </div>
      
    </Router>
  



  );
}

export default Header;