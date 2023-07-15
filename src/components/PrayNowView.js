import NovenasList from './NovenasList.js';
import { Link } from 'react-router-dom';
import { novenas } from './data/SummerNovenas23.js';
import Accordian from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Header from './Header.js';

export default function PrayNowView(props) {
  return (
    <div className="text-center mb-5">
      <Header headerFont={props.headerFont} />
      <Accordian>
        <NovenasList data={novenas} />
      </Accordian>
      <hr />
      <Link to="/">
        <Button variant="primary">
          Home
        </Button>
      </Link>
      <div className="mb-5"></div>
    </div>
  );
}