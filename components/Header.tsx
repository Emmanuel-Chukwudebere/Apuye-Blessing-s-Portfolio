import * as React from 'react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NAV_LINKS, HEADER_CTA_TEXT, HEADER_LOGO_TEXT, HEADER_RESUME_LINK, HEADER_RESUME_TEXT } from '../constants';
import Button from './Button';
import { MenuIcon, XIcon } from './Icons'; 

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Helper to handle nav link clicks
  const handleNavClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    closeMobileMenu();
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    closeMobileMenu();
  };

  const contactLink = NAV_LINKS.find(link => link.label.toLowerCase() === 'contact');

  return (
    <>
      <header 
        className="fixed top-4 inset-x-0 z-50 mx-auto max-w-7xl px-5 md:px-30"
      >
        <div className="flex items-center justify-between h-20 sm:h-22 bg-white/85 backdrop-blur-lg rounded-full shadow-soft-lg border border-white/20 px-6 md:px-8">
          <Link to="/" className="text-xl md:text-2xl font-semibold text-brand-emerald hover:opacity-80 transition-opacity" onClick={handleLogoClick}>
            {HEADER_LOGO_TEXT}
          </Link>
          <nav className="hidden lg:flex space-x-5 items-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={handleNavClick(link.id)}
                className="font-medium text-brand-charcoal hover:text-brand-emerald transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center space-x-3">
            <Button 
              href={contactLink ? `#${contactLink.id}` : '#contact'} 
              variant="primary" 
              size="small"
              onClick={() => handleNavClick(contactLink ? contactLink.id : 'contact')}
            >
              {HEADER_CTA_TEXT}
            </Button>
            <a 
              href="https://drive.google.com/your-resume-link" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                variant="secondary" 
                size="small"
              >
                {HEADER_RESUME_TEXT}
              </Button>
            </a>
          </div>
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              className="text-brand-charcoal hover:text-brand-emerald p-2 -mr-2"
            >
              {isMobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>
      {isMobileMenuOpen && (
        <div 
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-md lg:hidden"
            onClick={closeMobileMenu}
        >
            <div 
                className="fixed top-32 left-4 right-4 bg-white rounded-3xl shadow-2xl p-6 transform transition-all duration-300 ease-out origin-top border border-gray-200"
                onClick={(e) => e.stopPropagation()} 
            >
              <nav className="flex flex-col items-center space-y-3">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={handleNavClick(link.id)}
                    className="font-medium text-brand-charcoal hover:text-brand-emerald py-2 text-md w-full text-center hover:bg-brand-green-tint-light rounded-md transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a 
                  href="https://drive.google.com/your-resume-link" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full"
                >
                  <Button 
                    variant="outline" 
                    size="medium" 
                    className="mt-3 w-full"
                    onClick={closeMobileMenu}
                  >
                    {HEADER_RESUME_TEXT}
                  </Button>
                </a>
                <Button 
                  href={contactLink ? `#${contactLink.id}` : '#contact'} 
                  variant="primary" 
                  size="medium" 
                  className="mt-3 w-full"
                  onClick={() => handleNavClick(contactLink ? contactLink.id : 'contact')}
                >
                  {HEADER_CTA_TEXT}
                </Button>
              </nav>
            </div>
        </div>
      )}
    </>
  );
};

export default Header;