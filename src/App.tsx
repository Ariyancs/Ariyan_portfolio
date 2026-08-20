import { useEffect, useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ParticleField } from '@/components/ParticleField';
import { AnimatedNumber } from '@/components/AnimatedNumber';
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Code2,
  Database,
  Download,
  ExternalLink,
  FileText,
  Github,
  Linkedin,
  Mail,
  Menu,
  MoveRight,
  Network,
  GraduationCap,
  Palette,
  Award,
  X,
} from 'lucide-react';

type Project = {
  number: string;
  name: string;
  category: string;
  description: string;
  overview: string;
  features: string[];
  technologies: string[];
  accent: string;
  icon: typeof Code2;
};

const projects: Project[] = [
  {
    number: '01',
    name: 'Smart Health Monitoring Dashboard',
    category: 'Data & Healthcare',
    description: 'An interactive health analytics dashboard for monitoring patient vitals and trends.',
    overview: 'A data-focused project exploring how cleaned healthcare datasets can become clearer, more useful decision-making tools.',
    features: ['Patient vital and trend monitoring', 'Healthcare data cleaning with Pandas', 'Dynamic Power BI dashboards'],
    technologies: ['Pandas', 'Power BI', 'Data Analysis'],
    accent: 'cyan',
    icon: BarChart3,
  },
  {
    number: '02',
    name: 'Srijoni Healing Home',
    category: 'Frontend Development',
    description: 'A responsive healthcare website designed around clarity, trust, and easy navigation.',
    overview: 'A frontend project focused on mobile-first thinking and a calm, accessible experience for a healthcare audience.',
    features: ['Mobile-first responsive design', 'Reusable React components', 'Improved navigation across devices'],
    technologies: ['React.js', 'Tailwind CSS', 'JavaScript'],
    accent: 'mint',
    icon: Palette,
  },
  {
    number: '03',
    name: 'Fitness Tracker Application',
    category: 'Full-stack Application',
    description: 'A fitness tracking application built to help users follow progress over time.',
    overview: 'A MERN stack application combining secure user access with progress visualization and optimized APIs.',
    features: ['JWT-based authentication', 'Real-time progress visualization', 'Optimized backend APIs'],
    technologies: ['MERN Stack', 'JWT', 'MongoDB'],
    accent: 'amber',
    icon: Network,
  },
  {
    number: '04',
    name: 'GlucoSense AI',
    category: 'Machine Learning',
    description: 'An academic machine-learning and software project focused on blood glucose prediction.',
    overview: 'A research-oriented project bringing together Python data work, model development, and lightweight application interfaces.',
    features: ['Data processing with Pandas and NumPy', 'Scikit-learn model workflow', 'FastAPI and Streamlit context'],
    technologies: ['Python', 'Scikit-learn', 'FastAPI', 'Streamlit'],
    accent: 'blue',
    icon: BrainCircuit,
  },
];

