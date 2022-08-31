import Button from 'react-bootstrap/Button';
import '../App.css';
import Form from 'react-bootstrap/Form';

//Below is the function that allow users to add their car details.
function CarDetails() {
  return (
    <div>
    <h2>Add Your Car Details</h2>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Car Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Car Name" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicmodel">
        <Form.Label>Car model</Form.Label>
        <Form.Control type="text" placeholder="Enter Car model" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPlate">
        <Form.Label>Number Plate</Form.Label>
        <Form.Control type="text" placeholder="Enter Number Plate" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicImage">
        <Form.Label>Car Image</Form.Label>
        <Form.Control type="file" placeholder="Enter Car Image" required  /><button>Upload</button>
        
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Car
      </Button>
    </Form>
    </div>
  );
}
export default CarDetails;