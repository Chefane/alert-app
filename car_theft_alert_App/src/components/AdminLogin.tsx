import Button from 'react-bootstrap/Button';
import '../App.css';
import Form from 'react-bootstrap/Form';

function AdminLogin() {
  return (
    <div>
    <h2>Admin Login</h2>
    <Form>
     <img src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="profile-img"
    className="profile-img-card"/>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required />
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
  );
}

export default AdminLogin;