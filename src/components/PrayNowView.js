import Header from './Header.js';
import NovenasList from './NovenasList.js';
import { Link } from 'react-router-dom';
import { novenas } from './data/SummerNovenas23.js';
import Accordian from 'react-bootstrap/Accordion';

export default function PrayNowView() {
  return (
    <>
      <Header />
      <Accordian>
        <NovenasList data={novenas} />
      </Accordian>
      <Link to="/">Home</Link>
    </>
  );
}