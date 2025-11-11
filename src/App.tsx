import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { About } from './components/About';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Industries } from './components/Industries';
import { Services } from './components/Services';
import { SpecialOffer } from './components/SpecialOffer';
import { Process } from './components/Process';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Career } from './components/Career';
import { Footer } from './components/Footer';
import { PopupForm } from './components/PopupForm';
import { useState, useEffect } from 'react';

export default function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000); // Show popup after 10 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
      <Navigation />
      <Hero />
      <SpecialOffer />
      <About />
      <WhyChooseUs />
      <Industries />
      <Services />
      <Process />
      <FAQ />
      <Contact />
      <Career />
      <Footer />
      <PopupForm isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  );
}