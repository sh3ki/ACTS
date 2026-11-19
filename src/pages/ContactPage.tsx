import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowUpRight, Check, Copy, Facebook, Mail, MapPin, Phone, Smartphone, Youtube } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'
import { contact } from '../data/institution'
import { collegePrograms, seniorHighStrands } from '../data/programs'
import { photos } from '../media'
import { Reveal } from '../ui'

const inquirySchema = z.object({
  name: z.string().trim().min(2, 'Please enter your full name.'),
  email: z.email('Please enter a valid email address.'),
  phone: z.string().trim().refine(value => !value || /^[+\d ()-]{7,20}$/.test(value), 'Please enter a valid phone number.'),
  type: z.string().min(1, 'Please choose an inquiry type.'),
  program: z.string().min(1, 'Please select a program or general inquiry.'),
  message: z.string().trim().min(10, 'Please write at least 10 characters.'),
})
type Inquiry = z.infer<typeof inquirySchema>
const mapUrl = `https://www.openstreetmap.org/search?query=${encodeURIComponent(contact.address)}`

export function ContactPage() {
  const [params] = useSearchParams()
  const [status, setStatus] = useState('')
  const [prepared, setPrepared] = useState('')
  const { register, handleSubmit, formState: { errors } } = useForm<Inquiry>({ resolver: zodResolver(inquirySchema), defaultValues: { name: '', email: '', phone: '', type: '', program: params.get('program') || '', message: '' } })
  const formatMessage = (data: Inquiry) => `Full Name: ${data.name}\nEmail: ${data.email}\nPhone Number: ${data.phone || 'Not provided'}\nInquiry Type: ${data.type}\nProgram of Interest: ${data.program}\n\n${data.message}`
  const onSubmit = (data: Inquiry) => {
    const body = formatMessage(data)
    setPrepared(body)
    setStatus('Your inquiry is ready. Your email application should open with a draft; you must send it yourself. If it does not open, use Copy Inquiry below.')
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(`ACTS Inquiry: ${data.type}`)}&body=${encodeURIComponent(body)}`
  }
  const copyInquiry = async () => {
    if (!prepared) return
    try {
      await navigator.clipboard.writeText(prepared)
      setStatus('Inquiry copied. Paste it into an email to actscc87@yahoo.com and send it yourself.')
    } catch (error) {
      setStatus(`Unable to copy automatically (${error instanceof Error ? error.message : 'clipboard unavailable'}). Please select and copy the inquiry text below.`)
    }
  }
  return <>
    <section className="section contact-main" style={{ backgroundImage: `linear-gradient(90deg,#f6f8f1 0%,#f6f8f1ec 44%,#f6f8f133 100%),url("${photos.campusGarden}")` }}><div className="container contact-grid"><div className="contact-details">
      <Reveal><span className="eyebrow">WE'RE HERE TO HELP</span><h1>Contact Us<br /><em className="script">We'd Love to Hear From You.</em></h1><p>For inquiries, admissions, and partnerships, feel free to reach out to us.</p></Reveal>
      <div className="contact-methods">
        <a href={`mailto:${contact.email}`}><span className="contact-icon"><Mail size={21} /></span><span><small>EMAIL</small><strong>{contact.email}</strong></span><ArrowUpRight size={19} /></a>
        <a href={`tel:${contact.landline.replace(/\D/g, '')}`}><span className="contact-icon"><Phone size={21} /></span><span><small>LANDLINE</small><strong>{contact.landline}</strong></span><ArrowUpRight size={19} /></a>
        {contact.mobile.map(number => <a key={number} href={`tel:${number}`}><span className="contact-icon"><Smartphone size={21} /></span><span><small>MOBILE</small><strong>{number}</strong></span><ArrowUpRight size={19} /></a>)}
        <a href={mapUrl} target="_blank" rel="noopener noreferrer"><span className="contact-icon"><MapPin size={21} /></span><span><small>ADDRESS</small><strong>{contact.address}</strong></span><ArrowUpRight size={19} /></a>
      </div>
      <div className="contact-social"><a href={contact.facebook} target="_blank" rel="noopener noreferrer"><Facebook size={19} /> Facebook <ArrowUpRight size={16} /></a><a href={contact.youtube} target="_blank" rel="noopener noreferrer"><Youtube size={20} /> YouTube <ArrowUpRight size={16} /></a></div>
      <div className="map-panel" role="region" aria-label="OpenStreetMap showing ACTS Computer College in Santa Cruz, Laguna"><iframe title="ACTS Computer College location map" src="https://www.openstreetmap.org/export/embed.html?bbox=121.395%2C14.255%2C121.438%2C14.305&layer=mapnik&marker=14.280%2C121.416" loading="lazy" /><a href={mapUrl} className="map-open" target="_blank" rel="noopener noreferrer">Open in OpenStreetMap <ArrowUpRight size={17} /></a></div>
    </div>
      <div className="contact-form-panel"><span className="eyebrow">SEND AN INQUIRY</span><h2>Tell us what's<br />on your <em className="script">mind.</em></h2><p>Complete the form to prepare an email draft to ACTS. This website does not send messages automatically.</p><form onSubmit={handleSubmit(onSubmit)} noValidate><div className="form-row"><div className="form-field"><label htmlFor="full-name">Full Name <span>*</span></label><input id="full-name" autoComplete="name" placeholder="Your full name" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} {...register('name')} />{errors.name && <small id="name-error" className="field-error">{errors.name.message}</small>}</div><div className="form-field"><label htmlFor="email">Email Address <span>*</span></label><input id="email" type="email" autoComplete="email" placeholder="you@example.com" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} {...register('email')} />{errors.email && <small id="email-error" className="field-error">{errors.email.message}</small>}</div></div><div className="form-field"><label htmlFor="phone">Phone Number</label><input id="phone" type="tel" autoComplete="tel" placeholder="Your contact number (optional)" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'phone-error' : undefined} {...register('phone')} />{errors.phone && <small id="phone-error" className="field-error">{errors.phone.message}</small>}</div><div className="form-row"><div className="form-field"><label htmlFor="type">Inquiry Type <span>*</span></label><select id="type" aria-invalid={!!errors.type} aria-describedby={errors.type ? 'type-error' : undefined} {...register('type')}><option value="">Select a topic</option><option>Admissions</option><option>Academic Programs</option><option>Campus Life</option><option>General Inquiry</option></select>{errors.type && <small id="type-error" className="field-error">{errors.type.message}</small>}</div><div className="form-field"><label htmlFor="program">Program of Interest <span>*</span></label><select id="program" aria-invalid={!!errors.program} aria-describedby={errors.program ? 'program-error' : undefined} {...register('program')}><option value="">Select a program</option><option value="General inquiry">General inquiry / undecided</option><optgroup label="Senior High School">{seniorHighStrands.map(program => <option value={program.abbreviation} key={program.abbreviation}>{program.abbreviation} — {program.name}</option>)}</optgroup><optgroup label="College Programs">{collegePrograms.map(program => <option value={program.abbreviation} key={program.abbreviation}>{program.abbreviation} — {program.name}</option>)}</optgroup></select>{errors.program && <small id="program-error" className="field-error">{errors.program.message}</small>}</div></div><div className="form-field"><label htmlFor="message">Your Message <span>*</span></label><textarea id="message" rows={5} placeholder="Tell us what you'd like to know..." aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined} {...register('message')} />{errors.message && <small id="message-error" className="field-error">{errors.message.message}</small>}</div><button className="button button-green submit-button" type="submit">Open email draft <Mail size={17} /></button><p className="form-disclaimer">No message is sent until you review and send it from your email app.</p></form>{status && <div className="handoff-result" role="status"><Check size={18} /><p>{status}</p></div>}{prepared && <div className="copy-area"><button className="button button-light" onClick={copyInquiry} type="button">Copy Inquiry <Copy size={17} /></button><label htmlFor="prepared-inquiry">Your inquiry text</label><textarea id="prepared-inquiry" readOnly value={prepared} rows={5} onFocus={event => event.currentTarget.select()} /></div>}</div>
    </div></section>
    <section className="contact-final"><div className="container"><span className="eyebrow light">YOUR FUTURE IS A CONVERSATION AWAY</span><h2>Every Great Journey Starts With a <em className="script">Conversation.</em></h2><p>Whether you have a question or are ready to take the next step, we're here to help.</p></div></section>
  </>
}
