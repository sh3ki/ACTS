import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight, BriefcaseBusiness, Code2, Microscope, Palette, Plus, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { departments } from '../data/institution'
import { collegePrograms, seniorHighStrands } from '../data/programs'
import { photos } from '../media'
import { ButtonLink, Closing, Photo, Reveal, SectionHeading } from '../ui'

const strandIcons = [BriefcaseBusiness, Code2, Microscope, Palette]
const collegeImages = [photos.computer, photos.classroom, photos.learning, photos.collaboration, photos.study, photos.students, photos.architecture]

function CollegeGrid() {
  return <div className="college-grid">{collegePrograms.map((program, i) => <article className="college-card" key={program.abbreviation}><div className="college-card-image"><Photo src={collegeImages[i]} alt={`Illustrative learning scene for ${program.name}`} /></div><div className="college-card-body"><h4>{program.name} <small>({program.abbreviation})</small></h4><p>{program.description}</p><div className="focus-list">{program.focusAreas.map(area => <span key={area}>{area}</span>)}</div><small className="pathway-label">POSSIBLE DIRECTIONS</small><p className="pathway-text">{program.pathways.join(' · ')}</p><Link to={`/contact?program=${encodeURIComponent(program.abbreviation)}`} className="inline-arrow" aria-label={`Inquire about ${program.name}`}><ArrowUpRight size={17} /></Link></div></article>)}</div>
}

export function AcademicsPage() {
  const [expanded, setExpanded] = useState<string | null>(null)
  return <>
    <section className="academics-hero"><div className="container academics-hero-grid"><Reveal className="academics-hero-copy"><span className="eyebrow light">FIND YOUR FUTURE AT ACTS</span><h1>Academics<br /><em className="script">Programs for Real Opportunities.</em></h1><p>Explore our Senior High School and College Programs and find the path that fits where you want to go.</p></Reveal><div className="academics-hero-image"><Photo src={photos.schoolStudent} alt="Illustrative student in a classroom" priority /><span className="academics-image-label script">Learn. Grow. Achieve.</span></div></div><div className="academic-gold-stripe" /></section>
    <section id="programs" className="section programs-section"><div className="container">
      <div className="program-intro"><div><span className="eyebrow">START WITH A STRONG FOUNDATION</span><h2 className="reference-section-title">Senior High School Programs</h2><p>Build a strong foundation for college, career, and life. Choose the strand that fits your interests and goals.</p></div></div>
      <div className="strand-grid">{seniorHighStrands.map((strand, i) => { const Icon = strandIcons[i]; return <article className="strand-card" key={strand.abbreviation}><div className="strand-top"><Icon size={28} strokeWidth={1.4} /><h3>{strand.abbreviation}</h3></div><h4>{strand.name}</h4><p>{strand.description}</p><Link to={`/contact?program=${encodeURIComponent(strand.abbreviation)}`} className="card-link">Learn More <ArrowUpRight size={17} /></Link></article> })}</div>
      <section className="college-preview" aria-labelledby="college-preview-title"><span className="eyebrow">CHOOSE YOUR PROFESSIONAL PATH</span><h2 id="college-preview-title" className="reference-section-title">College Programs</h2><p>Explore computing, business, and education pathways at ACTS.</p><CollegeGrid /></section>
      <div className="program-departments-link"><ButtonLink to="#departments" variant="light">Explore Academic Departments</ButtonLink></div>
    </div></section>
    <section className="section departments-section" id="departments"><div className="container departments-layout"><div><SectionHeading eyebrow="LEARNING WITH PURPOSE" title="Our Academic" script="Departments" intro="Explore the academic communities behind our college programs." /><div className="department-art"><Photo src={photos.library} alt="Illustrative academic library" /><span>DISCOVER · LEARN · GROW</span></div></div><div className="department-list">{departments.map((department, i) => <article className={`department-item ${expanded === department.name ? 'expanded' : ''}`} key={department.name}><button aria-expanded={expanded === department.name} onClick={() => setExpanded(expanded === department.name ? null : department.name)}><span>0{i + 1}</span><strong>{department.name.replace('Department of ', '')}</strong>{expanded === department.name ? <X size={20} /> : <Plus size={20} />}</button><AnimatePresence>{expanded === department.name && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="department-detail"><div><h4>Vision</h4><p>{department.vision}</p><h4>Mission</h4><p>{department.mission}</p></div></motion.div>}</AnimatePresence></article>)}</div></div></section>
    <Closing eyebrow="THE RIGHT PATH CAN CHANGE EVERYTHING" title="Find the Program That" script="Moves You Forward." image={photos.students} primary={{ label: 'Explore College Programs', to: '/academics#programs' }} secondary={{ label: 'Send an Inquiry', to: '/contact' }} />
  </>
}
