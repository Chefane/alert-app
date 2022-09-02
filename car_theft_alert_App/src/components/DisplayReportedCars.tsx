import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function DisplayReportedCars() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Car Name</th>
          <th>Model</th>
          <th>Plate NO</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>BMW</td>
          <td>New model</td>
          <td>AZ 250</td>
          <td>Picture</td>
        </tr>
      </tbody>
    </Table>
  );
}
export default DisplayReportedCars;