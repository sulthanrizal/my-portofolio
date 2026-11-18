import jobPortalImg from './assets/JobPortal.png'
import sgaCakrawalaImg from './assets/sgaCakrawala.jpg'
import cakFestImg from './assets/cakrawalafestival.jpg'
import movieCatalogImg from './assets/movieCatalog.jpg'
import ptAltindoImg from './assets/ptAltindo.jpg'
import qurbanAsyikImg from './assets/qurbanAsyik.jpg'

export const profile = {
  name: `Sulthan Rizal Halfa 'Ilmi`,
  role: {
    en: 'Software Developer | Frontend Developer',
    id: 'Pengembang Perangkat Lunak | Pengembang Front-End',
  },
  tagline: {
    en: 'Crafting interfaces that feel alive.',
    id: 'Merancang antarmuka yang terasa hidup.',
  },
  summary: {
    en: 'Fourth-semester Computer Science student at Universitas Cakrawala with hands-on experience building responsive landing pages, organizational websites, and functional applications. I care deeply about clean UI, smooth user experience, and interface optimization.',
    id: 'Mahasiswa Ilmu Komputer semester empat di Universitas Cakrawala dengan pengalaman langsung membangun landing page responsif, website organisasi, dan aplikasi fungsional. Saya sangat peduli pada UI yang bersih, pengalaman pengguna yang mulus, dan optimasi antarmuka.',
  },
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
    degree: { en: 'Bachelor of Computer Science', id: 'Sarjana Ilmu Komputer' },
    period: '2024 — 2028 · Semester 4',
  },
  {
    school: 'SMA Minhajushobirin',
    place: 'Jakarta Timur, Indonesia',
    degree: { en: 'Science (IPA)', id: 'IPA (Sains)' },
    period: '2019 — 2023',
  },
]

export const experience = [
  {
    company: 'PT TOG Indonesia',
    role: { en: 'Frontend Developer Intern', id: 'Magang Frontend Developer' },
    place: 'Jakarta Pusat',
    period: 'Apr 2026 — Present',
    current: true,
    points: {
      en: [
        'Spearheaded end-to-end development of a comprehensive Job Portal web application from scratch.',
        'Collaborated closely with UI/UX designers and backend developers to ship a functional, highly responsive platform.',
        'Implemented efficient data-fetching via the Fetch API for dynamic content rendering.',
      ],
      id: [
        'Memimpin pengembangan end-to-end aplikasi web Job Portal secara menyeluruh dari nol.',
        'Berkolaborasi erat dengan desainer UI/UX dan backend developer untuk merilis platform yang fungsional dan sangat responsif.',
        'Menerapkan pengambilan data yang efisien melalui Fetch API untuk rendering konten dinamis.',
      ],
    },
    tech: ['React.js', 'Tailwind CSS', 'Fetch API'],
  },
  {
    company: 'PT Chronaxis Labs',
    role: { en: 'Fullstack Developer Intern', id: 'Magang Fullstack Developer' },
    place: 'Tangerang Selatan',
    period: 'Dec 2025 — Mar 2026',
    points: {
      en: [
        'Developed a fullstack web application and administrative dashboard.',
        'Built frontend and backend features: UI components, API integration, and database interaction.',
        'Coordinated workflows between frontend, backend, and mobile developers for cross-platform integration.',
      ],
      id: [
        'Mengembangkan aplikasi web fullstack dan dashboard administratif.',
        'Membangun fitur frontend dan backend: komponen UI, integrasi API, dan interaksi database.',
        'Mengoordinasikan alur kerja antara developer frontend, backend, dan mobile untuk integrasi lintas platform.',
      ],
    },
    tech: ['React (Vite)', 'TypeScript', 'Tailwind CSS', 'Prisma', 'Express.js'],
  },
  {
    company: 'PT Prasimax',
    role: { en: 'Front-End Developer Intern', id: 'Magang Front-End Developer' },
    place: 'Depok',
    period: 'Oct — Nov 2025',
    points: {
      en: [
        'Developed functional dashboard UI for internal company needs.',
        'Created dynamic, reusable, and responsive components.',
        'Collaborated with the development team to ensure smooth data integration.',
      ],
      id: [
        'Mengembangkan UI dashboard fungsional untuk kebutuhan internal perusahaan.',
        'Membuat komponen yang dinamis, reusable, dan responsif.',
        'Berkolaborasi dengan tim pengembang untuk memastikan integrasi data berjalan lancar.',
      ],
    },
    tech: ['React.js', 'MUI Material', 'CSS'],
  },
  {
    company: 'PT Altindo Mitra Perkasa',
    role: { en: 'Freelance Front-End Developer', id: 'Front-End Developer Freelance' },
    place: 'Remote',
    period: '2024',
    points: {
      en: [
        'Built a fully responsive company landing page.',
        'Structured modular components to support future backend API integration.',
      ],
      id: [
        'Membangun landing page perusahaan yang sepenuhnya responsif.',
        'Menyusun komponen modular untuk mendukung integrasi API backend di masa depan.',
      ],
    },
    tech: ['React.js', 'SCSS', 'JavaScript'],
  },
]

