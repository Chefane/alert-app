import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import logo from './images/carAlert.png'; 

import CarDetails from './CarDetails';
import ReportCar from './ReportCar';


function UserDashboard() {
  return (
    <div>
    <h1 style={{background: 'blue', textAlign: 'center'}}>User Panel</h1>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="UserDashboard">User Menu</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="CarDetails">Register Car</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="ReportCar">Report Car</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="CarDetails">
              <CarDetails />
            </Tab.Pane>
            <Tab.Pane eventKey="ReportCar">
              <ReportCar />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    <img src={logo}  height="10%" width="30%" alt="Our Logo" />
    </div>
  );
}

export default UserDashboard;
