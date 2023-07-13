import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function HomeHeader() {
  return (
    <div className="text-center ">
      <p className="mt-5 align-center">
        This app is a helper for users of The Saintmaker planner, providing the full text of novenas suggested in the seasonal prayer guide. 
      </p>
      <p className="mt-5 mb-5 align-center">
        For more information about The Saintmaker, visit <a href="https://www.thesaintmaker.com/"> www.thesaintmaker.com</a>
      </p>
      <Link to="/praynow">
        <Button className="btn-lg" variant="primary">
          Pray Now
        </Button>
      </Link>
    </div>
  );
}