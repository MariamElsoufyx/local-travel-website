import logo from '../assets/logo-transparent.png'
import { site, nav, categories, waLink } from '../data'
import Icon from './Icon'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-exact-color-navy text-cream-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <img src={logo} alt="Local Travel logo" className="h-11 w-auto" />
              <span className="font-title text-lg text-exact-color-cream">{site.name}</span>
            </div>
            <p className="mt-4 font-subtitle text-2xl text-exact-color-amber">{site.tagline}</p>
            <p className="mt-3 font-body text-sm text-cream-300 max-w-xs">
              Small-group local tours run by people who call this place home.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-title text-white text-sm uppercase tracking-wider">Explore</h4>
            <ul className="mt-4 space-y-2 font-body">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:text-white transition-colors">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-title text-white text-sm uppercase tracking-wider">Tours</h4>
            <ul className="mt-4 space-y-2 font-body">
              {categories.slice(0, 5).map((c) => (
                <li key={c.label}>
                  <a href="#tours" className="hover:text-white transition-colors">
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-title text-white text-sm uppercase tracking-wider">Get in touch</h4>
            <ul className="mt-4 space-y-3 font-body">
              <li>
                <a
                  href={waLink('Hi Local Travel!')}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Icon name="whatsapp" className="w-5 h-5" filled />
                  {site.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-white transition-colors">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Icon name="instagram" className="w-5 h-5" />
                  {site.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 font-body text-sm text-cream-300">
          <p>© {year} {site.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
