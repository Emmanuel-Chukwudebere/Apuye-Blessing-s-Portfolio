import { NavLink, Metric, Service, PortfolioItem, Differentiator, Testimonial, ContactLink, ContactMethod, AvailabilityInfo } from './types'; // Removed AboutAchievement

// Placeholder base URLs for images - update seeds for new context
const PICSUM_BASE = "https://picsum.photos/seed";

// --- LOGO TEXT ---
export const HEADER_LOGO_TEXT = "Apuye Blessing";
export const FOOTER_LOGO_TEXT = "Apuye Blessing";
export const HEADER_RESUME_TEXT = "View My Resume";
export const HEADER_RESUME_LINK = "/apuye_blessing_resume_placeholder.pdf"; // Placeholder path

// --- HERO SECTION ---
export const HERO_VISUAL_URL = `${PICSUM_BASE}/apuye-emerald-portrait-v3/600/800`; // Elegant portrait
export const HERO_TITLE_ACCENT = "Apuye Blessing";
export const HERO_SUBTITLE = "Your Next Virtual Assistant with Real-World Business Expertise";
export const HERO_DESCRIPTION = "Currently excelling in risk management at Gamma Loans with 95%+ customer satisfaction. Now bringing that same excellence to help businesses like yours thrive remotely.";

export const KEY_METRICS_FLOAT: Metric[] = [
  { value: 95, textAfterCounter: '%+', textAfterUnit: 'Customer Satisfaction', id: 'metric-csat' },
  { value: 25, textAfterCounter: '%', textAfterUnit: 'Experience Improvement', id: 'metric-exp' },
  { value: 200000, textBefore: '₦', textAfterCounter: '+', textAfterUnit: 'Monthly Savings', id: 'metric-savings' },
  { value: 100, textAfterCounter: '%', textAfterUnit: 'Compliance Rate', id: 'metric-compliance' },
];

// --- NAVIGATION ---
export const NAV_LINKS: NavLink[] = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
];
export const HEADER_CTA_TEXT = "Let's Talk";

// --- ABOUT ME SECTION ---
export const ABOUT_VISUAL_URL = `${PICSUM_BASE}/apuye-emerald-portrait-v4/600/800`; // Updated to v4 and confirmed portrait
export const ABOUT_TITLE_ACCENT = "Typical";
export const ABOUT_PARAGRAPH_1 = "More than just a virtual assistant, I'm a proactive and solution-oriented Business Operations Specialist. While completing my ALX certification, I've made a tangible impact at Gamma Loans, enhancing customer experiences by 25% and uncovering monthly cost savings exceeding ₦200,000. My approach is rooted in delivering measurable results, not just completing tasks.";
export const ABOUT_PARAGRAPH_2 = "My foundation in International Studies from the University of Calabar, coupled with fluency in American Sign Language (ASL), provides a unique blend of cultural intelligence and accessibility expertise. This allows me to help businesses connect with diverse audiences and create truly inclusive customer journeys.";
export const ABOUT_PARAGRAPH_3 = "Based in Benin City and serving clients globally, I bring a nuanced understanding of both local Nigerian market dynamics and international business standards. Whether your focus is on stringent compliance, operational excellence, or expanding your market reach through accessibility, my proven track record demonstrates a commitment to elevating your business.";

// ABOUT_ACHIEVEMENTS array removed as content is now narrative.

// --- SERVICES SECTION ---
export const SERVICES_TITLE_ACCENT = "Transform";
export const SERVICES_SUBTITLE = "Specialized services backed by proven results and real-world experience";

