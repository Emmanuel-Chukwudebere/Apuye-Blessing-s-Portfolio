import * as React from 'react';
import SectionWrapper from '../SectionWrapper';
import { PORTFOLIO_ITEMS, PORTFOLIO_TITLE_ACCENT, PORTFOLIO_SUBTITLE } from '../../constants';
import { SectionWrapperProps, PortfolioItem } from '../../types';

const PortfolioSection: React.FC<Pick<SectionWrapperProps, 'id'>> = ({ id }) => {
  return (
    <SectionWrapper 
        id={id} 
        title={`Real ${PORTFOLIO_TITLE_ACCENT}, Real Impact`}
        titleAccent={PORTFOLIO_TITLE_ACCENT}
        subtitle={PORTFOLIO_SUBTITLE}
        className="bg-brand-page-bg" 
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PORTFOLIO_ITEMS.map((item: PortfolioItem) => (
          <div 
            key={item.id} 
            className={`group bg-brand-card-bg rounded-3xl overflow-hidden shadow-soft-lg hover:shadow-lift 
                        transition-all duration-500 transform hover:-translate-y-2 border border-black/5
                        flex flex-col h-full 
                        ${item.isFeatured ? 'lg:col-span-1 md:col-span-2' : 'lg:col-span-1'}`} 
          >
            <div className="aspect-video overflow-hidden relative">
              <img 
                src={item.imageUrl} 
                alt={item.imageAlt || `Visual for ${item.title}`} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-4">
                <span className="text-white text-center text-md font-semibold border-2 border-white/70 rounded-full px-4 py-2 backdrop-blur-sm bg-black/30">
                    {item.title}
                </span>
              </div>
            </div>
            
            <div className="p-6 md:p-8 flex-grow flex flex-col">
              {/* Tag div with improved styling to hug content */}
              <div className="portfolio-tag bg-brand-green-tint-light text-brand-emerald border border-brand-emerald px-3 py-1.5 rounded-full text-xs font-semibold mb-4 uppercase tracking-wider w-fit">
                {item.category}
              </div>
              
              <h3 className="text-lg md:text-xl font-bold text-brand-charcoal mb-3">{item.title}</h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-5 line-clamp-3 md:line-clamp-4 flex-grow">{item.description}</p>
              
              {/* Metric Box */}
              <div className="mt-auto pt-2">
                <div className="text-xl md:text-2xl font-bold text-brand-emerald mb-1">{item.metric}</div>
                <div className="text-gray-600 text-xs leading-snug">{item.impact}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default PortfolioSection;