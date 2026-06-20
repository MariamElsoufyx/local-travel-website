import { site, waLink } from '../data'
import Icon from './Icon'

export default function Contact() {
  return (
    <section id="contact" className="relative isolate overflow-hidden bg-exact-color-terracotta py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-subtitle text-3xl text-cream-100">ready when you are</p>
        <h2 className="mt-1 font-title text-3xl md:text-4xl text-white">
          Let’s plan your trip
        </h2>
        <p className="mt-4 font-body text-lg text-cream-100 max-w-2xl mx-auto">
          Message us on WhatsApp with your dates and what you’re into — we’ll do the rest.
          No accounts, no long forms, just a quick chat.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={waLink('Hi Local Travel! I’d like to plan a trip.')}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-white text-exact-color-terracotta hover:bg-cream-100 font-body font-semibold text-lg rounded-full px-8 py-3 transition-colors"
          >
            <Icon name="whatsapp" className="w-5 h-5" filled />
            {site.whatsappDisplay}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 text-white hover:text-cream-100 font-body text-lg rounded-full px-6 py-3 ring-1 ring-white/40 transition-colors"
          >
            {site.email}
          </a>
        </div>
      </div>
    </section>
  )
}
