import React, { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';
import Languages from './Languages';
import Contact from './Contact';
import Footer from './Footer';
import './CVWebsite.css';

const CVWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="cv-website">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default CVWebsite;