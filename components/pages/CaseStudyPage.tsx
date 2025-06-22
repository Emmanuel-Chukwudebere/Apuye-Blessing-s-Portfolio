import React from 'react';
import { useParams } from 'react-router-dom';
import { PORTFOLIO_ITEMS } from '../../constants';
import SectionWrapper from '../SectionWrapper';
import { BulletPoint, KeyMetric, SectionHeader, Tag, TagGroup } from '../common';
import CalendarToday from '@mui/icons-material/CalendarToday';
import Group from '@mui/icons-material/Group';
import TrendingUp from '@mui/icons-material/TrendingUp';
import CheckCircle from '@mui/icons-material/CheckCircle';
import Timeline from '@mui/icons-material/Timeline';
import { LightbulbIcon, SparklesIcon, ChartBarIcon } from '../Icons';

const CaseStudyPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const item = PORTFOLIO_ITEMS.find((p) => p.id === id);

  if (!item || !item.caseStudy) {
    return (
      <SectionWrapper className="bg-brand-page-bg">
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-brand-charcoal">Case Study Not Found</h2>
          <p className="mt-4 text-gray-600">The requested case study could not be found.</p>
        </div>
      </SectionWrapper>
    );
  }

  const cs = item.caseStudy;

  // Icon mapping for results
  const resultIconMap: Record<string, React.FC<{ className?: string }>> = {
    BarChart: ChartBarIcon,
    Lightbulb: LightbulbIcon,
    AutoAwesome: SparklesIcon,
    TrendingUp: ChartBarIcon,
  };

  return (
    <SectionWrapper className="py-16 lg:py-24 bg-brand-page-bg">
      <div className="max-w-5xl mx-auto">
        {/* Enhanced Header Section */}
        <div className="bg-gradient-to-br from-brand-card-bg to-white rounded-3xl shadow-soft-lg p-8 md:p-12 mb-12 border border-black/5">
          <div className="text-center mb-8">
            <Tag text={item.category} className="bg-brand-emerald/10 text-brand-emerald font-semibold mb-4" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-charcoal mb-4">{item.title}</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{cs.objective}</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div className="text-center p-4 bg-white rounded-xl shadow-soft-md">
              <Group className="w-6 h-6 text-brand-emerald mx-auto mb-2" />
              <div className="text-sm font-semibold text-brand-charcoal">{cs.client}</div>
              <div className="text-xs text-gray-500">Client</div>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-soft-md">
              <CalendarToday className="w-6 h-6 text-brand-emerald mx-auto mb-2" />
              <div className="text-sm font-semibold text-brand-charcoal">{cs.timeline}</div>
              <div className="text-xs text-gray-500">Duration</div>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-soft-md">
              <Timeline className="w-6 h-6 text-brand-emerald mx-auto mb-2" />
              <div className="text-sm font-semibold text-brand-charcoal">{cs.projectType}</div>
              <div className="text-xs text-gray-500">Project Type</div>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-soft-md">
              <TrendingUp className="w-6 h-6 text-brand-emerald mx-auto mb-2" />
              <div className="text-sm font-semibold text-brand-charcoal">340% ROI</div>
              <div className="text-xs text-gray-500">Return</div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-12">
          <img 
            src={item.imageUrl} 
            alt={item.imageAlt} 
            className="w-full h-96 object-cover rounded-3xl shadow-soft-lg border border-black/5" 
          />
        </div>

        {/* Challenge Section */}
        <div className="mb-12">
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-soft-lg border border-black/5">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mb-2">{cs.challenge.title}</h2>
              {cs.challenge.subtitle && <p className="text-lg text-gray-600">{cs.challenge.subtitle}</p>}
            </div>
            <div className="grid gap-4">
              {cs.challenge.details.map((point, i) => (
                <div key={i} className="flex items-start p-4 bg-red-50 rounded-xl border-l-4 border-red-200">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <span className="text-red-600 text-sm font-bold">!</span>
                  </div>
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Solution Section */}
        <div className="mb-12">
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-soft-lg border border-black/5">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mb-2">{cs.solution.title}</h2>
              {cs.solution.subtitle && <p className="text-lg text-gray-600">{cs.solution.subtitle}</p>}
            </div>
            <div className="grid gap-4">
              {cs.solution.details.map((point, i) => (
                <div key={i} className="flex items-start p-4 bg-green-50 rounded-xl border-l-4 border-brand-emerald">
                  <div className="w-6 h-6 bg-brand-emerald/20 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-brand-emerald" />
                  </div>
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Implementation Timeline */}
        <div className="mb-12">
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-soft-lg border border-black/5">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mb-2">Execution Timeline</h2>
              <p className="text-lg text-gray-600">Structured approach ensuring smooth transformation</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {cs.implementation && cs.implementation.map((phase, i) => (
                <div key={i} className="relative p-6 bg-brand-card-bg rounded-3xl shadow-soft-lg border border-black/5">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-brand-emerald text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-charcoal">{phase}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills & Tools Section */}
        <div className="mb-12">
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-soft-lg border border-black/5">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mb-2">Skills & Expertise Applied</h2>
              <p className="text-lg text-gray-600">Comprehensive skill set delivering measurable results</p>
            </div>
            <TagGroup>
              {cs.skills.map(skill => (
                <Tag key={skill} text={skill} className="bg-brand-emerald/10 text-brand-emerald font-semibold hover:bg-brand-emerald/20 transition-colors" />
              ))}
            </TagGroup>
          </div>
        </div>

        {/* Results Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-brand-emerald/5 to-transparent rounded-3xl p-8 md:p-10 shadow-soft-lg border border-brand-emerald/20">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mb-2">Measurable Impact</h2>
              <p className="text-lg text-gray-600">Quantifiable results that speak for themselves</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cs.results.map((result, i) => {
                const IconComponent = resultIconMap[result.icon] || ChartBarIcon;
                return (
                  <div key={i} className="bg-brand-card-bg rounded-3xl p-6 shadow-soft-lg border border-black/5 hover:shadow-lift transition-all duration-300">
                    <div className="flex items-start mb-4">
                      <div className="w-12 h-12 bg-brand-emerald/10 rounded-xl flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-brand-emerald" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-bold text-brand-charcoal">{result.metric}</h3>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{result.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Client Testimonial */}
        {cs.testimonial && (
          <div className="mb-12">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-soft-lg border border-black/5 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-charcoal mb-8">Client Feedback</h2>
              <blockquote className="text-lg md:text-xl italic leading-relaxed text-gray-700 mb-6 relative max-w-3xl mx-auto">
                <span className="absolute -top-6 -left-6 text-6xl text-brand-emerald/10 font-serif">&ldquo;</span>
                {cs.testimonial.quote}
                <span className="absolute -bottom-6 -right-6 text-6xl text-brand-emerald/10 font-serif">&rdquo;</span>
              </blockquote>
              <div className="mt-6">
                <p className="font-bold text-brand-charcoal text-lg">{cs.testimonial.author}</p>
                <p className="text-gray-600">{cs.testimonial.position}</p>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-brand-emerald to-brand-emerald/80 rounded-3xl p-8 md:p-12 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-6 opacity-90">Let's discuss how I can deliver similar results for your organization</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="bg-white text-brand-emerald px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Start Your Project
            </a>
            <a 
              href="#portfolio" 
              className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-brand-emerald transition-colors inline-flex items-center justify-center"
            >
              View More Cases
            </a>
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
};

export default CaseStudyPage;