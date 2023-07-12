import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function HomeHeader() {
  return (
    <>
      <h1>Novena</h1>
      <p>A Saint Supplement</p>
      <Button variant="primary">
        <Link to="/praynow">Pray Now</Link>
      </Button>
    </>
  )
}