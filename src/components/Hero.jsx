import { site, badges, waLink } from '../data'
import Icon from './Icon'

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      {/* Background image + navy wash */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://picsum.photos/seed/lt-hero/1920/1080"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-exact-color-navy/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-exact-color-navy via-exact-color-navy/40 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 md:py-40 text-center">
        <p className="font-subtitle text-3xl md:text-4xl text-exact-color-amber mb-3">
          {site.tagline}
        </p>
        <h1 className="font-title text-4xl sm:text-5xl md:text-6xl text-white leading-tight max-w-4xl mx-auto">
          Unforgettable local trips for travellers who want the real thing
        </h1>
        <p className="mt-6 font-body text-lg md:text-xl text-cream-100 max-w-2xl mx-auto">
          Small-group day tours and getaways run by people who actually live here —
          hidden spots, great food, and zero tourist traps.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#tours"
            className="inline-flex items-center gap-2 bg-exact-color-terracotta hover:bg-terracotta-700 text-white font-body font-medium text-lg rounded-full px-8 py-3 transition-colors"
          >
            Explore tours
            <Icon name="arrow" className="w-5 h-5" />
          </a>
          <a
            href={waLink('Hi Local Travel! I’d love to book a tour.')}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-body text-lg rounded-full px-8 py-3 ring-1 ring-white/30 transition-colors"
          >
            <Icon name="whatsapp" className="w-5 h-5" filled />
            Book on WhatsApp
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {badges.map((b) => (
            <span key={b} className="inline-flex items-center gap-2 font-body text-cream-100">
              <span className="h-1.5 w-1.5 rounded-full bg-exact-color-amber" />
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
