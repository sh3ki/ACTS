import { lazy, Suspense, useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowRight, Facebook, Menu, X, Youtube } from 'lucide-react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { contact, institution } from './data/institution'
import { NotFoundPage } from './pages/NotFoundPage'
import logoUrl from '../logo.webp'

const DiscoverPage = lazy(() => import('./pages/DiscoverPage').then(module => ({ default: module.DiscoverPage })))
const OurStoryPage = lazy(() => import('./pages/OurStoryPage').then(module => ({ default: module.OurStoryPage })))
const AcademicsPage = lazy(() => import('./pages/AcademicsPage').then(module => ({ default: module.AcademicsPage })))
const AdmissionsPage = lazy(() => import('./pages/AdmissionsPage').then(module => ({ default: module.AdmissionsPage })))
const CampusLifePage = lazy(() => import('./pages/CampusLifePage').then(module => ({ default: module.CampusLifePage })))
const ContactPage = lazy(() => import('./pages/ContactPage').then(module => ({ default: module.ContactPage })))

export const navigation = [
  { label: 'Discover', to: '/' },
  { label: 'Our Story', to: '/our-story' },
  { label: 'Academics', to: '/academics' },
  { label: 'Admissions', to: '/admissions' },
  { label: 'Campus Life', to: '/campus-life' },
]

export function Brand({ light = false }: { light?: boolean }) {
  return <Link className={`brand ${light ? 'brand-light' : ''}`} to="/" aria-label="ACTS Computer College home">
    <span className="brand-mark"><img src={logoUrl} alt="" /></span>
    <span className="brand-name"><strong>ACTS</strong><small>COMPUTER COLLEGE</small></span>
  </Link>
}

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  useEffect(() => { setOpen(false) }, [location.pathname])
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])
  return <>
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map(item => <NavLink key={item.to} to={item.to} end={item.to === '/'} className={({ isActive }) => isActive ? 'active' : ''}>{item.label}</NavLink>)}
        </nav>
        <Link className="header-cta" to="/contact">Inquire Now <ArrowRight size={15} /></Link>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu">{open ? <X /> : <Menu />}</button>
      </div>
    </header>
    <AnimatePresence>
      {open && <motion.nav id="mobile-menu" className="mobile-nav" aria-label="Mobile navigation" initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}>
        <span className="eyebrow">Explore ACTS</span>
        {navigation.map((item, index) => <NavLink key={item.to} to={item.to} end={item.to === '/'} onClick={() => setOpen(false)}><span>0{index + 1}</span>{item.label}<ArrowRight size={20} /></NavLink>)}
        <Link className="button button-gold" to="/contact" onClick={() => setOpen(false)}>Inquire Now <ArrowRight size={17} /></Link>
      </motion.nav>}
    </AnimatePresence>
  </>
}

function Footer() {
  return <footer className="site-footer">
    <div className="container footer-main">
      <div className="footer-identity"><Brand light /><p>Learn deeply. Grow boldly.<br />Lead with purpose.</p><span className="footer-rule" /><small>{institution.phrase}</small></div>
      <div className="footer-column"><h3>Explore</h3>{navigation.map(item => <Link key={item.to} to={item.to}>{item.label}</Link>)}</div>
      <div className="footer-column"><h3>Academic paths</h3><Link to="/academics?tab=senior-high">Senior High School</Link><Link to="/academics?tab=college">College Programs</Link><Link to="/admissions">Admissions Guide</Link><Link to="/contact">Send an Inquiry</Link></div>
      <div className="footer-column footer-contact"><h3>Find us</h3><p>{contact.address}</p><a href={`mailto:${contact.email}`}>{contact.email}</a><a href={`tel:${contact.mobile[0]}`}>{contact.mobile[0]}</a><div className="social-links"><a href={contact.facebook} target="_blank" rel="noopener noreferrer" aria-label="ACTS on Facebook"><Facebook size={18} /></a><a href={contact.youtube} target="_blank" rel="noopener noreferrer" aria-label="ACTS on YouTube"><Youtube size={19} /></a></div></div>
    </div>
    <div className="footer-bottom container"><span>© {new Date().getFullYear()} ACTS Computer College. All rights reserved.</span><span>Editorial photographs are illustrative, not official ACTS images.</span><span>Santa Cruz, Laguna · Established 1987</span></div>
  </footer>
}

const pageMeta: Record<string, [string, string]> = {
  '/': ['Discover ACTS', 'Explore ACTS Computer College in Santa Cruz, Laguna. Learn deeply, grow boldly, and find your place here.'],
  '/our-story': ['Our Story', 'Discover the history, values, and people behind ACTS Computer College since 1987.'],
  '/academics': ['Academics', 'Explore Senior High School strands and college programs at ACTS Computer College.'],
  '/admissions': ['Admissions', 'Find guidance for starting your ACTS Computer College enrollment journey.'],
  '/campus-life': ['Campus Life', 'Explore the learning, community, and student experience at ACTS Computer College.'],
  '/contact': ['Contact', 'Contact ACTS Computer College in Santa Cruz, Laguna for academic and admissions inquiries.'],
}

function RouteEffects() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    const [title, description] = pageMeta[pathname] || ['Page Not Found', 'ACTS Computer College']
    document.title = `${title} | ACTS Computer College`
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta) }
    meta.content = description
    let og = document.querySelector<HTMLMetaElement>('meta[property="og:title"]')
    if (!og) { og = document.createElement('meta'); og.setAttribute('property', 'og:title'); document.head.appendChild(og) }
    og.content = document.title
    let ogDescription = document.querySelector<HTMLMetaElement>('meta[property="og:description"]')
    if (!ogDescription) { ogDescription = document.createElement('meta'); ogDescription.setAttribute('property', 'og:description'); document.head.appendChild(ogDescription) }
    ogDescription.content = description
  }, [pathname])
  return null
}

export default function App() {
  const location = useLocation()
  const reduced = useReducedMotion()
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <RouteEffects />
    <Header />
    <AnimatePresence mode="wait" initial={false}>
      <motion.main id="main-content" key={location.pathname} initial={reduced ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={reduced ? undefined : { opacity: 0, y: -8 }} transition={{ duration: .32 }}>
        <Suspense fallback={<div className="route-loading" role="status">Loading page…</div>}><Routes location={location}>
          <Route path="/" element={<DiscoverPage />} />
          <Route path="/our-story" element={<OurStoryPage />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/campus-life" element={<CampusLifePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes></Suspense>
      </motion.main>
    </AnimatePresence>
    <Footer />
  </>
}
