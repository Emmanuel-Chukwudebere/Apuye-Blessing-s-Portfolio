
import * as React from 'react';
import SectionWrapper from '../SectionWrapper';
import { TESTIMONIAL_DATA } from '../../constants'; 
import { SectionWrapperProps } from '../../types';
import { StarIcon } from '../Icons'; // Import StarIcon

const TestimonialSection: React.FC<Pick<SectionWrapperProps, 'id'>> = ({ id }) => {
  return (
    <SectionWrapper 
      id={id} 
      title="What Clients Say"
      className="bg-brand-page-bg" 
      subtitle="Trusted by businesses for dedication and measurable results."
    >
      <div className="max-w-3xl mx-auto bg-brand-card-bg p-8 md:p-12 rounded-3xl shadow-soft-lg border border-black/5 transform hover:scale-103 transition-transform duration-300">
        <div className="flex flex-col items-center text-center">
            {/* Star Rating Display */}
            <div className="flex justify-center mb-5">
              {[...Array(TESTIMONIAL_DATA.rating || 5)].map((_, i) => (
                <StarIcon key={i} className="w-5 h-5 text-yellow-400" filled={true} />
              ))}
              {/* Optional: Add half stars or empty stars for non-integer ratings if needed */}
            </div>

          <blockquote className="text-lg md:text-xl italic leading-relaxed text-gray-700 mb-6 relative">
            <span className="absolute -top-3 -left-3 text-7xl text-brand-emerald/10 font-serif z-0">&ldquo;</span>
            <span className="relative z-10">{TESTIMONIAL_DATA.quote}</span>
            <span className="absolute -bottom-7 -right-3 text-7xl text-brand-emerald/10 font-serif z-0">&rdquo;</span>
          </blockquote>
          <p className="font-semibold text-brand-charcoal text-base md:text-lg mt-4">{TESTIMONIAL_DATA.clientName}</p>
          <p className="text-gray-600 text-sm md:text-base">{TESTIMONIAL_DATA.company}</p>
          
          {/* Removed avatar and logo images */}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TestimonialSection;