export const SERVICES_DATA: Service[] = [
  {
    id: 'risk-compliance',
    title: 'Business Risk & Compliance Support',
    description: "Transform regulatory complexity into streamlined compliance.",
    impact: "Currently managing 50+ daily cases with 100% compliance at Gamma Loans.",
    icon: 'ShieldCheckIcon', 
    imageUrl: `${PICSUM_BASE}/apuye-emerald-compliance-v3/600/400`, 
    imageAlt: 'Elegant compliance dashboard with emerald accents',
    isFeatured: true, // This can be used for visual styling, not structural spanning
  },
  {
    id: 'customer-experience',
    title: 'Customer Experience Enhancement',
    description: "Increase customer satisfaction through proven methodologies.",
    impact: "Real results (25%+ improvement) from real experience, not just training.",
    icon: 'ChartBarIcon',
    imageUrl: `${PICSUM_BASE}/apuye-emerald-cx-v3/600/400`, 
    imageAlt: 'Customer satisfaction dashboard with upward trending emerald graphs',
  },
  {
    id: 'operations-optimization',
    title: 'Operations Optimization & Cost Management',
    description: "Your operations specialist who happens to work virtually.",
    impact: "Proven track record of identifying ₦200,000+ monthly savings.",
    icon: 'CogIcon',
    imageUrl: `${PICSUM_BASE}/apuye-emerald-ops-v3/600/400`, 
    imageAlt: 'Financial charts with emerald color scheme and minimalist design',
  },
  {
    id: 'accessible-support',
    title: 'Accessible & Inclusive Customer Support',
    description: "ASL fluency opens underserved market opportunities.",
    impact: "Expand your customer base by 15-20% through inclusive service design.",
    icon: 'GlobeAltIcon',
    imageUrl: `${PICSUM_BASE}/apuye-emerald-asl-v3/600/400`, 
    imageAlt: 'Modern accessibility interface with emerald accents',
  }
];

// --- PORTFOLIO SECTION ---
export const PORTFOLIO_TITLE_ACCENT = "Results";
export const PORTFOLIO_SUBTITLE = "Not just promises – measurable outcomes from actual business experience";

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'risk-success',
    category: 'Risk Management',
    title: 'Risk Management Success',
    description: "Achieved 100% compliance rate across 50+ daily cases while maintaining exceptional customer relationships at Gamma Loans.",
    metric: "100% Compliance",
    impact: "Successfully managed over 50 daily cases with flawless compliance.",
    imageUrl: `${PICSUM_BASE}/apuye-compliance-dashboard-v4/800/600`, // Updated to v4
    imageAlt: 'Sophisticated compliance dashboard with emerald accents',
    isFeatured: true, // For potential visual distinction
  },
  {
    id: 'cx-transformation',
    category: 'Customer Experience',
    title: 'Customer Experience Transformation',
    description: "Systematically redesigned service protocols at Gamma Loans, leading to a significant rise in customer satisfaction.",
    metric: "70% → 95% CSAT",
    impact: "Improved customer satisfaction from 70% to 95%.",
    imageUrl: `${PICSUM_BASE}/apuye-cx-improvement-v4/800/500`, // Updated to v4
    imageAlt: 'Customer satisfaction interface showing dramatic improvement',
  },
  {
    id: 'cost-optimization',
    category: 'Operations',
    title: 'Cost Optimization Results',
    description: "Conducted comprehensive operational analysis at Gamma Loans to identify and implement major cost-saving measures.",
    metric: "₦200,000+ Saved Monthly",
    impact: "Identified and implemented cost savings worth over ₦200,000 monthly.",
    imageUrl: `${PICSUM_BASE}/apuye-cost-savings-charts-v4/800/550`, // Updated to v4
    imageAlt: 'Financial analysis dashboard with emerald color scheme',
  }
];

// --- WHY CHOOSE ME SECTION ---
export const WHYCHOOSEME_VISUAL_URL = `${PICSUM_BASE}/apuye-modern-office-collab-v4/800/600`; // Updated to v4
export const WHYCHOOSEME_TITLE = "Why Choose Me?";
export const WHYCHOOSEME_SUBTITLE = "Beyond standard VA services, I offer strategic advantages for your business.";

export const DIFFERENTIATORS: Differentiator[] = [
  { id: 'd1', text: 'Proactive & Solution-Oriented, dedicated to your success', icon: 'LightbulbIcon' },
  { id: 'd2', text: 'Proven business results with measurable metrics', icon: 'ChartBarIcon' },
  { id: 'd3', text: 'ASL fluency for accessibility market expansion', icon: 'HandRaisedIcon' },
  { id: 'd4', text: 'International Studies background for global clients', icon: 'GlobeAltIcon' },
  { id: 'd5', text: 'Compliance expertise for regulated industries', icon: 'ShieldCheckIcon' },
  { id: 'd6', text: 'Nigerian insights with international perspective', icon: 'AcademicCapIcon' },
];

