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
    "I am a final-year BSc (Hons) Computer Science undergraduate passionate about UI/UX design and product thinking. I combine creative wireframing with technical logic, ensuring my solutions are user-centered and feasible for development. My background in building full-stack applications allows me to collaborate effectively with development teams, bridging the gap between design concepts and final code.",
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
    skills: ["JavaScript", "Python", "C++", "ARM Assembly", "TypeScript"],
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
