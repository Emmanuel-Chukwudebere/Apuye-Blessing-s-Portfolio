import * as React from 'react';

export interface NavLink {
  id: string;
  label: string;
}

export interface Metric {
  id: string;
  value: number;
  textBefore?: string;
  textAfterCounter?: string;
  textAfterUnit: string;
  // Visuals for floating cards might be handled by component
}

export interface Service {
  id: string;
  title: string;
  description: string;
  impact: string;
  icon: string; // Emoji or SVG path
  imageUrl: string;
  imageAlt: string;
  isFeatured?: boolean;
}

export interface CaseStudy {
  client: string;
  timeline: string;
  projectType?: string;
  objective?: string;
  challenge: {
    title: string;
    subtitle?: string;
    details: string[];
  };
  solution: {
    title: string;
    subtitle?: string;
    details: string[];
  };
  implementation?: string[];
  skills: string[];
  results: Array<{
    metric: string;
    description: string;
    icon: string;
  }>;
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
}

export interface PortfolioItem {
  id: string;
  category: string;
  title: string;
  description: string;
  metric: string;
  impact: string;
  imageUrl: string;
  imageAlt: string;
  isFeatured?: boolean;
  tags: string[];
  liveUrl: string;
  caseStudyUrl: string;
  caseStudy?: CaseStudy;
}

export interface Differentiator {
  id: string;
  text: string;
  icon?: string; // Optional icon/emoji
}

export interface Testimonial {
  quote: string;
  clientName: string;
  company: string;
  rating?: number; // Added rating
  // logoUrl and avatarUrl removed
}

export interface ContactLink {
  type: 'email' | 'whatsapp' | 'linkedin' | 'phone' | 'location';
  href: string;
  text: string;
  ariaLabel: string;
  icon?: string | React.ReactNode; // For icon in contact card
}

// Removed AboutAchievement interface

export interface ContactMethod {
    type: string;
    text: string;
    href: string;
    ariaLabel: string;
    icon: string; // Emoji
}

export interface AvailabilityInfo {
    text: string;
    detail: string;
    icon: string; // Emoji
}


// Props for common components
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  className?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode; // Icon before text
  iconAfter?: React.ReactNode; // Icon after text
  isFullWidth?: boolean;
  disabled?: boolean;
}

export interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
  titleClassName?: string;
  titleAccent?: string;
  accentColorClassName?: string; 
  subtitle?: string;
  subtitleClassName?: string;
  containerClassName?: string; // To style the inner container
  hasPattern?: 'hero-grid' | 'contact-pattern' | false;
}

export interface AnimatedCounterProps {
  targetValue: number;
  duration?: number;
  textBefore?: string;
  textAfterCounter?: string;
  textAfterUnit?: string;
  className?: string;
  valueClassName?: string; // Class for the number itself
  labelClassName?: string; // Class for the label text
}