import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutMeSection from './components/sections/AboutMeSection';
import ServicesSection from './components/sections/ServicesSection';
import PortfolioSection from './components/sections/PortfolioSection';
import WhyChooseMeSection from './components/sections/WhyChooseMeSection';
import TestimonialSection from './components/sections/TestimonialSection';
import ContactSection from './components/sections/ContactSection';
import CaseStudyPage from './components/pages/CaseStudyPage';

const HomePage = () => (
  <>
    <HeroSection />
    <AboutMeSection />
    <ServicesSection />
    <PortfolioSection />
    <WhyChooseMeSection />
    <TestimonialSection />
    <ContactSection />
  </>
);

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio/:id" element={<CaseStudyPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;