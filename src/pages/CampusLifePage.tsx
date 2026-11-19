import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowLeft, ArrowRight, BookOpen, HeartHandshake, Maximize2, Sparkles, Users, X } from 'lucide-react'
import { photos } from '../media'
import { ButtonLink, Photo, Reveal, SectionHeading } from '../ui'

type GalleryCategory = 'Learning' | 'Student Activities' | 'Campus Spaces' | 'Community'
const gallery: { src: string; alt: string; category: GalleryCategory }[] = [
  { src: photos.classroom, alt: 'Illustrative classroom learning scene', category: 'Learning' },
  { src: photos.students, alt: 'Illustrative students collaborating outdoors', category: 'Student Activities' },
  { src: photos.library, alt: 'Illustrative library shelves', category: 'Campus Spaces' },
  { src: photos.collaboration, alt: 'Illustrative group working together', category: 'Community' },
  { src: photos.computer, alt: 'Illustrative computer-based learning', category: 'Learning' },
  { src: photos.campusGarden, alt: 'Illustrative green academic environment', category: 'Campus Spaces' },
  { src: photos.graduation, alt: 'Illustrative student community', category: 'Student Activities' },
  { src: photos.study, alt: 'Illustrative study session', category: 'Learning' },
]
const categories = ['All Moments', 'Learning', 'Student Activities', 'Campus Spaces', 'Community'] as const

export function CampusLifePage() {
  const [category, setCategory] = useState<(typeof categories)[number]>('All Moments')
  const [selected, setSelected] = useState<number | null>(null)
  const visible = gallery.filter(image => category === 'All Moments' || image.category === category)
  useEffect(() => {
    if (selected === null) return
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') setSelected(index => index === null ? null : (index + 1) % visible.length)
      if (event.key === 'ArrowLeft') setSelected(index => index === null ? null : (index - 1 + visible.length) % visible.length)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [selected, visible.length])
  return <>
    <section className="campus-hero"><div className="container campus-hero-grid"><Reveal className="campus-hero-copy"><span className="eyebrow">EXPLORE LIFE AT ACTS</span><h1>Campus Life<br /><em className="script">More Than a Campus — A Community.</em></h1><p>Discover a vibrant student life where learning, friendships, and purpose come together.</p></Reveal><div className="campus-collage"><div><Photo src={photos.students} alt="Illustrative students together" priority /></div><div><Photo src={photos.classroom} alt="Illustrative classroom experience" priority /></div><div><Photo src={photos.collaboration} alt="Illustrative collaborative learning" priority /></div><div><Photo src={photos.campusGarden} alt="Illustrative green academic grounds" priority /></div></div></div></section>
    <section className="section experiences-section"><div className="container"><div className="experiences-grid">{[
      { title: 'Student Activities', icon: Sparkles, text: 'Explore your passions' },
      { title: 'Learning Spaces', icon: BookOpen, text: 'Room to grow' },
      { title: 'Student Development', icon: Users, text: 'Find your community' },
      { title: 'Community Engagement', icon: HeartHandshake, text: 'Make a positive impact' },
    ].map(item => <Reveal className="experience-card" key={item.title}><span className="experience-icon"><item.icon size={23} strokeWidth={1.5} /></span><div><h3>{item.title}</h3><p>{item.text}</p></div></Reveal>)}</div></div></section>
    <section className="section life-intro-section"><div className="container life-intro-grid"><div><SectionHeading eyebrow="GROW BEYOND THE CLASSROOM" title="Life at ACTS" intro="Beyond the classroom, our private non-sectarian community gives students space to connect, discover new interests, and develop the values that stay with them." /><ButtonLink to="/our-story">Our Story</ButtonLink></div><Reveal className="life-intro-photo"><Photo src={photos.collaboration} alt="Illustrative students learning together" /></Reveal></div></section>
    <section className="section gallery-section" id="gallery"><div className="container"><div className="heading-with-link"><SectionHeading eyebrow="A VISUAL JOURNAL" title="A glimpse of" script="the journey" intro="Explore the moments and spaces that inspire learning and connection." /><span className="gallery-decor">✳</span></div><p className="photo-note">These are illustrative editorial images, not verified photographs of ACTS, its students, or its campus.</p><div className="filter-list gallery-filters" aria-label="Filter gallery">{categories.map(item => <button key={item} className={category === item ? 'selected' : ''} onClick={() => { setCategory(item); setSelected(null) }} aria-pressed={category === item}>{item}</button>)}</div><motion.div layout className="gallery-grid"><AnimatePresence mode="popLayout">{visible.map((image, index) => <motion.button layout key={image.src} initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .96 }} transition={{ duration: .25 }} className={`gallery-tile gallery-tile-${index % 5}`} onClick={() => setSelected(index)} aria-label={`View image: ${image.alt}`}><Photo src={image.src} alt={image.alt} /><span><span>{image.category}</span><Maximize2 size={20} /></span></motion.button>)}</AnimatePresence></motion.div></div></section>
    <section className="community-section"><div className="container community-grid"><Reveal><span className="eyebrow light">YOUR PLACE IS WAITING</span><h2>Be Part of <em className="script">Something Bigger.</em></h2><p>Discover a community that believes in your journey.</p><ButtonLink to="/admissions">Explore Admissions</ButtonLink></Reveal><div className="community-photo"><Photo src={photos.campusGarden} alt="Illustrative green academic environment" /></div></div></section>
    <Dialog.Root open={selected !== null} onOpenChange={open => { if (!open) setSelected(null) }}><Dialog.Portal><Dialog.Overlay className="dialog-overlay lightbox-overlay" /><Dialog.Content className="lightbox" aria-describedby="lightbox-description"><Dialog.Title className="sr-only">Gallery image</Dialog.Title><Dialog.Close className="lightbox-close" aria-label="Close image"><X /></Dialog.Close>{selected !== null && <><img src={visible[selected].src} alt={visible[selected].alt} /><p id="lightbox-description">{visible[selected].alt} · {selected + 1} of {visible.length}</p><button className="lightbox-prev" onClick={() => setSelected((selected - 1 + visible.length) % visible.length)} aria-label="Previous image"><ArrowLeft /></button><button className="lightbox-next" onClick={() => setSelected((selected + 1) % visible.length)} aria-label="Next image"><ArrowRight /></button></>}</Dialog.Content></Dialog.Portal></Dialog.Root>
  </>
}
