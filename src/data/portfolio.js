// // ─────────────────────────────────────────────────────────────
// // Single source of truth for the portfolio.
// // Edit content here — components render whatever is present.
// // Empty / missing fields simply hide their UI (nothing breaks).
// // ─────────────────────────────────────────────────────────────

// export const profile = {
//   name: 'Sumon Debnath',
//   brand: 'SUMON',
//   greeting: 'Hi, I’m',
//   role: 'Backend-focused Software Developer.',
//   intro:
//     'I build reliable web applications and REST APIs with Python, Django, PostgreSQL, and modern frontend technologies.',
//   about: [
//     'I am a software developer focused on backend development and web application engineering.',
//     'My main interests include Python, Django, REST APIs, databases, distributed systems, and building practical software projects.',
//     'I enjoy learning by building real applications and improving my understanding of software architecture, databases, APIs, and problem solving.',
//   ],
//   email: 'debnathsumon1708@gmail.com',
//   contactLabel: 'send me an email',
//   // Profile image lives in /public/profile.webp. Clearing this field makes
//   // the Avatar fall back to a monogram automatically.
//   image: '/profile.webp',
// };

// // public/resume.pdf exists, so the bottom navigation download is active.
// export const resume = { label: 'Resume', href: '/resume.pdf', download: true };

// // Section headings/intros shown by the Section component.
// export const sections = {
//   about: { title: 'About' },
//   experience: { title: 'Work Experience' },
//   education: { title: 'Education' },
//   skills: { title: 'Skills' },
//   projects: {
//     title: 'Check out my latest work',
//     intro:
//       "I've worked on a variety of projects, from backend APIs to practical web applications.",
//   },
//   problemSolving: {
//     title: 'Problem Solving',
//     intro:
//       'I actively practice data structures, algorithms and competitive programming, building strong engineering fundamentals.',
//   },
//   contact: {
//     label: 'Contact',
//     title: 'Get in Touch',
//     intro:
//       "I'm open to software engineering opportunities, backend development roles, and interesting technical projects.",
//   },
// };

// export const skills = [
//   { category: 'Languages', items: ['Python', 'JavaScript', 'C', 'C++'] },
//   {
//     category: 'Backend',
//     items: ['Django', 'Django REST Framework', 'REST API', 'Node.js'],
//   },
//   { category: 'Database', items: ['PostgreSQL', 'MySQL', 'Redis'] },
//   { category: 'Frontend', items: ['React', 'HTML', 'CSS', 'Tailwind CSS'] },
//   { category: 'DevOps & Tools', items: ['Git', 'GitHub', 'Docker', 'Linux'] },
// ];

// export const projects = [
//   {
//     title: 'E-Commerce Backend API',
//     year: '2026',
//     description:
//       'A Django REST Framework backend for an e-commerce platform with JWT authentication, products, categories, cart, orders, reviews, addresses and payment-related functionality.',
//     technologies: ['Django', 'DRF', 'PostgreSQL', 'JWT', 'Cloudinary'],
//     github: 'https://github.com/sumondebnath/E-Commerce-Backend-API',
//     live: null,
//   },
//   {
//     title: 'Creatifinity REST API',
//     description:
//       'A REST API for users, blog posts, categories, reviews, authentication and contact messages.',
//     technologies: ['Django', 'DRF', 'PostgreSQL', 'JWT'],
//     github: null,
//     live: null,
//   },
//   {
//     title: 'Library Management System',
//     description:
//       'A Django-based library management application for books, categories, users, borrowing and transactions.',
//     technologies: ['Django', 'PostgreSQL', 'Tailwind CSS'],
//     github: null,
//     live: null,
//   },
//   {
//     title: 'Job Queue / Distributed Task Processing System',
//     description:
//       'A backend system for asynchronous job processing with queues, workers, retries, scheduling, monitoring and task status tracking.',
//     technologies: [
//       'Python',
//       'Django',
//       'DRF',
//       'PostgreSQL',
//       'Redis',
//       'Celery',
//       'Docker',
//     ],
//     github: null,
//     live: null,
//   },
// ];

// // Competitive programming / problem solving.
// // Fill in your username and url per platform when available — empty fields
// // render nothing. The Linktree hub card only appears once a url is set.
// export const problemSolving = {
//   platforms: [
//     {
//       platform: 'LeetCode',
//       username: 'debnathsumon1708',
//       url: 'https://leetcode.com/u/debnathsumon1708/',
//       description: 'Data structures and algorithms practice.',
//     },
//     {
//       platform: 'Codeforces',
//       username: 'debnathsumon1708',
//       url: '',
//       description: 'Competitive programming and contests.',
//     },
//     {
//       platform: 'CodeChef',
//       username: 'debnathsumon1708',
//       url: '',
//       description: 'Competitive programming and learning challenges.',
//     },
//   ],
//   linktree: {
//     label: 'Linktree',
//     url: '',
//     description: 'All my competitive programming profiles in one place.',
//   },
// };

