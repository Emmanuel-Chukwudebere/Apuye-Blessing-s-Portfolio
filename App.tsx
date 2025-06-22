
import * as React from 'react';
import Header from './components/Header';
import HeroSection from './components/sections/HeroSection';
import AboutMeSection from './components/sections/AboutMeSection';
import ServicesSection from './components/sections/ServicesSection';
import PortfolioSection from './components/sections/PortfolioSection';
import WhyChooseMeSection from './components/sections/WhyChooseMeSection';
import TestimonialSection from './components/sections/TestimonialSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/Footer';
import { NAV_LINKS } from './constants'; 

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-brand-page-bg">
      <Header />
      <main className="flex-grow">
        <HeroSection id="hero" /> {/* Implicit "home" target for logo */}
        <AboutMeSection id={NAV_LINKS.find(link => link.label === 'About')?.id || 'about'} />
        <ServicesSection id={NAV_LINKS.find(link => link.label === 'Services')?.id || 'services'}/>
        <PortfolioSection id={NAV_LINKS.find(link => link.label === 'Portfolio')?.id || 'portfolio'}/>
        <WhyChooseMeSection id="why-me"/> {/* Not in primary nav, but can be linked to */}
        <TestimonialSection id="testimonials" /> {/* Not in primary nav */}
        <ContactSection id={NAV_LINKS.find(link => link.label === 'Contact')?.id || 'contact'}/>
      </main>
      <Footer />
    </div>
  );
};

export default App;