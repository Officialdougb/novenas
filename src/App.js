import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Footer from './components/Footer';
import PrayNowView from './components/PrayNowView';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/praynow" element={<PrayNowView />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}