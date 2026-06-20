import { useState } from 'react'
import logo from '../assets/logo-transparent.png'
import { nav, site, waLink } from '../data'
import Icon from './Icon'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-exact-color-navy/95 backdrop-blur border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex flex-shrink-0 items-center gap-2">
            <img className="h-12 w-auto" src={logo} alt="Local Travel logo" />
            <span className="hidden sm:block font-title text-xl text-exact-color-cream tracking-wide">
              {site.name}
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-body text-cream-100 hover:text-white hover:bg-white/10 rounded-md px-4 py-2 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-cream-100 hover:text-white p-2 transition-colors"
              aria-label="Instagram"
            >
              <Icon name="instagram" className="w-5 h-5" />
            </a>
            <a
              href={waLink('Hi Local Travel! I’d love to know more about your tours.')}
              target="_blank"
              rel="noreferrer"
              className="ml-2 inline-flex items-center gap-2 bg-exact-color-terracotta hover:bg-terracotta-700 text-white font-body font-medium rounded-full px-5 py-2 transition-colors"
            >
              <Icon name="whatsapp" className="w-4 h-4" filled />
              Book now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-cream-100 p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-body text-cream-100 hover:bg-white/10 rounded-md px-4 py-2"
              >
                {item.label}
              </a>
            ))}
            <a
              href={waLink('Hi Local Travel! I’d love to know more about your tours.')}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 bg-exact-color-terracotta text-white font-body rounded-full px-5 py-2"
            >
              <Icon name="whatsapp" className="w-4 h-4" filled />
              Book on WhatsApp
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
