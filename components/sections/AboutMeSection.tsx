import * as React from 'react';
import SectionWrapper from '../SectionWrapper';
import { 
  ABOUT_VISUAL_URL, 
  ABOUT_TITLE_ACCENT,
  ABOUT_PARAGRAPH_1,
  ABOUT_PARAGRAPH_2,
  ABOUT_PARAGRAPH_3,
} from '../../constants';
import { SectionWrapperProps } from '../../types';

const AboutMeSection: React.FC<Pick<SectionWrapperProps, 'id'>> = ({ id }) => {
  return (
    <SectionWrapper 
      id={id} 
      title={`Not Your ${ABOUT_TITLE_ACCENT} New VA`}
      titleAccent={ABOUT_TITLE_ACCENT}
      className="bg-brand-page-bg" 
    >
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 lg:items-center"> {/* Changed items-start to items-center */}
        <div className="lg:col-span-7">
          <div className="bg-brand-card-bg rounded-3xl p-8 sm:p-10 lg:p-12 shadow-soft-lg border border-black/5">
            <div className="prose prose-base sm:prose-lg text-gray-700 max-w-none space-y-6">
              <p>{ABOUT_PARAGRAPH_1}</p>
              <p>{ABOUT_PARAGRAPH_2}</p>
              <p>{ABOUT_PARAGRAPH_3}</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-8 relative mt-10 lg:mt-0">
           <div className="relative group">
            <img 
                src={ABOUT_VISUAL_URL} 
                alt="Apuye Blessing's sophisticated workspace" 
                className="rounded-3xl shadow-xl w-full object-cover aspect-[3/4] transform hover:scale-103 transition-transform duration-300 border-4 border-white" // Changed to aspect-[3/4]
            />
            <div className="absolute -top-5 -left-5 w-20 h-20 bg-brand-emerald/30 rounded-full -z-10 group-hover:scale-110 transition-transform"></div>
            <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-brand-green-tint-medium/40 rounded-2xl -z-10 transform rotate-6 group-hover:rotate-0 transition-transform"></div>
           </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutMeSection;