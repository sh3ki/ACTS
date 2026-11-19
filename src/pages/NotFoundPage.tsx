import { ButtonLink } from '../ui'

export function NotFoundPage() {
  return <section className="not-found container"><span className="eyebrow">404 / PAGE NOT FOUND</span><h1>Wrong turn?<br /><em className="script">Find your way back.</em></h1><p>That page isn't here, but your ACTS journey can start again.</p><ButtonLink to="/" variant="green">Return to Discover</ButtonLink></section>
}
