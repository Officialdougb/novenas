import Header from './Header.js';
import NovenasList from './NovenasList.js';
import { Link } from 'react-router-dom';
import { novenas } from './data/SummerNovenas23.js';

export default function PrayNowView() {
  return (
    <>
      <Header />
      <NovenasList data={novenas} />
      <Link to="/">Home</Link>
    </>
  );
}