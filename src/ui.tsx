import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion()
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ duration: .65, delay, ease: [0.2, 0.7, 0.2, 1] }}>{children}</motion.div>
}

export function ButtonLink({ to, children, variant = 'gold', className = '' }: { to: string; children: ReactNode; variant?: 'gold' | 'outline' | 'green' | 'light'; className?: string }) {
  const content = <>{children}<ArrowRight size={17} strokeWidth={1.8} /></>
  const classes = `button button-${variant} ${className}`
  return to.startsWith('#') ? <a className={classes} href={to}>{content}</a> : <Link className={classes} to={to}>{content}</Link>
}

export function SectionHeading({ eyebrow, title, script, intro, center = false }: { eyebrow: string; title: string; script?: string; intro?: string; center?: boolean }) {
  return <Reveal className={`section-heading ${center ? 'center' : ''}`}><span className="eyebrow">{eyebrow}</span><h2>{title} {script && <em className="script">{script}</em>}</h2>{intro && <p>{intro}</p>}</Reveal>
}

export function Closing({ eyebrow, title, script, description, image, primary, secondary }: { eyebrow: string; title: string; script?: string; description?: string; image?: string; primary: { label: string; to: string }; secondary?: { label: string; to: string } }) {
  return <section className="closing" style={image ? { backgroundImage: `linear-gradient(90deg, rgba(5,46,34,.97) 0%, rgba(5,46,34,.92) 48%, rgba(5,46,34,.45) 100%), url("${image}")` } : undefined}>
    <div className="closing-pattern" aria-hidden="true">✦</div>
    <div className="container closing-content"><Reveal><span className="eyebrow light">{eyebrow}</span><h2>{title} {script && <em className="script">{script}</em>}</h2>{description && <p>{description}</p>}<div className="button-row"><ButtonLink to={primary.to}>{primary.label}</ButtonLink>{secondary && <ButtonLink to={secondary.to} variant="outline">{secondary.label}</ButtonLink>}</div></Reveal></div>
  </section>
}

export function Photo({ src, alt, className = '', priority = false }: { src: string; alt: string; className?: string; priority?: boolean }) {
  return <img className={className} src={src} alt={alt} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : undefined} decoding="async" />
}
