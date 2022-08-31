
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import alert from './images/alert.png';
import {useNavigate} from 'react-router-dom';


function Home() {
  const navigate = useNavigate();

  const navigateToAboutus = () => {
    navigate('/Aboutus');
  };

  return (
    <div className="App">
          <Card style={{width:'50rem', height: '30rem', marginLeft:'280px', marginTop:'80px'}}>
      <Card.Body>
        <Card.Title style={{fontSize: '2rem' }}>Welcome to Car Theft Alert App</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">The Right Platform For Searching For Your Stolen Vehicle! Let Us Help You!</Card.Subtitle>
        <Card.Text>
         <img src={alert} alt="Logo" style={{height: '15rem', width:'20rem'}} />
        </Card.Text>
      
        <Button variant="primary" onClick={navigateToAboutus}> More About Car Theft Alert App</Button>

      </Card.Body>
    </Card>
    </div>
  );
}

export default Home;