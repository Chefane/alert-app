import React from 'react';
import Nav from 'react-bootstrap/Nav';

function AdminDashboard(){
    return(
        <div>
            <h1 style={{background: 'blue', textAlign: 'center'}}>Administrator Panel</h1>
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/AdminDashboard">Admin Menu</Nav.Link>
      <Nav.Link href="/AdminDashboard">View Registered Users</Nav.Link>
      <Nav.Link href="/AdminDashboard">View Registered Cars</Nav.Link>
      <Nav.Link href="/AdminDashboard">View Reported Cars</Nav.Link>
      <Nav.Link href="/AdminDashboard">Advertisement</Nav.Link>
    </Nav>
        </div>
    )
}
export default AdminDashboard;