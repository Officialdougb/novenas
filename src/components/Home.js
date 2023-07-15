import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function Home(props) {
  return (
    <Container className="text-center bg-danger h-">
      <Row>
        <h1 style={{fontFamily: props.latoFont}}>
          NOVENAS
        </h1>
        <p style={{ fontFamily: props.latoFont }}>A Saintmaker User Resource</p>
      </Row>
      <Row>
        <p className="mt-5 align-center">
          This app is a helper for users of The Saintmaker planner, providing the full text of novenas suggested in the seasonal prayer guide. 
        </p>
        <p className="mt-5 mb-5 align-center">
          For more information about The Saintmaker, visit <a href="https://www.thesaintmaker.com/"> www.thesaintmaker.com</a>
        </p>
      </Row>
      <Row>
        <Link to="/praynow">
          <Button className="btn-lg" variant="primary">
            Pray Now
          </Button>
        </Link>
      </Row>
    </Container>
  );
}