// --- TESTIMONIAL SECTION ---
export const TESTIMONIAL_VISUAL_URL = `${PICSUM_BASE}/apuye-emerald-testimonial-card-v3/400/400`; 
export const TESTIMONIAL_DATA: Testimonial = {
  quote: "Working with Apuye transformed our customer satisfaction rates. Her analytical approach and attention to detail delivered results we didn't expect from a virtual assistant.",
  clientName: 'Dr. Evelyn Adebayo', // Updated
  company: 'Innovate Solutions Ltd.', // Updated
  rating: 5, // Added rating
  // avatarUrl and logoUrl removed
};

// --- CONTACT SECTION ---
export const CONTACT_VISUAL_URL = `${PICSUM_BASE}/apuye-emerald-contact-bg-v3/800/600`;
export const CONTACT_TITLE_PRIMARY = "Ready to";
export const CONTACT_TITLE_ACCENT = "Transform"; 
export const CONTACT_TITLE_SECONDARY = "Your Business?"; 
export const CONTACT_TITLE_ACCENT_COLOR_CLASS = "text-brand-emerald"; 
export const CONTACT_SUBTITLE = "I'm currently accepting select new clients while maintaining my excellence at Gamma Loans.";
export const CONTACT_EMAIL = "apuyeamorye@gmail.com";
export const CONTACT_PHONE_NUMBER = "+2349169301646"; 
export const WHATSAPP_LINK = `https://wa.me/2349169301646`;
export const LINKEDIN_PROFILE_URL = "https://www.linkedin.com/in/apuyeamorye";

// CONTACT_METHODS and CONTACT_AVAILABILITY_INFO are no longer used by the ContactSection component directly,
// but might be kept for other uses or if design changes later.
export const CONTACT_METHODS: ContactMethod[] = [
    { type: 'email', text: "Email Me", href: `mailto:${CONTACT_EMAIL}`, ariaLabel: "Send an email to Apuye Blessing", icon: "EmailIcon" },
    { type: 'whatsapp', text: "WhatsApp", href: WHATSAPP_LINK, ariaLabel: "Send Apuye Blessing a WhatsApp message", icon: "WhatsAppIcon" },
    { type: 'linkedin', text: "LinkedIn", href: LINKEDIN_PROFILE_URL, ariaLabel: "View Apuye Blessing on LinkedIn", icon: "LinkedInIcon" }
];

export const CONTACT_AVAILABILITY_INFO: AvailabilityInfo[] = [
    { text: "US/EU Hours", detail: "Flexible Scheduling", icon: "ClockIcon" },
    { text: "4hr Response", detail: "During Business Hours", icon: "SparklesIcon" },
    { text: "Global Service", detail: "Based in Benin City", icon: "GlobeAltIcon" },
    { text: "Select Intake", detail: "New Client Openings", icon: "CheckIcon" }
];


// --- FOOTER ---
export const FOOTER_COPYRIGHT_NAME = "Apuye Blessing";
export const FOOTER_TAGLINE = "Business Operations Specialist | Virtual Assistant";

export const SOCIAL_LINKS: ContactLink[] = [
    { type: 'email', href: `mailto:${CONTACT_EMAIL}`, text: 'Email', ariaLabel: 'Send an email to Apuye Blessing', icon: 'EmailIcon' },
    { type: 'whatsapp', href: WHATSAPP_LINK, text: 'WhatsApp', ariaLabel: 'Send Apuye Blessing a WhatsApp message', icon: 'WhatsAppIcon' },
    { type: 'linkedin', href: LINKEDIN_PROFILE_URL, text: 'LinkedIn', ariaLabel: 'View Apuye Blessing on LinkedIn', icon: 'LinkedInIcon' }
];