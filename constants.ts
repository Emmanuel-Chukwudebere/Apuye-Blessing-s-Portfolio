import { NavLink, Metric, Service, PortfolioItem, Differentiator, Testimonial, ContactLink, ContactMethod, AvailabilityInfo } from './types'; // Removed AboutAchievement

// Import images as modules for proper bundling
import apuyePortrait from './assets/apuye-blessing.jpeg';
import aboutImage from './assets/about.png';
import complianceSuccess from './assets/compliance-success.png';
import cxTransformation from './assets/cx-transformation.png';
import costOptimisation from './assets/cost-optimisation.png';
import whyChooseMe from './assets/why-choose-me.png';

// --- LOGO TEXT ---
export const HEADER_LOGO_TEXT = "Apuye Blessing";
export const FOOTER_LOGO_TEXT = "Apuye Blessing";
export const HEADER_RESUME_TEXT = "View My Resume";
export const HEADER_RESUME_LINK = "/resume";

// --- HERO SECTION ---
export const HERO_VISUAL_URL = apuyePortrait; // Local portrait image
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
export const HEADER_CTA_TEXT = "Hire Me";

// --- ABOUT ME SECTION ---
export const ABOUT_VISUAL_URL = aboutImage; // Local about section image
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
    id: 'risk-management',
    category: 'Risk Management',
    title: 'Strategic Risk Management & Compliance',
    description: "Analyzed complex customer portfolios, implemented strategic solutions, and ensured 100% regulatory compliance for a financial services company. Developed SOPs that improved customer experience by 25%.",
    metric: "100% Compliance",
    impact: "Ensured 100% regulatory compliance and improved customer experience by 25%.",
    imageUrl: complianceSuccess,
    imageAlt: 'A graphic representing compliance and success',
    isFeatured: true,
    tags: ["Risk Analysis", "Regulatory Compliance", "Process Improvement", "CRM"],
    liveUrl: "#",
    caseStudyUrl: "/portfolio/risk-management",
  },
  {
    id: 'logistics-coordination',
    category: 'Logistics & Operations',
    title: 'End-to-End Logistics & Cost Optimization',
    description: "Managed complete order fulfillment, achieving 95%+ on-time delivery. Optimized inventory systems, reducing customer complaints by 30%, and identified cost-saving opportunities of over ₦200,000 monthly.",
    metric: "₦200,000+ Saved",
    impact: "Reduced customer complaints by 30% and achieved significant monthly savings.",
    imageUrl: costOptimisation,
    imageAlt: 'A graphic representing cost optimisation',
    tags: ["Logistics", "Inventory Management", "Cost Reduction", "Supplier Coordination"],
    liveUrl: "#",
    caseStudyUrl: "/portfolio/logistics-coordination",
  },
  {
    id: 'cx-transformation',
    category: 'Customer Experience',
    title: 'Customer Experience Transformation',
    description: "Revamped customer support processes by implementing new CRM strategies and communication workflows, resulting in a 40% improvement in customer satisfaction scores and faster issue resolution times.",
    metric: "40% CSAT Rise",
    impact: "Boosted customer satisfaction and streamlined support workflows.",
    imageUrl: cxTransformation,
    imageAlt: 'A graphic representing customer experience transformation',
    tags: ["CX Strategy", "CRM", "Customer Support", "Process Optimization"],
    liveUrl: "#",
    caseStudyUrl: "/portfolio/cx-transformation",
  }
];

// --- WHY CHOOSE ME SECTION ---
export const WHYCHOOSEME_VISUAL_URL = whyChooseMe;
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

export const personalInfo = {
    name: "Apuye Blessing",
    title: "Virtual Assistant",
    location: "Benin City, Nigeria",
    phone: "09169301646",
    email: "apuyeamorye@gmail.com",
    linkedin: "https://www.linkedin.com/in/apuyeamorye",
};

export const professionalSummary = "Certified Virtual Assistant with hands-on training in CRM systems, digital communication platforms, and remote customer support. Proven track record in risk management and logistics coordination with 95%+ customer satisfaction rates. Specializes in problem resolution, process optimization, and maintaining exceptional service standards in fast-paced environments. Ready to leverage analytical skills and customer service expertise to support business operations remotely.";

export const experiences = [
    {
        role: "Risk Management Specialist",
        company: "Gamma Loans, Calabar",
        period: "JANUARY 2025 - PRESENT",
        responsibilities: [
            "Analyze complex customer portfolios and implement strategic solutions for 50+ daily cases",
            "Collaborate with cross-functional teams to ensure 100% regulatory compliance",
            "Develop standard operating procedures that improved customer experience by 25%",
            "Manage sensitive customer data with strict confidentiality protocols",
            "Utilize CRM systems for case tracking and resolution documentation",
        ],
    },
    {
        role: "Logistics Manager",
        company: "Debbie's Fashion House, Benin City",
        period: "JANUARY 2024 - MARCH 2025",
        responsibilities: [
            "Managed end-to-end customer order fulfillment achieving 95%+ on-time delivery",
            "Coordinated with suppliers, vendors, and internal teams to resolve customer issues within 24 hours",
            "Implemented inventory management systems reducing customer complaints by 30%",
            "Analyzed operational data to identify cost-saving opportunities worth ₦200,000+ monthly",
            "Maintained detailed records and reports for management review",
        ],
    },
];

export const education = [
    {
        degree: "Virtual Assistant Professional Training",
        institution: "ALX Africa",
        period: "APRIL 2025 - JUNE 2025",
        details: [
            "Customer Relationship Management (CRM) Systems Training",
            "Digital Communication Tools & Remote Support Platforms",
            "Advanced Problem Resolution & Customer Escalation Techniques",
            "Client Relationship Development & Retention Strategies",
            "Remote Work Best Practices & Professional Communication",
        ],
    },
    {
        degree: "Bachelor of Arts in History and International Studies",
        institution: "University of Calabar, Calabar, Nigeria",
        period: "FEBRUARY 2019 - AUGUST 2024",
        details: [
            "Relevant Coursework: Global Communication, Research Methods, International Relations",
            "Developed analytical thinking and cross-cultural communication skills",
            "Completed research projects requiring data analysis and presentation skills",
        ],
    },
];

export const skills = {
    "Virtual Assistant Skills": [
        "Customer Relationship Management (CRM) Systems",
        "Email Management & Digital Communication",
        "Calendar Scheduling & Appointment Setting",
        "Data Entry & Database Management",
        "Remote Customer Support & Live Chat",
        "Problem Resolution & Escalation Management",
    ],
    "Technical Proficiencies": [
        "Microsoft Office Suite (Word, Excel, PowerPoint)",
        "Google Workspace (Docs, Sheets, Forms, Calendar)",
        "Video Conferencing Tools (Zoom, Teams, Meet)",
        "Digital Communication Platforms",
        "Basic Social Media Management",
        "Customer Support Ticketing Systems",
    ],
    "Professional Skills": [
        "Project Coordination & Process Optimization",
        "Risk Assessment & Compliance Management",
        "Inventory Management & Order Fulfillment",
        "Multi-stakeholder Communication",
        "Time Management & Prioritization",
        "Cross-functional Team Collaboration",
    ],
};

export const languages = ["English Language (Fluent)", "ASL (Fluent)"];

export const availability = [
    "Full-time and Part-time positions",
    "Flexible scheduling including US/EU business hours",
    "Immediate availability for interviews and onboarding",
    "Open to short-term projects and long-term commitments",
];

export const references = "Available upon request";