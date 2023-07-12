import { Link } from 'react-router-dom';

export default function HomeHeader() {
  return (
    <>
      <h1>Novena</h1>
      <p>A Saint Supplement</p>
      <Link to="/praynow">Pray Now</Link>
    </>
  )
}