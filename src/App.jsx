import React from 'react';
import Header from './components/Header';
import './index.css';
import About from './components/About';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Career from './pages/Career';

function App() {
  const isCareer = typeof window !== 'undefined' && window.location.pathname === '/career';
  return (
    <div className="index-page">
      <Header />
      <main className="main">
        {isCareer ? (
          <Career />
        ) : (
          <>
            <Hero />
            <Services />
            <About />
            <Skills />
            <Portfolio />
            <Testimonials />
            <Faq />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
