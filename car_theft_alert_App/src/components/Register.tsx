import Button from 'react-bootstrap/Button';
import '../App.css';
import Form from 'react-bootstrap/Form';


//Below is Register component that allow users to create their accounts
function Register() {
    return (
        <div>
         <h2>Create Account</h2>
        <Form>
         <img src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="profile-img"
        className="profile-img-card"/>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" required />
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPSurname">
            <Form.Label>Surname</Form.Label>
            <Form.Control type="text" placeholder="Enter Surname" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicVillage">
            <Form.Label>Village</Form.Label>
            <Form.Control type="text" placeholder="Enter Village" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" placeholder="Enter Phone Number" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Password" required />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
        </div>
    )
}
export default Register;