import * as React from 'react';
import SectionWrapper from '../SectionWrapper';
import { DIFFERENTIATORS, WHYCHOOSEME_VISUAL_URL, WHYCHOOSEME_TITLE, WHYCHOOSEME_SUBTITLE } from '../../constants';
import { CheckIcon, LightbulbIcon, ChartBarIcon, HandRaisedIcon, GlobeAltIcon, ShieldCheckIcon, AcademicCapIcon } from '../Icons'; 
import { SectionWrapperProps, Differentiator } from '../../types';

const differentiatorIconMap: { [key: string]: React.FC<{className?: string}> } = {
    "LightbulbIcon": LightbulbIcon,
    "ChartBarIcon": ChartBarIcon,
    "HandRaisedIcon": HandRaisedIcon,
    "GlobeAltIcon": GlobeAltIcon,
    "ShieldCheckIcon": ShieldCheckIcon,
    "AcademicCapIcon": AcademicCapIcon,
    "DefaultCheck": CheckIcon, 
};


const WhyChooseMeSection: React.FC<Pick<SectionWrapperProps, 'id'>> = ({ id }) => {
  return (
    <SectionWrapper 
        id={id} 
        title={WHYCHOOSEME_TITLE}
        subtitle={WHYCHOOSEME_SUBTITLE}
        className="bg-gradient-to-b from-brand-page-bg to-brand-card-bg/50" 
        containerClassName="container mx-auto max-w-7xl px-5 md:px-30 py-12 md:py-20"
    >
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="relative group order-last md:order-first">
          <img 
            src={WHYCHOOSEME_VISUAL_URL} 
            alt="Apuye Blessing's unique value proposition" 
            className="rounded-3xl shadow-xl w-full object-cover aspect-square md:aspect-[4/3] transform transition-all duration-500 group-hover:scale-103 border-4 border-white" 
          />
           <div className="absolute -bottom-4 -right-4 w-2/5 h-2/5 bg-brand-emerald/30 rounded-2xl -z-10 transform rotate-6 transition-all duration-500 group-hover:rotate-0"></div>
           <div className="absolute -top-4 -left-4 w-1/3 h-1/3 bg-brand-green-tint-medium/40 rounded-full -z-10 transition-all duration-500 group-hover:scale-110"></div>
        </div>
        <div className="order-first md:order-last">
          {/* Differentiators now in a single container card with dividers */}
          <ul className="bg-brand-card-bg rounded-2xl shadow-soft-md border border-black/5 p-6 md:p-8 space-y-0">
            {DIFFERENTIATORS.map((item: Differentiator, index: number) => {
              const IconComponent = item.icon ? differentiatorIconMap[item.icon] || CheckIcon : CheckIcon;
              return (
                <li 
                  key={item.id} 
                  className={`flex items-start py-3 md:py-4 ${index < DIFFERENTIATORS.length - 1 ? 'border-b border-black/10' : ''}`}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-brand-emerald/10 rounded-full flex items-center justify-center mr-4 mt-0.5"> {/* Adjusted mt-1 to mt-0.5 */}
                    <IconComponent className="w-5 h-5 text-brand-emerald" />
                  </div>
                  <span className="text-gray-700 text-base md:text-lg leading-relaxed">{item.text}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhyChooseMeSection;