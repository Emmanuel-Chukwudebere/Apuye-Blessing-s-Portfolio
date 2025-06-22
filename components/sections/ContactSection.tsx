
import * as React from 'react';
import SectionWrapper from '../SectionWrapper';
import Button from '../Button';
import { 
  CONTACT_TITLE_PRIMARY,
  CONTACT_TITLE_ACCENT,
  CONTACT_TITLE_SECONDARY,
  CONTACT_TITLE_ACCENT_COLOR_CLASS, 
  CONTACT_SUBTITLE,
  WHATSAPP_LINK,
  CONTACT_EMAIL
} from '../../constants';
import { SectionWrapperProps } from '../../types';
import { EmailIcon, WhatsAppIcon } from '../Icons'; // Only needed icons for buttons

const ContactSection: React.FC<Pick<SectionWrapperProps, 'id'>> = ({ id }) => {
  const fullTitle = `${CONTACT_TITLE_PRIMARY} ${CONTACT_TITLE_ACCENT} ${CONTACT_TITLE_SECONDARY}`;
  
  return (
    <SectionWrapper 
        id={id} 
        title={fullTitle}
        titleAccent={CONTACT_TITLE_ACCENT}
        accentColorClassName={CONTACT_TITLE_ACCENT_COLOR_CLASS} 
        subtitle={CONTACT_SUBTITLE}
        className="bg-brand-page-bg" 
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Removed CONTACT_METHODS cards rendering */}
        
        {/* Adjusted CTA button wrapper for responsive width */}
        <div className="flex flex-col sm:flex-row sm:justify-center items-center gap-4 md:gap-6 mb-0"> {/* Removed mb-12 md:mb-16 */}
          <Button 
            href={WHATSAPP_LINK} 
            variant="primary" 
            size="large" 
            className="shadow-soft-lg hover:shadow-lift w-full sm:w-auto justify-center" // w-full for mobile, sm:w-auto for desktop hug
            icon={<WhatsAppIcon className="w-5 h-5"/>}
          >
            WhatsApp Me Now
          </Button>
          <Button 
            href={`mailto:${CONTACT_EMAIL}`} 
            variant="secondary" 
            size="large" 
            className="shadow-soft-lg hover:shadow-lift w-full sm:w-auto justify-center" // w-full for mobile, sm:w-auto for desktop hug
            icon={<EmailIcon className="w-5 h-5"/>}
          >
            Send Email
          </Button>
        </div>
        
        {/* Removed CONTACT_AVAILABILITY_INFO rendering */}
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;