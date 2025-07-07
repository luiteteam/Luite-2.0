import React from 'react';
import Header from './components/Header';
import './index.css';
import About from './components/About';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="index-page">
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Skills />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Services />
        <Faq />
          <Contact />
      </main>
       <Footer />
    </div>
  );
}

export default App;
