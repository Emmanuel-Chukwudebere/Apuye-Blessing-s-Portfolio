import * as React from 'react';
import {
  Checkmark24Regular,
  Mail24Regular,
  LineHorizontal324Regular,
  Dismiss24Regular,
  Briefcase24Regular,
  AcademicCap24Regular,
  Lightbulb24Regular,
  Sparkle24Regular,
  HandRaise24Regular,
  ShieldCheckmark24Regular,
  BarChart24Regular,
  Settings24Regular,
  Globe24Regular,
  ChevronRight24Regular,
  Clock24Regular,
  Star24Regular,
  Star24Filled
} from '@fluentui/react-icons';

// Icons updated for a more solid/filled or cleaner modern look (Fluent-like approximation)
// Color will be inherited via `currentColor`

export const CheckIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <Checkmark24Regular className={className} />
);

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.296-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.289.173-1.413z" />
  </svg>
);

export const EmailIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <Mail24Regular className={className} />
);

export const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export const MenuIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <LineHorizontal324Regular className={className} />
);

export const XIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <Dismiss24Regular className={className} />
);

export const BriefcaseIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <Briefcase24Regular className={className} />
);

export const AcademicCapIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <AcademicCap24Regular className={className} />
);

export const LightbulbIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <Lightbulb24Regular className={className} />
);

export const SparklesIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <Sparkle24Regular className={className} />
);

export const HandRaisedIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <HandRaise24Regular className={className} />
);

export const ShieldCheckIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <ShieldCheckmark24Regular className={className} />
);

export const ChartBarIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <BarChart24Regular className={className} />
);

export const CogIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <Settings24Regular className={className} />
);

export const GlobeAltIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <Globe24Regular className={className} />
);

export const ChevronRightIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <ChevronRight24Regular className={className} />
);

export const ClockIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <Clock24Regular className={className} />
);

export const StarIcon: React.FC<{ className?: string, filled?: boolean }> = ({ className = "w-5 h-5", filled = true }) => (
  filled ? <Star24Filled className={className} /> : <Star24Regular className={className} />
);