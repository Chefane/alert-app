import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
//importing pages that are going to be used
import DisplayRegisteredUsers from './DisplayRegisteredUsers';
import DisplayRegisteredCars from './DisplayRegisteredCars';
import DisplayReportedCars from './DisplayReportedCars';
import logo from './images/carAlert.png'; 

//Below is the administrator dashboard
function AdminDashboard() {
  return (
    <div>
    <h1 style={{background: 'blue', textAlign: 'center'}}>Administrator Panel</h1>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="AdminDashboard">Admin Menu</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="DisplayRegisteredUsers">View Registered Users</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="DisplayRegisteredCars">View Registered Cars</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="DisplayReportedCars">View Reported Cars</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="DisplayRegisteredUsers">
              <DisplayRegisteredUsers />
            </Tab.Pane>

            <Tab.Pane eventKey="DisplayRegisteredCars">
              <DisplayRegisteredCars />
            </Tab.Pane>

            <Tab.Pane eventKey="DisplayReportedCars">
              <DisplayReportedCars />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    <img src={logo}  height="10%" width="30%" alt="Our Logo" />
    </div>
  );
}
export default AdminDashboard;