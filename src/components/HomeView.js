import Home from './Home';
import Footer from './Footer';
import PrayNowView from './PrayNowView';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function HomeView() {
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