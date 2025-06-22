import React from 'react';

// A styled header for sections
export const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
  <h2 className="text-3xl font-bold text-brand-charcoal mb-6">{title}</h2>
);

// A styled list item for challenges and solutions
export const BulletPoint: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-start space-x-3 mb-3">
    <svg className="w-6 h-6 text-brand-emerald flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
    <p>{text}</p>
  </div>
);

// A container for a group of tags
export const TagGroup: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex flex-wrap gap-2">{children}</div>
);

// An individual tag component
export const Tag: React.FC<{ text: string, className?: string }> = ({ text, className }) => (
  <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${className}`}>
    {text}
  </span>
);

// A component to display a key metric with an icon
export const KeyMetric: React.FC<{
  metric: string;
  description: string;
  icon: React.ElementType;
}> = ({ metric, description, icon: Icon }) => (
  <div className="p-6 bg-brand-green-tint-light rounded-lg shadow-soft-sm text-center">
    <Icon className="w-10 h-10 mx-auto text-brand-emerald mb-4" />
    <div className="text-3xl font-bold text-brand-charcoal">{metric}</div>
    <p className="mt-2 text-gray-600">{description}</p>
  </div>
); 