export const projects = [
  {
    title: 'Job Portal Platform',
    context: { en: 'PT TOG Indonesia', id: 'PT TOG Indonesia' },
    description: {
      en: 'A comprehensive job portal web application built end-to-end from scratch — job listings, search, and application flows with a fully responsive UI.',
      id: 'Aplikasi web job portal yang komprehensif, dibangun end-to-end dari nol — listing lowongan, pencarian, dan alur lamaran dengan UI yang sepenuhnya responsif.',
    },
    tech: ['React.js', 'Tailwind CSS', 'Fetch API'],
    image: jobPortalImg,
    hue: 262,
    links: [{ type: 'live', url: 'https://lensahire.com/' }],
  },
  {
    title: 'SGA Cakrawala',
    context: { en: 'Organization Website', id: 'Website Organisasi' },
    description: {
      en: 'Official website of the Student Government Association — landing pages built and continuously improved with an 8-member team.',
      id: 'Website resmi Badan Eksekutif Mahasiswa — landing page yang dibangun dan terus ditingkatkan bersama tim beranggotakan 8 orang.',
    },
    tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Vite'],
    image: sgaCakrawalaImg,
    hue: 285,
    links: [{ type: 'live', url: 'https://sga-cakrawala.org' }],
  },
  {
    title: 'CakFest',
    context: { en: 'Official Event Website', id: 'Website Resmi Acara' },
    description: {
      en: "Event website for Universitas Cakrawala's flagship festival — promotional pages and event information.",
      id: 'Website acara untuk festival unggulan Universitas Cakrawala — halaman promosi dan informasi acara.',
    },
    tech: ['React.js', 'TypeScript', 'Tailwind CSS'],
    image: cakFestImg,
    hue: 322,
    links: [{ type: 'live', url: 'https://cakfest.sga-cakrawala.org' }],
  },
  {
    title: 'Movie Catalog — TMDB',
    context: { en: 'Web App', id: 'Aplikasi Web' },
    description: {
      en: 'A film catalog consuming the TMDB API — dynamic movie data, search, and detail pages.',
      id: 'Katalog film yang mengonsumsi TMDB API — data film dinamis, pencarian, dan halaman detail.',
    },
    tech: ['React.js', 'SCSS', 'Axios'],
    image: movieCatalogImg,
    hue: 195,
    links: [
      { type: 'github', url: 'https://github.com/sulthanrizal/Test_Project_Tmdb' },
      { type: 'live', url: 'https://test-project-tmdb.vercel.app/' },
    ],
  },
  {
    title: 'Altindo Mitra Perkasa',
    context: { en: 'Freelance', id: 'Freelance' },
    description: {
      en: 'Fully responsive company landing page with modular, reusable components ready for backend integration.',
      id: 'Landing page perusahaan yang sepenuhnya responsif dengan komponen modular dan reusable, siap untuk integrasi backend.',
    },
    tech: ['React.js', 'SCSS', 'JavaScript'],
    image: ptAltindoImg,
    hue: 210,
    links: [{ type: 'live', url: 'https://pt-altindo-mitra-perkasa.vercel.app/' }],
  },
  {
    title: 'Qurban-Asiq App',
    context: { en: 'Mobile App', id: 'Aplikasi Mobile' },
    description: {
      en: 'Mobile application for qurban services — UI design and core components, with API integration for main features. Live on iOS; Android is coming soon.',
      id: 'Aplikasi mobile untuk layanan qurban — desain UI dan komponen inti, dengan integrasi API untuk fitur utama. Sudah tersedia di iOS; Android segera menyusul.',
    },
    tech: ['React Native'],
    image: qurbanAsyikImg,
    hue: 155,
    links: [{ type: 'appstore', url: 'https://apps.apple.com/id/app/qurban-asyik/id6753735706?l=id' }],
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
