import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Footer from './components/Footer';
import PrayNowView from './components/PrayNowView';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap';

export default function App() {
  const headerFont = "font-family: 'Lato', sans-serif;";

  return (
    <Container className="h-100">
      <Row className="mb-10">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home latoFont={headerFont} />} />
            <Route path="/praynow" element={<PrayNowView latoFont={headerFont} />} />
          </Routes>
        </BrowserRouter>
      </Row>
      <Row className="fixed-bottom">
        <Footer />
      </Row>
    </Container>
  );
}