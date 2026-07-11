import jobPortalImg from './assets/jobportal_togi.png'
import sgaCakrawalaImg from './assets/sgaCakrawala.jpg'
import cakFestImg from './assets/cakrawalafestival.jpg'
import movieCatalogImg from './assets/movieCatalog.jpg'
import ptAltindoImg from './assets/ptAltindo.jpg'
import qurbanAsyikImg from './assets/qurbanAsyik.jpg'

export const profile = {
  name: `Sulthan Rizal Halfa 'Ilmi`,
  role: 'Software Developer | Frontend Developer',
  tagline: 'Crafting interfaces that feel alive.',
  summary:
    'Fourth-semester Computer Science student at Universitas Cakrawala with hands-on experience building responsive landing pages, organizational websites, and functional applications. I care deeply about clean UI, smooth user experience, and interface optimization.',
  location: 'Jakarta, Indonesia',
  github: 'https://github.com/sulthanrizal',
  cv: 'https://drive.google.com/file/d/1WANwpuYSAZQMYz5WYG_I8L0SKkNZ8qED/view?usp=sharing',
  portfolioDoc:
    'https://drive.google.com/file/d/1HYm4MKV-JHebJutFQd4rBXqHMiMpIzfb/view?usp=sharing',
}

export const education = [
  {
    school: 'Universitas Cakrawala',
    place: 'Jakarta Selatan, Indonesia',
    degree: 'Bachelor of Computer Science',
    period: '2024 — 2028 · Semester 4',
  },
  {
    school: 'SMA Minhajushobirin',
    place: 'Jakarta Timur, Indonesia',
    degree: 'Science (IPA)',
    period: '2019 — 2023',
  },
]

export const experience = [
  {
    company: 'PT TOG Indonesia',
    role: 'Frontend Developer Intern',
    place: 'Jakarta Pusat',
    period: 'Apr 2026 — Present',
    current: true,
    points: [
      'Spearheaded end-to-end development of a comprehensive Job Portal web application from scratch.',
      'Collaborated closely with UI/UX designers and backend developers to ship a functional, highly responsive platform.',
      'Implemented efficient data-fetching via the Fetch API for dynamic content rendering.',
    ],
    tech: ['React.js', 'Tailwind CSS', 'Fetch API'],
  },
  {
    company: 'PT Chronaxis Labs',
    role: 'Fullstack Developer Intern',
    place: 'Tangerang Selatan',
    period: 'Dec 2025 — Mar 2026',
    points: [
      'Developed a fullstack web application and administrative dashboard.',
      'Built frontend and backend features: UI components, API integration, and database interaction.',
      'Coordinated workflows between frontend, backend, and mobile developers for cross-platform integration.',
    ],
    tech: ['React (Vite)', 'TypeScript', 'Tailwind CSS', 'Prisma', 'Express.js'],
  },
  {
    company: 'PT Prasimax',
    role: 'Front-End Developer Intern',
    place: 'Depok',
    period: 'Oct — Nov 2025',
    points: [
      'Developed functional dashboard UI for internal company needs.',
      'Created dynamic, reusable, and responsive components.',
      'Collaborated with the development team to ensure smooth data integration.',
    ],
    tech: ['React.js', 'MUI Material', 'CSS'],
  },
  {
    company: 'PT Altindo Mitra Perkasa',
    role: 'Freelance Front-End Developer',
    place: 'Remote',
    period: '2024',
    points: [
      'Built a fully responsive company landing page.',
      'Structured modular components to support future backend API integration.',
    ],
    tech: ['React.js', 'SCSS', 'JavaScript'],
  },
]

export const projects = [
  {
    title: 'Job Portal Platform',
    context: 'PT TOG Indonesia',
    description:
      'A comprehensive job portal web application built end-to-end from scratch — job listings, search, and application flows with a fully responsive UI.',
    tech: ['React.js', 'Tailwind CSS', 'Fetch API'],
    image: jobPortalImg,
    hue: 262,
    links: [],
    badge: 'Internal',
  },
  {
    title: 'SGA Cakrawala',
    context: 'Organization Website',
    description:
      'Official website of the Student Government Association — landing pages built and continuously improved with an 8-member team.',
    tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Vite'],
    image: sgaCakrawalaImg,
    hue: 285,
    links: [{ label: 'Live Site', url: 'https://sga-cakrawala.org' }],
  },
  {
    title: 'CakFest',
    context: 'Official Event Website',
    description:
      "Event website for Universitas Cakrawala's flagship festival — promotional pages and event information.",
    tech: ['React.js', 'TypeScript', 'Tailwind CSS'],
    image: cakFestImg,
    hue: 322,
    links: [{ label: 'Live Site', url: 'https://cakfest.sga-cakrawala.org' }],
  },
  {
    title: 'Movie Catalog — TMDB',
    context: 'Web App',
    description:
      'A film catalog consuming the TMDB API — dynamic movie data, search, and detail pages.',
    tech: ['React.js', 'SCSS', 'Axios'],
    image: movieCatalogImg,
    hue: 195,
    links: [
      { label: 'GitHub', url: 'https://github.com/sulthanrizal/Test_Project_Tmdb' },{
        label:'Live Site', url : 'https://test-project-tmdb.vercel.app/'
      },
    ],
  },
  {
    title: 'Altindo Mitra Perkasa',
    context: 'Freelance',
    description:
      'Fully responsive company landing page with modular, reusable components ready for backend integration.',
    tech: ['React.js', 'SCSS', 'JavaScript'],
    image: ptAltindoImg,
    hue: 210,
    links: [{ label: 'Live Site', url: 'https://altindomitraperkasa.com' }],
  },
  {
    title: 'Qurban-Asiq App',
    context: 'Mobile App',
    description:
      'Mobile application for qurban services — UI design and core components, with API integration for main features.',
    tech: ['React Native'],
    image: qurbanAsyikImg,
    hue: 155,
    links: [],
    badge: 'In Development',
  },
]

export const skills = [
  {
    group: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js', 'Tailwind CSS', 'SCSS', 'Responsive Design'],
  },
  {
    group: 'Backend & Data',
    items: ['Node.js', 'Express.js', 'Prisma', 'Drizzle', 'Axios'],
  },
  {
    group: 'Mobile',
    items: ['React Native'],
  },
  {
    group: 'Tools',
    items: ['Git / GitHub', 'Vite', 'Figma', 'Postman', 'VS Code', 'MUI', 'Chakra UI'],
  },
]

export const marquee = [
  'React.js', 'TypeScript', 'Tailwind CSS', 'Next.js', 'SCSS', 'Express.js',
  'Prisma', 'Drizzle', 'React Native', 'Vite', 'Node.js', 'Figma',
]
