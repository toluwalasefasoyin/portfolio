export const projects = [
  {
    num: '01',
    type: 'Personal Project',
    name: 'JobTrackr',
    desc: 'A full-stack job application tracker built independently to solve a real problem. Spring Boot REST API with JWT auth, BCrypt password hashing, PostgreSQL database, and a React + TypeScript frontend — deployed to production on Render and Vercel.',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'React', 'TypeScript', 'JWT', 'Render', 'Vercel'],
    live: 'https://jobtrackr-theta.vercel.app',
    github: 'https://github.com/toluwalasefasoyin/jobtrackr',
    featured: true,
  },
  {
    num: '02',
    type: 'Team Project · 6 people',
    name: 'BiteBook POS System',
    desc: 'Full-stack point-of-sale system with Spring Boot APIs, JWT auth, role-based access control, normalized MySQL schema, and React dashboards with real-time state. Built in a 6-person agile team.',
    tags: ['Java', 'Spring Boot', 'MySQL', 'React', 'OWASP'],
    live: null,
    github: 'https://github.com/toluwalasefasoyin',
    featured: false,
  },
  {
    num: '03',
    type: 'Team Project · 3 people',
    name: 'Real Estate Platform',
    desc: 'Built the React + TypeScript frontend with reusable components, client-side routing, and a fully typed service layer. Configured Apigee API gateway with rate limiting and API key authentication. Deployed frontend to AWS S3.',
    tags: ['React', 'TypeScript', 'Apigee', 'AWS S3'],
    live: null,
    github: 'https://github.com/toluwalasefasoyin',
    featured: false,
  },
];

export const skills = [
  {
    category: 'Languages',
    items: ['Java', 'TypeScript', 'JavaScript', 'Python', 'C#', 'SQL', 'Bash'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['Spring Boot', 'React', 'Spring Security', 'JPA/Hibernate'],
  },
  {
    category: 'Cloud & Databases',
    items: ['AWS S3', 'PostgreSQL', 'MySQL', 'Render', 'Vercel'],
  },
  {
    category: 'Tools',
    items: ['Git/GitHub', 'Postman', 'IntelliJ', 'VS Code', 'Jira', 'Linux'],
  },
  {
    category: 'Concepts',
    items: ['REST API Design', 'JWT Auth', 'RBAC', 'OOP', 'Agile/Scrum', 'OWASP', 'CI/CD'],
  },
  {
    category: 'Certifications',
    items: ['Google Cybersecurity', 'CompTIA Security+'],
  },
];
