import React from 'react';
import { Link } from 'react-router-dom';
import { PORTFOLIO_ITEMS, PORTFOLIO_SUBTITLE, PORTFOLIO_TITLE_ACCENT } from '../../constants';
import SectionWrapper from '../SectionWrapper';
import Launch from '@mui/icons-material/Launch';
import { Tag } from '../common';

const PortfolioSection: React.FC = () => {
  return (
    <SectionWrapper id="portfolio">
      <h2 className="text-3xl font-bold text-center sm:text-4xl text-brand-charcoal">
        Showcasing <span className="text-brand-emerald">{PORTFOLIO_TITLE_ACCENT}</span>
      </h2>
      <p className="mt-4 text-lg text-center text-gray-600">
        {PORTFOLIO_SUBTITLE}
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PORTFOLIO_ITEMS.map((item) => (
          <Link
            to={`/portfolio/${item.id}`}
            key={item.id}
            className="group bg-brand-card-bg rounded-3xl p-0 shadow-soft-lg hover:shadow-lift transition-all duration-300 transform hover:-translate-y-2 hover:scale-103 relative overflow-hidden border border-black/5"
          >
            <div className="relative">
              <img
                src={item.imageUrl}
                alt={item.imageAlt}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105 rounded-t-3xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-colors duration-300 rounded-t-3xl"></div>
              <div className="absolute top-4 right-4 bg-brand-emerald text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Launch className="w-5 h-5" />
              </div>
            </div>
            <div className="p-6 flex flex-col h-full">
              <div className="mb-3">
                <Tag text={item.category} className="bg-brand-emerald/10 text-brand-emerald font-semibold" />
              </div>
              <h3 className="text-xl font-bold text-brand-charcoal mb-2">{item.title}</h3>
              <div className="flex flex-wrap gap-2 mb-2">
                {item.tags && item.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-gray-100 text-gray-700 text-xs font-medium">{tag}</span>
                ))}
              </div>
              <p className="text-gray-600 line-clamp-3 mb-4">{item.description}</p>
              <div className="mt-auto pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500">
                  <span className="font-bold text-brand-charcoal">{item.metric}:</span> {item.impact}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default PortfolioSection;