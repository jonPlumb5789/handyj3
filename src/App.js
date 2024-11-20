import React from 'react';
import { Element } from 'react-scroll';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import GetInTouch from './components/GetInTouch';
import ContactInformation from './components/ContactInformation';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Element name="hero"><HeroSection /></Element>
      <Element name="about"><AboutSection /></Element>
      <Element name="services"><ServicesSection /></Element>
      <Element name="get-in-touch"><GetInTouch /></Element> {/* Updated */}
      <Element name="contact-info"><ContactInformation /></Element> {/* Updated */}
      <Footer />
    </>
  );
};

export default App;
