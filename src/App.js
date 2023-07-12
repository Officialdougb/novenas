import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import PrayNowView from './components/PrayNowView';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap';

export default function App() {
  return (
    <Container className="h-100">
      <Row className="text-center">
        <Header />
      </Row>
      <Row className="mb-10">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/praynow" element={<PrayNowView />} />
          </Routes>
        </BrowserRouter>
      </Row>
      <Row className="fixed-bottom">
        <Footer />
      </Row>
    </Container>
  );
}