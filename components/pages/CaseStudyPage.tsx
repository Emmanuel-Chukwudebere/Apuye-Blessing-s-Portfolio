import React from 'react';
import { useParams } from 'react-router-dom';
import { PORTFOLIO_ITEMS } from '../../constants';
import SectionWrapper from '../SectionWrapper';
import { BulletPoint, KeyMetric, SectionHeader, Tag, TagGroup } from '../common'; // Assuming you have these common components
import CalendarToday from '@mui/icons-material/CalendarToday';
import BarChart from '@mui/icons-material/BarChart';
import Lightbulb from '@mui/icons-material/Lightbulb';
import AutoAwesome from '@mui/icons-material/AutoAwesome';
import Group from '@mui/icons-material/Group';

const CaseStudyPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const item = PORTFOLIO_ITEMS.find((p) => p.id === id);

  if (!item) {
    return (
      <SectionWrapper>
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-brand-charcoal">Case Study Not Found</h2>
          <p className="mt-4 text-gray-600">The requested case study could not be found.</p>
        </div>
      </SectionWrapper>
    );
  }

  // Placeholder data for extended case study details. This would ideally come from constants.ts.
  const extendedData = {
    client: "ShopEase Nigeria",
    timeline: "3 Months",
    challenge: {
      title: "Operational Inefficiency and Poor Customer Satisfaction",
      details: [
        "60% customer satisfaction rates due to slow and inconsistent response times.",
        "High volume of customer complaints overwhelming the small support team.",
        "No standardized processes for handling inquiries, leading to brand reputation damage.",
        "Over 15 hours per week spent by management on putting out fires instead of core business tasks."
      ]
    },
    solution: {
      title: "Streamlined Processes and Proactive Customer Support",
      details: [
        "Redesigned customer service protocols with a focus on ASL accessibility to tap into a new market segment.",
        "Created and implemented standardized response templates for common inquiries to ensure consistency and speed.",
        "Developed a comprehensive training program for the support team on the new protocols and tools.",
        "Implemented a satisfaction tracking system to monitor feedback and continuously improve service quality."
      ]
    },
    skills: [
      "Customer Service", "Email & Calendar Management", "Project Coordination", "Risk Management", "Process Improvement", "ASL Communication"
    ],
    results: [
      {
        metric: "95% CSAT",
        description: "Customer satisfaction skyrocketed from 60% to over 95% within the first two months.",
        icon: BarChart
      },
      {
        metric: "50% Faster Response",
        description: "Response times were cut in half through standardized templates and efficient workflows.",
        icon: AutoAwesome
      },
      {
        metric: "₦200,000+ Saved Monthly",
        description: "Operational savings achieved by streamlining processes and reducing management overhead.",
        icon: Lightbulb
      }
    ]
  };

  return (
    <SectionWrapper id={`casestudy-${item.id}`} className="py-16 lg:py-24 bg-brand-page-bg">
      <div className="max-w-4xl mx-auto">
        {/* Header Card */}
        <div className="bg-white rounded-3xl shadow-soft-lg p-8 md:p-12 mb-10 flex flex-col items-center gap-4 border border-black/5">
          <Tag text={item.category} className="bg-brand-emerald/10 text-brand-emerald font-semibold mb-2" />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-charcoal text-center mb-2">{item.title}</h1>
          <div className="flex flex-wrap justify-center items-center gap-4 text-gray-600 text-base">
            <div className="flex items-center gap-2">
              <Group className="w-5 h-5 text-brand-emerald" />
              <span>{extendedData.client}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarToday className="w-5 h-5 text-brand-emerald" />
              <span>{extendedData.timeline}</span>
            </div>
          </div>
        </div>

        {/* Main Image Card */}
        <div className="mb-12">
          <img src={item.imageUrl} alt={item.imageAlt} className="w-full h-auto rounded-2xl shadow-soft-lg border border-black/5" />
        </div>

        {/* Challenge Section */}
        <div className="mb-12">
          <SectionHeader title="The Challenge" />
          <div className="prose prose-lg max-w-none bg-white rounded-2xl p-6 shadow-soft-md border border-black/5">
            {extendedData.challenge.details.map((point, i) => (
              <BulletPoint key={i} text={point} />
            ))}
          </div>
        </div>

        {/* Solution Section */}
        <div className="mb-12">
          <SectionHeader title="The Solution" />
          <div className="prose prose-lg max-w-none bg-white rounded-2xl p-6 shadow-soft-md border border-black/5">
            {extendedData.solution.details.map((point, i) => (
              <BulletPoint key={i} text={point} />
            ))}
          </div>
        </div>
        
        {/* Skills & Tools Section */}
        <div className="mb-12">
          <SectionHeader title="Skills & Tools Used" />
          <TagGroup>
            {extendedData.skills.map(skill => (
              <Tag key={skill} text={skill} className="bg-brand-emerald/10 text-brand-emerald font-semibold" />
            ))}
          </TagGroup>
        </div>

        {/* Results Section */}
        <div>
          <SectionHeader title="The Results" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {extendedData.results.map((result, i) => (
              <KeyMetric key={i} metric={result.metric} description={result.description} icon={result.icon} />
            ))}
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
};

export default CaseStudyPage; 