import { useEffect, useState } from 'react';
import { site } from './data/site';
import ConceptBanner from './components/ui/ConceptBanner';
import TopStrip from './components/ui/TopStrip';
import Header from './components/ui/Header';
import FloatingWhatsApp from './components/ui/FloatingWhatsApp';
import MobileActionBar from './components/ui/MobileActionBar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import SymptomFinder from './components/sections/SymptomFinder';
import Treatments from './components/sections/Treatments';
import Doctors from './components/sections/Doctors';
import KidsCorner from './components/sections/KidsCorner';
import FirstVisit from './components/sections/FirstVisit';
import Gallery from './components/sections/Gallery';
import Testimonials from './components/sections/Testimonials';
import Appointment from './components/sections/Appointment';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

export default function App() {
  // Pre-selected treatment for the booking form (set from treatment list / finder)
  const [bookingTreatment, setBookingTreatment] = useState('');

  const bookTreatment = (name) => {
    setBookingTreatment(name);
    document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      }),
      { rootMargin: '0px 0px -8% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:bg-white focus:px-4 focus:py-2">
        Skip to content
      </a>
      {site.isConcept && <ConceptBanner />}
      <TopStrip />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <SymptomFinder onBook={bookTreatment} />
        <Treatments onBook={bookTreatment} />
        <Doctors />
        <KidsCorner />
        <FirstVisit />
        <Gallery />
        {site.showTestimonials && <Testimonials />}
        <Appointment preset={bookingTreatment} />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileActionBar />
    </>
  );
}
