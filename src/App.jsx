import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import GetStartedPage from './components/GetStartedPage';
import Purchase from './components/Purchase';

const ScrollToElement = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollToHero) {
      document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    }
    if (location.state && location.state.scrollToId) {
      document.getElementById(location.state.scrollToId).scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return null;
};

const App = () => (
  <Router>
    <ScrollToElement />
    <div className="bg-primary w-full overflow-hidden">
      <div className="w-full flex justify-center">
        <div className="w-full">
          <Navbar />
        </div>
      </div>

      <Routes>
        <Route path="/" element={
          <>
            <div className={`bg-primary ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                <Hero />
              </div>
            </div>
            
            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
                <Stats />
                <Business />
                <Billing />
                <CardDeal />
                <Testimonials />
                <Clients />
                <CTA />
                <Footer />
              </div>
            </div>
          </>
        } />
        <Route path="/get-started" element={<GetStartedPage />} />
        <Route path="/purchase" element={<Purchase />} />
      </Routes>
    </div>
  </Router>
);

export default App;
