import { Project, Experience, Skill, Education } from './types';
import jollynamesLogo from './assets/jollynameslogo.png';
import dealOffLogo from './assets/deal_off_logo.png';
import ringmeLogo from './assets/ringmeLogo.avif';
import pickframesLogo from './assets/pickframes-logo.webp';
import spinelLogo from './assets/spinel_logo.png';


export const PROJECTS: Project[] = [
  {
    id: 'jollynames',
    title: 'Jollynames.ai',
    company: 'Personal Project',
    description: 'AI-powered Name & Image Generation Platform using Gemini API.',
    longDescription: 'Jollynames.ai is a cutting-edge AI platform that leverages Google Gemini API for creative name generation and DALL-E/Image API integration. Built with React for the frontend and a robust Flask/Bootstrap admin panel hosted on Hostinger.',
    features: ['Gemini API Integration', 'AI Image Generation', 'Flask Admin Dashboard', 'Responsive Bootstrap UI'],
    tags: ['React', 'Flask', 'Gemini AI', 'Hostinger'],
    icon: 'fa-robot',
    logo: jollynamesLogo,
    color: 'from-blue-500 to-emerald-400',
    link: 'https://jollynames.ai'

  },
  {
    id: 'deal-off',
    title: 'Deal Off',
    company: 'Crudops Pvt Ltd',
    description: 'High-performance offer management and subscription tracking system.',
    longDescription: 'Deal Off is an enterprise-grade application for managing company subscriptions, offers, and user access. Using FastAPI, I built a high-performance backend serving thousands of requests with minimal latency.',
    features: ['High-performance FastAPI Backend', 'Role-based Access Control', 'Subscription Management', 'Real-time Stats Dashboard'],
    tags: ['FastAPI', 'Flutter Integration', 'Real-time'],
    icon: 'fa-gift',
    logo: dealOffLogo,
    color: 'from-emerald-500 to-teal-600'

  },
  {
    id: 'ringme',
    title: 'Ringme',
    company: 'Crudops Pvt Ltd',
    description: 'QR-based Communication App. Built Flask-based admin panel and RESTful APIs.',
    longDescription: 'Ringme is a specialized communication platform that utilizes QR technology to facilitate secure and instant connections. I developed the robust Flask-based administrative infrastructure and designed the core RESTful API architecture for seamless user management and real-time signaling.',
    features: ['QR-based authentication', 'Real-time signaling for WebRTC', 'Flask Admin Dashboard', 'RESTful API Design'],
    tags: ['Flask', 'REST API', 'WebRTC', 'QR Tech'],
    icon: 'fa-qrcode',
    logo: ringmeLogo,
    color: 'from-emerald-500 to-teal-600',
    github: 'https://github.com/aadhii2003/ringme'

  },
  {
    id: 'pickframes',
    title: 'Pickframes',
    company: 'Dubai Client / Crudops',
    description: 'E-commerce Platform with image customization features and responsive UI.',
    longDescription: 'Pickframes is a sophisticated e-commerce solution tailored for a Dubai-based client. The platform features an advanced image customization engine, allowing users to personalize products before purchase. I implemented the full-stack architecture, focusing on performance and cross-device responsiveness.',
    features: ['Dynamic Image Customization', 'Secure Checkout Flow', 'Admin Inventory Management', 'Responsive Design'],
    tags: ['Flask', 'HTML5', 'CSS3', 'JS', 'E-commerce'],
    icon: 'fa-shopping-cart',
    logo: pickframesLogo,
    color: 'from-teal-500 to-emerald-700'

  },
  {
    id: 'spinel',
    title: 'Spinel Aurora',
    company: 'Crudops Pvt Ltd',
    description: 'Jewelry E-commerce App using Flask and MySQL with AWS cloud hosting.',
    longDescription: 'Spinel Aurora is a premium jewelry e-commerce platform. I architected the backend using Flask and MySQL, ensuring data integrity and high-speed query performance. The application is deployed on AWS, utilizing cloud infrastructure for maximum reliability.',
    features: ['Cloud-native Deployment', 'Secure Transaction Handling', 'Advanced Product Filtering', 'Inventory Synchronization'],
    tags: ['Flask', 'MySQL', 'AWS', 'Optimization'],
    icon: 'fa-gem',
    logo: spinelLogo,
    color: 'from-emerald-600 to-green-700'

  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    role: 'Junior Python Full Stack Developer',
    company: 'Crudops Pvt Ltd',
    duration: 'January 2025 – Present',
    description: 'Developing and maintaining scalable web applications using Python, Django/Flask. Collaborating with cross-functional teams to implement features and optimize user experience.',
    responsibilities: [
      'Architecting RESTful APIs using Flask and FastAPI',
      'Implementing real-time communication features with WebRTC',
      'Managing PostgreSQL and MySQL databases for performance',
      'Deploying applications on AWS and Hostinger VPS'
    ]
  },
  {
    id: 'exp2',
    role: 'Python Full Stack Development Internship',
    company: 'Luminar Techno Lab',
    duration: 'May 2024 – November 2024',
    description: 'Worked with a development team to build and enhance web applications. Utilized Python, Django, and front-end tools for efficient project delivery.',
    responsibilities: [
      'Assisted in designing database schemas',
      'Developed frontend components using Bootstrap and JS',
      'Participated in code reviews and agile methodologies'
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    id: 'edu1',
    degree: "BCA Graduate",
    institution: "PVM College of Arts and Science",
    duration: "2021 - 2024",
    description: "Bachelor of Computer Applications - Focused on software engineering and application development cycles.",
    icon: "fa-graduation-cap"
  },
  {
    id: 'edu2',
    degree: "Python Full Stack Intern",
    institution: "Luminar Techno Lab",
    duration: "2024",
    description: "Intensive training in full-stack architecture, focusing on Python, React, and server-side logic.",
    icon: "fa-code"
  }
];

export const SKILLS: Skill[] = [
  // Backend
  { name: 'Python', category: 'Backend', icon: 'fa-brands fa-python' },
  { name: 'Flask', category: 'Backend', icon: 'fa-flask' },
  { name: 'Django', category: 'Backend', icon: 'fa-server' },
  { name: 'FastAPI', category: 'Backend', icon: 'fa-bolt' },
  { name: 'REST API', category: 'Backend', icon: 'fa-project-diagram' },
  { name: 'Signaling', category: 'Backend', icon: 'fa-satellite-dish' },
  // Databases
  { name: 'MySQL', category: 'Databases', icon: 'fa-database' },
  { name: 'PostgreSQL', category: 'Databases', icon: 'fa-database' },
  { name: 'SQLite', category: 'Databases', icon: 'fa-database' },
  // Server
  { name: 'AWS', category: 'DevOps', icon: 'fa-brands fa-aws' },
  { name: 'Hostinger', category: 'DevOps', icon: 'fa-server' },
  { name: 'DigitalOcean', category: 'DevOps', icon: 'fa-brands fa-digital-ocean' },
  { name: 'Server Migrations', category: 'DevOps', icon: 'fa-exchange-alt' },
  // Tools
  { name: 'Git', category: 'Tools', icon: 'fa-brands fa-git' },
  { name: 'Postman', category: 'Tools', icon: 'fa-paper-plane' },
  { name: 'Termius', category: 'Tools', icon: 'fa-terminal' },
  { name: 'Filezilla', category: 'Tools', icon: 'fa-file-upload' },
  { name: 'Docker', category: 'Tools', icon: 'fa-brands fa-docker' }
];
