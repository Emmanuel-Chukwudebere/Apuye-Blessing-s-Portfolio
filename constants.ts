import { NavLink, Metric, Service, PortfolioItem, Differentiator, Testimonial, ContactLink, ContactMethod, AvailabilityInfo } from './types'; // Removed AboutAchievement

// Local assets base path
const ASSETS_BASE = "/assets";

// --- LOGO TEXT ---
export const HEADER_LOGO_TEXT = "Apuye Blessing";
export const FOOTER_LOGO_TEXT = "Apuye Blessing";
export const HEADER_RESUME_TEXT = "View My Resume";
export const HEADER_RESUME_LINK = "/apuye_blessing_resume_placeholder.pdf"; // Placeholder path

// --- HERO SECTION ---
export const HERO_VISUAL_URL = `${ASSETS_BASE}/apuye-blessing.jpeg`; // Local portrait image
export const HERO_TITLE_ACCENT = "Apuye Blessing";
export const HERO_SUBTITLE = "Virtual Assistant & Customer Support Specialist";
export const HERO_DESCRIPTION = "Dedicated professional with proven expertise in customer experience enhancement, operations optimization, and accessible support. Currently available for freelance, part-time, and full-time opportunities to help businesses deliver exceptional service.";

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
export const ABOUT_VISUAL_URL = `${ASSETS_BASE}/about.png`; // Local about section image
export const ABOUT_TITLE_ACCENT = "Typical";
export const ABOUT_PARAGRAPH_1 = "More than just a Virtual Assistant, I'm a proactive and solution-oriented Virtual Assistant and Customer Support Specialist with a passion for delivering exceptional service experiences. My background in History and International Studies from the University of Calabar, combined with fluency in American Sign Language (ASL), gives me a unique perspective on creating inclusive and accessible customer interactions.";
export const ABOUT_PARAGRAPH_2 = "With experience in managing customer relationships, optimizing business operations, and ensuring compliance standards, I bring a comprehensive skill set that goes beyond traditional VA services. My approach focuses on understanding your business needs and implementing solutions that drive measurable results.";
export const ABOUT_PARAGRAPH_3 = "Based in Nigeria and serving clients globally, I offer flexible availability for freelance, part-time, and full-time opportunities. Whether you need ongoing support or project-based assistance, I'm committed to helping your business thrive through exceptional customer service and operational excellence.";

// ABOUT_ACHIEVEMENTS array removed as content is now narrative.

// --- SERVICES SECTION ---
export const SERVICES_TITLE_ACCENT = "Transform";
export const SERVICES_SUBTITLE = "Comprehensive virtual assistance and customer support services designed to elevate your business";

export const SERVICES_DATA: Service[] = [
  {
    id: 'risk-compliance',
    title: 'Customer Support & Compliance',
    description: "Deliver exceptional customer service while maintaining strict compliance standards.",
    impact: "Proven track record of managing 50+ daily customer interactions with 100% compliance.",
    icon: 'ShieldCheckIcon',
    imageUrl: "",
    imageAlt: "",
    isFeatured: true,
  },
  {
    id: 'customer-experience',
    title: 'Customer Experience Enhancement',
    description: "Transform customer interactions into memorable experiences that drive loyalty.",
    impact: "Consistently achieve 25%+ improvement in customer satisfaction scores.",
    icon: 'ChartBarIcon',
    imageUrl: "",
    imageAlt: "",
  },
  {
    id: 'operations-optimization',
    title: 'Operations Optimization & Cost Management',
    description: "Streamline your operations and identify cost-saving opportunities.",
    impact: "Successfully identified and implemented ₦200,000+ in monthly operational savings.",
    icon: 'CogIcon',
    imageUrl: "",
    imageAlt: "",
  },
  {
    id: 'accessible-support',
    title: 'Accessible & Inclusive Customer Support',
    description: "Expand your market reach through inclusive service design and ASL fluency.",
    impact: "Help businesses connect with 15-20% more customers through accessibility initiatives.",
    icon: 'GlobeAltIcon',
    imageUrl: "",
    imageAlt: "",
  }
];

