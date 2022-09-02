
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function DisplayRegisteredUsers() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Village</th>
          <th>Contact</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Teboho</td>
          <td>Toka</td>
          <td>Hae</td>
          <td>57123456</td>
          <td>teboho@gmail.com</td>
          <Button variant="primary">Delete</Button>{' '}
        </tr>
      </tbody>
    </Table>
  );
}

export default DisplayRegisteredUsers;