// export const experience = [
//   {
//     company: 'Nexsoft',
//     role: 'Software Engineering Intern',
//     year: '2026',
//     description:
//       'Contributing to practical software work while strengthening backend development, API design, and collaborative engineering skills.',
//   },
// ];

// export const education = [
//   {
//     institution: 'Bangladesh University of Business and Technology (BUBT)',
//     degree: 'B.Sc. in Electrical and Electronic Engineering',
//     status: 'Graduated / awaiting final defence',
//     description:
//       'Focused on engineering fundamentals while developing practical skills in software development, backend engineering, databases, and web technologies.',
//   },
// ];

// // Social links used by the bottom navigation and contact section.
// // Add a Linktree entry here (icon: 'linktree') when you have one.
// export const socialLinks = [
//   {
//     name: 'GitHub',
//     href: 'https://github.com/sumondebnath',
//     icon: 'github',
//     label: 'GitHub',
//   },
//   {
//     name: 'LinkedIn',
//     href: 'https://www.linkedin.com/in/sumon-debnath',
//     icon: 'linkedin',
//     label: 'LinkedIn',
//   },
//   {
//     name: 'Email',
//     href: 'mailto:debnathsumon1708@gmail.com',
//     icon: 'mail',
//     label: 'Email',
//   },
// ];

// ─────────────────────────────────────────────────────────────
// Single source of truth for the portfolio.
// Edit content here — components render whatever is present.
// Empty / missing fields simply hide their UI (nothing breaks).
// Content is kept in sync with public/resume.pdf.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Sumon Debnath',
  brand: 'SUMON',
  greeting: 'Hi, I’m',
  role: 'Backend-focused Full-Stack Developer.',
  intro:
    'I build and deploy production web applications and REST APIs with Python, Django REST Framework, PostgreSQL, and React.',
  about: [
    'I am a backend-focused full-stack developer with hands-on experience building and deploying production web applications.',
    'I work with Python, Django REST Framework, React, and PostgreSQL, with a focus on REST API design, JWT authentication, role-based authorization, and relational database modeling.',
    'I have solved 550+ algorithmic problems across LeetCode, Codeforces, and CodeChef, which keeps my data structures and problem-solving fundamentals sharp.',
    'I hold a B.Sc. in Electrical and Electronic Engineering and I am looking for an entry-level backend or full-stack software engineering role.',
  ],
  email: 'debnathsumon1708@gmail.com',
  contactLabel: 'send me an email',
  // Profile image lives in /public/profile.webp. Clearing this field makes
  // the Avatar fall back to a monogram automatically.
  image: '/profile.webp',
};

// public/resume.pdf exists, so the bottom navigation download is active.
export const resume = { label: 'Resume', href: '/resume.pdf', download: true };

// Section headings/intros shown by the Section component.
export const sections = {
  about: { title: 'About' },
  experience: { title: 'Work Experience' },
  education: { title: 'Education & Training' },
  skills: { title: 'Skills' },
  projects: {
    title: 'Check out my latest work',
    intro:
      'Production projects from a full-stack e-commerce platform to a deployed library management system.',
  },
  problemSolving: {
    title: 'Problem Solving',
    intro:
      'I have solved 550+ problems across LeetCode, Codeforces, and CodeChef, building strong data structures and algorithms fundamentals.',
  },
  contact: {
    label: 'Contact',
    title: 'Get in Touch',
    intro:
      "I'm looking for entry-level backend and full-stack software engineering roles, and I'm open to interesting technical projects.",
  },
};

export const skills = [
  {
    category: 'Languages',
    items: ['C', 'C++', 'Python', 'JavaScript (ES6+)'],
  },
  {
    category: 'Backend',
    items: [
      'Django',
      'Django REST Framework',
      'Django MVT',
      'REST API Design',
      'JWT',
      'Authentication & Authorization',
    ],
  },
  { category: 'Database', items: ['PostgreSQL', 'MySQL', 'SQLite'] },
  {
    category: 'Frontend',
    items: [
      'React',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Bootstrap',
      'React Router',
      'Axios',
    ],
  },
  {
    category: 'Tools & Deployment',
    items: ['Git', 'GitHub', 'Postman', 'Gunicorn', 'Render', 'Cloudinary'],
  },
  {
    category: 'CS Fundamentals',
    items: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Database Management',
    ],
  },
];

