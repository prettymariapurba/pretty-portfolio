import { useRef, useState, type FormEvent } from 'react';
import { ArrowUpRight, ArrowRight, Code2, Palette, Database, Mail, Linkedin, MapPin, ChevronLeft, ChevronRight, X, Brain, MessageCircle, Users, Compass, Clock, GraduationCap, CalendarCheck, Lightbulb } from 'lucide-react';
import { projects } from './projects';
import { organizations } from './organizations';
import { experiences } from './experiences';
import '../styles/portfolio.css';

// Customize identity here; project descriptions are in projects.ts.
const profile = { name: 'Pretty Maria Purba', email: 'prettyforcollege@gmail.com', linkedin: 'https://www.linkedin.com/in/pretty-maria-purba' };
const tools = ['React', 'TypeScript', 'Next.js', 'Figma', 'Python', 'SQL', 'Git', 'System Analysis', 'Power BI'];
// CSS previews illustrate each project; they are not actual product screenshots.
// Soft skills from the portfolio CV.
const softSkills = [
 { name: 'Critical Thinking & Analysis', icon: Brain },
 { name: 'Problem Solving', icon: Lightbulb },
 { name: 'Communication & Presentation', icon: MessageCircle },
 { name: 'Teaching & Mentoring', icon: GraduationCap },
 { name: 'Teamwork & Collaboration', icon: Users },
 { name: 'Leadership & Coordination', icon: Compass },
 { name: 'Event Management', icon: CalendarCheck },
 { name: 'Adaptability', icon: Compass },
 { name: 'Time Management', icon: Clock },
 { name: 'Decision Making', icon: Brain },
];
function IdeaLamp({ className = '' }: { className?: string }) {
 return <svg className={className} viewBox="0 0 160 160" fill="none" aria-hidden="true">
  <circle cx="80" cy="70" r="58" fill="#FFF3B0" opacity=".35"/>
  <g stroke="#498F79" strokeWidth="4" strokeLinecap="round"><path d="M80 7v10M27 27l8 8M7 75h11M133 27l-8 8M153 75h-11"/></g>
  <path d="M80 30c-25 0-44 19-44 43 0 17 9 28 20 39 5 5 7 10 7 17h34c0-7 2-12 7-17 11-11 20-22 20-39 0-24-19-43-44-43Z" fill="#FFF3B0" stroke="#397F6B" strokeWidth="3"/>
  <path d="M53 66c2-10 9-17 19-20" stroke="#FFFEF2" strokeWidth="7" strokeLinecap="round"/>
  <path d="m69 105 5 23m17-23-5 23" stroke="#C49B47" strokeWidth="3" strokeLinecap="round"/>
  <rect x="61" y="126" width="38" height="18" rx="6" fill="#A5D5BF" stroke="#397F6B" strokeWidth="3"/>
  <path d="M65 135h30M72 146h16" stroke="#397F6B" strokeWidth="3" strokeLinecap="round"/>
  <circle cx="66" cy="77" r="3" fill="#2B2D42"/><circle cx="94" cy="77" r="3" fill="#2B2D42"/>
  <path d="M69 89q11 13 22 0" stroke="#2B2D42" strokeWidth="3" strokeLinecap="round"/>
 </svg>;
}
function Preview({ index, image, title }: { index: number; image: string | null; title: string }) {
 const [failed, setFailed] = useState(false);
 if (image?.startsWith('/images/projects/') && !failed) return <div className={title === 'Edu-Map Nusantara' ? 'project-cover project-cover-edumap' : title === 'DOTS-CMS' ? 'project-cover project-cover-dots-cms' : title === 'DOTS-RIA' ? 'project-cover project-cover-dots-ria' : 'project-cover'}><img src={image} alt={`Project cover: ${title}`} loading="lazy" onError={() => setFailed(true)}/></div>;
 return <div className={`project-preview preview-${index % 3}`} aria-hidden="true"><span className="preview-caption">CONCEPT PREVIEW</span>{index % 3 === 0 ? <div className="mini-dashboard"><div className="mini-sidebar">t.<i/><i/><i/></div><div className="mini-content"><b>A little clarity. A big picture.</b><div className="mini-stats"><span>Insights<strong>22,144+</strong></span><span>Explore<strong>↗</strong></span></div><div className="chart">{[35,55,43,74,63,88,70,100,85].map((h,i) => <i key={i} style={{height:`${h}%`}}/>)}</div></div></div> : index % 3 === 1 ? <div className="mini-browser"><div className="browser-dots">● ● ●</div><small>THOUGHTFULLY CONNECTED</small><h3>Better systems.<br/>Brighter possibilities.</h3><span className="mock-button">Explore the platform ↗</span><div className="preview-orbit"/></div> : <div className="reweave-art"><strong>reweave ✳</strong><p>A new chapter<br/>for every thread.</p><div className="fabric"/><div className="fabric second"/></div>}</div>;
}
// Add achievement photos here to extend the slider.
const achievementSlides = [
 { src: '/images/achievements/teaching-assistant-2025.jpeg', title: 'Institut Teknologi Del', caption: 'Teaching Assistant - 2025' },
 { src: '/images/achievements/pt-dkn-intern-2026.jpeg', title: 'PT DKN', caption: 'Software Engineer Intern - 2026' },
 { src: '/images/achievements/bpc-uajy-2026.png', title: 'BPC UAJY', caption: 'Top 4 - 2026' },
 { src: '/images/achievements/iflc-2026.jpeg', title: 'International Future Leaders Competition (IFLC)', caption: 'Silver Medal - 2026' },
 { src: '/images/achievements/lombok-essay-2026.jpeg', title: 'Lombok Essay Competition 6', caption: 'Silver Medal - 2026' },
 { src: '/images/achievements/del-debate-2025.jpg', title: 'Del Debate Championship', caption: 'Best Adjudicator - 2025' },
 { src: '/images/projects/tiur-competition-1.jpeg', title: 'Del AI Hackathon', caption: '3rd Place - TIUR - 2026' },
 { src: '/images/projects/tiur-competition-2.jpeg', title: 'Del AI Hackathon', caption: 'With team TIUR - 2026' },
];
function AchievementSlider() {
 const [active, setActive] = useState(0);
 const slide = achievementSlides[active];
 const change = (direction: number) => setActive(index => (index + direction + achievementSlides.length) % achievementSlides.length);
 return <div className="achievement-slider" role="region" aria-roledescription="carousel" aria-label="Achievement photos" onKeyDown={event => { if(event.key === 'ArrowLeft') {event.preventDefault();change(-1);} if(event.key === 'ArrowRight') {event.preventDefault();change(1);} }}>
  <div className="achievement-slide" role="group" aria-roledescription="slide" aria-label={`${active + 1} of ${achievementSlides.length}`}>
   <a href={slide.src} target="_blank" rel="noreferrer" aria-label={`Open photo ${slide.title} in a new tab`}><img src={slide.src} alt={`Photo of ${slide.title} - ${slide.caption}`} loading="lazy"/></a>
   <div className="achievement-caption" aria-live="polite" aria-atomic="true"><h3>{slide.title}</h3><p>{slide.caption}</p></div>
  </div>
  <div className="achievement-controls"><button type="button" onClick={() => change(-1)} aria-label="Previous photo"><ChevronLeft size={20}/></button><div className="achievement-dots">{achievementSlides.map((item,index) => <button key={item.src} type="button" aria-label={`Show photo ${index+1}: ${item.title}`} aria-current={active===index ? 'true' : undefined} onClick={() => setActive(index)}><span/></button>)}</div><button type="button" onClick={() => change(1)} aria-label="Next photo"><ChevronRight size={20}/></button></div>
 </div>;
}

