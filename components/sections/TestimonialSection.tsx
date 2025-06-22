import * as React from 'react';
import SectionWrapper from '../SectionWrapper';
import { TESTIMONIALS } from '../../constants'; 
import { SectionWrapperProps } from '../../types';
import { StarIcon } from '../Icons'; // Import StarIcon

const TestimonialSection: React.FC<Pick<SectionWrapperProps, 'id'>> = ({ id }) => {
  const [current, setCurrent] = React.useState(0);
  const total = TESTIMONIALS.length;
  const next = () => setCurrent((c) => (c + 1) % total);
  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const t = TESTIMONIALS[current];
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
            {[...Array(t.rating || 5)].map((_, i) => (
              <StarIcon key={i} className="w-5 h-5 text-yellow-400" filled={true} />
            ))}
          </div>
          <blockquote className="text-lg md:text-xl italic leading-relaxed text-gray-700 mb-6 relative">
            <span className="absolute -top-3 -left-3 text-7xl text-brand-emerald/10 font-serif z-0">&ldquo;</span>
            <span className="relative z-10">{t.quote}</span>
            <span className="absolute -bottom-7 -right-3 text-7xl text-brand-emerald/10 font-serif z-0">&rdquo;</span>
          </blockquote>
          <p className="font-semibold text-brand-charcoal text-base md:text-lg mt-4">{t.clientName}</p>
          <p className="text-gray-600 text-sm md:text-base">{t.company}</p>
          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} aria-label="Previous testimonial" className="px-4 py-2 rounded-full bg-brand-emerald/10 text-brand-emerald hover:bg-brand-emerald/20 transition-colors">&#8592;</button>
            <button onClick={next} aria-label="Next testimonial" className="px-4 py-2 rounded-full bg-brand-emerald/10 text-brand-emerald hover:bg-brand-emerald/20 transition-colors">&#8594;</button>
          </div>
          <div className="mt-4 text-xs text-gray-400">{current + 1} / {total}</div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TestimonialSection;