// --- PORTFOLIO SECTION ---
export const PORTFOLIO_TITLE_ACCENT = "Results";
export const PORTFOLIO_SUBTITLE = "Real outcomes from dedicated customer service and operational excellence";

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'risk-success',
    category: 'Customer Support',
    title: 'Customer Support Excellence',
    description: "Managed high-volume customer interactions while maintaining exceptional service quality and compliance standards.",
    metric: "100% Compliance",
    impact: "Successfully handled over 50 daily customer cases with flawless compliance.",
    imageUrl: `${ASSETS_BASE}/compliance-success.png`, // Local compliance success image
    imageAlt: 'Customer support and compliance dashboard showing 100% success rate',
    isFeatured: true,
  },
  {
    id: 'cx-transformation',
    category: 'Customer Experience',
    title: 'Customer Experience Transformation',
    description: "Redesigned customer service protocols and processes to significantly improve satisfaction rates.",
    metric: "70% → 95% CSAT",
    impact: "Improved customer satisfaction from 70% to 95% through systematic improvements.",
    imageUrl: `${ASSETS_BASE}/cx-transformation.png`, // Local CX transformation image
    imageAlt: 'Customer satisfaction improvement metrics and interface',
  },
  {
    id: 'cost-optimization',
    category: 'Operations',
    title: 'Cost Optimization Results',
    description: "Conducted comprehensive operational analysis to identify and implement major cost-saving measures.",
    metric: "₦200,000+ Saved Monthly",
    impact: "Identified and implemented cost savings worth over ₦200,000 monthly.",
    imageUrl: `${ASSETS_BASE}/cost-optimisation.png`, // Local cost optimization image
    imageAlt: 'Cost optimization analysis and financial savings charts',
  }
];

// --- WHY CHOOSE ME SECTION ---
export const WHYCHOOSEME_VISUAL_URL = `${ASSETS_BASE}/why-choose-me.png`;
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
export const TESTIMONIAL_VISUAL_URL = undefined;
export const TESTIMONIAL_DATA: Testimonial = {
  quote: "Working with Apuye transformed our customer satisfaction rates. Her analytical approach and attention to detail delivered results we didn't expect from a virtual assistant.",
  clientName: 'Dr. Evelyn Adebayo',
  company: 'Innovate Solutions Ltd.',
  rating: 5,
};

// --- CONTACT SECTION ---
export const CONTACT_VISUAL_URL = undefined;
export const CONTACT_TITLE_PRIMARY = "Ready to";
export const CONTACT_TITLE_ACCENT = "Transform"; 
export const CONTACT_TITLE_SECONDARY = "Your Business?"; 
export const CONTACT_TITLE_ACCENT_COLOR_CLASS = "text-brand-emerald"; 
export const CONTACT_SUBTITLE = "I'm currently accepting new clients and I'm open to full-time and part-time roles.";
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
    { text: "Global Service", detail: "Based in Nigeria", icon: "GlobeAltIcon" },
    { text: "Select Intake", detail: "New Client Openings", icon: "CheckIcon" }
];


// --- FOOTER ---
export const FOOTER_COPYRIGHT_NAME = "Apuye Blessing";
export const FOOTER_TAGLINE = "Virtual Assistant & Customer Support Specialist";

export const SOCIAL_LINKS: ContactLink[] = [
    { type: 'email', href: `mailto:${CONTACT_EMAIL}`, text: 'Email', ariaLabel: 'Send an email to Apuye Blessing', icon: 'EmailIcon' },
    { type: 'whatsapp', href: WHATSAPP_LINK, text: 'WhatsApp', ariaLabel: 'Send Apuye Blessing a WhatsApp message', icon: 'WhatsAppIcon' },
    { type: 'linkedin', href: LINKEDIN_PROFILE_URL, text: 'LinkedIn', ariaLabel: 'View Apuye Blessing on LinkedIn', icon: 'LinkedInIcon' }
];