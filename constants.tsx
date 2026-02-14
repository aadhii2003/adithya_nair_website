
import { Project, Experience, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'ringme',
    title: 'Ringme',
    company: 'Crudops Pvt Ltd',
    description: 'QR-based Communication App. Built Flask-based admin panel and RESTful APIs for user, package, and feature management. Implemented signaling logic for audio, video, and chat communication via QR-based access.',
    tags: ['Flask', 'REST API', 'WebRTC', 'QR Tech'],
    icon: 'fa-qrcode',
    color: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'pickframes',
    title: 'Pickframes',
    company: 'Dubai Client / Crudops',
    description: 'E-commerce Platform. Developed full-stack ecommerce website with image customization features and responsive UI. Implemented checkout flow, payment integration, and admin dashboard.',
    tags: ['Flask', 'HTML5', 'CSS3', 'JS', 'E-commerce'],
    icon: 'fa-shopping-cart',
    color: 'from-blue-600 to-indigo-600'
  },
  {
    id: 'spinel',
    title: 'Spinel Aurora',
    company: 'Crudops Pvt Ltd',
    description: 'Jewelry E-commerce App. Designed and deployed full platform using Flask and MySQL with AWS cloud hosting. Handled backend APIs and optimized performance.',
    tags: ['Flask', 'MySQL', 'AWS', 'Optimization'],
    icon: 'fa-gem',
    color: 'from-purple-600 to-indigo-600'
  },
  {
    id: 'picks',
    title: 'Picks',
    company: 'Crudops Pvt Ltd',
    description: 'Blog App Backend. Built REST APIs using Flask for mobile blog application including authentication and content management.',
    tags: ['Flask', 'RESTful API', 'Auth'],
    icon: 'fa-blog',
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 'tcr',
    title: 'TCR App',
    company: 'Crudops Pvt Ltd',
    description: 'Flutter + Firebase. Developed Streamlit-based admin panel connected with Firebase for real-time data updates and management.',
    tags: ['Streamlit', 'Firebase', 'Flutter Integration'],
    icon: 'fa-mobile-alt',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    id: 'offer-app',
    title: 'Offer Management App',
    company: 'Crudops Pvt Ltd',
    description: 'Flutter + FastAPI. Developed FastAPI backend and web-based admin panel to manage company subscriptions, offers, and user access. Implemented real-time offer updates.',
    tags: ['FastAPI', 'Flutter', 'Real-time'],
    icon: 'fa-gift',
    color: 'from-emerald-500 to-teal-600'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    role: 'Junior Python Full Stack Developer',
    company: 'Crudops Pvt Ltd',
    duration: 'January 2025 – Present',
    description: 'Developing and maintaining scalable web applications using Python, Django/Flask. Collaborating with cross-functional teams to implement features and optimize user experience.'
  },
  {
    id: 'exp2',
    role: 'Python Full Stack Development Internship',
    company: 'Luminar Techno Lab',
    duration: 'May 2024 – November 2024',
    description: 'Worked with a development team to build and enhance web applications. Utilized Python, Django, and front-end tools for efficient project delivery.'
  }
];

export const SKILLS: Skill[] = [
  // Backend
  { name: 'Python', category: 'Backend', icon: 'fa-brands fa-python' },
  { name: 'Django', category: 'Backend', icon: 'fa-server' },
  { name: 'Flask', category: 'Backend', icon: 'fa-flask' },
  { name: 'FastAPI', category: 'Backend', icon: 'fa-bolt' },
  { name: 'RESTful API', category: 'Backend', icon: 'fa-project-diagram' },
  // Frontend
  { name: 'HTML5', category: 'Frontend', icon: 'fa-brands fa-html5' },
  { name: 'CSS3', category: 'Frontend', icon: 'fa-brands fa-css3-alt' },
  { name: 'JavaScript', category: 'Frontend', icon: 'fa-brands fa-js' },
  { name: 'Bootstrap', category: 'Frontend', icon: 'fa-brands fa-bootstrap' },
  { name: 'React.js', category: 'Frontend', icon: 'fa-brands fa-react' },
  // Databases
  { name: 'PostgreSQL', category: 'Databases', icon: 'fa-database' },
  { name: 'MySQL', category: 'Databases', icon: 'fa-database' },
  { name: 'SQLite', category: 'Databases', icon: 'fa-database' },
  // DevOps
  { name: 'AWS (Basics)', category: 'DevOps', icon: 'fa-brands fa-aws' },
  { name: 'Digital Ocean', category: 'DevOps', icon: 'fa-brands fa-digital-ocean' },
  { name: 'VPS (Hostinger)', category: 'DevOps', icon: 'fa-hdd' },
  { name: 'Deployment', category: 'DevOps', icon: 'fa-cloud-upload-alt' },
  // Tools
  { name: 'Git & GitHub', category: 'Tools', icon: 'fa-brands fa-github' },
  { name: 'Postman', category: 'Tools', icon: 'fa-paper-plane' }
];
