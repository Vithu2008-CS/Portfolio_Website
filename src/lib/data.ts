// ─── Portfolio Data (Extracted from CV) ──────────────────────

export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  subtitles: string[];
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  linkedinUrl: string;
  github: string;
  githubUrl: string;
  about: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  grade?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

// ─── Navigation ─────────────────────────────────────────────

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

// ─── Personal Info ──────────────────────────────────────────

export const personalInfo: PersonalInfo = {
  name: "Vithurshan Thangavel",
  firstName: "Vithurshan",
  lastName: "Thangavel",
  title: "Software Engineer",
  subtitles: ["Full-Stack", "Frontend", "Backend", "UI/UX Design"],
  email: "Vithurshanthangavel@gmail.com",
  phone: "+94 70 539 4050",
  location: "Batticaloa, Sri Lanka",
  linkedin: "vithurshan20",
  linkedinUrl: "https://www.linkedin.com/in/vithurshan20",
  github: "Vithu2008-CS",
  githubUrl: "https://github.com/Vithu2008-CS",
  about:
    "I am a final-year BSc (Hons) Computer Science undergraduate passionate about building impactful software and solving real-world problems. I combine creative thinking with strong technical fundamentals, ensuring my solutions are user-centered, scalable, and built with clean engineering practices. My experience across the full development lifecycle — from ideation and design to implementation and deployment — allows me to adapt quickly and contribute meaningfully to any team.",
};

// ─── Skills ─────────────────────────────────────────────────

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "layout",
    skills: ["React.js", "HTML5", "CSS3", "JavaScript", "Responsive Design"],
  },
  {
    title: "Backend & Databases",
    icon: "server",
    skills: ["Node.js", "Express.js", "PHP", "Laravel", "MySQL", "MongoDB"],
  },
  {
    title: "Languages & Tools",
    icon: "code",
    skills: ["JavaScript", "Python", "Java", "C++", "ARM Assembly", "TypeScript"],
  },
  {
    title: "DevOps & Practices",
    icon: "wrench",
    skills: [
      "Git",
      "Docker",
      "VS Code",
      "Agile",
      "API Documentation",
      "Code Reviews",
    ],
  },
];

// ─── Projects ───────────────────────────────────────────────

export const projects: Project[] = [
  {
    title: "Premier Retail Shop",
    description:
      "A high-performance, mobile-first e-commerce platform with a premium dark-mode admin dashboard. Features 3D glassmorphism UI, live search auto-suggest, QR code scanning for inventory management, bulk discount engine, and a full driver logistics dashboard.",
    techStack: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "JavaScript", "Vite"],
    githubUrl: "https://github.com/Vithu2008-CS/Premier_Shop",
  },
  {
    title: "Waste Collection Route Optimization System",
    description:
      "A comprehensive route optimization system designed to streamline waste collection operations. Built with intelligent pathfinding algorithms and interactive mapping to improve efficiency and reduce operational costs for municipal waste management.",
    techStack: ["React.js", "Node.js", "MongoDB", "Express.js", "Google Maps API"],
    githubUrl: "https://github.com/Vithu2008-CS/waste-management-system",
  },
  {
    title: "Price Book Calculator",
    description:
      "A dynamic pricing calculator application that enables users to compute and manage product pricing with an intuitive interface. Features real-time calculations, product catalog management, and comprehensive pricing analytics.",
    techStack: ["JavaScript", "HTML5", "CSS3", "PHP", "MySQL"],
    githubUrl: "https://github.com/Vithu2008-CS/price-book-calculator",
  },
];

// ─── Education ──────────────────────────────────────────────

export const education: Education[] = [
  {
    institution: "Eastern University Sri Lanka",
    degree: "BSc. Hons in Computer Science (R) - Final Year",
    period: "2021 – 2026",
  },
  {
    institution: "IDM Achievers International Campus",
    degree: "Diploma in ICT & Computing (Level 4)",
    period: "2019 – 2020",
    grade: "Distinction",
  },
];

// ─── Coursework ─────────────────────────────────────────────

export interface CourseworkCategory {
  title: string;
  icon: string;
  courses: string[];
}

export const coursework: CourseworkCategory[] = [
  {
    title: "Software Engineering & Development",
    icon: "code",
    courses: [
      "Object Oriented Programming",
      "Data Structures & Algorithms",
      "Software Engineering",
      "Rapid Application Development",
      "Advanced Software Engineering (Laravel)",
      "Compiler Theory & Programming Languages",
    ],
  },
  {
    title: "Web, Databases & UI",
    icon: "layout",
    courses: [
      "Web Based Application Development",
      "Database Management Systems",
      "Advanced DBMS & Query Optimization",
      "User Interface Design",
      "System Analysis & Design",
    ],
  },
  {
    title: "AI, ML & Data Science",
    icon: "brain",
    courses: [
      "Machine Learning",
      "Image Processing & Computer Vision",
      "Data Mining & Big Data Analytics",
      "Intelligent Systems & Knowledge Bases",
      "Logic Programming (Prolog)",
    ],
  },
  {
    title: "Systems & Architecture",
    icon: "cpu",
    courses: [
      "Computer Architecture & Operating Systems",
      "Parallel & Distributed Computing",
      "Computer Systems & Assembly Language",
      "Computer Graphics & Transformations",
    ],
  },
  {
    title: "Networking & Security",
    icon: "shield",
    courses: [
      "Computer Networks (ISO/OSI, TCP/IP)",
      "Information System Security & Cryptography",
      "Systems & Network Administration",
      "Cloud Computing & Virtualization",
    ],
  },
  {
    title: "Mathematics & Theory",
    icon: "sigma",
    courses: [
      "Computing Mathematics (Logic & Proofs)",
      "Theory of Computation (Automata)",
      "Advanced Combinatorics & Recurrence",
      "Research Methods",
    ],
  },
];