export default function App() {

 const organizationTrack = useRef<HTMLDivElement>(null);
 function slideOrganizations(direction: number) { const track = organizationTrack.current; if (track) track.scrollBy({ left: direction * (track.clientWidth + 24), behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }); }
 const [all, setAll] = useState(false);
 const [selected, setSelected] = useState<(typeof projects)[number] | null>(null);
 const [status, setStatus] = useState('');
 const dialog = useRef<HTMLDialogElement>(null);
 const featured = ['TIUR','DOTS-CMS','REWEAVE'].map(title => projects.find(p => p.title === title)!);
 const visible = all ? [...featured,...projects.filter(p => !featured.includes(p))] : featured;
 function send(event: FormEvent<HTMLFormElement>) {
  event.preventDefault(); const data = new FormData(event.currentTarget);
  const body = `Hi Pretty!\n\n${data.get('message')}\n\n${data.get('name')}\n${data.get('email')}`;
  window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(`Let's collaborate — ${data.get('name')}`)}&body=${encodeURIComponent(body)}`;
  setStatus('Your draft opens in your email app. Send it there, or use the email address shown here.');
 }
 return <div className="portfolio"><a className="skip-link" href="#main">Skip to content</a><div className="ambient" aria-hidden="true"><div className="blob pink-blob"/><div className="blob blue-blob"/><div className="blob yellow-blob"/><div className="grain"/></div>
 <header className="container site-header"><a className="wordmark" href="#home" aria-label="Pretty Maria Purba, home">Pretty Maria Purba</a><a className="header-hello" href="#contact">Say hello <ArrowUpRight size={16}/></a></header>
 <nav className="bottom-taskbar" aria-label="Main navigation">{[['About','#about'],['Experience','#experience'],['Projects','#projects'],['Skills','#skills'],['Organizations','#organizations']].map(([label,href]) => <a key={href} href={href}>{label}</a>)}</nav>
 <main id="main"><section id="home" className="container hero"><div className="hero-copy"><h1>Hi, I'm Pretty.<br/>Turning ideas<br/>into <em>impact.</em></h1><svg className="underline" viewBox="0 0 260 18" aria-hidden="true"><path d="M4 13Q125-4 255 10"/></svg><p>Software, data, and a little curiosity.<br/>I build digital experiences that are useful,<br className="desktop-break"/> intuitive, and a pleasure to use.</p><div className="hero-actions"><a href="#projects" className="button primary">Explore my work <ArrowUpRight size={18}/></a><a href="#contact" className="text-link">Get in touch <ArrowRight size={16}/></a></div><div className="hero-location"><MapPin size={13}/> Jakarta, Indonesia</div></div><div className="hero-art" role="img" aria-label="Creative window with a Pretty Maria Purba portrait sticker and a code card"><span className="star one">✦</span><span className="star two">✧</span><div className="orbit"/><div className="creative-window"><div className="window-bar"><span>● ● ●</span><small>a little creative space</small><span>✧</span></div><div className="window-canvas"><p>a curious mind<br/>a creative heart.</p><img className="hero-portrait-sticker" src="/images/profile/pretty-sticker.png" alt="Pretty Maria Purba portrait sticker"/><div className="canvas-bottom"><span>IDEAS IN BLOOM</span><span>↗</span></div></div></div><div className="floating-card code-card"><Code2/><span>think. build.<br/>make it meaningful.</span></div><div className="floating-card design-card"><Palette size={18}/> A little color, a lot of care.</div><svg className="squiggle" viewBox="0 0 100 70" aria-hidden="true"><path d="M5 40C20 0 30 75 45 35S75 15 90 45"/></svg><span className="art-caption">a blend of logic & a little magic</span></div></section>
 <section className="container section about" id="about"><AchievementSlider/><div className="about-copy"><p className="section-label">01 / A LITTLE ABOUT ME</p><h2>Behind the screen,<br/>a <em>curious mind.</em></h2><p>I'm Pretty, an Information Systems student at Institut Teknologi Del. I enjoy connecting technology, design, and data to make complex things feel simpler.</p><p>From building software to researching digital government at BRIN, I believe good solutions always start with understanding people.</p><div className="badges"><span>Curious thinker</span><span>Problem solver</span><span>Lifelong learner</span></div><a className="text-link" href="/cv/CV%20Pretty%20Maria%20Purba.pdf" target="_blank" rel="noreferrer">Explore my CV <ArrowUpRight size={16}/></a></div></section>
 <section className="container section working-experiences" id="experience" aria-labelledby="experience-title">
  <div className="section-heading"><div><p className="section-label">02 / WORKING EXPERIENCES</p><h2 id="experience-title">Working <em>Experiences</em></h2></div></div>
  <ol className="experience-list">{experiences.map(experience => <li className="experience-item" key={`${experience.role}-${experience.period}`}>
   <div className="experience-date"><span>{experience.period}</span>{experience.current && <span className="experience-current">Current role</span>}</div>
   <article className="experience-card"><p className="experience-company">{experience.company}</p><h3>{experience.role}</h3><ul>{experience.contributions.map(point => <li key={point}>{point}</li>)}</ul>{experience.documents && <div className="experience-documents">{experience.documents.map(document => <a className="text-link" key={document.href} href={document.href} target="_blank" rel="noreferrer">{document.label} <ArrowUpRight size={16}/><span className="sr-only"> (new tab)</span></a>)}</div>}{experience.document && <a className="text-link" href={experience.document} target="_blank" rel="noreferrer">View documentation (PDF) <ArrowUpRight size={16}/><span className="sr-only"> (new tab)</span></a>}</article>
  </li>)}</ol>
 </section>
 <section className="section projects-section" id="projects"><div className="container"><div className="section-heading"><div><p className="section-label">03 / SELECTED WORK</p><h2>Ideas brought to <em>life.</em></h2></div></div><div className="project-grid">{visible.map((project,index) => <article className="project-card" key={project.id}><Preview index={index} image={project.image} title={project.title}/><div className="project-body"><div className="project-meta"><span>{project.role}</span><span>{project.year}</span></div><h3>{project.title}</h3><p>{project.overview}</p><div className="project-tags">{project.tags.slice(0,3).map(tag => <span key={tag}>{tag}</span>)}</div><button className="project-link" onClick={() => {setSelected(project);dialog.current?.showModal();}}>View project story <ArrowUpRight size={18}/></button></div></article>)}</div><button className="button secondary all-projects" onClick={() => setAll(!all)}>{all ? 'Show selected projects' : 'View all projects'} <ArrowRight size={16}/></button></div></section>
 <section className="container section skills" id="skills"><div><p className="section-label">04 / SKILL COMPETENCIES</p><h2>Different skills.<br/><em>One shared purpose.</em></h2></div><div className="skill-groups"><div className="skill-group"><h3 className="skill-group-title">Hard Skills</h3><div className="tools-grid">{tools.map((tool,i) => <div className={`tool-chip tone-${i%4}`} key={tool}>{i%3===0 ? <Code2/> : i%3===1 ? <Database/> : <Palette/>}<span>{tool}</span></div>)}</div></div><div className="skill-group"><h3 className="skill-group-title">Soft Skills</h3><div className="soft-skills-grid">{softSkills.map(({name, icon: Icon}, i) => <div className={`soft-skill-chip tone-${i%4}`} key={name}><Icon size={19} aria-hidden="true"/><span>{name}</span></div>)}</div></div></div></section>
 <section className="container section organizations" id="organizations" aria-labelledby="organizations-title">
  <div className="section-heading"><div><p className="section-label">05 / ORGANIZATIONS & ACTIVITIES</p><h2 id="organizations-title">Growing through<br/><em>connection and contribution.</em></h2></div></div>
  <div className="organization-carousel" role="region" aria-label="Organizations carousel"><div className="organization-carousel-controls"><button type="button" aria-label="Previous organizations" onClick={() => slideOrganizations(-1)}><ChevronLeft size={20}/></button><button type="button" aria-label="Next organizations" onClick={() => slideOrganizations(1)}><ChevronRight size={20}/></button></div><div className="organization-grid organization-track" ref={organizationTrack} tabIndex={0} aria-label="Organization list, scroll to see more">{organizations.map(organization => <article className="organization-card" key={organization.title}>
   {organization.image && <a className="organization-image" href={organization.image} target="_blank" rel="noreferrer" aria-label={`Open photo ${organization.title} (new tab)`}><img src={organization.image} alt={`Photo of ${organization.title}`} loading="lazy"/></a>}
   <div className="organization-body"><p className="organization-category">{organization.category}</p><h3>{organization.title}</h3>{organization.role && <p className="organization-role">{organization.role} | {organization.period}</p>}{organization.contributions && <ul className="organization-contributions">{organization.contributions.map(point => <li key={point}>{point}</li>)}</ul>}{(organization.document || organization.image) && <a className="text-link" href={organization.document || organization.image || undefined} target="_blank" rel="noreferrer">{organization.document ? 'View documentation (PDF)' : 'View photos'}<ArrowUpRight size={16}/><span className="sr-only"> (new tab)</span></a>}</div>
  </article>)}</div></div>
 </section>
 <section className="container section contact" id="contact"><div className="contact-panel"><div className="contact-copy"><p className="section-label">06 / LET'S MAKE SOMETHING GOOD</p><h2>Great ideas start<br/>with a <em>hello.</em></h2><p>Have an idea, a collaboration opportunity, or just want to say hello? I'd love to hear from you.</p><a className="email-link" href={`mailto:${profile.email}`}><Mail size={17}/>{profile.email}</a><a className="social-link" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={15}/></a><span className="contact-note">Good conversations lead to great things.</span></div><form onSubmit={send}><div className="form-row"><label>Name<input name="name" placeholder="Your name" autoComplete="name" required maxLength={100}/></label><label>Email<input name="email" type="email" placeholder="hello@example.com" autoComplete="email" required/></label></div><label>What's on your mind?<textarea name="message" placeholder="Share your idea or say hello here..." rows={4} required maxLength={5000}/></label><button className="button primary" type="submit">Send a message <ArrowUpRight size={18}/></button><p className="form-note" role="status">{status}</p></form></div></section></main>
 <footer className="container footer"><a className="wordmark" href="#home">Pretty Maria Purba</a><p>© {new Date().getFullYear()} {profile.name}</p></footer>
 <dialog ref={dialog} className="project-dialog" aria-labelledby="project-title" onClick={event => {if(event.target===event.currentTarget) dialog.current?.close();}}><button className="dialog-close" aria-label="Close project details" onClick={() => dialog.current?.close()}><X/></button>{selected && <><p className="section-label">PROJECT STORY / {selected.year}</p><h2 id="project-title">{selected.title}</h2><p>{selected.overview}</p><h3>Problem</h3><p>{selected.problem}</p><h3>Contributions</h3><ul>{selected.contributions.map(item => <li key={item}>{item}</li>)}</ul><h3>Results</h3><p>{selected.results}</p>{selected.competitionPhotos && <section aria-labelledby="competition-photos-title"><h3 id="competition-photos-title">Competition photos</h3><div className="competition-photos">{selected.competitionPhotos.map(photo => <a key={photo.src} href={photo.src} target="_blank" rel="noreferrer" aria-label={`${photo.alt} (open full photo in a new tab)`}><img src={photo.src} alt={photo.alt} loading="lazy"/></a>)}</div></section>}{selected.documentationUrl && <a className="text-link project-document-link" href={selected.documentationUrl} target="_blank" rel="noreferrer">View documentation <ArrowUpRight size={16}/></a>}{selected.figmaUrl && <a className="text-link project-document-link" href={selected.figmaUrl} target="_blank" rel="noreferrer">View Figma design <ArrowUpRight size={16}/></a>}{selected.github && <a className="text-link" href={selected.github} target="_blank" rel="noreferrer">View repository <ArrowUpRight size={16}/></a>}</>}</dialog></div>;
}

