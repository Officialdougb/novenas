import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function HomeHeader() {
  return (
    <div className="text-center">
      <Link to="/praynow">
        <Button variant="primary">
          Pray Now
        </Button>
      </Link>
    </div>
  );
}