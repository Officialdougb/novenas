import NovenasList from './NovenasList.js';
import { Link } from 'react-router-dom';
import { novenas } from './data/SummerNovenas23.js';
import Accordian from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

export default function PrayNowView() {
  return (
    <div className="text-center">
      <Accordian>
        <NovenasList data={novenas} />
      </Accordian>
      <hr />
      <Link to="/">
        <Button variant="primary">
          Home
        </Button>
      </Link>
    </div>
  );
}