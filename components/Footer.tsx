
import * as React from 'react';
import { SOCIAL_LINKS, FOOTER_COPYRIGHT_NAME, FOOTER_TAGLINE, NAV_LINKS, FOOTER_LOGO_TEXT } from '../constants';
import { EmailIcon, WhatsAppIcon, LinkedInIcon } from './Icons'; 
import { ContactLink } from '../types';

const iconComponentsMap: { [key: string]: React.FC<{ className?: string }> } = {
    EmailIcon: EmailIcon,
    WhatsAppIcon: WhatsAppIcon,
    LinkedInIcon: LinkedInIcon,
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-page-bg text-brand-charcoal border-t border-black/5">
      <div className="container mx-auto max-w-7xl px-5 md:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          
          <div>
            <a href="#hero" className="text-xl md:text-2xl font-semibold text-brand-emerald hover:opacity-80 transition-opacity">
              {FOOTER_LOGO_TEXT}
            </a>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              {FOOTER_TAGLINE}
            </p>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 md:col-span-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="font-medium text-gray-600 hover:text-brand-emerald transition-colors text-xs sm:text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex space-x-5 justify-center md:justify-end">
            {SOCIAL_LINKS.map((link: ContactLink) => {
                const IconComponent = link.icon && typeof link.icon === 'string' ? iconComponentsMap[link.icon] : null;
                return (
                    <a 
                        key={link.type} 
                        href={link.href} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label={link.ariaLabel}
                        className="text-gray-500 hover:text-brand-emerald transition-colors duration-300"
                    >
                        {IconComponent ? <IconComponent className="w-5 h-5" /> : link.text}
                    </a>
                );
            })}
          </div>
        </div>
        
        <div className="mt-10 pt-8 border-t border-black/5 text-center">
          <p className="text-xs sm:text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {FOOTER_COPYRIGHT_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;