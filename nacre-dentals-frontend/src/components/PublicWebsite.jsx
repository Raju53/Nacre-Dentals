import React, { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Services from './Services';
import Gallery from './Gallery';
import Doctors from './Doctors';
import About from './About';
import Testimonials from './Testimonials';
import BookingForm from './BookingForm';
import Footer from './Footer';

export default function PublicWebsite({ API_URL }) {
  const [activeSection, setActiveSection] = useState('home');

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <>
      <Navbar activeSection={activeSection} scrollTo={scrollTo} />
      <main>
        <Hero scrollTo={scrollTo} />
        <Services />
        <Gallery />
        <Doctors />
        <About />
        <Testimonials />
        <BookingForm API_URL={API_URL} />
      </main>
      <Footer />
    </>
  );
}