// TODO: fill in every `null` / '' URL below from your resume links.
// Empty values render nothing, so nothing breaks while they are blank.
// `repos` is a new optional field (see ProjectCard note): use it when a
// project has separate frontend/backend repositories.
export const projects = [
  {
    title: 'E-Commerce Platform',
    year: '2026',
    description:
      'A full-stack e-commerce application with product catalog browsing, search, filtering, wishlist, cart, and checkout-to-order workflows across 24+ REST endpoints. Uses stateless JWT authentication with access and refresh tokens, separate customer and administrator permissions, a role-based admin dashboard for products, inventory, categories, and orders, and a 10-table PostgreSQL schema.',
    technologies: [
      'React',
      'Django REST Framework',
      'PostgreSQL',
      'Simple JWT',
      'Tailwind CSS',
      'TanStack Query',
      'Cloudinary',
    ],
    github: null,
    repos: [
      { label: 'Frontend', href: '' }, // TODO: frontend repo URL
      {
        label: 'Backend',
        href: 'https://github.com/sumondebnath/E-Commerce-Backend-API',
      },
    ],
    live: null, // TODO: live site URL
  },
  {
    title: 'Library Management System',
    description:
      'A server-rendered library management system with user authentication, profile management, book browsing, category filtering, and book reviews. Borrowing and returning workflows are backed by an account balance and deposit system, with email notifications through Gmail SMTP. Deployed on Render with Gunicorn, using SQLite in development and PostgreSQL in production.',
    technologies: [
      'Python',
      'Django',
      'PostgreSQL',
      'Django Templates',
      'Tailwind CSS',
      'Gunicorn',
      'Render',
    ],
    github: null, // TODO: source code URL
    live: null, // TODO: live site URL
  },
];

// Competitive programming / problem solving.
// Fill in your url per platform when available — empty fields render
// nothing. The Linktree hub card only appears once a url is set.
export const problemSolving = {
  platforms: [
    {
      platform: 'LeetCode',
      username: 'debnathsumon1708',
      url: 'https://leetcode.com/u/debnathsumon1708/',
      description: '250+ problems solved. Contest rating: 1535.',
    },
    {
      platform: 'Codeforces',
      username: 'debnathsumon1708', // TODO: verify username
      url: '', // TODO: profile URL
      description: '200+ problems solved in competitive programming.',
    },
    {
      platform: 'CodeChef',
      username: 'debnathsumon1708', // TODO: verify username
      url: '', // TODO: profile URL
      description: '100+ problems solved in competitive programming.',
    },
  ],
  linktree: {
    label: 'Linktree',
    url: 'https://github.com/sumondebnath',
    description: 'All my competitive programming profiles in one place.',
  },
};

export const experience = [
  {
    company: 'Nexsoft',
    role: 'Software Engineering Intern',
    year: '2026',
    description:
      'Contributing to practical software work while strengthening backend development, API design, and collaborative engineering skills.',
  },
];

// Education and training share one section (title: "Education & Training").
export const education = [
  {
    institution: 'Bangladesh University of Business and Technology (BUBT)',
    degree: 'B.Sc. in Electrical and Electronic Engineering',
    startDate: '2022',
    endDate: '2026',
    status: 'Graduated / awaiting final defence',
    description:
      'CGPA: 3.23 / 4.00. Focused on engineering fundamentals while developing practical skills in software development, backend engineering, databases, and web technologies.',
  },
  {
    institution: 'Phitron',
    degree: 'CSE Fundamentals',
    startDate: 'Spring 2023',
    endDate: 'Spring 2023',
    description:
      'Programming fundamentals in C and C++, data structures and algorithms, and object-oriented programming. Credential ID: PHBATCH361409601061.',
    credentialUrl: 'https://github.com/sumondebnath', // TODO: paste verification URL
    credentialLabel: 'Verify certificate',
  },
];

// Social links used by the bottom navigation and contact section.
// Add a Linktree entry here (icon: 'linktree') when you have one.
export const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/sumondebnath',
    icon: 'github',
    label: 'GitHub',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sumon-debnath',
    icon: 'linkedin',
    label: 'LinkedIn',
  },
  {
    name: 'Email',
    href: 'mailto:debnathsumon1708@gmail.com',
    icon: 'mail',
    label: 'Email',
  },
];
