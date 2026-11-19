import { ArrowDown, ArrowUpRight, BookOpen, BriefcaseBusiness, Cross, GraduationCap, HeartHandshake, Lightbulb, Sparkles, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { photos } from '../media'
import { ButtonLink, Closing, Photo, Reveal, SectionHeading } from '../ui'

const reasons = [
  { icon: GraduationCap, title: 'Quality Education', description: 'Learning grounded in knowledge, curiosity, and real-world preparation.' },
  { icon: Users, title: 'Experienced Educators', description: 'Guidance from a dedicated community of teachers and mentors.' },
  { icon: HeartHandshake, title: 'Values-Centered', description: 'A culture of integrity, purpose, service, and belonging.' },
  { icon: BriefcaseBusiness, title: 'Career-Oriented', description: 'Build practical skills for what comes next.' },
]
const differences = [
  { icon: BookOpen, title: 'Academic Excellence', description: 'An environment that encourages students to think deeply and keep growing.' },
  { icon: Cross, title: 'Christian Values', description: 'A private, non-sectarian institution with a faith-rooted, values-centered culture.' },
  { icon: Lightbulb, title: 'Relevant Learning', description: 'Programs connecting classroom learning with the changing world.' },
  { icon: Sparkles, title: 'Accessible Opportunity', description: 'A welcoming place to discover the path that fits your ambitions.' },
]

export function DiscoverPage() {
  return <>
    <section className="home-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(2,38,28,.91), rgba(2,38,28,.63) 51%, rgba(2,38,28,.16)), url("${photos.campus}")` }}>
      <div className="container home-hero-inner">
        <Reveal className="home-hero-copy"><span className="eyebrow light"><span className="gold-dot" /> Welcome to ACTS Computer College</span><h1><em className="script gold">Your</em><br /><em className="script gold">Ambition</em><br />Has a Place Here<span className="gold">.</span></h1><p>Quality education. Real opportunities.<br />A community where your story takes shape.</p><div className="button-row"><ButtonLink to="/academics">Explore Academics</ButtonLink><ButtonLink to="/our-story" variant="outline">Discover ACTS</ButtonLink></div></Reveal>
        <div className="hero-side-note"><span>EST.</span><strong>1987</strong><small>Experience<br />Expertise<br />Excellence</small></div>
        <a className="hero-scroll" href="#why-acts">Scroll to explore <ArrowDown size={16} /></a>
      </div>
      <div className="hero-wave" aria-hidden="true" />
    </section>

    <section className="section why-section" id="why-acts"><div className="container">
      <div className="reasons-grid">{reasons.map((item, index) => <Reveal className="reason" key={item.title} delay={index * .08}><div className="icon-disc"><item.icon size={25} strokeWidth={1.5} /></div><h3>{item.title}</h3><p>{item.description}</p></Reveal>)}</div>
    </div></section>

    <section className="section path-section"><div className="container">
      <SectionHeading eyebrow="FIND YOUR DIRECTION" title="Choose Your Path" intro="Explore the programs designed for your future." />
      <div className="path-grid">
        <Link className="path-card" to="/academics?tab=senior-high"><Photo src={photos.schoolStudent} alt="Illustrative student in a classroom" /><div className="path-shade" /><div className="path-content"><span className="eyebrow light">01 / BUILD YOUR FOUNDATION</span><h3>Senior High<br />School</h3><p>Explore four strands that help you find your next direction.</p><span className="card-link">Explore strands <ArrowUpRight size={17} /></span></div></Link>
        <Link className="path-card" to="/academics?tab=college"><Photo src={photos.classroom} alt="Students learning together in a classroom" /><div className="path-shade" /><div className="path-content"><span className="eyebrow light">02 / SHAPE YOUR FUTURE</span><h3>College<br />Programs</h3><p>Discover degree programs designed for the world ahead.</p><span className="card-link">Explore programs <ArrowUpRight size={17} /></span></div></Link>
      </div>
    </div></section>

    <section className="section difference-section"><div className="container difference-layout"><Reveal className="difference-intro"><span className="eyebrow">MORE THAN A SCHOOL</span><h2>The ACTS <em className="script">Difference</em></h2><p>For generations, ACTS has made room for students to learn with confidence, grow with character, and move forward with purpose.</p><ButtonLink to="/our-story" variant="green">Our Story</ButtonLink></Reveal><div className="difference-grid">{differences.map((item, i) => <Reveal className="difference-item" key={item.title} delay={i * .06}><item.icon size={25} strokeWidth={1.5} /><h3>{item.title}</h3><p>{item.description}</p></Reveal>)}</div></div></section>

    <section className="section moments-section"><div className="container">
      <div className="heading-with-link"><SectionHeading eyebrow="LIFE BEYOND THE CLASSROOM" title="Moments That" script="Matter" intro="The experiences between lessons make a community feel like home." /><Link className="text-link" to="/campus-life">Explore campus life <ArrowUpRight size={19} /></Link></div>
      <div className="moments-grid"><div className="moment-image"><Photo src={photos.learning} alt="Students learning together" /><span>Learning</span></div><div className="moment-image"><Photo src={photos.collaboration} alt="Group collaborating at a table" /><span>Student Activities</span></div><div className="moment-image"><Photo src={photos.library} alt="Illustrative study space" /><span>Campus Spaces</span></div><div className="moment-image"><Photo src={photos.graduation} alt="Students sharing an educational experience" /><span>Community</span></div></div>
      
    </div></section>
    <Closing eyebrow="THE NEXT CHAPTER IS YOURS" title="Your Story Starts" script="Here." description="Join a community where every beginning holds possibility." image={photos.campusGarden} primary={{ label: 'View Admissions', to: '/admissions' }} secondary={{ label: 'Contact ACTS', to: '/contact' }} />
  </>
}