const skillGroups = [
  { label: 'Frontend', icon: Code2, skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS', 'TypeScript', 'Vite'] },
  { label: 'Data & Analytics', icon: BarChart3, skills: ['Python', 'Pandas', 'SQL', 'Power BI', 'Data Cleaning', 'Data Analysis'] },
  { label: 'AI / Machine Learning', icon: BrainCircuit, skills: ['Scikit-learn', 'NumPy', 'Matplotlib', 'Joblib'] },
  { label: 'Backend / Database', icon: Database, skills: ['FastAPI', 'MongoDB', 'PostgreSQL', 'Supabase'] },
  { label: 'Tools', icon: BriefcaseBusiness, skills: ['Git', 'GitHub'] },
];

const navItems = ['About', 'Experience', 'Education', 'Projects', 'Skills', 'Contact'];

function App() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [parallaxY, setParallaxY] = useState<number>(0);
  const [mouseGlow, setMouseGlow] = useState<{ x: number; y: number }>({ x: -200, y: -200 });

  useScrollReveal();

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(scrollY > 24);
      setScrollProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0);
      setParallaxY(scrollY * 0.15);
    };
    const handleMouse = (e: MouseEvent): void => {
      setMouseGlow({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouse, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  const goTo = (section: string): void => {
    document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="site-shell">
      <div className="mouse-glow" style={{ left: `${mouseGlow.x}px`, top: `${mouseGlow.y}px` }} />
      <div className="orb orb-teal" />
      <div className="orb orb-deep" />
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
        <a className="brand" href="#top" aria-label="Ariyan Bhakat home">
          <span className="brand-mark">AB</span>
          <span>ARIYAN BHAKAT</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => <button key={item} onClick={() => goTo(item)}>{item}</button>)}
        </nav>
        <a className="header-resume" href="/resume/Ariyan_Resume__.pdf" download>
          Resume <ArrowUpRight size={15} />
        </a>
        <button className="menu-button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {menuOpen && <div className="mobile-nav"><div>{navItems.map((item) => <button key={item} onClick={() => goTo(item)}>{item}<ArrowUpRight size={17} /></button>)}<a href="/resume/Ariyan_Resume__.pdf" download onClick={() => setMenuOpen(false)}>Download resume <Download size={17} /></a></div></div>}

      <main id="top">
        <section className="hero section-grid">
          <div className="hero-particles"><ParticleField /></div>
          <div className="hero-copy reveal">
            <p className="eyebrow hero-stagger" style={{ animationDelay: '0s' }}><span className="eyebrow-dot" /> Hello, I&apos;m Ariyan</p>
            <h1><span className="hero-stagger" style={{ animationDelay: '.1s' }}>Frontend Developer</span><br /><em className="hero-stagger" style={{ animationDelay: '.2s' }}>building with Code &amp; Data.</em></h1>
            <p className="hero-intro hero-stagger" style={{ animationDelay: '.3s' }}>I&apos;m an ECE student and developer from Kolkata, creating responsive web experiences while exploring the systems, data, and intelligence behind them.</p>
            <div className="hero-actions hero-stagger" style={{ animationDelay: '.4s' }}>
              <button className="button button-primary" onClick={() => goTo('Projects')}>View my work <ArrowDown size={16} /></button>
              <a className="button button-quiet" href="/resume/Ariyan_Resume__.pdf" download>Download resume <Download size={16} /></a>
            </div>
            <div className="social-row hero-stagger" style={{ animationDelay: '.5s' }} aria-label="Social links">
              <a href="https://github.com/Ariyancs" target="_blank" rel="noreferrer"><Github size={17} /> GitHub </a>
              <a href="https://www.linkedin.com/in/ariyanbhakat/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn </a>
              <a href="mailto:bhakatariyan@gmail.com"><Mail size={17} />  Email</a>
            </div>
          </div>
          <div className="hero-visual reveal reveal-delay" style={{ transform: `translateY(${parallaxY}px)` }} aria-label="A visual map of Ariyan's technical interests">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="visual-core"><span>AB</span><small>BUILD / LEARN / SHIP</small></div>
            <div className="node node-react"><span className="node-line" /><b>React</b><small>interface</small></div>
            <div className="node node-python"><span className="node-line" /><b>Python</b><small>data layer</small></div>
            <div className="node node-sql"><span className="node-line" /><b>SQL</b><small>systems</small></div>
            <div className="node node-ml"><span className="node-line" /><b>ML</b><small>exploration</small></div>
            <div className="visual-caption">A curious mind<br />across the stack <MoveRight size={15} /></div>
          </div>
        </section>

        <section className="signal-strip" data-reveal aria-label="Profile highlights"><div className="signal-item"><span>01 / PROJECTS</span><strong><AnimatedNumber target={4} /> shipped</strong></div><div className="signal-divider" /><div className="signal-item"><span>02 / INTERNSHIPS</span><strong><AnimatedNumber target={2} /> completed</strong></div><div className="signal-divider" /><div className="signal-item"><span>03 / CGPA</span><strong><AnimatedNumber target={7} suffix="." />02</strong></div><div className="signal-divider" /><div className="signal-item"><span>04 / BASED IN</span><strong>Kolkata, India</strong></div></section>

        <div className="wave-divider" aria-hidden="true"><svg viewBox="0 0 1440 80" preserveAspectRatio="none"><path d="M0,40 C240,80 480,0 720,30 C960,60 1200,20 1440,45 L1440,80 L0,80 Z" /></svg></div>

        <div className="wave-divider wave-divider-flip" aria-hidden="true"><svg viewBox="0 0 1440 80" preserveAspectRatio="none"><path d="M0,40 C240,80 480,0 720,30 C960,60 1200,20 1440,45 L1440,80 L0,80 Z" /></svg></div>
        <section className="content-section about-section" id="about">
          <div className="section-kicker" data-reveal>01 <span>About me</span></div>
          <div className="about-layout" data-reveal data-reveal-delay="1">
            <h2>Making technology feel <em>clearer.</em></h2>
            <div className="about-copy"><p>I work at the intersection of thoughtful interfaces and meaningful data. My foundation is in Electronics and Communication Engineering, but my curiosity has taken me deep into frontend development, analytics, and machine learning.</p><p>Through internships and hands-on projects, I&apos;ve learned to enjoy the whole process: understanding a problem, shaping the experience, and building something that is useful in the real world.</p><div className="about-note"><Check size={17} /><span>Open to frontend, software, data, and AI-focused opportunities.</span></div></div>
          </div>
        </section>

        <section className="content-section experience-section" id="experience">
          <div className="section-kicker" data-reveal>02 <span>Experience</span></div>
          <div className="experience-list">
            <article className="experience-item" data-reveal><div className="experience-meta"><span>Sep 2025 — Dec 2025</span><span className="experience-index">01</span></div><div><p className="role-label">Technology Intern</p><h3>Utkal Labs Private Limited</h3><ul><li>Gained practical exposure to real-world software development processes and technologies.</li><li>Assisted in workflow analysis, debugging techniques, and system-level problem solving.</li><li>Demonstrated adaptability, learning ability, and strong professional work ethics.</li></ul></div></article>
            <article className="experience-item" data-reveal data-reveal-delay="1"><div className="experience-meta"><span>Jul 2025 — Sep 2025</span><span className="experience-index">02</span></div><div><p className="role-label">Web Development Intern</p><h3>Allotrope Systems Pvt. Ltd. <span>· Kolkata</span></h3><ul><li>Developed responsive web modules using React.js and Tailwind CSS for client-facing applications.</li><li>Built reusable UI components to enhance maintainability and development efficiency.</li><li>Collaborated with senior developers to debug UI issues and improve user experience.</li><li>Utilized Git for version control and collaborative development workflows.</li></ul></div></article>
          </div>
        </section>

        <section className="content-section education-section" id="education">
          <div className="section-kicker" data-reveal>03 <span>Education</span></div>
          <div className="education-intro" data-reveal><h2>A foundation built<br /><em>to keep learning.</em></h2><p>My academic path started in electronics and communication, and grew into a practical interest in software, data, and intelligent systems.</p></div>
          <div className="education-list">
            <article className="education-item education-item-featured" data-reveal><div className="education-icon"><GraduationCap size={24} /></div><div><p className="education-type">Undergraduate degree</p><h3>B.Tech — Electronics and Communication Engineering</h3><p className="education-school">RCC Institute of Information Technology <span>· Kolkata</span></p></div><div className="education-date"><strong>2022 — 2026</strong><span>CGPA · 7.02</span></div></article>
            <article className="education-item" data-reveal data-reveal-delay="1"><div className="education-icon"><Award size={21} /></div><div><p className="education-type">Higher Secondary · CBSE</p><h3>Delhi Public School, Ruby Park</h3><p className="education-school">Kolkata</p></div><div className="education-date"><strong>2021</strong><span>Marks · 82%</span></div></article>
            <article className="education-item" data-reveal data-reveal-delay="2"><div className="education-icon"><Award size={21} /></div><div><p className="education-type">Secondary · ICSE</p><h3>Don Bosco English Medium School</h3></div><div className="education-date"><strong>2019</strong><span>Marks · 88%</span></div></article>
          </div>
        </section>

        <section className="content-section projects-section" id="projects">
          <div className="section-kicker" data-reveal>04 <span>Selected work</span></div>
          <div className="projects-heading" data-reveal><h2>Projects with a point<br /><em>of view.</em></h2><p>A selection of frontend, analytics, and machine-learning work — each one a chance to turn complexity into something more useful.</p></div>
          <div className="projects-list">{projects.map((project) => { const Icon = project.icon; return <article className={`project-card accent-${project.accent}`} data-reveal data-reveal-delay={Number(project.number) - 1} key={project.name}><div className="project-visual"><div className="project-visual-grid" /><div className="project-icon"><Icon size={25} /></div><span className="project-number">{project.number}</span><div className="project-decoration"><span /><span /><span /></div></div><div className="project-content"><p className="project-category">{project.category}</p><h3>{project.name}</h3><p>{project.description}</p><div className="tag-row">{project.technologies.map((tag) => <span key={tag}>{tag}</span>)}</div><button className="text-link" onClick={() => setSelectedProject(project)}>Explore project <ChevronRight size={16} /></button></div></article>; })}</div>
        </section>

        <section className="content-section skills-section" id="skills">
          <div className="section-kicker" data-reveal>05 <span>Toolkit</span></div><div className="skills-heading" data-reveal><h2>Tools for turning<br /><em>ideas into output.</em></h2><p>Technologies I&apos;ve worked with across projects, coursework, and professional experience.</p></div><div className="skills-grid">{skillGroups.map((group) => { const Icon = group.icon; return <div className="skill-group" key={group.label}><div className="skill-group-title"><Icon size={19} /><h3>{group.label}</h3></div><div className="skill-list">{group.skills.map((skill) => <span key={skill} className="skill-tag">{skill}</span>)}</div></div>; })}</div>
        </section>

        <section className="credentials-section" data-reveal><div><span className="mini-label">Verified milestones</span><h2>Learning in public,<br /><em>building in practice.</em></h2><p className="credentials-lead">A compact archive of the experiences and certificates that have shaped my path so far.</p></div><div className="credential-list"><div><span>Leadership</span><strong>Editor-in-Chief</strong><small>RCCIIT Journalism Club</small></div><div><span>AI participation</span><strong>AI Progression · AI for Future Workforce</strong><small>Intel Digital Readiness · 16 Jul — 20 Dec 2025</small></div><div><span>Professional certification</span><strong>Software Programmer — Python</strong><small>NASSCOM / IT-ITeS SSC · Gold category · Issued 18 Mar 2026</small></div></div></section>

        <section className="documents-section"><div className="section-kicker" data-reveal>06 <span>Documented work</span></div><div className="documents-heading" data-reveal><h2>Proof behind<br /><em>the work.</em></h2><p>Every milestone below is backed by one of the documents shared with this portfolio. The details are kept factual and easy to scan.</p></div><div className="documents-grid"><article data-reveal><div className="document-top"><FileText size={20} /><span>Resume</span></div><h3>Ariyan Bhakat — Resume</h3><p>Experience, academic background, projects, skills, and achievements in one place.</p><a className="text-link" href="/resume/Ariyan_Resume__.pdf" download>Download document <Download size={15} /></a></article><article data-reveal data-reveal-delay="1"><div className="document-top"><Award size={20} /><span>Internship certificate</span></div><h3>Utkal Labs Private Limited</h3><p>Certificate of completion for the internship program from 10 Sep — 10 Dec 2025.</p><span className="document-status">Verified certificate</span></article><article data-reveal data-reveal-delay="2"><div className="document-top"><Award size={20} /><span>Internship certificate</span></div><h3>Allotrope Systems Pvt. Ltd.</h3><p>Web Development internship certificate covering 03 Jul — 03 Sep 2025.</p><span className="document-status">Verified certificate</span></article><article data-reveal data-reveal-delay="3"><div className="document-top"><BrainCircuit size={20} /><span>Program certificate</span></div><h3>Intel Digital Readiness</h3><p>Participation in the AI Progression program as part of AI for Future Workforce.</p><span className="document-status">Issued 20 Dec 2025</span></article><article data-reveal data-reveal-delay="4"><div className="document-top"><Award size={20} /><span>Assessment certificate</span></div><h3>NASSCOM — Software Programmer</h3><p>Python assessment certificate with a Gold category result and 78% score.</p><span className="document-status">Issued 18 Mar 2026</span></article></div></section>

        <div className="wave-divider" aria-hidden="true"><svg viewBox="0 0 1440 80" preserveAspectRatio="none"><path d="M0,40 C240,80 480,0 720,30 C960,60 1200,20 1440,45 L1440,80 L0,80 Z" /></svg></div>
        <section className="contact-section" id="contact"><div className="contact-mark" data-reveal data-reveal-variant="left">LET&apos;S<br /><em>MAKE</em><br />SOMETHING.</div><div className="contact-content" data-reveal data-reveal-delay="1"><p className="eyebrow"><span className="eyebrow-dot" /> Have a project in mind?</p><h2>Let&apos;s build something <em>meaningful.</em></h2><a className="contact-email" href="mailto:bhakatariyan@gmail.com">bhakatariyan@gmail.com <ArrowUpRight size={23} /></a><div className="contact-links"><a href="https://github.com/Ariyancs" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a><a href="https://www.linkedin.com/in/ariyanbhakat/" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a></div></div></section>
      </main>

      <footer><div className="footer-brand" data-reveal><span className="brand-mark">AB</span><strong>ARIYAN BHAKAT</strong><small>Frontend Developer · Data &amp; AI Enthusiast</small></div><span>© 2026 Ariyan Bhakat</span><a href="#top">Back to top <ArrowUpRight size={15} /></a></footer>

      {selectedProject && <div className="modal-backdrop modal-backdrop--open" role="presentation" onClick={() => setSelectedProject(null)}><div className="project-modal project-modal--open" role="dialog" aria-modal="true" aria-labelledby="project-title" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close project details"><X size={20} /></button><p className="project-category">{selectedProject.number} / {selectedProject.category}</p><h2 id="project-title">{selectedProject.name}</h2><p className="modal-overview">{selectedProject.overview}</p><div className="modal-block"><span>Key features</span>{selectedProject.features.map((feature) => <p key={feature}><Check size={16} /> {feature}</p>)}</div><div className="modal-block"><span>Technology</span><div className="tag-row">{selectedProject.technologies.map((tag) => <span key={tag}>{tag}</span>)}</div></div><a className="text-link" href="https://github.com/Ariyancs" target="_blank" rel="noreferrer">View GitHub profile <ExternalLink size={15} /></a></div></div>}
    </div>
  );
}

export default App;
