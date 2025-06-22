import * as React from 'react';
import { SectionWrapperProps } from '../types';

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  children,
  className = '', // Sections will set their own backgrounds (e.g., bg-brand-page-bg)
  title,
  titleClassName = 'text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-charcoal text-center', // Adjusted font sizes
  titleAccent,
  accentColorClassName = 'text-brand-emerald', 
  subtitle,
  subtitleClassName = 'text-md sm:text-lg text-gray-700 text-center max-w-3xl mx-auto', // Adjusted font sizes
  containerClassName = 'container mx-auto max-w-7xl px-5 md:px-30 py-16 md:py-24', // px-5 = 20px mobile margin
  hasPattern = false,
}) => {
  
  let patternClass = '';
  if (hasPattern === 'hero-grid') {
    patternClass = 'bg-hero-grid-pattern bg-hero-grid-size opacity-25'; 
  } else if (hasPattern === 'contact-pattern') {
    patternClass = 'bg-contact-pattern opacity-5'; 
  }

  let titleParts: React.ReactNode[] = [];
  if (title && titleAccent && title.includes(titleAccent)) {
    const parts = title.split(titleAccent);
    titleParts.push(parts[0]);
    titleParts.push(<span key="accent" className={accentColorClassName}>{titleAccent}</span>);
    titleParts.push(parts[1]);
  } else if (title) {
    titleParts.push(title);
  }

  return (
    <section id={id} className={`relative scroll-mt-24 ${className}`}> {/* scroll-mt-24 (6rem) */}
      {hasPattern && (
        <div className={`absolute inset-0 ${patternClass} -z-10`}></div>
      )}
      <div className={`${containerClassName} relative z-0`}> 
        {title && (
          <h2 className={`${titleClassName} mb-4`}>
            {titleParts}
          </h2>
        )}
        {subtitle && (
            <p className={`${subtitleClassName} mb-12 md:mb-16`}>
                {subtitle}
            </p>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;