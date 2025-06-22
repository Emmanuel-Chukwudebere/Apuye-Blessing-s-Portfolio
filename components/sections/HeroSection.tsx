import * as React from 'react';
import SectionWrapper from '../SectionWrapper';
import Button from '../Button';
import AnimatedCounter from '../AnimatedCounter';
import { 
  HERO_VISUAL_URL, 
  KEY_METRICS_FLOAT, 
  HERO_TITLE_ACCENT,
  HERO_SUBTITLE,
  HERO_DESCRIPTION,
  WHATSAPP_LINK, 
  CONTACT_EMAIL
} from '../../constants';
import { SectionWrapperProps } from '../../types';
import { EmailIcon, WhatsAppIcon } from '../Icons';

const HeroSection: React.FC<Pick<SectionWrapperProps, 'id'>> = ({ id }) => {
  return (
    <SectionWrapper 
      id={id} 
      className="bg-gradient-to-br from-brand-green-tint-light/30 to-brand-page-bg min-h-screen flex items-center !pt-28 md:!pt-36" 
      containerClassName="container mx-auto max-w-7xl px-5 md:px-30 py-12 md:py-16" 
      hasPattern="hero-grid"
    >
      <div className="grid lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-3 space-y-5 md:space-y-7 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-charcoal leading-tight">
            Hi, I'm <span className="text-brand-emerald">{HERO_TITLE_ACCENT}</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 font-light leading-relaxed">
            {HERO_SUBTITLE}
          </p>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
            {HERO_DESCRIPTION}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 sm:pt-6 justify-center lg:justify-start">
            <Button href={WHATSAPP_LINK} variant="primary" size="large" icon={<WhatsAppIcon className="w-5 h-5"/>} className="w-full sm:w-auto justify-center">
              WhatsApp Me Now
            </Button>
            <Button href={`mailto:${CONTACT_EMAIL}`} variant="secondary" size="large" icon={<EmailIcon className="w-5 h-5"/>} className="w-full sm:w-auto justify-center">
              Send Email
            </Button>
          </div>
        </div>
        
        <div className="lg:col-span-2 flex justify-center lg:justify-end items-center relative mt-10 lg:mt-0">
          <div className="relative w-full max-w-sm md:max-w-md">
            <img 
              src={HERO_VISUAL_URL} 
              alt="Apuye Blessing - Professional Portrait" 
              className="rounded-3xl shadow-xl w-full object-cover aspect-[4/5] transform lg:rotate-3 transition-all duration-500 hover:rotate-0 hover:scale-105 border-4 border-white"
            />
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-brand-emerald/30 rounded-full -z-10 animate-pulse-slow"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-brand-green-tint-medium/50 rounded-2xl -z-10 transform rotate-12 animate-pulse-slower"></div>
          </div>
        </div>
      </div>

      <div className="mt-16 md:mt-24 pt-10 md:pt-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {KEY_METRICS_FLOAT.map((metric) => (
            <div 
              key={metric.id} 
              className="bg-brand-card-bg rounded-2xl p-4 sm:p-5 shadow-soft-md transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-black/5"
            >
              <AnimatedCounter
                targetValue={metric.value}
                textBefore={metric.textBefore}
                textAfterCounter={metric.textAfterCounter}
                textAfterUnit={metric.textAfterUnit}
                valueClassName="text-xl sm:text-2xl font-bold text-brand-emerald block mb-0.5" // Adjusted font size
                labelClassName="text-xs sm:text-sm text-gray-700"
              />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;