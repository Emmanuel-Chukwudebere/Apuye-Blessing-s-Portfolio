import * as React from 'react';
import { useState } from 'react';
import { NAV_LINKS, HEADER_CTA_TEXT, HEADER_LOGO_TEXT, HEADER_RESUME_LINK, HEADER_RESUME_TEXT } from '../constants';
import Button from './Button';
import { MenuIcon, XIcon } from './Icons'; 

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const contactLink = NAV_LINKS.find(link => link.label.toLowerCase() === 'contact');

  return (
    <>
      <header 
        className="fixed top-4 inset-x-0 z-50 mx-auto max-w-7xl px-5 md:px-30" // Updated: 20px mobile, 120px desktop
      >
        <div className="flex items-center justify-between h-20 sm:h-22 bg-white/85 backdrop-blur-lg rounded-full shadow-soft-lg border border-white/20 px-6 md:px-8">
          <a href="#hero" className="text-xl md:text-2xl font-semibold text-brand-emerald hover:opacity-80 transition-opacity" onClick={closeMobileMenu}>
            {HEADER_LOGO_TEXT}
          </a>
          
          <nav className="hidden lg:flex space-x-5 items-center"> {/* Reduced space-x-6 to space-x-5 */}
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={closeMobileMenu}
                className="font-medium text-brand-charcoal hover:text-brand-emerald transition-colors text-sm" // Slightly smaller font
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
            >
              {HEADER_CTA_TEXT}
            </Button>
            <Button 
                href={HEADER_RESUME_LINK} 
                variant="secondary" 
                size="small"      
                target="_blank"
             >
                {HEADER_RESUME_TEXT}
            </Button>
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
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-md lg:hidden" // Increased blur
            onClick={closeMobileMenu}
        >
            <div 
                className="fixed top-32 left-4 right-4 bg-white rounded-3xl shadow-2xl p-6 transform transition-all duration-300 ease-out origin-top border border-gray-200"
                onClick={(e) => e.stopPropagation()} 
            >
              <nav className="flex flex-col items-center space-y-3"> {/* Reduced space-y-4 to space-y-3 */}
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={closeMobileMenu}
                    className="font-medium text-brand-charcoal hover:text-brand-emerald py-2 text-md w-full text-center hover:bg-brand-green-tint-light rounded-md transition-colors" // text-lg to text-md
                  >
                    {link.label}
                  </a>
                ))}
                <Button 
                    href={HEADER_RESUME_LINK} 
                    variant="outline" 
                    size="medium" 
                    className="mt-3 w-full" // mt-5 to mt-3
                    target="_blank"
                    onClick={closeMobileMenu}
                >
                  {HEADER_RESUME_TEXT}
                </Button>
                <Button 
                    href={contactLink ? `#${contactLink.id}` : '#contact'} 
                    variant="primary" 
                    size="medium" 
                    className="mt-3 w-full" // mt-5 to mt-3
                    onClick={closeMobileMenu}
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