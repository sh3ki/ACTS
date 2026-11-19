import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowRight, Check, ChevronDown, ClipboardList, GraduationCap, Mail, MessageCircle, Phone, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import { contact } from '../data/institution'
import { photos } from '../media'
import { ButtonLink, Photo, Reveal, SectionHeading } from '../ui'

const steps = [
  { title: 'Choose a Program', text: 'Browse the strands and degree programs that match your goals.', icon: Search, to: '/academics' },
  { title: 'Prepare to Inquire', text: 'Gather your questions and any information you may want to discuss.', icon: ClipboardList, to: '/contact' },
  { title: 'Contact Admissions', text: 'Ask the school about current requirements and available options.', icon: MessageCircle, to: '/contact' },
  { title: 'Confirm the Process', text: 'Follow the official enrollment guidance provided by ACTS.', icon: GraduationCap, to: '/contact' },
]
const checklist = [
  'Decide which strand or degree program interests you.',
  'Write down questions about the program and enrollment.',
  'Contact ACTS to confirm current requirements and schedules.',
  'Ask which documents apply to your situation.',
  'Keep a copy of the guidance given by the admissions office.',
]
const faqs = [
  { question: 'What programs does ACTS offer?', answer: 'ACTS offers four Senior High School strands and seven college programs. Visit the Academics page to explore the available paths.' },
  { question: 'How do I inquire about enrollment?', answer: `Reach out through the contact form, email ${contact.email}, or call ${contact.landline}. The school can guide you through the current process.` },
  { question: 'Where is ACTS Computer College located?', answer: contact.address },
  { question: 'What are the enrollment requirements?', answer: 'Requirements may depend on the program and your situation. Please confirm the current official list directly with the admissions office before preparing documents.' },
  { question: 'Is financial assistance available?', answer: 'ACTS has introduced assistance initiatives in its history. Contact the school to ask which options, if any, are currently available and whether you qualify.' },
  { question: 'How can I speak with admissions?', answer: `Email ${contact.email}, call ${contact.mobile[0]} or ${contact.mobile[1]}, or send an inquiry through our contact page.` },
]

export function AdmissionsPage() {
  const [checked, setChecked] = useState<number[]>([])
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  return <>
    <section className="admissions-hero"><div className="container admissions-hero-grid"><Reveal className="admissions-hero-text"><span className="eyebrow light">YOUR JOURNEY BEGINS HERE</span><h1>Admissions<br /><em className="script">Your Next Chapter Starts Here.</em></h1><p>Take the first step toward a brighter future. Learn how to apply, explore your options, and get ready for ACTS.</p></Reveal><div className="admissions-hero-visual"><Photo src={photos.students} alt="Illustrative photo of students together" priority /></div></div></section>
    <section className="section steps-section"><div className="container"><SectionHeading eyebrow="A SIMPLE PLACE TO START" title="Your path to" script="ACTS" intro="Here is a helpful way to plan your inquiry. For the official enrollment process, connect with the admissions office." /><div className="steps-grid">{steps.map((step, index) => <Reveal className="step-card" key={step.title} delay={index * .07}><span className="step-number">0{index + 1}</span><step.icon size={27} strokeWidth={1.5} /><h3>{step.title}</h3><p>{step.text}</p><Link to={step.to} aria-label={`${step.title}: learn more`}><ArrowRight size={19} /></Link></Reveal>)}</div></div></section>
    <section className="section admissions-options"><div className="container admission-options-grid"><Reveal className="admission-option"><div className="admission-option-image"><Photo src={photos.study} alt="Illustrative student studying" /></div><div><span className="eyebrow">SENIOR HIGH SCHOOL</span><h2>Senior High School Enrollment</h2><p>Explore ABM, ICT, STEM, and HUMSS. Contact ACTS to confirm current tuition policies, enrollment requirements, and eligibility.</p><ButtonLink to="/academics?tab=senior-high">Learn More</ButtonLink></div></Reveal><Reveal className="admission-option"><div className="admission-option-image"><Photo src={photos.students} alt="Illustrative students on campus" /></div><div><span className="eyebrow">COLLEGE PROGRAMS</span><h2>College Admissions</h2><p>Discover computing, business, and teacher education programs. Ask admissions about the current steps for your chosen degree.</p><ButtonLink to="/academics?tab=college">Learn More</ButtonLink></div></Reveal></div></section>
    <section className="section prep-section"><div className="container prep-grid"><Reveal><SectionHeading eyebrow="BEFORE YOU REACH OUT" title="A little preparation" script="goes a long way." intro="Use this optional checklist to organize your questions. These are suggestions, not official enrollment requirements." /><div className="prep-image"><Photo src={photos.study} alt="Illustrative student study materials" /></div></Reveal><Reveal className="checklist-panel"><span className="eyebrow">YOUR PERSONAL CHECKLIST</span><h3>Get ready for your <em>next step.</em></h3><div className="check-progress"><span>{checked.length} of {checklist.length} completed</span><div><span style={{ width: `${checked.length / checklist.length * 100}%` }} /></div></div>{checklist.map((item, index) => <label className="checklist-item" key={item}><input type="checkbox" checked={checked.includes(index)} onChange={() => setChecked(previous => previous.includes(index) ? previous.filter(i => i !== index) : [...previous, index])} /><span className="custom-check"><Check size={14} /></span><span>{item}</span></label>)}<p className="checklist-note">Tip: Confirm all current requirements directly with ACTS before submitting documents.</p></Reveal></div></section>
    <section className="section faq-section"><div className="container faq-layout"><div><SectionHeading eyebrow="GOOD QUESTIONS. CLEAR ANSWERS." title="Frequently Asked" script="Questions" intro="The essentials, before you take your next step." /><div className="faq-contact"><Mail size={21} /><span>Still have a question?<br /><a href={`mailto:${contact.email}`}>Write to our team <ArrowRight size={15} /></a></span></div></div><div className="faq-list">{faqs.map((faq, i) => <div className="faq-item" key={faq.question}><h3><button aria-expanded={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? null : i)}>{faq.question}<ChevronDown size={20} className={openFaq === i ? 'rotated' : ''} /></button></h3><AnimatePresence>{openFaq === i && <motion.div className="faq-answer" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}><p>{faq.answer}</p></motion.div>}</AnimatePresence></div>)}</div></div></section>
    <section className="assist-strip" style={{ backgroundImage: `linear-gradient(90deg,#083d2ef2,#083d2ec9),url("${photos.campusGarden}")` }}><div className="container"><div><Phone size={25} /><div><span className="eyebrow light">STILL HAVE QUESTIONS?</span><h2>Our Admissions Team is Here to Help.</h2></div></div><ButtonLink to="/contact">Contact Admissions</ButtonLink><ButtonLink to="/academics" variant="outline">View Academic Programs</ButtonLink></div></section>
  </>
}
