import * as React from 'react';
import SectionWrapper from '../SectionWrapper';
import { SERVICES_DATA, SERVICES_TITLE_ACCENT, SERVICES_SUBTITLE } from '../../constants';
import { SectionWrapperProps, Service } from '../../types';
import { ShieldCheckIcon, ChartBarIcon, CogIcon, GlobeAltIcon } from '../Icons'; 

const serviceIconMap: { [key: string]: React.FC<{className?: string}> } = {
    'ShieldCheckIcon': ShieldCheckIcon,
    'ChartBarIcon': ChartBarIcon,
    'CogIcon': CogIcon,
    'GlobeAltIcon': GlobeAltIcon,
};

const ServicesSection: React.FC<Pick<SectionWrapperProps, 'id'>> = ({ id }) => {
  return (
    <SectionWrapper 
        id={id} 
        title={`How I ${SERVICES_TITLE_ACCENT} Your Business`}
        titleAccent={SERVICES_TITLE_ACCENT}
        subtitle={SERVICES_SUBTITLE}
        className="bg-gradient-to-b from-brand-page-bg via-brand-card-bg/30 to-brand-page-bg"
    >
      {/* Updated to 2x2 grid on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
        {SERVICES_DATA.map((service: Service) => {
          const IconComponent = serviceIconMap[service.icon];
          const iconContent = IconComponent 
                                ? <IconComponent className="w-7 h-7 text-brand-emerald" /> // Adjusted icon size
                                : <span className="text-2xl">{service.icon}</span>;
          
          return (
            <div 
              key={service.id} 
              className="group bg-brand-card-bg rounded-3xl p-6 md:p-8 shadow-soft-lg hover:shadow-lift transition-all duration-300 transform hover:-translate-y-2 hover:scale-103 relative overflow-hidden border border-black/5"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-emerald/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 bg-brand-emerald/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-brand-emerald/20 transition-colors duration-300">
                  {iconContent}
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-brand-charcoal mb-3">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-5">{service.description}</p>
                
                {/* Proven Impact Container - Visual styling removed from this div */}
                <div className="mt-auto pt-2"> {/* Added pt-2 for spacing after removing container padding */}
                  <div className="text-xs font-semibold text-brand-emerald uppercase tracking-wider mb-0.5">Proven Impact:</div>
                  <div className="text-sm text-brand-charcoal/80 leading-snug">{service.impact}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default ServicesSection;