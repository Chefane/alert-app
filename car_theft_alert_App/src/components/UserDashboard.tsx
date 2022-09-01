import React from 'react';
import Nav from 'react-bootstrap/Nav';
import '../App.css';

function UserDashboard(){
    return(
        <div>
            <h1 style={{background: 'blue', textAlign: 'center'}}>User Panel</h1>
            <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/UserDashboard">User Menu</Nav.Link>
            <Nav.Link href="/CarDetails">Register Car</Nav.Link>
            <Nav.Link href="/UserDashboard">Report Car</Nav.Link>
            <Nav.Link href="/UserDashboard">See Advertisements</Nav.Link>
            </Nav>
        </div>
    )
}
export default UserDashboard;